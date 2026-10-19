const fs = require('fs');

const text = fs.readFileSync('scratch/extracted-pdf-text.txt', 'utf8');

// 1. Parse Answer Key
const ansKeyIndex = text.indexOf('ANSWER KEY');
const ansKeyText = text.slice(ansKeyIndex);
const answerMap = {};
const ansRegex = /(\d+)\.\s*([A-C])/g;
let match;
while ((match = ansRegex.exec(ansKeyText)) !== null) {
  answerMap[parseInt(match[1])] = match[2];
}

function getSectionInfo(num) {
  if (num >= 1 && num <= 150) {
    const diff = num <= 75 ? 'Hard' : (num <= 110 ? 'Medium' : 'Easy');
    return { category: 'Tenses', difficulty: diff };
  } else if (num >= 151 && num <= 300) {
    const diff = num <= 225 ? 'Hard' : (num <= 265 ? 'Medium' : 'Easy');
    return { category: 'Conditionals', difficulty: diff };
  } else if (num >= 301 && num <= 400) {
    const diff = num <= 350 ? 'Hard' : (num <= 375 ? 'Medium' : 'Easy');
    return { category: 'Active and Passive Voice', difficulty: diff };
  } else if (num >= 401 && num <= 500) {
    const diff = num <= 450 ? 'Hard' : (num <= 475 ? 'Medium' : 'Easy');
    return { category: 'Gerunds and Infinitives', difficulty: diff };
  } else if (num >= 501 && num <= 600) {
    const diff = num <= 550 ? 'Hard' : (num <= 575 ? 'Medium' : 'Easy');
    return { category: 'Prepositions', difficulty: diff };
  } else if (num >= 601 && num <= 700) {
    const diff = num <= 650 ? 'Hard' : (num <= 675 ? 'Medium' : 'Easy');
    return { category: 'Modal Verbs', difficulty: diff };
  } else if (num >= 701 && num <= 800) {
    const diff = num <= 750 ? 'Hard' : (num <= 775 ? 'Medium' : 'Easy');
    return { category: 'Connectors', difficulty: diff };
  } else if (num >= 801 && num <= 900) {
    const diff = num <= 850 ? 'Hard' : (num <= 875 ? 'Medium' : 'Easy');
    return { category: 'Adverbs', difficulty: diff };
  } else if (num >= 901 && num <= 1000) {
    const diff = num <= 950 ? 'Hard' : (num <= 975 ? 'Medium' : 'Easy');
    return { category: 'Comparatives', difficulty: diff };
  }
  return { category: 'General Grammar', difficulty: 'Medium' };
}

function cleanStatement(q) {
  let s = q;
  const prefixes = [
    /^Consider this situation:\s*in a different situation,\s*/i,
    /^For this example,\s*in a different situation,\s*/i,
    /^In the first case,\s*in a different situation,\s*/i,
    /^In the next scenario,\s*in a different situation,\s*/i,
    /^In a different situation,\s*/i,
    /^Consider this situation:\s*/i,
    /^For this example,\s*/i,
    /^In the first case,\s*/i,
    /^In the next scenario,\s*/i
  ];
  for (const p of prefixes) {
    s = s.replace(p, '');
  }
  s = s.replace(/\s+(?:during the review|after the briefing|despite the delay)\b/gi, '');
  s = s.replace(/English Communication Skills \| Grammar Portion Page \d+/g, '');
  s = s.replace(/-- \d+ of \d+ --/g, '');
  s = s.replace(/Difficult \(\d+ MCQs\)/g, '');
  s = s.replace(/Moderate \(\d+ MCQs\)/g, '');
  s = s.replace(/Easy \(\d+ MCQs\)/g, '');
  s = s.trim();
  if (s.length > 0) {
    s = s.charAt(0).toUpperCase() + s.slice(1);
  }
  return s;
}

// Normalized base key for grouping identical underlying sentences
function getBaseKey(qStr) {
  return qStr
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .slice(0, 40);
}

// Banned words filter (accounting, auditing, corporate, firm, supervisor, etc.)
const bannedRegex = /\b(auditor|audit|accountant|accounting|corporate|corporation|firm|supervisor|fiscal|shareholder|shares|dividend|ledger|depreciation|balance sheet|tax|taxation|revenue)\b/i;

