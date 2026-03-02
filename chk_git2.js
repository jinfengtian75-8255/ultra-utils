const { execSync } = require('child_process');
const fs = require('fs');
let out = '';
const hashes = ['c32eace', 'ef4aaa1', '06fc5db', 'bb6c2ce', 'b497d10'];

for (const hash of hashes) {
    try {
        const c = execSync('git show ' + hash + ':src/lib/translations.ts').toString('utf8');
        out += hash + '\n';
        for (const lang of ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl']) {
            const count = (c.match(new RegExp('\\b' + lang + ': \\{', 'g')) || []).length;
            out += '  ' + lang + ': ' + count + '\n';
        }
        const megaCount = (c.match(/megaMenu: \{/g) || []).length;
        out += '  megaMenu: ' + megaCount + '\n';
    } catch (e) { }
}
fs.writeFileSync('git_translations_stats2.txt', out, 'utf8');
