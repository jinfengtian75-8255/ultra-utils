const fs = require('fs');
const content = fs.readFileSync('c:/Users/jinzhexun/수익화 웹사이트 첫걸음/utility-tools/src/lib/translations.ts', 'utf8');
const lines = content.split('\n');

const langs = ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl'];
lines.forEach((line, i) => {
    const trimmed = line.trim();
    langs.forEach(lang => {
        if (trimmed.startsWith(lang + ':') || trimmed.startsWith(lang + ' :')) {
            console.log(`Line ${i + 1}: ${trimmed}`);
        }
    });
});
