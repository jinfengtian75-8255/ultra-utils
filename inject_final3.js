const fs = require('fs');

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

const tMap = {
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
        screenRecObj: { title: "No-Install Web Screen Recorder", desc: "Record your screen, webcam, and microphone directly in the browser.", startBtn: "Start", stopBtn: "Stop", downloadBtn: "Save", webcam: "Webcam", mic: "Mic", recording: "Recording...", ready: "Ready", guide: { title: "Guide", subtitle: "Tips", sections: [{ title: "Tips", content: "Record safely within your browser." }], faq: [{ q: "Limit?", a: "No absolute limit." }] } },
        revCalcObj: { title: "Revenue Calculator", desc: "Calculate your estimated earnings.", views: "Daily Views", cpm: "CPM ($)", calculate: "Analyze", resultDaily: "Daily", resultMonthly: "Monthly", resultYearly: "Yearly", growthTip: "Growth Tip", guide: { title: "Guide", subtitle: "Tips", sections: [{ title: "RPM", content: "RPM is key." }], faq: [{ q: "Accurate?", a: "Estimates only." }] } },
        megaMenuObj: { title: "Explore", subtitle: "Web utilities", searchPlaceholder: "Search...", noResults: "No results.", totalTools: "tools available." }
    }
};

const others = ['zh', 'ja', 'es', 'de', 'pl'];
for (const l of others) tMap[l] = tMap['en'];

const newInterfaces = `
    screenRecorder: {
        title: string;
        desc: string;
        startBtn: string;
        stopBtn: string;
        downloadBtn: string;
        webcam: string;
        mic: string;
        recording: string;
        ready: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    };
    revenueCalc: {
        title: string;
        desc: string;
        views: string;
        cpm: string;
        calculate: string;
        resultDaily: string;
        resultMonthly: string;
        resultYearly: string;
        growthTip: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    };
    megaMenu: {
        title: string;
        subtitle: string;
        searchPlaceholder: string;
        noResults: string;
        totalTools: string;
    };
}`;

// Fix Schema Schema using Regex
content = content.replace(
    /imageCopyError: string;\n\s*\}/,
    "imageCopyError: string;\n        total: string;\n    }"
);

content = content.replace(
    /imageRestorer: string;\n\s*\}/,
    "imageRestorer: string;\n        screenRecorder: string;\n        revenueCalc: string;\n        allTools: string;\n        megaMenu: string;\n    }"
);

content = content.replace(
    /(\s*imageRestorer: \{\s*title: string;[\s\S]*?guide: \{(?:[\s\S]*?\}\;\s*\}\;?)\n\})/,
    (m) => m.replace(/\}$/, '') + newInterfaces
);

const stringifyFixed = (obj) => JSON.stringify(obj, null, 8).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'").replace(/^\{\n/, '').replace(/\n\}$/, '');

const langs = ['ko', 'en', ...others];

for (const l of langs) {
    const d = tMap[l];

    // 1. common
    content = content.replace(
        new RegExp(`(^\\s{4}'?${l}'?: \\{[\\s\\S]*?imageCopyError: '.*?',\\s*)`, 'm'),
        (match) => match + `            total: '${d.total}',\n`
    );

    // 2. navbar
    content = content.replace(
        new RegExp(`(^\\s{4}'?${l}'?: \\{[\\s\\S]*?navbar: \\{[\\s\\S]*?imageRestorer: '.*?',\\s*)`, 'm'),
        (match) => match + `            screenRecorder: '${d.screenRec}',\n            revenueCalc: '${d.revCalc}',\n            allTools: '${d.allTools}',\n            megaMenu: '${d.megaMenu}',\n`
    );

    // 3. root object
    // Find the end of imageRestorer: { ... } block
    content = content.replace(
        new RegExp(`(^\\s{4}'?${l}'?: \\{[\\s\\S]*?imageRestorer: \\{[\\s\\S]*?faq:[\\s\\S]*?\\]\\s*\\}\\s*\\})`, 'm'),
        (match, group1) => {
            return group1 + `,\n        screenRecorder: {\n${stringifyFixed(d.screenRecObj)}\n        },\n        revenueCalc: {\n${stringifyFixed(d.revCalcObj)}\n        },\n        megaMenu: {\n${stringifyFixed(d.megaMenuObj)}\n        }`;
        }
    );
}

fs.writeFileSync('src/lib/translations.ts', content, 'utf8');
console.log('DONE');
