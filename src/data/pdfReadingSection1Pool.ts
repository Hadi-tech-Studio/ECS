import { ReadingSection1 } from '../types';

export const PDF_READING_SECTION_1_POOL: ReadingSection1[] = [
  {
    id: 's1-placeholder',
    title: 'Placeholder Section',
    introduction: 'This is a placeholder for the reading section 1 pool.',
    paragraphs: [
      {
        textBefore: 'This is a sentence.',
        gapId: 'gap1',
        options: ['option1', 'option2'],
        correctIndex: 0
      }
    ],
    explanations: {
      gap1: { english: 'Explanation', urdu: 'وضاحت' }
    }
  }
];
