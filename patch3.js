const fs = require('fs');

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

// fix double pdfMaster
content = content.replace('    pdfMaster: any;\n', '');

// fix duplicate pdfMaster in translation objects (since we only need the correct schema)
content = content.replace(/pdfMaster: any;\n/g, '');

const langs = ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl'];

for (const lang of langs) {
    const errorTotal = new RegExp(`    ${lang}: \\{[\\s\\S]*?        common: \\{[\\s\\S]*?        total: "",`);
    content = content.replace(errorTotal, match => {
        return match.replace(/total: "",/g, 'total: "0",');
    });

    const errorRough = new RegExp(`    ${lang}: \\{[\\s\\S]*?        bgRemover: \\{[\\s\\S]*?        roughLasso: "",`);
    content = content.replace(errorRough, match => {
        return match.replace(/roughLasso: "",/g, 'roughLasso: "",\n            smartTrim: "",\n            smartClick: "",\n            clickPrompt: "",\n            lassoPrompt: "",\n            aiThinking: "",\n            panView: "",\n            smoothStream: "",\n            brush: "",\n            selection: "",\n            smartExtract: "",\n            fontGothic: "",\n            fontSerif: "",\n            fontMono: "",\n            fontHandwriting: "",\n            fontDefault: "",');
    });
}

// Just to ensure all types are matching, I will add an index signature if possible, or I'll just remove the duplicate pdfMaster
fs.writeFileSync('src/lib/translations.ts', content);
