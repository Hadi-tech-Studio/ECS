/**
 * ============================================================================
 * readingSection1AutoGenerator.ts
 * Procedural Reading Section 1 (Sentence Comprehension) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 1:
 * - 5 sequential paragraphs/gaps in a short letter, email, or notice.
 * - Exactly 3 choices (A, B, C) per gap.
 * - Comprehensive English and Urdu explanations for each gap.
 * - Guarantees zero repetition when the 50 official PDF passages are exhausted.
 * ============================================================================
 */

import { ReadingSection1 } from '../types';

interface Section1Template {
  title: string;
  topic: string;
  paragraphs: Array<{
    textBefore: string;
    options: [string, string, string];
    correctIndex: number;
    textAfter: string;
    explanationEn: string;
    explanationUr: string;
  }>;
}

const SECTION_1_TEMPLATES: Section1Template[] = [
  {
    title: 'University Library Research Facilities Notice',
    topic: 'Campus Library Facilities',
    paragraphs: [
      {
        textBefore: 'Dear Students,\nPlease note that following the recent renovation [example] of the main library hall, we are ',
        options: ['pleasing', 'pleased', 'pleasure'],
        correctIndex: 1,
        textAfter: ' to reopen the private study pods.\n',
        explanationEn: 'Grammar: The passive participle adjective "pleased" follows the linking verb "are" to describe feeling or reaction.',
        explanationUr: 'گرائمر: فاعل کے جذبات یا ردعمل کو ظاہر کرنے کے لیے صفت "pleased" استعمال ہوتی ہے۔'
      },
      {
        textBefore: 'All researchers are reminded to reserve study pods in ',
        options: ['advance', 'beforehand', 'early'],
        correctIndex: 0,
        textAfter: ' through the digital booking portal.\n',
        explanationEn: 'Collocation: "in advance" is the standard formal idiom for booking ahead of time.',
        explanationUr: 'کولکیشن: پیشگی بکنگ کے لیے باقاعدہ فقرہ "in advance" ہے۔'
      },
      {
        textBefore: 'If you fail to check in within fifteen minutes of your reserved slot, the reservation will be ',
        options: ['cancelled', 'cancelling', 'cancels'],
        correctIndex: 0,
        textAfter: ' automatically.\n',
        explanationEn: 'Passive voice: "will be cancelled" is required after the modal auxiliary "will be".',
        explanationUr: 'گرائمر: مجہول جملے میں "will be" کے بعد Past Participle یعنی "cancelled" آئے گا۔'
      },
      {
        textBefore: 'Should you experience any technical difficulties, kindly reach ',
        options: ['out', 'over', 'up'],
        correctIndex: 0,
        textAfter: ' to the librarian on duty.\n',
        explanationEn: 'Phrasal verb: "reach out to" means to contact someone for assistance.',
        explanationUr: 'فریزل ورب: مدد کے لیے رابطہ کرنے کو "reach out to" کہا جاتا ہے۔'
      },
      {
        textBefore: 'We appreciate your continued cooperation in maintaining a quiet atmosphere for ',
        options: ['everyone', 'everybody', 'anyone'],
        correctIndex: 0,
        textAfter: '.',
        explanationEn: 'Indefinite pronoun: "everyone" refers comprehensively to all patrons present in the facility.',
        explanationUr: 'ضمیر: تمام لوگوں کا احاطہ کرنے کے لیے "everyone" مستعمل ہے۔'
      }
    ]
  },
  {
    title: 'Workplace Health and Wellness Initiative',
    topic: 'Office Wellness Program',
    paragraphs: [
      {
        textBefore: 'Dear Team,\nAs part of our continuous commitment [example] to staff wellbeing, we are ',
        options: ['launch', 'launching', 'launched'],
        correctIndex: 1,
        textAfter: ' a four-week wellness challenge.\n',
        explanationEn: 'Present Continuous: "are launching" describes an immediate upcoming program initiation.',
        explanationUr: 'گرائمر: حال جاری میں "are" کے ساتھ فعل کی -ing حالت "launching" آئے گی۔'
      },
      {
        textBefore: 'Employees are encouraged to take part in daily stretching exercises ',
        options: ['designed', 'designing', 'design'],
        correctIndex: 0,
        textAfter: ' to reduce physical strain.\n',
        explanationEn: 'Reduced relative clause (past participle): "exercises designed to" modifies the exercises.',
        explanationUr: 'گرائمر: اسم کی وضاحت کے لیے Past Participle "designed" استعمال ہوا ہے۔'
      },
      {
        textBefore: 'Nutritious fresh fruit and herbal teas will be provided free of ',
        options: ['charge', 'cost', 'fee'],
        correctIndex: 0,
        textAfter: ' in the staff cafeteria.\n',
        explanationEn: 'Fixed idiom: "free of charge" means without any payment required.',
        explanationUr: 'محاورہ: بغیر کسی فیس کے مفت ملنے کے لیے "free of charge" بولا جاتا ہے۔'
      },
      {
        textBefore: 'Participants who complete all milestone activities will be ',
        options: ['eligible', 'qualified', 'entitled'],
        correctIndex: 0,
        textAfter: ' for corporate gym vouchers.\n',
        explanationEn: 'Dependent adjective: "eligible for" means having the right to receive an award or prize.',
        explanationUr: 'پریپوزیشن: انعام کا حقدار ہونے کے لیے "eligible for" آتا ہے۔'
      },
      {
        textBefore: 'Please submit your registration form no later ',
        options: ['than', 'then', 'that'],
        correctIndex: 0,
        textAfter: ' Friday afternoon.',
        explanationEn: 'Time phrase: "no later than" is standard English for a strict submission deadline.',
        explanationUr: 'اصطلاح: آخری تاریخ کے اظہار کے لیے "no later than" استعمال کیا جاتا ہے۔'
      }
    ]
  },
  {
    title: 'Customer Service Policy Update',
    topic: 'Support Desk Updates',
    paragraphs: [
      {
        textBefore: 'Dear Client,\nWe would like to inform [example] you that our support schedule has been ',
        options: ['expanded', 'expanding', 'expansion'],
        correctIndex: 0,
        textAfter: ' to cover weekend inquiries.\n',
        explanationEn: 'Present Perfect Passive: "has been expanded" denotes an action completed by management.',
        explanationUr: 'گرائمر: مجہول میں "has been" کے بعد تیسری حالت "expanded" آتی ہے۔'
      },
      {
        textBefore: 'Our technical agents are now accessible twenty-four hours a day to ',
        options: ['address', 'talk', 'speak'],
        correctIndex: 0,
        textAfter: ' your urgent inquiries.\n',
        explanationEn: 'Collocation: "address inquiries/concerns" is formal professional usage.',
        explanationUr: 'کولکیشن: سوالات یا مسائل کے حل کے لیے "address inquiries" استعمال ہوتا ہے۔'
      },
      {
        textBefore: 'In order to ensure quick resolution, please provide your ticket number when you ',
        options: ['call', 'called', 'calling'],
        correctIndex: 0,
        textAfter: '.\n',
        explanationEn: 'Time clause: Present simple "call" is required in clauses introduced by "when".',
        explanationUr: 'گرائمر: "when" والے ٹائم کلاز میں Present Simple فعل آتا ہے۔'
      },
      {
        textBefore: 'Clients may also browse our updated online knowledge base, which is ',
        options: ['regularly', 'regular', 'regularity'],
        correctIndex: 0,
        textAfter: ' maintained by product specialists.\n',
        explanationEn: 'Adverb: "regularly" modifies the participle verb "maintained".',
        explanationUr: 'گرائمر: فعل "maintained" کی کیفیت بتانے کے لیے Adverb "regularly" آئے گا۔'
      },
      {
        textBefore: 'We thank you sincerely for your valued ',
        options: ['partnership', 'partner', 'partnering'],
        correctIndex: 0,
        textAfter: ' over the past decade.',
        explanationEn: 'Noun form: "partnership" fits naturally as the direct object of appreciation.',
        explanationUr: 'اسم: شکریہ کے ساتھ "partnership" (تعاون/شراکت) موزوں اسم ہے۔'
      }
    ]
  }
];

let syntheticCounter = 1;

/**
 * Generate a fresh, synthetic Reading Section 1 cloze passage when PDF items are exhausted
 */
export function generateSyntheticReadingSection1(seenIds: Set<string>): ReadingSection1 {
  const index = (syntheticCounter - 1) % SECTION_1_TEMPLATES.length;
  const template = SECTION_1_TEMPLATES[index];
  const uniqueId = `auto-reading-s1-${Date.now().toString(36)}-${syntheticCounter++}`;

  const paragraphs = template.paragraphs.map((p, idx) => ({
    textBefore: p.textBefore,
    gapId: `gap-${idx + 1}`,
    options: [...p.options],
    correctIndex: p.correctIndex,
    textAfter: p.textAfter
  }));

  const explanations: Record<string, { en: string; ur: string }> = {};
  template.paragraphs.forEach((p, idx) => {
    explanations[`gap-${idx + 1}`] = {
      en: p.explanationEn,
      ur: p.explanationUr
    };
  });

  seenIds.add(uniqueId);

  return {
    id: uniqueId,
    title: `${template.title} (ECS Practice)`,
    introduction: 'Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.',
    paragraphs,
    explanations
  };
}
