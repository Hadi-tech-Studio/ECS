import { VocabWordMatchItem, VocabDefinitionItem, VocabCollocationItem } from '../types';
import rawPoolData from './pdfVocabulary1000Pool.json';

export interface RawPdfVocabQuestion {
  id: string;
  num: number;
  category: 'Word Definition' | 'Word Usage' | 'Word Combination' | 'Word Matching';
  difficulty: 'Easy' | 'Moderate' | 'Difficult';
  text: string;
  options: string[];
  correctLetter: string;
  correctIndex: number;
  correctAnswer: string;
}

export interface PdfVocabularyPoolData {
  defQuestions: RawPdfVocabQuestion[];
  usageQuestions: RawPdfVocabQuestion[];
  collocQuestions: RawPdfVocabQuestion[];
  matchQuestions: RawPdfVocabQuestion[];
}

export const PDF_VOCABULARY_1000: PdfVocabularyPoolData = rawPoolData as PdfVocabularyPoolData;

export const SEEN_PDF_VOCAB_STORAGE_KEY = 'icap_seen_pdf_vocab_ids';

// In-memory cache to guarantee ultra-fast synchronous lookup
let memorySeenVocabIds: Set<string> | null = null;

export function getSeenPdfVocabIds(): Set<string> {
  if (memorySeenVocabIds) return memorySeenVocabIds;
  if (typeof window === 'undefined') {
    memorySeenVocabIds = new Set<string>();
    return memorySeenVocabIds;
  }
  try {
    const raw = localStorage.getItem(SEEN_PDF_VOCAB_STORAGE_KEY);
    if (!raw) {
      memorySeenVocabIds = new Set<string>();
      return memorySeenVocabIds;
    }
    const arr = JSON.parse(raw);
    memorySeenVocabIds = new Set<string>(Array.isArray(arr) ? arr : []);
    return memorySeenVocabIds;
  } catch {
    memorySeenVocabIds = new Set<string>();
    return memorySeenVocabIds;
  }
}

export function saveSeenPdfVocabIds(seenSet: Set<string>): void {
  memorySeenVocabIds = seenSet;
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SEEN_PDF_VOCAB_STORAGE_KEY, JSON.stringify(Array.from(seenSet)));
  } catch (e) {
    console.warn('Failed to persist seen PDF vocab IDs:', e);
  }
}

export function clearSeenPdfVocabIds(): void {
  memorySeenVocabIds = new Set<string>();
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(SEEN_PDF_VOCAB_STORAGE_KEY);
    } catch {}
  }
}

// Fisher-Yates array shuffle
function shuffle<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Transforms a raw PDF Match Question into Aptis VocabWordMatchItem
 */
function toVocabWordMatchItem(q: RawPdfVocabQuestion): VocabWordMatchItem {
  const targetWord = q.text
    .replace(/^Choose the closest synonym of\s+/i, '')
    .replace(/\.$/, '')
    .trim();

  return {
    id: q.id,
    targetWord,
    correctMatch: q.correctAnswer,
    options: [...q.options],
    explanation: `The closest synonym for "${targetWord}" is "${q.correctAnswer}".`,
    urduExplanation: `لفظ "${targetWord}" کا ہم معنی (synonym) لفظ "${q.correctAnswer}" ہے۔`
  };
}

/**
 * Transforms a raw PDF Definition Question into Aptis VocabDefinitionItem
 */
function toVocabDefinitionItem(q: RawPdfVocabQuestion): VocabDefinitionItem {
  return {
    id: q.id,
    definition: q.text,
    correctWord: q.correctAnswer,
    options: [...q.options],
    explanation: `The term matching the definition "${q.text}" is "${q.correctAnswer}".`,
    urduExplanation: `تعریف "${q.text}" کے مطابق درست لفظ "${q.correctAnswer}" ہے۔`
  };
}

/**
 * Transforms a raw PDF Collocation Question into Aptis VocabCollocationItem
 */
function toVocabCollocationItem(q: RawPdfVocabQuestion): VocabCollocationItem {
  const cleanSentence = q.text
    .replace(/^Choose the word or phrase that best completes the collocation:\s*/i, '')
    .trim();

  return {
    id: q.id,
    sentence: cleanSentence,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: `The natural word combination/collocation is: "${cleanSentence.replace('____', q.correctAnswer)}".`,
    urduExplanation: `درست انگریزی کولکیشن کے لیے "${q.correctAnswer}" کا انتخاب کیا جاتا ہے۔`
  };
}

