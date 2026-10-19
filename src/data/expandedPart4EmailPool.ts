import { WritingPart4 } from '../types';
import { 
  PDF_TOPIC_PAIRS, 
  createPart4FromPdfTopics, 
  selectFreshPdfPart4EmailTask, 
  getSeenPdfEmailTopics,
  PDF_FORMAL_EMAIL_TOPICS,
  PDF_INFORMAL_EMAIL_TOPICS
} from './aptisPdfEmailTopics';

/**
 * Checks if a Part 4 task contains the banned default question
 * (such as Central Community Library, Zoom for 3 months, 15% fee increase, Mr. Harrison)
 * or prohibited accounting/auditing topics.
 */
export function isPart4DefaultOrBanned(part4: {
  contextNotice?: string;
  taskA?: { prompt?: string };
  taskB?: { prompt?: string };
  clubName?: string;
  scenarioTopic?: string;
}): boolean {
  if (!part4) return true;
  const text = `${part4.clubName || ''} ${part4.scenarioTopic || ''} ${part4.contextNotice || ''} ${part4.taskA?.prompt || ''} ${part4.taskB?.prompt || ''}`.toLowerCase();
  
  // Banned default prompts
  const isDefault = (
    text.includes('central community library') ||
    text.includes('zoom for the next three months') ||
    text.includes('shifted online via zoom') ||
    text.includes('mr. harrison') ||
    (text.includes('15%') && text.includes('membership subscription')) ||
    (text.includes('city book club') && text.includes('zoom'))
  );

  // Banned accounting/auditing topics per user instruction
  const isAccountingOrAuditing = (
    text.includes('audit') ||
    text.includes('auditor') ||
    text.includes('auditing') ||
    text.includes('chartered accountant') ||
    text.includes('ledger') ||
    text.includes('ifrs') ||
    text.includes('isa 505') ||
    text.includes('isa 230') ||
    text.includes('balance sheet') ||
    text.includes('statutory financial') ||
    text.includes('unrecorded liability') ||
    text.includes('petty cash voucher')
  );

  return isDefault || isAccountingOrAuditing;
}

/**
 * Canonical pool of 30 authentic Aptis General Part 4 email tasks generated
 * strictly from the 30 Formal and 20 Informal email topics in the attached PDF.
 * Free of accounting or auditing topics.
 */
export const EXPANDED_PART4_EMAIL_POOL: WritingPart4[] = PDF_TOPIC_PAIRS.map(pair => 
  createPart4FromPdfTopics(pair.formalNum, pair.informalNum)
);

/**
 * Select a fresh, non-repeating Part 4 email task strictly from the PDF topics.
 * Guarantees a different random topic for every new test and avoids repetition across attempts.
 */
export function selectFreshPart4EmailTask(seenSet?: Set<string | number>): WritingPart4 {
  return selectFreshPdfPart4EmailTask(seenSet);
}
