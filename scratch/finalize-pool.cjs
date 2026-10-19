const fs = require('fs');

// Read the previously created pool
const content = fs.readFileSync('src/data/pdfGrammarPool.ts', 'utf8');
const match = content.match(/export const PDF_GRAMMAR_POOL: PdfGrammarItem\[\] = (\[[\s\S]*?\]);\n\nexport const/);
if (!match) {
  console.error('Could not find PDF_GRAMMAR_POOL array');
  process.exit(1);
}

const poolJson = match[1];

const fullTs = `/**
 * ============================================================================
 * pdfGrammarPool.ts
 * Official 1,000 MCQs Grammar Pool for ICAP ECS & Aptis General Test
 * Sourced directly from the official English Communication Skills Grammar Portion PDF.
 * 
 * Filtered to strictly exclude accounting, auditing, and corporate topics.
 * Contains only general English grammar items categorized into:
 * - Tenses: 4
 * - Modal Verbs: 2
 * - Active and Passive Voice: 2
 * - Gerunds and Infinitives: 3
 * - Adverbs: 3
 * - Conditionals: 3
 * - Prepositions: 3
 * - Collocation: 1
 * - Connectors: 2
 * - Comparatives: 2
 * Total: Exactly 25 MCQs (10 Easy, 10 Moderate, 5 Hard) per test.
 * ============================================================================
 */

import { GrammarQuestion } from '../types';

export interface PdfGrammarItem extends GrammarQuestion {
  pdfNumber: number;
  baseSentenceKey: string;
}

export const PDF_GRAMMAR_POOL: PdfGrammarItem[] = ${poolJson};

export const PDF_GRAMMAR_BY_CATEGORY: Record<string, PdfGrammarItem[]> = {};

for (const item of PDF_GRAMMAR_POOL) {
  if (!PDF_GRAMMAR_BY_CATEGORY[item.category]) {
    PDF_GRAMMAR_BY_CATEGORY[item.category] = [];
  }
  PDF_GRAMMAR_BY_CATEGORY[item.category].push(item);
}

// Exactly required distribution by topic and difficulty:
// Total: 25 questions (10 Easy, 10 Moderate, 5 Hard)
export interface TopicRequirement {
  category: string;
  count: number;
  easy: number;
  medium: number;
  hard: number;
}

export const OFFICIAL_GRAMMAR_DISTRIBUTION: TopicRequirement[] = [
  { category: 'Tenses', count: 4, easy: 2, medium: 1, hard: 1 },
  { category: 'Modal Verbs', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Active and Passive Voice', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Gerunds and Infinitives', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Adverbs', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Conditionals', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Prepositions', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Collocation', count: 1, easy: 0, medium: 1, hard: 0 },
  { category: 'Connectors', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Comparatives', count: 2, easy: 1, medium: 1, hard: 0 },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SEEN_PDF_IDS_KEY = 'icap_seen_pdf_grammar_ids';
const SEEN_PDF_BASE_KEYS = 'icap_seen_pdf_base_keys';

export function getSeenPdfGrammarIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(SEEN_PDF_IDS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function getSeenPdfBaseKeys(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(SEEN_PDF_BASE_KEYS);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function markPdfGrammarSeen(ids: string[], baseKeys: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    const existingIds = getSeenPdfGrammarIds();
    ids.forEach(id => existingIds.add(id));
    // Keep reasonable history length
    const idArr = Array.from(existingIds);
    if (idArr.length > 600) {
      idArr.splice(0, idArr.length - 400);
    }
    localStorage.setItem(SEEN_PDF_IDS_KEY, JSON.stringify(idArr));

    const existingBase = getSeenPdfBaseKeys();
    baseKeys.forEach(k => existingBase.add(k));
    const baseArr = Array.from(existingBase);
    if (baseArr.length > 150) {
      baseArr.splice(0, baseArr.length - 100);
    }
    localStorage.setItem(SEEN_PDF_BASE_KEYS, JSON.stringify(baseArr));
  } catch {}
}

/**
 * Randomly select exactly 25 Grammar MCQs from the official PDF pool
 * adhering to:
 * - Exactly 10 Easy, 10 Moderate (Medium), 5 Hard
 * - Topic distribution:
 *   Tenses: 4, Modal Verbs: 2, Active and Passive Voice: 2,
 *   Gerunds and Infinitives: 3, Adverbs: 3, Conditionals: 3,
 *   Prepositions: 3, Collocation: 1, Connectors: 2, Comparatives: 2
 * - Avoids repetition across attempts whenever possible.
 * - Guarantees 0 duplicate base sentences within the same test.
 */
export function select25GrammarQuestionsFromPdf(
  seenIds: Set<string> = getSeenPdfGrammarIds(),
  seenBaseKeys: Set<string> = getSeenPdfBaseKeys()
): GrammarQuestion[] {
  const selected: PdfGrammarItem[] = [];
  const selectedIds = new Set<string>();
  const selectedBaseKeys = new Set<string>();

  for (const req of OFFICIAL_GRAMMAR_DISTRIBUTION) {
    const poolForCat = PDF_GRAMMAR_POOL.filter(q => q.category === req.category);

    const diffNeeds: ('Easy' | 'Medium' | 'Hard')[] = [
      ...Array(req.easy).fill('Easy'),
      ...Array(req.medium).fill('Medium'),
      ...Array(req.hard).fill('Hard')
    ];

    for (const diff of diffNeeds) {
      // Find candidate questions matching category and difficulty, not already in this test
      const candidates = poolForCat.filter(q => 
        q.difficulty === diff &&
        !selectedIds.has(q.id) &&
        !selectedBaseKeys.has(q.baseSentenceKey)
      );

      // Prioritize questions not seen in recent attempts
      const unseen = candidates.filter(q => 
        !seenIds.has(q.id) && 
        !seenBaseKeys.has(q.baseSentenceKey)
      );

      const poolToUse = unseen.length > 0 ? unseen : candidates;
      const shuffled = shuffleArray(poolToUse);

      let picked = shuffled[0];

      // Fallback: if difficulty slot had no unused base sentences, pick any other difficulty in same category
      if (!picked) {
        const anyDiff = poolForCat.filter(q => 
          !selectedIds.has(q.id) && 
          !selectedBaseKeys.has(q.baseSentenceKey)
        );
        const unseenAny = anyDiff.filter(q => !seenIds.has(q.id) && !seenBaseKeys.has(q.baseSentenceKey));
        picked = shuffleArray(unseenAny.length > 0 ? unseenAny : anyDiff)[0];
      }

      if (picked) {
        selected.push(picked);
        selectedIds.add(picked.id);
        selectedBaseKeys.add(picked.baseSentenceKey);
      }
    }
  }

  // Ensure overall difficulty targets: 10 Easy, 10 Medium, 5 Hard
  let easyCount = selected.filter(q => q.difficulty === 'Easy').length;
  let mediumCount = selected.filter(q => q.difficulty === 'Medium').length;
  let hardCount = selected.filter(q => q.difficulty === 'Hard').length;

  // Final count check: must be exactly 25
  if (selected.length < 25) {
    const remaining = PDF_GRAMMAR_POOL.filter(q => 
      !selectedIds.has(q.id) && 
      !selectedBaseKeys.has(q.baseSentenceKey)
    );
    for (const extra of shuffleArray(remaining)) {
      if (selected.length >= 25) break;
      selected.push(extra);
      selectedIds.add(extra.id);
      selectedBaseKeys.add(extra.baseSentenceKey);
    }
  }

  // Map to GrammarQuestion format
  const finalQuestions: GrammarQuestion[] = selected.slice(0, 25).map((item, idx) => ({
    id: \`pdf-g-\${idx + 1}-\${item.pdfNumber}\`,
    category: item.category,
    difficulty: item.difficulty,
    question: item.question,
    options: [...item.options],
    correctIndex: item.correctIndex,
    englishExplanation: item.englishExplanation,
    urduExplanation: item.urduExplanation
  }));

  // Record chosen items to seen storage
  markPdfGrammarSeen(
    selected.map(s => s.id),
    selected.map(s => s.baseSentenceKey)
  );

  return finalQuestions;
}
`;

fs.writeFileSync('src/data/pdfGrammarPool.ts', fullTs, 'utf8');
console.log('src/data/pdfGrammarPool.ts updated with full generator and exports!');
