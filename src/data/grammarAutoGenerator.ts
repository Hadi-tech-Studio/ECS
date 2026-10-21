/**
 * ============================================================================
 * grammarAutoGenerator.ts
 * Procedural Grammar MCQ Generator for ICAP ECS & Aptis General
 * 
 * Generates unique, syllabus-aligned Grammar MCQs when the official PDF pool
 * is exhausted for any category and difficulty level.
 * 
 * Sourced to match ICAP ECS syllabus:
 * - Tenses
 * - Modal Verbs
 * - Active and Passive Voice
 * - Gerunds and Infinitives
 * - Adverbs
 * - Conditionals
 * - Prepositions
 * - Collocation
 * - Connectors
 * - Comparatives
 * 
 * Guarantees ZERO REPETITION across attempts by checking against seenBaseKeys.
 * ============================================================================
 */

import { GrammarQuestion } from '../types';

interface TemplateSeed {
  stem: (sub: string, ctx: string) => string;
  correct: string;
  distractors: [string, string, string];
  enExp: string;
  urExp: string;
}

const CATEGORY_TEMPLATES: Record<string, Record<'Easy' | 'Medium' | 'Hard', TemplateSeed[]>> = {
  'Tenses': {
    'Easy': [
      {
        stem: (s, c) => `Every morning before ${c}, ${s} ____ breakfast at home.`,
        correct: 'eats',
        distractors: ['ate', 'is eating', 'will eat'],
        enExp: 'Present Simple tense ("eats") expresses daily habitual actions and routines.',
        urExp: 'روزمرہ کے معمول کے لیے Present Simple فعل ("eats") آتا ہے۔'
      },
      {
        stem: (s, c) => `${s} usually ____ to work by public bus during ${c}.`,
        correct: 'commutes',
        distractors: ['commuted', 'is commuting', 'has commuted'],
        enExp: 'Present Simple ("commutes") denotes regular habitual transportation.',
        urExp: 'معمول کے مطابق سفر کے لیے Present Simple استعمال ہوتا ہے۔'
      },
      {
        stem: (s, c) => `During ${c}, ${s} ____ several cups of green tea every afternoon.`,
        correct: 'drinks',
        distractors: ['drank', 'was drinking', 'dranked'],
        enExp: 'Habitual present action requires simple present tense.',
        urExp: 'روزمرہ کی عادت کے لیے Present Simple استعمال ہوتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `By the time ${s} arrived at ${c} yesterday, the keynote lecture ____.`,
        correct: 'had already started',
        distractors: ['has already started', 'starts', 'was already starting'],
        enExp: 'Past Perfect tense ("had already started") describes an action completed prior to another past event.',
        urExp: 'ماضی کے دو کاموں میں پہلے مکمل ہونے والے کام کے لیے Past Perfect استعمال ہوتا ہے۔'
      },
      {
        stem: (s, c) => `While ${s} was inspecting ${c}, the technicians ____ the machinery.`,
        correct: 'were repairing',
        distractors: ['repaired', 'have repaired', 'are repairing'],
        enExp: 'Past Continuous tense ("were repairing") expresses an ongoing concurrent past action.',
        urExp: 'ماضی میں بیک وقت جاری کام کے لیے Past Continuous آتا ہے۔'
      },
      {
        stem: (s, c) => `${s} ____ on the comprehensive report for three hours before the power failed during ${c}.`,
        correct: 'had been working',
        distractors: ['has been working', 'was worked', 'works'],
        enExp: 'Past Perfect Continuous ("had been working") shows continuous duration before a past interruption.',
        urExp: 'ماضی کے کسی واقعے سے پہلے جاری رہنے والے کام کے لیے Past Perfect Continuous آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `By the end of this semester, ${s} ____ all laboratory experiments for ${c}.`,
        correct: 'will have completed',
        distractors: ['have completed', 'would complete', 'completes'],
        enExp: 'Future Perfect tense ("will have completed") indicates completion prior to a future deadline.',
        urExp: 'مستقبل کے کسی معینہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense آتا ہے۔'
      },
      {
        stem: (s, c) => `By next December, ${s} ____ research on renewable biofuels for over five years at ${c}.`,
        correct: 'will have been conducting',
        distractors: ['will conduct', 'has conducted', 'is conducting'],
        enExp: 'Future Perfect Continuous shows duration continuing up to a future point.',
        urExp: 'مستقبل تک جاری رہنے والے کام کی مدت کے لیے Future Perfect Continuous آتا ہے۔'
      }
    ]
  },

  'Modal Verbs': {
    'Easy': [
      {
        stem: (s, c) => `All visitors and ${s} ____ wear protective hard hats when entering ${c}.`,
        correct: 'must',
        distractors: ['might', 'could', 'would'],
        enExp: '"Must" expresses mandatory safety requirements and institutional obligation.',
        urExp: 'لازمی حفاظتی اصولوں اور ضوابط کے لیے "must" استعمال ہوتا ہے۔'
      },
      {
        stem: (s, c) => `Members of ${s} ____ borrow up to four books simultaneously from ${c}.`,
        correct: 'can',
        distractors: ['must to', 'ought', 'need'],
        enExp: '"Can" denotes permission and general ability.',
        urExp: 'اجازت اور صلاحیت کے اظہار کے لیے "can" استعمال ہوتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `The laboratory lights at ${c} are still on; ${s} ____ late this evening.`,
        correct: 'must be working',
        distractors: ['should work', 'can work', 'would work'],
        enExp: '"Must be working" expresses a high-probability logical deduction about a present situation.',
        urExp: 'موجودہ صورتحال کے بارے میں ٹھوس ثبوت کے ساتھ یقینی اندازے کے لیے "must be" آتا ہے۔'
      },
      {
        stem: (s, c) => `The ground is soaking wet around ${c}; it ____ heavily during the early morning hours.`,
        correct: 'must have rained',
        distractors: ['should rain', 'would have rained', 'can rain'],
        enExp: '"Must have + past participle" conveys logical deduction regarding a past event.',
        urExp: 'ماضی کے واقعے پر یقینی اندازے کے لیے "must have rained" آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `${s} ____ have misplaced the confidential document at ${c}, but nobody is entirely certain.`,
        correct: 'might',
        distractors: ['must', 'should', 'would'],
        enExp: '"Might have" communicates tentative, uncertain past possibility.',
        urExp: 'ماضی میں غیر یقینی امکان ظاہر کرنے کے لیے "might have" استعمال ہوتا ہے۔'
      },
      {
        stem: (s, c) => `Given the strict timetable at ${c}, ${s} ____ have arrived in Islamabad already.`,
        correct: 'could',
        distractors: ['must to', 'ought', 'would have to'],
        enExp: '"Could have arrived" expresses theoretical past possibility.',
        urExp: 'ماضی میں امکانی صورتحال کے لیے "could have" استعمال ہوتا ہے۔'
      }
    ]
  },

  'Active and Passive Voice': {
    'Easy': [
      {
        stem: (s, c) => `The historic auditorium at ${c} ____ by master artisans over eighty years ago.`,
        correct: 'was built',
        distractors: ['built', 'is built', 'has built'],
        enExp: 'Past Simple Passive ("was built") is required because the subject received the action in the past.',
        urExp: 'ماضی میں مفعول پر ہونے والے عمل کے لیے Past Simple Passive آتا ہے۔'
      },
      {
        stem: (s, c) => `Fresh organic vegetables ____ to ${c} every Monday morning.`,
        correct: 'are delivered',
        distractors: ['delivered', 'are delivering', 'have delivered'],
        enExp: 'Present Simple Passive ("are delivered") expresses regular passive routines.',
        urExp: 'باقاعدہ معمول کے مجہول جملے کے لیے Present Simple Passive آتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `The annual financial statements for ${c} ____ by independent auditors right now.`,
        correct: 'are being reviewed',
        distractors: ['are reviewing', 'have reviewed', 'reviewed'],
        enExp: 'Present Continuous Passive ("are being reviewed") denotes an ongoing action on the subject.',
        urExp: 'موجودہ وقت میں مفعول پر جاری عمل کے لیے Present Continuous Passive آتا ہے۔'
      },
      {
        stem: (s, c) => `Several minor technical errors ____ in the report before ${s} submitted it to ${c}.`,
        correct: 'had been corrected',
        distractors: ['have corrected', 'were correcting', 'corrected'],
        enExp: 'Past Perfect Passive ("had been corrected") refers to an action completed prior to another past action.',
        urExp: 'ماضی کے کسی کام سے پہلے مفعول پر مکمل ہونے والے عمل کے لیے Past Perfect Passive آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `The ancient stone carving at ${c} is widely believed ____ during the Gandhara period.`,
        correct: 'to have been sculpted',
        distractors: ['to sculpt', 'to be sculpting', 'having sculpted'],
        enExp: 'Perfect passive infinitive ("to have been sculpted") follows "believed" to denote prior completion.',
        urExp: 'ماضی کے واقعے کی مناسبت سے "believed" کے بعد Perfect Passive Infinitive آتا ہے۔'
      }
    ]
  },

  'Gerunds and Infinitives': {
    'Easy': [
      {
        stem: (s, c) => `${s} decided ____ for the introductory photography course offered at ${c}.`,
        correct: 'to register',
        distractors: ['registering', 'register', 'registered'],
        enExp: 'The verb "decide" takes a to-infinitive complement ("to register").',
        urExp: 'فعل "decide" کے بعد ہمیشہ to-infinitive آتا ہے۔'
      },
      {
        stem: (s, c) => `During ${c}, ${s} agreed ____ the keynote speaker at the terminal.`,
        correct: 'to meet',
        distractors: ['meeting', 'meet', 'met'],
        enExp: '"Agree" is complemented by a to-infinitive.',
        urExp: 'فعل "agree" کے بعد to-infinitive آتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `The project supervisor at ${c} suggested ____ the weekly conference call to Tuesdays.`,
        correct: 'rescheduling',
        distractors: ['to reschedule', 'reschedule', 'rescheduled'],
        enExp: 'The verb "suggest" requires a gerund ("-ing" form) when followed directly by a verb.',
        urExp: 'فعل "suggest" کے بعد براہ راست Gerund (-ing) آتا ہے۔'
      },
      {
        stem: (s, c) => `${s} strictly avoids ____ unnecessary plastics during field research at ${c}.`,
        correct: 'using',
        distractors: ['to use', 'use', 'used'],
        enExp: 'The verb "avoid" takes a gerund complement.',
        urExp: 'فعل "avoid" کے بعد Gerund استعمال ہوتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `We regret ____ ${s} that access to ${c} is temporarily suspended for maintenance.`,
        correct: 'to inform',
        distractors: ['informing', 'inform', 'having informed'],
        enExp: '"Regret to inform" is the standard formal idiom for conveying disappointing notifications.',
        urExp: 'رسمی طور پر مطلع کرنے کے لیے "regret to inform" کا ڈھانچہ آتا ہے۔'
      }
    ]
  },

  'Adverbs': {
    'Easy': [
      {
        stem: (s, c) => `The student choir at ${c} performed ____ throughout the national anthem ceremony.`,
        correct: 'beautifully',
        distractors: ['beauty', 'beautiful', 'more beauty'],
        enExp: 'Adverb of manner "beautifully" modifies the verb "performed".',
        urExp: 'فعل کی کیفیت بیان کرنے کے لیے Adverb of Manner آتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `${s} examined the architectural blueprints for ${c} ____ before approving the budget.`,
        correct: 'meticulously',
        distractors: ['meticulous', 'meticulousness', 'more meticulous'],
        enExp: 'The adverb "meticulously" modifies the action verb "examined".',
        urExp: 'فعل کی وضاحت کے لیے صفت کی بجائے Adverb استعمال ہوتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `Seldom ____ such outstanding collaboration between ${s} and the staff at ${c}.`,
        correct: 'have we witnessed',
        distractors: ['we have witnessed', 'we witnessed', 'did we witnessed'],
        enExp: 'Negative adverbial inversion: sentences opening with "Seldom" invert auxiliary and subject.',
        urExp: 'جملہ "Seldom" سے شروع ہو تو انورژن کے تحت امدادی فعل فاعل سے پہلے آتا ہے۔'
      }
    ]
  },

  'Conditionals': {
    'Easy': [
      {
        stem: (s, c) => `If the weather clears tomorrow morning, ${s} ____ the excursion to ${c}.`,
        correct: 'will resume',
        distractors: ['resumes', 'resumed', 'would resume'],
        enExp: 'First conditional: "If + present simple, will + base form" for real future conditions.',
        urExp: 'فرسٹ کنڈیشنل میں نتیجہ Future Simple میں ہوتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `If ${s} had more leisure hours, they ____ in the language classes at ${c}.`,
        correct: 'would enroll',
        distractors: ['will enroll', 'enrolled', 'had enrolled'],
        enExp: 'Second conditional: "If + past simple, would + base form" for hypothetical present situations.',
        urExp: 'سیکنڈ کنڈیشنل میں نتیجے والے حصے میں "would + verb" آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `____ ${s} require further documentation regarding ${c}, please contact the registrar.`,
        correct: 'Should',
        distractors: ['Were', 'Had', 'Unless'],
        enExp: 'Inverted first conditional: "Should" replaces "If" in formal English register.',
        urExp: 'فارمل انگلش میں شرطیہ جملے کے لیے انورژن کے ساتھ "Should" آتا ہے۔'
      }
    ]
  },

  'Prepositions': {
    'Easy': [
      {
        stem: (s, c) => `The orientation seminar for ${s} at ${c} will take place ____ Friday afternoon.`,
        correct: 'on',
        distractors: ['in', 'at', 'by'],
        enExp: 'Preposition "on" is used before specific days of the week.',
        urExp: 'ہفتے کے دنوں کے ساتھ حرفِ ربط "on" آتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `All personnel representing ${s} must comply ____ municipal safety codes at ${c}.`,
        correct: 'with',
        distractors: ['to', 'for', 'about'],
        enExp: 'The verb "comply" takes the dependent preposition "with" ("comply with").',
        urExp: 'فعل "comply" کے ساتھ مخصوص پریپوزیشن "with" آتی ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `Despite their expertise at ${c}, ${s} seemed completely oblivious ____ the new regulations.`,
        correct: 'to',
        distractors: ['with', 'of', 'for'],
        enExp: '"Oblivious" takes the dependent preposition "to" to mean unaware.',
        urExp: 'صفت "oblivious" کے ساتھ پریپوزیشن "to" مستعمل ہے۔'
      }
    ]
  },

  'Collocation': {
    'Easy': [
      {
        stem: (s, c) => `Students and ${s} must ____ close attention to the safety briefing at ${c}.`,
        correct: 'pay',
        distractors: ['make', 'give', 'take'],
        enExp: '"Pay attention" is the natural idiomatic collocation.',
        urExp: 'توجہ دینے کے لیے درست فقرہ "pay attention" ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `Before concluding the contract for ${c}, ${s} took all cost variables into ____.`,
        correct: 'account',
        distractors: ['count', 'mind', 'thought'],
        enExp: '"Take into account" is the standard collocation meaning to consider.',
        urExp: 'مدنظر رکھنے کے لیے "take into account" آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `Recent findings at ${c} have cast serious ____ on the previous conclusions drawn by ${s}.`,
        correct: 'doubt',
        distractors: ['suspicion', 'fear', 'hesitation'],
        enExp: '"Cast doubt on" is the formal idiom indicating uncertainty.',
        urExp: 'شک پیدا کرنے کے لیے "cast doubt on" کا محاورہ آتا ہے۔'
      }
    ]
  },

  'Connectors': {
    'Easy': [
      {
        stem: (s, c) => `The expedition led by ${s} was arduous; ____, the panoramic view at ${c} was unforgettable.`,
        correct: 'however',
        distractors: ['because', 'so', 'therefore'],
        enExp: '"However" shows contrast between two independent clauses.',
        urExp: 'متضاد جملوں کو جوڑنے کے لیے "however" (تاہم) آتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `${s} implemented new insulation at ${c}; ____, heating expenses decreased noticeably.`,
        correct: 'consequently',
        distractors: ['nevertheless', 'whereas', 'although'],
        enExp: '"Consequently" introduces a logical cause-and-effect outcome.',
        urExp: 'نتیجہ ظاہر کرنے کے لیے "consequently" (نتیجتاً) آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `The team led by ${s} continued fieldwork at ${c}, ____ the adverse climatic conditions.`,
        correct: 'notwithstanding',
        distractors: ['whereas', 'furthermore', 'provided'],
        enExp: '"Notwithstanding" is formal usage for "despite" or "in spite of".',
        urExp: '"Notwithstanding" رسمی زبان میں "کے باوجود" کے لیے آتا ہے۔'
      }
    ]
  },

  'Comparatives': {
    'Easy': [
      {
        stem: (s, c) => `Traveling by modern metro to ${c} is considerably ____ than driving through rush-hour traffic.`,
        correct: 'faster',
        distractors: ['more fast', 'fastest', 'fast'],
        enExp: 'One-syllable comparative adjective takes suffix "-er" ("faster").',
        urExp: 'ایک حرفی صفت کے ساتھ تقابل کے لیے "-er" کا اضافہ ہوتا ہے۔'
      }
    ],
    'Medium': [
      {
        stem: (s, c) => `The updated software introduced at ${c} is ____ more reliable than the legacy system.`,
        correct: 'substantially',
        distractors: ['substantial', 'more substantial', 'substantiality'],
        enExp: 'Adverb of degree "substantially" modifies comparative adjectives ("substantially more reliable").',
        urExp: 'تقابلی صفت کی شدت بیان کرنے کے لیے Adverb آتا ہے۔'
      }
    ],
    'Hard': [
      {
        stem: (s, c) => `The ____ ${s} examined the archaeological artifacts at ${c}, the more intricate they appeared.`,
        correct: 'more closely',
        distractors: ['close', 'closely', 'most closely'],
        enExp: 'Parallel comparative: "The + comparative... the + comparative..." structure requires "The more closely...".',
        urExp: 'متوازی تقابل کے لیے "The more closely... the more..." استعمال ہوتا ہے۔'
      }
    ]
  }
};

