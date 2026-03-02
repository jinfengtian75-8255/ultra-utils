const fs = require('fs');

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

// I need to add imageRestorer, screenRecorder, revenueCalc, allTools, megaMenu into TranslationSchema.navbar
// And also give them an empty string value for all languages in navbar: { ... }

let mapRegex = /    navbar: {\\s*title: string;\\s*home: string;\\s*imageSuite: string;\\s*promptGen: string;\\s*ytGrab: string;\\s*qrGen: string;\\s*textConv: string;\\s*bgRemover: string;\\s*ytPlanner: string;\\s*pdfMaster: string;/;
let mapReplace = `    navbar: {
        title: string;
        home: string;
        imageSuite: string;
        promptGen: string;
        ytGrab: string;
        qrGen: string;
        textConv: string;
        bgRemover: string;
        ytPlanner: string;
        pdfMaster: string;
        imageRestorer: string;
        screenRecorder: string;
        revenueCalc: string;
        allTools: string;
        megaMenu: string;`;

content = content.replace(mapRegex, mapReplace);

const langs = ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl'];
for (const lang of langs) {
    // Find the `navbar` initialization in the exact language block
    const langNavbarRegex = new RegExp(`    ${lang}: \\{[\\s\\S]*?        navbar: \\{[\\s\\S]*?pdfMaster: '[^']*',`);
    content = content.replace(langNavbarRegex, match => {
        return match + `\n            imageRestorer: '',\n            screenRecorder: '',\n            revenueCalc: '',\n            allTools: '',\n            megaMenu: '',`;
    });
}

const langNavbarRegexStr2 = new RegExp(`    de: \\{[\\s\\S]*?        navbar: \\{[\\s\\S]*?pdfMaster: "[^"]*",`);
content = content.replace(langNavbarRegexStr2, match => {
    return match + `\n            imageRestorer: '',\n            screenRecorder: '',\n            revenueCalc: '',\n            allTools: '',\n            megaMenu: '',`;
});

const langNavbarRegexStr3 = new RegExp(`    pl: \\{[\\s\\S]*?        navbar: \\{[\\s\\S]*?pdfMaster: "[^"]*",`);
content = content.replace(langNavbarRegexStr3, match => {
    return match + `\n            imageRestorer: '',\n            screenRecorder: '',\n            revenueCalc: '',\n            allTools: '',\n            megaMenu: '',`;
});


fs.writeFileSync('src/lib/translations.ts', content);
