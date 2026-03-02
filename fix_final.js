const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

// 1. DATA DEFINITIONS (Simplified for brevity as they are already in fix_final.js)
// I'll re-include essential ones
const locs = {
    es: {
        screenRecorder: {
            title: 'Grabadora de pantalla web sin instalación',
            desc: 'Graba pantalla, cámara y micrófono directamente en el navegador y guarda como MP4 sin instalar nada.',
            startBtn: 'Iniciar grabación',
            stopBtn: 'Detener grabación',
            downloadBtn: 'Guardar video (MP4)',
            webcam: 'Incluir cámara web',
            mic: 'Usar micrófono',
            recording: 'Grabando...',
            ready: 'Listo para grabar',
            guide: {
                title: 'Guía de grabación de pantalla web',
                subtitle: 'Consejos para crear tutoriales de alta calidad',
                sections: [
                    { title: '1. Sin instalación es más seguro', content: 'Graba con seguridad dentro del navegador sin preocuparte por virus.' },
                    { title: '2. Superposición de cámara', content: 'Muestre su rostro en pantalla para facilitar la conexión con su audiencia.' }
                ],
                faq: [
                    { q: '¿Hay un límite de tiempo?', a: 'Recomendamos menos de 1 hora para asegurar la estabilidad del archivo.' }
                ]
            }
        },
        revenueCalc: {
            title: 'Calculadora de ingresos y crecimiento de YouTube',
            desc: 'Calcula ingresos estimados y recibe un informe de estrategia de crecimiento.',
            views: 'Vistas diarias estimadas',
            cpm: 'CPM estimado ($)',
            calculate: 'Analizar ingresos',
            resultDaily: 'Ingresos diarios estimados',
            resultMonthly: 'Ingresos mensuales estimados',
            resultYearly: 'Ingresos anuales estimados',
            growthTip: 'Consejos para acelerar el crecimiento',
            guide: {
                title: 'Guía para maximizar ingresos',
                subtitle: 'Estrategias para aumentar tu RPM',
                sections: [
                    { title: '1. CPM vs RPM', content: 'Es más importante gestionar tu RPM real que la tarifa bruta del anunciante.' },
                    { title: '2. El secreto del tiempo de visualización', content: 'Videos de más de 8 minutos permiten anuncios mid-roll estratégicos.' }
                ],
                faq: [
                    { q: '¿Es el cálculo exacto?', a: 'Son estimaciones basadas en datos; los ingresos reales varían por nicho.' }
                ]
            }
        }
    },
    de: {
        screenRecorder: {
            title: 'Web-Bildschirmrekorder ohne Installation',
            desc: 'Aufnahme direkt im Browser. Als MP4 speichern ohne Softwareinstallation.',
            startBtn: 'Aufnahme starten',
            stopBtn: 'Aufnahme stoppen',
            downloadBtn: 'Video speichern (MP4)',
            webcam: 'Webcam einschließen',
            mic: 'Mikrofon verwenden',
            recording: 'Aufnahme läuft...',
            ready: 'Bereit zur Aufnahme',
            guide: {
                title: 'Anleitung zur Bildschirmaufnahme',
                subtitle: 'Tipps für hochwertige Tutorials',
                sections: [
                    { title: '1. Vorteile ohne Installation', content: 'Sicher im Browser aufnehmen ohne Risiko von Schadsoftware.' },
                    { title: '2. Kamera-Overlay', content: 'Zeigen Sie Ihr Gesicht, um das Vertrauen der Zuschauer zu stärken.' }
                ],
                faq: [
                    { q: 'Gibt es ein Zeitlimit?', a: 'Wir empfehlen Aufnahmen unter 1 Stunde für optimale Stabilität.' }
                ]
            }
        },
        revenueCalc: {
            title: 'YouTube Einnahmen- & Wachstumsrechner',
            desc: 'Berechnen Sie geschätzte Einnahmen und erhalten Sie Strategie-Tipps.',
            views: 'Tägliche Aufrufe',
            cpm: 'Geschätzte CPM ($)',
            calculate: 'Einnahmen analysieren',
            resultDaily: 'Tägliche Einnahmen',
            resultMonthly: 'Monatliche Einnahmen',
            resultYearly: 'Jährliche Einnahmen',
            growthTip: 'Tipps zur Beschleunigung',
            guide: {
                title: 'Leitfaden zur Einnahmenmaximierung',
                subtitle: 'Strategien zur Steigerung Ihres RPM',
                sections: [
                    { title: '1. CPM vs RPM', content: 'Der tatsächliche RPM ist wichtiger als die Werberate.' },
                    { title: '2. Watchtime-Geheimnis', content: 'Mid-roll-Anzeigen in Videos über 8 Minuten steigern den Umsatz enorm.' }
                ],
                faq: [
                    { q: 'Ist die Berechnung genau?', a: 'Es sind Schätzwerte; reale Einnahmen hängen von der Nische ab.' }
                ]
            }
        }
    }
};

function stringify(obj) {
    return JSON.stringify(obj, null, 8).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
}

// FIX KO DUPLICATION (More robust)
const koStart = content.indexOf('ko: {');
const enStart = content.indexOf('en: {');
let koPart = content.substring(koStart, enStart);
const recorders = koPart.split('screenRecorder: {');
if (recorders.length > 2) {
    console.log('Found duplication in KO section. Cleaning up...');
    // recorders[0] is everything before first screenRecorder
    // recorders[1] is the FIRST block (German)
    // recorders[2] is the SECOND block (Korean)
    // We want to combine recorders[0] + 'screenRecorder: {' + recorders[2]
    // But wait, recorders[1] also ends with 'revenueCalc: { ... },'
    // Let's actually find the second 'screenRecorder: {' index manually.
    const firstIndex = koPart.indexOf('screenRecorder: {');
    const secondIndex = koPart.indexOf('screenRecorder: {', firstIndex + 1);
    koPart = koPart.substring(0, firstIndex) + koPart.substring(secondIndex);
    content = content.substring(0, koStart) + koPart + content.substring(enStart);
    console.log('KO duplication fixed.');
}

// APPLY ES and DE
for (const lang of ['es', 'de']) {
    const langStart = content.indexOf(`\n    ${lang}: {`);
    if (langStart === -1) continue;

    const recSearch = 'screenRecorder: {';
    const recStart = content.indexOf(recSearch, langStart);
    if (recStart === -1) continue;

    const megaSearch = 'megaMenu: {';
    const megaStart = content.indexOf(megaSearch, recStart);
    if (megaStart === -1) continue;

    const replacement = `screenRecorder: ${stringify(locs[lang].screenRecorder)},\n        revenueCalc: ${stringify(locs[lang].revenueCalc)},\n        `;
    content = content.substring(0, recStart) + replacement + content.substring(megaStart);
    console.log(`Applied ${lang} fix.`);
}

fs.writeFileSync(filePath, content);
console.log('Final fix applied successfully.');
