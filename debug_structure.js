const fs = require('fs');
const content = fs.readFileSync('c:/Users/jinzhexun/수익화 웹사이트 첫걸음/utility-tools/src/lib/translations.ts', 'utf8');
const lines = content.split('\n');

let braceCount = 0;
for (let i = 3926; i < 4536; i++) {
    for (const char of lines[i]) {
        if (char === '{') braceCount++;
        if (char === '}') braceCount--;
    }
}
console.log(`Level change in de: ${braceCount}`);
