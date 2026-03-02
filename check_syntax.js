const fs = require('fs');
const content = fs.readFileSync('c:/Users/jinzhexun/수익화 웹사이트 첫걸음/utility-tools/src/lib/translations.ts', 'utf8');

try {
    // Simple check for basic syntax
    new Function(content.replace(/export /g, ''));
    console.log('Syntactically correct!');
} catch (e) {
    console.log('--- ERROR FOUND ---');
    console.error(e.message);
    if (e.stack) {
        const match = e.stack.match(/<anonymous>:(\d+):(\d+)/);
        if (match) {
            const lineNum = parseInt(match[1]);
            const colNum = parseInt(match[2]);
            console.error(`Line ${lineNum}, Col ${colNum}`);
            const lines = content.split('\n');
            for (let i = lineNum - 3; i < lineNum + 2; i++) {
                if (lines[i]) {
                    const prefix = i === lineNum - 1 ? '>> ' : '   ';
                    console.error(`${prefix}${i + 1}: ${lines[i]}`);
                }
            }
        } else {
            console.error(e.stack);
        }
    }
}
