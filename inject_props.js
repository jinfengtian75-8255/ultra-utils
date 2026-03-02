const fs = require('fs');

const data = {
    ko: {
        cTotal: "총",
        nScreen: "웹화면 녹화기",
        nRev: "수익 계산기",
        nAll: "모든 도구 보기",
        nMega: "전체 메뉴",
        screenRec: {
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
                sections: [
                    { title: "1. 설치 없는 웹 환경이 중요한 이유", content: "프로그램 설치 없이 브라우저의 보안 샌드박스에서 구동되어 바이러스 걱정 없이 언제든 즉시 녹화할 수 있습니다." },
                    { title: "2. 카메라 오버레이 활용법", content: "화면 구석에 얼굴이 나오는 PIP(Picture-in-Picture) 기능을 사용하면 시청자와의 신뢰도를 크게 높일 수 있습니다." }
                ],
                faq: [
                    { q: "녹화 시간 제한이 있나요?", a: "메모리 용량이 허용하는 한 무제한이나 안정성을 위해 1시간 단위 녹화를 권장합니다." }
                ]
            }
        },
        rev: {
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
                sections: [
                    { title: "1. CPM vs RPM 이해하기", content: "광고주가 지불하는 단가보다 실제 내 지갑에 들어오는 RPM 관리가 훨씬 중요합니다. 영상 길이에 맞는 전략을 세우세요." },
                    { title: "2. 시청 지속 시간의 비밀", content: "8분을 넘는 영상에는 미드롤(중간) 광고를 여러 개 배치할 수 있습니다. 단 1분의 차이가 수익을 3배 바꿀 수 있습니다." }
                ],
                faq: [
                    { q: "계산 결과는 어느 정도 정확한가요?", a: "공식 데이터를 바탕으로 산출된 추정치이며 실제 수익은 분야(Niche)와 국가에 따라 달라집니다." }
                ]
            }
        },
        mega: {
            title: "모든 도구 찾아보기",
            subtitle: "에이전시급 퀼리티의 무료 웹 도구들",
            searchPlaceholder: "필요한 도구 검색... (예: 배경 제거)",
            noResults: "검색 결과가 없습니다.",
            totalTools: "개의 도구가 준비되어 있습니다."
        }
    },
    en: {
        cTotal: "Total",
        nScreen: "Screen Recorder",
        nRev: "Revenue Calc",
        nAll: "All Tools",
        nMega: "Mega Menu",
        screenRec: {
            title: "No-Install Web Screen Recorder",
            desc: "Record your screen, webcam, and microphone directly in the browser and save as MP4 without installing any software.",
            startBtn: "Start Recording",
            stopBtn: "Stop Recording",
            downloadBtn: "Save Video (MP4)",
            webcam: "Include Webcam",
            mic: "Use Microphone",
            recording: "Recording in progress...",
            ready: "Ready to Record",
            guide: {
                title: "Screen Recording Mastery",
                subtitle: "Tips for recording high-quality tutorials",
                sections: [
                    { title: "1. Why Browser-Based Matters", content: "Record safely within your browser's security sandbox, completely free of malware risks." },
                    { title: "2. Webcam Overlay Strategy", content: "Using picture-in-picture builds extreme trust with your audience instantly." }
                ],
                faq: [
                    { q: "Is there a time limit?", a: "You can record as long as your memory allows, but we recommend sub-1-hour segments for stability." }
                ]
            }
        },
        rev: {
            title: "YouTube Revenue & Growth Calculator",
            desc: "Calculate your estimated earnings and receive an automated growth strategy report.",
            views: "Daily Estimated Views",
            cpm: "Estimated CPM ($)",
            calculate: "Analyze Revenue",
            resultDaily: "Daily Estimated Earnings",
            resultMonthly: "Monthly Estimated Earnings",
            resultYearly: "Yearly Estimated Earnings",
            growthTip: "Growth Acceleration Tip",
            guide: {
                title: "Guide to Maximizing YouTube Revenue",
                subtitle: "Strategies to increase your RPM",
                sections: [
                    { title: "1. CPM vs RPM", content: "Managing actual RPM is much more important than focusing on what advertisers pay." },
                    { title: "2. The Secret of Watch Time", content: "Videos over 8 minutes allow for multiple mid-roll ads, drastically increasing revenue." }
                ],
                faq: [
                    { q: "How accurate are the results?", a: "These are data-driven estimates; actual revenue heavily depends on your specific niche and geography." }
                ]
            }
        },
        mega: {
            title: "Explore All Tools",
            subtitle: "Agency-quality free web utilities",
            searchPlaceholder: "Search for a tool... (e.g. background remover)",
            noResults: "No results found.",
            totalTools: "tools available for your workflow."
        }
    }
};

const others = ['zh', 'ja', 'es', 'de', 'pl'];
for (const lang of others) {
    // Fallback to English for the rest to avoid massive data object and keep script clean
    data[lang] = data['en'];
}

let content = fs.readFileSync('src/lib/translations.ts', 'utf8');

for (const lang of Object.keys(data)) {
    const d = data[lang];

    // Inject common.total
    const commonRegex = new RegExp(`(${lang}: \\{[\\s\\S]*?common: \\{[\\s\\S]*?)(imageCopyError:.*?)(,\\s*\\})`);
    content = content.replace(commonRegex, (match, prefix, lastKey, suffix) => {
        if (!content.includes('total:')) return prefix + lastKey + `,\n            total: '${d.cTotal}'` + suffix;
        return match;
    });

    // Inject navbar fields
    const navRegex = new RegExp(`(${lang}: \\{[\\s\\S]*?navbar: \\{[\\s\\S]*?)(imageRestorer:.*?)(,\\s*\\})`);
    content = content.replace(navRegex, (match, prefix, lastKey, suffix) => {
        if (!content.includes('megaMenu:')) return prefix + lastKey + `,\n            screenRecorder: '${d.nScreen}',\n            revenueCalc: '${d.nRev}',\n            allTools: '${d.nAll}',\n            megaMenu: '${d.nMega}'` + suffix;
        return match;
    });

    // Inject the root models at the end of the language block
    // We look for "imageRestorer: { ... }" block closing inside the language
    // It ends with \n        }
    const blockEndRegex = new RegExp(`(${lang}: \\{[\\s\\S]*?imageRestorer: \\{[\\s\\S]*?guide: \\{[\\s\\S]*?faq: \\[[\\s\\S]*?\\][^}]*\\}[^}]*\\})(\n    [},])`);

    const stringifyFixed = (obj) => JSON.stringify(obj, null, 8).replace(/"([^"]+)":/g, '$1:').replace(/"/g, "'").replace(/^\{\n/, '').replace(/\n\}$/, '');

    content = content.replace(blockEndRegex, (match, body, suffix) => {
        const srCode = `,\n        screenRecorder: {\n${stringifyFixed(d.screenRec)}\n        }`;
        const rcCode = `,\n        revenueCalc: {\n${stringifyFixed(d.rev)}\n        }`;
        const megaCode = `,\n        megaMenu: {\n${stringifyFixed(d.mega)}\n        }`;
        return body + srCode + rcCode + megaCode + suffix;
    });
}

fs.writeFileSync('src/lib/translations.ts', content, 'utf8');
console.log('Done!');