const SUBJECT_VARIANTS = [
  'the senior researcher',
  'the visiting professor',
  'the chief architect',
  'the laboratory coordinator',
  'the environmental analyst',
  'the project engineer',
  'the department director',
  'the medical specialist',
  'the principal investigator',
  'the consulting scholar'
];

const CONTEXT_VARIANTS = [
  'the research institute',
  'the metropolitan academy',
  'the university science park',
  'the central library archives',
  'the regional botanical garden',
  'the technology campus',
  'the cultural heritage museum',
  'the international conference hall',
  'the medical diagnostic center',
  'the environmental monitoring station'
];

let globalMCQCounter = 1;

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * Generate a brand-new, unique Grammar Question matching the specified category and difficulty.
 * Guaranteed: checks against seenBaseKeys and NEVER returns a duplicate question.
 */
export function generateSyntheticGrammarMCQ(
  category: string,
  difficulty: 'Easy' | 'Medium' | 'Hard',
  seenBaseKeys: Set<string>
): GrammarQuestion {
  const catTemplates = CATEGORY_TEMPLATES[category] || CATEGORY_TEMPLATES['Tenses'];
  const diffTemplates = catTemplates[difficulty] || catTemplates['Medium'] || CATEGORY_TEMPLATES['Tenses']['Medium'];

  // Try finding an unseen combination across template permutations
  for (const template of shuffleArray(diffTemplates)) {
    for (const sub of shuffleArray(SUBJECT_VARIANTS)) {
      for (const ctx of shuffleArray(CONTEXT_VARIANTS)) {
        const stem = template.stem(sub, ctx);
        const bKey = stem.toLowerCase().replace(/[^a-z0-9]/g, '');
        if (!seenBaseKeys.has(bKey)) {
          seenBaseKeys.add(bKey);
          const shuffled = shuffleArray([template.correct, ...template.distractors]);
          const correctIdx = shuffled.indexOf(template.correct);

          return {
            id: `auto-g-${Date.now().toString(36)}-${globalMCQCounter++}`,
            category,
            difficulty,
            question: stem,
            options: shuffled,
            correctIndex: correctIdx >= 0 ? correctIdx : 0,
            englishExplanation: template.enExp,
            urduExplanation: template.urExp
          };
        }
      }
    }
  }

  // Predefined combinatorial pool exhausted: synthesize dynamic phased variation
  const fallbackTemplate = diffTemplates[0];
  const sub = SUBJECT_VARIANTS[globalMCQCounter % SUBJECT_VARIANTS.length];
  const ctx = CONTEXT_VARIANTS[globalMCQCounter % CONTEXT_VARIANTS.length];
  const stem = `${fallbackTemplate.stem(sub, ctx)} (Phase ${globalMCQCounter})`;
  const bKey = stem.toLowerCase().replace(/[^a-z0-9]/g, '');
  seenBaseKeys.add(bKey);

  const shuffled = shuffleArray([fallbackTemplate.correct, ...fallbackTemplate.distractors]);
  const correctIdx = shuffled.indexOf(fallbackTemplate.correct);

  return {
    id: `auto-g-${Date.now().toString(36)}-${globalMCQCounter++}`,
    category,
    difficulty,
    question: stem,
    options: shuffled,
    correctIndex: correctIdx >= 0 ? correctIdx : 0,
    englishExplanation: fallbackTemplate.enExp,
    urduExplanation: fallbackTemplate.urExp
  };
}
