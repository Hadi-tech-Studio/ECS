const fs = require('fs');
const content = fs.readFileSync('src/data/pdfGrammarPool.ts', 'utf8');

// Find ALL option values that contain page artifacts
const optionRegex = /"options":\s*\[\s*"([^"]*)",\s*"([^"]*)",\s*"([^"]*)"\s*\]/g;
let m;
let dirty = [];
let total = 0;

while ((m = optionRegex.exec(content)) !== null) {
  total++;
  const opts = [m[1], m[2], m[3]];
  for (const opt of opts) {
    if (/--/.test(opt) || /\d+ of \d+/.test(opt) || /English Communication/i.test(opt) || /Grammar Portion/i.test(opt) || /Page \d+/i.test(opt)) {
      dirty.push({ optionText: opt, position: m.index });
    }
  }
}

console.log('Total option sets:', total);
console.log('Dirty options with artifacts:', dirty.length);
if (dirty.length > 0) {
  dirty.forEach(d => console.log('  DIRTY:', JSON.stringify(d.optionText)));
}

// Also check question texts
const qRegex = /"question":\s*"([^"]*)"/g;
let qDirty = [];
let qTotal = 0;
while ((m = qRegex.exec(content)) !== null) {
  qTotal++;
  const q = m[1];
  if (/--/.test(q) || /\d+ of \d+/.test(q) || /English Communication/i.test(q) || /Grammar Portion/i.test(q) || /Page \d+/i.test(q)) {
    qDirty.push(q);
  }
}
console.log('\nTotal questions:', qTotal);
console.log('Dirty questions with artifacts:', qDirty.length);
if (qDirty.length > 0) {
  qDirty.forEach(q => console.log('  DIRTY Q:', JSON.stringify(q)));
}
