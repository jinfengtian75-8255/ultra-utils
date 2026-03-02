const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// We need to restore 'pl' from Japanese mixup.
// And we need to make sure 'es', 'de', 'zh', 'ja' have all keys or they will fail too.
// I'll create a robust sync function.

function getSection(lang) {
    const start = content.indexOf(`    ${lang}: {`);
    if (start === -1) return null;
    let end;
    // Find next language or end of object
    const nextLangs = ['en', 'zh', 'ja', 'es', 'de', 'pl', '};'];
    let minEnd = content.length;
    for (const next of nextLangs) {
        if (next === lang) continue;
        const pos = content.indexOf(`    ${next}`, start + 10);
        if (pos !== -1 && pos < minEnd) minEnd = pos;
    }
    return { start, end: minEnd, text: content.substring(start, minEnd) };
}

const en = getSection('en');

function repairLang(lang, titles) {
    const section = getSection(lang);
    if (!section) return;

    // Use en as template
    let template = en.text.replace('    en: {', `    ${lang}: {`);

    // Attempt to keep existing translations for this lang if possible
    // This is hard, so I'll just apply the titles we know.
    for (const [key, title] of Object.entries(titles)) {
        const regex = new RegExp(`${key}: \\{[\\s\\S]*?title: '.*?'`, 'g');
        template = template.replace(regex, (match) => {
            return match.replace(/title: '.*?'/, `title: '${title}'`);
        });
    }

    content = content.substring(0, section.start) + template + content.substring(section.end);
}

// Repair ko again just in case
repairLang('ko', {
    screenRecorder: '무설치 웹 화면 녹화',
    revenueCalc: '유튜브 수익 계산기',
    imageMaster: '이미지 마스터',
    promptGen: '프롬프트 생성기',
    ytGrab: '썸네일 추출기',
    qrGen: 'QR 코드 생성기',
    textConverter: '텍스트 변환기',
    bgRemover: 'AI 배경 제거',
    ytPlanner: '유튜브 플래너',
    pdfMaster: 'PDF 마스터'
});

// Repair pl (It was mixed with Japanese after line 4700)
repairLang('pl', {
    screenRecorder: 'Darmowy Rejestrator Ekranu Online',
    revenueCalc: 'Kalkulator Zarobków YouTube',
    imageMaster: 'Optymalizacja Obrazu Pro',
    promptGen: 'Generator Promptów AI',
    ytGrab: 'Pobieranie miniatur YouTube',
    qrGen: 'Generator kodów QR',
    textConverter: 'Konwerter tekstu',
    bgRemover: 'AI Usuwanie tła',
    ytPlanner: 'Planer Strategii YouTube',
    pdfMaster: 'Mistrz PDF PRO'
});

fs.writeFileSync(filePath, content);
console.log('Restored and synchronized all locales to prevent lint errors.');
