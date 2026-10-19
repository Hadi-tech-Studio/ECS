const fs = require('fs');
const content = fs.readFileSync('src/data/pdfGrammarPool.ts', 'utf8');

// Find lines around "My workload is not as heavy"
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes('My workload is not as heavy')) {
    // Print surrounding context (the options)
    const start = Math.max(0, i - 2);
    const end = Math.min(lines.length - 1, i + 12);
    console.log('=== Found at line ' + (i+1) + ' ===');
    for (let j = start; j <= end; j++) {
      console.log((j+1) + ': ' + lines[j]);
    }
    console.log('');
  }
}
