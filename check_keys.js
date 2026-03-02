const fs = require('fs');
const content = fs.readFileSync('src/lib/translations.ts', 'utf8');
// We can't easily require .ts, let's do a simple regex check per language
const langs = ['ko', 'en', 'zh', 'ja', 'es', 'de', 'pl'];
const keys = [
    'common', 'navbar', 'imageRestorer', 'imageMaster', 'promptGen',
    'ytGrab', 'qrGen', 'textConverter', 'bgRemover', 'pdfMaster',
    'home', 'advertise', 'footer', 'privacy', 'terms', 'about',
    'contact', 'notFound', 'feedback', 'share', 'ytPlanner', 'houseAds'
];

langs.forEach(lang => {
    // Find the start of the language block
    const langStartMatch = content.match(new RegExp(`^\\s*${lang}:\\s*\\{`, 'm'));
    if (!langStartMatch) {
        console.log(`Language ${lang} NOT FOUND`);
        return;
    }

    // Check if each key exists within a reasonable range after the language start
    // (This is a bit crude but works for detecting missing major blocks)
    const startIndex = langStartMatch.index;
    // Assume each language block is roughly within 20000 characters of its start
    const block = content.substring(startIndex, startIndex + 25000);

    keys.forEach(key => {
        if (!block.match(new RegExp(`^\\s*${key}:\\s*\\{`, 'm'))) {
            // Special check for Record types or one-liners
            if (!block.match(new RegExp(`^\\s*${key}:\\s*[\\{|\\(]`, 'm'))) {
                console.log(`Key ${key} might be missing in ${lang}`);
            }
        }
    });
});
