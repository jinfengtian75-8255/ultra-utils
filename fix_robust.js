const fs = require('fs');
const content = fs.readFileSync('src/lib/translations.ts', 'utf8');
const lines = content.split(/\r?\n/);
let deletedIndices = [];
for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    // Find a line that is obviously corrupted (starts with comma but not in array/trailing property)
    // and contains specific Japanese/Hanja fragments
    if (line.startsWith(", pdfMasterTitle: ") && line.includes("pdfMasterDesc: ") && line.includes("coffeeDesc: ")) {
        deletedIndices.push(i);
        // If next line is a stray brace
        if (i + 1 < lines.length && lines[i + 1].trim() === '},') {
            deletedIndices.push(i + 1);
        }
    }
}
if (deletedIndices.length > 0) {
    const newLines = lines.filter((_, idx) => !deletedIndices.includes(idx));
    fs.writeFileSync('src/lib/translations.ts', newLines.join('\n'));
    console.log('Deleted indices: ' + deletedIndices.join(', '));
} else {
    // Try a second pass check for ANY line starting with comma followed by pdfMasterTitle
    for (let i = 0; i < lines.length; i++) {
        if (lines[i].includes(", pdfMasterTitle: 'PDFエディタ'")) {
            console.log('Second pass: found at index ' + i);
            lines.splice(i, 2); // remove it and maybe the next line
            fs.writeFileSync('src/lib/translations.ts', lines.join('\n'));
            break;
        }
    }
}
