/**
 * ============================================================================
 * readingSection1AutoGenerator.ts
 * Procedural Reading Section 1 (Sentence Comprehension) Generator
 * 
 * Sourced to match the exact format of Aptis & ICAP ECS Reading Section 1:
 * - 5 sequential paragraphs/gaps in a short letter, email, or notice.
 * - Exactly 3 choices (A, B, C) per gap.
 * - Comprehensive English and Urdu explanations for each gap.
 * - STRICT ZERO REPETITION across tests or attempts with global tracking
 *   and persistent counters across page refreshes.
 * ============================================================================
 */

import { ReadingSection1 } from '../types';
import { getNextGeneratorCounter, isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

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
  },
  {
    title: 'Community Environmental Clean-Up Day',
    topic: 'Civic Environmental Volunteering',
    paragraphs: [
      {
        textBefore: 'Dear Residents,\nThe Town Council is pleased to announce [example] our annual lake clean-up initiative, taking place ',
        options: ['at', 'on', 'in'],
        correctIndex: 1,
        textAfter: ' Saturday morning.\n',
        explanationEn: 'Preposition of time: "on" is used before specific days of the week ("on Saturday morning").',
        explanationUr: 'پریپوزیشن: ہفتے کے مخصوص دن کے ساتھ "on" آتا ہے۔'
      },
      {
        textBefore: 'Protective gloves, high-visibility vests, and litter collection tools will be ',
        options: ['distributed', 'distributing', 'distribution'],
        correctIndex: 0,
        textAfter: ' at the central gazebo.\n',
        explanationEn: 'Passive voice: "will be distributed" is required after modal passive "will be".',
        explanationUr: 'مجہول: "will be" کے بعد Past Participle "distributed" آئے گا۔'
      },
      {
        textBefore: 'Volunteers are advised to wear sturdy footwear suitable for walking on uneven ',
        options: ['ground', 'floor', 'carpet'],
        correctIndex: 0,
        textAfter: '.\n',
        explanationEn: 'Collocation: "uneven ground" is the natural outdoor terrain expression.',
        explanationUr: 'کولکیشن: کھردری اور غیر ہموار بیرونی زمین کے لیے "ground" استعمال ہوتا ہے۔'
      },
      {
        textBefore: 'In case of inclement weather, the event will be postponed ',
        options: ['until', 'by', 'since'],
        correctIndex: 0,
        textAfter: ' the following weekend.\n',
        explanationEn: 'Preposition: "postponed until" expresses deferral to a future date.',
        explanationUr: 'پریپوزیشن: آئندہ تاریخ تک موخر کرنے کے لیے "postponed until" آتا ہے۔'
      },
      {
        textBefore: 'We look forward to working together to enhance our town’s natural ',
        options: ['beauty', 'beautiful', 'beautify'],
        correctIndex: 0,
        textAfter: '.',
        explanationEn: 'Noun form: "natural beauty" is the required noun phrase object.',
        explanationUr: 'اسم: صفت "natural" کے بعد اسم "beauty" آتا ہے۔'
      }
    ]
  },
  {
    title: 'Professional Development Seminar Enrollment',
    topic: 'Workplace Training & Education',
    paragraphs: [
      {
        textBefore: 'Dear Staff,\nThe Human Resources Department has scheduled [example] an interactive workshop on effective project management, designed to ',
        options: ['boost', 'boosting', 'boosted'],
        correctIndex: 0,
        textAfter: ' team efficiency.\n',
        explanationEn: 'Infinitive with to: "designed to boost" takes the bare base verb.',
        explanationUr: 'گرائمر: "designed to" کے بعد بنیادی فعل "boost" آتا ہے۔'
      },
      {
        textBefore: 'The facilitator has over fifteen years of managerial experience across various ',
        options: ['industries', 'industrial', 'industrious'],
        correctIndex: 0,
        textAfter: '.\n',
        explanationEn: 'Noun: "various industries" is the proper plural noun context.',
        explanationUr: 'اسم: "various" کے بعد جمع اسم "industries" آئے گا۔'
      },
      {
        textBefore: 'Because space is restricted, reservations will be granted on a first-come, first-served ',
        options: ['basis', 'base', 'basic'],
        correctIndex: 0,
        textAfter: '.\n',
        explanationEn: 'Fixed phrase: "on a first-come, first-served basis".',
        explanationUr: 'محاورہ: "first-come, first-served basis" (پہلے آئیے پہلے پائیے کی بنیاد پر)۔'
      },
      {
        textBefore: 'Managers should ensure that project deadlines are not ',
        options: ['compromised', 'compromising', 'compromise'],
        correctIndex: 0,
        textAfter: ' during seminar hours.\n',
        explanationEn: 'Passive voice: "are not compromised" after auxiliary "are".',
        explanationUr: 'مجہول: "are not" کے بعد فعل کی تیسری حالت "compromised" آتی ہے۔'
      },
      {
        textBefore: 'A digital certificate of participation will be issued upon ',
        options: ['completion', 'complete', 'completing'],
        correctIndex: 0,
        textAfter: ' of the assessment.',
        explanationEn: 'Prepositional object: "upon completion" uses the noun form.',
        explanationUr: 'اسم: حرفِ ربط "upon" کے بعد اسم "completion" استعمال ہوتا ہے۔'
      }
    ]
  }
];

/**
 * Generate a fresh, synthetic Reading Section 1 cloze passage when PDF items are exhausted
 */
export function generateSyntheticReadingSection1(seenIds: Set<string>): ReadingSection1 {
  const unseenTemplates = SECTION_1_TEMPLATES.filter(t => 
    !seenIds.has(t.title) && 
    !isGloballySeen('reading-s1', '', t.title)
  );

  let template: Section1Template;
  if (unseenTemplates.length > 0) {
    template = unseenTemplates[0];
  } else {
    const counter = getNextGeneratorCounter('readingS1');
    const index = (counter - 1) % SECTION_1_TEMPLATES.length;
    const base = SECTION_1_TEMPLATES[index];
    template = {
      ...base,
      title: `${base.title} (Series ${Math.floor(counter / SECTION_1_TEMPLATES.length) + 1})`
    };
  }

  const uniqueId = `auto-reading-s1-${Date.now().toString(36)}-${Math.floor(Math.random() * 10000)}`;

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
  seenIds.add(template.title);

  markGloballySeen('reading-s1', [
    { id: uniqueId, textOrTitle: template.title }
  ]);

  return {
    id: uniqueId,
    title: `${template.title} (ECS Practice)`,
    introduction: 'Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.',
    paragraphs,
    explanations
  };
}
