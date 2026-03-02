const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

const plTranslations = {
    screenRecorder: {
        title: 'Darmowy Rejestrator Ekranu Online',
        desc: 'Nagrywaj ekran, kamerę i mikrofon bezpośrednio w przeglądarce i zapisuj jako MP4 bez instalowania oprogramowania.',
        startBtn: 'Rozpocznij nagrywanie',
        stopBtn: 'Zatrzymaj nagrywanie',
        downloadBtn: 'Zapisz wideo (MP4)',
        webcam: 'Dołącz kamerę',
        mic: 'Użyj mikrofonu',
        recording: 'Nagrywanie...',
        ready: 'Gotowy do nagrywania',
        guide: {
            title: 'Przewodnik po nagrywaniu ekranu',
            subtitle: 'Wskazówki dotyczące tworzenia wysokiej jakości prezentacji i tutoriali',
            sections: [
                { title: '1. Zalety braku instalacji', content: 'Nagrywaj bezpiecznie w środowisku przeglądarki bez obaw o wirusy.' },
                { title: '2. Korzystanie z nakładki kamery', content: 'Pokaż swoją twarz na ekranie, aby budować zaufanie u swoich widzów.' }
            ],
            faq: [
                { q: 'Czy jest limit czasu?', a: 'Możesz nagrywać tak długo, jak pozwala pamięć komputera, ale zalecamy sesje poniżej 1 godziny.' }
            ]
        }
    },
    revenueCalc: {
        title: 'Kalkulator Zarobków i Rozwoju YouTube',
        desc: 'Oblicz szacunkowe zarobki swojego kanału i otrzymaj profesjonalny raport strategii rozwoju.',
        views: 'Szacowana dzienna liczba wyświetleń',
        cpm: 'Szacowany CPM ($)',
        calculate: 'Analizuj zarobki',
        resultDaily: 'Szacowany dzienny zarobek',
        resultMonthly: 'Szacowany miesięczny zarobek',
        resultYearly: 'Szacowany roczny zarobek',
        growthTip: 'Wskazówki dotyczące przyspieszenia rozwoju',
        guide: {
            title: 'Przewodnik po maksymalizacji zarobków',
            subtitle: 'Strategie zwiększania przychodu (RPM)',
            sections: [
                { title: '1. CPM vs RPM', content: 'Ważniejsze jest zarządzanie rzeczywistym RPM niż stawką, którą płacą reklamodawcy.' },
                { title: '2. Sekret czasu oglądania', content: 'Umieszczanie reklam w trakcie filmu (mid-roll) w wideo powyżej 8 minut ma ogromny wpływ na zarobki.' }
            ],
            faq: [
                { q: 'Czy obliczenia są w 100% dokładne?', a: 'To szacunki oparte na oficjalnych danych; rzeczywiste zarobki różnią się w zależności od kraju i tematyki.' }
            ]
        }
    }
};

// Find 'pl: {'
const plStart = content.indexOf('pl: {');
let plBlock = content.substring(plStart);
const plEnd = plBlock.indexOf('    }') + plStart + 5; // Rough end

// Replace screenRecorder in PL
const srStart = content.indexOf('screenRecorder: {', plStart);
const srEnd = content.indexOf('},', srStart + 20) + 2;
// Actually it has nested objects, so we need to be careful.
// I'll just replace the whole tool blocks.

function replaceTool(langStart, toolName, newObj) {
    const toolHeader = toolName + ': {';
    const start = content.indexOf(toolHeader, langStart);
    if (start === -1) return;

    // Find matching closing brace for the tool
    let depth = 0;
    let end = -1;
    for (let i = start; i < content.length; i++) {
        if (content[i] === '{') depth++;
        if (content[i] === '}') {
            depth--;
            if (depth === 0) {
                end = i + 1;
                if (content[i + 1] === ',') end++;
                break;
            }
        }
    }

    if (end !== -1) {
        const replacement = `${toolName}: ${JSON.stringify(newObj, null, 20).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'")},\n`;
        // Fix indentation
        const indented = replacement.split('\n').map(line => '        ' + line).join('\n').trim();
        content = content.substring(0, start) + indented + content.substring(end);
    }
}

replaceTool(plStart, 'screenRecorder', plTranslations.screenRecorder);
// Re-find plStart because content changed
const plStart2 = content.indexOf('pl: {');
replaceTool(plStart2, 'revenueCalc', plTranslations.revenueCalc);

fs.writeFileSync(filePath, content);
console.log('Applied exact Polish translations for Screen Recorder and Revenue Calculator.');
