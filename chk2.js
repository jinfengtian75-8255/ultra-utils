const fs = require('fs');
const files = [
    'JIN ZHEXUN XXX/backups/pdf_qr_pro_v1/translations.ts',
    'JIN ZHEXUN XXX/backups/v18_안정화_번역전/lib/translations.ts',
];
let out = '';
for (const f of files) {
    try {
        const content = fs.readFileSync(f, 'utf8');
        out += f + '\n';
        for (const lang of ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl']) {
            const count = (content.match(new RegExp(lang + ': \\{', 'g')) || []).length;
            out += '  ' + lang + ': ' + count + '\n';
        }
        const bgrCount = (content.match(/bgRemover: \{/g) || []).length;
        const navCount = (content.match(/navbar: \{/g) || []).length;
        out += '  bgRemover: ' + bgrCount + '\n';
        out += '  navbar: ' + navCount + '\n';
    } catch (e) { }
}
fs.writeFileSync('stats2.txt', out, 'utf8');
