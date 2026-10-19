const fs = require('fs');

const poolCode = fs.readFileSync('src/data/pdfGrammarPool.ts', 'utf8');

// Match all pool items
const itemRegex = /\{[\s\S]*?"id":\s*"([^"]+)"[\s\S]*?"pdfNumber":\s*(\d+)[\s\S]*?"question":\s*"([^"]+)"[\s\S]*?"options":\s*\[\s*"([^"]+)",\s*"([^"]+)",\s*"([^"]+)"\s*\][\s\S]*?\}/g;

let count = 0;
let m;
const suspicious = [
  /--/,
  /page/i,
  /portion/i,
  /communication skills/i,
  /\bof \d+\b/i,
  /^\d+[\.\)]/,
  /situation/i,
  /context/i,
  /scenario/i,
  /consider/i,
  /imagine/i,
  /suppose/i,
  /note:/i,
  /hint:/i,
  /correct answer/i,
  /explanation/i
];

let suspiciousQs = [];
let suspiciousOpts = [];

while ((m = itemRegex.exec(poolCode)) !== null) {
  count++;
  const id = m[1];
  const pdfNum = m[2];
  const question = m[3];
  const opts = [m[4], m[5], m[6]];

  for (const r of suspicious) {
    if (r.test(question)) {
      suspiciousQs.push({ id, pdfNum, pattern: r.toString(), text: question });
      break;
    }
  }

  for (const opt of opts) {
    for (const r of suspicious) {
      if (r.test(opt)) {
        suspiciousOpts.push({ id, pdfNum, pattern: r.toString(), text: opt });
        break;
      }
    }
  }
}

console.log('Total items matched:', count);
console.log('Suspicious Questions:', suspiciousQs.length);
if (suspiciousQs.length > 0) {
  console.log('Sample suspicious Qs:', suspiciousQs.slice(0, 5));
}
console.log('Suspicious Options:', suspiciousOpts.length);
if (suspiciousOpts.length > 0) {
  console.log('Sample suspicious Options:', suspiciousOpts.slice(0, 5));
}
