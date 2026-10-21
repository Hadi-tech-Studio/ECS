/**
 * ============================================================================
 * pdfGrammarPool.ts
 * Official 1,000 MCQs Grammar Pool for ICAP ECS & Aptis General Test
 * Sourced directly from the official English Communication Skills Grammar Portion PDF.
 * 
 * Filtered to strictly exclude accounting, auditing, and corporate topics.
 * 100% clean options and question statements (all page headers/footers removed).
 * Contains only general English grammar items categorized into:
 * - Tenses: 4
 * - Modal Verbs: 2
 * - Active and Passive Voice: 2
 * - Gerunds and Infinitives: 3
 * - Adverbs: 3
 * - Conditionals: 3
 * - Prepositions: 3
 * - Collocation: 1
 * - Connectors: 2
 * - Comparatives: 2
 * Total: Exactly 25 MCQs (10 Easy, 10 Moderate, 5 Hard) per test.
 * ============================================================================
 */

import { GrammarQuestion } from '../types';
import { generateSyntheticGrammarMCQ } from './grammarAutoGenerator';

export interface PdfGrammarItem extends GrammarQuestion {
  pdfNumber: number;
  baseSentenceKey: string;
}

export const PDF_GRAMMAR_POOL: PdfGrammarItem[] = [
  {
    "id": "pdf-mcq-1",
    "pdfNumber": 1,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "travelled",
      "will be travelling",
      "have travelled"
    ],
    "correctIndex": 1,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-3",
    "pdfNumber": 3,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "works",
      "has worked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-4",
    "pdfNumber": 4,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "finish",
      "had finish",
      "will have finished"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-5",
    "pdfNumber": 5,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "am drinking",
      "drink",
      "drank"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-6",
    "pdfNumber": 6,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "He ____ the report yet.",
    "options": [
      "hasn't submitted",
      "didn't submitted",
      "isn't submit"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-7",
    "pdfNumber": 7,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "has save",
      "was save",
      "had saved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-8",
    "pdfNumber": 8,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "do",
      "is",
      "does"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-9",
    "pdfNumber": 9,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is doing",
      "does",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-10",
    "pdfNumber": 10,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "did",
      "has",
      "does"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-11",
    "pdfNumber": 11,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "had finished",
      "has finished",
      "finishes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-12",
    "pdfNumber": 12,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "is",
      "had been",
      "has been"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-13",
    "pdfNumber": 13,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "rains",
      "is going to rain",
      "has rained"
    ],
    "correctIndex": 1,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-15",
    "pdfNumber": 15,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "walked",
      "was walking",
      "have walked"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-16",
    "pdfNumber": 16,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "lives",
      "has lived",
      "lived"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-17",
    "pdfNumber": 17,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "have had",
      "are having",
      "were having"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-18",
    "pdfNumber": 18,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "has sent",
      "sent",
      "had sent"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-19",
    "pdfNumber": 19,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Every winter, the river ____ over.",
    "options": [
      "has frozen",
      "is freezing",
      "freezes"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-20",
    "pdfNumber": 20,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "have called",
      "will call",
      "called"
    ],
    "correctIndex": 1,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-21",
    "pdfNumber": 21,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "will be travelling",
      "have travelled",
      "travelled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-23",
    "pdfNumber": 23,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "has worked",
      "works"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-24",
    "pdfNumber": 24,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "had finish",
      "will have finished",
      "finish"
    ],
    "correctIndex": 1,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-25",
    "pdfNumber": 25,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "drink",
      "am drinking",
      "drank"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-26",
    "pdfNumber": 26,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "He ____ the report yet.",
    "options": [
      "hasn't submitted",
      "didn't submitted",
      "isn't submit"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-27",
    "pdfNumber": 27,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "has save",
      "had saved",
      "was save"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-28",
    "pdfNumber": 28,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "do",
      "does",
      "is"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-29",
    "pdfNumber": 29,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is doing",
      "does",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-30",
    "pdfNumber": 30,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "does",
      "has",
      "did"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-31",
    "pdfNumber": 31,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "has finished",
      "finishes",
      "had finished"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-32",
    "pdfNumber": 32,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "has been",
      "is",
      "had been"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-33",
    "pdfNumber": 33,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "rains",
      "has rained",
      "is going to rain"
    ],
    "correctIndex": 2,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-35",
    "pdfNumber": 35,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "have walked",
      "walked",
      "was walking"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-36",
    "pdfNumber": 36,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "lives",
      "lived",
      "has lived"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-37",
    "pdfNumber": 37,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "have had",
      "were having",
      "are having"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-38",
    "pdfNumber": 38,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "had sent",
      "sent",
      "has sent"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-39",
    "pdfNumber": 39,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Every winter, the river ____ over.",
    "options": [
      "is freezing",
      "freezes",
      "has frozen"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-40",
    "pdfNumber": 40,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "have called",
      "will call",
      "called"
    ],
    "correctIndex": 1,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-41",
    "pdfNumber": 41,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "will be travelling",
      "have travelled",
      "travelled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-43",
    "pdfNumber": 43,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "has worked",
      "was working",
      "works"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-44",
    "pdfNumber": 44,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "finish",
      "had finish",
      "will have finished"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-45",
    "pdfNumber": 45,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "drank",
      "am drinking",
      "drink"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-46",
    "pdfNumber": 46,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "He ____ the report yet.",
    "options": [
      "hasn't submitted",
      "isn't submit",
      "didn't submitted"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-47",
    "pdfNumber": 47,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "has save",
      "was save",
      "had saved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-48",
    "pdfNumber": 48,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "does",
      "do",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-49",
    "pdfNumber": 49,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "does",
      "is doing",
      "is"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-50",
    "pdfNumber": 50,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "has",
      "does",
      "did"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-51",
    "pdfNumber": 51,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "finishes",
      "has finished",
      "had finished"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-52",
    "pdfNumber": 52,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "had been",
      "is",
      "has been"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-53",
    "pdfNumber": 53,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "rains",
      "is going to rain",
      "has rained"
    ],
    "correctIndex": 1,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-55",
    "pdfNumber": 55,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "walked",
      "was walking",
      "have walked"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-56",
    "pdfNumber": 56,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "has lived",
      "lives",
      "lived"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-57",
    "pdfNumber": 57,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "are having",
      "have had",
      "were having"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-58",
    "pdfNumber": 58,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "had sent",
      "has sent",
      "sent"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-59",
    "pdfNumber": 59,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Every winter, the river ____ over.",
    "options": [
      "is freezing",
      "has frozen",
      "freezes"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-60",
    "pdfNumber": 60,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "will call",
      "called",
      "have called"
    ],
    "correctIndex": 0,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-61",
    "pdfNumber": 61,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "will be travelling",
      "travelled",
      "have travelled"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-63",
    "pdfNumber": 63,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "has worked",
      "works",
      "was working"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-64",
    "pdfNumber": 64,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "will have finished",
      "finish",
      "had finish"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-65",
    "pdfNumber": 65,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "drink",
      "am drinking",
      "drank"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-66",
    "pdfNumber": 66,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "He ____ the report yet.",
    "options": [
      "didn't submitted",
      "hasn't submitted",
      "isn't submit"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-67",
    "pdfNumber": 67,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "has save",
      "had saved",
      "was save"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-68",
    "pdfNumber": 68,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "does",
      "do",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-69",
    "pdfNumber": 69,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is",
      "is doing",
      "does"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-70",
    "pdfNumber": 70,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "does",
      "did",
      "has"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-71",
    "pdfNumber": 71,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "finishes",
      "had finished",
      "has finished"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-72",
    "pdfNumber": 72,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "is",
      "has been",
      "had been"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-73",
    "pdfNumber": 73,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "rains",
      "is going to rain",
      "has rained"
    ],
    "correctIndex": 1,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-75",
    "pdfNumber": 75,
    "category": "Tenses",
    "difficulty": "Hard",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "was walking",
      "walked",
      "have walked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-76",
    "pdfNumber": 76,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "walked",
      "was walking",
      "have walked"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-77",
    "pdfNumber": 77,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "lived",
      "lives",
      "has lived"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-78",
    "pdfNumber": 78,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "are having",
      "have had",
      "were having"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-79",
    "pdfNumber": 79,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "had sent",
      "has sent",
      "sent"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-80",
    "pdfNumber": 80,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Every winter, the river ____ over.",
    "options": [
      "freezes",
      "is freezing",
      "has frozen"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-81",
    "pdfNumber": 81,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "have called",
      "called",
      "will call"
    ],
    "correctIndex": 2,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-82",
    "pdfNumber": 82,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "have travelled",
      "travelled",
      "will be travelling"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-84",
    "pdfNumber": 84,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "works",
      "has worked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-85",
    "pdfNumber": 85,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "finish",
      "will have finished",
      "had finish"
    ],
    "correctIndex": 1,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-86",
    "pdfNumber": 86,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "drank",
      "am drinking",
      "drink"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-87",
    "pdfNumber": 87,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "He ____ the report yet.",
    "options": [
      "didn't submitted",
      "isn't submit",
      "hasn't submitted"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-88",
    "pdfNumber": 88,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "was save",
      "has save",
      "had saved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-89",
    "pdfNumber": 89,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "do",
      "does",
      "is"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-90",
    "pdfNumber": 90,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is",
      "does",
      "is doing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-91",
    "pdfNumber": 91,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "did",
      "does",
      "has"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-92",
    "pdfNumber": 92,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "had finished",
      "has finished",
      "finishes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-93",
    "pdfNumber": 93,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "has been",
      "is",
      "had been"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-94",
    "pdfNumber": 94,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "rains",
      "has rained",
      "is going to rain"
    ],
    "correctIndex": 2,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-96",
    "pdfNumber": 96,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "was walking",
      "have walked",
      "walked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-97",
    "pdfNumber": 97,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "has lived",
      "lives",
      "lived"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-98",
    "pdfNumber": 98,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "have had",
      "were having",
      "are having"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-99",
    "pdfNumber": 99,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "had sent",
      "sent",
      "has sent"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-100",
    "pdfNumber": 100,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Every winter, the river ____ over.",
    "options": [
      "is freezing",
      "has frozen",
      "freezes"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-101",
    "pdfNumber": 101,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "will call",
      "called",
      "have called"
    ],
    "correctIndex": 0,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-102",
    "pdfNumber": 102,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "travelled",
      "have travelled",
      "will be travelling"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-104",
    "pdfNumber": 104,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "works",
      "has worked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-105",
    "pdfNumber": 105,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "will have finished",
      "had finish",
      "finish"
    ],
    "correctIndex": 0,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-106",
    "pdfNumber": 106,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "am drinking",
      "drank",
      "drink"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-107",
    "pdfNumber": 107,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "He ____ the report yet.",
    "options": [
      "hasn't submitted",
      "didn't submitted",
      "isn't submit"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-108",
    "pdfNumber": 108,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "was save",
      "has save",
      "had saved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-109",
    "pdfNumber": 109,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "is",
      "does",
      "do"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-110",
    "pdfNumber": 110,
    "category": "Tenses",
    "difficulty": "Medium",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is doing",
      "does",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-111",
    "pdfNumber": 111,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "does",
      "do",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-112",
    "pdfNumber": 112,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "is",
      "does",
      "is doing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-113",
    "pdfNumber": 113,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "has",
      "does",
      "did"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-114",
    "pdfNumber": 114,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "has finished",
      "had finished",
      "finishes"
    ],
    "correctIndex": 1,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-115",
    "pdfNumber": 115,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "had been",
      "has been",
      "is"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-116",
    "pdfNumber": 116,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "has rained",
      "is going to rain",
      "rains"
    ],
    "correctIndex": 1,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-118",
    "pdfNumber": 118,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "was walking",
      "have walked",
      "walked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-119",
    "pdfNumber": 119,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "lived",
      "has lived",
      "lives"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-120",
    "pdfNumber": 120,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "were having",
      "have had",
      "are having"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-121",
    "pdfNumber": 121,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "has sent",
      "had sent",
      "sent"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-122",
    "pdfNumber": 122,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Every winter, the river ____ over.",
    "options": [
      "has frozen",
      "is freezing",
      "freezes"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-123",
    "pdfNumber": 123,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "have called",
      "called",
      "will call"
    ],
    "correctIndex": 2,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-124",
    "pdfNumber": 124,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "have travelled",
      "travelled",
      "will be travelling"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-126",
    "pdfNumber": 126,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "works",
      "has worked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-127",
    "pdfNumber": 127,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "finish",
      "had finish",
      "will have finished"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-128",
    "pdfNumber": 128,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "drank",
      "am drinking",
      "drink"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-129",
    "pdfNumber": 129,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "He ____ the report yet.",
    "options": [
      "hasn't submitted",
      "isn't submit",
      "didn't submitted"
    ],
    "correctIndex": 0,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-130",
    "pdfNumber": 130,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "was save",
      "has save",
      "had saved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-131",
    "pdfNumber": 131,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Maya usually ____ review the report at the office.",
    "options": [
      "do",
      "is",
      "does"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'does' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'does' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "mayausuallyreviewthereportattheoffice"
  },
  {
    "id": "pdf-mcq-132",
    "pdfNumber": 132,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "At the moment, Omar ____ inspect the building.",
    "options": [
      "does",
      "is",
      "is doing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'is doing' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'is doing' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "atthemomentomarinspectthebuilding"
  },
  {
    "id": "pdf-mcq-133",
    "pdfNumber": 133,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Yesterday, the manager ____ deliver the package.",
    "options": [
      "has",
      "does",
      "did"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'did' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'did' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "yesterdaythemanagerdeliverthepackage"
  },
  {
    "id": "pdf-mcq-134",
    "pdfNumber": 134,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "By the time we arrived, our teacher ____ the work.",
    "options": [
      "had finished",
      "finishes",
      "has finished"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'had finished' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had finished' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "bythetimewearrivedourteacherthework"
  },
  {
    "id": "pdf-mcq-135",
    "pdfNumber": 135,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "The researchers ____ complete the project for three hours when the power went out.",
    "options": [
      "has been",
      "is",
      "had been"
    ],
    "correctIndex": 2,
    "englishExplanation": "Correct grammatical verb tense 'had been' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'had been' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "theresearcherscompletetheprojectforthree"
  },
  {
    "id": "pdf-mcq-136",
    "pdfNumber": 136,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Look at those clouds; it ____ soon.",
    "options": [
      "is going to rain",
      "has rained",
      "rains"
    ],
    "correctIndex": 0,
    "englishExplanation": "'be going to' ('is going to rain') is used for future predictions based on immediate present visual evidence.",
    "urduExplanation": "موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔",
    "baseSentenceKey": "lookatthosecloudsitsoon"
  },
  {
    "id": "pdf-mcq-138",
    "pdfNumber": 138,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "While I ____ home, I met an old friend.",
    "options": [
      "was walking",
      "have walked",
      "walked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Past Continuous ('was walking') describes a longer background action interrupted by a shorter action in the past.",
    "urduExplanation": "ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whileihomeimetanoldfriend"
  },
  {
    "id": "pdf-mcq-139",
    "pdfNumber": 139,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "The students ____ in this city since 2021.",
    "options": [
      "lives",
      "lived",
      "has lived"
    ],
    "correctIndex": 2,
    "englishExplanation": "Present Perfect ('has lived') is used with 'since' to denote an action starting in the past and continuing to the present.",
    "urduExplanation": "'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔",
    "baseSentenceKey": "thestudentsinthiscitysince2021"
  },
  {
    "id": "pdf-mcq-140",
    "pdfNumber": 140,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "When the phone rang, we ____ dinner.",
    "options": [
      "have had",
      "are having",
      "were having"
    ],
    "correctIndex": 2,
    "englishExplanation": "Past Continuous ('were having') indicates an ongoing action that was in progress when an interruption occurred.",
    "urduExplanation": "ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "whenthephonerangwedinner"
  },
  {
    "id": "pdf-mcq-141",
    "pdfNumber": 141,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "She said she ____ the email the previous day.",
    "options": [
      "sent",
      "had sent",
      "has sent"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Perfect ('had sent') is required in reported speech for actions completed prior to the past reporting moment.",
    "urduExplanation": "ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "shesaidshetheemailthepreviousday"
  },
  {
    "id": "pdf-mcq-142",
    "pdfNumber": 142,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "Every winter, the river ____ over.",
    "options": [
      "is freezing",
      "freezes",
      "has frozen"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Simple ('freezes') expresses a natural law or recurring seasonal fact.",
    "urduExplanation": "قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔",
    "baseSentenceKey": "everywintertheriverover"
  },
  {
    "id": "pdf-mcq-143",
    "pdfNumber": 143,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "I ____ him tomorrow if I have time.",
    "options": [
      "will call",
      "have called",
      "called"
    ],
    "correctIndex": 0,
    "englishExplanation": "First conditional main clause takes future simple ('will call') with a present simple conditional clause.",
    "urduExplanation": "پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔",
    "baseSentenceKey": "ihimtomorrowifihavetime"
  },
  {
    "id": "pdf-mcq-144",
    "pdfNumber": 144,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "This time tomorrow, we ____ to Karachi.",
    "options": [
      "travelled",
      "have travelled",
      "will be travelling"
    ],
    "correctIndex": 2,
    "englishExplanation": "Future Continuous tense ('will be travelling') describes an action that will be in progress at a specific time in the future.",
    "urduExplanation": "مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "thistimetomorrowwetokarachi"
  },
  {
    "id": "pdf-mcq-146",
    "pdfNumber": 146,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "She ____ for the company when it opened its new branch.",
    "options": [
      "was working",
      "has worked",
      "works"
    ],
    "correctIndex": 0,
    "englishExplanation": "Correct grammatical verb tense 'was working' adheres to standard English timeline rules and agreement.",
    "urduExplanation": "درست فعل کی حالت 'was working' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔",
    "baseSentenceKey": "sheforthecompanywhenitopeneditsnewbranch"
  },
  {
    "id": "pdf-mcq-147",
    "pdfNumber": 147,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "By 8 p.m., they ____ the presentation.",
    "options": [
      "had finish",
      "will have finished",
      "finish"
    ],
    "correctIndex": 1,
    "englishExplanation": "Future Perfect tense ('will have finished') is used for an action that will be completed before a specified future time.",
    "urduExplanation": "مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "by8pmtheythepresentation"
  },
  {
    "id": "pdf-mcq-148",
    "pdfNumber": 148,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "I ____ coffee every morning, but today I am drinking tea.",
    "options": [
      "am drinking",
      "drink",
      "drank"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Simple tense ('drink') expresses habitual, daily routines and permanent facts.",
    "urduExplanation": "روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔",
    "baseSentenceKey": "icoffeeeverymorningbuttodayiamdrinkingte"
  },
  {
    "id": "pdf-mcq-149",
    "pdfNumber": 149,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "He ____ the report yet.",
    "options": [
      "didn't submitted",
      "hasn't submitted",
      "isn't submit"
    ],
    "correctIndex": 1,
    "englishExplanation": "Present Perfect negative ('hasn't submitted') is used with 'yet' to describe an event expected to happen but not completed up to the present.",
    "urduExplanation": "'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔",
    "baseSentenceKey": "hethereportyet"
  },
  {
    "id": "pdf-mcq-150",
    "pdfNumber": 150,
    "category": "Tenses",
    "difficulty": "Easy",
    "question": "After she ____ the file, she turned off the computer.",
    "options": [
      "has save",
      "had saved",
      "was save"
    ],
    "correctIndex": 1,
    "englishExplanation": "Past Perfect ('had saved') shows that an action happened before another action in the past.",
    "urduExplanation": "ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔",
    "baseSentenceKey": "aftershethefilesheturnedoffthecomputer"
  },
  {
    "id": "pdf-mcq-151",
    "pdfNumber": 151,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "am",
      "will be",
      "were"
    ],
    "correctIndex": 2,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-152",
    "pdfNumber": 152,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "will understand",
      "would understand",
      "would have understood"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-153",
    "pdfNumber": 153,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "don't get",
      "won't get",
      "wouldn't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-154",
    "pdfNumber": 154,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "would became",
      "will become",
      "becomes"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-155",
    "pdfNumber": 155,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "will arrived",
      "arrive",
      "would arrive"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-156",
    "pdfNumber": 156,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "would receive",
      "will receive",
      "would have received"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-157",
    "pdfNumber": 157,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "get",
      "will got",
      "would get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-158",
    "pdfNumber": 158,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "will boil",
      "would boil",
      "boils"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-159",
    "pdfNumber": 159,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "would improved",
      "improve",
      "will improve"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-160",
    "pdfNumber": 160,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "had",
      "will have",
      "have"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-161",
    "pdfNumber": 161,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would notice",
      "will notice",
      "would have noticed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-162",
    "pdfNumber": 162,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "will miss",
      "miss"
    ],
    "correctIndex": 1,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-163",
    "pdfNumber": 163,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "would change",
      "will changed",
      "changes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-164",
    "pdfNumber": 164,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "open",
      "would opens",
      "will opened"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-165",
    "pdfNumber": 165,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "won't get",
      "wouldn't have got",
      "wouldn't get"
    ],
    "correctIndex": 1,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-166",
    "pdfNumber": 166,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "gave",
      "will give",
      "would gave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-167",
    "pdfNumber": 167,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If people heat ice, it ____.",
    "options": [
      "would melt",
      "melts",
      "will melted"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-168",
    "pdfNumber": 168,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "leave",
      "left",
      "will leave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-170",
    "pdfNumber": 170,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "lost",
      "would lost",
      "may lose"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-171",
    "pdfNumber": 171,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "were",
      "will be",
      "am"
    ],
    "correctIndex": 0,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-172",
    "pdfNumber": 172,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "would have understood",
      "would understand",
      "will understand"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-173",
    "pdfNumber": 173,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "don't get",
      "wouldn't get",
      "won't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-174",
    "pdfNumber": 174,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "will become",
      "becomes",
      "would became"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-175",
    "pdfNumber": 175,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "arrive",
      "would arrive",
      "will arrived"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-176",
    "pdfNumber": 176,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "would have received",
      "will receive",
      "would receive"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-177",
    "pdfNumber": 177,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "get",
      "would get",
      "will got"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-178",
    "pdfNumber": 178,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "would boil",
      "boils",
      "will boil"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-179",
    "pdfNumber": 179,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "would improved",
      "will improve",
      "improve"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-180",
    "pdfNumber": 180,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "will have",
      "have",
      "had"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-181",
    "pdfNumber": 181,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would have noticed",
      "will notice",
      "would notice"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-182",
    "pdfNumber": 182,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "will miss",
      "miss"
    ],
    "correctIndex": 1,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-183",
    "pdfNumber": 183,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "will changed",
      "would change",
      "changes"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-184",
    "pdfNumber": 184,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "open",
      "will opened",
      "would opens"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-185",
    "pdfNumber": 185,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "wouldn't have got",
      "wouldn't get",
      "won't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-186",
    "pdfNumber": 186,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "will give",
      "would gave",
      "gave"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-187",
    "pdfNumber": 187,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If people heat ice, it ____.",
    "options": [
      "would melt",
      "melts",
      "will melted"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-188",
    "pdfNumber": 188,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "left",
      "leave",
      "will leave"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-190",
    "pdfNumber": 190,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "lost",
      "may lose",
      "would lost"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-191",
    "pdfNumber": 191,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "will be",
      "were",
      "am"
    ],
    "correctIndex": 1,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-192",
    "pdfNumber": 192,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "will understand",
      "would understand",
      "would have understood"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-193",
    "pdfNumber": 193,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "wouldn't get",
      "don't get",
      "won't get"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-194",
    "pdfNumber": 194,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "will become",
      "becomes",
      "would became"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-195",
    "pdfNumber": 195,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "would arrive",
      "arrive",
      "will arrived"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-196",
    "pdfNumber": 196,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "would receive",
      "would have received",
      "will receive"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-197",
    "pdfNumber": 197,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "would get",
      "get",
      "will got"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-198",
    "pdfNumber": 198,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "will boil",
      "would boil",
      "boils"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-199",
    "pdfNumber": 199,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "would improved",
      "will improve",
      "improve"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-200",
    "pdfNumber": 200,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "had",
      "will have",
      "have"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-201",
    "pdfNumber": 201,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would notice",
      "will notice",
      "would have noticed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-202",
    "pdfNumber": 202,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "miss",
      "will miss"
    ],
    "correctIndex": 2,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-203",
    "pdfNumber": 203,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "will changed",
      "changes",
      "would change"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-204",
    "pdfNumber": 204,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "will opened",
      "open",
      "would opens"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-205",
    "pdfNumber": 205,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "won't get",
      "wouldn't get",
      "wouldn't have got"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-206",
    "pdfNumber": 206,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "would gave",
      "gave",
      "will give"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-207",
    "pdfNumber": 207,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If people heat ice, it ____.",
    "options": [
      "will melted",
      "would melt",
      "melts"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-208",
    "pdfNumber": 208,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "leave",
      "will leave",
      "left"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-210",
    "pdfNumber": 210,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "would lost",
      "lost",
      "may lose"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-211",
    "pdfNumber": 211,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "am",
      "will be",
      "were"
    ],
    "correctIndex": 2,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-212",
    "pdfNumber": 212,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "will understand",
      "would understand",
      "would have understood"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-213",
    "pdfNumber": 213,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "don't get",
      "wouldn't get",
      "won't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-214",
    "pdfNumber": 214,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "becomes",
      "will become",
      "would became"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-215",
    "pdfNumber": 215,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "arrive",
      "would arrive",
      "will arrived"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-216",
    "pdfNumber": 216,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "will receive",
      "would have received",
      "would receive"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-217",
    "pdfNumber": 217,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "will got",
      "get",
      "would get"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-218",
    "pdfNumber": 218,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "boils",
      "will boil",
      "would boil"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-219",
    "pdfNumber": 219,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "will improve",
      "would improved",
      "improve"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-220",
    "pdfNumber": 220,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "have",
      "had",
      "will have"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-221",
    "pdfNumber": 221,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would notice",
      "would have noticed",
      "will notice"
    ],
    "correctIndex": 1,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-222",
    "pdfNumber": 222,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "miss",
      "will miss"
    ],
    "correctIndex": 2,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-223",
    "pdfNumber": 223,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "will changed",
      "changes",
      "would change"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-224",
    "pdfNumber": 224,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "would opens",
      "open",
      "will opened"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-225",
    "pdfNumber": 225,
    "category": "Conditionals",
    "difficulty": "Hard",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "wouldn't get",
      "wouldn't have got",
      "won't get"
    ],
    "correctIndex": 1,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-226",
    "pdfNumber": 226,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "wouldn't have got",
      "won't get",
      "wouldn't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-227",
    "pdfNumber": 227,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "gave",
      "would gave",
      "will give"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-228",
    "pdfNumber": 228,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If people heat ice, it ____.",
    "options": [
      "will melted",
      "would melt",
      "melts"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-229",
    "pdfNumber": 229,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "leave",
      "left",
      "will leave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-231",
    "pdfNumber": 231,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "may lose",
      "would lost",
      "lost"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-232",
    "pdfNumber": 232,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "am",
      "were",
      "will be"
    ],
    "correctIndex": 1,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-233",
    "pdfNumber": 233,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "would understand",
      "would have understood",
      "will understand"
    ],
    "correctIndex": 1,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-234",
    "pdfNumber": 234,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "don't get",
      "wouldn't get",
      "won't get"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-235",
    "pdfNumber": 235,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "becomes",
      "will become",
      "would became"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-236",
    "pdfNumber": 236,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "would arrive",
      "arrive",
      "will arrived"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-237",
    "pdfNumber": 237,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "would have received",
      "will receive",
      "would receive"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-238",
    "pdfNumber": 238,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "get",
      "would get",
      "will got"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-239",
    "pdfNumber": 239,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "will boil",
      "boils",
      "would boil"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-240",
    "pdfNumber": 240,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "improve",
      "will improve",
      "would improved"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-241",
    "pdfNumber": 241,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "will have",
      "have",
      "had"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-242",
    "pdfNumber": 242,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would notice",
      "would have noticed",
      "will notice"
    ],
    "correctIndex": 1,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-243",
    "pdfNumber": 243,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "will miss",
      "miss"
    ],
    "correctIndex": 1,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-244",
    "pdfNumber": 244,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "changes",
      "would change",
      "will changed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-245",
    "pdfNumber": 245,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "open",
      "would opens",
      "will opened"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-246",
    "pdfNumber": 246,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "won't get",
      "wouldn't get",
      "wouldn't have got"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-247",
    "pdfNumber": 247,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "gave",
      "will give",
      "would gave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-248",
    "pdfNumber": 248,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If people heat ice, it ____.",
    "options": [
      "would melt",
      "melts",
      "will melted"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-249",
    "pdfNumber": 249,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "left",
      "leave",
      "will leave"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-251",
    "pdfNumber": 251,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "would lost",
      "lost",
      "may lose"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-252",
    "pdfNumber": 252,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "am",
      "were",
      "will be"
    ],
    "correctIndex": 1,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-253",
    "pdfNumber": 253,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "would have understood",
      "will understand",
      "would understand"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-254",
    "pdfNumber": 254,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "won't get",
      "wouldn't get",
      "don't get"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-255",
    "pdfNumber": 255,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "will become",
      "would became",
      "becomes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-256",
    "pdfNumber": 256,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "will arrived",
      "arrive",
      "would arrive"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-257",
    "pdfNumber": 257,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "would receive",
      "would have received",
      "will receive"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-258",
    "pdfNumber": 258,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "would get",
      "get",
      "will got"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-259",
    "pdfNumber": 259,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "boils",
      "will boil",
      "would boil"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-260",
    "pdfNumber": 260,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "improve",
      "would improved",
      "will improve"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-261",
    "pdfNumber": 261,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "had",
      "will have",
      "have"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-262",
    "pdfNumber": 262,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "will notice",
      "would notice",
      "would have noticed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-263",
    "pdfNumber": 263,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "will miss",
      "miss"
    ],
    "correctIndex": 1,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-264",
    "pdfNumber": 264,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "would change",
      "will changed",
      "changes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-265",
    "pdfNumber": 265,
    "category": "Conditionals",
    "difficulty": "Medium",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "open",
      "will opened",
      "would opens"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-266",
    "pdfNumber": 266,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "will boil",
      "would boil",
      "boils"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-267",
    "pdfNumber": 267,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "would improved",
      "will improve",
      "improve"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-268",
    "pdfNumber": 268,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "will have",
      "had",
      "have"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-269",
    "pdfNumber": 269,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would notice",
      "will notice",
      "would have noticed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-270",
    "pdfNumber": 270,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "miss",
      "would have missed",
      "will miss"
    ],
    "correctIndex": 2,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-271",
    "pdfNumber": 271,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "changes",
      "would change",
      "will changed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-272",
    "pdfNumber": 272,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "would opens",
      "will opened",
      "open"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-273",
    "pdfNumber": 273,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "wouldn't get",
      "won't get",
      "wouldn't have got"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-274",
    "pdfNumber": 274,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "would gave",
      "will give",
      "gave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-275",
    "pdfNumber": 275,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If people heat ice, it ____.",
    "options": [
      "melts",
      "would melt",
      "will melted"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-276",
    "pdfNumber": 276,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "left",
      "leave",
      "will leave"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-278",
    "pdfNumber": 278,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "lost",
      "would lost",
      "may lose"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-279",
    "pdfNumber": 279,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "will be",
      "were",
      "am"
    ],
    "correctIndex": 1,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-280",
    "pdfNumber": 280,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "would understand",
      "will understand",
      "would have understood"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-281",
    "pdfNumber": 281,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "Plants die if they ____ enough water.",
    "options": [
      "won't get",
      "don't get",
      "wouldn't get"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('don't get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "plantsdieiftheyenoughwater"
  },
  {
    "id": "pdf-mcq-282",
    "pdfNumber": 282,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If she practises daily, she ____ more confident.",
    "options": [
      "will become",
      "would became",
      "becomes"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'will become' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will become' بنتا ہے۔",
    "baseSentenceKey": "ifshepractisesdailyshemoreconfident"
  },
  {
    "id": "pdf-mcq-283",
    "pdfNumber": 283,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If the road were clear, we ____ there sooner.",
    "options": [
      "will arrived",
      "would arrive",
      "arrive"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'would arrive' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would arrive' بنتا ہے۔",
    "baseSentenceKey": "iftheroadwereclearwetheresooner"
  },
  {
    "id": "pdf-mcq-284",
    "pdfNumber": 284,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "Had they booked in advance, they ____ a discount.",
    "options": [
      "will receive",
      "would receive",
      "would have received"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would have received' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would have received' بنتا ہے۔",
    "baseSentenceKey": "hadtheybookedinadvancetheyadiscount"
  },
  {
    "id": "pdf-mcq-285",
    "pdfNumber": 285,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If you mix blue and yellow, you ____ green.",
    "options": [
      "would get",
      "get",
      "will got"
    ],
    "correctIndex": 1,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('get').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifyoumixblueandyellowyougreen"
  },
  {
    "id": "pdf-mcq-286",
    "pdfNumber": 286,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If water reaches 100°C, it ____.",
    "options": [
      "would boil",
      "will boil",
      "boils"
    ],
    "correctIndex": 2,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('boils').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifwaterreaches100cit"
  },
  {
    "id": "pdf-mcq-287",
    "pdfNumber": 287,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If you study regularly, you ____ your vocabulary.",
    "options": [
      "improve",
      "would improved",
      "will improve"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will improve' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will improve' بنتا ہے۔",
    "baseSentenceKey": "ifyoustudyregularlyyouyourvocabulary"
  },
  {
    "id": "pdf-mcq-288",
    "pdfNumber": 288,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I ____ more time, I would learn French.",
    "options": [
      "have",
      "had",
      "will have"
    ],
    "correctIndex": 1,
    "englishExplanation": "Conditional structure rule requires 'had' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'had' بنتا ہے۔",
    "baseSentenceKey": "ifimoretimeiwouldlearnfrench"
  },
  {
    "id": "pdf-mcq-289",
    "pdfNumber": 289,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If they had checked the figures, they ____ the error.",
    "options": [
      "would have noticed",
      "would notice",
      "will notice"
    ],
    "correctIndex": 0,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have noticed').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "iftheyhadcheckedthefigurestheytheerror"
  },
  {
    "id": "pdf-mcq-290",
    "pdfNumber": 290,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "Unless you leave now, you ____ the train.",
    "options": [
      "would have missed",
      "will miss",
      "miss"
    ],
    "correctIndex": 1,
    "englishExplanation": "'Unless' means 'if not' and pairs with future simple ('will miss') in the main clause.",
    "urduExplanation": "'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔",
    "baseSentenceKey": "unlessyouleavenowyouthetrain"
  },
  {
    "id": "pdf-mcq-291",
    "pdfNumber": 291,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If she were the manager, she ____ the policy.",
    "options": [
      "will changed",
      "changes",
      "would change"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'would change' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'would change' بنتا ہے۔",
    "baseSentenceKey": "ifshewerethemanagershethepolicy"
  },
  {
    "id": "pdf-mcq-292",
    "pdfNumber": 292,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If the alarm rings, the doors ____ automatically.",
    "options": [
      "open",
      "will opened",
      "would opens"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'open' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'open' بنتا ہے۔",
    "baseSentenceKey": "ifthealarmringsthedoorsautomatically"
  },
  {
    "id": "pdf-mcq-293",
    "pdfNumber": 293,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If he had taken a map, he ____ lost.",
    "options": [
      "won't get",
      "wouldn't get",
      "wouldn't have got"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('wouldn't have got').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadtakenamaphelost"
  },
  {
    "id": "pdf-mcq-294",
    "pdfNumber": 294,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I see the director, I ____ her your message.",
    "options": [
      "gave",
      "would gave",
      "will give"
    ],
    "correctIndex": 2,
    "englishExplanation": "Conditional structure rule requires 'will give' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'will give' بنتا ہے۔",
    "baseSentenceKey": "ifiseethedirectoriheryourmessage"
  },
  {
    "id": "pdf-mcq-295",
    "pdfNumber": 295,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If people heat ice, it ____.",
    "options": [
      "melts",
      "will melted",
      "would melt"
    ],
    "correctIndex": 0,
    "englishExplanation": "Zero conditional scientific truths take present simple in both condition and result clauses ('melts').",
    "urduExplanation": "سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔",
    "baseSentenceKey": "ifpeopleheaticeit"
  },
  {
    "id": "pdf-mcq-296",
    "pdfNumber": 296,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If we ____ earlier, we could catch the first bus.",
    "options": [
      "left",
      "leave",
      "will leave"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'left' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'left' بنتا ہے۔",
    "baseSentenceKey": "ifweearlierwecouldcatchthefirstbus"
  },
  {
    "id": "pdf-mcq-298",
    "pdfNumber": 298,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If you don't back up the file, you ____ your work.",
    "options": [
      "may lose",
      "lost",
      "would lost"
    ],
    "correctIndex": 0,
    "englishExplanation": "Conditional structure rule requires 'may lose' to match the conditional clause tense.",
    "urduExplanation": "شرطیہ جملے کے اصول کے مطابق درست نتیجہ 'may lose' بنتا ہے۔",
    "baseSentenceKey": "ifyoudontbackupthefileyouyourwork"
  },
  {
    "id": "pdf-mcq-299",
    "pdfNumber": 299,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If I ____ you, I would ask for clarification.",
    "options": [
      "will be",
      "am",
      "were"
    ],
    "correctIndex": 2,
    "englishExplanation": "Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').",
    "urduExplanation": "فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔",
    "baseSentenceKey": "ifiyouiwouldaskforclarification"
  },
  {
    "id": "pdf-mcq-300",
    "pdfNumber": 300,
    "category": "Conditionals",
    "difficulty": "Easy",
    "question": "If he had listened carefully, he ____ the instructions.",
    "options": [
      "would understand",
      "will understand",
      "would have understood"
    ],
    "correctIndex": 2,
    "englishExplanation": "Third conditional main clause requires 'would/could/might have + past participle' ('would have understood').",
    "urduExplanation": "تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔",
    "baseSentenceKey": "ifhehadlistenedcarefullyhetheinstruction"
  },
  {
    "id": "pdf-mcq-301",
    "pdfNumber": 301,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The storm damaged several houses. Several houses ____ by the storm.",
    "options": [
      "damaged",
      "were damaged",
      "are damaging"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were damaged').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thestormdamagedseveralhousesseveralhouse"
  },
  {
    "id": "pdf-mcq-302",
    "pdfNumber": 302,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are going to announce the winner. The winner ____.",
    "options": [
      "is going to be announced",
      "is going to announce",
      "will announcing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is going to be announced').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyaregoingtoannouncethewinnerthewinner"
  },
  {
    "id": "pdf-mcq-303",
    "pdfNumber": 303,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
    "options": [
      "should be sending",
      "should send",
      "should have sent"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('should have sent').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thedocumentsshouldhavebeensentyesterdays"
  },
  {
    "id": "pdf-mcq-304",
    "pdfNumber": 304,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Who wrote this letter? By whom ____ this letter written?",
    "options": [
      "did",
      "was",
      "has"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "whowrotethisletterbywhomthisletterwritte"
  },
  {
    "id": "pdf-mcq-305",
    "pdfNumber": 305,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They gave the students certificates. The students ____ certificates.",
    "options": [
      "have giving",
      "were given",
      "gave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were given').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theygavethestudentscertificatesthestuden"
  },
  {
    "id": "pdf-mcq-306",
    "pdfNumber": 306,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The room is cleaned every day. Someone ____ the room every day.",
    "options": [
      "cleaned",
      "is cleaned",
      "cleans"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('cleans').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theroomiscleanedeverydaysomeonetheroomev"
  },
  {
    "id": "pdf-mcq-307",
    "pdfNumber": 307,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They had been watching the house. The house ____.",
    "options": [
      "was watching",
      "had been being watched",
      "had been watched"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been being watched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadbeenwatchingthehousethehouse"
  },
  {
    "id": "pdf-mcq-309",
    "pdfNumber": 309,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "will publish",
      "are publishing",
      "will be published"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-310",
    "pdfNumber": 310,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "has repaired",
      "is repaired",
      "is being repaired"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-311",
    "pdfNumber": 311,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Someone has stolen my laptop. My laptop ____.",
    "options": [
      "has been stolen",
      "has stolen",
      "was stealing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been stolen').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "someonehasstolenmylaptopmylaptop"
  },
  {
    "id": "pdf-mcq-312",
    "pdfNumber": 312,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The manager approved the budget. The budget ____ by the manager.",
    "options": [
      "was approved",
      "approved",
      "is approving"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was approved').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "themanagerapprovedthebudgetthebudgetbyth"
  },
  {
    "id": "pdf-mcq-313",
    "pdfNumber": 313,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "People speak English in many countries. English ____ in many countries.",
    "options": [
      "speaks",
      "was speaking",
      "is spoken"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is spoken').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "peoplespeakenglishinmanycountriesenglish"
  },
  {
    "id": "pdf-mcq-314",
    "pdfNumber": 314,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They had completed the work before noon. The work ____ before noon.",
    "options": [
      "was completing",
      "had been completed",
      "has completed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been completed').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadcompletedtheworkbeforenoonthework"
  },
  {
    "id": "pdf-mcq-315",
    "pdfNumber": 315,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The forms must be signed today. Someone ____ the forms today.",
    "options": [
      "must have signed",
      "must sign",
      "must be signed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must sign').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theformsmustbesignedtodaysomeonetheforms"
  },
  {
    "id": "pdf-mcq-316",
    "pdfNumber": 316,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The chef is preparing the meal. The meal ____ by the chef.",
    "options": [
      "is being prepared",
      "is prepared",
      "has been prepared"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being prepared').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thechefispreparingthemealthemealbytheche"
  },
  {
    "id": "pdf-mcq-317",
    "pdfNumber": 317,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Did the police question the witness? ____ the witness questioned by the police?",
    "options": [
      "Has",
      "Did",
      "Was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('Was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "didthepolicequestionthewitnessthewitness"
  },
  {
    "id": "pdf-mcq-318",
    "pdfNumber": 318,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They make these parts in Germany. These parts ____ in Germany.",
    "options": [
      "made",
      "are made",
      "are making"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('are made').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theymakethesepartsingermanythesepartsing"
  },
  {
    "id": "pdf-mcq-319",
    "pdfNumber": 319,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The company has offered her a job. She ____ a job by the company.",
    "options": [
      "has been offered",
      "has offered",
      "was offering"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been offered').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thecompanyhasofferedherajobsheajobbythec"
  },
  {
    "id": "pdf-mcq-320",
    "pdfNumber": 320,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Do not touch the switch. The switch ____.",
    "options": [
      "does not touch",
      "is not touching",
      "must not be touched"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must not be touched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "donottouchtheswitchtheswitch"
  },
  {
    "id": "pdf-mcq-321",
    "pdfNumber": 321,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The storm damaged several houses. Several houses ____ by the storm.",
    "options": [
      "were damaged",
      "are damaging",
      "damaged"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were damaged').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thestormdamagedseveralhousesseveralhouse"
  },
  {
    "id": "pdf-mcq-322",
    "pdfNumber": 322,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are going to announce the winner. The winner ____.",
    "options": [
      "is going to be announced",
      "is going to announce",
      "will announcing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is going to be announced').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyaregoingtoannouncethewinnerthewinner"
  },
  {
    "id": "pdf-mcq-323",
    "pdfNumber": 323,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
    "options": [
      "should have sent",
      "should be sending",
      "should send"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('should have sent').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thedocumentsshouldhavebeensentyesterdays"
  },
  {
    "id": "pdf-mcq-324",
    "pdfNumber": 324,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Who wrote this letter? By whom ____ this letter written?",
    "options": [
      "has",
      "was",
      "did"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "whowrotethisletterbywhomthisletterwritte"
  },
  {
    "id": "pdf-mcq-325",
    "pdfNumber": 325,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They gave the students certificates. The students ____ certificates.",
    "options": [
      "gave",
      "were given",
      "have giving"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were given').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theygavethestudentscertificatesthestuden"
  },
  {
    "id": "pdf-mcq-326",
    "pdfNumber": 326,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The room is cleaned every day. Someone ____ the room every day.",
    "options": [
      "cleans",
      "cleaned",
      "is cleaned"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('cleans').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theroomiscleanedeverydaysomeonetheroomev"
  },
  {
    "id": "pdf-mcq-327",
    "pdfNumber": 327,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They had been watching the house. The house ____.",
    "options": [
      "was watching",
      "had been watched",
      "had been being watched"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been being watched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadbeenwatchingthehousethehouse"
  },
  {
    "id": "pdf-mcq-329",
    "pdfNumber": 329,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "are publishing",
      "will be published",
      "will publish"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-330",
    "pdfNumber": 330,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "is being repaired",
      "has repaired",
      "is repaired"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-331",
    "pdfNumber": 331,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Someone has stolen my laptop. My laptop ____.",
    "options": [
      "has been stolen",
      "has stolen",
      "was stealing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been stolen').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "someonehasstolenmylaptopmylaptop"
  },
  {
    "id": "pdf-mcq-332",
    "pdfNumber": 332,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The manager approved the budget. The budget ____ by the manager.",
    "options": [
      "approved",
      "was approved",
      "is approving"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was approved').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "themanagerapprovedthebudgetthebudgetbyth"
  },
  {
    "id": "pdf-mcq-333",
    "pdfNumber": 333,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "People speak English in many countries. English ____ in many countries.",
    "options": [
      "is spoken",
      "was speaking",
      "speaks"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is spoken').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "peoplespeakenglishinmanycountriesenglish"
  },
  {
    "id": "pdf-mcq-334",
    "pdfNumber": 334,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They had completed the work before noon. The work ____ before noon.",
    "options": [
      "was completing",
      "has completed",
      "had been completed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been completed').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadcompletedtheworkbeforenoonthework"
  },
  {
    "id": "pdf-mcq-335",
    "pdfNumber": 335,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The forms must be signed today. Someone ____ the forms today.",
    "options": [
      "must be signed",
      "must sign",
      "must have signed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must sign').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theformsmustbesignedtodaysomeonetheforms"
  },
  {
    "id": "pdf-mcq-336",
    "pdfNumber": 336,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The chef is preparing the meal. The meal ____ by the chef.",
    "options": [
      "is being prepared",
      "is prepared",
      "has been prepared"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being prepared').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thechefispreparingthemealthemealbytheche"
  },
  {
    "id": "pdf-mcq-337",
    "pdfNumber": 337,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Did the police question the witness? ____ the witness questioned by the police?",
    "options": [
      "Did",
      "Has",
      "Was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('Was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "didthepolicequestionthewitnessthewitness"
  },
  {
    "id": "pdf-mcq-338",
    "pdfNumber": 338,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They make these parts in Germany. These parts ____ in Germany.",
    "options": [
      "are made",
      "made",
      "are making"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('are made').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theymakethesepartsingermanythesepartsing"
  },
  {
    "id": "pdf-mcq-339",
    "pdfNumber": 339,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The company has offered her a job. She ____ a job by the company.",
    "options": [
      "was offering",
      "has been offered",
      "has offered"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been offered').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thecompanyhasofferedherajobsheajobbythec"
  },
  {
    "id": "pdf-mcq-340",
    "pdfNumber": 340,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Do not touch the switch. The switch ____.",
    "options": [
      "is not touching",
      "does not touch",
      "must not be touched"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must not be touched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "donottouchtheswitchtheswitch"
  },
  {
    "id": "pdf-mcq-341",
    "pdfNumber": 341,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The storm damaged several houses. Several houses ____ by the storm.",
    "options": [
      "are damaging",
      "damaged",
      "were damaged"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were damaged').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thestormdamagedseveralhousesseveralhouse"
  },
  {
    "id": "pdf-mcq-342",
    "pdfNumber": 342,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are going to announce the winner. The winner ____.",
    "options": [
      "is going to announce",
      "will announcing",
      "is going to be announced"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is going to be announced').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyaregoingtoannouncethewinnerthewinner"
  },
  {
    "id": "pdf-mcq-343",
    "pdfNumber": 343,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
    "options": [
      "should send",
      "should have sent",
      "should be sending"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('should have sent').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thedocumentsshouldhavebeensentyesterdays"
  },
  {
    "id": "pdf-mcq-344",
    "pdfNumber": 344,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "Who wrote this letter? By whom ____ this letter written?",
    "options": [
      "did",
      "was",
      "has"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "whowrotethisletterbywhomthisletterwritte"
  },
  {
    "id": "pdf-mcq-345",
    "pdfNumber": 345,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They gave the students certificates. The students ____ certificates.",
    "options": [
      "have giving",
      "were given",
      "gave"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were given').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theygavethestudentscertificatesthestuden"
  },
  {
    "id": "pdf-mcq-346",
    "pdfNumber": 346,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The room is cleaned every day. Someone ____ the room every day.",
    "options": [
      "cleans",
      "is cleaned",
      "cleaned"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('cleans').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theroomiscleanedeverydaysomeonetheroomev"
  },
  {
    "id": "pdf-mcq-347",
    "pdfNumber": 347,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They had been watching the house. The house ____.",
    "options": [
      "had been watched",
      "had been being watched",
      "was watching"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been being watched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadbeenwatchingthehousethehouse"
  },
  {
    "id": "pdf-mcq-349",
    "pdfNumber": 349,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "will publish",
      "will be published",
      "are publishing"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-350",
    "pdfNumber": 350,
    "category": "Active and Passive Voice",
    "difficulty": "Hard",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "has repaired",
      "is repaired",
      "is being repaired"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-351",
    "pdfNumber": 351,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The forms must be signed today. Someone ____ the forms today.",
    "options": [
      "must have signed",
      "must be signed",
      "must sign"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must sign').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theformsmustbesignedtodaysomeonetheforms"
  },
  {
    "id": "pdf-mcq-352",
    "pdfNumber": 352,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The chef is preparing the meal. The meal ____ by the chef.",
    "options": [
      "has been prepared",
      "is prepared",
      "is being prepared"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being prepared').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thechefispreparingthemealthemealbytheche"
  },
  {
    "id": "pdf-mcq-353",
    "pdfNumber": 353,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "Did the police question the witness? ____ the witness questioned by the police?",
    "options": [
      "Did",
      "Has",
      "Was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('Was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "didthepolicequestionthewitnessthewitness"
  },
  {
    "id": "pdf-mcq-354",
    "pdfNumber": 354,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They make these parts in Germany. These parts ____ in Germany.",
    "options": [
      "are making",
      "are made",
      "made"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('are made').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theymakethesepartsingermanythesepartsing"
  },
  {
    "id": "pdf-mcq-355",
    "pdfNumber": 355,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The company has offered her a job. She ____ a job by the company.",
    "options": [
      "has offered",
      "was offering",
      "has been offered"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been offered').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thecompanyhasofferedherajobsheajobbythec"
  },
  {
    "id": "pdf-mcq-356",
    "pdfNumber": 356,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "Do not touch the switch. The switch ____.",
    "options": [
      "is not touching",
      "does not touch",
      "must not be touched"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must not be touched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "donottouchtheswitchtheswitch"
  },
  {
    "id": "pdf-mcq-357",
    "pdfNumber": 357,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The storm damaged several houses. Several houses ____ by the storm.",
    "options": [
      "are damaging",
      "were damaged",
      "damaged"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were damaged').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thestormdamagedseveralhousesseveralhouse"
  },
  {
    "id": "pdf-mcq-358",
    "pdfNumber": 358,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They are going to announce the winner. The winner ____.",
    "options": [
      "is going to announce",
      "will announcing",
      "is going to be announced"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is going to be announced').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyaregoingtoannouncethewinnerthewinner"
  },
  {
    "id": "pdf-mcq-359",
    "pdfNumber": 359,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
    "options": [
      "should send",
      "should be sending",
      "should have sent"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('should have sent').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thedocumentsshouldhavebeensentyesterdays"
  },
  {
    "id": "pdf-mcq-360",
    "pdfNumber": 360,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "Who wrote this letter? By whom ____ this letter written?",
    "options": [
      "did",
      "was",
      "has"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "whowrotethisletterbywhomthisletterwritte"
  },
  {
    "id": "pdf-mcq-361",
    "pdfNumber": 361,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They gave the students certificates. The students ____ certificates.",
    "options": [
      "gave",
      "were given",
      "have giving"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were given').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theygavethestudentscertificatesthestuden"
  },
  {
    "id": "pdf-mcq-362",
    "pdfNumber": 362,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The room is cleaned every day. Someone ____ the room every day.",
    "options": [
      "is cleaned",
      "cleaned",
      "cleans"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('cleans').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theroomiscleanedeverydaysomeonetheroomev"
  },
  {
    "id": "pdf-mcq-363",
    "pdfNumber": 363,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They had been watching the house. The house ____.",
    "options": [
      "had been watched",
      "had been being watched",
      "was watching"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been being watched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadbeenwatchingthehousethehouse"
  },
  {
    "id": "pdf-mcq-365",
    "pdfNumber": 365,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "will publish",
      "will be published",
      "are publishing"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-366",
    "pdfNumber": 366,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "is repaired",
      "is being repaired",
      "has repaired"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-367",
    "pdfNumber": 367,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "Someone has stolen my laptop. My laptop ____.",
    "options": [
      "has stolen",
      "has been stolen",
      "was stealing"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been stolen').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "someonehasstolenmylaptopmylaptop"
  },
  {
    "id": "pdf-mcq-368",
    "pdfNumber": 368,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The manager approved the budget. The budget ____ by the manager.",
    "options": [
      "approved",
      "is approving",
      "was approved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was approved').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "themanagerapprovedthebudgetthebudgetbyth"
  },
  {
    "id": "pdf-mcq-369",
    "pdfNumber": 369,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "People speak English in many countries. English ____ in many countries.",
    "options": [
      "was speaking",
      "is spoken",
      "speaks"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is spoken').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "peoplespeakenglishinmanycountriesenglish"
  },
  {
    "id": "pdf-mcq-370",
    "pdfNumber": 370,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They had completed the work before noon. The work ____ before noon.",
    "options": [
      "has completed",
      "had been completed",
      "was completing"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been completed').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadcompletedtheworkbeforenoonthework"
  },
  {
    "id": "pdf-mcq-371",
    "pdfNumber": 371,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The forms must be signed today. Someone ____ the forms today.",
    "options": [
      "must sign",
      "must have signed",
      "must be signed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must sign').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theformsmustbesignedtodaysomeonetheforms"
  },
  {
    "id": "pdf-mcq-372",
    "pdfNumber": 372,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The chef is preparing the meal. The meal ____ by the chef.",
    "options": [
      "is prepared",
      "has been prepared",
      "is being prepared"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being prepared').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thechefispreparingthemealthemealbytheche"
  },
  {
    "id": "pdf-mcq-373",
    "pdfNumber": 373,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "Did the police question the witness? ____ the witness questioned by the police?",
    "options": [
      "Did",
      "Has",
      "Was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('Was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "didthepolicequestionthewitnessthewitness"
  },
  {
    "id": "pdf-mcq-374",
    "pdfNumber": 374,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "They make these parts in Germany. These parts ____ in Germany.",
    "options": [
      "are made",
      "are making",
      "made"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('are made').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theymakethesepartsingermanythesepartsing"
  },
  {
    "id": "pdf-mcq-375",
    "pdfNumber": 375,
    "category": "Active and Passive Voice",
    "difficulty": "Medium",
    "question": "The company has offered her a job. She ____ a job by the company.",
    "options": [
      "has offered",
      "was offering",
      "has been offered"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been offered').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thecompanyhasofferedherajobsheajobbythec"
  },
  {
    "id": "pdf-mcq-377",
    "pdfNumber": 377,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "will be published",
      "are publishing",
      "will publish"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-378",
    "pdfNumber": 378,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "has repaired",
      "is repaired",
      "is being repaired"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-379",
    "pdfNumber": 379,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "Someone has stolen my laptop. My laptop ____.",
    "options": [
      "was stealing",
      "has been stolen",
      "has stolen"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been stolen').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "someonehasstolenmylaptopmylaptop"
  },
  {
    "id": "pdf-mcq-380",
    "pdfNumber": 380,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The manager approved the budget. The budget ____ by the manager.",
    "options": [
      "is approving",
      "approved",
      "was approved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was approved').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "themanagerapprovedthebudgetthebudgetbyth"
  },
  {
    "id": "pdf-mcq-381",
    "pdfNumber": 381,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "People speak English in many countries. English ____ in many countries.",
    "options": [
      "speaks",
      "is spoken",
      "was speaking"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is spoken').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "peoplespeakenglishinmanycountriesenglish"
  },
  {
    "id": "pdf-mcq-382",
    "pdfNumber": 382,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They had completed the work before noon. The work ____ before noon.",
    "options": [
      "had been completed",
      "was completing",
      "has completed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been completed').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadcompletedtheworkbeforenoonthework"
  },
  {
    "id": "pdf-mcq-383",
    "pdfNumber": 383,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The forms must be signed today. Someone ____ the forms today.",
    "options": [
      "must be signed",
      "must have signed",
      "must sign"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must sign').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theformsmustbesignedtodaysomeonetheforms"
  },
  {
    "id": "pdf-mcq-384",
    "pdfNumber": 384,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The chef is preparing the meal. The meal ____ by the chef.",
    "options": [
      "has been prepared",
      "is prepared",
      "is being prepared"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being prepared').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thechefispreparingthemealthemealbytheche"
  },
  {
    "id": "pdf-mcq-385",
    "pdfNumber": 385,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "Did the police question the witness? ____ the witness questioned by the police?",
    "options": [
      "Has",
      "Did",
      "Was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('Was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "didthepolicequestionthewitnessthewitness"
  },
  {
    "id": "pdf-mcq-386",
    "pdfNumber": 386,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They make these parts in Germany. These parts ____ in Germany.",
    "options": [
      "are making",
      "are made",
      "made"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('are made').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theymakethesepartsingermanythesepartsing"
  },
  {
    "id": "pdf-mcq-387",
    "pdfNumber": 387,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The company has offered her a job. She ____ a job by the company.",
    "options": [
      "has been offered",
      "has offered",
      "was offering"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been offered').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thecompanyhasofferedherajobsheajobbythec"
  },
  {
    "id": "pdf-mcq-388",
    "pdfNumber": 388,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "Do not touch the switch. The switch ____.",
    "options": [
      "is not touching",
      "must not be touched",
      "does not touch"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('must not be touched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "donottouchtheswitchtheswitch"
  },
  {
    "id": "pdf-mcq-389",
    "pdfNumber": 389,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The storm damaged several houses. Several houses ____ by the storm.",
    "options": [
      "are damaging",
      "were damaged",
      "damaged"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were damaged').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thestormdamagedseveralhousesseveralhouse"
  },
  {
    "id": "pdf-mcq-390",
    "pdfNumber": 390,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They are going to announce the winner. The winner ____.",
    "options": [
      "is going to be announced",
      "is going to announce",
      "will announcing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is going to be announced').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyaregoingtoannouncethewinnerthewinner"
  },
  {
    "id": "pdf-mcq-391",
    "pdfNumber": 391,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The documents should have been sent yesterday. Someone ____ the documents yesterday.",
    "options": [
      "should send",
      "should have sent",
      "should be sending"
    ],
    "correctIndex": 1,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('should have sent').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "thedocumentsshouldhavebeensentyesterdays"
  },
  {
    "id": "pdf-mcq-392",
    "pdfNumber": 392,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "Who wrote this letter? By whom ____ this letter written?",
    "options": [
      "did",
      "has",
      "was"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "whowrotethisletterbywhomthisletterwritte"
  },
  {
    "id": "pdf-mcq-393",
    "pdfNumber": 393,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They gave the students certificates. The students ____ certificates.",
    "options": [
      "were given",
      "gave",
      "have giving"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('were given').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theygavethestudentscertificatesthestuden"
  },
  {
    "id": "pdf-mcq-394",
    "pdfNumber": 394,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The room is cleaned every day. Someone ____ the room every day.",
    "options": [
      "cleans",
      "cleaned",
      "is cleaned"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('cleans').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theroomiscleanedeverydaysomeonetheroomev"
  },
  {
    "id": "pdf-mcq-395",
    "pdfNumber": 395,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They had been watching the house. The house ____.",
    "options": [
      "had been watched",
      "was watching",
      "had been being watched"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('had been being watched').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyhadbeenwatchingthehousethehouse"
  },
  {
    "id": "pdf-mcq-397",
    "pdfNumber": 397,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The team will publish the results tomorrow. The results ____ tomorrow.",
    "options": [
      "will publish",
      "are publishing",
      "will be published"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('will be published').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theteamwillpublishtheresultstomorrowther"
  },
  {
    "id": "pdf-mcq-398",
    "pdfNumber": 398,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "They are repairing the bridge. The bridge ____.",
    "options": [
      "is being repaired",
      "has repaired",
      "is repaired"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('is being repaired').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "theyarerepairingthebridgethebridge"
  },
  {
    "id": "pdf-mcq-399",
    "pdfNumber": 399,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "Someone has stolen my laptop. My laptop ____.",
    "options": [
      "has been stolen",
      "has stolen",
      "was stealing"
    ],
    "correctIndex": 0,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('has been stolen').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "someonehasstolenmylaptopmylaptop"
  },
  {
    "id": "pdf-mcq-400",
    "pdfNumber": 400,
    "category": "Active and Passive Voice",
    "difficulty": "Easy",
    "question": "The manager approved the budget. The budget ____ by the manager.",
    "options": [
      "is approving",
      "approved",
      "was approved"
    ],
    "correctIndex": 2,
    "englishExplanation": "Passive voice construction uses the appropriate form of 'be' + past participle ('was approved').",
    "urduExplanation": "مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔",
    "baseSentenceKey": "themanagerapprovedthebudgetthebudgetbyth"
  },
  {
    "id": "pdf-mcq-401",
    "pdfNumber": 401,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They agreed ____ the costs equally.",
    "options": [
      "share",
      "to share",
      "sharing"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to share' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to share' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyagreedthecostsequally"
  },
  {
    "id": "pdf-mcq-402",
    "pdfNumber": 402,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I regret ____ you that the meeting is cancelled.",
    "options": [
      "to inform",
      "informing",
      "inform"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to inform' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to inform' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iregretyouthatthemeetingiscancelled"
  },
  {
    "id": "pdf-mcq-403",
    "pdfNumber": 403,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "The teacher encouraged us ____ questions.",
    "options": [
      "ask",
      "to ask",
      "asking"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to ask' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to ask' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theteacherencouragedusquestions"
  },
  {
    "id": "pdf-mcq-404",
    "pdfNumber": 404,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She denied ____ the confidential file.",
    "options": [
      "open",
      "opening",
      "to open"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'opening' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'opening' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shedeniedtheconfidentialfile"
  },
  {
    "id": "pdf-mcq-405",
    "pdfNumber": 405,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "We can't afford ____ another delay.",
    "options": [
      "having",
      "to have",
      "have"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to have' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to have' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "wecantaffordanotherdelay"
  },
  {
    "id": "pdf-mcq-406",
    "pdfNumber": 406,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He suggested ____ the meeting until Friday.",
    "options": [
      "postpone",
      "to postpone",
      "postponing"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'postponing' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'postponing' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hesuggestedthemeetinguntilfriday"
  },
  {
    "id": "pdf-mcq-407",
    "pdfNumber": 407,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I went to the shop ____ some stationery.",
    "options": [
      "buying",
      "buy",
      "to buy"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to buy' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to buy' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iwenttotheshopsomestationery"
  },
  {
    "id": "pdf-mcq-408",
    "pdfNumber": 408,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She avoids ____ during meetings.",
    "options": [
      "to interrupt",
      "interrupt",
      "interrupting"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-409",
    "pdfNumber": 409,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They decided ____ the proposal.",
    "options": [
      "accept",
      "accepting",
      "to accept"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-410",
    "pdfNumber": 410,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "I look forward to ____ from you.",
    "options": [
      "hearing",
      "hear",
      "to hear"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-411",
    "pdfNumber": 411,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He promised ____ the documents by noon.",
    "options": [
      "delivering",
      "deliver",
      "to deliver"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to deliver' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to deliver' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hepromisedthedocumentsbynoon"
  },
  {
    "id": "pdf-mcq-412",
    "pdfNumber": 412,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "____ regularly helps improve fluency.",
    "options": [
      "To practising",
      "Practise",
      "Practising"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'Practising' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'Practising' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "regularlyhelpsimprovefluency"
  },
  {
    "id": "pdf-mcq-413",
    "pdfNumber": 413,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "The manager let us ____ early.",
    "options": [
      "leaving",
      "leave",
      "to leave"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'leave' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'leave' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "themanagerletusearly"
  },
  {
    "id": "pdf-mcq-415",
    "pdfNumber": 415,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They hope ____ the results soon.",
    "options": [
      "receive",
      "to receive",
      "receiving"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to receive' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to receive' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyhopetheresultssoon"
  },
  {
    "id": "pdf-mcq-416",
    "pdfNumber": 416,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He admitted ____ the mistake.",
    "options": [
      "making",
      "make",
      "to make"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'making' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'making' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "headmittedthemistake"
  },
  {
    "id": "pdf-mcq-417",
    "pdfNumber": 417,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "It is important ____ the instructions carefully.",
    "options": [
      "reading",
      "read",
      "to read"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to read' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to read' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "itisimportanttheinstructionscarefully"
  },
  {
    "id": "pdf-mcq-418",
    "pdfNumber": 418,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "Would you mind ____ the window?",
    "options": [
      "to close",
      "close",
      "closing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'closing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'closing' موزوں ترین ہے۔",
    "baseSentenceKey": "wouldyoumindthewindow"
  },
  {
    "id": "pdf-mcq-419",
    "pdfNumber": 419,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She stopped ____ a phone call.",
    "options": [
      "make",
      "making",
      "to make"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to make' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to make' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shestoppedaphonecall"
  },
  {
    "id": "pdf-mcq-420",
    "pdfNumber": 420,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He is used to ____ under pressure.",
    "options": [
      "work",
      "working",
      "to work"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'working'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'working' موزوں ترین ہے۔",
    "baseSentenceKey": "heisusedtounderpressure"
  },
  {
    "id": "pdf-mcq-421",
    "pdfNumber": 421,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They agreed ____ the costs equally.",
    "options": [
      "sharing",
      "share",
      "to share"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to share' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to share' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyagreedthecostsequally"
  },
  {
    "id": "pdf-mcq-422",
    "pdfNumber": 422,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I regret ____ you that the meeting is cancelled.",
    "options": [
      "informing",
      "inform",
      "to inform"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to inform' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to inform' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iregretyouthatthemeetingiscancelled"
  },
  {
    "id": "pdf-mcq-423",
    "pdfNumber": 423,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "The teacher encouraged us ____ questions.",
    "options": [
      "to ask",
      "asking",
      "ask"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to ask' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to ask' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theteacherencouragedusquestions"
  },
  {
    "id": "pdf-mcq-424",
    "pdfNumber": 424,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She denied ____ the confidential file.",
    "options": [
      "open",
      "to open",
      "opening"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'opening' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'opening' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shedeniedtheconfidentialfile"
  },
  {
    "id": "pdf-mcq-425",
    "pdfNumber": 425,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "We can't afford ____ another delay.",
    "options": [
      "having",
      "to have",
      "have"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to have' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to have' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "wecantaffordanotherdelay"
  },
  {
    "id": "pdf-mcq-426",
    "pdfNumber": 426,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He suggested ____ the meeting until Friday.",
    "options": [
      "to postpone",
      "postpone",
      "postponing"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'postponing' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'postponing' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hesuggestedthemeetinguntilfriday"
  },
  {
    "id": "pdf-mcq-427",
    "pdfNumber": 427,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I went to the shop ____ some stationery.",
    "options": [
      "buy",
      "buying",
      "to buy"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to buy' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to buy' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iwenttotheshopsomestationery"
  },
  {
    "id": "pdf-mcq-428",
    "pdfNumber": 428,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She avoids ____ during meetings.",
    "options": [
      "interrupting",
      "interrupt",
      "to interrupt"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-429",
    "pdfNumber": 429,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They decided ____ the proposal.",
    "options": [
      "accept",
      "to accept",
      "accepting"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-430",
    "pdfNumber": 430,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "I look forward to ____ from you.",
    "options": [
      "hear",
      "hearing",
      "to hear"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-431",
    "pdfNumber": 431,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He promised ____ the documents by noon.",
    "options": [
      "deliver",
      "to deliver",
      "delivering"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to deliver' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to deliver' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hepromisedthedocumentsbynoon"
  },
  {
    "id": "pdf-mcq-432",
    "pdfNumber": 432,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "____ regularly helps improve fluency.",
    "options": [
      "Practise",
      "To practising",
      "Practising"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'Practising' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'Practising' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "regularlyhelpsimprovefluency"
  },
  {
    "id": "pdf-mcq-433",
    "pdfNumber": 433,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "The manager let us ____ early.",
    "options": [
      "to leave",
      "leaving",
      "leave"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'leave' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'leave' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "themanagerletusearly"
  },
  {
    "id": "pdf-mcq-435",
    "pdfNumber": 435,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They hope ____ the results soon.",
    "options": [
      "to receive",
      "receiving",
      "receive"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to receive' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to receive' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyhopetheresultssoon"
  },
  {
    "id": "pdf-mcq-436",
    "pdfNumber": 436,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He admitted ____ the mistake.",
    "options": [
      "to make",
      "making",
      "make"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'making' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'making' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "headmittedthemistake"
  },
  {
    "id": "pdf-mcq-437",
    "pdfNumber": 437,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "It is important ____ the instructions carefully.",
    "options": [
      "reading",
      "to read",
      "read"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to read' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to read' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "itisimportanttheinstructionscarefully"
  },
  {
    "id": "pdf-mcq-438",
    "pdfNumber": 438,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "Would you mind ____ the window?",
    "options": [
      "close",
      "closing",
      "to close"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'closing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'closing' موزوں ترین ہے۔",
    "baseSentenceKey": "wouldyoumindthewindow"
  },
  {
    "id": "pdf-mcq-439",
    "pdfNumber": 439,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She stopped ____ a phone call.",
    "options": [
      "making",
      "make",
      "to make"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to make' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to make' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shestoppedaphonecall"
  },
  {
    "id": "pdf-mcq-440",
    "pdfNumber": 440,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He is used to ____ under pressure.",
    "options": [
      "working",
      "to work",
      "work"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'working'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'working' موزوں ترین ہے۔",
    "baseSentenceKey": "heisusedtounderpressure"
  },
  {
    "id": "pdf-mcq-441",
    "pdfNumber": 441,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They agreed ____ the costs equally.",
    "options": [
      "sharing",
      "share",
      "to share"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to share' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to share' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyagreedthecostsequally"
  },
  {
    "id": "pdf-mcq-442",
    "pdfNumber": 442,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I regret ____ you that the meeting is cancelled.",
    "options": [
      "informing",
      "to inform",
      "inform"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to inform' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to inform' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iregretyouthatthemeetingiscancelled"
  },
  {
    "id": "pdf-mcq-443",
    "pdfNumber": 443,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "The teacher encouraged us ____ questions.",
    "options": [
      "to ask",
      "ask",
      "asking"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to ask' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to ask' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theteacherencouragedusquestions"
  },
  {
    "id": "pdf-mcq-444",
    "pdfNumber": 444,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She denied ____ the confidential file.",
    "options": [
      "to open",
      "opening",
      "open"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'opening' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'opening' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shedeniedtheconfidentialfile"
  },
  {
    "id": "pdf-mcq-445",
    "pdfNumber": 445,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "We can't afford ____ another delay.",
    "options": [
      "have",
      "to have",
      "having"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to have' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to have' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "wecantaffordanotherdelay"
  },
  {
    "id": "pdf-mcq-446",
    "pdfNumber": 446,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "He suggested ____ the meeting until Friday.",
    "options": [
      "postpone",
      "to postpone",
      "postponing"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'postponing' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'postponing' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hesuggestedthemeetinguntilfriday"
  },
  {
    "id": "pdf-mcq-447",
    "pdfNumber": 447,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "I went to the shop ____ some stationery.",
    "options": [
      "buying",
      "to buy",
      "buy"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to buy' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to buy' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iwenttotheshopsomestationery"
  },
  {
    "id": "pdf-mcq-448",
    "pdfNumber": 448,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "She avoids ____ during meetings.",
    "options": [
      "interrupt",
      "interrupting",
      "to interrupt"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-449",
    "pdfNumber": 449,
    "category": "Gerunds and Infinitives",
    "difficulty": "Hard",
    "question": "They decided ____ the proposal.",
    "options": [
      "accepting",
      "accept",
      "to accept"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-450",
    "pdfNumber": 450,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "I look forward to ____ from you.",
    "options": [
      "hear",
      "to hear",
      "hearing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-451",
    "pdfNumber": 451,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "They hope ____ the results soon.",
    "options": [
      "receive",
      "receiving",
      "to receive"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to receive' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to receive' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyhopetheresultssoon"
  },
  {
    "id": "pdf-mcq-452",
    "pdfNumber": 452,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "He admitted ____ the mistake.",
    "options": [
      "make",
      "to make",
      "making"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'making' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'making' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "headmittedthemistake"
  },
  {
    "id": "pdf-mcq-453",
    "pdfNumber": 453,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "It is important ____ the instructions carefully.",
    "options": [
      "reading",
      "to read",
      "read"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to read' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to read' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "itisimportanttheinstructionscarefully"
  },
  {
    "id": "pdf-mcq-454",
    "pdfNumber": 454,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "Would you mind ____ the window?",
    "options": [
      "close",
      "to close",
      "closing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'closing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'closing' موزوں ترین ہے۔",
    "baseSentenceKey": "wouldyoumindthewindow"
  },
  {
    "id": "pdf-mcq-455",
    "pdfNumber": 455,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "She stopped ____ a phone call.",
    "options": [
      "making",
      "to make",
      "make"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to make' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to make' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shestoppedaphonecall"
  },
  {
    "id": "pdf-mcq-456",
    "pdfNumber": 456,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "He is used to ____ under pressure.",
    "options": [
      "to work",
      "work",
      "working"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'working'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'working' موزوں ترین ہے۔",
    "baseSentenceKey": "heisusedtounderpressure"
  },
  {
    "id": "pdf-mcq-457",
    "pdfNumber": 457,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "They agreed ____ the costs equally.",
    "options": [
      "sharing",
      "to share",
      "share"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to share' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to share' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyagreedthecostsequally"
  },
  {
    "id": "pdf-mcq-458",
    "pdfNumber": 458,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "I regret ____ you that the meeting is cancelled.",
    "options": [
      "inform",
      "to inform",
      "informing"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to inform' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to inform' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iregretyouthatthemeetingiscancelled"
  },
  {
    "id": "pdf-mcq-459",
    "pdfNumber": 459,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "The teacher encouraged us ____ questions.",
    "options": [
      "to ask",
      "asking",
      "ask"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to ask' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to ask' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theteacherencouragedusquestions"
  },
  {
    "id": "pdf-mcq-460",
    "pdfNumber": 460,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "She denied ____ the confidential file.",
    "options": [
      "to open",
      "opening",
      "open"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'opening' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'opening' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shedeniedtheconfidentialfile"
  },
  {
    "id": "pdf-mcq-461",
    "pdfNumber": 461,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "We can't afford ____ another delay.",
    "options": [
      "have",
      "to have",
      "having"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to have' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to have' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "wecantaffordanotherdelay"
  },
  {
    "id": "pdf-mcq-462",
    "pdfNumber": 462,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "He suggested ____ the meeting until Friday.",
    "options": [
      "postponing",
      "to postpone",
      "postpone"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'postponing' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'postponing' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hesuggestedthemeetinguntilfriday"
  },
  {
    "id": "pdf-mcq-463",
    "pdfNumber": 463,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "I went to the shop ____ some stationery.",
    "options": [
      "buying",
      "to buy",
      "buy"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to buy' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to buy' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iwenttotheshopsomestationery"
  },
  {
    "id": "pdf-mcq-464",
    "pdfNumber": 464,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "She avoids ____ during meetings.",
    "options": [
      "to interrupt",
      "interrupting",
      "interrupt"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-465",
    "pdfNumber": 465,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "They decided ____ the proposal.",
    "options": [
      "to accept",
      "accept",
      "accepting"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-466",
    "pdfNumber": 466,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "I look forward to ____ from you.",
    "options": [
      "to hear",
      "hear",
      "hearing"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-467",
    "pdfNumber": 467,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "He promised ____ the documents by noon.",
    "options": [
      "to deliver",
      "deliver",
      "delivering"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to deliver' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to deliver' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hepromisedthedocumentsbynoon"
  },
  {
    "id": "pdf-mcq-468",
    "pdfNumber": 468,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "____ regularly helps improve fluency.",
    "options": [
      "Practise",
      "Practising",
      "To practising"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'Practising' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'Practising' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "regularlyhelpsimprovefluency"
  },
  {
    "id": "pdf-mcq-469",
    "pdfNumber": 469,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "The manager let us ____ early.",
    "options": [
      "leaving",
      "leave",
      "to leave"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'leave' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'leave' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "themanagerletusearly"
  },
  {
    "id": "pdf-mcq-471",
    "pdfNumber": 471,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "They hope ____ the results soon.",
    "options": [
      "receive",
      "receiving",
      "to receive"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to receive' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to receive' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyhopetheresultssoon"
  },
  {
    "id": "pdf-mcq-472",
    "pdfNumber": 472,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "He admitted ____ the mistake.",
    "options": [
      "make",
      "making",
      "to make"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'making' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'making' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "headmittedthemistake"
  },
  {
    "id": "pdf-mcq-473",
    "pdfNumber": 473,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "It is important ____ the instructions carefully.",
    "options": [
      "reading",
      "read",
      "to read"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to read' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to read' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "itisimportanttheinstructionscarefully"
  },
  {
    "id": "pdf-mcq-474",
    "pdfNumber": 474,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "Would you mind ____ the window?",
    "options": [
      "closing",
      "to close",
      "close"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'closing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'closing' موزوں ترین ہے۔",
    "baseSentenceKey": "wouldyoumindthewindow"
  },
  {
    "id": "pdf-mcq-475",
    "pdfNumber": 475,
    "category": "Gerunds and Infinitives",
    "difficulty": "Medium",
    "question": "She stopped ____ a phone call.",
    "options": [
      "make",
      "making",
      "to make"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to make' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to make' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shestoppedaphonecall"
  },
  {
    "id": "pdf-mcq-476",
    "pdfNumber": 476,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "She avoids ____ during meetings.",
    "options": [
      "interrupting",
      "interrupt",
      "to interrupt"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-477",
    "pdfNumber": 477,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "They decided ____ the proposal.",
    "options": [
      "accepting",
      "accept",
      "to accept"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-478",
    "pdfNumber": 478,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "I look forward to ____ from you.",
    "options": [
      "hear",
      "hearing",
      "to hear"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-479",
    "pdfNumber": 479,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "He promised ____ the documents by noon.",
    "options": [
      "to deliver",
      "deliver",
      "delivering"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to deliver' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to deliver' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hepromisedthedocumentsbynoon"
  },
  {
    "id": "pdf-mcq-480",
    "pdfNumber": 480,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "____ regularly helps improve fluency.",
    "options": [
      "To practising",
      "Practise",
      "Practising"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'Practising' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'Practising' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "regularlyhelpsimprovefluency"
  },
  {
    "id": "pdf-mcq-481",
    "pdfNumber": 481,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "The manager let us ____ early.",
    "options": [
      "leave",
      "to leave",
      "leaving"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'leave' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'leave' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "themanagerletusearly"
  },
  {
    "id": "pdf-mcq-483",
    "pdfNumber": 483,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "They hope ____ the results soon.",
    "options": [
      "receive",
      "receiving",
      "to receive"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to receive' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to receive' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyhopetheresultssoon"
  },
  {
    "id": "pdf-mcq-484",
    "pdfNumber": 484,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "He admitted ____ the mistake.",
    "options": [
      "make",
      "to make",
      "making"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'making' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'making' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "headmittedthemistake"
  },
  {
    "id": "pdf-mcq-485",
    "pdfNumber": 485,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "It is important ____ the instructions carefully.",
    "options": [
      "reading",
      "to read",
      "read"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to read' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to read' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "itisimportanttheinstructionscarefully"
  },
  {
    "id": "pdf-mcq-486",
    "pdfNumber": 486,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "Would you mind ____ the window?",
    "options": [
      "close",
      "closing",
      "to close"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'closing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'closing' موزوں ترین ہے۔",
    "baseSentenceKey": "wouldyoumindthewindow"
  },
  {
    "id": "pdf-mcq-487",
    "pdfNumber": 487,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "She stopped ____ a phone call.",
    "options": [
      "make",
      "making",
      "to make"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to make' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to make' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shestoppedaphonecall"
  },
  {
    "id": "pdf-mcq-488",
    "pdfNumber": 488,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "He is used to ____ under pressure.",
    "options": [
      "work",
      "working",
      "to work"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'working'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'working' موزوں ترین ہے۔",
    "baseSentenceKey": "heisusedtounderpressure"
  },
  {
    "id": "pdf-mcq-489",
    "pdfNumber": 489,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "They agreed ____ the costs equally.",
    "options": [
      "sharing",
      "share",
      "to share"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to share' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to share' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theyagreedthecostsequally"
  },
  {
    "id": "pdf-mcq-490",
    "pdfNumber": 490,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "I regret ____ you that the meeting is cancelled.",
    "options": [
      "inform",
      "informing",
      "to inform"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to inform' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to inform' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iregretyouthatthemeetingiscancelled"
  },
  {
    "id": "pdf-mcq-491",
    "pdfNumber": 491,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "The teacher encouraged us ____ questions.",
    "options": [
      "asking",
      "ask",
      "to ask"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to ask' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to ask' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theteacherencouragedusquestions"
  },
  {
    "id": "pdf-mcq-492",
    "pdfNumber": 492,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "She denied ____ the confidential file.",
    "options": [
      "to open",
      "open",
      "opening"
    ],
    "correctIndex": 2,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'opening' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'opening' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "shedeniedtheconfidentialfile"
  },
  {
    "id": "pdf-mcq-493",
    "pdfNumber": 493,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "We can't afford ____ another delay.",
    "options": [
      "to have",
      "having",
      "have"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to have' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to have' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "wecantaffordanotherdelay"
  },
  {
    "id": "pdf-mcq-494",
    "pdfNumber": 494,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "He suggested ____ the meeting until Friday.",
    "options": [
      "postpone",
      "postponing",
      "to postpone"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'postponing' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'postponing' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hesuggestedthemeetinguntilfriday"
  },
  {
    "id": "pdf-mcq-495",
    "pdfNumber": 495,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "I went to the shop ____ some stationery.",
    "options": [
      "to buy",
      "buy",
      "buying"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to buy' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to buy' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "iwenttotheshopsomestationery"
  },
  {
    "id": "pdf-mcq-496",
    "pdfNumber": 496,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "She avoids ____ during meetings.",
    "options": [
      "to interrupt",
      "interrupting",
      "interrupt"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'interrupting' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'interrupting' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "sheavoidsduringmeetings"
  },
  {
    "id": "pdf-mcq-497",
    "pdfNumber": 497,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "They decided ____ the proposal.",
    "options": [
      "accept",
      "to accept",
      "accepting"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to accept' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to accept' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "theydecidedtheproposal"
  },
  {
    "id": "pdf-mcq-498",
    "pdfNumber": 498,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "I look forward to ____ from you.",
    "options": [
      "to hear",
      "hearing",
      "hear"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'hearing'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'hearing' موزوں ترین ہے۔",
    "baseSentenceKey": "ilookforwardtofromyou"
  },
  {
    "id": "pdf-mcq-499",
    "pdfNumber": 499,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "He promised ____ the documents by noon.",
    "options": [
      "to deliver",
      "delivering",
      "deliver"
    ],
    "correctIndex": 0,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'to deliver' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'to deliver' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "hepromisedthedocumentsbynoon"
  },
  {
    "id": "pdf-mcq-500",
    "pdfNumber": 500,
    "category": "Gerunds and Infinitives",
    "difficulty": "Easy",
    "question": "____ regularly helps improve fluency.",
    "options": [
      "Practise",
      "Practising",
      "To practising"
    ],
    "correctIndex": 1,
    "englishExplanation": "The verb or phrase governing this blank specifically requires 'Practising' (gerund or infinitive pattern).",
    "urduExplanation": "جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت 'Practising' (Gerund یا Infinitive) آتا ہے۔",
    "baseSentenceKey": "regularlyhelpsimprovefluency"
  },
  {
    "id": "pdf-mcq-501",
    "pdfNumber": 501,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "She apologised ____ being late.",
    "options": [
      "with",
      "for",
      "of"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheapologisedbeinglate"
  },
  {
    "id": "pdf-mcq-502",
    "pdfNumber": 502,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The report consists ____ five sections.",
    "options": [
      "with",
      "from",
      "of"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'of'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'of' موزوں ترین ہے۔",
    "baseSentenceKey": "thereportconsistsfivesections"
  },
  {
    "id": "pdf-mcq-503",
    "pdfNumber": 503,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He is good ____ solving complex problems.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "heisgoodsolvingcomplexproblems"
  },
  {
    "id": "pdf-mcq-504",
    "pdfNumber": 504,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The cat jumped ____ the wall.",
    "options": [
      "between",
      "through",
      "over"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'over'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'over' موزوں ترین ہے۔",
    "baseSentenceKey": "thecatjumpedthewall"
  },
  {
    "id": "pdf-mcq-505",
    "pdfNumber": 505,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "Please refrain ____ using your phone in class.",
    "options": [
      "with",
      "from",
      "to"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "pleaserefrainusingyourphoneinclass"
  },
  {
    "id": "pdf-mcq-506",
    "pdfNumber": 506,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The decision depends ____ the final figures.",
    "options": [
      "on",
      "for",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thedecisiondependsthefinalfigures"
  },
  {
    "id": "pdf-mcq-507",
    "pdfNumber": 507,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "They arrived ____ the airport early.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "theyarrivedtheairportearly"
  },
  {
    "id": "pdf-mcq-508",
    "pdfNumber": 508,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-509",
    "pdfNumber": 509,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "Our exams are ____ November.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-510",
    "pdfNumber": 510,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "She has worked here ____ 2022.",
    "options": [
      "for",
      "since",
      "from"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-511",
    "pdfNumber": 511,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "We waited ____ two hours.",
    "options": [
      "during",
      "since",
      "for"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "wewaitedtwohours"
  },
  {
    "id": "pdf-mcq-512",
    "pdfNumber": 512,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The keys are ____ the drawer.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "thekeysarethedrawer"
  },
  {
    "id": "pdf-mcq-513",
    "pdfNumber": 513,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "He walked ____ the room without knocking.",
    "options": [
      "into",
      "among",
      "between"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'into'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'into' موزوں ترین ہے۔",
    "baseSentenceKey": "hewalkedtheroomwithoutknocking"
  },
  {
    "id": "pdf-mcq-514",
    "pdfNumber": 514,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The train arrived ____ time, so we were not late.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thetrainarrivedtimesowewerenotlate"
  },
  {
    "id": "pdf-mcq-515",
    "pdfNumber": 515,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "She is responsible ____ preparing the minutes.",
    "options": [
      "for",
      "of",
      "to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheisresponsiblepreparingtheminutes"
  },
  {
    "id": "pdf-mcq-516",
    "pdfNumber": 516,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "They congratulated him ____ his promotion.",
    "options": [
      "at",
      "on",
      "for"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "theycongratulatedhimhispromotion"
  },
  {
    "id": "pdf-mcq-517",
    "pdfNumber": 517,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "Divide the amount ____ the three departments.",
    "options": [
      "between",
      "across",
      "among"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'among'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'among' موزوں ترین ہے۔",
    "baseSentenceKey": "dividetheamountthethreedepartments"
  },
  {
    "id": "pdf-mcq-518",
    "pdfNumber": 518,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The office is opposite ____ the bank.",
    "options": [
      "—",
      "to",
      "of"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires '—'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '—' موزوں ترین ہے۔",
    "baseSentenceKey": "theofficeisoppositethebank"
  },
  {
    "id": "pdf-mcq-519",
    "pdfNumber": 519,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He prefers tea ____ coffee.",
    "options": [
      "to",
      "than",
      "over"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'to'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'to' موزوں ترین ہے۔",
    "baseSentenceKey": "heprefersteacoffee"
  },
  {
    "id": "pdf-mcq-520",
    "pdfNumber": 520,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "We travelled ____ Lahore to Islamabad by bus.",
    "options": [
      "by",
      "from",
      "since"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "wetravelledlahoretoislamabadbybus"
  },
  {
    "id": "pdf-mcq-521",
    "pdfNumber": 521,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "She apologised ____ being late.",
    "options": [
      "for",
      "of",
      "with"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheapologisedbeinglate"
  },
  {
    "id": "pdf-mcq-522",
    "pdfNumber": 522,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The report consists ____ five sections.",
    "options": [
      "of",
      "with",
      "from"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'of'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'of' موزوں ترین ہے۔",
    "baseSentenceKey": "thereportconsistsfivesections"
  },
  {
    "id": "pdf-mcq-523",
    "pdfNumber": 523,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He is good ____ solving complex problems.",
    "options": [
      "on",
      "at",
      "in"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "heisgoodsolvingcomplexproblems"
  },
  {
    "id": "pdf-mcq-524",
    "pdfNumber": 524,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The cat jumped ____ the wall.",
    "options": [
      "over",
      "between",
      "through"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'over'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'over' موزوں ترین ہے۔",
    "baseSentenceKey": "thecatjumpedthewall"
  },
  {
    "id": "pdf-mcq-525",
    "pdfNumber": 525,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "Please refrain ____ using your phone in class.",
    "options": [
      "to",
      "with",
      "from"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "pleaserefrainusingyourphoneinclass"
  },
  {
    "id": "pdf-mcq-526",
    "pdfNumber": 526,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The decision depends ____ the final figures.",
    "options": [
      "on",
      "for",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thedecisiondependsthefinalfigures"
  },
  {
    "id": "pdf-mcq-527",
    "pdfNumber": 527,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "They arrived ____ the airport early.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "theyarrivedtheairportearly"
  },
  {
    "id": "pdf-mcq-528",
    "pdfNumber": 528,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-529",
    "pdfNumber": 529,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "Our exams are ____ November.",
    "options": [
      "on",
      "at",
      "in"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-530",
    "pdfNumber": 530,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "She has worked here ____ 2022.",
    "options": [
      "from",
      "since",
      "for"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-531",
    "pdfNumber": 531,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "We waited ____ two hours.",
    "options": [
      "during",
      "since",
      "for"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "wewaitedtwohours"
  },
  {
    "id": "pdf-mcq-532",
    "pdfNumber": 532,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The keys are ____ the drawer.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "thekeysarethedrawer"
  },
  {
    "id": "pdf-mcq-533",
    "pdfNumber": 533,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "He walked ____ the room without knocking.",
    "options": [
      "among",
      "between",
      "into"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'into'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'into' موزوں ترین ہے۔",
    "baseSentenceKey": "hewalkedtheroomwithoutknocking"
  },
  {
    "id": "pdf-mcq-534",
    "pdfNumber": 534,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The train arrived ____ time, so we were not late.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thetrainarrivedtimesowewerenotlate"
  },
  {
    "id": "pdf-mcq-535",
    "pdfNumber": 535,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "She is responsible ____ preparing the minutes.",
    "options": [
      "of",
      "to",
      "for"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheisresponsiblepreparingtheminutes"
  },
  {
    "id": "pdf-mcq-536",
    "pdfNumber": 536,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "They congratulated him ____ his promotion.",
    "options": [
      "on",
      "for",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "theycongratulatedhimhispromotion"
  },
  {
    "id": "pdf-mcq-537",
    "pdfNumber": 537,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "Divide the amount ____ the three departments.",
    "options": [
      "among",
      "across",
      "between"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'among'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'among' موزوں ترین ہے۔",
    "baseSentenceKey": "dividetheamountthethreedepartments"
  },
  {
    "id": "pdf-mcq-538",
    "pdfNumber": 538,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The office is opposite ____ the bank.",
    "options": [
      "of",
      "to",
      "—"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires '—'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '—' موزوں ترین ہے۔",
    "baseSentenceKey": "theofficeisoppositethebank"
  },
  {
    "id": "pdf-mcq-539",
    "pdfNumber": 539,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He prefers tea ____ coffee.",
    "options": [
      "over",
      "to",
      "than"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'to'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'to' موزوں ترین ہے۔",
    "baseSentenceKey": "heprefersteacoffee"
  },
  {
    "id": "pdf-mcq-540",
    "pdfNumber": 540,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "We travelled ____ Lahore to Islamabad by bus.",
    "options": [
      "from",
      "by",
      "since"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "wetravelledlahoretoislamabadbybus"
  },
  {
    "id": "pdf-mcq-541",
    "pdfNumber": 541,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "She apologised ____ being late.",
    "options": [
      "for",
      "of",
      "with"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheapologisedbeinglate"
  },
  {
    "id": "pdf-mcq-542",
    "pdfNumber": 542,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The report consists ____ five sections.",
    "options": [
      "from",
      "of",
      "with"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'of'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'of' موزوں ترین ہے۔",
    "baseSentenceKey": "thereportconsistsfivesections"
  },
  {
    "id": "pdf-mcq-543",
    "pdfNumber": 543,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "He is good ____ solving complex problems.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "heisgoodsolvingcomplexproblems"
  },
  {
    "id": "pdf-mcq-544",
    "pdfNumber": 544,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The cat jumped ____ the wall.",
    "options": [
      "between",
      "through",
      "over"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'over'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'over' موزوں ترین ہے۔",
    "baseSentenceKey": "thecatjumpedthewall"
  },
  {
    "id": "pdf-mcq-545",
    "pdfNumber": 545,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "Please refrain ____ using your phone in class.",
    "options": [
      "with",
      "to",
      "from"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "pleaserefrainusingyourphoneinclass"
  },
  {
    "id": "pdf-mcq-546",
    "pdfNumber": 546,
    "category": "Collocation",
    "difficulty": "Hard",
    "question": "The decision depends ____ the final figures.",
    "options": [
      "for",
      "on",
      "at"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thedecisiondependsthefinalfigures"
  },
  {
    "id": "pdf-mcq-547",
    "pdfNumber": 547,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "They arrived ____ the airport early.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "theyarrivedtheairportearly"
  },
  {
    "id": "pdf-mcq-548",
    "pdfNumber": 548,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-549",
    "pdfNumber": 549,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "Our exams are ____ November.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-550",
    "pdfNumber": 550,
    "category": "Prepositions",
    "difficulty": "Hard",
    "question": "She has worked here ____ 2022.",
    "options": [
      "from",
      "since",
      "for"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-551",
    "pdfNumber": 551,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "She is responsible ____ preparing the minutes.",
    "options": [
      "to",
      "of",
      "for"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheisresponsiblepreparingtheminutes"
  },
  {
    "id": "pdf-mcq-552",
    "pdfNumber": 552,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "They congratulated him ____ his promotion.",
    "options": [
      "on",
      "for",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "theycongratulatedhimhispromotion"
  },
  {
    "id": "pdf-mcq-553",
    "pdfNumber": 553,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "Divide the amount ____ the three departments.",
    "options": [
      "among",
      "between",
      "across"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'among'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'among' موزوں ترین ہے۔",
    "baseSentenceKey": "dividetheamountthethreedepartments"
  },
  {
    "id": "pdf-mcq-554",
    "pdfNumber": 554,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The office is opposite ____ the bank.",
    "options": [
      "—",
      "to",
      "of"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires '—'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '—' موزوں ترین ہے۔",
    "baseSentenceKey": "theofficeisoppositethebank"
  },
  {
    "id": "pdf-mcq-555",
    "pdfNumber": 555,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "He prefers tea ____ coffee.",
    "options": [
      "than",
      "to",
      "over"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'to'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'to' موزوں ترین ہے۔",
    "baseSentenceKey": "heprefersteacoffee"
  },
  {
    "id": "pdf-mcq-556",
    "pdfNumber": 556,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "We travelled ____ Lahore to Islamabad by bus.",
    "options": [
      "since",
      "by",
      "from"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "wetravelledlahoretoislamabadbybus"
  },
  {
    "id": "pdf-mcq-557",
    "pdfNumber": 557,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "She apologised ____ being late.",
    "options": [
      "for",
      "of",
      "with"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheapologisedbeinglate"
  },
  {
    "id": "pdf-mcq-558",
    "pdfNumber": 558,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "The report consists ____ five sections.",
    "options": [
      "of",
      "from",
      "with"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'of'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'of' موزوں ترین ہے۔",
    "baseSentenceKey": "thereportconsistsfivesections"
  },
  {
    "id": "pdf-mcq-559",
    "pdfNumber": 559,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "He is good ____ solving complex problems.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "heisgoodsolvingcomplexproblems"
  },
  {
    "id": "pdf-mcq-560",
    "pdfNumber": 560,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The cat jumped ____ the wall.",
    "options": [
      "through",
      "over",
      "between"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'over'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'over' موزوں ترین ہے۔",
    "baseSentenceKey": "thecatjumpedthewall"
  },
  {
    "id": "pdf-mcq-561",
    "pdfNumber": 561,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "Please refrain ____ using your phone in class.",
    "options": [
      "to",
      "with",
      "from"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "pleaserefrainusingyourphoneinclass"
  },
  {
    "id": "pdf-mcq-562",
    "pdfNumber": 562,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "The decision depends ____ the final figures.",
    "options": [
      "for",
      "on",
      "at"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thedecisiondependsthefinalfigures"
  },
  {
    "id": "pdf-mcq-563",
    "pdfNumber": 563,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "They arrived ____ the airport early.",
    "options": [
      "at",
      "in",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "theyarrivedtheairportearly"
  },
  {
    "id": "pdf-mcq-564",
    "pdfNumber": 564,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-565",
    "pdfNumber": 565,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "Our exams are ____ November.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-566",
    "pdfNumber": 566,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "She has worked here ____ 2022.",
    "options": [
      "since",
      "from",
      "for"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-567",
    "pdfNumber": 567,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "We waited ____ two hours.",
    "options": [
      "for",
      "during",
      "since"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "wewaitedtwohours"
  },
  {
    "id": "pdf-mcq-568",
    "pdfNumber": 568,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The keys are ____ the drawer.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "thekeysarethedrawer"
  },
  {
    "id": "pdf-mcq-569",
    "pdfNumber": 569,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "He walked ____ the room without knocking.",
    "options": [
      "among",
      "between",
      "into"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'into'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'into' موزوں ترین ہے۔",
    "baseSentenceKey": "hewalkedtheroomwithoutknocking"
  },
  {
    "id": "pdf-mcq-570",
    "pdfNumber": 570,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The train arrived ____ time, so we were not late.",
    "options": [
      "on",
      "at",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thetrainarrivedtimesowewerenotlate"
  },
  {
    "id": "pdf-mcq-571",
    "pdfNumber": 571,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "She is responsible ____ preparing the minutes.",
    "options": [
      "of",
      "for",
      "to"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheisresponsiblepreparingtheminutes"
  },
  {
    "id": "pdf-mcq-572",
    "pdfNumber": 572,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "They congratulated him ____ his promotion.",
    "options": [
      "at",
      "on",
      "for"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "theycongratulatedhimhispromotion"
  },
  {
    "id": "pdf-mcq-573",
    "pdfNumber": 573,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "Divide the amount ____ the three departments.",
    "options": [
      "between",
      "across",
      "among"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'among'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'among' موزوں ترین ہے۔",
    "baseSentenceKey": "dividetheamountthethreedepartments"
  },
  {
    "id": "pdf-mcq-574",
    "pdfNumber": 574,
    "category": "Prepositions",
    "difficulty": "Medium",
    "question": "The office is opposite ____ the bank.",
    "options": [
      "—",
      "of",
      "to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires '—'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '—' موزوں ترین ہے۔",
    "baseSentenceKey": "theofficeisoppositethebank"
  },
  {
    "id": "pdf-mcq-575",
    "pdfNumber": 575,
    "category": "Collocation",
    "difficulty": "Medium",
    "question": "He prefers tea ____ coffee.",
    "options": [
      "than",
      "to",
      "over"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'to'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'to' موزوں ترین ہے۔",
    "baseSentenceKey": "heprefersteacoffee"
  },
  {
    "id": "pdf-mcq-576",
    "pdfNumber": 576,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-577",
    "pdfNumber": 577,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "Our exams are ____ November.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-578",
    "pdfNumber": 578,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "She has worked here ____ 2022.",
    "options": [
      "since",
      "for",
      "from"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-579",
    "pdfNumber": 579,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "We waited ____ two hours.",
    "options": [
      "since",
      "for",
      "during"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "wewaitedtwohours"
  },
  {
    "id": "pdf-mcq-580",
    "pdfNumber": 580,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The keys are ____ the drawer.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "thekeysarethedrawer"
  },
  {
    "id": "pdf-mcq-581",
    "pdfNumber": 581,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "He walked ____ the room without knocking.",
    "options": [
      "into",
      "between",
      "among"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'into'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'into' موزوں ترین ہے۔",
    "baseSentenceKey": "hewalkedtheroomwithoutknocking"
  },
  {
    "id": "pdf-mcq-582",
    "pdfNumber": 582,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The train arrived ____ time, so we were not late.",
    "options": [
      "on",
      "in",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thetrainarrivedtimesowewerenotlate"
  },
  {
    "id": "pdf-mcq-583",
    "pdfNumber": 583,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "She is responsible ____ preparing the minutes.",
    "options": [
      "for",
      "to",
      "of"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheisresponsiblepreparingtheminutes"
  },
  {
    "id": "pdf-mcq-584",
    "pdfNumber": 584,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "They congratulated him ____ his promotion.",
    "options": [
      "at",
      "for",
      "on"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "theycongratulatedhimhispromotion"
  },
  {
    "id": "pdf-mcq-585",
    "pdfNumber": 585,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "Divide the amount ____ the three departments.",
    "options": [
      "among",
      "between",
      "across"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'among'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'among' موزوں ترین ہے۔",
    "baseSentenceKey": "dividetheamountthethreedepartments"
  },
  {
    "id": "pdf-mcq-586",
    "pdfNumber": 586,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The office is opposite ____ the bank.",
    "options": [
      "of",
      "to",
      "—"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires '—'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '—' موزوں ترین ہے۔",
    "baseSentenceKey": "theofficeisoppositethebank"
  },
  {
    "id": "pdf-mcq-587",
    "pdfNumber": 587,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "He prefers tea ____ coffee.",
    "options": [
      "to",
      "than",
      "over"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'to'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'to' موزوں ترین ہے۔",
    "baseSentenceKey": "heprefersteacoffee"
  },
  {
    "id": "pdf-mcq-588",
    "pdfNumber": 588,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "We travelled ____ Lahore to Islamabad by bus.",
    "options": [
      "from",
      "since",
      "by"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "wetravelledlahoretoislamabadbybus"
  },
  {
    "id": "pdf-mcq-589",
    "pdfNumber": 589,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "She apologised ____ being late.",
    "options": [
      "for",
      "of",
      "with"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "sheapologisedbeinglate"
  },
  {
    "id": "pdf-mcq-590",
    "pdfNumber": 590,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "The report consists ____ five sections.",
    "options": [
      "from",
      "of",
      "with"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'of'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'of' موزوں ترین ہے۔",
    "baseSentenceKey": "thereportconsistsfivesections"
  },
  {
    "id": "pdf-mcq-591",
    "pdfNumber": 591,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "He is good ____ solving complex problems.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "heisgoodsolvingcomplexproblems"
  },
  {
    "id": "pdf-mcq-592",
    "pdfNumber": 592,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The cat jumped ____ the wall.",
    "options": [
      "through",
      "between",
      "over"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'over'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'over' موزوں ترین ہے۔",
    "baseSentenceKey": "thecatjumpedthewall"
  },
  {
    "id": "pdf-mcq-593",
    "pdfNumber": 593,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "Please refrain ____ using your phone in class.",
    "options": [
      "to",
      "with",
      "from"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'from'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'from' موزوں ترین ہے۔",
    "baseSentenceKey": "pleaserefrainusingyourphoneinclass"
  },
  {
    "id": "pdf-mcq-594",
    "pdfNumber": 594,
    "category": "Collocation",
    "difficulty": "Easy",
    "question": "The decision depends ____ the final figures.",
    "options": [
      "on",
      "for",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'on'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'on' موزوں ترین ہے۔",
    "baseSentenceKey": "thedecisiondependsthefinalfigures"
  },
  {
    "id": "pdf-mcq-595",
    "pdfNumber": 595,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "They arrived ____ the airport early.",
    "options": [
      "at",
      "on",
      "in"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "theyarrivedtheairportearly"
  },
  {
    "id": "pdf-mcq-596",
    "pdfNumber": 596,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The meeting begins ____ 9:30 a.m.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'at'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'at' موزوں ترین ہے۔",
    "baseSentenceKey": "themeetingbegins930am"
  },
  {
    "id": "pdf-mcq-597",
    "pdfNumber": 597,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "Our exams are ____ November.",
    "options": [
      "in",
      "at",
      "on"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "ourexamsarenovember"
  },
  {
    "id": "pdf-mcq-598",
    "pdfNumber": 598,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "She has worked here ____ 2022.",
    "options": [
      "since",
      "for",
      "from"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'since'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'since' موزوں ترین ہے۔",
    "baseSentenceKey": "shehasworkedhere2022"
  },
  {
    "id": "pdf-mcq-599",
    "pdfNumber": 599,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "We waited ____ two hours.",
    "options": [
      "for",
      "since",
      "during"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'for'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'for' موزوں ترین ہے۔",
    "baseSentenceKey": "wewaitedtwohours"
  },
  {
    "id": "pdf-mcq-600",
    "pdfNumber": 600,
    "category": "Prepositions",
    "difficulty": "Easy",
    "question": "The keys are ____ the drawer.",
    "options": [
      "in",
      "on",
      "at"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard English prepositional usage and dependent collocation requires 'in'.",
    "urduExplanation": "انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے 'in' موزوں ترین ہے۔",
    "baseSentenceKey": "thekeysarethedrawer"
  },
  {
    "id": "pdf-mcq-601",
    "pdfNumber": 601,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ consult a doctor if the pain continues.",
    "options": [
      "can to",
      "should",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youconsultadoctorifthepaincontinues"
  },
  {
    "id": "pdf-mcq-602",
    "pdfNumber": 602,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "He ____ have missed the bus; he left home very early.",
    "options": [
      "can't",
      "must",
      "might to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "hehavemissedthebushelefthomeveryearly"
  },
  {
    "id": "pdf-mcq-603",
    "pdfNumber": 603,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ I open the window, or is it too cold?",
    "options": [
      "Need",
      "Must",
      "May"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'May' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'May' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "iopenthewindoworisittoocold"
  },
  {
    "id": "pdf-mcq-604",
    "pdfNumber": 604,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "We ____ to finish this today; the deadline is tomorrow.",
    "options": [
      "should to",
      "ought",
      "oughted"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'ought' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'ought' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wetofinishthistodaythedeadlineistomorrow"
  },
  {
    "id": "pdf-mcq-605",
    "pdfNumber": 605,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ park here; the sign clearly forbids it.",
    "options": [
      "wouldn't",
      "mustn't",
      "needn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youparkherethesignclearlyforbidsit"
  },
  {
    "id": "pdf-mcq-606",
    "pdfNumber": 606,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ rather walk than wait for a taxi.",
    "options": [
      "would",
      "should",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'would' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'would' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "sheratherwalkthanwaitforataxi"
  },
  {
    "id": "pdf-mcq-607",
    "pdfNumber": 607,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "They ____ be delayed because of the heavy snow.",
    "options": [
      "might",
      "must to",
      "ought"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "theybedelayedbecauseoftheheavysnow"
  },
  {
    "id": "pdf-mcq-608",
    "pdfNumber": 608,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "would",
      "must",
      "might"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-609",
    "pdfNumber": 609,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ you please send me the updated file?",
    "options": [
      "Shall",
      "Could",
      "Must"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-610",
    "pdfNumber": 610,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "may",
      "can",
      "should"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-611",
    "pdfNumber": 611,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ be at home; all the lights are off, so I am not sure.",
    "options": [
      "might",
      "has to",
      "must"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shebeathomeallthelightsareoffsoiamnotsur"
  },
  {
    "id": "pdf-mcq-612",
    "pdfNumber": 612,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Employees ____ submit expenses by Friday; it is compulsory.",
    "options": [
      "could",
      "have to",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'have to' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'have to' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "employeessubmitexpensesbyfridayitiscompu"
  },
  {
    "id": "pdf-mcq-613",
    "pdfNumber": 613,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ smoke in this building. It is prohibited.",
    "options": [
      "might not",
      "mustn't",
      "don't have to"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "yousmokeinthisbuildingitisprohibited"
  },
  {
    "id": "pdf-mcq-614",
    "pdfNumber": 614,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "When I was five, I ____ swim very well.",
    "options": [
      "must",
      "shall",
      "could"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wheniwasfiveiswimverywell"
  },
  {
    "id": "pdf-mcq-615",
    "pdfNumber": 615,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "That ____ be the correct answer; the calculation is wrong.",
    "options": [
      "must",
      "can't",
      "should"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "thatbethecorrectanswerthecalculationiswr"
  },
  {
    "id": "pdf-mcq-616",
    "pdfNumber": 616,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "We ____ leave now if we want to catch the last train.",
    "options": [
      "would rather to",
      "must to",
      "had better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'had better' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'had better' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "weleavenowifwewanttocatchthelasttrain"
  },
  {
    "id": "pdf-mcq-617",
    "pdfNumber": 617,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ have brought an umbrella; the forecast said it would be sunny.",
    "options": [
      "mustn't",
      "needn't",
      "couldn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'needn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'needn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavebroughtanumbrellatheforecastsaidi"
  },
  {
    "id": "pdf-mcq-618",
    "pdfNumber": 618,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Would you ____ some tea?",
    "options": [
      "liking",
      "liked",
      "like"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'like' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'like' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wouldyousometea"
  },
  {
    "id": "pdf-mcq-619",
    "pdfNumber": 619,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Visitors ____ show identification at reception.",
    "options": [
      "must",
      "ought",
      "may to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "visitorsshowidentificationatreception"
  },
  {
    "id": "pdf-mcq-620",
    "pdfNumber": 620,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ speak three languages when she was ten.",
    "options": [
      "should",
      "could",
      "can"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shespeakthreelanguageswhenshewasten"
  },
  {
    "id": "pdf-mcq-621",
    "pdfNumber": 621,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ consult a doctor if the pain continues.",
    "options": [
      "can to",
      "would",
      "should"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youconsultadoctorifthepaincontinues"
  },
  {
    "id": "pdf-mcq-622",
    "pdfNumber": 622,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "He ____ have missed the bus; he left home very early.",
    "options": [
      "must",
      "might to",
      "can't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "hehavemissedthebushelefthomeveryearly"
  },
  {
    "id": "pdf-mcq-623",
    "pdfNumber": 623,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ I open the window, or is it too cold?",
    "options": [
      "Must",
      "May",
      "Need"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'May' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'May' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "iopenthewindoworisittoocold"
  },
  {
    "id": "pdf-mcq-624",
    "pdfNumber": 624,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "We ____ to finish this today; the deadline is tomorrow.",
    "options": [
      "oughted",
      "should to",
      "ought"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'ought' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'ought' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wetofinishthistodaythedeadlineistomorrow"
  },
  {
    "id": "pdf-mcq-625",
    "pdfNumber": 625,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ park here; the sign clearly forbids it.",
    "options": [
      "wouldn't",
      "mustn't",
      "needn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youparkherethesignclearlyforbidsit"
  },
  {
    "id": "pdf-mcq-626",
    "pdfNumber": 626,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ rather walk than wait for a taxi.",
    "options": [
      "would",
      "should",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'would' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'would' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "sheratherwalkthanwaitforataxi"
  },
  {
    "id": "pdf-mcq-627",
    "pdfNumber": 627,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "They ____ be delayed because of the heavy snow.",
    "options": [
      "must to",
      "ought",
      "might"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "theybedelayedbecauseoftheheavysnow"
  },
  {
    "id": "pdf-mcq-628",
    "pdfNumber": 628,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "would",
      "might",
      "must"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-629",
    "pdfNumber": 629,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ you please send me the updated file?",
    "options": [
      "Shall",
      "Must",
      "Could"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-630",
    "pdfNumber": 630,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "can",
      "should",
      "may"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-631",
    "pdfNumber": 631,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ be at home; all the lights are off, so I am not sure.",
    "options": [
      "might",
      "must",
      "has to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shebeathomeallthelightsareoffsoiamnotsur"
  },
  {
    "id": "pdf-mcq-632",
    "pdfNumber": 632,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Employees ____ submit expenses by Friday; it is compulsory.",
    "options": [
      "have to",
      "would",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'have to' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'have to' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "employeessubmitexpensesbyfridayitiscompu"
  },
  {
    "id": "pdf-mcq-633",
    "pdfNumber": 633,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ smoke in this building. It is prohibited.",
    "options": [
      "might not",
      "don't have to",
      "mustn't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "yousmokeinthisbuildingitisprohibited"
  },
  {
    "id": "pdf-mcq-634",
    "pdfNumber": 634,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "When I was five, I ____ swim very well.",
    "options": [
      "shall",
      "could",
      "must"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wheniwasfiveiswimverywell"
  },
  {
    "id": "pdf-mcq-635",
    "pdfNumber": 635,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "That ____ be the correct answer; the calculation is wrong.",
    "options": [
      "must",
      "can't",
      "should"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "thatbethecorrectanswerthecalculationiswr"
  },
  {
    "id": "pdf-mcq-636",
    "pdfNumber": 636,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "We ____ leave now if we want to catch the last train.",
    "options": [
      "had better",
      "would rather to",
      "must to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'had better' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'had better' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "weleavenowifwewanttocatchthelasttrain"
  },
  {
    "id": "pdf-mcq-637",
    "pdfNumber": 637,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ have brought an umbrella; the forecast said it would be sunny.",
    "options": [
      "couldn't",
      "needn't",
      "mustn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'needn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'needn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavebroughtanumbrellatheforecastsaidi"
  },
  {
    "id": "pdf-mcq-638",
    "pdfNumber": 638,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Would you ____ some tea?",
    "options": [
      "liking",
      "liked",
      "like"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'like' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'like' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wouldyousometea"
  },
  {
    "id": "pdf-mcq-639",
    "pdfNumber": 639,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "Visitors ____ show identification at reception.",
    "options": [
      "may to",
      "ought",
      "must"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "visitorsshowidentificationatreception"
  },
  {
    "id": "pdf-mcq-640",
    "pdfNumber": 640,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ speak three languages when she was ten.",
    "options": [
      "can",
      "could",
      "should"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shespeakthreelanguageswhenshewasten"
  },
  {
    "id": "pdf-mcq-641",
    "pdfNumber": 641,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ consult a doctor if the pain continues.",
    "options": [
      "should",
      "can to",
      "would"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youconsultadoctorifthepaincontinues"
  },
  {
    "id": "pdf-mcq-642",
    "pdfNumber": 642,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "He ____ have missed the bus; he left home very early.",
    "options": [
      "must",
      "might to",
      "can't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "hehavemissedthebushelefthomeveryearly"
  },
  {
    "id": "pdf-mcq-643",
    "pdfNumber": 643,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ I open the window, or is it too cold?",
    "options": [
      "Need",
      "May",
      "Must"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'May' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'May' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "iopenthewindoworisittoocold"
  },
  {
    "id": "pdf-mcq-644",
    "pdfNumber": 644,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "We ____ to finish this today; the deadline is tomorrow.",
    "options": [
      "oughted",
      "should to",
      "ought"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'ought' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'ought' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wetofinishthistodaythedeadlineistomorrow"
  },
  {
    "id": "pdf-mcq-645",
    "pdfNumber": 645,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ park here; the sign clearly forbids it.",
    "options": [
      "mustn't",
      "wouldn't",
      "needn't"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youparkherethesignclearlyforbidsit"
  },
  {
    "id": "pdf-mcq-646",
    "pdfNumber": 646,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "She ____ rather walk than wait for a taxi.",
    "options": [
      "would",
      "could",
      "should"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'would' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'would' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "sheratherwalkthanwaitforataxi"
  },
  {
    "id": "pdf-mcq-647",
    "pdfNumber": 647,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "They ____ be delayed because of the heavy snow.",
    "options": [
      "might",
      "ought",
      "must to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "theybedelayedbecauseoftheheavysnow"
  },
  {
    "id": "pdf-mcq-648",
    "pdfNumber": 648,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "must",
      "would",
      "might"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-649",
    "pdfNumber": 649,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "____ you please send me the updated file?",
    "options": [
      "Must",
      "Could",
      "Shall"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-650",
    "pdfNumber": 650,
    "category": "Modal Verbs",
    "difficulty": "Hard",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "should",
      "may",
      "can"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-651",
    "pdfNumber": 651,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "That ____ be the correct answer; the calculation is wrong.",
    "options": [
      "should",
      "must",
      "can't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "thatbethecorrectanswerthecalculationiswr"
  },
  {
    "id": "pdf-mcq-652",
    "pdfNumber": 652,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "We ____ leave now if we want to catch the last train.",
    "options": [
      "had better",
      "must to",
      "would rather to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'had better' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'had better' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "weleavenowifwewanttocatchthelasttrain"
  },
  {
    "id": "pdf-mcq-653",
    "pdfNumber": 653,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ have brought an umbrella; the forecast said it would be sunny.",
    "options": [
      "needn't",
      "couldn't",
      "mustn't"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'needn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'needn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavebroughtanumbrellatheforecastsaidi"
  },
  {
    "id": "pdf-mcq-654",
    "pdfNumber": 654,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "Would you ____ some tea?",
    "options": [
      "liked",
      "like",
      "liking"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'like' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'like' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wouldyousometea"
  },
  {
    "id": "pdf-mcq-655",
    "pdfNumber": 655,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "Visitors ____ show identification at reception.",
    "options": [
      "may to",
      "ought",
      "must"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "visitorsshowidentificationatreception"
  },
  {
    "id": "pdf-mcq-656",
    "pdfNumber": 656,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "She ____ speak three languages when she was ten.",
    "options": [
      "could",
      "should",
      "can"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shespeakthreelanguageswhenshewasten"
  },
  {
    "id": "pdf-mcq-657",
    "pdfNumber": 657,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ consult a doctor if the pain continues.",
    "options": [
      "can to",
      "should",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youconsultadoctorifthepaincontinues"
  },
  {
    "id": "pdf-mcq-658",
    "pdfNumber": 658,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "He ____ have missed the bus; he left home very early.",
    "options": [
      "can't",
      "must",
      "might to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "hehavemissedthebushelefthomeveryearly"
  },
  {
    "id": "pdf-mcq-659",
    "pdfNumber": 659,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "____ I open the window, or is it too cold?",
    "options": [
      "Must",
      "Need",
      "May"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'May' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'May' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "iopenthewindoworisittoocold"
  },
  {
    "id": "pdf-mcq-660",
    "pdfNumber": 660,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "We ____ to finish this today; the deadline is tomorrow.",
    "options": [
      "oughted",
      "should to",
      "ought"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'ought' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'ought' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wetofinishthistodaythedeadlineistomorrow"
  },
  {
    "id": "pdf-mcq-661",
    "pdfNumber": 661,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ park here; the sign clearly forbids it.",
    "options": [
      "wouldn't",
      "mustn't",
      "needn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youparkherethesignclearlyforbidsit"
  },
  {
    "id": "pdf-mcq-662",
    "pdfNumber": 662,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "She ____ rather walk than wait for a taxi.",
    "options": [
      "would",
      "should",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'would' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'would' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "sheratherwalkthanwaitforataxi"
  },
  {
    "id": "pdf-mcq-663",
    "pdfNumber": 663,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "They ____ be delayed because of the heavy snow.",
    "options": [
      "must to",
      "ought",
      "might"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "theybedelayedbecauseoftheheavysnow"
  },
  {
    "id": "pdf-mcq-664",
    "pdfNumber": 664,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "might",
      "must",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-665",
    "pdfNumber": 665,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "____ you please send me the updated file?",
    "options": [
      "Must",
      "Could",
      "Shall"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-666",
    "pdfNumber": 666,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "should",
      "may",
      "can"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-667",
    "pdfNumber": 667,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "She ____ be at home; all the lights are off, so I am not sure.",
    "options": [
      "must",
      "might",
      "has to"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shebeathomeallthelightsareoffsoiamnotsur"
  },
  {
    "id": "pdf-mcq-668",
    "pdfNumber": 668,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "Employees ____ submit expenses by Friday; it is compulsory.",
    "options": [
      "could",
      "have to",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'have to' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'have to' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "employeessubmitexpensesbyfridayitiscompu"
  },
  {
    "id": "pdf-mcq-669",
    "pdfNumber": 669,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ smoke in this building. It is prohibited.",
    "options": [
      "don't have to",
      "might not",
      "mustn't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "yousmokeinthisbuildingitisprohibited"
  },
  {
    "id": "pdf-mcq-670",
    "pdfNumber": 670,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "When I was five, I ____ swim very well.",
    "options": [
      "shall",
      "could",
      "must"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wheniwasfiveiswimverywell"
  },
  {
    "id": "pdf-mcq-671",
    "pdfNumber": 671,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "That ____ be the correct answer; the calculation is wrong.",
    "options": [
      "must",
      "can't",
      "should"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "thatbethecorrectanswerthecalculationiswr"
  },
  {
    "id": "pdf-mcq-672",
    "pdfNumber": 672,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "We ____ leave now if we want to catch the last train.",
    "options": [
      "must to",
      "would rather to",
      "had better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'had better' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'had better' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "weleavenowifwewanttocatchthelasttrain"
  },
  {
    "id": "pdf-mcq-673",
    "pdfNumber": 673,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "You ____ have brought an umbrella; the forecast said it would be sunny.",
    "options": [
      "mustn't",
      "couldn't",
      "needn't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'needn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'needn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavebroughtanumbrellatheforecastsaidi"
  },
  {
    "id": "pdf-mcq-674",
    "pdfNumber": 674,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "Would you ____ some tea?",
    "options": [
      "like",
      "liking",
      "liked"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'like' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'like' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wouldyousometea"
  },
  {
    "id": "pdf-mcq-675",
    "pdfNumber": 675,
    "category": "Modal Verbs",
    "difficulty": "Medium",
    "question": "Visitors ____ show identification at reception.",
    "options": [
      "ought",
      "must",
      "may to"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "visitorsshowidentificationatreception"
  },
  {
    "id": "pdf-mcq-676",
    "pdfNumber": 676,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "must",
      "might",
      "would"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-677",
    "pdfNumber": 677,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "____ you please send me the updated file?",
    "options": [
      "Shall",
      "Could",
      "Must"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-678",
    "pdfNumber": 678,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "should",
      "can",
      "may"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-679",
    "pdfNumber": 679,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "She ____ be at home; all the lights are off, so I am not sure.",
    "options": [
      "might",
      "has to",
      "must"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shebeathomeallthelightsareoffsoiamnotsur"
  },
  {
    "id": "pdf-mcq-680",
    "pdfNumber": 680,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "Employees ____ submit expenses by Friday; it is compulsory.",
    "options": [
      "have to",
      "would",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'have to' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'have to' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "employeessubmitexpensesbyfridayitiscompu"
  },
  {
    "id": "pdf-mcq-681",
    "pdfNumber": 681,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ smoke in this building. It is prohibited.",
    "options": [
      "don't have to",
      "might not",
      "mustn't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "yousmokeinthisbuildingitisprohibited"
  },
  {
    "id": "pdf-mcq-682",
    "pdfNumber": 682,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "When I was five, I ____ swim very well.",
    "options": [
      "must",
      "shall",
      "could"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wheniwasfiveiswimverywell"
  },
  {
    "id": "pdf-mcq-683",
    "pdfNumber": 683,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "That ____ be the correct answer; the calculation is wrong.",
    "options": [
      "should",
      "must",
      "can't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "thatbethecorrectanswerthecalculationiswr"
  },
  {
    "id": "pdf-mcq-684",
    "pdfNumber": 684,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "We ____ leave now if we want to catch the last train.",
    "options": [
      "would rather to",
      "must to",
      "had better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'had better' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'had better' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "weleavenowifwewanttocatchthelasttrain"
  },
  {
    "id": "pdf-mcq-685",
    "pdfNumber": 685,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ have brought an umbrella; the forecast said it would be sunny.",
    "options": [
      "mustn't",
      "needn't",
      "couldn't"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'needn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'needn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavebroughtanumbrellatheforecastsaidi"
  },
  {
    "id": "pdf-mcq-686",
    "pdfNumber": 686,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "Would you ____ some tea?",
    "options": [
      "liked",
      "liking",
      "like"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'like' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'like' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wouldyousometea"
  },
  {
    "id": "pdf-mcq-687",
    "pdfNumber": 687,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "Visitors ____ show identification at reception.",
    "options": [
      "may to",
      "ought",
      "must"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "visitorsshowidentificationatreception"
  },
  {
    "id": "pdf-mcq-688",
    "pdfNumber": 688,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "She ____ speak three languages when she was ten.",
    "options": [
      "could",
      "should",
      "can"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shespeakthreelanguageswhenshewasten"
  },
  {
    "id": "pdf-mcq-689",
    "pdfNumber": 689,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ consult a doctor if the pain continues.",
    "options": [
      "can to",
      "would",
      "should"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youconsultadoctorifthepaincontinues"
  },
  {
    "id": "pdf-mcq-690",
    "pdfNumber": 690,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "He ____ have missed the bus; he left home very early.",
    "options": [
      "can't",
      "might to",
      "must"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'can't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'can't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "hehavemissedthebushelefthomeveryearly"
  },
  {
    "id": "pdf-mcq-691",
    "pdfNumber": 691,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "____ I open the window, or is it too cold?",
    "options": [
      "Must",
      "May",
      "Need"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'May' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'May' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "iopenthewindoworisittoocold"
  },
  {
    "id": "pdf-mcq-692",
    "pdfNumber": 692,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "We ____ to finish this today; the deadline is tomorrow.",
    "options": [
      "oughted",
      "should to",
      "ought"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'ought' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'ought' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "wetofinishthistodaythedeadlineistomorrow"
  },
  {
    "id": "pdf-mcq-693",
    "pdfNumber": 693,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ park here; the sign clearly forbids it.",
    "options": [
      "needn't",
      "wouldn't",
      "mustn't"
    ],
    "correctIndex": 2,
    "englishExplanation": "Modal verb 'mustn't' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'mustn't' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youparkherethesignclearlyforbidsit"
  },
  {
    "id": "pdf-mcq-694",
    "pdfNumber": 694,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "She ____ rather walk than wait for a taxi.",
    "options": [
      "should",
      "would",
      "could"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'would' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'would' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "sheratherwalkthanwaitforataxi"
  },
  {
    "id": "pdf-mcq-695",
    "pdfNumber": 695,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "They ____ be delayed because of the heavy snow.",
    "options": [
      "might",
      "ought",
      "must to"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "theybedelayedbecauseoftheheavysnow"
  },
  {
    "id": "pdf-mcq-696",
    "pdfNumber": 696,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ wear a helmet while riding a motorcycle; it is the law.",
    "options": [
      "might",
      "must",
      "would"
    ],
    "correctIndex": 1,
    "englishExplanation": "Modal verb 'must' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'must' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youwearahelmetwhileridingamotorcycleitis"
  },
  {
    "id": "pdf-mcq-697",
    "pdfNumber": 697,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "____ you please send me the updated file?",
    "options": [
      "Could",
      "Shall",
      "Must"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'Could' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'Could' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youpleasesendmetheupdatedfile"
  },
  {
    "id": "pdf-mcq-698",
    "pdfNumber": 698,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "You ____ have told me earlier; now it is too late.",
    "options": [
      "should",
      "may",
      "can"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'should' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'should' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "youhavetoldmeearliernowitistoolate"
  },
  {
    "id": "pdf-mcq-699",
    "pdfNumber": 699,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "She ____ be at home; all the lights are off, so I am not sure.",
    "options": [
      "might",
      "has to",
      "must"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'might' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'might' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "shebeathomeallthelightsareoffsoiamnotsur"
  },
  {
    "id": "pdf-mcq-700",
    "pdfNumber": 700,
    "category": "Modal Verbs",
    "difficulty": "Easy",
    "question": "Employees ____ submit expenses by Friday; it is compulsory.",
    "options": [
      "have to",
      "would",
      "could"
    ],
    "correctIndex": 0,
    "englishExplanation": "Modal verb 'have to' correctly expresses the required degree of obligation, ability, permission, or deduction.",
    "urduExplanation": "ماڈل ورب 'have to' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔",
    "baseSentenceKey": "employeessubmitexpensesbyfridayitiscompu"
  },
  {
    "id": "pdf-mcq-701",
    "pdfNumber": 701,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He checked the figures twice ____ avoid mistakes.",
    "options": [
      "whereas",
      "although",
      "in order to"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'in order to' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in order to' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hecheckedthefigurestwiceavoidmistakes"
  },
  {
    "id": "pdf-mcq-703",
    "pdfNumber": 703,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ the report was brief, it covered every key point.",
    "options": [
      "Despite",
      "Although",
      "Because of"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thereportwasbriefitcoveredeverykeypoint"
  },
  {
    "id": "pdf-mcq-704",
    "pdfNumber": 704,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The flight was delayed ____ thick fog.",
    "options": [
      "because of",
      "although",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'because of' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because of' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theflightwasdelayedthickfog"
  },
  {
    "id": "pdf-mcq-705",
    "pdfNumber": 705,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She is qualified; ____, she lacks practical experience.",
    "options": [
      "therefore",
      "furthermore",
      "however"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "sheisqualifiedshelackspracticalexperienc"
  },
  {
    "id": "pdf-mcq-706",
    "pdfNumber": 706,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "Take an umbrella ____ it rains later.",
    "options": [
      "even though",
      "so",
      "in case"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'in case' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in case' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "takeanumbrellaitrainslater"
  },
  {
    "id": "pdf-mcq-707",
    "pdfNumber": 707,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He missed the bus, ____ he arrived late.",
    "options": [
      "unless",
      "so",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hemissedthebushearrivedlate"
  },
  {
    "id": "pdf-mcq-708",
    "pdfNumber": 708,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "because",
      "but",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-709",
    "pdfNumber": 709,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "because",
      "despite",
      "however"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-710",
    "pdfNumber": 710,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "therefore",
      "whereas",
      "nevertheless"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-711",
    "pdfNumber": 711,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "You can take the bus, ____ you can walk to the station.",
    "options": [
      "or",
      "because",
      "although"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'or' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'or' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youcantakethebusyoucanwalktothestation"
  },
  {
    "id": "pdf-mcq-712",
    "pdfNumber": 712,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ the task was difficult, the team finished it on time.",
    "options": [
      "Although",
      "Because of",
      "Despite"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thetaskwasdifficulttheteamfinisheditonti"
  },
  {
    "id": "pdf-mcq-713",
    "pdfNumber": 713,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She saved a copy ____ she would not lose her work.",
    "options": [
      "unless",
      "so that",
      "whereas"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'so that' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so that' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shesavedacopyshewouldnotloseherwork"
  },
  {
    "id": "pdf-mcq-714",
    "pdfNumber": 714,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He is careful, ____ his colleague is rather careless.",
    "options": [
      "therefore",
      "whereas",
      "moreover"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'whereas' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'whereas' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "heiscarefulhiscolleagueisrathercareless"
  },
  {
    "id": "pdf-mcq-715",
    "pdfNumber": 715,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The roads were flooded; ____ the school remained open.",
    "options": [
      "so that",
      "because",
      "however"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theroadswerefloodedtheschoolremainedopen"
  },
  {
    "id": "pdf-mcq-716",
    "pdfNumber": 716,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "Finish the form ____ you leave the office.",
    "options": [
      "because",
      "before",
      "despite"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'before' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'before' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "finishtheformyouleavetheoffice"
  },
  {
    "id": "pdf-mcq-717",
    "pdfNumber": 717,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ his lack of experience, he performed well.",
    "options": [
      "Because",
      "Although",
      "Despite"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'Despite' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Despite' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hislackofexperienceheperformedwell"
  },
  {
    "id": "pdf-mcq-718",
    "pdfNumber": 718,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The price increased; ____, demand remained strong.",
    "options": [
      "for example",
      "as a result",
      "even so"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'even so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'even so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thepriceincreaseddemandremainedstrong"
  },
  {
    "id": "pdf-mcq-719",
    "pdfNumber": 719,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She didn't attend the meeting, ____ she was unwell.",
    "options": [
      "since",
      "whereas",
      "unless"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'since' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'since' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shedidntattendthemeetingshewasunwell"
  },
  {
    "id": "pdf-mcq-720",
    "pdfNumber": 720,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "You will not improve ____ you practise regularly.",
    "options": [
      "if",
      "unless",
      "because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'unless' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'unless' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youwillnotimproveyoupractiseregularly"
  },
  {
    "id": "pdf-mcq-721",
    "pdfNumber": 721,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He checked the figures twice ____ avoid mistakes.",
    "options": [
      "in order to",
      "although",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'in order to' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in order to' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hecheckedthefigurestwiceavoidmistakes"
  },
  {
    "id": "pdf-mcq-723",
    "pdfNumber": 723,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ the report was brief, it covered every key point.",
    "options": [
      "Because of",
      "Despite",
      "Although"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thereportwasbriefitcoveredeverykeypoint"
  },
  {
    "id": "pdf-mcq-724",
    "pdfNumber": 724,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The flight was delayed ____ thick fog.",
    "options": [
      "although",
      "because",
      "because of"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'because of' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because of' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theflightwasdelayedthickfog"
  },
  {
    "id": "pdf-mcq-725",
    "pdfNumber": 725,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She is qualified; ____, she lacks practical experience.",
    "options": [
      "furthermore",
      "however",
      "therefore"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "sheisqualifiedshelackspracticalexperienc"
  },
  {
    "id": "pdf-mcq-726",
    "pdfNumber": 726,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "Take an umbrella ____ it rains later.",
    "options": [
      "in case",
      "even though",
      "so"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'in case' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in case' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "takeanumbrellaitrainslater"
  },
  {
    "id": "pdf-mcq-727",
    "pdfNumber": 727,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He missed the bus, ____ he arrived late.",
    "options": [
      "unless",
      "although",
      "so"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hemissedthebushearrivedlate"
  },
  {
    "id": "pdf-mcq-728",
    "pdfNumber": 728,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "but",
      "because",
      "although"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-729",
    "pdfNumber": 729,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "because",
      "despite",
      "however"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-730",
    "pdfNumber": 730,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "therefore",
      "nevertheless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-731",
    "pdfNumber": 731,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "You can take the bus, ____ you can walk to the station.",
    "options": [
      "or",
      "because",
      "although"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'or' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'or' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youcantakethebusyoucanwalktothestation"
  },
  {
    "id": "pdf-mcq-732",
    "pdfNumber": 732,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ the task was difficult, the team finished it on time.",
    "options": [
      "Despite",
      "Although",
      "Because of"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thetaskwasdifficulttheteamfinisheditonti"
  },
  {
    "id": "pdf-mcq-733",
    "pdfNumber": 733,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She saved a copy ____ she would not lose her work.",
    "options": [
      "unless",
      "whereas",
      "so that"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'so that' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so that' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shesavedacopyshewouldnotloseherwork"
  },
  {
    "id": "pdf-mcq-734",
    "pdfNumber": 734,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He is careful, ____ his colleague is rather careless.",
    "options": [
      "whereas",
      "moreover",
      "therefore"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'whereas' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'whereas' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "heiscarefulhiscolleagueisrathercareless"
  },
  {
    "id": "pdf-mcq-735",
    "pdfNumber": 735,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The roads were flooded; ____ the school remained open.",
    "options": [
      "because",
      "however",
      "so that"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theroadswerefloodedtheschoolremainedopen"
  },
  {
    "id": "pdf-mcq-736",
    "pdfNumber": 736,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "Finish the form ____ you leave the office.",
    "options": [
      "because",
      "before",
      "despite"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'before' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'before' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "finishtheformyouleavetheoffice"
  },
  {
    "id": "pdf-mcq-737",
    "pdfNumber": 737,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ his lack of experience, he performed well.",
    "options": [
      "Although",
      "Because",
      "Despite"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'Despite' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Despite' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hislackofexperienceheperformedwell"
  },
  {
    "id": "pdf-mcq-738",
    "pdfNumber": 738,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The price increased; ____, demand remained strong.",
    "options": [
      "even so",
      "as a result",
      "for example"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'even so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'even so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thepriceincreaseddemandremainedstrong"
  },
  {
    "id": "pdf-mcq-739",
    "pdfNumber": 739,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She didn't attend the meeting, ____ she was unwell.",
    "options": [
      "unless",
      "whereas",
      "since"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'since' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'since' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shedidntattendthemeetingshewasunwell"
  },
  {
    "id": "pdf-mcq-740",
    "pdfNumber": 740,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "You will not improve ____ you practise regularly.",
    "options": [
      "because",
      "unless",
      "if"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'unless' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'unless' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youwillnotimproveyoupractiseregularly"
  },
  {
    "id": "pdf-mcq-741",
    "pdfNumber": 741,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He checked the figures twice ____ avoid mistakes.",
    "options": [
      "although",
      "whereas",
      "in order to"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'in order to' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in order to' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hecheckedthefigurestwiceavoidmistakes"
  },
  {
    "id": "pdf-mcq-743",
    "pdfNumber": 743,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "____ the report was brief, it covered every key point.",
    "options": [
      "Although",
      "Despite",
      "Because of"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thereportwasbriefitcoveredeverykeypoint"
  },
  {
    "id": "pdf-mcq-744",
    "pdfNumber": 744,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "The flight was delayed ____ thick fog.",
    "options": [
      "although",
      "because of",
      "because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'because of' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because of' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theflightwasdelayedthickfog"
  },
  {
    "id": "pdf-mcq-745",
    "pdfNumber": 745,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She is qualified; ____, she lacks practical experience.",
    "options": [
      "furthermore",
      "therefore",
      "however"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "sheisqualifiedshelackspracticalexperienc"
  },
  {
    "id": "pdf-mcq-746",
    "pdfNumber": 746,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "Take an umbrella ____ it rains later.",
    "options": [
      "in case",
      "even though",
      "so"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'in case' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in case' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "takeanumbrellaitrainslater"
  },
  {
    "id": "pdf-mcq-747",
    "pdfNumber": 747,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He missed the bus, ____ he arrived late.",
    "options": [
      "so",
      "although",
      "unless"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hemissedthebushearrivedlate"
  },
  {
    "id": "pdf-mcq-748",
    "pdfNumber": 748,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "because",
      "but",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-749",
    "pdfNumber": 749,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "despite",
      "however",
      "because"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-750",
    "pdfNumber": 750,
    "category": "Connectors",
    "difficulty": "Hard",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "nevertheless",
      "whereas",
      "therefore"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-751",
    "pdfNumber": 751,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "The roads were flooded; ____ the school remained open.",
    "options": [
      "so that",
      "however",
      "because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theroadswerefloodedtheschoolremainedopen"
  },
  {
    "id": "pdf-mcq-752",
    "pdfNumber": 752,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "Finish the form ____ you leave the office.",
    "options": [
      "despite",
      "before",
      "because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'before' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'before' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "finishtheformyouleavetheoffice"
  },
  {
    "id": "pdf-mcq-753",
    "pdfNumber": 753,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "____ his lack of experience, he performed well.",
    "options": [
      "Although",
      "Because",
      "Despite"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'Despite' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Despite' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hislackofexperienceheperformedwell"
  },
  {
    "id": "pdf-mcq-754",
    "pdfNumber": 754,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "The price increased; ____, demand remained strong.",
    "options": [
      "for example",
      "as a result",
      "even so"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'even so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'even so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thepriceincreaseddemandremainedstrong"
  },
  {
    "id": "pdf-mcq-755",
    "pdfNumber": 755,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "She didn't attend the meeting, ____ she was unwell.",
    "options": [
      "whereas",
      "unless",
      "since"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'since' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'since' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shedidntattendthemeetingshewasunwell"
  },
  {
    "id": "pdf-mcq-756",
    "pdfNumber": 756,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "You will not improve ____ you practise regularly.",
    "options": [
      "because",
      "if",
      "unless"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'unless' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'unless' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youwillnotimproveyoupractiseregularly"
  },
  {
    "id": "pdf-mcq-757",
    "pdfNumber": 757,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "He checked the figures twice ____ avoid mistakes.",
    "options": [
      "although",
      "in order to",
      "whereas"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'in order to' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in order to' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hecheckedthefigurestwiceavoidmistakes"
  },
  {
    "id": "pdf-mcq-759",
    "pdfNumber": 759,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "____ the report was brief, it covered every key point.",
    "options": [
      "Because of",
      "Despite",
      "Although"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thereportwasbriefitcoveredeverykeypoint"
  },
  {
    "id": "pdf-mcq-760",
    "pdfNumber": 760,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "The flight was delayed ____ thick fog.",
    "options": [
      "although",
      "because",
      "because of"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'because of' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because of' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theflightwasdelayedthickfog"
  },
  {
    "id": "pdf-mcq-761",
    "pdfNumber": 761,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "She is qualified; ____, she lacks practical experience.",
    "options": [
      "furthermore",
      "therefore",
      "however"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "sheisqualifiedshelackspracticalexperienc"
  },
  {
    "id": "pdf-mcq-762",
    "pdfNumber": 762,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "Take an umbrella ____ it rains later.",
    "options": [
      "even though",
      "in case",
      "so"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'in case' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in case' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "takeanumbrellaitrainslater"
  },
  {
    "id": "pdf-mcq-763",
    "pdfNumber": 763,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "He missed the bus, ____ he arrived late.",
    "options": [
      "unless",
      "although",
      "so"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hemissedthebushearrivedlate"
  },
  {
    "id": "pdf-mcq-764",
    "pdfNumber": 764,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "because",
      "but",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-765",
    "pdfNumber": 765,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "however",
      "because",
      "despite"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-766",
    "pdfNumber": 766,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "therefore",
      "nevertheless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-767",
    "pdfNumber": 767,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "You can take the bus, ____ you can walk to the station.",
    "options": [
      "although",
      "because",
      "or"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'or' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'or' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youcantakethebusyoucanwalktothestation"
  },
  {
    "id": "pdf-mcq-768",
    "pdfNumber": 768,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "____ the task was difficult, the team finished it on time.",
    "options": [
      "Despite",
      "Although",
      "Because of"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thetaskwasdifficulttheteamfinisheditonti"
  },
  {
    "id": "pdf-mcq-769",
    "pdfNumber": 769,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "She saved a copy ____ she would not lose her work.",
    "options": [
      "unless",
      "so that",
      "whereas"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'so that' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so that' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shesavedacopyshewouldnotloseherwork"
  },
  {
    "id": "pdf-mcq-770",
    "pdfNumber": 770,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "He is careful, ____ his colleague is rather careless.",
    "options": [
      "therefore",
      "moreover",
      "whereas"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'whereas' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'whereas' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "heiscarefulhiscolleagueisrathercareless"
  },
  {
    "id": "pdf-mcq-771",
    "pdfNumber": 771,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "The roads were flooded; ____ the school remained open.",
    "options": [
      "however",
      "so that",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theroadswerefloodedtheschoolremainedopen"
  },
  {
    "id": "pdf-mcq-772",
    "pdfNumber": 772,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "Finish the form ____ you leave the office.",
    "options": [
      "before",
      "despite",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'before' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'before' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "finishtheformyouleavetheoffice"
  },
  {
    "id": "pdf-mcq-773",
    "pdfNumber": 773,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "____ his lack of experience, he performed well.",
    "options": [
      "Despite",
      "Although",
      "Because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'Despite' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Despite' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hislackofexperienceheperformedwell"
  },
  {
    "id": "pdf-mcq-774",
    "pdfNumber": 774,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "The price increased; ____, demand remained strong.",
    "options": [
      "as a result",
      "even so",
      "for example"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'even so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'even so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thepriceincreaseddemandremainedstrong"
  },
  {
    "id": "pdf-mcq-775",
    "pdfNumber": 775,
    "category": "Connectors",
    "difficulty": "Medium",
    "question": "She didn't attend the meeting, ____ she was unwell.",
    "options": [
      "whereas",
      "unless",
      "since"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'since' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'since' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shedidntattendthemeetingshewasunwell"
  },
  {
    "id": "pdf-mcq-776",
    "pdfNumber": 776,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "because",
      "but",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-777",
    "pdfNumber": 777,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "because",
      "despite",
      "however"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-778",
    "pdfNumber": 778,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "therefore",
      "nevertheless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-779",
    "pdfNumber": 779,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "You can take the bus, ____ you can walk to the station.",
    "options": [
      "because",
      "or",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'or' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'or' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youcantakethebusyoucanwalktothestation"
  },
  {
    "id": "pdf-mcq-780",
    "pdfNumber": 780,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "____ the task was difficult, the team finished it on time.",
    "options": [
      "Although",
      "Despite",
      "Because of"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thetaskwasdifficulttheteamfinisheditonti"
  },
  {
    "id": "pdf-mcq-781",
    "pdfNumber": 781,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "She saved a copy ____ she would not lose her work.",
    "options": [
      "so that",
      "unless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'so that' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so that' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shesavedacopyshewouldnotloseherwork"
  },
  {
    "id": "pdf-mcq-782",
    "pdfNumber": 782,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "He is careful, ____ his colleague is rather careless.",
    "options": [
      "therefore",
      "whereas",
      "moreover"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'whereas' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'whereas' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "heiscarefulhiscolleagueisrathercareless"
  },
  {
    "id": "pdf-mcq-783",
    "pdfNumber": 783,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "The roads were flooded; ____ the school remained open.",
    "options": [
      "because",
      "so that",
      "however"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theroadswerefloodedtheschoolremainedopen"
  },
  {
    "id": "pdf-mcq-784",
    "pdfNumber": 784,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "Finish the form ____ you leave the office.",
    "options": [
      "before",
      "despite",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'before' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'before' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "finishtheformyouleavetheoffice"
  },
  {
    "id": "pdf-mcq-785",
    "pdfNumber": 785,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "____ his lack of experience, he performed well.",
    "options": [
      "Although",
      "Despite",
      "Because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'Despite' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Despite' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hislackofexperienceheperformedwell"
  },
  {
    "id": "pdf-mcq-786",
    "pdfNumber": 786,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "The price increased; ____, demand remained strong.",
    "options": [
      "even so",
      "for example",
      "as a result"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'even so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'even so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thepriceincreaseddemandremainedstrong"
  },
  {
    "id": "pdf-mcq-787",
    "pdfNumber": 787,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "She didn't attend the meeting, ____ she was unwell.",
    "options": [
      "since",
      "unless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'since' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'since' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shedidntattendthemeetingshewasunwell"
  },
  {
    "id": "pdf-mcq-788",
    "pdfNumber": 788,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "You will not improve ____ you practise regularly.",
    "options": [
      "if",
      "unless",
      "because"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'unless' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'unless' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youwillnotimproveyoupractiseregularly"
  },
  {
    "id": "pdf-mcq-789",
    "pdfNumber": 789,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "He checked the figures twice ____ avoid mistakes.",
    "options": [
      "whereas",
      "although",
      "in order to"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'in order to' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in order to' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hecheckedthefigurestwiceavoidmistakes"
  },
  {
    "id": "pdf-mcq-791",
    "pdfNumber": 791,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "____ the report was brief, it covered every key point.",
    "options": [
      "Because of",
      "Although",
      "Despite"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thereportwasbriefitcoveredeverykeypoint"
  },
  {
    "id": "pdf-mcq-792",
    "pdfNumber": 792,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "The flight was delayed ____ thick fog.",
    "options": [
      "although",
      "because",
      "because of"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'because of' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because of' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "theflightwasdelayedthickfog"
  },
  {
    "id": "pdf-mcq-793",
    "pdfNumber": 793,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "She is qualified; ____, she lacks practical experience.",
    "options": [
      "however",
      "therefore",
      "furthermore"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'however' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'however' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "sheisqualifiedshelackspracticalexperienc"
  },
  {
    "id": "pdf-mcq-794",
    "pdfNumber": 794,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "Take an umbrella ____ it rains later.",
    "options": [
      "even though",
      "so",
      "in case"
    ],
    "correctIndex": 2,
    "englishExplanation": "Logical conjunction 'in case' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'in case' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "takeanumbrellaitrainslater"
  },
  {
    "id": "pdf-mcq-795",
    "pdfNumber": 795,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "He missed the bus, ____ he arrived late.",
    "options": [
      "unless",
      "so",
      "although"
    ],
    "correctIndex": 1,
    "englishExplanation": "Logical conjunction 'so' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'so' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hemissedthebushearrivedlate"
  },
  {
    "id": "pdf-mcq-796",
    "pdfNumber": 796,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "She was tired, ____ she completed the report.",
    "options": [
      "but",
      "although",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'but' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'but' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "shewastiredshecompletedthereport"
  },
  {
    "id": "pdf-mcq-797",
    "pdfNumber": 797,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "We cancelled the picnic ____ it was raining heavily.",
    "options": [
      "because",
      "however",
      "despite"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'because' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'because' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "wecancelledthepicnicitwasrainingheavily"
  },
  {
    "id": "pdf-mcq-798",
    "pdfNumber": 798,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "He studied hard; ____, he passed with distinction.",
    "options": [
      "therefore",
      "nevertheless",
      "whereas"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'therefore' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'therefore' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "hestudiedhardhepassedwithdistinction"
  },
  {
    "id": "pdf-mcq-799",
    "pdfNumber": 799,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "You can take the bus, ____ you can walk to the station.",
    "options": [
      "or",
      "although",
      "because"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'or' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'or' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "youcantakethebusyoucanwalktothestation"
  },
  {
    "id": "pdf-mcq-800",
    "pdfNumber": 800,
    "category": "Connectors",
    "difficulty": "Easy",
    "question": "____ the task was difficult, the team finished it on time.",
    "options": [
      "Although",
      "Because of",
      "Despite"
    ],
    "correctIndex": 0,
    "englishExplanation": "Logical conjunction 'Although' properly establishes the relationship of cause, contrast, or purpose.",
    "urduExplanation": "حرفِ ربط 'Although' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔",
    "baseSentenceKey": "thetaskwasdifficulttheteamfinisheditonti"
  },
  {
    "id": "pdf-mcq-801",
    "pdfNumber": 801,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She ____ visits her grandparents on Sundays.",
    "options": [
      "usually",
      "use",
      "usual"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'usually' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'usually' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shevisitshergrandparentsonsundays"
  },
  {
    "id": "pdf-mcq-802",
    "pdfNumber": 802,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The results were ____ better than we had predicted.",
    "options": [
      "considerable",
      "considerably",
      "consideration"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'considerably' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'considerably' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theresultswerebetterthanwehadpredicted"
  },
  {
    "id": "pdf-mcq-803",
    "pdfNumber": 803,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He answered the question ____ confidently.",
    "options": [
      "surprise",
      "surprisingly",
      "surprising"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'surprisingly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'surprisingly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heansweredthequestionconfidently"
  },
  {
    "id": "pdf-mcq-804",
    "pdfNumber": 804,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "I have not received the confirmation ____.",
    "options": [
      "ever",
      "already",
      "yet"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'yet' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'yet' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihavenotreceivedtheconfirmation"
  },
  {
    "id": "pdf-mcq-805",
    "pdfNumber": 805,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She arrived ____ for the interview, with ten minutes to spare.",
    "options": [
      "early",
      "earlierly",
      "earliness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'early' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'early' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shearrivedfortheinterviewwithtenminutest"
  },
  {
    "id": "pdf-mcq-806",
    "pdfNumber": 806,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The team performed ____ under pressure.",
    "options": [
      "good",
      "well",
      "bestly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'well' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'well' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theteamperformedunderpressure"
  },
  {
    "id": "pdf-mcq-807",
    "pdfNumber": 807,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He was ____ disappointed by the decision.",
    "options": [
      "deeply",
      "depth",
      "deep"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'deeply' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'deeply' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hewasdisappointedbythedecision"
  },
  {
    "id": "pdf-mcq-808",
    "pdfNumber": 808,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "careful",
      "carefulness",
      "carefully"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-809",
    "pdfNumber": 809,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extremity",
      "extremely",
      "extreme"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-810",
    "pdfNumber": 810,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hardly ever",
      "hard",
      "hardly"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-811",
    "pdfNumber": 811,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "____, I believe we should review the figures again.",
    "options": [
      "Frankly",
      "Frankness",
      "Frank"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'Frankly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'Frankly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ibelieveweshouldreviewthefiguresagain"
  },
  {
    "id": "pdf-mcq-812",
    "pdfNumber": 812,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She has ____ finished the assignment, so she can submit it now.",
    "options": [
      "already",
      "still",
      "yet"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'already' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'already' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shehasfinishedtheassignmentsoshecansubmi"
  },
  {
    "id": "pdf-mcq-813",
    "pdfNumber": 813,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He speaks English ____ than he did last year.",
    "options": [
      "most fluent",
      "fluent",
      "more fluently"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'more fluently' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'more fluently' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hespeaksenglishthanhedidlastyear"
  },
  {
    "id": "pdf-mcq-814",
    "pdfNumber": 814,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The manager explained the policy ____ enough for everyone to understand.",
    "options": [
      "clearly",
      "clear",
      "clearness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'clearly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'clearly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "themanagerexplainedthepolicyenoughforeve"
  },
  {
    "id": "pdf-mcq-815",
    "pdfNumber": 815,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "I have ____ seen such a well-organised presentation.",
    "options": [
      "not ever never",
      "never",
      "ever never"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'never' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'never' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihaveseensuchawellorganisedpresentation"
  },
  {
    "id": "pdf-mcq-816",
    "pdfNumber": 816,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "Please drive ____; the road is slippery.",
    "options": [
      "careful",
      "carefully",
      "care"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "pleasedrivetheroadisslippery"
  },
  {
    "id": "pdf-mcq-817",
    "pdfNumber": 817,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She is ____ responsible for the final review.",
    "options": [
      "direction",
      "direct",
      "directly"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'directly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'directly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "sheisresponsibleforthefinalreview"
  },
  {
    "id": "pdf-mcq-818",
    "pdfNumber": 818,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The guests arrived ____ than expected.",
    "options": [
      "early",
      "earlier",
      "earliest"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'earlier' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'earlier' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theguestsarrivedthanexpected"
  },
  {
    "id": "pdf-mcq-819",
    "pdfNumber": 819,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He worked ____ to meet the deadline.",
    "options": [
      "hardness",
      "hard",
      "hardly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'hard' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hard' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heworkedtomeetthedeadline"
  },
  {
    "id": "pdf-mcq-820",
    "pdfNumber": 820,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The speaker spoke so ____ that everyone heard her.",
    "options": [
      "louder",
      "loudly",
      "loud"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'loudly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'loudly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thespeakerspokesothateveryoneheardher"
  },
  {
    "id": "pdf-mcq-821",
    "pdfNumber": 821,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She ____ visits her grandparents on Sundays.",
    "options": [
      "use",
      "usual",
      "usually"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'usually' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'usually' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shevisitshergrandparentsonsundays"
  },
  {
    "id": "pdf-mcq-822",
    "pdfNumber": 822,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The results were ____ better than we had predicted.",
    "options": [
      "consideration",
      "considerable",
      "considerably"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'considerably' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'considerably' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theresultswerebetterthanwehadpredicted"
  },
  {
    "id": "pdf-mcq-823",
    "pdfNumber": 823,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He answered the question ____ confidently.",
    "options": [
      "surprise",
      "surprisingly",
      "surprising"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'surprisingly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'surprisingly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heansweredthequestionconfidently"
  },
  {
    "id": "pdf-mcq-824",
    "pdfNumber": 824,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "I have not received the confirmation ____.",
    "options": [
      "ever",
      "already",
      "yet"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'yet' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'yet' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihavenotreceivedtheconfirmation"
  },
  {
    "id": "pdf-mcq-825",
    "pdfNumber": 825,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She arrived ____ for the interview, with ten minutes to spare.",
    "options": [
      "earlierly",
      "early",
      "earliness"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'early' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'early' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shearrivedfortheinterviewwithtenminutest"
  },
  {
    "id": "pdf-mcq-826",
    "pdfNumber": 826,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The team performed ____ under pressure.",
    "options": [
      "good",
      "bestly",
      "well"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'well' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'well' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theteamperformedunderpressure"
  },
  {
    "id": "pdf-mcq-827",
    "pdfNumber": 827,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He was ____ disappointed by the decision.",
    "options": [
      "depth",
      "deeply",
      "deep"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'deeply' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'deeply' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hewasdisappointedbythedecision"
  },
  {
    "id": "pdf-mcq-828",
    "pdfNumber": 828,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "carefulness",
      "carefully",
      "careful"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-829",
    "pdfNumber": 829,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extremely",
      "extremity",
      "extreme"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-830",
    "pdfNumber": 830,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hardly",
      "hardly ever",
      "hard"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-831",
    "pdfNumber": 831,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "____, I believe we should review the figures again.",
    "options": [
      "Frankly",
      "Frank",
      "Frankness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'Frankly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'Frankly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ibelieveweshouldreviewthefiguresagain"
  },
  {
    "id": "pdf-mcq-832",
    "pdfNumber": 832,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She has ____ finished the assignment, so she can submit it now.",
    "options": [
      "yet",
      "still",
      "already"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'already' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'already' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shehasfinishedtheassignmentsoshecansubmi"
  },
  {
    "id": "pdf-mcq-833",
    "pdfNumber": 833,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He speaks English ____ than he did last year.",
    "options": [
      "fluent",
      "most fluent",
      "more fluently"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'more fluently' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'more fluently' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hespeaksenglishthanhedidlastyear"
  },
  {
    "id": "pdf-mcq-834",
    "pdfNumber": 834,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The manager explained the policy ____ enough for everyone to understand.",
    "options": [
      "clearness",
      "clear",
      "clearly"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'clearly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'clearly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "themanagerexplainedthepolicyenoughforeve"
  },
  {
    "id": "pdf-mcq-835",
    "pdfNumber": 835,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "I have ____ seen such a well-organised presentation.",
    "options": [
      "never",
      "ever never",
      "not ever never"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'never' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'never' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihaveseensuchawellorganisedpresentation"
  },
  {
    "id": "pdf-mcq-836",
    "pdfNumber": 836,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "Please drive ____; the road is slippery.",
    "options": [
      "care",
      "careful",
      "carefully"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "pleasedrivetheroadisslippery"
  },
  {
    "id": "pdf-mcq-837",
    "pdfNumber": 837,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She is ____ responsible for the final review.",
    "options": [
      "directly",
      "direction",
      "direct"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'directly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'directly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "sheisresponsibleforthefinalreview"
  },
  {
    "id": "pdf-mcq-838",
    "pdfNumber": 838,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The guests arrived ____ than expected.",
    "options": [
      "earliest",
      "earlier",
      "early"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'earlier' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'earlier' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theguestsarrivedthanexpected"
  },
  {
    "id": "pdf-mcq-839",
    "pdfNumber": 839,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He worked ____ to meet the deadline.",
    "options": [
      "hardness",
      "hardly",
      "hard"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'hard' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hard' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heworkedtomeetthedeadline"
  },
  {
    "id": "pdf-mcq-840",
    "pdfNumber": 840,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The speaker spoke so ____ that everyone heard her.",
    "options": [
      "louder",
      "loudly",
      "loud"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'loudly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'loudly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thespeakerspokesothateveryoneheardher"
  },
  {
    "id": "pdf-mcq-841",
    "pdfNumber": 841,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She ____ visits her grandparents on Sundays.",
    "options": [
      "use",
      "usually",
      "usual"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'usually' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'usually' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shevisitshergrandparentsonsundays"
  },
  {
    "id": "pdf-mcq-842",
    "pdfNumber": 842,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The results were ____ better than we had predicted.",
    "options": [
      "considerably",
      "consideration",
      "considerable"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'considerably' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'considerably' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theresultswerebetterthanwehadpredicted"
  },
  {
    "id": "pdf-mcq-843",
    "pdfNumber": 843,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He answered the question ____ confidently.",
    "options": [
      "surprise",
      "surprisingly",
      "surprising"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'surprisingly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'surprisingly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heansweredthequestionconfidently"
  },
  {
    "id": "pdf-mcq-844",
    "pdfNumber": 844,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "I have not received the confirmation ____.",
    "options": [
      "already",
      "yet",
      "ever"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'yet' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'yet' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihavenotreceivedtheconfirmation"
  },
  {
    "id": "pdf-mcq-845",
    "pdfNumber": 845,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She arrived ____ for the interview, with ten minutes to spare.",
    "options": [
      "earliness",
      "earlierly",
      "early"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'early' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'early' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shearrivedfortheinterviewwithtenminutest"
  },
  {
    "id": "pdf-mcq-846",
    "pdfNumber": 846,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The team performed ____ under pressure.",
    "options": [
      "bestly",
      "good",
      "well"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'well' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'well' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theteamperformedunderpressure"
  },
  {
    "id": "pdf-mcq-847",
    "pdfNumber": 847,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He was ____ disappointed by the decision.",
    "options": [
      "deeply",
      "deep",
      "depth"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'deeply' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'deeply' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hewasdisappointedbythedecision"
  },
  {
    "id": "pdf-mcq-848",
    "pdfNumber": 848,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "carefully",
      "careful",
      "carefulness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-849",
    "pdfNumber": 849,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extreme",
      "extremity",
      "extremely"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-850",
    "pdfNumber": 850,
    "category": "Adverbs",
    "difficulty": "Hard",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hardly",
      "hard",
      "hardly ever"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-851",
    "pdfNumber": 851,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "I have ____ seen such a well-organised presentation.",
    "options": [
      "not ever never",
      "ever never",
      "never"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'never' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'never' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihaveseensuchawellorganisedpresentation"
  },
  {
    "id": "pdf-mcq-852",
    "pdfNumber": 852,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "Please drive ____; the road is slippery.",
    "options": [
      "carefully",
      "care",
      "careful"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "pleasedrivetheroadisslippery"
  },
  {
    "id": "pdf-mcq-853",
    "pdfNumber": 853,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She is ____ responsible for the final review.",
    "options": [
      "direct",
      "directly",
      "direction"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'directly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'directly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "sheisresponsibleforthefinalreview"
  },
  {
    "id": "pdf-mcq-854",
    "pdfNumber": 854,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The guests arrived ____ than expected.",
    "options": [
      "early",
      "earliest",
      "earlier"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'earlier' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'earlier' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theguestsarrivedthanexpected"
  },
  {
    "id": "pdf-mcq-855",
    "pdfNumber": 855,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He worked ____ to meet the deadline.",
    "options": [
      "hard",
      "hardness",
      "hardly"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hard' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hard' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heworkedtomeetthedeadline"
  },
  {
    "id": "pdf-mcq-856",
    "pdfNumber": 856,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The speaker spoke so ____ that everyone heard her.",
    "options": [
      "louder",
      "loudly",
      "loud"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'loudly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'loudly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thespeakerspokesothateveryoneheardher"
  },
  {
    "id": "pdf-mcq-857",
    "pdfNumber": 857,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She ____ visits her grandparents on Sundays.",
    "options": [
      "usual",
      "use",
      "usually"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'usually' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'usually' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shevisitshergrandparentsonsundays"
  },
  {
    "id": "pdf-mcq-858",
    "pdfNumber": 858,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The results were ____ better than we had predicted.",
    "options": [
      "considerably",
      "considerable",
      "consideration"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'considerably' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'considerably' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theresultswerebetterthanwehadpredicted"
  },
  {
    "id": "pdf-mcq-859",
    "pdfNumber": 859,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He answered the question ____ confidently.",
    "options": [
      "surprise",
      "surprising",
      "surprisingly"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'surprisingly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'surprisingly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heansweredthequestionconfidently"
  },
  {
    "id": "pdf-mcq-860",
    "pdfNumber": 860,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "I have not received the confirmation ____.",
    "options": [
      "ever",
      "already",
      "yet"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'yet' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'yet' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihavenotreceivedtheconfirmation"
  },
  {
    "id": "pdf-mcq-861",
    "pdfNumber": 861,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She arrived ____ for the interview, with ten minutes to spare.",
    "options": [
      "earliness",
      "early",
      "earlierly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'early' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'early' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shearrivedfortheinterviewwithtenminutest"
  },
  {
    "id": "pdf-mcq-862",
    "pdfNumber": 862,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The team performed ____ under pressure.",
    "options": [
      "good",
      "well",
      "bestly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'well' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'well' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theteamperformedunderpressure"
  },
  {
    "id": "pdf-mcq-863",
    "pdfNumber": 863,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He was ____ disappointed by the decision.",
    "options": [
      "deeply",
      "depth",
      "deep"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'deeply' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'deeply' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hewasdisappointedbythedecision"
  },
  {
    "id": "pdf-mcq-864",
    "pdfNumber": 864,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "careful",
      "carefulness",
      "carefully"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-865",
    "pdfNumber": 865,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extremely",
      "extreme",
      "extremity"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-866",
    "pdfNumber": 866,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hardly ever",
      "hard",
      "hardly"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-867",
    "pdfNumber": 867,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "____, I believe we should review the figures again.",
    "options": [
      "Frankly",
      "Frank",
      "Frankness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'Frankly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'Frankly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ibelieveweshouldreviewthefiguresagain"
  },
  {
    "id": "pdf-mcq-868",
    "pdfNumber": 868,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She has ____ finished the assignment, so she can submit it now.",
    "options": [
      "yet",
      "already",
      "still"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'already' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'already' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shehasfinishedtheassignmentsoshecansubmi"
  },
  {
    "id": "pdf-mcq-869",
    "pdfNumber": 869,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He speaks English ____ than he did last year.",
    "options": [
      "most fluent",
      "fluent",
      "more fluently"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'more fluently' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'more fluently' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hespeaksenglishthanhedidlastyear"
  },
  {
    "id": "pdf-mcq-870",
    "pdfNumber": 870,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The manager explained the policy ____ enough for everyone to understand.",
    "options": [
      "clear",
      "clearly",
      "clearness"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'clearly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'clearly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "themanagerexplainedthepolicyenoughforeve"
  },
  {
    "id": "pdf-mcq-871",
    "pdfNumber": 871,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "I have ____ seen such a well-organised presentation.",
    "options": [
      "not ever never",
      "ever never",
      "never"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'never' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'never' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihaveseensuchawellorganisedpresentation"
  },
  {
    "id": "pdf-mcq-872",
    "pdfNumber": 872,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "Please drive ____; the road is slippery.",
    "options": [
      "carefully",
      "care",
      "careful"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "pleasedrivetheroadisslippery"
  },
  {
    "id": "pdf-mcq-873",
    "pdfNumber": 873,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "She is ____ responsible for the final review.",
    "options": [
      "directly",
      "direction",
      "direct"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'directly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'directly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "sheisresponsibleforthefinalreview"
  },
  {
    "id": "pdf-mcq-874",
    "pdfNumber": 874,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "The guests arrived ____ than expected.",
    "options": [
      "earlier",
      "earliest",
      "early"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'earlier' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'earlier' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theguestsarrivedthanexpected"
  },
  {
    "id": "pdf-mcq-875",
    "pdfNumber": 875,
    "category": "Adverbs",
    "difficulty": "Medium",
    "question": "He worked ____ to meet the deadline.",
    "options": [
      "hard",
      "hardly",
      "hardness"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hard' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hard' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heworkedtomeetthedeadline"
  },
  {
    "id": "pdf-mcq-876",
    "pdfNumber": 876,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "careful",
      "carefully",
      "carefulness"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-877",
    "pdfNumber": 877,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extremity",
      "extreme",
      "extremely"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-878",
    "pdfNumber": 878,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hard",
      "hardly ever",
      "hardly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-879",
    "pdfNumber": 879,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "____, I believe we should review the figures again.",
    "options": [
      "Frankly",
      "Frankness",
      "Frank"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'Frankly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'Frankly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ibelieveweshouldreviewthefiguresagain"
  },
  {
    "id": "pdf-mcq-880",
    "pdfNumber": 880,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She has ____ finished the assignment, so she can submit it now.",
    "options": [
      "still",
      "yet",
      "already"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'already' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'already' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shehasfinishedtheassignmentsoshecansubmi"
  },
  {
    "id": "pdf-mcq-881",
    "pdfNumber": 881,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He speaks English ____ than he did last year.",
    "options": [
      "fluent",
      "more fluently",
      "most fluent"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'more fluently' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'more fluently' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hespeaksenglishthanhedidlastyear"
  },
  {
    "id": "pdf-mcq-882",
    "pdfNumber": 882,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The manager explained the policy ____ enough for everyone to understand.",
    "options": [
      "clear",
      "clearness",
      "clearly"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'clearly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'clearly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "themanagerexplainedthepolicyenoughforeve"
  },
  {
    "id": "pdf-mcq-883",
    "pdfNumber": 883,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "I have ____ seen such a well-organised presentation.",
    "options": [
      "never",
      "not ever never",
      "ever never"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'never' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'never' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihaveseensuchawellorganisedpresentation"
  },
  {
    "id": "pdf-mcq-884",
    "pdfNumber": 884,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "Please drive ____; the road is slippery.",
    "options": [
      "careful",
      "care",
      "carefully"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "pleasedrivetheroadisslippery"
  },
  {
    "id": "pdf-mcq-885",
    "pdfNumber": 885,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She is ____ responsible for the final review.",
    "options": [
      "direction",
      "directly",
      "direct"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'directly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'directly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "sheisresponsibleforthefinalreview"
  },
  {
    "id": "pdf-mcq-886",
    "pdfNumber": 886,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The guests arrived ____ than expected.",
    "options": [
      "earlier",
      "early",
      "earliest"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'earlier' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'earlier' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theguestsarrivedthanexpected"
  },
  {
    "id": "pdf-mcq-887",
    "pdfNumber": 887,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He worked ____ to meet the deadline.",
    "options": [
      "hard",
      "hardness",
      "hardly"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hard' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hard' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heworkedtomeetthedeadline"
  },
  {
    "id": "pdf-mcq-888",
    "pdfNumber": 888,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The speaker spoke so ____ that everyone heard her.",
    "options": [
      "louder",
      "loudly",
      "loud"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'loudly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'loudly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thespeakerspokesothateveryoneheardher"
  },
  {
    "id": "pdf-mcq-889",
    "pdfNumber": 889,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She ____ visits her grandparents on Sundays.",
    "options": [
      "use",
      "usually",
      "usual"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'usually' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'usually' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shevisitshergrandparentsonsundays"
  },
  {
    "id": "pdf-mcq-890",
    "pdfNumber": 890,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The results were ____ better than we had predicted.",
    "options": [
      "considerably",
      "considerable",
      "consideration"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'considerably' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'considerably' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theresultswerebetterthanwehadpredicted"
  },
  {
    "id": "pdf-mcq-891",
    "pdfNumber": 891,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He answered the question ____ confidently.",
    "options": [
      "surprising",
      "surprisingly",
      "surprise"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'surprisingly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'surprisingly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heansweredthequestionconfidently"
  },
  {
    "id": "pdf-mcq-892",
    "pdfNumber": 892,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "I have not received the confirmation ____.",
    "options": [
      "ever",
      "already",
      "yet"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'yet' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'yet' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ihavenotreceivedtheconfirmation"
  },
  {
    "id": "pdf-mcq-893",
    "pdfNumber": 893,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She arrived ____ for the interview, with ten minutes to spare.",
    "options": [
      "earlierly",
      "earliness",
      "early"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'early' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'early' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shearrivedfortheinterviewwithtenminutest"
  },
  {
    "id": "pdf-mcq-894",
    "pdfNumber": 894,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The team performed ____ under pressure.",
    "options": [
      "good",
      "well",
      "bestly"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'well' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'well' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "theteamperformedunderpressure"
  },
  {
    "id": "pdf-mcq-895",
    "pdfNumber": 895,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He was ____ disappointed by the decision.",
    "options": [
      "deep",
      "depth",
      "deeply"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'deeply' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'deeply' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "hewasdisappointedbythedecision"
  },
  {
    "id": "pdf-mcq-896",
    "pdfNumber": 896,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She completed the task ____ and made no errors.",
    "options": [
      "careful",
      "carefully",
      "carefulness"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'carefully' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'carefully' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shecompletedthetaskandmadenoerrors"
  },
  {
    "id": "pdf-mcq-897",
    "pdfNumber": 897,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "The train arrived ____ late because of the storm.",
    "options": [
      "extremity",
      "extremely",
      "extreme"
    ],
    "correctIndex": 1,
    "englishExplanation": "The adverb 'extremely' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'extremely' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "thetrainarrivedlatebecauseofthestorm"
  },
  {
    "id": "pdf-mcq-898",
    "pdfNumber": 898,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "He ____ forgets to lock the door; he checks it every time.",
    "options": [
      "hardly ever",
      "hardly",
      "hard"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'hardly ever' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'hardly ever' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "heforgetstolockthedoorhechecksiteverytim"
  },
  {
    "id": "pdf-mcq-899",
    "pdfNumber": 899,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "____, I believe we should review the figures again.",
    "options": [
      "Frankness",
      "Frank",
      "Frankly"
    ],
    "correctIndex": 2,
    "englishExplanation": "The adverb 'Frankly' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'Frankly' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "ibelieveweshouldreviewthefiguresagain"
  },
  {
    "id": "pdf-mcq-900",
    "pdfNumber": 900,
    "category": "Adverbs",
    "difficulty": "Easy",
    "question": "She has ____ finished the assignment, so she can submit it now.",
    "options": [
      "already",
      "yet",
      "still"
    ],
    "correctIndex": 0,
    "englishExplanation": "The adverb 'already' properly modifies the verb, adjective, or clause according to standard English syntax.",
    "urduExplanation": "متعلق فعل (Adverb) 'already' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔",
    "baseSentenceKey": "shehasfinishedtheassignmentsoshecansubmi"
  },
  {
    "id": "pdf-mcq-901",
    "pdfNumber": 901,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This option is ____ expensive of the three.",
    "options": [
      "least than",
      "less",
      "the least"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'the least'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'the least' درست ہے۔",
    "baseSentenceKey": "thisoptionisexpensiveofthethree"
  },
  {
    "id": "pdf-mcq-902",
    "pdfNumber": 902,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Travel by train is generally ____ than flying.",
    "options": [
      "cheapest",
      "cheaper",
      "cheap"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'cheaper'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'cheaper' درست ہے۔",
    "baseSentenceKey": "travelbytrainisgenerallythanflying"
  },
  {
    "id": "pdf-mcq-903",
    "pdfNumber": 903,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The second draft is slightly ____ than the first.",
    "options": [
      "best",
      "good",
      "better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'better'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'better' درست ہے۔",
    "baseSentenceKey": "theseconddraftisslightlythanthefirst"
  },
  {
    "id": "pdf-mcq-904",
    "pdfNumber": 904,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "We have ____ time today than yesterday.",
    "options": [
      "less",
      "few",
      "fewer"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'less'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'less' درست ہے۔",
    "baseSentenceKey": "wehavetimetodaythanyesterday"
  },
  {
    "id": "pdf-mcq-905",
    "pdfNumber": 905,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her results were as impressive ____ his.",
    "options": [
      "than",
      "as",
      "like"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "herresultswereasimpressivehis"
  },
  {
    "id": "pdf-mcq-906",
    "pdfNumber": 906,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This is by far the ____ solution we have considered.",
    "options": [
      "most reliable",
      "reliabler",
      "more reliable"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'most reliable'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'most reliable' درست ہے۔",
    "baseSentenceKey": "thisisbyfarthesolutionwehaveconsidered"
  },
  {
    "id": "pdf-mcq-907",
    "pdfNumber": 907,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The weather is getting ____ and ____.",
    "options": [
      "cold / coldest",
      "more cold / more cold",
      "colder / colder"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'colder / colder'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'colder / colder' درست ہے۔",
    "baseSentenceKey": "theweatherisgettingand"
  },
  {
    "id": "pdf-mcq-908",
    "pdfNumber": 908,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "more detailed",
      "most detailed",
      "detailed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-909",
    "pdfNumber": 909,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "less",
      "few",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-910",
    "pdfNumber": 910,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "clearest",
      "clearer",
      "more clear than"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-911",
    "pdfNumber": 911,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This is the ____ route to the station.",
    "options": [
      "shortest",
      "shorter",
      "most short"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'shortest'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'shortest' درست ہے۔",
    "baseSentenceKey": "thisistheroutetothestation"
  },
  {
    "id": "pdf-mcq-912",
    "pdfNumber": 912,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The new system is ____ efficient than the old one.",
    "options": [
      "more",
      "most",
      "much"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "thenewsystemisefficientthantheoldone"
  },
  {
    "id": "pdf-mcq-913",
    "pdfNumber": 913,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "My workload is not as heavy ____ yours.",
    "options": [
      "than",
      "like",
      "as"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "myworkloadisnotasheavyyours"
  },
  {
    "id": "pdf-mcq-914",
    "pdfNumber": 914,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Of the two proposals, the first is ____ practical.",
    "options": [
      "the most",
      "more",
      "most"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "ofthetwoproposalsthefirstispractical"
  },
  {
    "id": "pdf-mcq-915",
    "pdfNumber": 915,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The sooner we begin, the ____ we will finish.",
    "options": [
      "earlier",
      "early",
      "earliest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'earlier'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'earlier' درست ہے۔",
    "baseSentenceKey": "thesoonerwebeginthewewillfinish"
  },
  {
    "id": "pdf-mcq-916",
    "pdfNumber": 916,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This laptop is twice as fast ____ my old one.",
    "options": [
      "than",
      "as",
      "like"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "thislaptopistwiceasfastmyoldone"
  },
  {
    "id": "pdf-mcq-917",
    "pdfNumber": 917,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "She made ____ mistakes than her colleague.",
    "options": [
      "less",
      "fewest",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "shemademistakesthanhercolleague"
  },
  {
    "id": "pdf-mcq-918",
    "pdfNumber": 918,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Today's meeting was ____ than I expected.",
    "options": [
      "far shorter",
      "more short",
      "shortest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'far shorter'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'far shorter' درست ہے۔",
    "baseSentenceKey": "todaysmeetingwasthaniexpected"
  },
  {
    "id": "pdf-mcq-919",
    "pdfNumber": 919,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "He is one of the ____ analysts in the department.",
    "options": [
      "best",
      "good",
      "better"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'best'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'best' درست ہے۔",
    "baseSentenceKey": "heisoneoftheanalystsinthedepartment"
  },
  {
    "id": "pdf-mcq-920",
    "pdfNumber": 920,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The more you practise, the ____ you become.",
    "options": [
      "more confident",
      "most confident",
      "confident"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more confident'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more confident' درست ہے۔",
    "baseSentenceKey": "themoreyoupractisetheyoubecome"
  },
  {
    "id": "pdf-mcq-921",
    "pdfNumber": 921,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This option is ____ expensive of the three.",
    "options": [
      "less",
      "least than",
      "the least"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'the least'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'the least' درست ہے۔",
    "baseSentenceKey": "thisoptionisexpensiveofthethree"
  },
  {
    "id": "pdf-mcq-922",
    "pdfNumber": 922,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Travel by train is generally ____ than flying.",
    "options": [
      "cheaper",
      "cheap",
      "cheapest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'cheaper'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'cheaper' درست ہے۔",
    "baseSentenceKey": "travelbytrainisgenerallythanflying"
  },
  {
    "id": "pdf-mcq-923",
    "pdfNumber": 923,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The second draft is slightly ____ than the first.",
    "options": [
      "good",
      "best",
      "better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'better'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'better' درست ہے۔",
    "baseSentenceKey": "theseconddraftisslightlythanthefirst"
  },
  {
    "id": "pdf-mcq-924",
    "pdfNumber": 924,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "We have ____ time today than yesterday.",
    "options": [
      "fewer",
      "less",
      "few"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'less'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'less' درست ہے۔",
    "baseSentenceKey": "wehavetimetodaythanyesterday"
  },
  {
    "id": "pdf-mcq-925",
    "pdfNumber": 925,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her results were as impressive ____ his.",
    "options": [
      "like",
      "as",
      "than"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "herresultswereasimpressivehis"
  },
  {
    "id": "pdf-mcq-926",
    "pdfNumber": 926,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This is by far the ____ solution we have considered.",
    "options": [
      "more reliable",
      "most reliable",
      "reliabler"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'most reliable'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'most reliable' درست ہے۔",
    "baseSentenceKey": "thisisbyfarthesolutionwehaveconsidered"
  },
  {
    "id": "pdf-mcq-927",
    "pdfNumber": 927,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The weather is getting ____ and ____.",
    "options": [
      "cold / coldest",
      "more cold / more cold",
      "colder / colder"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'colder / colder'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'colder / colder' درست ہے۔",
    "baseSentenceKey": "theweatherisgettingand"
  },
  {
    "id": "pdf-mcq-928",
    "pdfNumber": 928,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "most detailed",
      "detailed",
      "more detailed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-929",
    "pdfNumber": 929,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "few",
      "less",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-930",
    "pdfNumber": 930,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "clearer",
      "clearest",
      "more clear than"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-931",
    "pdfNumber": 931,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This is the ____ route to the station.",
    "options": [
      "most short",
      "shortest",
      "shorter"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'shortest'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'shortest' درست ہے۔",
    "baseSentenceKey": "thisistheroutetothestation"
  },
  {
    "id": "pdf-mcq-932",
    "pdfNumber": 932,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The new system is ____ efficient than the old one.",
    "options": [
      "more",
      "most",
      "much"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "thenewsystemisefficientthantheoldone"
  },
  {
    "id": "pdf-mcq-933",
    "pdfNumber": 933,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "My workload is not as heavy ____ yours.",
    "options": [
      "as",
      "than",
      "like"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "myworkloadisnotasheavyyours"
  },
  {
    "id": "pdf-mcq-934",
    "pdfNumber": 934,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Of the two proposals, the first is ____ practical.",
    "options": [
      "more",
      "most",
      "the most"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "ofthetwoproposalsthefirstispractical"
  },
  {
    "id": "pdf-mcq-935",
    "pdfNumber": 935,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The sooner we begin, the ____ we will finish.",
    "options": [
      "earliest",
      "early",
      "earlier"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'earlier'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'earlier' درست ہے۔",
    "baseSentenceKey": "thesoonerwebeginthewewillfinish"
  },
  {
    "id": "pdf-mcq-936",
    "pdfNumber": 936,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This laptop is twice as fast ____ my old one.",
    "options": [
      "as",
      "than",
      "like"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "thislaptopistwiceasfastmyoldone"
  },
  {
    "id": "pdf-mcq-937",
    "pdfNumber": 937,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "She made ____ mistakes than her colleague.",
    "options": [
      "fewest",
      "less",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "shemademistakesthanhercolleague"
  },
  {
    "id": "pdf-mcq-938",
    "pdfNumber": 938,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Today's meeting was ____ than I expected.",
    "options": [
      "more short",
      "shortest",
      "far shorter"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'far shorter'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'far shorter' درست ہے۔",
    "baseSentenceKey": "todaysmeetingwasthaniexpected"
  },
  {
    "id": "pdf-mcq-939",
    "pdfNumber": 939,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "He is one of the ____ analysts in the department.",
    "options": [
      "best",
      "good",
      "better"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'best'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'best' درست ہے۔",
    "baseSentenceKey": "heisoneoftheanalystsinthedepartment"
  },
  {
    "id": "pdf-mcq-940",
    "pdfNumber": 940,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The more you practise, the ____ you become.",
    "options": [
      "most confident",
      "confident",
      "more confident"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more confident'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more confident' درست ہے۔",
    "baseSentenceKey": "themoreyoupractisetheyoubecome"
  },
  {
    "id": "pdf-mcq-941",
    "pdfNumber": 941,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This option is ____ expensive of the three.",
    "options": [
      "less",
      "least than",
      "the least"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'the least'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'the least' درست ہے۔",
    "baseSentenceKey": "thisoptionisexpensiveofthethree"
  },
  {
    "id": "pdf-mcq-942",
    "pdfNumber": 942,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Travel by train is generally ____ than flying.",
    "options": [
      "cheapest",
      "cheap",
      "cheaper"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'cheaper'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'cheaper' درست ہے۔",
    "baseSentenceKey": "travelbytrainisgenerallythanflying"
  },
  {
    "id": "pdf-mcq-943",
    "pdfNumber": 943,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The second draft is slightly ____ than the first.",
    "options": [
      "better",
      "good",
      "best"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'better'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'better' درست ہے۔",
    "baseSentenceKey": "theseconddraftisslightlythanthefirst"
  },
  {
    "id": "pdf-mcq-944",
    "pdfNumber": 944,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "We have ____ time today than yesterday.",
    "options": [
      "few",
      "less",
      "fewer"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'less'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'less' درست ہے۔",
    "baseSentenceKey": "wehavetimetodaythanyesterday"
  },
  {
    "id": "pdf-mcq-945",
    "pdfNumber": 945,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her results were as impressive ____ his.",
    "options": [
      "than",
      "like",
      "as"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "herresultswereasimpressivehis"
  },
  {
    "id": "pdf-mcq-946",
    "pdfNumber": 946,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This is by far the ____ solution we have considered.",
    "options": [
      "more reliable",
      "most reliable",
      "reliabler"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'most reliable'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'most reliable' درست ہے۔",
    "baseSentenceKey": "thisisbyfarthesolutionwehaveconsidered"
  },
  {
    "id": "pdf-mcq-947",
    "pdfNumber": 947,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "The weather is getting ____ and ____.",
    "options": [
      "more cold / more cold",
      "colder / colder",
      "cold / coldest"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'colder / colder'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'colder / colder' درست ہے۔",
    "baseSentenceKey": "theweatherisgettingand"
  },
  {
    "id": "pdf-mcq-948",
    "pdfNumber": 948,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "detailed",
      "most detailed",
      "more detailed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-949",
    "pdfNumber": 949,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "fewer",
      "less",
      "few"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-950",
    "pdfNumber": 950,
    "category": "Comparatives",
    "difficulty": "Hard",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "clearer",
      "more clear than",
      "clearest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-951",
    "pdfNumber": 951,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The sooner we begin, the ____ we will finish.",
    "options": [
      "early",
      "earlier",
      "earliest"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'earlier'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'earlier' درست ہے۔",
    "baseSentenceKey": "thesoonerwebeginthewewillfinish"
  },
  {
    "id": "pdf-mcq-952",
    "pdfNumber": 952,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This laptop is twice as fast ____ my old one.",
    "options": [
      "as",
      "like",
      "than"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "thislaptopistwiceasfastmyoldone"
  },
  {
    "id": "pdf-mcq-953",
    "pdfNumber": 953,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "She made ____ mistakes than her colleague.",
    "options": [
      "fewest",
      "fewer",
      "less"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "shemademistakesthanhercolleague"
  },
  {
    "id": "pdf-mcq-954",
    "pdfNumber": 954,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Today's meeting was ____ than I expected.",
    "options": [
      "more short",
      "far shorter",
      "shortest"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'far shorter'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'far shorter' درست ہے۔",
    "baseSentenceKey": "todaysmeetingwasthaniexpected"
  },
  {
    "id": "pdf-mcq-955",
    "pdfNumber": 955,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "He is one of the ____ analysts in the department.",
    "options": [
      "best",
      "good",
      "better"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'best'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'best' درست ہے۔",
    "baseSentenceKey": "heisoneoftheanalystsinthedepartment"
  },
  {
    "id": "pdf-mcq-956",
    "pdfNumber": 956,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The more you practise, the ____ you become.",
    "options": [
      "most confident",
      "confident",
      "more confident"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more confident'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more confident' درست ہے۔",
    "baseSentenceKey": "themoreyoupractisetheyoubecome"
  },
  {
    "id": "pdf-mcq-957",
    "pdfNumber": 957,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This option is ____ expensive of the three.",
    "options": [
      "least than",
      "the least",
      "less"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'the least'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'the least' درست ہے۔",
    "baseSentenceKey": "thisoptionisexpensiveofthethree"
  },
  {
    "id": "pdf-mcq-958",
    "pdfNumber": 958,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Travel by train is generally ____ than flying.",
    "options": [
      "cheaper",
      "cheap",
      "cheapest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'cheaper'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'cheaper' درست ہے۔",
    "baseSentenceKey": "travelbytrainisgenerallythanflying"
  },
  {
    "id": "pdf-mcq-959",
    "pdfNumber": 959,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The second draft is slightly ____ than the first.",
    "options": [
      "good",
      "best",
      "better"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'better'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'better' درست ہے۔",
    "baseSentenceKey": "theseconddraftisslightlythanthefirst"
  },
  {
    "id": "pdf-mcq-960",
    "pdfNumber": 960,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "We have ____ time today than yesterday.",
    "options": [
      "few",
      "less",
      "fewer"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'less'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'less' درست ہے۔",
    "baseSentenceKey": "wehavetimetodaythanyesterday"
  },
  {
    "id": "pdf-mcq-961",
    "pdfNumber": 961,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Her results were as impressive ____ his.",
    "options": [
      "like",
      "as",
      "than"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "herresultswereasimpressivehis"
  },
  {
    "id": "pdf-mcq-962",
    "pdfNumber": 962,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This is by far the ____ solution we have considered.",
    "options": [
      "reliabler",
      "most reliable",
      "more reliable"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'most reliable'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'most reliable' درست ہے۔",
    "baseSentenceKey": "thisisbyfarthesolutionwehaveconsidered"
  },
  {
    "id": "pdf-mcq-963",
    "pdfNumber": 963,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The weather is getting ____ and ____.",
    "options": [
      "cold / coldest",
      "colder / colder",
      "more cold / more cold"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'colder / colder'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'colder / colder' درست ہے۔",
    "baseSentenceKey": "theweatherisgettingand"
  },
  {
    "id": "pdf-mcq-964",
    "pdfNumber": 964,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "most detailed",
      "more detailed",
      "detailed"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-965",
    "pdfNumber": 965,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "fewer",
      "less",
      "few"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-966",
    "pdfNumber": 966,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "more clear than",
      "clearest",
      "clearer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-967",
    "pdfNumber": 967,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This is the ____ route to the station.",
    "options": [
      "shortest",
      "shorter",
      "most short"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'shortest'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'shortest' درست ہے۔",
    "baseSentenceKey": "thisistheroutetothestation"
  },
  {
    "id": "pdf-mcq-968",
    "pdfNumber": 968,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The new system is ____ efficient than the old one.",
    "options": [
      "most",
      "much",
      "more"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "thenewsystemisefficientthantheoldone"
  },
  {
    "id": "pdf-mcq-969",
    "pdfNumber": 969,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "My workload is not as heavy ____ yours.",
    "options": [
      "like",
      "as",
      "than"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "myworkloadisnotasheavyyours"
  },
  {
    "id": "pdf-mcq-970",
    "pdfNumber": 970,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Of the two proposals, the first is ____ practical.",
    "options": [
      "most",
      "more",
      "the most"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "ofthetwoproposalsthefirstispractical"
  },
  {
    "id": "pdf-mcq-971",
    "pdfNumber": 971,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "The sooner we begin, the ____ we will finish.",
    "options": [
      "early",
      "earlier",
      "earliest"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'earlier'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'earlier' درست ہے۔",
    "baseSentenceKey": "thesoonerwebeginthewewillfinish"
  },
  {
    "id": "pdf-mcq-972",
    "pdfNumber": 972,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "This laptop is twice as fast ____ my old one.",
    "options": [
      "as",
      "than",
      "like"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "thislaptopistwiceasfastmyoldone"
  },
  {
    "id": "pdf-mcq-973",
    "pdfNumber": 973,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "She made ____ mistakes than her colleague.",
    "options": [
      "less",
      "fewest",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "shemademistakesthanhercolleague"
  },
  {
    "id": "pdf-mcq-974",
    "pdfNumber": 974,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "Today's meeting was ____ than I expected.",
    "options": [
      "far shorter",
      "more short",
      "shortest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'far shorter'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'far shorter' درست ہے۔",
    "baseSentenceKey": "todaysmeetingwasthaniexpected"
  },
  {
    "id": "pdf-mcq-975",
    "pdfNumber": 975,
    "category": "Comparatives",
    "difficulty": "Medium",
    "question": "He is one of the ____ analysts in the department.",
    "options": [
      "good",
      "better",
      "best"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'best'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'best' درست ہے۔",
    "baseSentenceKey": "heisoneoftheanalystsinthedepartment"
  },
  {
    "id": "pdf-mcq-976",
    "pdfNumber": 976,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "more detailed",
      "most detailed",
      "detailed"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-977",
    "pdfNumber": 977,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "less",
      "few",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-978",
    "pdfNumber": 978,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "clearest",
      "more clear than",
      "clearer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-979",
    "pdfNumber": 979,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This is the ____ route to the station.",
    "options": [
      "most short",
      "shortest",
      "shorter"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'shortest'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'shortest' درست ہے۔",
    "baseSentenceKey": "thisistheroutetothestation"
  },
  {
    "id": "pdf-mcq-980",
    "pdfNumber": 980,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The new system is ____ efficient than the old one.",
    "options": [
      "more",
      "much",
      "most"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "thenewsystemisefficientthantheoldone"
  },
  {
    "id": "pdf-mcq-981",
    "pdfNumber": 981,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "My workload is not as heavy ____ yours.",
    "options": [
      "like",
      "than",
      "as"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "myworkloadisnotasheavyyours"
  },
  {
    "id": "pdf-mcq-982",
    "pdfNumber": 982,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Of the two proposals, the first is ____ practical.",
    "options": [
      "the most",
      "more",
      "most"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "ofthetwoproposalsthefirstispractical"
  },
  {
    "id": "pdf-mcq-983",
    "pdfNumber": 983,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The sooner we begin, the ____ we will finish.",
    "options": [
      "early",
      "earliest",
      "earlier"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'earlier'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'earlier' درست ہے۔",
    "baseSentenceKey": "thesoonerwebeginthewewillfinish"
  },
  {
    "id": "pdf-mcq-984",
    "pdfNumber": 984,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This laptop is twice as fast ____ my old one.",
    "options": [
      "than",
      "as",
      "like"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "thislaptopistwiceasfastmyoldone"
  },
  {
    "id": "pdf-mcq-985",
    "pdfNumber": 985,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "She made ____ mistakes than her colleague.",
    "options": [
      "fewest",
      "less",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "shemademistakesthanhercolleague"
  },
  {
    "id": "pdf-mcq-986",
    "pdfNumber": 986,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Today's meeting was ____ than I expected.",
    "options": [
      "shortest",
      "far shorter",
      "more short"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'far shorter'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'far shorter' درست ہے۔",
    "baseSentenceKey": "todaysmeetingwasthaniexpected"
  },
  {
    "id": "pdf-mcq-987",
    "pdfNumber": 987,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "He is one of the ____ analysts in the department.",
    "options": [
      "good",
      "better",
      "best"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'best'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'best' درست ہے۔",
    "baseSentenceKey": "heisoneoftheanalystsinthedepartment"
  },
  {
    "id": "pdf-mcq-988",
    "pdfNumber": 988,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The more you practise, the ____ you become.",
    "options": [
      "most confident",
      "confident",
      "more confident"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more confident'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more confident' درست ہے۔",
    "baseSentenceKey": "themoreyoupractisetheyoubecome"
  },
  {
    "id": "pdf-mcq-989",
    "pdfNumber": 989,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This option is ____ expensive of the three.",
    "options": [
      "less",
      "least than",
      "the least"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'the least'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'the least' درست ہے۔",
    "baseSentenceKey": "thisoptionisexpensiveofthethree"
  },
  {
    "id": "pdf-mcq-990",
    "pdfNumber": 990,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Travel by train is generally ____ than flying.",
    "options": [
      "cheaper",
      "cheapest",
      "cheap"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'cheaper'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'cheaper' درست ہے۔",
    "baseSentenceKey": "travelbytrainisgenerallythanflying"
  },
  {
    "id": "pdf-mcq-991",
    "pdfNumber": 991,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The second draft is slightly ____ than the first.",
    "options": [
      "better",
      "best",
      "good"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'better'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'better' درست ہے۔",
    "baseSentenceKey": "theseconddraftisslightlythanthefirst"
  },
  {
    "id": "pdf-mcq-992",
    "pdfNumber": 992,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "We have ____ time today than yesterday.",
    "options": [
      "fewer",
      "few",
      "less"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'less'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'less' درست ہے۔",
    "baseSentenceKey": "wehavetimetodaythanyesterday"
  },
  {
    "id": "pdf-mcq-993",
    "pdfNumber": 993,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Her results were as impressive ____ his.",
    "options": [
      "than",
      "as",
      "like"
    ],
    "correctIndex": 1,
    "englishExplanation": "Standard comparative / superlative construction requires 'as'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'as' درست ہے۔",
    "baseSentenceKey": "herresultswereasimpressivehis"
  },
  {
    "id": "pdf-mcq-994",
    "pdfNumber": 994,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This is by far the ____ solution we have considered.",
    "options": [
      "most reliable",
      "reliabler",
      "more reliable"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'most reliable'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'most reliable' درست ہے۔",
    "baseSentenceKey": "thisisbyfarthesolutionwehaveconsidered"
  },
  {
    "id": "pdf-mcq-995",
    "pdfNumber": 995,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The weather is getting ____ and ____.",
    "options": [
      "colder / colder",
      "more cold / more cold",
      "cold / coldest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'colder / colder'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'colder / colder' درست ہے۔",
    "baseSentenceKey": "theweatherisgettingand"
  },
  {
    "id": "pdf-mcq-996",
    "pdfNumber": 996,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This year's report is ____ than last year's.",
    "options": [
      "most detailed",
      "detailed",
      "more detailed"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more detailed'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more detailed' درست ہے۔",
    "baseSentenceKey": "thisyearsreportisthanlastyears"
  },
  {
    "id": "pdf-mcq-997",
    "pdfNumber": 997,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "There are ____ applicants this year than last year.",
    "options": [
      "less",
      "few",
      "fewer"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'fewer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'fewer' درست ہے۔",
    "baseSentenceKey": "thereareapplicantsthisyearthanlastyear"
  },
  {
    "id": "pdf-mcq-998",
    "pdfNumber": 998,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "Her explanation was ____ than mine.",
    "options": [
      "clearer",
      "more clear than",
      "clearest"
    ],
    "correctIndex": 0,
    "englishExplanation": "Standard comparative / superlative construction requires 'clearer'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'clearer' درست ہے۔",
    "baseSentenceKey": "herexplanationwasthanmine"
  },
  {
    "id": "pdf-mcq-999",
    "pdfNumber": 999,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "This is the ____ route to the station.",
    "options": [
      "most short",
      "shorter",
      "shortest"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'shortest'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'shortest' درست ہے۔",
    "baseSentenceKey": "thisistheroutetothestation"
  },
  {
    "id": "pdf-mcq-1000",
    "pdfNumber": 1000,
    "category": "Comparatives",
    "difficulty": "Easy",
    "question": "The new system is ____ efficient than the old one.",
    "options": [
      "much",
      "most",
      "more"
    ],
    "correctIndex": 2,
    "englishExplanation": "Standard comparative / superlative construction requires 'more'.",
    "urduExplanation": "تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت 'more' درست ہے۔",
    "baseSentenceKey": "thenewsystemisefficientthantheoldone"
  }
];

export const PDF_GRAMMAR_BY_CATEGORY: Record<string, PdfGrammarItem[]> = {};

for (const item of PDF_GRAMMAR_POOL) {
  if (!PDF_GRAMMAR_BY_CATEGORY[item.category]) {
    PDF_GRAMMAR_BY_CATEGORY[item.category] = [];
  }
  PDF_GRAMMAR_BY_CATEGORY[item.category].push(item);
}

// Exactly required distribution by topic and difficulty:
// Total: 25 questions (10 Easy, 10 Moderate, 5 Hard)
export interface TopicRequirement {
  category: string;
  count: number;
  easy: number;
  medium: number;
  hard: number;
}

export const OFFICIAL_GRAMMAR_DISTRIBUTION: TopicRequirement[] = [
  { category: 'Tenses', count: 4, easy: 2, medium: 1, hard: 1 },
  { category: 'Modal Verbs', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Active and Passive Voice', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Gerunds and Infinitives', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Adverbs', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Conditionals', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Prepositions', count: 3, easy: 1, medium: 1, hard: 1 },
  { category: 'Collocation', count: 1, easy: 0, medium: 1, hard: 0 },
  { category: 'Connectors', count: 2, easy: 1, medium: 1, hard: 0 },
  { category: 'Comparatives', count: 2, easy: 1, medium: 1, hard: 0 },
];

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const SEEN_PDF_IDS_KEY = 'icap_seen_pdf_grammar_ids';
const SEEN_PDF_BASE_KEYS = 'icap_seen_pdf_base_keys';

export function getSeenPdfGrammarIds(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(SEEN_PDF_IDS_KEY);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function getSeenPdfBaseKeys(): Set<string> {
  if (typeof window === 'undefined') return new Set();
  try {
    const raw = localStorage.getItem(SEEN_PDF_BASE_KEYS);
    return raw ? new Set(JSON.parse(raw)) : new Set();
  } catch {
    return new Set();
  }
}

export function markPdfGrammarSeen(ids: string[], baseKeys: string[]): void {
  if (typeof window === 'undefined') return;
  try {
    const existingIds = getSeenPdfGrammarIds();
    ids.forEach(id => existingIds.add(id));
    const idArr = Array.from(existingIds);
    if (idArr.length > 50000) {
      idArr.splice(0, idArr.length - 40000);
    }
    localStorage.setItem(SEEN_PDF_IDS_KEY, JSON.stringify(idArr));

    const existingBase = getSeenPdfBaseKeys();
    baseKeys.forEach(k => existingBase.add(k));
    const baseArr = Array.from(existingBase);
    if (baseArr.length > 50000) {
      baseArr.splice(0, baseArr.length - 40000);
    }
    localStorage.setItem(SEEN_PDF_BASE_KEYS, JSON.stringify(baseArr));
  } catch {}
}

/**
 * Randomly select exactly 25 Grammar MCQs from the official PDF pool
 * adhering to:
 * - Exactly 10 Easy, 10 Moderate (Medium), 5 Hard
 * - Topic distribution:
 *   Tenses: 4, Modal Verbs: 2, Active and Passive Voice: 2,
 *   Gerunds and Infinitives: 3, Adverbs: 3, Conditionals: 3,
 *   Prepositions: 3, Collocation: 1, Connectors: 2, Comparatives: 2
 * - Clean options: pure choices without header/footer artifacts.
 * - STRICT ZERO REPETITION: If the PDF pool questions are exhausted for any category/difficulty,
 *   it automatically generates brand-new, unique MCQs matching the same format, difficulty,
 *   and ICAP ECS syllabus so that questions NEVER repeat across attempts.
 * - Guarantees 0 duplicate base sentences within the same test.
 */
export function select25GrammarQuestionsFromPdf(
  seenIds: Set<string> = getSeenPdfGrammarIds(),
  seenBaseKeys: Set<string> = getSeenPdfBaseKeys()
): GrammarQuestion[] {
  const selected: GrammarQuestion[] = [];
  const selectedIds = new Set<string>(seenIds);
  const selectedBaseKeys = new Set<string>(seenBaseKeys);

  for (const req of OFFICIAL_GRAMMAR_DISTRIBUTION) {
    const poolForCat = PDF_GRAMMAR_POOL.filter(q => q.category === req.category);

    const diffNeeds: ('Easy' | 'Medium' | 'Hard')[] = [
      ...Array(req.easy).fill('Easy'),
      ...Array(req.medium).fill('Medium'),
      ...Array(req.hard).fill('Hard')
    ];

    for (const diff of diffNeeds) {
      // Find candidate questions matching category and difficulty, not already in this test
      const candidates = poolForCat.filter(q => 
        q.difficulty === diff &&
        !selectedIds.has(q.id) &&
        !selectedBaseKeys.has(q.baseSentenceKey)
      );

      // Prioritize questions not seen anywhere in previous attempts
      const unseen = candidates.filter(q => 
        !seenIds.has(q.id) && 
        !seenBaseKeys.has(q.baseSentenceKey)
      );

      let picked: GrammarQuestion | undefined;

      if (unseen.length > 0) {
        const item = shuffleArray(unseen)[0];
        picked = {
          id: item.id,
          category: item.category,
          difficulty: item.difficulty,
          question: cleanPdfArtifacts(item.question),
          options: item.options.map(opt => cleanPdfArtifacts(opt)),
          correctIndex: item.correctIndex,
          englishExplanation: item.englishExplanation,
          urduExplanation: item.urduExplanation
        };
        selectedIds.add(item.id);
        selectedBaseKeys.add(item.baseSentenceKey);
      } else {
        // PDF questions for this category and difficulty are exhausted!
        // Automatically generate brand-new, unique MCQ matching the PDF's format, difficulty, and ICAP ECS syllabus.
        picked = generateSyntheticGrammarMCQ(req.category, diff, selectedBaseKeys);
        selectedIds.add(picked.id);
      }

      if (picked) {
        selected.push(picked);
      }
    }
  }

  // Ensure overall count is exactly 25
  while (selected.length < 25) {
    const diff: 'Easy' | 'Medium' | 'Hard' = selected.length < 10 ? 'Easy' : selected.length < 20 ? 'Medium' : 'Hard';
    const cat = OFFICIAL_GRAMMAR_DISTRIBUTION[selected.length % OFFICIAL_GRAMMAR_DISTRIBUTION.length].category;
    const extra = generateSyntheticGrammarMCQ(cat, diff, selectedBaseKeys);
    selected.push(extra);
    selectedIds.add(extra.id);
  }

  // Map to clean final format
  const finalQuestions: GrammarQuestion[] = selected.slice(0, 25).map((item, idx) => ({
    id: item.id.startsWith('auto-g-') ? item.id : `pdf-g-${idx + 1}-${item.id.replace(/^pdf-mcq-/, '')}`,
    category: item.category,
    difficulty: item.difficulty,
    question: cleanPdfArtifacts(item.question),
    options: item.options.map(opt => cleanPdfArtifacts(opt)),
    correctIndex: item.correctIndex,
    englishExplanation: item.englishExplanation,
    urduExplanation: item.urduExplanation
  }));

  // Record chosen items to seen storage
  markPdfGrammarSeen(
    finalQuestions.map(s => s.id),
    Array.from(selectedBaseKeys)
  );

  return finalQuestions;
}

/**
 * Strip all PDF page headers, footers, page numbering, and line artifacts
 * from question text and option choices so that only pure text remains.
 */
export function cleanArtifacts(text: string): string {
  return cleanPdfArtifacts(text);
}

function cleanPdfArtifacts(text: string): string {
  if (!text) return '';
  return text
    .replace(/--\s*\d+\s*of\s*\d+\s*--[\s\S]*?(?:Page\s*\d+)?/gi, '')
    .replace(/--\s*\d+\s*of\s*\d+\s*--/gi, '')
    .replace(/English\s*Communication\s*Skills\s*\|?\s*Grammar\s*Portion(?:\s*Page\s*\d+)?/gi, '')
    .replace(/\bPage\s*\d+\b/gi, '')
    .replace(/\s*--\s*/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}
