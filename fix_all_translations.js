const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');
let content = fs.readFileSync(filePath, 'utf8');

const locales = ['zh', 'ja', 'es', 'de', 'pl'];

const translations = {
    zh: {
        screenRecorder: {
            title: '免安装网页录屏工具',
            desc: '直接在浏览器中录制屏幕、摄像头和麦克风，无需安装任何软件即可保存为 MP4。',
            startBtn: '开始录制',
            stopBtn: '停止录制',
            downloadBtn: '保存视频 (MP4)',
            webcam: '包含摄像头',
            mic: '使用麦克风',
            recording: '正在录制...',
            ready: '准备就绪',
            guide: {
                title: '网页录屏指南',
                subtitle: '创建高质量讲座和教程的技巧',
                sections: [
                    { title: '1. 为什么免安装很重要', content: '在浏览器安全环境中安全录制，无需担心病毒。' },
                    { title: '2. 使用摄像头叠加', content: '在屏幕上展示您的面孔，与观众建立信任。' }
                ],
                faq: [
                    { q: '有时间限制吗？', a: '只要您的内存允许即可录制，但建议在 1 小时内。' }
                ]
            }
        },
        revenueCalc: {
            title: 'YouTube 收益与增长计算器',
            desc: '计算您的频道预估收益，并获取专业的增长战略报告。',
            views: '每日预估观看次数',
            cpm: '预估 CPM ($)',
            calculate: '分析收益',
            resultDaily: '每日预估收益',
            resultMonthly: '每月预估收益',
            resultYearly: '每年预估收益',
            growthTip: '增长加速建议',
            guide: {
                title: '最大化 YouTube 收益指南',
                subtitle: '提高每千次展示收益 (RPM) 的策略',
                sections: [
                    { title: '1. CPM 与 RPM', content: '管理您的实际 RPM 比关注广告主支付的费率更重要。' },
                    { title: '2. 观看时间的秘密', content: '超过 8 分钟的视频可以设置多个插播广告。' }
                ],
                faq: [
                    { q: '计算结果准确吗？', a: '这是基于数据的预估值；实际收益因领域而异。' }
                ]
            }
        }
    },
    ja: {
        screenRecorder: {
            title: 'インストール不要のウェブ画面録画',
            desc: 'ブラウザから直接画面、ウェブカメラ、マイクを録画し、MP4で保存。インストールは不要です。',
            startBtn: '録画開始',
            stopBtn: '録画停止',
            downloadBtn: 'ビデオを保存 (MP4)',
            webcam: 'ウェブカメラを含める',
            mic: 'マイクを使用',
            recording: '録画中...',
            ready: '録画準備完了',
            guide: {
                title: 'ウェブ画面録画ガイド',
                subtitle: '高品質な動画作成のコツ',
                sections: [
                    { title: '1. インストール不要のメリット', content: 'ブラウザのセキュリティ環境内で安全に録画できます。' },
                    { title: '2. カメラオーバーレイの活用', content: '画面の隅に顔を出すことで、信頼関係を築くことができます。' }
                ],
                faq: [
                    { q: '録画時間に制限はありますか？', a: '安定性のために 1 時間以内を推奨します。' }
                ]
            }
        },
        revenueCalc: {
            title: 'YouTube 収益＆成長シミュレーター',
            desc: 'チャンネルの推定収益を計算し、成長戦略を受け取りましょう。',
            views: '1 日あたりの推定視聴回数',
            cpm: '推定 CPM ($)',
            calculate: '収益を分析',
            resultDaily: '日次推定収益',
            resultMonthly: '月次推定収益',
            resultYearly: '年次推定収益',
            growthTip: '成長加速のヒント',
            guide: {
                title: 'YouTube 収益最大化ガイド',
                subtitle: 'インプレッション収益 (RPM) を高める戦略',
                sections: [
                    { title: '1. CPM vs RPM', content: '広告主が支払う単価よりも、実際の収益である RPM が重要です。' },
                    { title: '2. 視聴維持時間の秘密', content: '8 分以上の動画に広告を配置すると収益が大幅に向上します。' }
                ],
                faq: [
                    { q: '計算結果は正確ですか？', a: '公式データに基づいた推定値です。実際の収益は状況により異なります。' }
                ]
            }
        }
    },
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
                    { title: '2. Superposición de cámara', content: 'Muestre su rostro en pantalla para generar confianza con su audiencia.' }
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
    },
    pl: {
        screenRecorder: {
            title: 'Darmowy Rejestrator Ekranu Online',
            desc: 'Nagrywaj ekran i kamerę bezpośrednio w przeglądarce i zapisuj jako MP4 bez instalacji.',
            startBtn: 'Rozpocznij nagrywanie',
            stopBtn: 'Zatrzymaj nagrywanie',
            downloadBtn: 'Zapisz wideo (MP4)',
            webcam: 'Dołącz kamerę',
            mic: 'Użyj mikrofonu',
            recording: 'Nagrywanie...',
            ready: 'Gotowy do nagrywania',
            guide: {
                title: 'Przewodnik po nagrywaniu',
                subtitle: 'Wskazówki tworzenia wysokiej jakości tutoriali',
                sections: [
                    { title: '1. Bezpieczeństwo bez instalacji', content: 'Bezpieczne nagrywanie w przeglądarce bez ryzyka wirusów.' },
                    { title: '2. Nakładka kamery', content: 'Pokaż twarz, aby budować lepszą relację z widzami.' }
                ],
                faq: [
                    { q: 'Czy jest limit czasu?', a: 'Zalecamy nagrywanie do 1 godziny dla zachowania stabilności pliku.' }
                ]
            }
        },
        revenueCalc: {
            title: 'Kalkulator Zarobków i Rozwoju YouTube',
            desc: 'Oblicz szacunkowe zarobki i otrzymaj raport strategii rozwoju.',
            views: 'Dzienne wyświetlenia',
            cpm: 'Szacowany CPM ($)',
            calculate: 'Analizuj zarobki',
            resultDaily: 'Dzienny zarobek',
            resultMonthly: 'Miesięczny zarobek',
            resultYearly: 'Roczny zarobek',
            growthTip: 'Wskazówki rozwoju',
            guide: {
                title: 'Przewodnik po zarobkach',
                subtitle: 'Strategie zwiększania RPM',
                sections: [
                    { title: '1. CPM vs RPM', content: 'Ważniejszy jest rzeczywisty RPM niż stawka reklamowa.' },
                    { title: '2. Sekret czasu oglądania', content: 'Reklamy mid-roll w filmach powyżej 8 minut radykalnie zwiększają zysk.' }
                ],
                faq: [
                    { q: 'Czy obliczenia są dokładne?', a: 'To szacunki; realny zysk zależy od kraju i tematyki.' }
                ]
            }
        }
    }
};

function stringify(obj) {
    return JSON.stringify(obj, null, 12).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
}

for (const lang of locales) {
    const startPattern = `${lang}: {`;
    const startIndex = content.indexOf(startPattern);
    if (startIndex === -1) continue;

    // We search for the English placeholder blocks specifically in this language section
    const recorderSearch = 'screenRecorder: {';
    const revenueSearch = 'revenueCalc: {';

    // Find the actual blocks
    const recStart = content.indexOf(recorderSearch, startIndex);
    if (recStart === -1) continue;

    // Find end of recorder block (closing brace before megaMenu)
    const recEnd = content.indexOf('megaMenu: {', recStart);
    if (recEnd === -1) continue;

    const oldBlock = content.substring(recStart, recEnd);

    const newRecorder = `screenRecorder: ${stringify(translations[lang].screenRecorder)},\n        `;
    const newRevenue = `revenueCalc: ${stringify(translations[lang].revenueCalc)},\n        `;

    const newBlock = newRecorder + newRevenue;

    content = content.substring(0, recStart) + newBlock + content.substring(recEnd);
}

fs.writeFileSync(filePath, content);
console.log('Final localization update completed');
