const fs = require('fs');
const files = [
    'src_backup_v19_translation_start/lib/translations.ts',
    'JIN ZHEXUN XXX/backups/smart_mobile_v1/translations.ts',
    'JIN ZHEXUN XXX/backups/pdf_qr_pro_v1/translations.ts',
    'JIN ZHEXUN XXX/backups/v18_안정화_번역전/lib/translations.ts',
    'src/lib/translations.ts.v5_final',
    'JIN ZHEXUN XXX/backups/ui_perfection_v16/translations.ts'
];
let out = '';
for (const f of files) {
    try {
        const content = fs.readFileSync(f, 'utf8');
        const koCount = (content.match(/ko: \{/g) || []).length;
        const megaCount = (content.match(/megaMenu/g) || []).length;
        out += f + ' -> size: ' + content.length + ', ko: ' + koCount + ', megaMenu: ' + megaCount + '\n';
    } catch (e) {
        // ignore
    }
}
fs.writeFileSync('stats.txt', out, 'utf8');
