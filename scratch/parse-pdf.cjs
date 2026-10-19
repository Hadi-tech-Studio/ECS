const fs = require('fs');

const text = fs.readFileSync('scratch/extracted-pdf-text.txt', 'utf8');

// 1. Parse Answer Key
const ansKeyIndex = text.indexOf('ANSWER KEY');
if (ansKeyIndex === -1) {
  console.error('ANSWER KEY not found!');
  process.exit(1);
}
const ansKeyText = text.slice(ansKeyIndex);
const answerMap = {};
const ansRegex = /(\d+)\.\s*([A-C])/g;
let match;
while ((match = ansRegex.exec(ansKeyText)) !== null) {
  answerMap[parseInt(match[1])] = match[2];
}

console.log('Total answers parsed:', Object.keys(answerMap).length);
console.log('Answers 1-10:', [1,2,3,4,5,6,7,8,9,10].map(n => n + ':' + answerMap[n]).join(', '));
console.log('Answers 991-1000:', [991,992,993,994,995,996,997,998,999,1000].map(n => n + ':' + answerMap[n]).join(', '));

// 2. Sections in PDF:
// 1. Tenses (1-150): Difficult (1-75), Moderate (76-110), Easy (111-150)
// 2. Conditionals (151-300): Difficult (151-225), Moderate (226-265), Easy (266-300)
// 3. Active and Passive Voice (301-400): Difficult (301-350), Moderate (351-375), Easy (376-400)
// 4. Gerunds and Infinitives (401-500): Difficult (401-450), Moderate (451-475), Easy (476-500)
// 5. Prepositions (501-600): Difficult (501-550), Moderate (551-575), Easy (576-600)
// 6. Modal Verbs (601-700): Difficult (601-650), Moderate (651-675), Easy (676-700)
// 7. Connectives (701-800): Difficult (701-750), Moderate (751-775), Easy (776-800)
// 8. Adverbs (801-900): Difficult (801-850), Moderate (851-875), Easy (876-900)
// 9. Comparatives (901-1000): Difficult (901-950), Moderate (951-975), Easy (976-1000)

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

// 3. Parse Questions
// Each question starts with "N. " where N is 1 to 1000
// Followed by question text
// Followed by A) ... B) ... C) ...
const bodyText = text.slice(0, ansKeyIndex);

// Let us find positions of "N. "
const questions = [];
const qRegex = /(?:^|\n)\s*(\d+)\.\s+([\s\S]*?)(?=(?:\n\s*\d+\.\s+)|$)/g;
let qMatch;

// Filter out header/footer lines that might get inside
function cleanText(t) {
  return t
    .replace(/English Communication Skills \| Grammar Portion Page \d+/g, '')
    .replace(/-- \d+ of \d+ --/g, '')
    .replace(/Difficult \(\d+ MCQs\)/g, '')
    .replace(/Moderate \(\d+ MCQs\)/g, '')
    .replace(/Easy \(\d+ MCQs\)/g, '')
    .replace(/\d+\.\s+[A-Za-z ]+—\s+\d+\s+MCQs/g, '')
    .trim();
}

while ((qMatch = qRegex.exec(bodyText)) !== null) {
  const num = parseInt(qMatch[1]);
  if (num < 1 || num > 1000) continue;
  
  const rawContent = qMatch[2];
  
  // Extract options A), B), C)
  const aIdx = rawContent.indexOf('A)');
  const bIdx = rawContent.indexOf('B)');
  const cIdx = rawContent.indexOf('C)');
  
  if (aIdx !== -1 && bIdx !== -1 && cIdx !== -1) {
    const qStatement = cleanText(rawContent.slice(0, aIdx)).replace(/\s+/g, ' ');
    const optA = cleanText(rawContent.slice(aIdx + 2, bIdx)).replace(/\s+/g, ' ');
    const optB = cleanText(rawContent.slice(bIdx + 2, cIdx)).replace(/\s+/g, ' ');
    const optC = cleanText(rawContent.slice(cIdx + 2)).replace(/\s+/g, ' ');
    
    const ansLetter = answerMap[num];
    const correctIndex = ansLetter === 'A' ? 0 : (ansLetter === 'B' ? 1 : (ansLetter === 'C' ? 2 : 0));
    const secInfo = getSectionInfo(num);
    
    questions.push({
      num,
      question: qStatement,
      options: [optA, optB, optC],
      correctIndex,
      correctAnswer: ansLetter,
      category: secInfo.category,
      difficulty: secInfo.difficulty
    });
  }
}

console.log('Total questions parsed:', questions.length);
if (questions.length > 0) {
  console.log('First question:', JSON.stringify(questions[0], null, 2));
  console.log('Last question:', JSON.stringify(questions[questions.length - 1], null, 2));
}

// Check missing numbers
const foundNums = new Set(questions.map(q => q.num));
const missing = [];
for (let i = 1; i <= 1000; i++) {
  if (!foundNums.has(i)) missing.push(i);
}
console.log('Missing question numbers count:', missing.length);
if (missing.length > 0) {
  console.log('Missing numbers:', missing.slice(0, 20));
}
