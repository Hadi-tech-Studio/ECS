// Official ICAP ECS Reading Question Pools
import { 
  ReadingSection1, 
  ReadingSection2, 
  ReadingSection3, 
  ReadingSection4 
} from '../types';
import {
  READING_SECTION_1_BANK,
  READING_SECTION_2_BANK,
  READING_SECTION_3_BANK,
  READING_SECTION_4_BANK
} from './readingQuestionBank';

export const EXPANDED_READING_SECTION_1: ReadingSection1[] = READING_SECTION_1_BANK;
export const EXPANDED_READING_SECTION_2: ReadingSection2[] = READING_SECTION_2_BANK;
export const EXPANDED_READING_SECTION_3: ReadingSection3[] = READING_SECTION_3_BANK;
export const EXPANDED_READING_SECTION_4: ReadingSection4[] = READING_SECTION_4_BANK;
