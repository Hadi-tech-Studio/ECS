import { ReadingSection1 } from '../types';
import { generateSyntheticReadingSection1 } from './readingSection1AutoGenerator';
import { isGloballySeen, markGloballySeen } from '../lib/antiRepetitionTracker';

/**
 * ============================================================================
 * OFFICIAL APTIS READING SECTION 1 POOL (Sentence Comprehension / Completion)
 * Strictly sourced 100% from the official APTIS Reading Practice (B2 Level) PDF:
 * "01: Sentence Completion - 50 Questions (Hard to Easy)"
 * 
 * Total Questions: 50
 * Difficulty breakdown:
 * - Questions 1 - 15:  Hard (15 texts × 5 gaps = 75 gaps)
 * - Questions 16 - 25: Medium-Hard (10 texts × 5 gaps = 50 gaps)
 * - Questions 26 - 35: Medium (10 texts × 5 gaps = 50 gaps)
 * - Questions 36 - 50: Easy (15 texts × 5 gaps = 75 gaps)
 * Total Gaps: 250
 * ============================================================================
 */

export const PDF_READING_SECTION_1_POOL: ReadingSection1[] = [
  {
    "id": "pdf-reading-s1-q01",
    "title": "Sentence Comprehension (Q1 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Patel,\nI am writing to acknowledge [example] your application for the post of project manager. After careful ",
        "gapId": "gap-1",
        "options": [
          "considering",
          "consideration",
          "considered"
        ],
        "correctIndex": 1,
        "textAfter": ",\nwe have decided to offer you an interview. "
      },
      {
        "textBefore": "Please be ",
        "gapId": "gap-2",
        "options": [
          "realised",
          "aware",
          "known"
        ],
        "correctIndex": 1,
        "textAfter": " that places are limited, so you\nmust reply by Friday. "
      },
      {
        "textBefore": "You will be asked to give a short presentation, so I suggest you ",
        "gapId": "gap-3",
        "options": [
          "prepared",
          "preparing",
          "prepare"
        ],
        "correctIndex": 2,
        "textAfter": "\nwell in advance. "
      },
      {
        "textBefore": "Should you be unable to attend, kindly let us ",
        "gapId": "gap-4",
        "options": [
          "knowing",
          "know",
          "to know"
        ],
        "correctIndex": 1,
        "textAfter": " as soon as possible. "
      },
      {
        "textBefore": "We\nlook forward to ",
        "gapId": "gap-5",
        "options": [
          "meet",
          "meeting",
          "met"
        ],
        "correctIndex": 1,
        "textAfter": " you."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Collocation: \"After careful consideration\" is the formal phrase for making a decision after thorough thought.",
        "ur": "باقاعدہ فقرہ: \"after careful consideration\" (مکمل غور و خوض کے بعد)۔"
      },
      "gap-2": {
        "en": "Fixed phrase: \"Please be aware that\" is standard formal English to notify someone of a condition.",
        "ur": "رسمی اطلاع: \"Please be aware that\" (باخبر رہیں کہ)۔"
      },
      "gap-3": {
        "en": "Grammar: The verb \"suggest\" followed by a clause takes the subjunctive or base form \"prepare\".",
        "ur": "گرائمر: \"suggest\" کے بعد بنیادی فعل \"prepare\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Grammar: Causative verb \"let\" requires an object followed by a bare infinitive (\"let us know\").",
        "ur": "گرائمر: \"let\" کے بعد بغیر \"to\" کے بنیادی فعل آتا ہے (\"let us know\")۔"
      },
      "gap-5": {
        "en": "Grammar: In \"look forward to\", \"to\" is a preposition, requiring the gerund form \"meeting\".",
        "ur": "گرائمر: \"look forward to\" کے بعد gerund یعنی \"meeting\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q02",
    "title": "Sentence Comprehension (Q2 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Ms Rivera,\nI am writing to complain about [example] the laptop I purchased from your store last month. It stopped\nworking ",
        "gapId": "gap-1",
        "options": [
          "for",
          "since",
          "after"
        ],
        "correctIndex": 2,
        "textAfter": " only three weeks, which is unacceptable. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-2",
        "options": [
          "showed",
          "told",
          "said"
        ],
        "correctIndex": 0,
        "textAfter": " the staff my receipt, but\nthey refused to offer a refund. "
      },
      {
        "textBefore": "As the product is still ",
        "gapId": "gap-3",
        "options": [
          "over",
          "off",
          "under"
        ],
        "correctIndex": 2,
        "textAfter": " warranty, "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-4",
        "options": [
          "insist",
          "demand",
          "expect"
        ],
        "correctIndex": 2,
        "textAfter": " you to replace it\nimmediately. "
      },
      {
        "textBefore": "Otherwise, I will have no ",
        "gapId": "gap-5",
        "options": [
          "chance",
          "way",
          "choice"
        ],
        "correctIndex": 2,
        "textAfter": " but to contact the consumer office."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Preposition: \"after only three weeks\" indicates the elapsed time before the failure occurred.",
        "ur": "حرفِ جار: \"after only three weeks\" (صرف تین ہفتوں کے بعد) وقت ظاہر کرتا ہے۔"
      },
      "gap-2": {
        "en": "Verb syntax: \"showed the staff my receipt\" correctly takes both an indirect and direct object.",
        "ur": "فعل: \"showed\" کے ساتھ رسید عملے کو دکھانے کا مفہوم بنتا ہے۔"
      },
      "gap-3": {
        "en": "Collocation: \"under warranty\" is the standard commercial term for an active manufacturer guarantee.",
        "ur": "تلازمہ: فعال گارنٹی کے لیے \"under warranty\" بولا جاتا ہے۔"
      },
      "gap-4": {
        "en": "Usage: \"expect you to replace\" expresses a legitimate customer expectation and requirement.",
        "ur": "استعمال: \"expect you to replace\" جائز مطالبہ ظاہر کرتا ہے۔"
      },
      "gap-5": {
        "en": "Idiom: \"have no choice but to\" means having no other acceptable alternative.",
        "ur": "محاورہ: \"have no choice but to\" یعنی اس کے علاوہ کوئی چارہ نہ ہونا۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q03",
    "title": "Sentence Comprehension (Q3 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Professor Evans,\nI am writing to ask whether you would be willing to act as [example] my referee for a scholarship. As\nyou ",
        "gapId": "gap-1",
        "options": [
          "knew",
          "known",
          "know"
        ],
        "correctIndex": 2,
        "textAfter": ", "
      },
      {
        "textBefore": "I completed your economics course last year and was ",
        "gapId": "gap-2",
        "options": [
          "awarded",
          "won",
          "earned"
        ],
        "correctIndex": 0,
        "textAfter": " a distinction. "
      },
      {
        "textBefore": "The\nscholarship is highly ",
        "gapId": "gap-3",
        "options": [
          "competing",
          "competition",
          "competitive"
        ],
        "correctIndex": 2,
        "textAfter": ", so I am keen to make a strong application. "
      },
      {
        "textBefore": "I must submit it ",
        "gapId": "gap-4",
        "options": [
          "until",
          "within",
          "by"
        ],
        "correctIndex": 2,
        "textAfter": " the end of the month. "
      },
      {
        "textBefore": "I would be extremely ",
        "gapId": "gap-5",
        "options": [
          "grateful",
          "gratefully",
          "gratitude"
        ],
        "correctIndex": 0,
        "textAfter": " for your support."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Discourse marker: \"As you know,\" refers politely to previously shared background knowledge.",
        "ur": "رسمی فقرہ: \"As you know\" (جیسا کہ آپ جانتے ہیں)۔"
      },
      "gap-2": {
        "en": "Passive voice: \"was awarded a distinction\" is the standard academic construction for honors.",
        "ur": "مجہول: تعلیمی اعزاز ملنے کے لیے \"was awarded a distinction\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Adjective: \"competitive\" modifies the scholarship, indicating high rivalry among applicants.",
        "ur": "صفت: سخت مقابلے والے وظیفے کے لیے \"competitive\" آئے گا۔"
      },
      "gap-4": {
        "en": "Preposition: \"by the end of the month\" indicates the final deadline (no later than).",
        "ur": "حرفِ جار: ڈیڈ لائن بتانے کے لیے \"by\" آتا ہے (ماہ کے اختتام تک)۔"
      },
      "gap-5": {
        "en": "Collocation: \"extremely grateful\" is the conventional formal phrase for expressing gratitude.",
        "ur": "تلازمہ: شدید شکرگزاری کے لیے \"extremely grateful\" بولا جاتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q04",
    "title": "Sentence Comprehension (Q4 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Residents,\nWe are pleased to inform [example] you that the repairs to the building will begin next week. Work will\ntake ",
        "gapId": "gap-1",
        "options": [
          "part",
          "turn",
          "place"
        ],
        "correctIndex": 2,
        "textAfter": " between 8 a.m. "
      },
      {
        "textBefore": "and 5 p.m. We apologise ",
        "gapId": "gap-2",
        "options": [
          "for",
          "of",
          "at"
        ],
        "correctIndex": 0,
        "textAfter": " any inconvenience this may\ncause. "
      },
      {
        "textBefore": "Residents are ",
        "gapId": "gap-3",
        "options": [
          "suggested",
          "advised",
          "proposed"
        ],
        "correctIndex": 1,
        "textAfter": " to park elsewhere during this time. "
      },
      {
        "textBefore": "Anyone who ",
        "gapId": "gap-4",
        "options": [
          "cracks",
          "tears",
          "breaks"
        ],
        "correctIndex": 2,
        "textAfter": " these\nrules may be fined. "
      },
      {
        "textBefore": "If you have any concerns, please do not ",
        "gapId": "gap-5",
        "options": [
          "hesitating",
          "hesitate",
          "hesitated"
        ],
        "correctIndex": 1,
        "textAfter": " to contact us."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Idiom: \"take place\" means to occur or happen at a scheduled time.",
        "ur": "محاورہ: کام یا تقریب کے منعقد ہونے کے لیے \"take place\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Dependent preposition: \"apologise for\" is the mandatory preposition with apologise.",
        "ur": "حرفِ جار: معذرت کے لیے \"apologise for\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Passive voice: \"Residents are advised to\" is the formal municipal tone for giving instructions.",
        "ur": "مجہول: \"are advised to\" (رہائشیوں کو ہدایت کی جاتی ہے)۔"
      },
      "gap-4": {
        "en": "Collocation: \"breaks these rules\" is the standard collocation for disobeying regulations.",
        "ur": "تلازمہ: قوانین کی خلاف ورزی کے لیے \"breaks rules\" آتا ہے۔"
      },
      "gap-5": {
        "en": "Polite formula: \"do not hesitate to contact us\" is standard business correspondence.",
        "ur": "رسمی فقرہ: \"do not hesitate to contact us\" (رابطہ کرنے میں نہ جھجکیں)۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q05",
    "title": "Sentence Comprehension (Q5 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Jake,\nThanks for your message! Sorry for the late reply; I've been snowed under [example] with work lately. I'm\nafraid I won't be able to ",
        "gapId": "gap-1",
        "options": [
          "do",
          "make",
          "get"
        ],
        "correctIndex": 1,
        "textAfter": " it to your party on Saturday. "
      },
      {
        "textBefore": "I'd love to, but I have a deadline\nhanging ",
        "gapId": "gap-2",
        "options": [
          "under",
          "over",
          "in"
        ],
        "correctIndex": 1,
        "textAfter": " my head. "
      },
      {
        "textBefore": "Let's catch ",
        "gapId": "gap-3",
        "options": [
          "on",
          "up",
          "out"
        ],
        "correctIndex": 1,
        "textAfter": " next month instead. "
      },
      {
        "textBefore": "I'll give you a ",
        "gapId": "gap-4",
        "options": [
          "ring",
          "speak",
          "shout"
        ],
        "correctIndex": 0,
        "textAfter": " once\nthings calm down, "
      },
      {
        "textBefore": "and we can make ",
        "gapId": "gap-5",
        "options": [
          "proper",
          "property",
          "properly"
        ],
        "correctIndex": 0,
        "textAfter": " plans."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Idiom: \"make it to\" means to manage to arrive at or attend an event.",
        "ur": "محاورہ: تقریب میں پہنچنے یا شرکت کے لیے \"make it to\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Idiom: \"hanging over my head\" denotes an impending deadline causing stress.",
        "ur": "محاورہ: سر پر سوار ڈیڈ لائن کے لیے \"hanging over my head\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Phrasal verb: \"catch up\" means to meet and discuss recent life developments.",
        "ur": "مرکب فعل: پرانے دوستوں کے گپ شپ کرنے کے لیے \"catch up\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Idiom: \"give you a ring\" is informal British English for making a phone call.",
        "ur": "محاورہ: فون کرنے کے لیے غیر رسمی برطانوی فقرہ \"give you a ring\" ہے۔"
      },
      "gap-5": {
        "en": "Collocation: \"make proper plans\" denotes establishing organized, concrete arrangements.",
        "ur": "تلازمہ: پختہ منصوبہ بندی کے لیے \"proper plans\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q06",
    "title": "Sentence Comprehension (Q6 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Sir/Madam,\nI recently stayed at your hotel and I am writing to express my dissatisfaction [example] with the standard of\nservice. When we arrived, our room was not ",
        "gapId": "gap-1",
        "options": [
          "yet",
          "still",
          "already"
        ],
        "correctIndex": 0,
        "textAfter": " ready, so we had to wait for two hours. "
      },
      {
        "textBefore": "The\nroom itself was dirty and the air conditioning did not ",
        "gapId": "gap-2",
        "options": [
          "work",
          "working",
          "worked"
        ],
        "correctIndex": 0,
        "textAfter": " properly. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-3",
        "options": [
          "informed",
          "told",
          "complained"
        ],
        "correctIndex": 2,
        "textAfter": " to the manager,\n"
      },
      {
        "textBefore": "who simply shrugged and offered no ",
        "gapId": "gap-4",
        "options": [
          "apologise",
          "apology",
          "apologetic"
        ],
        "correctIndex": 1,
        "textAfter": ". "
      },
      {
        "textBefore": "I therefore expect a partial ",
        "gapId": "gap-5",
        "options": [
          "refer",
          "refuse",
          "refund"
        ],
        "correctIndex": 2,
        "textAfter": " of the room\ncharge."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Adverb: \"not yet ready\" indicates that the expected state has not been reached by the current time.",
        "ur": "متعلق فعل: ابھی تک تیار نہ ہونے کے لیے \"not yet ready\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Grammar: The auxiliary \"did not\" requires the base form of the verb \"work\".",
        "ur": "گرائمر: منفی ماضی میں \"did not\" کے بعد بنیادی فعل \"work\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Dependent preposition: \"complained to the manager\" is the correct verb + preposition structure.",
        "ur": "فعل: منیجر سے شکایت کرنے کے لیے \"complained to\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Noun: \"offered no apology\" requires the noun form following the determiner \"no\".",
        "ur": "اسم: \"no\" کے بعد اسم \"apology\" (معذرت) آئے گا۔"
      },
      "gap-5": {
        "en": "Collocation: \"partial refund\" is the standard commercial term for getting some money returned.",
        "ur": "تلازمہ: رقم کی جزوی واپسی کے لیے \"partial refund\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q07",
    "title": "Sentence Comprehension (Q7 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Dr Morgan,\nI am writing to request an extension [example] to the deadline for my dissertation. Due to unforeseen\ncircumstances, I have fallen ",
        "gapId": "gap-1",
        "options": [
          "behind",
          "after",
          "below"
        ],
        "correctIndex": 0,
        "textAfter": " schedule. "
      },
      {
        "textBefore": "My laptop broke down, and I lost a great ",
        "gapId": "gap-2",
        "options": [
          "deal",
          "lot",
          "number"
        ],
        "correctIndex": 0,
        "textAfter": " of my data. "
      },
      {
        "textBefore": "Although I have worked ",
        "gapId": "gap-3",
        "options": [
          "over",
          "around",
          "through"
        ],
        "correctIndex": 1,
        "textAfter": " the clock to recover it, "
      },
      {
        "textBefore": "I doubt I will manage to\n",
        "gapId": "gap-4",
        "options": [
          "touch",
          "join",
          "meet"
        ],
        "correctIndex": 2,
        "textAfter": " the original deadline. "
      },
      {
        "textBefore": "I would ",
        "gapId": "gap-5",
        "options": [
          "appreciation",
          "appreciated",
          "appreciate"
        ],
        "correctIndex": 2,
        "textAfter": " it if you could grant me two additional weeks."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Idiom: \"fallen behind schedule\" means lagging behind the planned timetable.",
        "ur": "محاورہ: شیڈول سے پیچھے رہ جانے کے لیے \"fallen behind schedule\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Quantifier collocation: \"a great deal of\" is the standard phrase for an uncountable amount (my data).",
        "ur": "مقدار: غیر شمار شدہ اسم (data) کے لیے \"a great deal of\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Idiom: \"worked around the clock\" means worked continuously day and night.",
        "ur": "محاورہ: دن رات مسلسل کام کرنے کے لیے \"around the clock\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Collocation: \"meet the original deadline\" is the standard phrase for finishing on time.",
        "ur": "تلازمہ: ڈیڈ لائن پر کام مکمل کرنے کے لیے \"meet the deadline\" آتا ہے۔"
      },
      "gap-5": {
        "en": "Conditional formula: \"I would appreciate it if you could...\" is standard polite formal English.",
        "ur": "رسمی التجا: شکرگزاری اور درخواست کے لیے \"I would appreciate it\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q08",
    "title": "Sentence Comprehension (Q8 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Customer,\nWe regret to inform [example] you that your recent loan request has been declined. This decision was ",
        "gapId": "gap-1",
        "options": [
          "set",
          "built",
          "based"
        ],
        "correctIndex": 2,
        "textAfter": " on a review of your financial history. "
      },
      {
        "textBefore": "However, you are welcome to ",
        "gapId": "gap-2",
        "options": [
          "applied",
          "apply",
          "applying"
        ],
        "correctIndex": 1,
        "textAfter": " again after six\nmonths. "
      },
      {
        "textBefore": "In the meantime, we would advise you to ",
        "gapId": "gap-3",
        "options": [
          "rise",
          "increase",
          "arise"
        ],
        "correctIndex": 1,
        "textAfter": " your savings. "
      },
      {
        "textBefore": "Please be ",
        "gapId": "gap-4",
        "options": [
          "assured",
          "ensured",
          "insured"
        ],
        "correctIndex": 0,
        "textAfter": " that\nthis decision does not affect your existing accounts. "
      },
      {
        "textBefore": "We ",
        "gapId": "gap-5",
        "options": [
          "apologise",
          "apologetic",
          "apology"
        ],
        "correctIndex": 0,
        "textAfter": " for any inconvenience."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Prepositional collocation: \"based on a review\" is the correct past participle + preposition.",
        "ur": "تلازمہ: جائزے پر مبنی ہونے کے لیے \"based on\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Grammar: \"welcome to apply\" uses the to-infinitive following the adjective \"welcome\".",
        "ur": "گرائمر: \"welcome to\" کے بعد بنیادی فعل \"apply\" آئے گا۔"
      },
      "gap-3": {
        "en": "Transitive verb: \"increase your savings\" correctly takes the direct object \"savings\".",
        "ur": "فعل: بچت بڑھانے کے لیے متعدی فعل \"increase\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Fixed phrase: \"Please be assured that\" means be confident / certain that.",
        "ur": "رسمی تسلی: یقین دہانی کے لیے \"Please be assured that\" بولا جاتا ہے۔"
      },
      "gap-5": {
        "en": "Verb: \"We apologise for any inconvenience\" is standard formal customer correspondence.",
        "ur": "فعل: تکلیف کی معذرت کے لیے فعل \"apologise\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q09",
    "title": "Sentence Comprehension (Q9 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Lee,\nI am delighted to confirm your participation [example] at the annual conference on climate change. Please note\nthat the event will be held ",
        "gapId": "gap-1",
        "options": [
          "in",
          "into",
          "through"
        ],
        "correctIndex": 0,
        "textAfter": " the main auditorium. "
      },
      {
        "textBefore": "You will be ",
        "gapId": "gap-2",
        "options": [
          "expected",
          "waited",
          "wanted"
        ],
        "correctIndex": 0,
        "textAfter": " to speak for forty\nminutes, followed by a question session. "
      },
      {
        "textBefore": "All speakers are ",
        "gapId": "gap-3",
        "options": [
          "wanted",
          "needing",
          "required"
        ],
        "correctIndex": 2,
        "textAfter": " to submit their slides by\nMonday. "
      },
      {
        "textBefore": "Accommodation will be ",
        "gapId": "gap-4",
        "options": [
          "provided",
          "produced",
          "provoked"
        ],
        "correctIndex": 0,
        "textAfter": " by the organisers. "
      },
      {
        "textBefore": "Please let me know if you have any\ndietary ",
        "gapId": "gap-5",
        "options": [
          "requires",
          "requirements",
          "required"
        ],
        "correctIndex": 1,
        "textAfter": "."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Preposition: \"held in the main auditorium\" specifies the enclosed location.",
        "ur": "حرفِ جار: بند ہال یا آڈیٹوریم کے اندر کے لیے \"in\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Passive expectation: \"You will be expected to speak\" outlines the assigned duty.",
        "ur": "مجہول: فرائض کی وضاحت کے لیے \"expected to speak\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Passive requirement: \"Speakers are required to submit\" expresses a mandatory regulation.",
        "ur": "مجہول: لازمی شرائط کے لیے \"required to\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Collocation: \"Accommodation will be provided\" is the standard phrase in event logistics.",
        "ur": "تلازمہ: رہائش فراہم کیے جانے کے لیے \"provided\" آتا ہے۔"
      },
      "gap-5": {
        "en": "Compound noun: \"dietary requirements\" is the standard phrase for food needs/allergies.",
        "ur": "اسم: کھانے پینے کی ضروریات اور پرہیز کے لیے \"dietary requirements\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q10",
    "title": "Sentence Comprehension (Q10 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Alex,\nI was sorry to hear you didn't pass [example] the exam. Don't be too hard ",
        "gapId": "gap-1",
        "options": [
          "with",
          "at",
          "on"
        ],
        "correctIndex": 2,
        "textAfter": " yourself. "
      },
      {
        "textBefore": "Everyone\nhas setbacks, and the important thing is to learn ",
        "gapId": "gap-2",
        "options": [
          "from",
          "of",
          "by"
        ],
        "correctIndex": 0,
        "textAfter": " your mistakes. "
      },
      {
        "textBefore": "If I ",
        "gapId": "gap-3",
        "options": [
          "were",
          "would be",
          "will be"
        ],
        "correctIndex": 0,
        "textAfter": " you, "
      },
      {
        "textBefore": "I would\ntake some time off and then try ",
        "gapId": "gap-4",
        "options": [
          "again",
          "back",
          "once"
        ],
        "correctIndex": 0,
        "textAfter": ". "
      },
      {
        "textBefore": "I'm sure you will ",
        "gapId": "gap-5",
        "options": [
          "take",
          "make",
          "do"
        ],
        "correctIndex": 2,
        "textAfter": " better next time."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Collocation: \"Don't be too hard on yourself\" is an idiom meaning do not criticize yourself too harshly.",
        "ur": "محاورہ: خود پر زیادہ سختی نہ کرنے کے لیے \"hard on yourself\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Dependent preposition: \"learn from your mistakes\" is the standard verb + preposition phrase.",
        "ur": "حرفِ جار: غلطیوں سے سبق سیکھنے کے لیے \"learn from\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Conditional Type 2: \"If I were you\" is the standard subjunctive conditional for advice.",
        "ur": "شرطیہ جملہ: نصیحت دینے کے لیے \"If I were you\" (اگر میں تمہاری جگہ ہوتا) آتا ہے۔"
      },
      "gap-4": {
        "en": "Adverb: \"try again\" means to make another attempt.",
        "ur": "متعلق فعل: دوبارہ کوشش کے لیے \"try again\" آتا ہے۔"
      },
      "gap-5": {
        "en": "Collocation: \"do better next time\" is the standard phrase for improved performance.",
        "ur": "تلازمہ: اگلی بار بہتر کارکردگی کے لیے \"do better\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q11",
    "title": "Sentence Comprehension (Q11 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Ms Brown,\nI'm afraid I have to postpone [example] our meeting on Tuesday ",
        "gapId": "gap-1",
        "options": [
          "according",
          "owing",
          "because"
        ],
        "correctIndex": 1,
        "textAfter": " to an urgent business trip. "
      },
      {
        "textBefore": "I will be\naway ",
        "gapId": "gap-2",
        "options": [
          "by",
          "until",
          "for"
        ],
        "correctIndex": 1,
        "textAfter": " Friday, "
      },
      {
        "textBefore": "so could we ",
        "gapId": "gap-3",
        "options": [
          "recall",
          "rearrange",
          "remove"
        ],
        "correctIndex": 1,
        "textAfter": " it for next week? "
      },
      {
        "textBefore": "I hope this does not cause you too\nmuch ",
        "gapId": "gap-4",
        "options": [
          "inconveniently",
          "inconvenient",
          "inconvenience"
        ],
        "correctIndex": 2,
        "textAfter": ". "
      },
      {
        "textBefore": "I will be ",
        "gapId": "gap-5",
        "options": [
          "avail",
          "availing",
          "available"
        ],
        "correctIndex": 2,
        "textAfter": " to meet any day after Monday."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Prepositional phrase: \"owing to an urgent business trip\" functions as a formal synonym for because of.",
        "ur": "حرفِ جار: کسی وجہ کو بیان کرنے کے لیے رسمی فقرہ \"owing to\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Preposition: \"away until Friday\" specifies the duration until return.",
        "ur": "حرفِ جار: جمعہ تک غیر حاضر رہنے کے لیے \"until\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Verb: \"rearrange it for next week\" means reschedule the appointment.",
        "ur": "فعل: میٹنگ کا وقت بدلنے کے لیے \"rearrange\" آتا ہے۔"
      },
      "gap-4": {
        "en": "Noun: \"cause you too much inconvenience\" requires the uncountable noun after \"much\".",
        "ur": "اسم: \"much\" کے بعد اسم \"inconvenience\" (زحمت) آئے گا۔"
      },
      "gap-5": {
        "en": "Adjective: \"will be available to meet\" indicates free time / accessibility.",
        "ur": "صفت: ملاقات کے لیے دستیاب ہونے کے لیے \"available\" آئے گا۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q12",
    "title": "Sentence Comprehension (Q12 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Colleagues,\nFrom next month, a new policy will come into [example] effect. Employees will no longer be ",
        "gapId": "gap-1",
        "options": [
          "allowed",
          "made",
          "let"
        ],
        "correctIndex": 0,
        "textAfter": " to\nuse personal phones during meetings. "
      },
      {
        "textBefore": "This is intended ",
        "gapId": "gap-2",
        "options": [
          "that",
          "to",
          "for"
        ],
        "correctIndex": 1,
        "textAfter": " improve concentration. "
      },
      {
        "textBefore": "Any\nemployee found ",
        "gapId": "gap-3",
        "options": [
          "broke",
          "broken",
          "breaking"
        ],
        "correctIndex": 2,
        "textAfter": " the policy will receive a warning. "
      },
      {
        "textBefore": "Further details are ",
        "gapId": "gap-4",
        "options": [
          "published",
          "publisher",
          "publishing"
        ],
        "correctIndex": 0,
        "textAfter": " on the\nintranet. "
      },
      {
        "textBefore": "I trust you will all ",
        "gapId": "gap-5",
        "options": [
          "compare",
          "complain",
          "comply"
        ],
        "correctIndex": 2,
        "textAfter": " with this change."
      }
    ],
    "explanations": {
      "gap-1": {
        "en": "Passive modal: \"will no longer be allowed to\" indicates prohibition of personal phones.",
        "ur": "مجہول: اجازت نہ ہونے کے لیے \"allowed to\" آتا ہے۔"
      },
      "gap-2": {
        "en": "Infinitive of purpose: \"intended to improve concentration\" expresses the goal of the policy.",
        "ur": "مقصد: پالیسی کا مقصد ظاہر کرنے کے لیے \"intended to\" آتا ہے۔"
      },
      "gap-3": {
        "en": "Participle clause: \"employee found breaking the policy\" uses the present participle.",
        "ur": "اسم صفت: پالیسی کی خلاف ورزی کرتے پائے جانے پر \"breaking\" آئے گا۔"
      },
      "gap-4": {
        "en": "Passive state: \"Further details are published on the intranet\" indicates accessible publication.",
        "ur": "مجہول: انٹرانیٹ پر شائع ہونے کے لیے \"published\" آتا ہے۔"
      },
      "gap-5": {
        "en": "Dependent preposition: \"comply with this change\" is the correct formal verb meaning adhere to.",
        "ur": "فعل: تبدیلی پر عمل درآمد کے لیے \"comply with\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q13",
    "title": "Sentence Comprehension (Q13 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Ms Taylor,\nFurther to [example] our telephone conversation this morning, I am writing to ",
        "gapId": "gap-1",
        "options": [
          "confirm",
          "conform",
          "confess"
        ],
        "correctIndex": 0,
        "textAfter": " the details of\nmy claim. "
      },
      {
        "textBefore": "On 12 March, my car was damaged ",
        "gapId": "gap-2",
        "options": [
          "by",
          "of",
          "at"
        ],
        "correctIndex": 0,
        "textAfter": " a fallen tree. "
      },
      {
        "textBefore": "The damage is covered ",
        "gapId": "gap-3",
        "options": [
          "by",
          "from",
          "with"
        ],
        "correctIndex": 0,
        "textAfter": " my policy, as I have comprehensive insurance. "
      },
      {
        "textBefore": "I have enclosed the repair estimate ",
        "gapId": "gap-4",
        "options": [
          "at",
          "to",
          "for"
        ],
        "correctIndex": 2,
        "textAfter": " your reference. "
      },
      {
        "textBefore": "Please process my claim ",
        "gapId": "gap-5",
        "options": [
          "so",
          "than",
          "as"
        ],
        "correctIndex": 2,
        "textAfter": " soon as possible."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"confirm\" correctly completes the sentence context and grammatical structure among [confirm, conform, confess].",
        "urdu": "دیے گئے اختیارات [confirm, conform, confess] میں سے درست فقرہ اور قواعد کے مطابق \"confirm\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [by, of, at].",
        "urdu": "دیے گئے اختیارات [by, of, at] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [by, from, with].",
        "urdu": "دیے گئے اختیارات [by, from, with] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [at, to, for].",
        "urdu": "دیے گئے اختیارات [at, to, for] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"as\" correctly completes the sentence context and grammatical structure among [so, than, as].",
        "urdu": "دیے گئے اختیارات [so, than, as] میں سے درست فقرہ اور قواعد کے مطابق \"as\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q14",
    "title": "Sentence Comprehension (Q14 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Sir,\nPlease accept this letter as formal notification [example] of my resignation from my position as sales\nassistant. My last day of work will be 30 June, ",
        "gapId": "gap-1",
        "options": [
          "so",
          "while",
          "as"
        ],
        "correctIndex": 2,
        "textAfter": " I have given "
      },
      {
        "textBefore": "one month's ",
        "gapId": "gap-2",
        "options": [
          "news",
          "notice",
          "alert"
        ],
        "correctIndex": 1,
        "textAfter": " as\nrequired by my contract. "
      },
      {
        "textBefore": "I have ",
        "gapId": "gap-3",
        "options": [
          "enjoying",
          "enjoy",
          "enjoyed"
        ],
        "correctIndex": 2,
        "textAfter": " my time here, "
      },
      {
        "textBefore": "and I am grateful ",
        "gapId": "gap-4",
        "options": [
          "of",
          "for",
          "to"
        ],
        "correctIndex": 1,
        "textAfter": " the\nopportunities I have been given. "
      },
      {
        "textBefore": "I will do everything possible to ensure a smooth ",
        "gapId": "gap-5",
        "options": [
          "handover",
          "handing",
          "handed"
        ],
        "correctIndex": 0,
        "textAfter": " to my\nsuccessor."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"as\" correctly completes the sentence context and grammatical structure among [so, while, as].",
        "urdu": "دیے گئے اختیارات [so, while, as] میں سے درست فقرہ اور قواعد کے مطابق \"as\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"notice\" correctly completes the sentence context and grammatical structure among [news, notice, alert].",
        "urdu": "دیے گئے اختیارات [news, notice, alert] میں سے درست فقرہ اور قواعد کے مطابق \"notice\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"enjoyed\" correctly completes the sentence context and grammatical structure among [enjoying, enjoy, enjoyed].",
        "urdu": "دیے گئے اختیارات [enjoying, enjoy, enjoyed] میں سے درست فقرہ اور قواعد کے مطابق \"enjoyed\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [of, for, to].",
        "urdu": "دیے گئے اختیارات [of, for, to] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"handover\" correctly completes the sentence context and grammatical structure among [handover, handing, handed].",
        "urdu": "دیے گئے اختیارات [handover, handing, handed] میں سے درست فقرہ اور قواعد کے مطابق \"handover\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q15",
    "title": "Sentence Comprehension (Q15 - Level: Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear all,\nUnfortunately, the charity concert has been called off [example] because of the heavy rain. We had\nhoped the weather would ",
        "gapId": "gap-1",
        "options": [
          "clean",
          "free",
          "clear"
        ],
        "correctIndex": 2,
        "textAfter": " up, but it has only got worse. "
      },
      {
        "textBefore": "Ticket holders will be ",
        "gapId": "gap-2",
        "options": [
          "refunded",
          "refused",
          "reflected"
        ],
        "correctIndex": 0,
        "textAfter": " in\nfull. "
      },
      {
        "textBefore": "We would like to take this ",
        "gapId": "gap-3",
        "options": [
          "opportunity",
          "opportune",
          "opportunist"
        ],
        "correctIndex": 0,
        "textAfter": " to thank everyone who has supported us. "
      },
      {
        "textBefore": "We hope to ",
        "gapId": "gap-4",
        "options": [
          "keep",
          "take",
          "hold"
        ],
        "correctIndex": 2,
        "textAfter": " the event next summer, "
      },
      {
        "textBefore": "",
        "gapId": "gap-5",
        "options": [
          "weather",
          "wetter",
          "whether"
        ],
        "correctIndex": 0,
        "textAfter": " permitting."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"clear\" correctly completes the sentence context and grammatical structure among [clean, free, clear].",
        "urdu": "دیے گئے اختیارات [clean, free, clear] میں سے درست فقرہ اور قواعد کے مطابق \"clear\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"refunded\" correctly completes the sentence context and grammatical structure among [refunded, refused, reflected].",
        "urdu": "دیے گئے اختیارات [refunded, refused, reflected] میں سے درست فقرہ اور قواعد کے مطابق \"refunded\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"opportunity\" correctly completes the sentence context and grammatical structure among [opportunity, opportune, opportunist].",
        "urdu": "دیے گئے اختیارات [opportunity, opportune, opportunist] میں سے درست فقرہ اور قواعد کے مطابق \"opportunity\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"hold\" correctly completes the sentence context and grammatical structure among [keep, take, hold].",
        "urdu": "دیے گئے اختیارات [keep, take, hold] میں سے درست فقرہ اور قواعد کے مطابق \"hold\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"weather\" correctly completes the sentence context and grammatical structure among [weather, wetter, whether].",
        "urdu": "دیے گئے اختیارات [weather, wetter, whether] میں سے درست فقرہ اور قواعد کے مطابق \"weather\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q16",
    "title": "Sentence Comprehension (Q16 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mrs Stone,\nI am writing to give you some information about [example] the school trip to the science museum. The\ntrip will ",
        "gapId": "gap-1",
        "options": [
          "take",
          "do",
          "make"
        ],
        "correctIndex": 0,
        "textAfter": " place on 20 May. "
      },
      {
        "textBefore": "Pupils must ",
        "gapId": "gap-2",
        "options": [
          "brought",
          "bring",
          "bringing"
        ],
        "correctIndex": 1,
        "textAfter": " their own lunch, as no food will be sold\nthere. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-3",
        "options": [
          "sign",
          "write",
          "mark"
        ],
        "correctIndex": 0,
        "textAfter": " the permission form and return it by Friday. "
      },
      {
        "textBefore": "If your child ",
        "gapId": "gap-4",
        "options": [
          "have",
          "having",
          "has"
        ],
        "correctIndex": 2,
        "textAfter": " any\nmedical conditions, "
      },
      {
        "textBefore": "please tell us ",
        "gapId": "gap-5",
        "options": [
          "immediate",
          "immediacy",
          "immediately"
        ],
        "correctIndex": 2,
        "textAfter": "."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"take\" correctly completes the sentence context and grammatical structure among [take, do, make].",
        "urdu": "دیے گئے اختیارات [take, do, make] میں سے درست فقرہ اور قواعد کے مطابق \"take\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"bring\" correctly completes the sentence context and grammatical structure among [brought, bring, bringing].",
        "urdu": "دیے گئے اختیارات [brought, bring, bringing] میں سے درست فقرہ اور قواعد کے مطابق \"bring\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"sign\" correctly completes the sentence context and grammatical structure among [sign, write, mark].",
        "urdu": "دیے گئے اختیارات [sign, write, mark] میں سے درست فقرہ اور قواعد کے مطابق \"sign\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"has\" correctly completes the sentence context and grammatical structure among [have, having, has].",
        "urdu": "دیے گئے اختیارات [have, having, has] میں سے درست فقرہ اور قواعد کے مطابق \"has\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"immediately\" correctly completes the sentence context and grammatical structure among [immediate, immediacy, immediately].",
        "urdu": "دیے گئے اختیارات [immediate, immediacy, immediately] میں سے درست فقرہ اور قواعد کے مطابق \"immediately\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q17",
    "title": "Sentence Comprehension (Q17 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Emma,\nI'm so thrilled about [example] our trip to Spain! I've already renewed my passport and ",
        "gapId": "gap-1",
        "options": [
          "stored",
          "stocked",
          "stuck"
        ],
        "correctIndex": 1,
        "textAfter": " up on\nsunscreen. "
      },
      {
        "textBefore": "Have you ",
        "gapId": "gap-2",
        "options": [
          "built",
          "borrowed",
          "booked"
        ],
        "correctIndex": 2,
        "textAfter": " the hotel yet? "
      },
      {
        "textBefore": "We ought to leave at ",
        "gapId": "gap-3",
        "options": [
          "first",
          "least",
          "once"
        ],
        "correctIndex": 1,
        "textAfter": " three hours "
      },
      {
        "textBefore": "before\nthe flight to be on the ",
        "gapId": "gap-4",
        "options": [
          "safety",
          "safely",
          "safe"
        ],
        "correctIndex": 2,
        "textAfter": " side. "
      },
      {
        "textBefore": "I can't wait to see you on the beach, ",
        "gapId": "gap-5",
        "options": [
          "provide",
          "provided",
          "provision"
        ],
        "correctIndex": 1,
        "textAfter": " we don't forget\nthe tickets!"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"stocked\" correctly completes the sentence context and grammatical structure among [stored, stocked, stuck].",
        "urdu": "دیے گئے اختیارات [stored, stocked, stuck] میں سے درست فقرہ اور قواعد کے مطابق \"stocked\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"booked\" correctly completes the sentence context and grammatical structure among [built, borrowed, booked].",
        "urdu": "دیے گئے اختیارات [built, borrowed, booked] میں سے درست فقرہ اور قواعد کے مطابق \"booked\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"least\" correctly completes the sentence context and grammatical structure among [first, least, once].",
        "urdu": "دیے گئے اختیارات [first, least, once] میں سے درست فقرہ اور قواعد کے مطابق \"least\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"safe\" correctly completes the sentence context and grammatical structure among [safety, safely, safe].",
        "urdu": "دیے گئے اختیارات [safety, safely, safe] میں سے درست فقرہ اور قواعد کے مطابق \"safe\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"provided\" correctly completes the sentence context and grammatical structure among [provide, provided, provision].",
        "urdu": "دیے گئے اختیارات [provide, provided, provision] میں سے درست فقرہ اور قواعد کے مطابق \"provided\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q18",
    "title": "Sentence Comprehension (Q18 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Adams,\nI saw your advertisement for the evening course in photography and I would like to ask [example] a\nfew questions. Firstly, is it suitable ",
        "gapId": "gap-1",
        "options": [
          "to",
          "for",
          "with"
        ],
        "correctIndex": 1,
        "textAfter": " beginners? "
      },
      {
        "textBefore": "Secondly, how much does the course ",
        "gapId": "gap-2",
        "options": [
          "pay",
          "cost",
          "charge"
        ],
        "correctIndex": 1,
        "textAfter": "? "
      },
      {
        "textBefore": "I would also like to know if there is a discount ",
        "gapId": "gap-3",
        "options": [
          "on",
          "with",
          "for"
        ],
        "correctIndex": 2,
        "textAfter": " students. "
      },
      {
        "textBefore": "Finally, could you ",
        "gapId": "gap-4",
        "options": [
          "tell",
          "say",
          "speak"
        ],
        "correctIndex": 0,
        "textAfter": " me how many "
      },
      {
        "textBefore": "classes there are ",
        "gapId": "gap-5",
        "options": [
          "for",
          "by",
          "per"
        ],
        "correctIndex": 2,
        "textAfter": " week?"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [to, for, with].",
        "urdu": "دیے گئے اختیارات [to, for, with] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"cost\" correctly completes the sentence context and grammatical structure among [pay, cost, charge].",
        "urdu": "دیے گئے اختیارات [pay, cost, charge] میں سے درست فقرہ اور قواعد کے مطابق \"cost\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [on, with, for].",
        "urdu": "دیے گئے اختیارات [on, with, for] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"tell\" correctly completes the sentence context and grammatical structure among [tell, say, speak].",
        "urdu": "دیے گئے اختیارات [tell, say, speak] میں سے درست فقرہ اور قواعد کے مطابق \"tell\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"per\" correctly completes the sentence context and grammatical structure among [for, by, per].",
        "urdu": "دیے گئے اختیارات [for, by, per] میں سے درست فقرہ اور قواعد کے مطابق \"per\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q19",
    "title": "Sentence Comprehension (Q19 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Sandra,\nThank you very much [example] for the lovely gift you sent me for my birthday. It was very ",
        "gapId": "gap-1",
        "options": [
          "kind",
          "kindness",
          "kindly"
        ],
        "correctIndex": 0,
        "textAfter": " of\nyou to remember. "
      },
      {
        "textBefore": "The scarf is exactly the ",
        "gapId": "gap-2",
        "options": [
          "exact",
          "right",
          "true"
        ],
        "correctIndex": 1,
        "textAfter": " colour I wanted. "
      },
      {
        "textBefore": "I will ",
        "gapId": "gap-3",
        "options": [
          "dress",
          "put",
          "wear"
        ],
        "correctIndex": 2,
        "textAfter": " it every day\nthis winter. "
      },
      {
        "textBefore": "It was a real ",
        "gapId": "gap-4",
        "options": [
          "pleasure",
          "pleased",
          "please"
        ],
        "correctIndex": 0,
        "textAfter": " to see you at the party, "
      },
      {
        "textBefore": "and I hope we can meet ",
        "gapId": "gap-5",
        "options": [
          "again",
          "other",
          "back"
        ],
        "correctIndex": 0,
        "textAfter": " soon."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"kind\" correctly completes the sentence context and grammatical structure among [kind, kindness, kindly].",
        "urdu": "دیے گئے اختیارات [kind, kindness, kindly] میں سے درست فقرہ اور قواعد کے مطابق \"kind\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"right\" correctly completes the sentence context and grammatical structure among [exact, right, true].",
        "urdu": "دیے گئے اختیارات [exact, right, true] میں سے درست فقرہ اور قواعد کے مطابق \"right\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"wear\" correctly completes the sentence context and grammatical structure among [dress, put, wear].",
        "urdu": "دیے گئے اختیارات [dress, put, wear] میں سے درست فقرہ اور قواعد کے مطابق \"wear\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"pleasure\" correctly completes the sentence context and grammatical structure among [pleasure, pleased, please].",
        "urdu": "دیے گئے اختیارات [pleasure, pleased, please] میں سے درست فقرہ اور قواعد کے مطابق \"pleasure\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"again\" correctly completes the sentence context and grammatical structure among [again, other, back].",
        "urdu": "دیے گئے اختیارات [again, other, back] میں سے درست فقرہ اور قواعد کے مطابق \"again\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q20",
    "title": "Sentence Comprehension (Q20 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Collins,\nI bought two tickets for the concert on 5 June, but I am unable to attend [example] because of illness. I\nwould therefore like to know whether it is possible to get my money ",
        "gapId": "gap-1",
        "options": [
          "again",
          "over",
          "back"
        ],
        "correctIndex": 2,
        "textAfter": ". "
      },
      {
        "textBefore": "I have ",
        "gapId": "gap-2",
        "options": [
          "attach",
          "attaching",
          "attached"
        ],
        "correctIndex": 2,
        "textAfter": " the\ntickets to this email. "
      },
      {
        "textBefore": "Could you please ",
        "gapId": "gap-3",
        "options": [
          "let",
          "make",
          "have"
        ],
        "correctIndex": 0,
        "textAfter": " me know what I need to do? "
      },
      {
        "textBefore": "I would ",
        "gapId": "gap-4",
        "options": [
          "appreciated",
          "appreciate",
          "appreciation"
        ],
        "correctIndex": 1,
        "textAfter": " "
      },
      {
        "textBefore": "a\nreply ",
        "gapId": "gap-5",
        "options": [
          "until",
          "by",
          "in"
        ],
        "correctIndex": 1,
        "textAfter": " the end of the week."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"back\" correctly completes the sentence context and grammatical structure among [again, over, back].",
        "urdu": "دیے گئے اختیارات [again, over, back] میں سے درست فقرہ اور قواعد کے مطابق \"back\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"attached\" correctly completes the sentence context and grammatical structure among [attach, attaching, attached].",
        "urdu": "دیے گئے اختیارات [attach, attaching, attached] میں سے درست فقرہ اور قواعد کے مطابق \"attached\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"let\" correctly completes the sentence context and grammatical structure among [let, make, have].",
        "urdu": "دیے گئے اختیارات [let, make, have] میں سے درست فقرہ اور قواعد کے مطابق \"let\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"appreciate\" correctly completes the sentence context and grammatical structure among [appreciated, appreciate, appreciation].",
        "urdu": "دیے گئے اختیارات [appreciated, appreciate, appreciation] میں سے درست فقرہ اور قواعد کے مطابق \"appreciate\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [until, by, in].",
        "urdu": "دیے گئے اختیارات [until, by, in] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q21",
    "title": "Sentence Comprehension (Q21 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi team,\nCan I remind everyone that the new printer has [example] been installed on the second floor? It is\nmuch ",
        "gapId": "gap-1",
        "options": [
          "more fast",
          "fastest",
          "faster"
        ],
        "correctIndex": 2,
        "textAfter": " than the old one, "
      },
      {
        "textBefore": "and it prints ",
        "gapId": "gap-2",
        "options": [
          "in",
          "at",
          "on"
        ],
        "correctIndex": 2,
        "textAfter": " both sides. "
      },
      {
        "textBefore": "You ",
        "gapId": "gap-3",
        "options": [
          "don't",
          "aren't",
          "haven't"
        ],
        "correctIndex": 0,
        "textAfter": " need a password\nto use it; just swipe your card. "
      },
      {
        "textBefore": "If it ",
        "gapId": "gap-4",
        "options": [
          "goes",
          "runs",
          "comes"
        ],
        "correctIndex": 1,
        "textAfter": " out of paper, there is a new box in the cupboard. "
      },
      {
        "textBefore": "Let\nme know if you have ",
        "gapId": "gap-5",
        "options": [
          "any",
          "much",
          "a"
        ],
        "correctIndex": 0,
        "textAfter": " problems."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"faster\" correctly completes the sentence context and grammatical structure among [more fast, fastest, faster].",
        "urdu": "دیے گئے اختیارات [more fast, fastest, faster] میں سے درست فقرہ اور قواعد کے مطابق \"faster\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"on\" correctly completes the sentence context and grammatical structure among [in, at, on].",
        "urdu": "دیے گئے اختیارات [in, at, on] میں سے درست فقرہ اور قواعد کے مطابق \"on\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"don't\" correctly completes the sentence context and grammatical structure among [don't, aren't, haven't].",
        "urdu": "دیے گئے اختیارات [don't, aren't, haven't] میں سے درست فقرہ اور قواعد کے مطابق \"don't\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"runs\" correctly completes the sentence context and grammatical structure among [goes, runs, comes].",
        "urdu": "دیے گئے اختیارات [goes, runs, comes] میں سے درست فقرہ اور قواعد کے مطابق \"runs\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"any\" correctly completes the sentence context and grammatical structure among [any, much, a].",
        "urdu": "دیے گئے اختیارات [any, much, a] میں سے درست فقرہ اور قواعد کے مطابق \"any\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q22",
    "title": "Sentence Comprehension (Q22 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Wilson,\nI would like to inform you that I intend to leave [example] my apartment at the end of June. According ",
        "gapId": "gap-1",
        "options": [
          "to",
          "with",
          "for"
        ],
        "correctIndex": 0,
        "textAfter": " my contract, I must give two months' notice. "
      },
      {
        "textBefore": "I would be ",
        "gapId": "gap-2",
        "options": [
          "obligation",
          "oblige",
          "obliged"
        ],
        "correctIndex": 2,
        "textAfter": " if you could send me a\nfinal inspection form. "
      },
      {
        "textBefore": "I have always paid my rent ",
        "gapId": "gap-3",
        "options": [
          "by",
          "at",
          "on"
        ],
        "correctIndex": 2,
        "textAfter": " time. "
      },
      {
        "textBefore": "I will leave the flat in the same ",
        "gapId": "gap-4",
        "options": [
          "situation",
          "condition",
          "position"
        ],
        "correctIndex": 1,
        "textAfter": " as I found it. "
      },
      {
        "textBefore": "Please confirm that the deposit will be returned ",
        "gapId": "gap-5",
        "options": [
          "at",
          "in",
          "on"
        ],
        "correctIndex": 1,
        "textAfter": " full."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"to\" correctly completes the sentence context and grammatical structure among [to, with, for].",
        "urdu": "دیے گئے اختیارات [to, with, for] میں سے درست فقرہ اور قواعد کے مطابق \"to\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"obliged\" correctly completes the sentence context and grammatical structure among [obligation, oblige, obliged].",
        "urdu": "دیے گئے اختیارات [obligation, oblige, obliged] میں سے درست فقرہ اور قواعد کے مطابق \"obliged\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"on\" correctly completes the sentence context and grammatical structure among [by, at, on].",
        "urdu": "دیے گئے اختیارات [by, at, on] میں سے درست فقرہ اور قواعد کے مطابق \"on\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"condition\" correctly completes the sentence context and grammatical structure among [situation, condition, position].",
        "urdu": "دیے گئے اختیارات [situation, condition, position] میں سے درست فقرہ اور قواعد کے مطابق \"condition\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [at, in, on].",
        "urdu": "دیے گئے اختیارات [at, in, on] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q23",
    "title": "Sentence Comprehension (Q23 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Roberts,\nMy wife and I had dinner at your restaurant last Saturday, and I must say [example] that we were very\ndisappointed. We booked a table for eight o'clock, but we had to wait ",
        "gapId": "gap-1",
        "options": [
          "during",
          "since",
          "for"
        ],
        "correctIndex": 2,
        "textAfter": " half an hour. "
      },
      {
        "textBefore": "The\nwaiter was ",
        "gapId": "gap-2",
        "options": [
          "enough",
          "quite",
          "such"
        ],
        "correctIndex": 1,
        "textAfter": " rude when we asked about our order. "
      },
      {
        "textBefore": "My steak was ",
        "gapId": "gap-3",
        "options": [
          "worse",
          "bad",
          "badly"
        ],
        "correctIndex": 2,
        "textAfter": " cooked, and\nthe vegetables were cold. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-4",
        "options": [
          "want",
          "hope",
          "wish"
        ],
        "correctIndex": 1,
        "textAfter": " this letter "
      },
      {
        "textBefore": "will help you ",
        "gapId": "gap-5",
        "options": [
          "improved",
          "improving",
          "improve"
        ],
        "correctIndex": 2,
        "textAfter": " the quality of your service."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [during, since, for].",
        "urdu": "دیے گئے اختیارات [during, since, for] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"quite\" correctly completes the sentence context and grammatical structure among [enough, quite, such].",
        "urdu": "دیے گئے اختیارات [enough, quite, such] میں سے درست فقرہ اور قواعد کے مطابق \"quite\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"badly\" correctly completes the sentence context and grammatical structure among [worse, bad, badly].",
        "urdu": "دیے گئے اختیارات [worse, bad, badly] میں سے درست فقرہ اور قواعد کے مطابق \"badly\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"hope\" correctly completes the sentence context and grammatical structure among [want, hope, wish].",
        "urdu": "دیے گئے اختیارات [want, hope, wish] میں سے درست فقرہ اور قواعد کے مطابق \"hope\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"improve\" correctly completes the sentence context and grammatical structure among [improved, improving, improve].",
        "urdu": "دیے گئے اختیارات [improved, improving, improve] میں سے درست فقرہ اور قواعد کے مطابق \"improve\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q24",
    "title": "Sentence Comprehension (Q24 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Lisa,\nWe're moving into [example] a new house next month! It's much ",
        "gapId": "gap-1",
        "options": [
          "bigger",
          "more big",
          "biggest"
        ],
        "correctIndex": 0,
        "textAfter": " than our old one, with a big\ngarden. "
      },
      {
        "textBefore": "The only problem is that it's quite far ",
        "gapId": "gap-2",
        "options": [
          "off",
          "of",
          "from"
        ],
        "correctIndex": 2,
        "textAfter": " the city centre. "
      },
      {
        "textBefore": "I'll probably have to ",
        "gapId": "gap-3",
        "options": [
          "take",
          "do",
          "make"
        ],
        "correctIndex": 0,
        "textAfter": " the bus to work every day. "
      },
      {
        "textBefore": "You must ",
        "gapId": "gap-4",
        "options": [
          "arrive",
          "come",
          "go"
        ],
        "correctIndex": 1,
        "textAfter": " "
      },
      {
        "textBefore": "and see us when we have settled ",
        "gapId": "gap-5",
        "options": [
          "on",
          "at",
          "in"
        ],
        "correctIndex": 2,
        "textAfter": "."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"bigger\" correctly completes the sentence context and grammatical structure among [bigger, more big, biggest].",
        "urdu": "دیے گئے اختیارات [bigger, more big, biggest] میں سے درست فقرہ اور قواعد کے مطابق \"bigger\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"from\" correctly completes the sentence context and grammatical structure among [off, of, from].",
        "urdu": "دیے گئے اختیارات [off, of, from] میں سے درست فقرہ اور قواعد کے مطابق \"from\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"take\" correctly completes the sentence context and grammatical structure among [take, do, make].",
        "urdu": "دیے گئے اختیارات [take, do, make] میں سے درست فقرہ اور قواعد کے مطابق \"take\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"come\" correctly completes the sentence context and grammatical structure among [arrive, come, go].",
        "urdu": "دیے گئے اختیارات [arrive, come, go] میں سے درست فقرہ اور قواعد کے مطابق \"come\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [on, at, in].",
        "urdu": "دیے گئے اختیارات [on, at, in] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q25",
    "title": "Sentence Comprehension (Q25 - Level: Medium-Hard)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Green,\nThank you for giving me the opportunity [example] to attend an interview for the position of marketing\nassistant. I really ",
        "gapId": "gap-1",
        "options": [
          "appreciation",
          "apprehended",
          "appreciated"
        ],
        "correctIndex": 2,
        "textAfter": " the chance to learn more about your company. "
      },
      {
        "textBefore": "I am very ",
        "gapId": "gap-2",
        "options": [
          "interest",
          "interesting",
          "interested"
        ],
        "correctIndex": 2,
        "textAfter": " in\nworking for a team like yours. "
      },
      {
        "textBefore": "I believe my experience ",
        "gapId": "gap-3",
        "options": [
          "preparing",
          "prepare",
          "prepares"
        ],
        "correctIndex": 2,
        "textAfter": " me well for the role. "
      },
      {
        "textBefore": "Please do\nnot hesitate to contact me if you need any further ",
        "gapId": "gap-4",
        "options": [
          "informations",
          "information",
          "informed"
        ],
        "correctIndex": 1,
        "textAfter": ". "
      },
      {
        "textBefore": "I look forward to ",
        "gapId": "gap-5",
        "options": [
          "hearing",
          "heard",
          "hear"
        ],
        "correctIndex": 0,
        "textAfter": " from you."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"appreciated\" correctly completes the sentence context and grammatical structure among [appreciation, apprehended, appreciated].",
        "urdu": "دیے گئے اختیارات [appreciation, apprehended, appreciated] میں سے درست فقرہ اور قواعد کے مطابق \"appreciated\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"interested\" correctly completes the sentence context and grammatical structure among [interest, interesting, interested].",
        "urdu": "دیے گئے اختیارات [interest, interesting, interested] میں سے درست فقرہ اور قواعد کے مطابق \"interested\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"prepares\" correctly completes the sentence context and grammatical structure among [preparing, prepare, prepares].",
        "urdu": "دیے گئے اختیارات [preparing, prepare, prepares] میں سے درست فقرہ اور قواعد کے مطابق \"prepares\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"information\" correctly completes the sentence context and grammatical structure among [informations, information, informed].",
        "urdu": "دیے گئے اختیارات [informations, information, informed] میں سے درست فقرہ اور قواعد کے مطابق \"information\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"hearing\" correctly completes the sentence context and grammatical structure among [hearing, heard, hear].",
        "urdu": "دیے گئے اختیارات [hearing, heard, hear] میں سے درست فقرہ اور قواعد کے مطابق \"hearing\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q26",
    "title": "Sentence Comprehension (Q26 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Anna,\nI hope you are keeping well [example]! I'm writing to invite you to my wedding. It will be ",
        "gapId": "gap-1",
        "options": [
          "kept",
          "held",
          "taken"
        ],
        "correctIndex": 1,
        "textAfter": " on 14\nAugust at a small church. "
      },
      {
        "textBefore": "The party afterwards will ",
        "gapId": "gap-2",
        "options": [
          "is",
          "be",
          "being"
        ],
        "correctIndex": 1,
        "textAfter": " in a hotel nearby. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-3",
        "options": [
          "get",
          "let",
          "make"
        ],
        "correctIndex": 1,
        "textAfter": "\nme know if you can come. "
      },
      {
        "textBefore": "I am looking ",
        "gapId": "gap-4",
        "options": [
          "front",
          "forward",
          "further"
        ],
        "correctIndex": 1,
        "textAfter": " to seeing you. "
      },
      {
        "textBefore": "Please reply ",
        "gapId": "gap-5",
        "options": [
          "by",
          "within",
          "until"
        ],
        "correctIndex": 0,
        "textAfter": " the end of\nJune."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"held\" correctly completes the sentence context and grammatical structure among [kept, held, taken].",
        "urdu": "دیے گئے اختیارات [kept, held, taken] میں سے درست فقرہ اور قواعد کے مطابق \"held\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"be\" correctly completes the sentence context and grammatical structure among [is, be, being].",
        "urdu": "دیے گئے اختیارات [is, be, being] میں سے درست فقرہ اور قواعد کے مطابق \"be\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"let\" correctly completes the sentence context and grammatical structure among [get, let, make].",
        "urdu": "دیے گئے اختیارات [get, let, make] میں سے درست فقرہ اور قواعد کے مطابق \"let\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"forward\" correctly completes the sentence context and grammatical structure among [front, forward, further].",
        "urdu": "دیے گئے اختیارات [front, forward, further] میں سے درست فقرہ اور قواعد کے مطابق \"forward\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [by, within, until].",
        "urdu": "دیے گئے اختیارات [by, within, until] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q27",
    "title": "Sentence Comprehension (Q27 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Dan,\nCould you do me a favour [example]? My car is at the garage, so I need a ",
        "gapId": "gap-1",
        "options": [
          "lifted",
          "lifting",
          "lift"
        ],
        "correctIndex": 2,
        "textAfter": " to work tomorrow. "
      },
      {
        "textBefore": "I'll\nbuy you lunch ",
        "gapId": "gap-2",
        "options": [
          "in",
          "at",
          "on"
        ],
        "correctIndex": 0,
        "textAfter": " return. "
      },
      {
        "textBefore": "You live quite ",
        "gapId": "gap-3",
        "options": [
          "nearly",
          "near",
          "nearest"
        ],
        "correctIndex": 1,
        "textAfter": " my office, so it shouldn't take long. "
      },
      {
        "textBefore": "I would\nreally ",
        "gapId": "gap-4",
        "options": [
          "appreciation",
          "appreciate",
          "appreciating"
        ],
        "correctIndex": 1,
        "textAfter": " it if you "
      },
      {
        "textBefore": "could pick me up ",
        "gapId": "gap-5",
        "options": [
          "among",
          "along",
          "around"
        ],
        "correctIndex": 2,
        "textAfter": " eight o'clock."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"lift\" correctly completes the sentence context and grammatical structure among [lifted, lifting, lift].",
        "urdu": "دیے گئے اختیارات [lifted, lifting, lift] میں سے درست فقرہ اور قواعد کے مطابق \"lift\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [in, at, on].",
        "urdu": "دیے گئے اختیارات [in, at, on] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"near\" correctly completes the sentence context and grammatical structure among [nearly, near, nearest].",
        "urdu": "دیے گئے اختیارات [nearly, near, nearest] میں سے درست فقرہ اور قواعد کے مطابق \"near\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"appreciate\" correctly completes the sentence context and grammatical structure among [appreciation, appreciate, appreciating].",
        "urdu": "دیے گئے اختیارات [appreciation, appreciate, appreciating] میں سے درست فقرہ اور قواعد کے مطابق \"appreciate\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"around\" correctly completes the sentence context and grammatical structure among [among, along, around].",
        "urdu": "دیے گئے اختیارات [among, along, around] میں سے درست فقرہ اور قواعد کے مطابق \"around\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q28",
    "title": "Sentence Comprehension (Q28 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Scott,\nI would like to book a double room for [example] three nights from 12 July. Could you tell me ",
        "gapId": "gap-1",
        "options": [
          "what",
          "which",
          "whether"
        ],
        "correctIndex": 2,
        "textAfter": "\nthe room has a view of the sea? "
      },
      {
        "textBefore": "Is breakfast ",
        "gapId": "gap-2",
        "options": [
          "included",
          "including",
          "include"
        ],
        "correctIndex": 0,
        "textAfter": " in the price? "
      },
      {
        "textBefore": "We will arrive ",
        "gapId": "gap-3",
        "options": [
          "with",
          "by",
          "on"
        ],
        "correctIndex": 1,
        "textAfter": " train at\nabout six in the evening. "
      },
      {
        "textBefore": "Could you ",
        "gapId": "gap-4",
        "options": [
          "book",
          "booking",
          "booked"
        ],
        "correctIndex": 0,
        "textAfter": " a taxi for us? "
      },
      {
        "textBefore": "Please send me ",
        "gapId": "gap-5",
        "options": [
          "a",
          "an",
          "any"
        ],
        "correctIndex": 0,
        "textAfter": " confirmation\nby email."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"whether\" correctly completes the sentence context and grammatical structure among [what, which, whether].",
        "urdu": "دیے گئے اختیارات [what, which, whether] میں سے درست فقرہ اور قواعد کے مطابق \"whether\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"included\" correctly completes the sentence context and grammatical structure among [included, including, include].",
        "urdu": "دیے گئے اختیارات [included, including, include] میں سے درست فقرہ اور قواعد کے مطابق \"included\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [with, by, on].",
        "urdu": "دیے گئے اختیارات [with, by, on] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"book\" correctly completes the sentence context and grammatical structure among [book, booking, booked].",
        "urdu": "دیے گئے اختیارات [book, booking, booked] میں سے درست فقرہ اور قواعد کے مطابق \"book\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"a\" correctly completes the sentence context and grammatical structure among [a, an, any].",
        "urdu": "دیے گئے اختیارات [a, an, any] میں سے درست فقرہ اور قواعد کے مطابق \"a\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q29",
    "title": "Sentence Comprehension (Q29 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Mark,\nDid you watch the match last [example] night? It was ",
        "gapId": "gap-1",
        "options": [
          "once",
          "ones",
          "one"
        ],
        "correctIndex": 2,
        "textAfter": " of the best games I have ever seen! "
      },
      {
        "textBefore": "Our\nteam scored three goals ",
        "gapId": "gap-2",
        "options": [
          "on",
          "at",
          "in"
        ],
        "correctIndex": 2,
        "textAfter": " the first half. "
      },
      {
        "textBefore": "The other team ",
        "gapId": "gap-3",
        "options": [
          "was",
          "did",
          "had"
        ],
        "correctIndex": 1,
        "textAfter": " not play well at all. "
      },
      {
        "textBefore": "I think\nwe will ",
        "gapId": "gap-4",
        "options": [
          "won",
          "win",
          "winning"
        ],
        "correctIndex": 1,
        "textAfter": " the league this year. "
      },
      {
        "textBefore": "Do you want to ",
        "gapId": "gap-5",
        "options": [
          "reach",
          "come",
          "arrive"
        ],
        "correctIndex": 1,
        "textAfter": " to the next match with me?"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"one\" correctly completes the sentence context and grammatical structure among [once, ones, one].",
        "urdu": "دیے گئے اختیارات [once, ones, one] میں سے درست فقرہ اور قواعد کے مطابق \"one\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [on, at, in].",
        "urdu": "دیے گئے اختیارات [on, at, in] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"did\" correctly completes the sentence context and grammatical structure among [was, did, had].",
        "urdu": "دیے گئے اختیارات [was, did, had] میں سے درست فقرہ اور قواعد کے مطابق \"did\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"win\" correctly completes the sentence context and grammatical structure among [won, win, winning].",
        "urdu": "دیے گئے اختیارات [won, win, winning] میں سے درست فقرہ اور قواعد کے مطابق \"win\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"come\" correctly completes the sentence context and grammatical structure among [reach, come, arrive].",
        "urdu": "دیے گئے اختیارات [reach, come, arrive] میں سے درست فقرہ اور قواعد کے مطابق \"come\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q30",
    "title": "Sentence Comprehension (Q30 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Ms Hall,\nI am sorry to tell you that I will not be able to come to work this [example] week. I have caught a bad\ncold and my doctor has told me to stay ",
        "gapId": "gap-1",
        "options": [
          "on",
          "at",
          "in"
        ],
        "correctIndex": 2,
        "textAfter": " bed. "
      },
      {
        "textBefore": "I have ",
        "gapId": "gap-2",
        "options": [
          "getting",
          "got",
          "get"
        ],
        "correctIndex": 1,
        "textAfter": " a medical certificate, "
      },
      {
        "textBefore": "which\nI will send ",
        "gapId": "gap-3",
        "options": [
          "for",
          "to",
          "at"
        ],
        "correctIndex": 1,
        "textAfter": " you by post. "
      },
      {
        "textBefore": "I hope to be ",
        "gapId": "gap-4",
        "options": [
          "back",
          "return",
          "returned"
        ],
        "correctIndex": 0,
        "textAfter": " at work on Monday. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-5",
        "options": [
          "am",
          "have",
          "was"
        ],
        "correctIndex": 0,
        "textAfter": " sorry for the\nproblems this may cause."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [on, at, in].",
        "urdu": "دیے گئے اختیارات [on, at, in] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"got\" correctly completes the sentence context and grammatical structure among [getting, got, get].",
        "urdu": "دیے گئے اختیارات [getting, got, get] میں سے درست فقرہ اور قواعد کے مطابق \"got\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"to\" correctly completes the sentence context and grammatical structure among [for, to, at].",
        "urdu": "دیے گئے اختیارات [for, to, at] میں سے درست فقرہ اور قواعد کے مطابق \"to\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"back\" correctly completes the sentence context and grammatical structure among [back, return, returned].",
        "urdu": "دیے گئے اختیارات [back, return, returned] میں سے درست فقرہ اور قواعد کے مطابق \"back\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"am\" correctly completes the sentence context and grammatical structure among [am, have, was].",
        "urdu": "دیے گئے اختیارات [am, have, was] میں سے درست فقرہ اور قواعد کے مطابق \"am\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q31",
    "title": "Sentence Comprehension (Q31 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Sam,\nThanks for your email. I'm glad [example] to hear that you are coming to visit me. The weather here ",
        "gapId": "gap-1",
        "options": [
          "are",
          "be",
          "is"
        ],
        "correctIndex": 2,
        "textAfter": " very hot in July, so bring some light clothes. "
      },
      {
        "textBefore": "There are ",
        "gapId": "gap-2",
        "options": [
          "many",
          "much",
          "lot"
        ],
        "correctIndex": 0,
        "textAfter": " interesting places to see.\n"
      },
      {
        "textBefore": "We can ",
        "gapId": "gap-3",
        "options": [
          "go",
          "going",
          "goes"
        ],
        "correctIndex": 0,
        "textAfter": " to the beach on Sunday. "
      },
      {
        "textBefore": "I will ",
        "gapId": "gap-4",
        "options": [
          "meat",
          "meet",
          "met"
        ],
        "correctIndex": 1,
        "textAfter": " you at the station. "
      },
      {
        "textBefore": "Please tell me ",
        "gapId": "gap-5",
        "options": [
          "how",
          "what",
          "who"
        ],
        "correctIndex": 1,
        "textAfter": " time your train arrives."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"is\" correctly completes the sentence context and grammatical structure among [are, be, is].",
        "urdu": "دیے گئے اختیارات [are, be, is] میں سے درست فقرہ اور قواعد کے مطابق \"is\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"many\" correctly completes the sentence context and grammatical structure among [many, much, lot].",
        "urdu": "دیے گئے اختیارات [many, much, lot] میں سے درست فقرہ اور قواعد کے مطابق \"many\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"go\" correctly completes the sentence context and grammatical structure among [go, going, goes].",
        "urdu": "دیے گئے اختیارات [go, going, goes] میں سے درست فقرہ اور قواعد کے مطابق \"go\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"meet\" correctly completes the sentence context and grammatical structure among [meat, meet, met].",
        "urdu": "دیے گئے اختیارات [meat, meet, met] میں سے درست فقرہ اور قواعد کے مطابق \"meet\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"what\" correctly completes the sentence context and grammatical structure among [how, what, who].",
        "urdu": "دیے گئے اختیارات [how, what, who] میں سے درست فقرہ اور قواعد کے مطابق \"what\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q32",
    "title": "Sentence Comprehension (Q32 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Sir,\nI am writing to [example] apply for the job of receptionist in your hotel. I have worked in a hotel ",
        "gapId": "gap-1",
        "options": [
          "since",
          "for",
          "from"
        ],
        "correctIndex": 1,
        "textAfter": " two years. "
      },
      {
        "textBefore": "I can speak English, Urdu and a little French. I am a very ",
        "gapId": "gap-2",
        "options": [
          "friendship",
          "friendly",
          "friend"
        ],
        "correctIndex": 1,
        "textAfter": " person "
      },
      {
        "textBefore": "and I\nenjoy ",
        "gapId": "gap-3",
        "options": [
          "work",
          "working",
          "worked"
        ],
        "correctIndex": 1,
        "textAfter": " with people. "
      },
      {
        "textBefore": "I am free to start ",
        "gapId": "gap-4",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "textAfter": " any time. "
      },
      {
        "textBefore": "I have ",
        "gapId": "gap-5",
        "options": [
          "enclose",
          "enclosing",
          "enclosed"
        ],
        "correctIndex": 2,
        "textAfter": " my CV to this\nletter."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [since, for, from].",
        "urdu": "دیے گئے اختیارات [since, for, from] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"friendly\" correctly completes the sentence context and grammatical structure among [friendship, friendly, friend].",
        "urdu": "دیے گئے اختیارات [friendship, friendly, friend] میں سے درست فقرہ اور قواعد کے مطابق \"friendly\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"working\" correctly completes the sentence context and grammatical structure among [work, working, worked].",
        "urdu": "دیے گئے اختیارات [work, working, worked] میں سے درست فقرہ اور قواعد کے مطابق \"working\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"at\" correctly completes the sentence context and grammatical structure among [in, on, at].",
        "urdu": "دیے گئے اختیارات [in, on, at] میں سے درست فقرہ اور قواعد کے مطابق \"at\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"enclosed\" correctly completes the sentence context and grammatical structure among [enclose, enclosing, enclosed].",
        "urdu": "دیے گئے اختیارات [enclose, enclosing, enclosed] میں سے درست فقرہ اور قواعد کے مطابق \"enclosed\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q33",
    "title": "Sentence Comprehension (Q33 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Nadia,\nWhat are you doing at [example] the weekend? I thought we could go to the cinema ",
        "gapId": "gap-1",
        "options": [
          "at",
          "on",
          "in"
        ],
        "correctIndex": 1,
        "textAfter": "\nSaturday. "
      },
      {
        "textBefore": "There is a new comedy film ",
        "gapId": "gap-2",
        "options": [
          "shown",
          "showing",
          "show"
        ],
        "correctIndex": 1,
        "textAfter": " at the Odeon. "
      },
      {
        "textBefore": "It starts ",
        "gapId": "gap-3",
        "options": [
          "at",
          "in",
          "on"
        ],
        "correctIndex": 0,
        "textAfter": " seven o'clock. "
      },
      {
        "textBefore": "I\ncan pick you up ",
        "gapId": "gap-4",
        "options": [
          "by",
          "on",
          "in"
        ],
        "correctIndex": 2,
        "textAfter": " my car if you like. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-5",
        "options": [
          "make",
          "tell",
          "let"
        ],
        "correctIndex": 2,
        "textAfter": " me know soon."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"on\" correctly completes the sentence context and grammatical structure among [at, on, in].",
        "urdu": "دیے گئے اختیارات [at, on, in] میں سے درست فقرہ اور قواعد کے مطابق \"on\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"showing\" correctly completes the sentence context and grammatical structure among [shown, showing, show].",
        "urdu": "دیے گئے اختیارات [shown, showing, show] میں سے درست فقرہ اور قواعد کے مطابق \"showing\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"at\" correctly completes the sentence context and grammatical structure among [at, in, on].",
        "urdu": "دیے گئے اختیارات [at, in, on] میں سے درست فقرہ اور قواعد کے مطابق \"at\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [by, on, in].",
        "urdu": "دیے گئے اختیارات [by, on, in] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"let\" correctly completes the sentence context and grammatical structure among [make, tell, let].",
        "urdu": "دیے گئے اختیارات [make, tell, let] میں سے درست فقرہ اور قواعد کے مطابق \"let\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q34",
    "title": "Sentence Comprehension (Q34 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Jones,\nI received your bill for 85 pounds, but I think there is a mistake [example]. I only used the service for two\nmonths, ",
        "gapId": "gap-1",
        "options": [
          "because",
          "but",
          "so"
        ],
        "correctIndex": 1,
        "textAfter": " you have charged me for three. "
      },
      {
        "textBefore": "I called your office last week and the lady ",
        "gapId": "gap-2",
        "options": [
          "spoke",
          "said",
          "told"
        ],
        "correctIndex": 2,
        "textAfter": " me that it would be corrected. "
      },
      {
        "textBefore": "",
        "gapId": "gap-3",
        "options": [
          "Because",
          "However",
          "Although"
        ],
        "correctIndex": 1,
        "textAfter": ", I have not heard anything since. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-4",
        "options": [
          "checking",
          "checks",
          "check"
        ],
        "correctIndex": 2,
        "textAfter": "\nthe bill "
      },
      {
        "textBefore": "and send me the right ",
        "gapId": "gap-5",
        "options": [
          "once",
          "one",
          "ones"
        ],
        "correctIndex": 1,
        "textAfter": "."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"but\" correctly completes the sentence context and grammatical structure among [because, but, so].",
        "urdu": "دیے گئے اختیارات [because, but, so] میں سے درست فقرہ اور قواعد کے مطابق \"but\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"told\" correctly completes the sentence context and grammatical structure among [spoke, said, told].",
        "urdu": "دیے گئے اختیارات [spoke, said, told] میں سے درست فقرہ اور قواعد کے مطابق \"told\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"However\" correctly completes the sentence context and grammatical structure among [Because, However, Although].",
        "urdu": "دیے گئے اختیارات [Because, However, Although] میں سے درست فقرہ اور قواعد کے مطابق \"However\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"check\" correctly completes the sentence context and grammatical structure among [checking, checks, check].",
        "urdu": "دیے گئے اختیارات [checking, checks, check] میں سے درست فقرہ اور قواعد کے مطابق \"check\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"one\" correctly completes the sentence context and grammatical structure among [once, one, ones].",
        "urdu": "دیے گئے اختیارات [once, one, ones] میں سے درست فقرہ اور قواعد کے مطابق \"one\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q35",
    "title": "Sentence Comprehension (Q35 - Level: Medium)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Parents,\nThe school sports day will take place [example] on Friday 10 June. All children should wear their sports\n",
        "gapId": "gap-1",
        "options": [
          "clothes",
          "closed",
          "close"
        ],
        "correctIndex": 0,
        "textAfter": " and bring a bottle of water. "
      },
      {
        "textBefore": "If the weather is bad, the event ",
        "gapId": "gap-2",
        "options": [
          "will",
          "does",
          "is"
        ],
        "correctIndex": 0,
        "textAfter": " be moved to the\nfollowing week. "
      },
      {
        "textBefore": "Parents are warmly ",
        "gapId": "gap-3",
        "options": [
          "invite",
          "invited",
          "inviting"
        ],
        "correctIndex": 1,
        "textAfter": " to attend. "
      },
      {
        "textBefore": "There will be a small prize for ",
        "gapId": "gap-4",
        "options": [
          "each",
          "both",
          "all"
        ],
        "correctIndex": 0,
        "textAfter": "\nwinner. "
      },
      {
        "textBefore": "We hope to see ",
        "gapId": "gap-5",
        "options": [
          "every",
          "all",
          "whole"
        ],
        "correctIndex": 1,
        "textAfter": " of you there."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"clothes\" correctly completes the sentence context and grammatical structure among [clothes, closed, close].",
        "urdu": "دیے گئے اختیارات [clothes, closed, close] میں سے درست فقرہ اور قواعد کے مطابق \"clothes\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"will\" correctly completes the sentence context and grammatical structure among [will, does, is].",
        "urdu": "دیے گئے اختیارات [will, does, is] میں سے درست فقرہ اور قواعد کے مطابق \"will\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"invited\" correctly completes the sentence context and grammatical structure among [invite, invited, inviting].",
        "urdu": "دیے گئے اختیارات [invite, invited, inviting] میں سے درست فقرہ اور قواعد کے مطابق \"invited\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"each\" correctly completes the sentence context and grammatical structure among [each, both, all].",
        "urdu": "دیے گئے اختیارات [each, both, all] میں سے درست فقرہ اور قواعد کے مطابق \"each\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"all\" correctly completes the sentence context and grammatical structure among [every, all, whole].",
        "urdu": "دیے گئے اختیارات [every, all, whole] میں سے درست فقرہ اور قواعد کے مطابق \"all\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q36",
    "title": "Sentence Comprehension (Q36 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Tom,\nI am writing to [example] tell you about my new job. I started ",
        "gapId": "gap-1",
        "options": [
          "at",
          "on",
          "in"
        ],
        "correctIndex": 1,
        "textAfter": " Monday and I really like it. "
      },
      {
        "textBefore": "My\nboss is very ",
        "gapId": "gap-2",
        "options": [
          "nicer",
          "nice",
          "nicely"
        ],
        "correctIndex": 1,
        "textAfter": ". "
      },
      {
        "textBefore": "I work from nine ",
        "gapId": "gap-3",
        "options": [
          "to",
          "by",
          "at"
        ],
        "correctIndex": 0,
        "textAfter": " five. "
      },
      {
        "textBefore": "I go to work ",
        "gapId": "gap-4",
        "options": [
          "with",
          "by",
          "in"
        ],
        "correctIndex": 1,
        "textAfter": " bus. "
      },
      {
        "textBefore": "Please write ",
        "gapId": "gap-5",
        "options": [
          "at",
          "to",
          "on"
        ],
        "correctIndex": 1,
        "textAfter": " me soon."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"on\" correctly completes the sentence context and grammatical structure among [at, on, in].",
        "urdu": "دیے گئے اختیارات [at, on, in] میں سے درست فقرہ اور قواعد کے مطابق \"on\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"nice\" correctly completes the sentence context and grammatical structure among [nicer, nice, nicely].",
        "urdu": "دیے گئے اختیارات [nicer, nice, nicely] میں سے درست فقرہ اور قواعد کے مطابق \"nice\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"to\" correctly completes the sentence context and grammatical structure among [to, by, at].",
        "urdu": "دیے گئے اختیارات [to, by, at] میں سے درست فقرہ اور قواعد کے مطابق \"to\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"by\" correctly completes the sentence context and grammatical structure among [with, by, in].",
        "urdu": "دیے گئے اختیارات [with, by, in] میں سے درست فقرہ اور قواعد کے مطابق \"by\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"to\" correctly completes the sentence context and grammatical structure among [at, to, on].",
        "urdu": "دیے گئے اختیارات [at, to, on] میں سے درست فقرہ اور قواعد کے مطابق \"to\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q37",
    "title": "Sentence Comprehension (Q37 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Ben,\nHow was your holiday? I hope [example] you had a great time. Did you ",
        "gapId": "gap-1",
        "options": [
          "do",
          "take",
          "make"
        ],
        "correctIndex": 1,
        "textAfter": " any nice photos? "
      },
      {
        "textBefore": "We\n",
        "gapId": "gap-2",
        "options": [
          "gone",
          "go",
          "went"
        ],
        "correctIndex": 2,
        "textAfter": " to the mountains last summer. "
      },
      {
        "textBefore": "It was very ",
        "gapId": "gap-3",
        "options": [
          "beauty",
          "beautifully",
          "beautiful"
        ],
        "correctIndex": 2,
        "textAfter": " and the food was delicious. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-4",
        "options": [
          "want",
          "wants",
          "wanting"
        ],
        "correctIndex": 0,
        "textAfter": " to go again next year. "
      },
      {
        "textBefore": "Send me your ",
        "gapId": "gap-5",
        "options": [
          "newly",
          "new",
          "news"
        ],
        "correctIndex": 2,
        "textAfter": " soon!"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"take\" correctly completes the sentence context and grammatical structure among [do, take, make].",
        "urdu": "دیے گئے اختیارات [do, take, make] میں سے درست فقرہ اور قواعد کے مطابق \"take\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"went\" correctly completes the sentence context and grammatical structure among [gone, go, went].",
        "urdu": "دیے گئے اختیارات [gone, go, went] میں سے درست فقرہ اور قواعد کے مطابق \"went\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"beautiful\" correctly completes the sentence context and grammatical structure among [beauty, beautifully, beautiful].",
        "urdu": "دیے گئے اختیارات [beauty, beautifully, beautiful] میں سے درست فقرہ اور قواعد کے مطابق \"beautiful\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"want\" correctly completes the sentence context and grammatical structure among [want, wants, wanting].",
        "urdu": "دیے گئے اختیارات [want, wants, wanting] میں سے درست فقرہ اور قواعد کے مطابق \"want\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"news\" correctly completes the sentence context and grammatical structure among [newly, new, news].",
        "urdu": "دیے گئے اختیارات [newly, new, news] میں سے درست فقرہ اور قواعد کے مطابق \"news\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q38",
    "title": "Sentence Comprehension (Q38 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Ali,\nHappy birthday! I hope you have a wonderful [example] day. Here is a small present ",
        "gapId": "gap-1",
        "options": [
          "in",
          "at",
          "for"
        ],
        "correctIndex": 2,
        "textAfter": " you. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-2",
        "options": [
          "thinks",
          "thinking",
          "think"
        ],
        "correctIndex": 2,
        "textAfter": "\nyou will like it. "
      },
      {
        "textBefore": "We are going to have a ",
        "gapId": "gap-3",
        "options": [
          "party",
          "partying",
          "parties"
        ],
        "correctIndex": 0,
        "textAfter": " in the evening. "
      },
      {
        "textBefore": "Please come ",
        "gapId": "gap-4",
        "options": [
          "on",
          "in",
          "at"
        ],
        "correctIndex": 2,
        "textAfter": " six o'clock.\n"
      },
      {
        "textBefore": "It will be very ",
        "gapId": "gap-5",
        "options": [
          "excited",
          "excite",
          "exciting"
        ],
        "correctIndex": 2,
        "textAfter": "!"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [in, at, for].",
        "urdu": "دیے گئے اختیارات [in, at, for] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"think\" correctly completes the sentence context and grammatical structure among [thinks, thinking, think].",
        "urdu": "دیے گئے اختیارات [thinks, thinking, think] میں سے درست فقرہ اور قواعد کے مطابق \"think\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"party\" correctly completes the sentence context and grammatical structure among [party, partying, parties].",
        "urdu": "دیے گئے اختیارات [party, partying, parties] میں سے درست فقرہ اور قواعد کے مطابق \"party\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"at\" correctly completes the sentence context and grammatical structure among [on, in, at].",
        "urdu": "دیے گئے اختیارات [on, in, at] میں سے درست فقرہ اور قواعد کے مطابق \"at\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"exciting\" correctly completes the sentence context and grammatical structure among [excited, excite, exciting].",
        "urdu": "دیے گئے اختیارات [excited, excite, exciting] میں سے درست فقرہ اور قواعد کے مطابق \"exciting\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q39",
    "title": "Sentence Comprehension (Q39 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mum,\nI am having a great time in [example] London. The weather ",
        "gapId": "gap-1",
        "options": [
          "is",
          "are",
          "be"
        ],
        "correctIndex": 0,
        "textAfter": " sunny every day. "
      },
      {
        "textBefore": "I have ",
        "gapId": "gap-2",
        "options": [
          "seen",
          "see",
          "saw"
        ],
        "correctIndex": 0,
        "textAfter": " a lot of famous places. "
      },
      {
        "textBefore": "Yesterday I ",
        "gapId": "gap-3",
        "options": [
          "visiting",
          "visit",
          "visited"
        ],
        "correctIndex": 2,
        "textAfter": " the Tower of London. "
      },
      {
        "textBefore": "Tomorrow we ",
        "gapId": "gap-4",
        "options": [
          "am",
          "are",
          "is"
        ],
        "correctIndex": 1,
        "textAfter": "\ngoing to see a play. "
      },
      {
        "textBefore": "I miss you ",
        "gapId": "gap-5",
        "options": [
          "so",
          "many",
          "any"
        ],
        "correctIndex": 0,
        "textAfter": " much."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"is\" correctly completes the sentence context and grammatical structure among [is, are, be].",
        "urdu": "دیے گئے اختیارات [is, are, be] میں سے درست فقرہ اور قواعد کے مطابق \"is\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"seen\" correctly completes the sentence context and grammatical structure among [seen, see, saw].",
        "urdu": "دیے گئے اختیارات [seen, see, saw] میں سے درست فقرہ اور قواعد کے مطابق \"seen\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"visited\" correctly completes the sentence context and grammatical structure among [visiting, visit, visited].",
        "urdu": "دیے گئے اختیارات [visiting, visit, visited] میں سے درست فقرہ اور قواعد کے مطابق \"visited\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"are\" correctly completes the sentence context and grammatical structure among [am, are, is].",
        "urdu": "دیے گئے اختیارات [am, are, is] میں سے درست فقرہ اور قواعد کے مطابق \"are\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"so\" correctly completes the sentence context and grammatical structure among [so, many, any].",
        "urdu": "دیے گئے اختیارات [so, many, any] میں سے درست فقرہ اور قواعد کے مطابق \"so\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q40",
    "title": "Sentence Comprehension (Q40 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hello Sara,\nI want to join your English class. When [example] does it start? Is it ",
        "gapId": "gap-1",
        "options": [
          "at",
          "on",
          "in"
        ],
        "correctIndex": 2,
        "textAfter": " the morning or in the\nevening? "
      },
      {
        "textBefore": "How ",
        "gapId": "gap-2",
        "options": [
          "much",
          "many",
          "long"
        ],
        "correctIndex": 0,
        "textAfter": " does the course cost? "
      },
      {
        "textBefore": "Where ",
        "gapId": "gap-3",
        "options": [
          "are",
          "can",
          "am"
        ],
        "correctIndex": 1,
        "textAfter": " I pay the fee? "
      },
      {
        "textBefore": "I live ",
        "gapId": "gap-4",
        "options": [
          "in",
          "to",
          "on"
        ],
        "correctIndex": 0,
        "textAfter": " the\ncentre of town. "
      },
      {
        "textBefore": "Thank you ",
        "gapId": "gap-5",
        "options": [
          "for",
          "at",
          "on"
        ],
        "correctIndex": 0,
        "textAfter": " your help."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [at, on, in].",
        "urdu": "دیے گئے اختیارات [at, on, in] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"much\" correctly completes the sentence context and grammatical structure among [much, many, long].",
        "urdu": "دیے گئے اختیارات [much, many, long] میں سے درست فقرہ اور قواعد کے مطابق \"much\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"can\" correctly completes the sentence context and grammatical structure among [are, can, am].",
        "urdu": "دیے گئے اختیارات [are, can, am] میں سے درست فقرہ اور قواعد کے مطابق \"can\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [in, to, on].",
        "urdu": "دیے گئے اختیارات [in, to, on] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"for\" correctly completes the sentence context and grammatical structure among [for, at, on].",
        "urdu": "دیے گئے اختیارات [for, at, on] میں سے درست فقرہ اور قواعد کے مطابق \"for\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q41",
    "title": "Sentence Comprehension (Q41 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "About Me\nMy name is Fatima and I am a student. I get [example] up at six o'clock every day. I ",
        "gapId": "gap-1",
        "options": [
          "has",
          "have",
          "having"
        ],
        "correctIndex": 1,
        "textAfter": " breakfast\nwith my family. "
      },
      {
        "textBefore": "Then I go ",
        "gapId": "gap-2",
        "options": [
          "at",
          "on",
          "to"
        ],
        "correctIndex": 2,
        "textAfter": " school by bus. "
      },
      {
        "textBefore": "My favourite ",
        "gapId": "gap-3",
        "options": [
          "subjects",
          "subjective",
          "subject"
        ],
        "correctIndex": 2,
        "textAfter": " is English. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-4",
        "options": [
          "do",
          "take",
          "make"
        ],
        "correctIndex": 0,
        "textAfter": "\nhomework in the evening. "
      },
      {
        "textBefore": "I go to bed ",
        "gapId": "gap-5",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "textAfter": " ten o'clock."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"have\" correctly completes the sentence context and grammatical structure among [has, have, having].",
        "urdu": "دیے گئے اختیارات [has, have, having] میں سے درست فقرہ اور قواعد کے مطابق \"have\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"to\" correctly completes the sentence context and grammatical structure among [at, on, to].",
        "urdu": "دیے گئے اختیارات [at, on, to] میں سے درست فقرہ اور قواعد کے مطابق \"to\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"subject\" correctly completes the sentence context and grammatical structure among [subjects, subjective, subject].",
        "urdu": "دیے گئے اختیارات [subjects, subjective, subject] میں سے درست فقرہ اور قواعد کے مطابق \"subject\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"do\" correctly completes the sentence context and grammatical structure among [do, take, make].",
        "urdu": "دیے گئے اختیارات [do, take, make] میں سے درست فقرہ اور قواعد کے مطابق \"do\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"at\" correctly completes the sentence context and grammatical structure among [in, on, at].",
        "urdu": "دیے گئے اختیارات [in, on, at] میں سے درست فقرہ اور قواعد کے مطابق \"at\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q42",
    "title": "Sentence Comprehension (Q42 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Zara,\nWould you like to go [example] shopping with me on Sunday? I need to buy ",
        "gapId": "gap-1",
        "options": [
          "a",
          "some",
          "any"
        ],
        "correctIndex": 1,
        "textAfter": " new shoes. "
      },
      {
        "textBefore": "The\nshops ",
        "gapId": "gap-2",
        "options": [
          "open",
          "opening",
          "opens"
        ],
        "correctIndex": 0,
        "textAfter": " at ten. "
      },
      {
        "textBefore": "We can have lunch ",
        "gapId": "gap-3",
        "options": [
          "to",
          "in",
          "by"
        ],
        "correctIndex": 1,
        "textAfter": " a cafe. "
      },
      {
        "textBefore": "It ",
        "gapId": "gap-4",
        "options": [
          "will",
          "are",
          "do"
        ],
        "correctIndex": 0,
        "textAfter": " be great to see you. "
      },
      {
        "textBefore": "Call\nme ",
        "gapId": "gap-5",
        "options": [
          "if",
          "but",
          "or"
        ],
        "correctIndex": 0,
        "textAfter": " you are free."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"some\" correctly completes the sentence context and grammatical structure among [a, some, any].",
        "urdu": "دیے گئے اختیارات [a, some, any] میں سے درست فقرہ اور قواعد کے مطابق \"some\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"open\" correctly completes the sentence context and grammatical structure among [open, opening, opens].",
        "urdu": "دیے گئے اختیارات [open, opening, opens] میں سے درست فقرہ اور قواعد کے مطابق \"open\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"in\" correctly completes the sentence context and grammatical structure among [to, in, by].",
        "urdu": "دیے گئے اختیارات [to, in, by] میں سے درست فقرہ اور قواعد کے مطابق \"in\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"will\" correctly completes the sentence context and grammatical structure among [will, are, do].",
        "urdu": "دیے گئے اختیارات [will, are, do] میں سے درست فقرہ اور قواعد کے مطابق \"will\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"if\" correctly completes the sentence context and grammatical structure among [if, but, or].",
        "urdu": "دیے گئے اختیارات [if, but, or] میں سے درست فقرہ اور قواعد کے مطابق \"if\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q43",
    "title": "Sentence Comprehension (Q43 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Mr Brown,\nI am sorry that [example] I cannot come to class today. I ",
        "gapId": "gap-1",
        "options": [
          "having",
          "has",
          "have"
        ],
        "correctIndex": 2,
        "textAfter": " a headache and a fever. "
      },
      {
        "textBefore": "The doctor\nsays I ",
        "gapId": "gap-2",
        "options": [
          "must to",
          "musts",
          "must"
        ],
        "correctIndex": 2,
        "textAfter": " rest for two days. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-3",
        "options": [
          "are",
          "will",
          "am"
        ],
        "correctIndex": 1,
        "textAfter": " come back on Thursday. "
      },
      {
        "textBefore": "Please give me the\nhomework ",
        "gapId": "gap-4",
        "options": [
          "but",
          "so",
          "because"
        ],
        "correctIndex": 1,
        "textAfter": " I can do it at home. "
      },
      {
        "textBefore": "Thank you ",
        "gapId": "gap-5",
        "options": [
          "lot",
          "very",
          "many"
        ],
        "correctIndex": 1,
        "textAfter": " much."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"have\" correctly completes the sentence context and grammatical structure among [having, has, have].",
        "urdu": "دیے گئے اختیارات [having, has, have] میں سے درست فقرہ اور قواعد کے مطابق \"have\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"must\" correctly completes the sentence context and grammatical structure among [must to, musts, must].",
        "urdu": "دیے گئے اختیارات [must to, musts, must] میں سے درست فقرہ اور قواعد کے مطابق \"must\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"will\" correctly completes the sentence context and grammatical structure among [are, will, am].",
        "urdu": "دیے گئے اختیارات [are, will, am] میں سے درست فقرہ اور قواعد کے مطابق \"will\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"so\" correctly completes the sentence context and grammatical structure among [but, so, because].",
        "urdu": "دیے گئے اختیارات [but, so, because] میں سے درست فقرہ اور قواعد کے مطابق \"so\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"very\" correctly completes the sentence context and grammatical structure among [lot, very, many].",
        "urdu": "دیے گئے اختیارات [lot, very, many] میں سے درست فقرہ اور قواعد کے مطابق \"very\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q44",
    "title": "Sentence Comprehension (Q44 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Welcome!\nWelcome to our town! The town is famous [example] for its old market. There ",
        "gapId": "gap-1",
        "options": [
          "be",
          "is",
          "are"
        ],
        "correctIndex": 1,
        "textAfter": " a lovely park near\nthe river. "
      },
      {
        "textBefore": "You can ",
        "gapId": "gap-2",
        "options": [
          "rented",
          "rent",
          "renting"
        ],
        "correctIndex": 1,
        "textAfter": " a bike and ride along the water. "
      },
      {
        "textBefore": "There ",
        "gapId": "gap-3",
        "options": [
          "am",
          "is",
          "are"
        ],
        "correctIndex": 2,
        "textAfter": " also many good\nrestaurants. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-4",
        "options": [
          "doing",
          "does",
          "do"
        ],
        "correctIndex": 2,
        "textAfter": " not forget to try the local food. "
      },
      {
        "textBefore": "We hope you ",
        "gapId": "gap-5",
        "options": [
          "enjoying",
          "enjoys",
          "enjoy"
        ],
        "correctIndex": 2,
        "textAfter": " your stay."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"is\" correctly completes the sentence context and grammatical structure among [be, is, are].",
        "urdu": "دیے گئے اختیارات [be, is, are] میں سے درست فقرہ اور قواعد کے مطابق \"is\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"rent\" correctly completes the sentence context and grammatical structure among [rented, rent, renting].",
        "urdu": "دیے گئے اختیارات [rented, rent, renting] میں سے درست فقرہ اور قواعد کے مطابق \"rent\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"are\" correctly completes the sentence context and grammatical structure among [am, is, are].",
        "urdu": "دیے گئے اختیارات [am, is, are] میں سے درست فقرہ اور قواعد کے مطابق \"are\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"do\" correctly completes the sentence context and grammatical structure among [doing, does, do].",
        "urdu": "دیے گئے اختیارات [doing, does, do] میں سے درست فقرہ اور قواعد کے مطابق \"do\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"enjoy\" correctly completes the sentence context and grammatical structure among [enjoying, enjoys, enjoy].",
        "urdu": "دیے گئے اختیارات [enjoying, enjoys, enjoy] میں سے درست فقرہ اور قواعد کے مطابق \"enjoy\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q45",
    "title": "Sentence Comprehension (Q45 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Hi Lily,\nI am at the airport now. My plane leaves [example] at ten o'clock. It's a long flight, so I ",
        "gapId": "gap-1",
        "options": [
          "took",
          "take",
          "taken"
        ],
        "correctIndex": 0,
        "textAfter": " a book\nwith me. "
      },
      {
        "textBefore": "I ",
        "gapId": "gap-2",
        "options": [
          "are",
          "am",
          "is"
        ],
        "correctIndex": 1,
        "textAfter": " very tired because I got up early. "
      },
      {
        "textBefore": "I will ",
        "gapId": "gap-3",
        "options": [
          "called",
          "calling",
          "call"
        ],
        "correctIndex": 2,
        "textAfter": " you when I land. "
      },
      {
        "textBefore": "Please ",
        "gapId": "gap-4",
        "options": [
          "say",
          "speak",
          "tell"
        ],
        "correctIndex": 2,
        "textAfter": " Mum I am OK. "
      },
      {
        "textBefore": "See you ",
        "gapId": "gap-5",
        "options": [
          "quickly",
          "soon",
          "early"
        ],
        "correctIndex": 1,
        "textAfter": "!"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"took\" correctly completes the sentence context and grammatical structure among [took, take, taken].",
        "urdu": "دیے گئے اختیارات [took, take, taken] میں سے درست فقرہ اور قواعد کے مطابق \"took\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"am\" correctly completes the sentence context and grammatical structure among [are, am, is].",
        "urdu": "دیے گئے اختیارات [are, am, is] میں سے درست فقرہ اور قواعد کے مطابق \"am\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"call\" correctly completes the sentence context and grammatical structure among [called, calling, call].",
        "urdu": "دیے گئے اختیارات [called, calling, call] میں سے درست فقرہ اور قواعد کے مطابق \"call\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"tell\" correctly completes the sentence context and grammatical structure among [say, speak, tell].",
        "urdu": "دیے گئے اختیارات [say, speak, tell] میں سے درست فقرہ اور قواعد کے مطابق \"tell\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"soon\" correctly completes the sentence context and grammatical structure among [quickly, soon, early].",
        "urdu": "دیے گئے اختیارات [quickly, soon, early] میں سے درست فقرہ اور قواعد کے مطابق \"soon\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q46",
    "title": "Sentence Comprehension (Q46 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Dear Tina,\nI am renting [example] a new flat with my sister. It has two ",
        "gapId": "gap-1",
        "options": [
          "bedroom",
          "bedroomed",
          "bedrooms"
        ],
        "correctIndex": 2,
        "textAfter": " and a small kitchen. "
      },
      {
        "textBefore": "It is ",
        "gapId": "gap-2",
        "options": [
          "near",
          "nearby",
          "nearly"
        ],
        "correctIndex": 0,
        "textAfter": " to\nthe station, so it is easy to go to work. "
      },
      {
        "textBefore": "The rent is not very ",
        "gapId": "gap-3",
        "options": [
          "tall",
          "high",
          "long"
        ],
        "correctIndex": 1,
        "textAfter": ". "
      },
      {
        "textBefore": "We would like to have a\nhouse-warming ",
        "gapId": "gap-4",
        "options": [
          "party",
          "partying",
          "parties"
        ],
        "correctIndex": 0,
        "textAfter": " next week. "
      },
      {
        "textBefore": "Can you ",
        "gapId": "gap-5",
        "options": [
          "coming",
          "come",
          "to come"
        ],
        "correctIndex": 1,
        "textAfter": "?"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"bedrooms\" correctly completes the sentence context and grammatical structure among [bedroom, bedroomed, bedrooms].",
        "urdu": "دیے گئے اختیارات [bedroom, bedroomed, bedrooms] میں سے درست فقرہ اور قواعد کے مطابق \"bedrooms\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"near\" correctly completes the sentence context and grammatical structure among [near, nearby, nearly].",
        "urdu": "دیے گئے اختیارات [near, nearby, nearly] میں سے درست فقرہ اور قواعد کے مطابق \"near\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"high\" correctly completes the sentence context and grammatical structure among [tall, high, long].",
        "urdu": "دیے گئے اختیارات [tall, high, long] میں سے درست فقرہ اور قواعد کے مطابق \"high\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"party\" correctly completes the sentence context and grammatical structure among [party, partying, parties].",
        "urdu": "دیے گئے اختیارات [party, partying, parties] میں سے درست فقرہ اور قواعد کے مطابق \"party\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"come\" correctly completes the sentence context and grammatical structure among [coming, come, to come].",
        "urdu": "دیے گئے اختیارات [coming, come, to come] میں سے درست فقرہ اور قواعد کے مطابق \"come\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q47",
    "title": "Sentence Comprehension (Q47 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "At the Street\nA: Excuse me, how [example] can I get to the post office? B: Go straight ",
        "gapId": "gap-1",
        "options": [
          "along",
          "between",
          "among"
        ],
        "correctIndex": 0,
        "textAfter": " the road and turn left.\n"
      },
      {
        "textBefore": "A: Is it ",
        "gapId": "gap-2",
        "options": [
          "much",
          "long",
          "far"
        ],
        "correctIndex": 2,
        "textAfter": " from here? "
      },
      {
        "textBefore": "B: No, it is only five minutes ",
        "gapId": "gap-3",
        "options": [
          "by",
          "with",
          "on"
        ],
        "correctIndex": 2,
        "textAfter": " foot. "
      },
      {
        "textBefore": "A: Thank you very much.\nB: You are ",
        "gapId": "gap-4",
        "options": [
          "welcoming",
          "well",
          "welcome"
        ],
        "correctIndex": 2,
        "textAfter": ". "
      },
      {
        "textBefore": "A: Have a nice ",
        "gapId": "gap-5",
        "options": [
          "day",
          "days",
          "daily"
        ],
        "correctIndex": 0,
        "textAfter": "!"
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"along\" correctly completes the sentence context and grammatical structure among [along, between, among].",
        "urdu": "دیے گئے اختیارات [along, between, among] میں سے درست فقرہ اور قواعد کے مطابق \"along\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"far\" correctly completes the sentence context and grammatical structure among [much, long, far].",
        "urdu": "دیے گئے اختیارات [much, long, far] میں سے درست فقرہ اور قواعد کے مطابق \"far\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"on\" correctly completes the sentence context and grammatical structure among [by, with, on].",
        "urdu": "دیے گئے اختیارات [by, with, on] میں سے درست فقرہ اور قواعد کے مطابق \"on\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"welcome\" correctly completes the sentence context and grammatical structure among [welcoming, well, welcome].",
        "urdu": "دیے گئے اختیارات [welcoming, well, welcome] میں سے درست فقرہ اور قواعد کے مطابق \"welcome\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"day\" correctly completes the sentence context and grammatical structure among [day, days, daily].",
        "urdu": "دیے گئے اختیارات [day, days, daily] میں سے درست فقرہ اور قواعد کے مطابق \"day\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q48",
    "title": "Sentence Comprehension (Q48 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "My Brother\nMy brother Omar is twenty years old. He studies [example] at a university in Karachi. He ",
        "gapId": "gap-1",
        "options": [
          "working",
          "work",
          "works"
        ],
        "correctIndex": 2,
        "textAfter": " very\nhard. "
      },
      {
        "textBefore": "He ",
        "gapId": "gap-2",
        "options": [
          "enjoying",
          "enjoy",
          "enjoys"
        ],
        "correctIndex": 2,
        "textAfter": " playing cricket at weekends. "
      },
      {
        "textBefore": "He has a lot of ",
        "gapId": "gap-3",
        "options": [
          "friends",
          "friend",
          "friendly"
        ],
        "correctIndex": 0,
        "textAfter": " and they play together.\n"
      },
      {
        "textBefore": "Next year he ",
        "gapId": "gap-4",
        "options": [
          "hopes",
          "hope",
          "hoping"
        ],
        "correctIndex": 0,
        "textAfter": " to finish his degree. "
      },
      {
        "textBefore": "He wants to be ",
        "gapId": "gap-5",
        "options": [
          "an",
          "a",
          "the"
        ],
        "correctIndex": 0,
        "textAfter": " engineer."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"works\" correctly completes the sentence context and grammatical structure among [working, work, works].",
        "urdu": "دیے گئے اختیارات [working, work, works] میں سے درست فقرہ اور قواعد کے مطابق \"works\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"enjoys\" correctly completes the sentence context and grammatical structure among [enjoying, enjoy, enjoys].",
        "urdu": "دیے گئے اختیارات [enjoying, enjoy, enjoys] میں سے درست فقرہ اور قواعد کے مطابق \"enjoys\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"friends\" correctly completes the sentence context and grammatical structure among [friends, friend, friendly].",
        "urdu": "دیے گئے اختیارات [friends, friend, friendly] میں سے درست فقرہ اور قواعد کے مطابق \"friends\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"hopes\" correctly completes the sentence context and grammatical structure among [hopes, hope, hoping].",
        "urdu": "دیے گئے اختیارات [hopes, hope, hoping] میں سے درست فقرہ اور قواعد کے مطابق \"hopes\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"an\" correctly completes the sentence context and grammatical structure among [an, a, the].",
        "urdu": "دیے گئے اختیارات [an, a, the] میں سے درست فقرہ اور قواعد کے مطابق \"an\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q49",
    "title": "Sentence Comprehension (Q49 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "Last Sunday\nLast Sunday we had [example] a picnic by the lake. The weather ",
        "gapId": "gap-1",
        "options": [
          "is",
          "was",
          "be"
        ],
        "correctIndex": 1,
        "textAfter": " perfect. "
      },
      {
        "textBefore": "We ",
        "gapId": "gap-2",
        "options": [
          "bringing",
          "bring",
          "brought"
        ],
        "correctIndex": 2,
        "textAfter": "\nsandwiches, fruit and cold drinks. "
      },
      {
        "textBefore": "The children ",
        "gapId": "gap-3",
        "options": [
          "play",
          "plays",
          "played"
        ],
        "correctIndex": 2,
        "textAfter": " in the water all afternoon. "
      },
      {
        "textBefore": "We ",
        "gapId": "gap-4",
        "options": [
          "went",
          "gone",
          "go"
        ],
        "correctIndex": 0,
        "textAfter": "\nhome at six o'clock. "
      },
      {
        "textBefore": "Everybody ",
        "gapId": "gap-5",
        "options": [
          "were",
          "be",
          "was"
        ],
        "correctIndex": 2,
        "textAfter": " very tired but happy."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"was\" correctly completes the sentence context and grammatical structure among [is, was, be].",
        "urdu": "دیے گئے اختیارات [is, was, be] میں سے درست فقرہ اور قواعد کے مطابق \"was\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"brought\" correctly completes the sentence context and grammatical structure among [bringing, bring, brought].",
        "urdu": "دیے گئے اختیارات [bringing, bring, brought] میں سے درست فقرہ اور قواعد کے مطابق \"brought\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"played\" correctly completes the sentence context and grammatical structure among [play, plays, played].",
        "urdu": "دیے گئے اختیارات [play, plays, played] میں سے درست فقرہ اور قواعد کے مطابق \"played\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"went\" correctly completes the sentence context and grammatical structure among [went, gone, go].",
        "urdu": "دیے گئے اختیارات [went, gone, go] میں سے درست فقرہ اور قواعد کے مطابق \"went\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"was\" correctly completes the sentence context and grammatical structure among [were, be, was].",
        "urdu": "دیے گئے اختیارات [were, be, was] میں سے درست فقرہ اور قواعد کے مطابق \"was\" آتا ہے۔"
      }
    }
  },
  {
    "id": "pdf-reading-s1-q50",
    "title": "Sentence Comprehension (Q50 - Level: Easy)",
    "introduction": "Read the short text below and choose the word or phrase (A, B or C) that best fits each space. Space (0) is the completed example.",
    "paragraphs": [
      {
        "textBefore": "My Shop\nI have a small shop in the city. It opens [example] at nine and closes ",
        "gapId": "gap-1",
        "options": [
          "in",
          "on",
          "at"
        ],
        "correctIndex": 2,
        "textAfter": " six. "
      },
      {
        "textBefore": "I sell shoes, bags and\n",
        "gapId": "gap-2",
        "options": [
          "hats",
          "hat",
          "hatting"
        ],
        "correctIndex": 0,
        "textAfter": ". "
      },
      {
        "textBefore": "Many people ",
        "gapId": "gap-3",
        "options": [
          "coming",
          "come",
          "comes"
        ],
        "correctIndex": 1,
        "textAfter": " to my shop every day. "
      },
      {
        "textBefore": "My customers ",
        "gapId": "gap-4",
        "options": [
          "is",
          "am",
          "are"
        ],
        "correctIndex": 2,
        "textAfter": " very kind. "
      },
      {
        "textBefore": "I like\nmy work ",
        "gapId": "gap-5",
        "options": [
          "very",
          "lot",
          "many"
        ],
        "correctIndex": 0,
        "textAfter": " much."
      }
    ],
    "explanations": {
      "gap-1": {
        "english": "\"at\" correctly completes the sentence context and grammatical structure among [in, on, at].",
        "urdu": "دیے گئے اختیارات [in, on, at] میں سے درست فقرہ اور قواعد کے مطابق \"at\" آتا ہے۔"
      },
      "gap-2": {
        "english": "\"hats\" correctly completes the sentence context and grammatical structure among [hats, hat, hatting].",
        "urdu": "دیے گئے اختیارات [hats, hat, hatting] میں سے درست فقرہ اور قواعد کے مطابق \"hats\" آتا ہے۔"
      },
      "gap-3": {
        "english": "\"come\" correctly completes the sentence context and grammatical structure among [coming, come, comes].",
        "urdu": "دیے گئے اختیارات [coming, come, comes] میں سے درست فقرہ اور قواعد کے مطابق \"come\" آتا ہے۔"
      },
      "gap-4": {
        "english": "\"are\" correctly completes the sentence context and grammatical structure among [is, am, are].",
        "urdu": "دیے گئے اختیارات [is, am, are] میں سے درست فقرہ اور قواعد کے مطابق \"are\" آتا ہے۔"
      },
      "gap-5": {
        "english": "\"very\" correctly completes the sentence context and grammatical structure among [very, lot, many].",
        "urdu": "دیے گئے اختیارات [very, lot, many] میں سے درست فقرہ اور قواعد کے مطابق \"very\" آتا ہے۔"
      }
    }
  }
];

