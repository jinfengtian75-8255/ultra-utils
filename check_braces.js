const fs = require('fs');
const content = fs.readFileSync('c:/Users/jinzhexun/수익화 웹사이트 첫걸음/utility-tools/src/lib/translations.ts', 'utf8');

let braceCount = 0;
let lineNum = 1;
const lines = content.split('\n');

for (let i = 0; i < content.length; i++) {
    const char = content[i];
    if (char === '{') { braceCount++; }
    if (char === '}') { braceCount--; }
    if (char === '\n') {
        if (lineNum >= 3304 && braceCount === 1) {
            console.log(`FIRST CLOSED AT line ${lineNum}: ${lines[lineNum - 1]}`);
            process.exit(0);
        }
        lineNum++;
    }
}
