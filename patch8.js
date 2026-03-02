const fs = require('fs');
let c = fs.readFileSync('src/lib/translations.ts', 'utf8');

const imageRestorerObj = `{
            title: "이미지 복원기",
            desc: "손상된 이미지를 AI로 복원합니다.",
        }`;

const revenueCalcObj = `{
            title: "수익 계산기",
            desc: "예상 유튜브 수익을 계산합니다.",
            views: "일일 조회수",
            cpm: "예상 CPM ($)",
            resultDaily: "일일 예상 수익",
            resultMonthly: "월간 예상 수익",
            resultYearly: "연간 예상 수익",
            growthTip: "💡 성장을 위한 수익화 팁",
            guide: {
                title: "수익화 가이드",
                subtitle: "더 많은 수익을 창출하는 방법",
                sections: [
                    { title: "조회수 늘리기", content: "알고리즘을 활용한 노출 증대 방법" }
                ],
                faq: [
                    { q: "CPM이 무엇인가요?", a: "1000회 노출당 예상 광고 수익입니다." }
                ]
            }
        }`;

const screenRecorderObj = `{
            title: "화면 녹화기",
            desc: "설치 없이 브라우저에서 화면을 녹화하세요.",
            ready: "녹화 준비",
            startBtn: "녹화 시작",
            stopBtn: "녹화 종료",
            downloadBtn: "동영상 다운로드",
            webcam: "웹캠 화면 포함",
            mic: "마이크 소리 포함",
            guide: {
                title: "녹화 가이드",
                subtitle: "고화질로 화면을 기록하는 팁",
                sections: [
                    { title: "오디오 설정", content: "시스템 소리와 마이크 소리의 차이점" }
                ],
                faq: [
                    { q: "녹화 시간에 제한이 있나요?", a: "제한은 없지만 컴퓨터의 메모리에 저장됩니다." }
                ]
            }
        }`;

const megaMenuObj = `{
            title: "모든 도구 보기",
            subtitle: "10가지 이상의 무료 유틸리티를 경험해보세요",
            searchPlaceholder: "원하는 도구를 검색하세요...",
            noResults: "검색 결과가 없습니다",
            totalTools: "개의 도구가 준비되어 있습니다"
        }`;

const allToolsStr = `'모든 도구'`;

c = c.replace(/        imageRestorer: '',/g, `        imageRestorer: ${imageRestorerObj},`);
c = c.replace(/        revenueCalc: '',/g, `        revenueCalc: ${revenueCalcObj},`);
c = c.replace(/        screenRecorder: '',/g, `        screenRecorder: ${screenRecorderObj},`);
c = c.replace(/        megaMenu: '',/g, `        megaMenu: ${megaMenuObj},`);
c = c.replace(/        allTools: '',/g, `        allTools: ${allToolsStr},`);

fs.writeFileSync('src/lib/translations.ts', c);
