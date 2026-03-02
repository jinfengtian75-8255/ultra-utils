const fs = require('fs');
const files = [
    'src/lib/translations.ts.v5_final'
];
let out = '';
for (const f of files) {
    try {
        const content = fs.readFileSync(f, 'utf8');
        out += f + '\n';
        for (const lang of ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl']) {
            const count = (content.match(new RegExp('\\b' + lang + ': \\{', 'g')) || []).length;
            out += '  ' + lang + ': ' + count + '\n';
        }
        const bgrCount = (content.match(/bgRemover: \{/g) || []).length;
        const navCount = (content.match(/navbar: \{/g) || []).length;
        out += '  bgRemover: ' + bgrCount + '\n';
        out += '  navbar: ' + navCount + '\n';
    } catch (e) { }
}
fs.writeFileSync('stats3.txt', out, 'utf8');
