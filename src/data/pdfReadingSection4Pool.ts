// Official ICAP ECS Reading Section 4 Pool
import { ReadingSection4 } from '../types';
import { READING_SECTION_4_BANK } from './readingQuestionBank';

export interface PdfLongTextQuestion extends ReadingSection4 {
  workbookQuestionNumber?: number;
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

export const PDF_READING_SECTION_4_POOL: PdfLongTextQuestion[] = READING_SECTION_4_BANK;

export function isReadingSection4AccountingOrBanned(topicOrTitle: string): boolean {
  return false;
}

export function ensureSixToSevenParagraphs(item: ReadingSection4): ReadingSection4 {
  return item;
}

export function selectFreshPdfReadingSection4(seenIds?: Set<string>): ReadingSection4 {
  const seen = seenIds || new Set<string>();
  const unseen = PDF_READING_SECTION_4_POOL.filter(item => !seen.has(item.id));
  
  const chosen = unseen.length > 0
    ? unseen[Math.floor(Math.random() * unseen.length)]
    : PDF_READING_SECTION_4_POOL[Math.floor(Math.random() * PDF_READING_SECTION_4_POOL.length)];

  return chosen || PDF_READING_SECTION_4_POOL[0];
}
