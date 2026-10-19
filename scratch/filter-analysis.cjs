const fs = require('fs');

const text = fs.readFileSync('scratch/extracted-pdf-text.txt', 'utf8');

// Parse Answer Key
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
  // Remove trailing review phrases like "during the review.", "after the briefing.", "despite the delay."
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

const bodyText = text.slice(0, ansKeyIndex);
const qRegex = /(?:^|\n)\s*(\d+)\.\s+([\s\S]*?)(?=(?:\n\s*\d+\.\s+)|$)/g;
let qMatch;
const allQuestions = [];

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
    
    const ansLetter = answerMap[num];
    const correctIndex = ansLetter === 'A' ? 0 : (ansLetter === 'B' ? 1 : (ansLetter === 'C' ? 2 : 0));
    const secInfo = getSectionInfo(num);
    
    allQuestions.push({
      num,
      rawQuestion: rawStatement,
      question: cleanedStatement,
      options: [optA, optB, optC],
      correctIndex,
      correctAnswer: ansLetter,
      category: secInfo.category,
      difficulty: secInfo.difficulty
    });
  }
}

// Banned words filter (accounting, auditing, corporate, firm, supervisor, etc.)
const bannedRegex = /\b(auditor|audit|accountant|accounting|corporate|corporation|firm|supervisor|fiscal|shareholder|shares|dividend|ledger|depreciation|balance sheet|tax|taxation|revenue)\b/i;

const generalQuestions = allQuestions.filter(q => {
  const combined = q.question + ' ' + q.options.join(' ');
  return !bannedRegex.test(combined);
});

const bannedQuestions = allQuestions.filter(q => {
  const combined = q.question + ' ' + q.options.join(' ');
  return bannedRegex.test(combined);
});

console.log('Total Questions:', allQuestions.length);
console.log('General English Questions:', generalQuestions.length);
console.log('Banned Accounting/Corporate Questions:', bannedQuestions.length);

// Breakdown by category and difficulty for general questions
const breakdown = {};
for (const q of generalQuestions) {
  if (!breakdown[q.category]) breakdown[q.category] = { Easy: 0, Medium: 0, Hard: 0, total: 0 };
  breakdown[q.category][q.difficulty]++;
  breakdown[q.category].total++;
}
console.log('\nBreakdown of General English Questions:');
console.table(breakdown);