/**
 * Transforms a raw PDF Usage Question into Aptis VocabCollocationItem
 */
function toVocabSentenceItem(q: RawPdfVocabQuestion): VocabCollocationItem {
  return {
    id: q.id,
    sentence: q.text,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: `In this sentence, the appropriate word is "${q.correctAnswer}".`,
    urduExplanation: `جملے کے سیاق و سباق کے اعتبار سے درست لفظ "${q.correctAnswer}" ہے۔`
  };
}

/**
 * Helper to select exactly N questions of a specific difficulty from a question list,
 * avoiding already seen questions until the pool is exhausted, then resetting that bucket.
 */
function pickBucket(
  pool: RawPdfVocabQuestion[],
  difficulty: 'Easy' | 'Moderate' | 'Difficult',
  count: number,
  seenSet: Set<string>,
  excludeIdsInCurrentAttempt: Set<string>
): RawPdfVocabQuestion[] {
  const diffPool = pool.filter(q => q.difficulty === difficulty);
  let available = diffPool.filter(q => !seenSet.has(q.id) && !excludeIdsInCurrentAttempt.has(q.id));

  // If not enough unseen items remain in this difficulty bucket, reset this bucket in seenSet
  if (available.length < count) {
    diffPool.forEach(q => seenSet.delete(q.id));
    available = diffPool.filter(q => !excludeIdsInCurrentAttempt.has(q.id));
  }

  const shuffled = shuffle(available);
  const selected = shuffled.slice(0, count);

  // Fallback if somehow still short
  if (selected.length < count) {
    const remainingNeeded = count - selected.length;
    const others = diffPool.filter(q => !selected.some(s => s.id === q.id));
    selected.push(...shuffle(others).slice(0, remainingNeeded));
  }

  // Mark selected items as seen and reserve for current attempt
  selected.forEach(q => {
    seenSet.add(q.id);
    excludeIdsInCurrentAttempt.add(q.id);
  });

  return selected;
}

export interface SelectedOfficialVocabulary {
  vocabWordMatching: VocabWordMatchItem[];      // Task 1: Word Matching (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabDefinitions: VocabDefinitionItem[];       // Task 2: Word Definitions (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabCollocations: VocabCollocationItem[];     // Task 3: Combinations / Collocations (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabSentenceCompletion: VocabCollocationItem[]; // Task 4: Word Usage (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
  vocabContextMatching: VocabWordMatchItem[];   // Task 5: Context Matching (5 MCQs: 2 Easy, 2 Moderate, 1 Difficult)
}

/**
 * Selects 25 official vocabulary questions strictly from the 1,000 PDF questions:
 * - 5 MCQs per category/task: exactly 2 Easy, 2 Moderate, 1 Difficult (Hard).
 * - Randomizes questions on every test attempt.
 * - Tracks seen questions in localStorage to avoid repetition until all PDF questions are used.
 */
export function selectOfficialPdfVocabulary(): SelectedOfficialVocabulary {
  const seenSet = getSeenPdfVocabIds();
  const currentAttemptReservedIds = new Set<string>();

  // Task 1: Word Matching (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task1Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 2: Word Definitions (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task2Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.defQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 3: Word Combination / Collocations (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task3Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.collocQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 4: Word Usage / Sentence Completion (5 items: 2 Easy, 2 Moderate, 1 Difficult)
  const task4Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.usageQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Task 5: Context Matching / Synonyms (5 items: 2 Easy, 2 Moderate, 1 Difficult from distinct matchQuestions)
  const task5Raw = [
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Easy', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Moderate', 2, seenSet, currentAttemptReservedIds),
    ...pickBucket(PDF_VOCABULARY_1000.matchQuestions, 'Difficult', 1, seenSet, currentAttemptReservedIds)
  ];

  // Persist updated seen IDs
  saveSeenPdfVocabIds(seenSet);

  return {
    vocabWordMatching: shuffle(task1Raw).map(toVocabWordMatchItem),
    vocabDefinitions: shuffle(task2Raw).map(toVocabDefinitionItem),
    vocabCollocations: shuffle(task3Raw).map(toVocabCollocationItem),
    vocabSentenceCompletion: shuffle(task4Raw).map(toVocabSentenceItem),
    vocabContextMatching: shuffle(task5Raw).map(toVocabWordMatchItem)
  };
}
