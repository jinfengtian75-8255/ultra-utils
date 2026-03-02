const fs = require('fs');
const content = fs.readFileSync('src/lib/translations.ts', 'utf8');
const search = 'export const translations';
const idx = content.indexOf(search);
if (idx > -1) {
    fs.writeFileSync('stats4.txt', `Found at ${idx}\n${content.substring(idx, idx + 500)}`, 'utf8');
} else {
    fs.writeFileSync('stats4.txt', 'Not found', 'utf8');
}
