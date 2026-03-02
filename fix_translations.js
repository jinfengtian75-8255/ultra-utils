const fs = require('fs');
const content = fs.readFileSync('src/lib/translations.ts', 'utf8');
// Find the exact broken content
const target = `, pdfMasterTitle: 'PDFエディタ', pdfMasterDesc: '結合・分割を簡単に。', imageCompTitle: '画像圧縮', imageCompDesc: '画질維持で容量削減。', ytGrabTitle: 'サムネイル抽出', ytGrabDesc: '高画質で即ダウンロード。', coffeeTitle: 'コーヒーを奢る', coffeeDesc: '開発의 励みになります！'`;
// Find and remove it along with the closing brace on the next line
const lines = content.split(/\r?\n/);
let found = -1;
for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(target)) {
        found = i;
        break;
    }
}
if (found !== -1) {
    console.log('Found broken line at ' + (found + 1));
    // Remove current line and next line if it is }
    if (lines[found + 1].trim() === '},') {
        console.log('Removing lines ' + (found + 1) + ' and ' + (found + 2));
        lines.splice(found, 2);
    } else {
        console.log('Removing line ' + (found + 1));
        lines.splice(found, 1);
    }
    fs.writeFileSync('src/lib/translations.ts', lines.join('\n'));
    console.log('Fixed.');
} else {
    console.log('Target content NOT found in translations.ts');
}