// Collocation base questions from the PDF
const collocationBaseSnippets = [
  'apologised ____ being late',
  'consists ____ five sections',
  'good ____ solving complex',
  'refrain ____ using your phone',
  'depends ____ the final figures',
  'responsible ____ preparing the minutes',
  'congratulated him ____ his promotion',
  'prefers tea ____ coffee',
  'look forward to ____ from you',
  'used to ____ under pressure',
  'mind ____ the window'
];

function isCollocationQuestion(qClean) {
  const lower = qClean.toLowerCase();
  return collocationBaseSnippets.some(snippet => lower.includes(snippet.toLowerCase()));
}

// Rules for generating helpful English & Urdu explanations based on the sentence & answer
function generateExplanations(qClean, answer, category) {
  const ans = answer;
  const lower = qClean.toLowerCase();
  
  if (category === 'Tenses') {
    if (lower.includes('this time tomorrow')) {
      return {
        en: `Future Continuous tense ('${ans}') describes an action that will be in progress at a specific time in the future.`,
        ur: `مستقبل میں کسی خاص وقت پر جاری رہنے والے کام کے لیے Future Continuous tense استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('by 8 p.m.')) {
      return {
        en: `Future Perfect tense ('${ans}') is used for an action that will be completed before a specified future time.`,
        ur: `مستقبل کے کسی مقررہ وقت سے پہلے مکمل ہونے والے عمل کے لیے Future Perfect tense استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('every morning')) {
      return {
        en: `Present Simple tense ('${ans}') expresses habitual, daily routines and permanent facts.`,
        ur: `روزمرہ کی عادت یا معمول کے کام کے لیے Present Simple tense استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('yet')) {
      return {
        en: `Present Perfect negative ('${ans}') is used with 'yet' to describe an event expected to happen but not completed up to the present.`,
        ur: `'yet' کے ساتھ عام طور پر Present Perfect tense کا منفی جملہ استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('turned off the computer')) {
      return {
        en: `Past Perfect ('${ans}') shows that an action happened before another action in the past.`,
        ur: `ماضی میں دو کاموں میں سے پہلے مکمل ہونے والے کام کے لیے Past Perfect tense آتا ہے۔`
      };
    }
    if (lower.includes('look at those clouds')) {
      return {
        en: `'be going to' ('${ans}') is used for future predictions based on immediate present visual evidence.`,
        ur: `موجودہ واضح ثبوت دیکھ کر مستقبل کی پیشگوئی کرنے کے لیے 'be going to' استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('while i')) {
      return {
        en: `Past Continuous ('${ans}') describes a longer background action interrupted by a shorter action in the past.`,
        ur: `ماضی میں کسی طویل جاری عمل کو ظاہر کرنے کے لیے Past Continuous tense استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('since 2021')) {
      return {
        en: `Present Perfect ('${ans}') is used with 'since' to denote an action starting in the past and continuing to the present.`,
        ur: `'since' کے ساتھ ماضی سے شروع ہو کر اب تک جاری عمل کو ظاہر کرنے کے لیے Present Perfect آتا ہے۔`
      };
    }
    if (lower.includes('when the phone rang')) {
      return {
        en: `Past Continuous ('${ans}') indicates an ongoing action that was in progress when an interruption occurred.`,
        ur: `ماضی میں کسی دوسرے واقعے کے وقت جاری رہنے والے کام کے لیے Past Continuous tense استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('the previous day')) {
      return {
        en: `Past Perfect ('${ans}') is required in reported speech for actions completed prior to the past reporting moment.`,
        ur: `ان ڈائریکٹ اسپیچ میں ماضی کے پچھلے دن کے واقعے کے لیے Past Perfect tense آتا ہے۔`
      };
    }
    if (lower.includes('every winter') || lower.includes('river')) {
      return {
        en: `Present Simple ('${ans}') expresses a natural law or recurring seasonal fact.`,
        ur: `قدرتی حقائق اور بار بار ہونے والے موسمی واقعات کے لیے Present Simple استعمال ہوتا ہے۔`
      };
    }
    if (lower.includes('if i have time')) {
      return {
        en: `First conditional main clause takes future simple ('${ans}') with a present simple conditional clause.`,
        ur: `پہلی شرطیہ حالت (First Conditional) کے مین کلاز میں Future Simple ('will') آتا ہے۔`
      };
    }
    return {
      en: `Correct grammatical verb tense '${ans}' adheres to standard English timeline rules and agreement.`,
      ur: `درست فعل کی حالت '${ans}' انگریزی قواعد کے مطابق سیاق و سباق سے مطابقت رکھتی ہے۔`
    };
  }
  
  if (category === 'Conditionals') {
    if (lower.includes('if i ____ you')) {
      return {
        en: `Second conditional hypothetical advice uses subjunctive 'were' ('If I were you').`,
        ur: `فرضی یا مشورے کی صورت میں 'If I were you' کا اصول لاگو ہوتا ہے۔`
      };
    }
    if (lower.includes('had listened') || lower.includes('had taken') || lower.includes('had booked') || lower.includes('had checked')) {
      return {
        en: `Third conditional main clause requires 'would/could/might have + past participle' ('${ans}').`,
        ur: `تیسری شرطیہ حالت (Third Conditional) کے نتیجے میں 'would have + 3rd form' استعمال ہوتی ہے۔`
      };
    }
    if (lower.includes('plants die') || lower.includes('mix blue and yellow') || lower.includes('water reaches 100') || lower.includes('people heat ice')) {
      return {
        en: `Zero conditional scientific truths take present simple in both condition and result clauses ('${ans}').`,
        ur: `سائنسی اور فطری حقائق کے لیے Zero Conditional میں دونوں طرف Present Simple آتا ہے۔`
      };
    }
    if (lower.includes('unless you leave')) {
      return {
        en: `'Unless' means 'if not' and pairs with future simple ('${ans}') in the main clause.`,
        ur: `'Unless' کا مطلب 'اگر نہیں' ہے اور یہ مین کلاز میں Future Simple لیتا ہے۔`
      };
    }
    return {
      en: `Conditional structure rule requires '${ans}' to match the conditional clause tense.`,
      ur: `شرطیہ جملے کے اصول کے مطابق درست نتیجہ '${ans}' بنتا ہے۔`
    };
  }
  
  if (category === 'Active and Passive Voice') {
    return {
      en: `Passive voice construction uses the appropriate form of 'be' + past participle ('${ans}').`,
      ur: `مفعولی حالت (Passive Voice) میں 'be' کی مناسب شکل کے ساتھ ورب کی تیسری فارم استعمال ہوتی ہے۔`
    };
  }
  
  if (category === 'Gerunds and Infinitives') {
    return {
      en: `The verb or phrase governing this blank specifically requires '${ans}' (gerund or infinitive pattern).`,
      ur: `جملے میں آنے والے مخصوص فعل کے بعد قواعد کے تحت '${ans}' (Gerund یا Infinitive) آتا ہے۔`
    };
  }
  
  if (category === 'Prepositions' || category === 'Collocation') {
    return {
      en: `Standard English prepositional usage and dependent collocation requires '${ans}'.`,
      ur: `انگریزی محاوراتی اصول اور حرفِ جار کے درست استعمال کے لیے '${ans}' موزوں ترین ہے۔`
    };
  }
  
  if (category === 'Modal Verbs') {
    return {
      en: `Modal verb '${ans}' correctly expresses the required degree of obligation, ability, permission, or deduction.`,
      ur: `ماڈل ورب '${ans}' جملے میں فرض، اجازت یا امکان کو درست طور پر ظاہر کرتا ہے۔`
    };
  }
  
  if (category === 'Connectors') {
    return {
      en: `Logical conjunction '${ans}' properly establishes the relationship of cause, contrast, or purpose.`,
      ur: `حرفِ ربط '${ans}' جملے کے دونوں حصوں کے درمیان سبب، تضاد یا مقصد کا درست تعلق قائم کرتا ہے۔`
    };
  }
  
  if (category === 'Adverbs') {
    return {
      en: `The adverb '${ans}' properly modifies the verb, adjective, or clause according to standard English syntax.`,
      ur: `متعلق فعل (Adverb) '${ans}' جملے میں فعل یا صفت کی وضاحت کے لیے بالکل درست ہے۔`
    };
  }
  
  if (category === 'Comparatives') {
    return {
      en: `Standard comparative / superlative construction requires '${ans}'.`,
      ur: `تقابلی صفت (Comparative/Superlative degree) کے قواعد کے تحت '${ans}' درست ہے۔`
    };
  }
  
  return {
    en: `Standard English grammar requires '${ans}' in this context.`,
    ur: `انگریزی قواعد کی رو سے یہاں '${ans}' درست ترین انتخاب ہے۔`
  };
}

const bodyText = text.slice(0, ansKeyIndex);
const qRegex = /(?:^|\n)\s*(\d+)\.\s+([\s\S]*?)(?=(?:\n\s*\d+\.\s+)|$)/g;
let qMatch;
const processedQuestions = [];

while ((qMatch = qRegex.exec(bodyText)) !== null) {
  const num = parseInt(qMatch[1]);
  if (num < 1 || num > 1000) continue;
  
  const rawContent = qMatch[2];
  const aIdx = rawContent.indexOf('A)');
  const bIdx = rawContent.indexOf('B)');
  const cIdx = rawContent.indexOf('C)');
  
  if (aIdx !== -1 && bIdx !== -1 && cIdx !== -1) {
    const rawStatement = rawContent.slice(0, aIdx).replace(/\s+/g, ' ');
    const cleanedStatement = cleanStatement(rawStatement);
    const optA = rawContent.slice(aIdx + 2, bIdx).replace(/\s+/g, ' ').trim();
    const optB = rawContent.slice(bIdx + 2, cIdx).replace(/\s+/g, ' ').trim();
    const optC = rawContent.slice(cIdx + 2).replace(/\s+/g, ' ').trim();
    
    // Check banned accounting/corporate words
    const combined = cleanedStatement + ' ' + optA + ' ' + optB + ' ' + optC;
    if (bannedRegex.test(combined)) {
      continue; // Skip accounting/auditing/corporate
    }
    
    const ansLetter = answerMap[num];
    const correctIndex = ansLetter === 'A' ? 0 : (ansLetter === 'B' ? 1 : (ansLetter === 'C' ? 2 : 0));
    const secInfo = getSectionInfo(num);
    
    // Re-tag category to 'Collocation' if it is one of the fixed collocation patterns
    let finalCategory = secInfo.category;
    if (isCollocationQuestion(cleanedStatement)) {
      finalCategory = 'Collocation';
    }
    
    const options = [optA, optB, optC];
    const correctText = options[correctIndex];
    const explanations = generateExplanations(cleanedStatement, correctText, finalCategory);
    
    processedQuestions.push({
      id: `pdf-mcq-${num}`,
      pdfNumber: num,
      category: finalCategory,
      difficulty: secInfo.difficulty,
      question: cleanedStatement,
      options,
      correctIndex,
      englishExplanation: explanations.en,
      urduExplanation: explanations.ur,
      baseSentenceKey: getBaseKey(cleanedStatement)
    });
  }
}

console.log('Total valid PDF questions after cleaning & filtering:', processedQuestions.length);

// Category breakdown
const categoryCounts = {};
for (const q of processedQuestions) {
  if (!categoryCounts[q.category]) categoryCounts[q.category] = { Easy: 0, Medium: 0, Hard: 0, total: 0 };
  categoryCounts[q.category][q.difficulty]++;
  categoryCounts[q.category].total++;
}
console.table(categoryCounts);

// Write TypeScript file
const tsContent = `/**
 * ============================================================================
 * pdfGrammarPool.ts
 * Official 1,000 MCQs Grammar Pool for ICAP ECS & Aptis General Test
 * Sourced directly from the official English Communication Skills Grammar Portion PDF.
 * 
 * Filtered to strictly exclude accounting, auditing, and corporate topics.
 * Contains only general English grammar items categorized into:
 * - Tenses (4 per test)
 * - Modal Verbs (2 per test)
 * - Active and Passive Voice (2 per test)
 * - Gerunds and Infinitives (3 per test)
 * - Adverbs (3 per test)
 * - Conditionals (3 per test)
 * - Prepositions (3 per test)
 * - Collocation (1 per test)
 * - Connectors (2 per test)
 * - Comparatives (2 per test)
 * Total: Exactly 25 MCQs (10 Easy, 10 Moderate, 5 Hard) per test.
 * ============================================================================
 */

import { GrammarQuestion } from '../types';

export interface PdfGrammarItem extends GrammarQuestion {
  pdfNumber: number;
  baseSentenceKey: string;
}

export const PDF_GRAMMAR_POOL: PdfGrammarItem[] = ${JSON.stringify(processedQuestions, null, 2)};

export const PDF_GRAMMAR_BY_CATEGORY: Record<string, PdfGrammarItem[]> = {};

for (const item of PDF_GRAMMAR_POOL) {
  if (!PDF_GRAMMAR_BY_CATEGORY[item.category]) {
    PDF_GRAMMAR_BY_CATEGORY[item.category] = [];
  }
  PDF_GRAMMAR_BY_CATEGORY[item.category].push(item);
}
`;

fs.writeFileSync('src/data/pdfGrammarPool.ts', tsContent, 'utf8');
console.log('Successfully written src/data/pdfGrammarPool.ts');