const SEEN_READING_S1_KEY = 'icap_seen_reading_s1_ids';

/**
 * Get the set of previously seen Reading Section 1 question IDs from localStorage
 */
export function getSeenPdfReadingSection1Ids(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const stored = localStorage.getItem(SEEN_READING_S1_KEY);
    if (!stored) return new Set();
    const parsed = JSON.parse(stored);
    return new Set(Array.isArray(parsed) ? parsed : []);
  } catch {
    return new Set();
  }
}

/**
 * Mark a Reading Section 1 question as seen in localStorage
 */
export function markSeenPdfReadingSection1Id(id: string): void {
  if (typeof window === 'undefined') return;
  try {
    const seen = getSeenPdfReadingSection1Ids();
    seen.add(id);
    localStorage.setItem(SEEN_READING_S1_KEY, JSON.stringify(Array.from(seen)));
  } catch {
    // ignore storage error
  }
}

/**
 * Clear seen Reading Section 1 questions history
 */
export function clearSeenPdfReadingSection1Ids(): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(SEEN_READING_S1_KEY);
  } catch {
    // ignore
  }
}

/**
 * Select a random Sentence Comprehension question strictly from the official PDF pool.
 * Guaranteed:
 * 1. Strictly from the 50 PDF questions first.
 * 2. Avoids repetition across attempts by checking localStorage history.
 * 3. STRICT ZERO REPETITION: When all 50 PDF questions are exhausted, automatically
 *    generates brand-new, unique Section 1 cloze passages matching the exact format,
 *    so questions NEVER repeat across tests or attempts.
 */
export function selectOfficialPdfReadingSection1(providedSeen?: Set<string>): ReadingSection1 {
  const seen = providedSeen || getSeenPdfReadingSection1Ids();
  
  // Filter unseen questions checking both localStorage ID and global semantic signatures
  const unseen = PDF_READING_SECTION_1_POOL.filter(q => 
    !seen.has(q.id) && 
    !isGloballySeen('reading-s1', q.id, q.title)
  );
  
  let chosen: ReadingSection1;
  if (unseen.length > 0) {
    const randomIndex = Math.floor(Math.random() * unseen.length);
    chosen = unseen[randomIndex];
  } else {
    // All 50 PDF questions have been seen!
    // Automatically generate brand-new, unique Section 1 passage so questions never repeat.
    chosen = generateSyntheticReadingSection1(seen);
  }

  // Mark chosen question as seen locally and globally
  markSeenPdfReadingSection1Id(chosen.id);
  markGloballySeen('reading-s1', [{ id: chosen.id, textOrTitle: chosen.title }]);

  return chosen;
}
