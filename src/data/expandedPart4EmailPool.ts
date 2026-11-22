// ICAP ECS Exam System - Part 4 Email Pool
// Sourced from official Writing Question Bank (35 authentic tests)
import { WritingPart4 } from '../types';
import { WRITING_TESTS } from './writingQuestionBank';

export function isPart4DefaultOrBanned(part4: {
  contextNotice?: string;
  taskA?: { prompt?: string };
  taskB?: { prompt?: string };
  clubName?: string;
  scenarioTopic?: string;
}): boolean {
  if (!part4) return true;
  if (!part4.contextNotice || part4.contextNotice.length < 20) return true;
  if (!part4.taskA?.prompt || !part4.taskB?.prompt) return true;
  return false;
}

export const EXPANDED_PART4_EMAIL_POOL: WritingPart4[] = WRITING_TESTS.map(t => t.part4);

export function selectFreshPart4EmailTask(seenSet?: Set<string | number>): WritingPart4 {
  if (EXPANDED_PART4_EMAIL_POOL.length === 0) {
    return {
      id: 'empty-w-part4',
      clubName: '',
      contextNotice: '',
      taskA: { prompt: '', minWords: 40, maxWords: 60, sampleAnswer: '' },
      taskB: { prompt: '', minWords: 120, maxWords: 150, sampleAnswer: '' }
    };
  }

  // Filter for unseen
  const unseen = seenSet 
    ? EXPANDED_PART4_EMAIL_POOL.filter(p => !seenSet.has(p.id) && !seenSet.has(p.clubName))
    : EXPANDED_PART4_EMAIL_POOL;

  const pool = unseen.length > 0 ? unseen : EXPANDED_PART4_EMAIL_POOL;
  const selected = pool[Math.floor(Math.random() * pool.length)];
  return { ...selected };
}
