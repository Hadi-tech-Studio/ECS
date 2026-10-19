const fs = require('fs');

// Test simulation of selecting 25 questions from PDF_GRAMMAR_POOL
const fileContent = fs.readFileSync('src/data/pdfGrammarPool.ts', 'utf8');

// Extract the array from the ts file
const jsonMatch = fileContent.match(/export const PDF_GRAMMAR_POOL: PdfGrammarItem\[\] = (\[[\s\S]*?\]);\n\nexport const/);
if (!jsonMatch) {
  console.error('Failed to match PDF_GRAMMAR_POOL JSON in pdfGrammarPool.ts');
  process.exit(1);
}
const PDF_GRAMMAR_POOL = JSON.parse(jsonMatch[1]);
console.log('Loaded PDF_GRAMMAR_POOL with items:', PDF_GRAMMAR_POOL.length);

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const TOPIC_REQUIREMENTS = [
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

function select25GrammarQuestions(seenIds, seenBaseKeys) {
  const selected = [];
  const selectedIds = new Set();
  const selectedBaseKeys = new Set();

  for (const req of TOPIC_REQUIREMENTS) {
    const poolForCat = PDF_GRAMMAR_POOL.filter(q => q.category === req.category);
    
    // Select required difficulties for this category
    const diffNeeds = [
      ...Array(req.easy).fill('Easy'),
      ...Array(req.medium).fill('Medium'),
      ...Array(req.hard).fill('Hard'),
    ];

    for (const diff of diffNeeds) {
      const candidates = poolForCat.filter(q => 
        q.difficulty === diff &&
        !selectedIds.has(q.id) &&
        !selectedBaseKeys.has(q.baseSentenceKey)
      );

      // Prioritize unseen
      const unseen = candidates.filter(q => !seenIds.has(q.id) && !seenBaseKeys.has(q.baseSentenceKey));
      const poolToUse = unseen.length > 0 ? unseen : candidates;
      const shuffled = shuffleArray(poolToUse);

      let picked = shuffled[0];
      if (!picked) {
        // Fallback to any difficulty in same category not yet in test
        const anyDiff = poolForCat.filter(q => 
          !selectedIds.has(q.id) && 
          !selectedBaseKeys.has(q.baseSentenceKey)
        );
        picked = shuffleArray(anyDiff)[0];
      }

      if (picked) {
        selected.push(picked);
        selectedIds.add(picked.id);
        selectedBaseKeys.add(picked.baseSentenceKey);
      }
    }
  }

  return selected;
}

// Simulate 5 test generations
const seenIds = new Set();
const seenBaseKeys = new Set();

for (let attempt = 1; attempt <= 5; attempt++) {
  const testQuestions = select25GrammarQuestions(seenIds, seenBaseKeys);
  console.log(`\n--- Test Generation Attempt #${attempt} ---`);
  console.log('Total Questions:', testQuestions.length);
  
  const diffs = { Easy: 0, Medium: 0, Hard: 0 };
  const cats = {};
  for (const q of testQuestions) {
    diffs[q.difficulty]++;
    cats[q.category] = (cats[q.category] || 0) + 1;
    seenIds.add(q.id);
    seenBaseKeys.add(q.baseSentenceKey);
  }
  console.log('Difficulties:', diffs);
  console.log('Categories:', cats);
  
  // Verify 0 duplicates in baseSentenceKey
  const testBaseKeys = new Set(testQuestions.map(q => q.baseSentenceKey));
  console.log('Unique base sentences:', testBaseKeys.size, '/ 25');
}
