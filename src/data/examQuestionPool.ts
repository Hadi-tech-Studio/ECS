// Question data cleared - awaiting new question bank upload
import { 
  GrammarQuestion, 
  VocabWordMatchItem, 
  VocabDefinitionItem, 
  VocabCollocationItem, 
  ReadingSection1, 
  ReadingSection2, 
  ReadingSection3, 
  ReadingSection4,
  AptisWritingModule
} from '../types';
import { IcapCoreCategory } from './icapCoreGrammarPool';
import { PDF_GRAMMAR_POOL } from './pdfGrammarPool';
import { VOCABULARY_QUESTION_BANK } from './vocabularyQuestionBank';
import {
  READING_SECTION_1_BANK,
  READING_SECTION_2_BANK,
  READING_SECTION_3_BANK,
  READING_SECTION_4_BANK
} from './readingQuestionBank';

export function mapToIcapCategory(cat: string = '', questionText: string = ''): IcapCoreCategory {
  const c = cat.toLowerCase();
  const q = questionText.toLowerCase();

  if (c.includes('tenses') || c.includes('time') || q.includes('yesterday') || q.includes('tomorrow') || q.includes('since')) return 'Tenses';
  if (c.includes('modal') || c.includes('auxiliary') || q.includes('must') || q.includes('should') || q.includes('might') || q.includes('could')) return 'Modal Conditionals';
  if (c.includes('passive') || c.includes('voice') || q.includes('was conducted') || q.includes('been verified') || q.includes('were inspected')) return 'Active / Passive';
  if (c.includes('relative') || c.includes('clause') || q.includes('who') || q.includes('whom') || q.includes('whose') || q.includes('which') || q.includes('where')) return 'Relative Clauses';
  if (c.includes('inversion') || q.includes('seldom') || q.includes('rarely') || q.includes('scarcely') || q.includes('not only') || q.includes('little did')) return 'Inversions';
  if (c.includes('subjunctive') || q.includes('vital that') || q.includes('essential that') || q.includes('crucial that') || q.includes('demand that') || q.includes('be present')) return 'Subjunctive';
  if (c.includes('synonym') || q.includes('closest in meaning') || q.includes('synonymous')) return 'Synonyms';
  if (c.includes('antonym') || q.includes('opposite in meaning') || q.includes('antonymous')) return 'Antonyms';
  if (c.includes('collocation') || c.includes('idiom') || q.includes('make a decision') || q.includes('take into account') || q.includes('bear in mind')) return 'Collocations';
  if (c.includes('article') || c.includes('determiner') || q.includes('a ') || q.includes('an ') || q.includes('the ') || q.includes('zero article')) return 'Articles';
  if (c.includes('verb') || c.includes('gerund') || c.includes('infinitive') || c.includes('causative') || c.includes('used to') || q.includes('look forward to')) return 'Verbs';

  return 'Parts of Speech';
}

export const EXPANDED_GRAMMAR_POOL: GrammarQuestion[] = PDF_GRAMMAR_POOL;
export const MASTER_GRAMMAR_POOL: GrammarQuestion[] = PDF_GRAMMAR_POOL;
export const UNIQUE_GRAMMAR_POOL: GrammarQuestion[] = PDF_GRAMMAR_POOL;

// Official Vocabulary Pools populated strictly from 750 authentic questions
export const EXPANDED_VOCAB_MATCHING_POOL: VocabWordMatchItem[] = VOCABULARY_QUESTION_BANK
  .filter(q => q.taskType === 'synonym-matching')
  .map(q => ({
    id: q.id,
    targetWord: q.prompt,
    correctMatch: q.correctAnswer,
    options: [...q.options],
    explanation: q.explanation,
    urduExplanation: q.urduExplanation
  }));

export const EXPANDED_VOCAB_DEFINITIONS_POOL: VocabDefinitionItem[] = VOCABULARY_QUESTION_BANK
  .filter(q => q.taskType === 'definition-matching')
  .map(q => ({
    id: q.id,
    definition: q.prompt,
    correctWord: q.correctAnswer,
    options: [...q.options],
    explanation: q.explanation,
    urduExplanation: q.urduExplanation
  }));

export const EXPANDED_VOCAB_COLLOCATIONS_POOL: VocabCollocationItem[] = VOCABULARY_QUESTION_BANK
  .filter(q => q.taskType === 'collocation-matching')
  .map(q => ({
    id: q.id,
    sentence: q.prompt,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    urduExplanation: q.urduExplanation
  }));

export const EXPANDED_VOCAB_SENTENCE_POOL: VocabCollocationItem[] = VOCABULARY_QUESTION_BANK
  .filter(q => q.taskType === 'sentence-completion')
  .map(q => ({
    id: q.id,
    sentence: q.prompt,
    options: [...q.options],
    correctIndex: q.correctIndex,
    explanation: q.explanation,
    urduExplanation: q.urduExplanation
  }));

export const EXPANDED_VOCAB_CONTEXT_POOL: VocabWordMatchItem[] = VOCABULARY_QUESTION_BANK
  .filter(q => q.taskType === 'meaning-in-context')
  .map(q => ({
    id: q.id,
    targetWord: q.prompt,
    correctMatch: q.correctAnswer,
    options: [...q.options],
    explanation: q.explanation,
    urduExplanation: q.urduExplanation
  }));

export const EXPANDED_READING_SECTIONS: {
  section1: ReadingSection1[];
  section2: ReadingSection2[];
  section3: ReadingSection3[];
  section4: ReadingSection4[];
} = {
  section1: READING_SECTION_1_BANK,
  section2: READING_SECTION_2_BANK,
  section3: READING_SECTION_3_BANK,
  section4: READING_SECTION_4_BANK
};

export const EXPANDED_WRITING_MODULES: AptisWritingModule[] = [];
