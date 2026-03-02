const fs = require('fs');

const lines = fs.readFileSync('src/lib/translations.ts', 'utf8').split('\n');

const translateMap = {
    ko: {
        total: "총", screenRec: "웹화면 녹화기", revCalc: "수익 계산기", allTools: "모든 도구 보기", megaMenu: "전체 메뉴",
        screenRecObj: {
            title: "무설치 웹 화면 녹화기",
            desc: "설치 없이 브라우저에서 화면, 웹캠, 마이크를 바로 녹화하고 프리미엄 화질의 MP4로 저장하세요.",
            startBtn: "녹화 시작",
            stopBtn: "녹화 중지",
            downloadBtn: "비디오 저장 (MP4)",
            webcam: "웹캠 포함",
            mic: "마이크 사용",
            recording: "녹화 진행 중...",
            ready: "녹화 준비 완료",
            guide: {
                title: "웹 화면 녹화 마스터 가이드",
                subtitle: "고품질 강의 및 튜토리얼 제작 노하우",
                sections: [{ title: "1. 설치 없는 웹 환경이 중요한 이유", content: "프로그램 설치 없이 브라우저의 보안 샌드박스에서 구동되어 바이러스 걱정 없이 언제든 즉시 녹화할 수 있습니다." }],
                faq: [{ q: "녹화 시간 제한이 있나요?", a: "메모리 용량이 허용하는 한 무제한이나 안정성을 위해 1시간 단위 녹화를 권장합니다." }]
            }
        },
        revCalcObj: {
            title: "유튜브 수익 및 성장 분석기",
            desc: "새 영상을 기획 중이신가요? 예상 수익과 성장 전략 보고서를 받아보세요.",
            views: "일일 예상 조회수",
            cpm: "예상 CPM ($)",
            calculate: "수익 분석하기",
            resultDaily: "일일 예상 수익",
            resultMonthly: "월간 예상 수익",
            resultYearly: "연간 예상 수익",
            growthTip: "성장 가속 팁",
            guide: {
                title: "유튜브 수익 극대화 가이드",
                subtitle: "당신의 영상 RPM을 2배 높이는 전략",
                sections: [{ title: "1. CPM vs RPM 이해하기", content: "광고주가 지불하는 단가보다 실제 내 지갑에 들어오는 RPM 관리가 훨씬 중요합니다." }],
                faq: [{ q: "계산 결과는 어느 정도 정확한가요?", a: "공식 데이터를 바탕으로 산출된 추정치이며 실제 수익은 분야와 국가에 따라 달라집니다." }]
            }
        },
        megaMenuObj: {
            title: "모든 도구 찾아보기",
            subtitle: "에이전시급 퀼리티의 무료 웹 도구들",
            searchPlaceholder: "필요한 도구 검색...",
            noResults: "검색 결과가 없습니다.",
            totalTools: "개의 도구"
        }
    },
    en: {
        total: "Total", screenRec: "Screen Recorder", revCalc: "Revenue Calc", allTools: "All Tools", megaMenu: "Mega Menu",
        screenRecObj: { title: "No-Install Web Screen Recorder", desc: "Record your screen, webcam, and microphone directly.", startBtn: "Start", stopBtn: "Stop", downloadBtn: "Save", webcam: "Webcam", mic: "Mic", recording: "Recording...", ready: "Ready", guide: { title: "Guide", subtitle: "Tips", sections: [{ title: "Tips", content: "Record safely within your browser." }], faq: [{ q: "Limit?", a: "No absolute limit." }] } },
        revCalcObj: { title: "Revenue Calculator", desc: "Calculate your estimated earnings.", views: "Daily Views", cpm: "CPM ($)", calculate: "Analyze", resultDaily: "Daily", resultMonthly: "Monthly", resultYearly: "Yearly", growthTip: "Growth Tip", guide: { title: "Guide", subtitle: "Tips", sections: [{ title: "RPM", content: "RPM is key." }], faq: [{ q: "Accurate?", a: "Estimates only." }] } },
        megaMenuObj: { title: "Explore", subtitle: "Web utilities", searchPlaceholder: "Search...", noResults: "No results.", totalTools: "tools available." }
    }
};

