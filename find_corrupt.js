const fs = require('fs');
const content = fs.readFileSync('c:/Users/jinzhexun/수익화 웹사이트 첫걸음/utility-tools/src/lib/translations.ts', 'utf8');
const lines = content.split('\n');

lines.forEach((line, i) => {
    if (line.trim().startsWith(', ')) {
        console.log(`SUSPICIOUS line ${i + 1}: ${line.trim()}`);
    }
});
