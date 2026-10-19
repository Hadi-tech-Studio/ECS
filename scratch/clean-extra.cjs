const fs = require('fs');

// 1. In PracticeExamEngine.tsx, replace teal with cyan
let pe = fs.readFileSync('src/components/PracticeExamEngine.tsx', 'utf8');
pe = pe.replace(/\btext-teal-400\b/g, 'text-cyan-400');
pe = pe.replace(/\bbg-teal-500\/20\b/g, 'bg-cyan-500/20');
pe = pe.replace(/\bborder-teal-500\b/g, 'border-cyan-500');
pe = pe.replace(/\btext-teal-300\b/g, 'text-cyan-300');
fs.writeFileSync('src/components/PracticeExamEngine.tsx', pe, 'utf8');

// 2. In ExamSolutionReview.tsx, replace teal with cyan
let es = fs.readFileSync('src/components/ExamSolutionReview.tsx', 'utf8');
es = es.replace(/\bteal\b/g, 'cyan');
fs.writeFileSync('src/components/ExamSolutionReview.tsx', es, 'utf8');

// 3. In HomePage.tsx, replace green/teal/emerald
let hp = fs.readFileSync('src/components/HomePage.tsx', 'utf8');
hp = hp.replace(/from-teal-600 to-emerald-600/g, 'from-cyan-600 to-blue-600');
hp = hp.replace(/from-blue-600 to-teal-600/g, 'from-blue-600 to-indigo-600');
hp = hp.replace(/text-emerald-500/g, 'text-blue-500');
fs.writeFileSync('src/components/HomePage.tsx', hp, 'utf8');

console.log('Cleaned up teal/emerald in PracticeExamEngine, ExamSolutionReview, HomePage successfully!');