const others = ['zh', 'ja', 'es', 'de', 'pl'];
for (const lang of others) translateMap[lang] = translateMap['en'];

const stringifyFixed = (obj, indent) => {
    let s = JSON.stringify(obj, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'").split('\\n');
    s = s.map((l, i) => i === 0 || i === s.length - 1 ? l : ' '.repeat(indent) + l);
    return s.join('\\n').replace(/^\\{\\n/, '').replace(/\\n\\}$/, '');
};

let currentLang = null;
let newLines = [];

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    newLines.push(line);

    // Detect language block
    const langMatch = line.match(/^    ([a-z]{2}): \{$/);
    if (langMatch) {
        currentLang = langMatch[1];
    }

    if (currentLang && translateMap[currentLang]) {
        // inject total after imageCopyError
        if (line.includes('imageCopyError: ')) {
            // Check if next line is already total
            if (i + 1 < lines.length && !lines[i + 1].includes('total: ')) {
                newLines.push(\`            total: '\${translateMap[currentLang].total}',\`);
            }
        }
        
        // inject navbar items after navbar -> imageRestorer
        if (line.includes('imageRestorer: ') && i - 15 > 0 && lines.slice(i-15, i+1).some(l => l.includes('navbar: {'))) {
            if (i + 1 < lines.length && !lines[i+1].includes('screenRecorder: ')) {
                newLines.push(\`            screenRecorder: '\${translateMap[currentLang].screenRec}',\`);
                newLines.push(\`            revenueCalc: '\${translateMap[currentLang].revCalc}',\`);
                newLines.push(\`            allTools: '\${translateMap[currentLang].allTools}',\`);
                newLines.push(\`            megaMenu: '\${translateMap[currentLang].megaMenu}',\`);
            }
        }
        
        // inject root objects after imageMaster ends
        if (line.match(/^        \},$/) && lines[i-1] && lines[i-1].includes(']')) {
            // this is likely the end of imageMaster or something similar.
            // Let's be safer: detect end of imageRestorer root element.
        }
    }
}

// More robust way for root elements:
// Find `    }, ` that is at indent 4, before the next language block `[lang]: { ` or ` }; `
let outLines = [];
currentLang = null;

for (let i = 0; i < newLines.length; i++) {
    const line = newLines[i];
    
    const langMatch = line.match(/^    ([a-z]{2}): \{$/);
    if (langMatch) {
        currentLang = langMatch[1];
    }
    
    if (line === '    },' && currentLang) {
        // This closes a language object block (because indent is 4 chars)
        // Wait, '    },' closes the language, '};' closes the schema.
        // Let's insert our root objects right BEFORE this line.
        // First check if they already exist
        let alreadyHasIt = false;
        for (let j = i - 1; j > i - 20; j--) {
            if (newLines[j] && newLines[j].includes('screenRecorder: {')) alreadyHasIt = true;
        }
        
        if (!alreadyHasIt) {
            const d = translateMap[currentLang];
            
            const srStr = JSON.stringify(d.screenRecObj, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
            const rcStr = JSON.stringify(d.revCalcObj, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
            const mmStr = JSON.stringify(d.megaMenuObj, null, 4).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'");
            
            const indentStr = (s) => s.split('\\n').map((l, idx) => idx===0? l : '        ' + l).join('\\n');
            
            outLines.push(\`        screenRecorder: \${indentStr(srStr)},\`);
            outLines.push(\`        revenueCalc: \${indentStr(rcStr)},\`);
            outLines.push(\`        megaMenu: \${indentStr(mmStr)}\`);
        }
    }
    
    outLines.push(line);
}

fs.writeFileSync('src/lib/translations.ts', outLines.join('\\n'), 'utf8');
console.log('DONE!');
