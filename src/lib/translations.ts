export type Language = 'ko' | 'en' | 'zh';

// Define the structure once
export interface TranslationSchema {
    common: {
        settings: string;
        download: string;
        processing: string;
        apply: string;
        cancel: string;
        error: string;
        success: string;
        selectImage: string;
        dropHere: string;
        orClick: string;
        shareResult: string;
        copiedLink: string;
    },
    navbar: {
        title: string;
        home: string;
        imageSuite: string;
        promptGen: string;
        ytGrab: string;
        qrGen: string;
        textConv: string;
        bgRemover: string;
        ytPlanner: string;
    },
    imageMaster: {
        title: string;
        desc: string;
        quality: string;
        size: string;
        width: string;
        height: string;
        smartEnhance: string;
        smartEnhanceDesc: string;
        original: string;
        optimized: string;
        saveMsg: string;
        applyOptimize: string;
        downloadOptimized: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    promptGen: {
        title: string;
        desc: string;
        platform: string;
        genre: string;
        subject: string;
        subjectPlaceholder: string;
        details: string;
        detailsPlaceholder: string;
        outputTitle: string;
        copy: string;
        copied: string;
        placeholder: string;
        platforms: {
            midjourney: string;
            suno: string;
            stableDiffusion: string;
        };
        genres: Record<string, string>;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    ytGrab: {
        title: string;
        desc: string;
        placeholder: string;
        getBtn: string;
        invalidUrl: string;
        fetching: string;
        downloadHd: string;
        editBtn: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    qrGen: {
        title: string;
        desc: string;
        target: string;
        fgColor: string;
        bgColor: string;
        size: string;
        downloadPng: string;
        vectorReady: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    textConverter: {
        title: string;
        desc: string;
        inputPlaceholder: string;
        statsCharacters: string;
        statsWords: string;
        statsLines: string;
        categoryCase: string;
        categoryCleanup: string;
        categoryWeb: string;
        categoryData: string;
        btnUppercase: string;
        btnLowercase: string;
        btnCapitalize: string;
        btnTrim: string;
        btnRemoveEmpty: string;
        btnRemoveDupes: string;
        btnRemoveDupesWords: string;
        btnUrlEncode: string;
        btnUrlDecode: string;
        btnBase64Encode: string;
        btnBase64Decode: string;
        btnJsonFormat: string;
        btnSortAz: string;
        btnSortZa: string;
        btnCopy: string;
        btnCopied: string;
        btnClear: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    bgRemover: {
        title: string;
        desc: string;
        preparing: string;
        processing: string;
        modelLoading: string;
        downloadReady: string;
        dropMsg: string;
        comparison: string;
        stepFetch: string;
        stepModel: string;
        stepInference: string;
        refineTitle: string;
        refineDesc: string;
        brushRestore: string;
        brushErase: string;
        brushSize: string;
        applyRefine: string;
        cancelRefine: string;
        stickerEffect: string;
        stickerColor: string;
        backgroundColor: string;
        bgTransparent: string;
        bgSolid: string;
        bgGradient: string;
        bgImage: string;
        undo: string;
        redo: string;
        reset: string;
        zoom: string;
        showGuide: string;
        idPhoto: string;
        passport: string;
        usVisa: string;
        idCard: string;
        bgLibrary: string;
        designTemplates: string;
        templateInsta: string;
        templateYoutube: string;
        templateProduct: string;
        batchMode: string;
        batchProcessing: string;
        batchUploadMore: string;
        batchStart: string;
        batchRemaining: string;
        batchComplete: string;
        uploadCustomBg: string;
        addText: string;
        deleteText: string;
        deleteImage: string;
        resetPos: string;
        subjectScale: string;
        brightness: string;
        contrast: string;
        saturation: string;
        filterPresets: string;
        filterOriginal: string;
        filterBW: string;
        filterSepia: string;
        filterWarm: string;
        filterCool: string;
        filterVintage: string;
        textEditing: string;
        textPlaceholder: string;
        textSize: string;
        stickerWidth: string;
        shortsCrop: string;
        share: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    pdfMaster: {
        title: string;
        desc: string;
        merge: string;
        split: string;
        toImage: string;
        uploadMsg: string;
        filesSelected: string;
        mergeNow: string;
        splitNow: string;
        downloadMerged: string;
        downloadSplit: string;
        addMore: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
    home: {
        badge: string;
        titlePrefix: string;
        titleSuffix: string;
        desc: string;
        descLine2: string;
        launchTool: string;
    },
    advertise: {
        title: string;
        desc: string;
        slotsTitle: string;
        formTitle: string;
        name: string;
        email: string;
        dates: string;
        message: string;
        submit: string;
        success: string;
        slotTop: string;
        slotSide: string;
        slotBottom: string;
        faq: { q: string; a: string }[];
    },
    houseAds: {
        bgRemoverTitle: string;
        bgRemoverDesc: string;
        ytGrabTitle: string;
        ytGrabDesc: string;
        imageCompTitle: string;
        imageCompDesc: string;
        pdfMasterTitle: string;
        pdfMasterDesc: string;
        coffeeTitle: string;
        coffeeDesc: string;
    },
    footer: {
        tools: string;
        resources: string;
        legal: string;
        support: string;
        privacy: string;
        terms: string;
        advertise: string;
        coffee: string;
        allRights: string;
        social: string;
        about: string;
        contact: string;
    },
    privacy: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    },
    terms: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    },
    about: {
        title: string;
        subtitle: string;
        sections: { title: string; content: string }[];
    },
    contact: {
        title: string;
        subtitle: string;
        desc: string;
        infoTitle: string;
        infoEmail: string;
        infoResponse: string;
    },
    notFound: {
        title: string;
        desc: string;
        backHome: string;
    },
    feedback: {
        title: string;
        useful: string;
        neutral: string;
        improve: string;
        placeholder: string;
        submit: string;
        success: string;
        commitment: string;
    },
    share: {
        title: string;
        copy: string;
        copied: string;
        twitter: string;
        facebook: string;
        whatsapp: string;
    },
    ytPlanner: {
        title: string;
        desc: string;
        placeholder: string;
        generateBtn: string;
        generating: string;
        tabTitles: string;
        tabScripts: string;
        tabTags: string;
        tabStrategy: string;
        videoType: string;
        vlog: string;
        info: string;
        review: string;
        shorts: string;
        topic: string;
        topicPlaceholder: string;
        advancedOptions: string;
        tone: string;
        toneFunny: string;
        toneSerious: string;
        toneProfessional: string;
        targetAudience: string;
        targetGeneral: string;
        targetExpert: string;
        targetBeginner: string;
        resultsTitle: string;
        setupTab: string;
        resultsTab: string;
        copyAll: string;
        copied: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    }
}

export const translations: Record<Language, TranslationSchema> = {
    ko: {
        common: {
            settings: '설정',
            download: '다운로드',
            processing: '처리 중...',
            apply: '적용',
            cancel: '취소',
            error: '오류',
            success: '성공',
            selectImage: '이미지 선택',
            dropHere: '이미지를 이곳에 드롭하세요',
            orClick: '또는 클릭하여 파일을 선택하세요',
            shareResult: '결과 공유하기',
            copiedLink: '링크가 복사되었습니다!',
        },
        navbar: {
            title: '나만의 유틸리티',
            home: '홈',
            imageSuite: '이미지 마스터',
            promptGen: '프롬프트 생성기',
            ytGrab: 'YouTube 추출기',
            qrGen: 'QR 생성기',
            textConv: '텍스트 변환기',
            bgRemover: '배경 제거',
            ytPlanner: '유튜브 기획기',
        },
        imageMaster: {
            title: '이미지 압축 및 최적화',
            desc: '품질 손실 없이 용량을 줄이고 웹 성능을 극대화하세요. AI 기반의 스마트 알고리즘이 이미지의 선명도를 유지합니다.',
            quality: '압축 품질 설정',
            size: '해상도 조절',
            width: '가로 너비 (px)',
            height: '세로 높이 (px)',
            smartEnhance: 'AI 스마트 개선',
            smartEnhanceDesc: '압축 중 손실될 수 있는 미세한 디테일과 텍스처를 AI가 실시간으로 분석하여 복원합니다.',
            original: '원본 이미지',
            optimized: '최적화된 이미지',
            saveMsg: '원본 대비 {percent}% 용량 절감 완료',
            applyOptimize: '지금 최적화하기',
            downloadOptimized: '최적화 이미지 저장',
            guide: {
                title: '이미지 최적화 가이드',
                subtitle: '웹 성능 향상을 위한 핵심 팁',
                sections: [
                    {
                        title: '1. 이미지 압축이 웹사이트 속도와 SEO에 미치는 영향',
                        content: '오늘날의 웹 검색 결과에서 페이지 로딩 속도는 매우 핵심적인 순위 결정 요소입니다. 평범한 웹사이트 용량의 절반 이상이 이미지 파일에서 발생한다는 사실을 알고 계셨나요? 이미지 마스터 슈트를 사용하면 눈으로 식별하기 어려운 수준의 품질 차이만으로 파일 용량을 최대 80-90%까지 줄일 수 있습니다. 이는 사용자의 체류 시간을 늘리고 이탈률을 줄여 구글 검색 상단에 오르는 데 직접적인 도움을 줍니다.'
                    },
                    {
                        title: '2. JPEG vs PNG: 상황에 맞는 올바른 포맷 선택법',
                        content: '모든 이미지가 같은 방식으로 압축되지는 않습니다. 인물의 사진이나 복잡한 풍경 사진은 JPEG 형식을 사용하는 것이 압축 효율이 가장 좋습니다. 반면, 배경이 투명해야 하거나 로고, 텍스트가 포함된 그래픽 요소는 PNG 형식을 권장합니다. 우리 도구는 두 형식 모두 지원하며, 각 포맷에 최적화된 압축 알고리즘을 적용합니다.'
                    },
                    {
                        title: '3. AI 스마트 개선 기능이 특별한 이유',
                        content: '일반적인 압축 도구는 용량을 줄이는 데만 집중하여 이미지가 흐릿해지는 경우가 많습니다. UltraUtils의 스마트 개선 기능은 딥러닝 기반의 알고리즘을 사용하여 이미지의 경계선(Edges)을 보호하고 질감을 유지합니다. 고품질 포트폴리오나 쇼핑몰 결과물이 필요하다면 이 기능을 반드시 활성화하여 최상의 결과물을 얻으세요.'
                    },
                    {
                        title: '4. 웹 접근성과 이미지 최적화의 연관성',
                        content: '저속 인터넷 환경이나 모바일 기기를 사용하는 사용자들에게 고용량 이미지는 큰 장벽이 될 수 있습니다. 모든 사용자에게 쾌적한 경험을 제공하는 것은 웹 표준의 기본입니다. 이미지 마스터는 단순히 기술적인 압축을 넘어, 모든 디지털 환경에서의 평등한 접근성을 보장하기 위한 필수적인 첫걸음입니다.'
                    }
                ],
                faq: [
                    { q: '이미지를 압축하면 화질이 얼마나 나빠지나요?', a: '기본 설정인 80-90% 품질에서는 육안으로 차이를 느끼기 거의 불가능합니다. 특수 목적이 아니라면 이 수치를 권장합니다.' },
                    { q: '여러 장의 사진을 한 번에 처리할 수 있나요?', a: '현재는 정교한 최적화를 위해 한 장씩 처리하는 방식을 제공하며, 대량 일괄 처리 기능은 곧 업데이트될 예정입니다.' },
                    { q: '최대 업로드 가능한 용량이 얼마인가요?', a: '파일당 약 20MB 이하를 권장합니다. 그 이상의 파일도 처리는 가능하지만 브라우저 환경에 따라 속도가 느려질 수 있습니다.' },
                    { q: '내 사진이 서버에 유출될 위험은 없나요?', a: '절대 없습니다. UltraUtils의 모든 처리는 귀하의 브라우저 로컬 환경에서만 수행되며, 데이터는 어디로도 전송되지 않습니다.' }
                ]
            }
        },
        promptGen: {
            title: 'AI 프롬프트 생성기',
            desc: 'Suno, Midjourney 등을 위한 완벽한 프롬프트를 만드세요.',
            platform: '플랫폼',
            genre: '장르/분위기',
            subject: '주제/내용',
            subjectPlaceholder: '무엇에 대한 것인가요?',
            details: '상세 묘사',
            detailsPlaceholder: '스타일, 조명, 악기 등 추가하고 싶은 세부 사항을 입력하세요...',
            outputTitle: '생성된 프롬프트',
            copy: '복사',
            copied: '복사됨!',
            placeholder: '프롬프트가 여기에 표시됩니다...',
            platforms: {
                midjourney: 'Midjourney',
                suno: 'Suno',
                stableDiffusion: 'Stable Diffusion',
            },
            genres: {
                'K-Pop': 'K-Pop',
                'Lofi': 'Lofi',
                'Jazz': '재즈',
                'Rock': '락',
                'Electronic': '일렉트로닉',
                'Acoustic': '어쿠스틱',
                'Cinematic': '시네마틱',
                'Anime': '애니메이션',
                'Cyberpunk': '사이버펑크',
                'Minimalist': '미니멀리즘',
                '3D Render': '3D 렌더링',
                'Oil Painting': '유화',
            },
            guide: {
                title: 'AI 프롬프트 마스터 가이드',
                subtitle: 'Midjourney와 Suno를 위한 고품질 프롬프트 작성법',
                sections: [
                    {
                        title: 'Midjourney 프롬프트 팁',
                        content: '주제 뒤에 스타일(예: Cinematic)과 디테일(예: 8k, highly detailed)을 추가하고, 파라미터(--ar 16:9)를 활용하여 구도를 잡으세요.'
                    },
                    {
                        title: 'Suno 음악 생성 팁',
                        content: '장르 태그[K-Pop, Jazz]를 대괄호와 함께 사용하고, 가사의 분위기나 사용될 악기를 상세 묘사에 포함하면 더 정확한 음악이 생성됩니다.'
                    }
                ],
                faq: [
                    { q: '프롬프트가 왜 중요한가요?', a: 'AI는 입력된 텍스트의 구체성에 따라 결과물의 품질이 결정됩니다. 명확한 지침은 AI가 의도를 정확히 파악하게 돕습니다.' },
                    { q: '다른 AI에서도 사용 가능한가요?', a: '네, 여기서 생성된 기본 프롬프트는 DALL-E, Stable Diffusion 등 대부분의 이미지 AI에서도 훌륭하게 작동합니다.' }
                ]
            }
        },
        ytGrab: {
            title: 'YouTube 썸네일 추출',
            desc: '클릭 한 번으로 고화질 YouTube 썸네일을 획득하세요.',
            placeholder: 'https://www.youtube.com/watch?v=... 주소를 입력하세요',
            getBtn: '고화질 썸네일 가져오기',
            invalidUrl: '입력하신 URL 형식이 유효하지 않습니다. 다시 한번 확인해 주세요.',
            fetching: 'YouTube 서버로부터 썸네일 데이터를 불러오는 중...',
            downloadHd: '최고 화질(HD) 즉시 다운로드',
            editBtn: 'AI 배경 제거 및 편집',
            guide: {
                title: '썸네일 추출 활용 가이드',
                subtitle: '저작권 및 활용 팁',
                sections: [
                    {
                        title: '1. 썸네일 추출기가 필요한 5가지 대표적인 상황',
                        content: '많은 전문 크리에이터들이 썸네일 추출기를 사용하는 이유는 단순히 이미지를 저장하기 위함이 아닙니다.\n• 경쟁 채널의 썸네일 디자인 요소를 분석할 때\n• 자신의 채널에서 썸네일 원본 파일을 분실했을 때\n• 블로그나 뉴스 기사에 유튜브 영상을 인용하며 고화질 이미지가 필요할 때\n• SNS 공유용 카드 뉴스를 제작할 때\n• 유튜브 쇼츠(Shorts)의 매력적인 프레임을 캡처하고 싶을 때'
                    },
                    {
                        title: '2. 4K 및 Full HD 해상도 보장 여부',
                        content: '우리 도구는 유튜브 API를 통해 제공 가능한 가장 높은 해상도인 `maxresdefault.jpg`를 우선적으로 탐색합니다. 영상 제작자가 고화질 썸네일을 업로드했다면, 1080p 이상의 깨끗한 원본 이미지를 그대로 가져올 수 있습니다. 만약 원본 영상의 화질이 낮거나 오래된 영상이라면, 차선책으로 `hqdefault` 등 가능한 최선의 이미지를 자동으로 제공합니다.'
                    },
                    {
                        title: '3. YouTube 쇼츠(Shorts) 지원 완벽 지원',
                        content: '일반 영상과 주소 체계가 다른 쇼츠 영상도 완벽하게 지원합니다. `youtube.com/shorts/...` 주소만 복사해서 붙여넣으세요. 세로형 영상 특유의 썸네일 비율을 그대로 유지하며 고화질로 추출해 드립니다.'
                    },
                    {
                        title: '4. 저작권과 정당한 사용(Fair Use) 가이드',
                        content: '추출된 썸네일은 본질적으로 해당 원작자의 지적 재산입니다. 이를 상업적으로 재배포하거나 무단 수정하여 사용하는 것은 법적 문제가 될 수 있습니다. 개인 비축용, 비평, 교육 또는 뉴스 보도와 같은 \'정당한 사용\'의 범주 내에서 활용하시는 것을 권장하며, 필요한 경우 반드시 원작자의 동의를 구하시기 바랍니다.'
                    }
                ],
                faq: [
                    { q: '최고 화질 다운로드 버튼이 왜 안 보이나요?', a: '영상의 화질이 충분히 높지 않거나, 업로더가 고해상도 썸네일을 설정하지 않았을 경우 유튜브 시스템에서 해당 파일을 생성하지 않습니다. 이 경우 하단의 표준 화질(SD) 이미지를 이용해 주세요.' },
                    { q: '이미지를 다운로드하면 컴퓨터에 안전한가요?', a: '네, 유튜브 공식 이미지 서버에서 직접 브라우저로 가져오는 방식이므로 어떠한 악성 코드의 위험도 없이 안전하게 저장됩니다.' },
                    { q: '썸네일 추출 후 바로 배경을 지울 수 있나요?', a: '네! 결과물 밑의 \'AI 배경 제거\' 버튼을 누르면 인물이나 특정 사물만 남기고 배경을 투명하게 만드는 편집 모드로 즉시 연결됩니다.' }
                ]
            }
        },
        qrGen: {
            title: 'QR 코드 생성',
            desc: '비즈니스, SNS, Wi-Fi 연결을 위한 맞춤형 QR 코드를 디자인하세요. 고해상도 이미지와 벡터 포맷을 지원합니다.',
            target: '연결할 웹 주소(URL) 또는 텍스트 입력',
            fgColor: 'QR 코드 강조 색상',
            bgColor: '배경 색상 설정',
            size: '출력 이미지 해상도',
            downloadPng: '고화질 PNG 저장',
            vectorReady: '출력용 고해상도 벡터 준비 작업 수행 중...',
            guide: {
                title: 'QR 코드 활용 가이드',
                subtitle: '마케팅 도구로 활용하는 기법',
                sections: [
                    {
                        title: '1. QR 코드 디자인 시 인식률을 높이는 핵심 팁',
                        content: 'QR 코드의 핵심은 \'가독성\'입니다. 배경과 코드의 대비(Contrast)가 뚜렷할수록 모든 스마트폰에서 빠르게 인식됩니다. 너무 밝은 색상보다는 어두운 계열의 색상을 권장하며, 복잡한 로고를 중앙에 배치할 경우 데이터 영역 일부가 손실되므로 인식 테스트를 거쳐야 합니다. 우리 도구는 표준 오류 복구 알고리즘을 적용하여 안정적인 인식을 보장합니다.'
                    },
                    {
                        title: '2. 오프라인 마케팅에서의 QR 코드 활용 사례',
                        content: '• 스마트 명함: 연락처와 포트폴리오 링크를 하나로 인쇄하세요.\n• 레스토랑 메뉴판: 비접촉식 메뉴 보기로 위생과 효율을 동시에 잡으세요.\n• 이벤트 입장권: 티켓 확인 프로세스를 자동화할 수 있습니다.\n• Wi-Fi 자동 연결: 번거로운 비밀번호 입력 없이 스캔 한 번으로 연결하세요.'
                    },
                    {
                        title: '3. 정적 QR 코드 vs 동적 QR 코드의 차이점',
                        content: 'UltraUtils에서 생성하는 QR 코드는 \'정적(Static)\' 방식입니다. 이는 입력된 정보가 코드 내부에 직접 들어있어 인터넷이 없어도 인식이 가능하며, 유효 기간 없이 반영구적으로 사용할 수 있다는 큰 장점이 있습니다. 다만 한 번 출력된 코드의 목적지 주소를 나중에 바꿀 수는 없으므로 생성 시 오타가 없는지 반드시 확인해야 합니다.'
                    },
                    {
                        title: '4. 출력 시 주의사항 (인쇄용 해상도)',
                        content: '명함이나 전단지 등 오프라인 매체에 인쇄할 때는 충분한 해상도가 필요합니다. 도구 설정에서 크기를 최대로 설정하여 다운로드하면 인쇄 시 뭉개짐 없이 깨끗한 결과물을 얻을 수 있습니다.'
                    }
                ],
                faq: [
                    { q: 'QR 코드가 스캔이 잘 안 됩니다. 왜 그럴까요?', a: '색상의 대비가 부족하거나, 코드를 너무 작게 인쇄했을 때 주로 발생합니다. 또한 코드 주변에 \'여백(Quiet Zone)\'이 충분하지 않아도 인식이 어려울 수 있으니 여유 공간을 확보해 주세요.' },
                    { q: '생성한 QR 코드는 상업적으로 써도 되나요?', a: '네, UltraUtils를 통해 생성된 모든 로고와 QR 코드는 상업적 용도로 사용 가능하며 어떠한 로열티나 제한도 없습니다.' },
                    { q: '한글 데이터도 입력할 수 있나요?', a: '네, URL뿐만 아니라 한글 메시지나 긴 텍스트 데이터도 인코딩하여 저장할 수 있습니다.' }
                ]
            }
        },
        textConverter: {
            title: '텍스트 변환 및 정리',
            desc: '대소문자 변환, 데이터 정제 등을 한곳에서 해결하세요.',
            inputPlaceholder: '여기에 텍스트를 입력하거나 분석할 데이터를 붙여넣으세요...',
            statsCharacters: '전체 글자 수',
            statsWords: '단어 수(공백 기준)',
            statsLines: '총 줄 수',
            categoryCase: '글자 케이스 변환',
            categoryCleanup: '텍스트 정제 및 정리',
            categoryWeb: '웹 개발 및 인코딩',
            categoryData: '데이터 정렬 및 필터링',
            btnUppercase: '전체 대문자로',
            btnLowercase: '전체 소문자로',
            btnCapitalize: '앞글자만 대문자로',
            btnTrim: '불필요한 공백 제거',
            btnRemoveEmpty: '빈 줄 삭제',
            btnRemoveDupes: '중복 줄 제거',
            btnRemoveDupesWords: '중복 단어 정리',
            btnUrlEncode: 'URL 인코딩',
            btnUrlDecode: 'URL 디코딩',
            btnBase64Encode: 'Base64 인코딩',
            btnBase64Decode: 'Base64 디코딩',
            btnJsonFormat: 'JSON 예쁘게 정렬',
            btnSortAz: '가나다순 정렬',
            btnSortZa: '내림차순 정렬',
            btnCopy: '처리 결과 복사하기',
            btnCopied: '클립보드에 복사 완료!',
            btnClear: '모든 내용 지우기',
            guide: {
                title: '텍스트 변환기 활용 가이드',
                subtitle: '업무 효율을 높이는 편집 기술',
                sections: [
                    {
                        title: '1. 텍스트 정제(Cleanup) 기능으로 데이터 품질 높이기',
                        content: '엑셀이나 웹에서 데이터를 복사해올 때 발생하는 원치 않는 중복 줄이나 불필요한 공백은 분석을 방해하는 큰 요소입니다. \'중복 줄 제거\'와 \'빈 줄 삭제\' 기능을 클릭 한 번으로 수행하여 깨끗한 원본 데이터를 확보하세요.'
                    },
                    {
                        title: '2. 개발자를 위한 인코딩 및 디코딩 유틸리티',
                        content: 'URL 파라미터나 API 응답에서 흔히 접하는 URL Encode 및 Base64 데이터를 즉시 확인해야 할 때 유용합니다. 복잡한 로컬 개발 환경을 구축할 필요 없이 브라우저에서 즉석으로 데이터를 검증하고 변환할 수 있습니다.'
                    },
                    {
                        title: '3. JSON Prettify: 가독성 높은 코드 만들기',
                        content: '한 줄로 길게 늘어진 읽기 힘든 JSON 데이터를 보기 좋게 정렬해 드립니다. 코드 리뷰나 디버깅 과정에서 데이터 구조를 한눈에 파악하는 데 큰 도움을 줍니다.'
                    }
                ],
                faq: [
                    { q: '처리할 수 있는 텍스트 양에 제한이 있나요?', a: '수만 줄의 방대한 텍스트도 처리가 가능합니다. 모든 작업은 서버를 거치지 않고 귀하의 컴퓨터에서 연산되므로 매우 빠르고 안전합니다.' },
                    { q: '한글과 영문이 섞여 있어도 잘 작동하나요?', a: '네, 다국어 유니코드를 완벽하게 지원하므로 한글, 영문, 특수문자 등이 섞인 텍스트도 문제없이 변환됩니다.' }
                ]
            }
        },
        bgRemover: {
            title: 'AI 배경 제거',
            desc: '인공지능을 사용하여 사진에서 배경을 즉시 투명하게 만듭니다.',
            preparing: 'AI 모델 준비 중...',
            processing: '배경 분석 중...',
            modelLoading: 'AI 엔진 로딩 중 (약 20MB)...',
            downloadReady: '배경이 제거된 이미지 다운로드',
            dropMsg: '사진을 여기에 놓으세요',
            comparison: '전/후 비교',
            stepFetch: '이미지 준비 중...',
            stepModel: 'AI 모델 로딩 중...',
            stepInference: '배경 제거 중...',
            refineTitle: '수동 수정 모드',
            refineDesc: '브러시를 사용하여 지워진 부분을 복구하거나 더 지울 수 있습니다.',
            brushRestore: '복구',
            brushErase: '지우개',
            brushSize: '브러시 크기',
            applyRefine: '수정 완료',
            cancelRefine: '취소',
            stickerEffect: '스티커 효과',
            stickerColor: '스티커 색상',
            backgroundColor: '배경 색상',
            bgTransparent: '투명 배경',
            bgSolid: '단색 배경',
            bgGradient: '그라데이션',
            bgImage: '이미지 배경',
            undo: '실수 취소',
            redo: '실수 복구',
            reset: '초기화',
            zoom: '확대/축소',
            showGuide: '가이드 표시',
            idPhoto: 'ID 증명사진 마스터',
            passport: '여권 사진 (3.5x4.5cm)',
            usVisa: '미국 비자 (2x2인치)',
            idCard: '반명함/증명 (3x4cm)',
            bgLibrary: 'AI 배경 라이브러리',
            designTemplates: '디자인 템플릿',
            templateInsta: '인스타 스토리 (Story)',
            templateYoutube: '유튜브 썸네일 (Thumbnail)',
            templateProduct: '홍보용/쇼핑몰 (Product)',
            batchMode: '대량 모드',
            batchProcessing: '실시간 대량 처리',
            batchUploadMore: '이미지 추가',
            batchStart: '전체 처리 시작',
            batchRemaining: '남은 항목',
            batchComplete: '처리 완료!',
            uploadCustomBg: '커스텀 배경 업로드',
            addText: '텍스트 추가',
            deleteText: '삭제',
            deleteImage: '이미지 삭제',
            resetPos: '위치 초기화',
            subjectScale: '객체 스케일',
            brightness: '밝기',
            contrast: '대비',
            saturation: '채도',
            filterPresets: '필터 및 프리셋',
            filterOriginal: '원본',
            filterBW: '흑백',
            filterSepia: '세피아',
            filterWarm: '따뜻하게',
            filterCool: '차갑게',
            filterVintage: '빈티지',
            textEditing: '텍스트 편집기',
            textPlaceholder: '내용 입력...',
            textSize: '크기',
            stickerWidth: '테두리 두께',
            shortsCrop: '9:16 세로형',
            share: '공유하기',
            guide: {
                title: '배경 제거 가이드',
                subtitle: 'AI를 이용한 배경 제거 방법',
                sections: [
                    {
                        title: '최상의 결과를 얻는 방법',
                        content: '피사체와 배경의 대비가 뚜렷할수록 더 깔끔하게 제거됩니다. 배경이 너무 복잡하더라도 \'수동 수정 모드\'를 통해 세밀하게 다듬을 수 있습니다.'
                    },
                    {
                        title: '스티커 효과 활용',
                        content: '배경을 제거한 후 \'스티커 효과\'를 켜면 흰색 테두리가 생겨서 굿즈 디자인이나 썸네일 제작에 아주 유용하게 쓸 수 있습니다.'
                    }
                ],
                faq: [
                    { q: '개인정보는 안전한가요?', a: '네, 사진은 서버로 전송되지 않고 사용자의 기기(브라우저)에서 직접 처리되므로 매우 안전합니다.' },
                    { q: '동영상 배경도 제거되나요?', a: '현재는 이미지(JPG, PNG, WebP) 파일만 지원하며, 추후 업데이트 예정입니다.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF 마스터',
            desc: 'PDF 합치기, 나누기 및 이미지 변환을 위한 강력한 도구 모음입니다.',
            merge: 'PDF 합치기',
            split: 'PDF 나누기',
            toImage: 'PDF를 이미지로',
            uploadMsg: 'PDF 파일을 여기에 드롭하거나 클릭하여 선택하세요',
            filesSelected: '개의 파일이 선택됨',
            mergeNow: '지금 합치기',
            splitNow: '지금 나누기',
            downloadMerged: '합쳐진 PDF 다운로드',
            downloadSplit: '나누어진 파일 다운로드',
            addMore: '파일 추가',
            guide: {
                title: 'PDF 활용 가이드',
                subtitle: 'PDF 관리 및 편집 방법',
                sections: [
                    {
                        title: 'PDF 합치기 사용법',
                        content: '1. 합치고 싶은 여러 개의 PDF 파일을 선택하여 업로드합니다.\n2. 파일의 순서를 확인한 후 \'지금 합치기\' 버튼을 누릅니다.\n3. 처리가 완료되면 하나로 합쳐진 파일을 다운로드하세요.'
                    },
                    {
                        title: '보안 및 개인정보 보호',
                        content: '모든 PDF 처리는 서버가 아닌 귀하의 웹 브라우저 내에서 직접 수행됩니다. 파일은 어디에도 전송되거나 저장되지 않으므로 안심하고 사용하세요.'
                    }
                ],
                faq: [
                    { q: '파일 개수 제한이 있나요?', a: '한 번에 최대 50개까지의 파일을 합칠 수 있도록 권장합니다.' },
                    { q: '용량이 큰 PDF도 처리가능한가요?', a: '기기 성능에 따라 다르지만 보통 100MB 이하의 파일을 원활하게 처리할 수 있습니다.' }
                ]
            }
        },
        home: {
            badge: '모든 도구는 무료이며 개인정보를 보호합니다',
            titlePrefix: '나만의 디지털',
            titleSuffix: '슈퍼파워',
            desc: '크리에이터를 위한 고성능 유틸리티 도구 모음입니다.',
            descLine2: '가입 없이 즉시 사용 가능한 순수 기능 위주의 도구를 경험하세요.',
            launchTool: '도구 실행',
        },
        advertise: {
            title: '광고 문의',
            desc: 'UltraUtils의 글로벌 크리에이터 커뮤니티에 당신의 제품을 선보이세요.',
            slotsTitle: '사용 가능한 광고 슬롯',
            formTitle: '광고 게재 문의하기',
            name: '성함 / 회사명',
            email: '이메일 주소',
            dates: '희망 노출 기간',
            message: '문의 내용 (제품 설명, 링크 등)',
            submit: '문의 보내기',
            success: '문의가 성공적으로 전달되었습니다. 곧 연락드리겠습니다!',
            slotTop: '상단 프리미엄 배너',
            slotSide: '사이드 스티키 스카이스크래퍼',
            slotBottom: '작업 완료 후 하단 배너',
            faq: [
                { q: '광고 단가는 어떻게 결정되나요?', a: '슬롯의 위치와 기간에 따라 소정의 운영 지원비를 받고 있습니다. 문의를 주시면 현재 트래픽 성과와 함께 적정 비용을 제안해 드립니다.' },
                { q: '이미지가 아닌 영상 광고도 가능한가요?', a: '현재는 이미지와 텍스트 기반 배너만 지원합니다. 사이트 성능 유지를 위해 지나치게 무거운 애니메이션은 지양하고 있습니다.' },
                { q: '예약은 얼마나 미리 해야 하나요?', a: '인기 있는 상단 슬롯은 미리 마감될 수 있습니다. 희망하시는 날짜의 최소 1~2주 전에는 문의 주시는 것을 권장합니다.' },
                { q: '결제는 어떤 방식으로 진행되나요?', a: '현재는 계좌이체 및 후원 플랫폼을 통한 결제를 지원하고 있습니다. 구체적인 처리 절차와 결제 정보는 문의 시 상담을 통해 안내해 드립니다.' }
            ]
        },
        houseAds: {
            bgRemoverTitle: '전문가급 배경 제거',
            bgRemoverDesc: 'AI로 3초 만에 완벽한 누끼 따기. 지금 바로 경험해 보세요.',
            ytGrabTitle: '유튜브 썸네일 마스터',
            ytGrabDesc: '고화질 썸네일을 즉시 추출하세요. 크리에이터 필수 도구!',
            imageCompTitle: '화질 저하 없는 이미지 압축',
            imageCompDesc: '용량은 줄이고 화질은 지키세요. SEO 최적화의 첫 걸음.',
            pdfMasterTitle: 'PDF 편집의 끝판왕',
            pdfMasterDesc: '합치기, 나누기, 이미지 변환까지 한 곳에서 해결하세요.',
            coffeeTitle: '안티에게 커피 한 잔?',
            coffeeDesc: '여러분의 작은 후원이 UltraUtils를 무료로 유지하는 힘이 됩니다.'
        },
        footer: {
            tools: '주요 도구',
            resources: '리소스',
            legal: '법적 고지',
            support: '지원 & 후원',
            privacy: '개인정보처리방침',
            terms: '이용약관',
            advertise: '광고 문의',
            coffee: '개발자에게 커피 한 잔',
            allRights: '모든 권리 보유.',
            social: '소셜 미디어',
            about: '사이트 소개',
            contact: '문의하기',
        },
        privacy: {
            title: '개인정보처리방침',
            lastUpdated: '최종 수정일: 2026년 2월 15일',
            sections: [
                {
                    title: '1. 개인정보 수집 및 이용 목적',
                    content: 'UltraUtils는 별도의 회원가입 없이 이용 가능한 서비스로, 사용자의 이름, 이메일 주소 등 개인을 식별할 수 있는 정보를 직접 수집하지 않습니다. 모든 서비스 이용은 익명으로 이루어지며, 작업된 데이터는 실시간으로 브라우저 내에서만 처리됩니다.'
                },
                {
                    title: '2. 쿠키(Cookies) 및 맞춤형 광고',
                    content: '본 사이트는 사용자에게 최적화된 경험을 제공하고 광고 성과를 분석하기 위해 쿠키를 사용합니다. 특히 구글(Google)을 포함한 제3자 제공업체는 사용자의 이전 방문 기록을 바탕으로 맞춤형 광고를 게재할 수 있습니다. 사용자는 브라우저 설정 또는 구글 광고 설정 페이지를 통해 쿠키 수집을 거부할 수 있습니다.'
                },
                {
                    title: '3. 데이터 보안 및 로컬 처리',
                    content: '이미지 배경 제거, PDF 합치기 등 모든 고성능 유틸리티 기능은 서버로 파일을 전송하지 않는 "로컬 브라우저 렌더링" 방식을 채택하고 있습니다. 귀하의 소중한 파일은 서버에 저장되거나 외부에 유출될 위험이 전혀 없습니다.'
                },
                {
                    title: '4. 제3자 사이트로의 링크',
                    content: '본 서비스에는 외부 사이트로 연결되는 링크 또는 광고 배너가 포함될 수 있습니다. 해당 사이트의 개인정보처리방침은 UltraUtils와 무관하므로 방문 시 해당 사이트의 정책을 확인하시기 바랍니다.'
                }
            ]
        },
        terms: {
            title: '이용약관',
            lastUpdated: '최종 수정일: 2026년 2월 15일',
            sections: [
                {
                    title: '1. 서비스의 목적 및 동의',
                    content: '본 약관은 UltraUtils가 제공하는 웹 도구 서비스의 이용 조건 및 절차를 규정합니다. 사용자는 본 사이트에 접속함으로써 본 약관을 읽고 이해했으며, 그 내용에 동의한 것으로 간주됩니다.'
                },
                {
                    title: '2. 서비스 이용 제한',
                    content: '사용자는 서비스를 이용함에 있어 시스템 안정성을 해치는 행위, 불법적인 목적으로 도구를 사용하는 행위 등을 해서는 안 됩니다. 명시적인 허가 없이 사이트의 콘텐츠를 크롤링하거나 복제하는 것은 금지됩니다.'
                },
                {
                    title: '3. 책임의 한계 및 면책',
                    content: 'UltraUtils는 최상의 도구 품질을 제공하기 위해 노력하나, 서비스의 중단, 데이터의 오류 또는 도구 사용으로 발생하는 결과에 대해 어떠한 직접적 또는 간접적인 책임도 지지 않습니다. 모든 도구는 "있는 그대로" 제공됩니다.'
                },
                {
                    title: '4. 지적 재산권',
                    content: 'UltraUtils 사이트의 로고, 디자인, 알고리즘 및 제공되는 텍스트 콘텐츠는 자사의 지적 재산입니다. 사용자가 도구를 통해 생성한 결과물(QR 코드, 배경 제거 이미지 등)의 저작권은 전적으로 사용자에게 귀속됩니다.'
                }
            ]
        },
        about: {
            title: 'About UltraUtils',
            subtitle: '더 빠르고, 더 안전한 디지털 작업의 시작',
            sections: [
                {
                    title: '우리의 미션',
                    content: 'UltraUtils는 크리에이터, 개발자, 그리고 일반 사용자 누구나 복잡한 설치나 가입 없이 전문적인 디지털 작업을 수행할 수 있는 환경을 제공하는 것을 목표로 합니다. 번거로운 과정은 줄이고 본질적인 기능에 집중합니다.'
                },
                {
                    title: '왜 UltraUtils인가요?',
                    content: '우리는 사용자의 "프라이버시"를 최우선으로 생각합니다. 대부분의 도구가 서버로 파일을 보내는 방식과 달리, 저희는 최신 웹 기술을 활용하여 브라우저 내에서 직접 연산합니다. 속도와 보안 두 마리 토끼를 모두 잡은 혁신적인 유틸리티를 경험해 보세요.'
                },
                {
                    title: '글로벌 유틸리티 플랫폼',
                    content: '전 세계 다양한 사용자들이 언어 장벽 없이 도구를 활용할 수 있도록 다국어 지원을 지속적으로 확대하고 있으며, 매주 새로운 도구를 업데이트하여 생산성을 극대화합니다.'
                }
            ]
        },
        contact: {
            title: '실시간 문의',
            subtitle: '궁금한 점이 있으신가요?',
            desc: '제안하고 싶은 기능, 비즈니스 협업 문의, 또는 오류 제보 등 여러분의 목소리를 소중히 듣겠습니다.',
            infoTitle: '문의 채널',
            infoEmail: 'official.ultrautils@gmail.com',
            infoResponse: '영업일 기준 24시간 이내에 답변을 드릴 수 있도록 최선을 다하겠습니다.'
        },
        notFound: {
            title: '길을 잃으셨나요?',
            desc: '요청하신 페이지를 찾을 수 없습니다. 주소가 정확한지 확인하시거나 아래 버튼을 눌러 메인 화면으로 돌아가 보세요.',
            backHome: '메인 화면으로 돌아가기',
        },
        feedback: {
            title: '오늘 도구가 요긴하셨나요?',
            useful: '요긴해요! 👍',
            neutral: '그저 그래요 😐',
            improve: '아쉬워요 🔧',
            placeholder: '더 필요하신 기능이나 의견을 자유롭게 남겨주세요...',
            submit: '의견 보내기',
            success: '소중한 의견 감사합니다!',
            commitment: '사장님의 소중한 의견을 바탕으로 더 나은 도구를 만들기 위해 매일 노력하겠습니다.',
        },
        share: {
            title: '이 도구가 맘에 드셨나요? 친구에게 공유해보세요!',
            copy: '링크 복사',
            copied: '복사됨!',
            twitter: 'X (트위터)',
            facebook: '페이스북',
            whatsapp: '왓츠앱',
        },
        ytPlanner: {
            title: 'AI 유튜브 기획 마스터',
            desc: '클릭 한 번으로 조회수를 폭발시키는 유튜브 제목, 태그, 대본 초안을 무료로 생성하세요.',
            placeholder: '제목이나 주제를 입력하면 AI가 기획안을 작성합니다...',
            generateBtn: 'AI 기획안 생성하기',
            generating: 'AI가 최고의 전략을 짜고 있습니다...',
            tabTitles: '추천 제목',
            tabScripts: '대본 초안',
            tabTags: '태그 & 키워드',
            tabStrategy: '노출 전략',
            videoType: '영상 성격',
            vlog: '브이로그/라이프',
            info: '정보전달/교육',
            review: '제품 리뷰/추천',
            shorts: '쇼츠/모바일 전용',
            topic: '영상 핵심 주제',
            topicPlaceholder: '예: 서울 맛집 투어, 아이폰 15 사용기 등',
            advancedOptions: '상세 옵션',
            tone: '영상 분위기',
            toneFunny: '유머러스하게',
            toneSerious: '진지하고 꼼꼼하게',
            toneProfessional: '전문가처럼',
            targetAudience: '타겟 시청자',
            targetGeneral: '대중(전체)',
            targetExpert: '전문가 집단',
            targetBeginner: '입문자/초보',
            resultsTitle: 'AI 기획 리포트',
            setupTab: '기획 설정',
            resultsTab: '결과 리포트',
            copyAll: '내용 복사하기',
            copied: '클립보드에 복사됨!',
            guide: {
                title: '유튜브 성공을 위한 AI 기획 가이드',
                subtitle: '조회수 알고리즘을 공략하는 3단계 전략',
                sections: [
                    {
                        title: '1. 클릭을 부르는 썸네일 제목의 비밀 (CTR)',
                        content: '조회수의 80%는 썸네일과 제목에서 결정됩니다. 단순히 사실을 나열하기보다 시청자의 호기심을 자극하거나(예: "누구도 알려주지 않은..."), 즉각적인 이득을 강조(예: "60초 안에 배우는...")하는 제목을 사용하세요. 우리 AI는 수만 개의 인기 영상 데이터를 바탕으로 최적의 CTR 제목을 제안합니다.'
                    },
                    {
                        title: '2. 구글이 좋아하는 SEO 설명과 태그 작성법',
                        content: '유튜브는 구글에 이어 세계 2위의 검색 엔진입니다. 영상 설명 상단 2줄에 핵심 키워드를 포함하고, 연관성 높은 태그들을 배치하면 유튜브 추천 알고리즘뿐만 아니라 구글 검색 결과에서도 상단에 노출될 확률이 비약적으로 높아집니다.'
                    },
                    {
                        title: '3. 시청 지속 시간을 늘리는 대본 구조 (Watch Time)',
                        content: '초반 15초가 시청 유지의 핵심입니다. 영상 시작과 동시에 시청자가 얻을 수 있는 가치를 명확히 제시하고, 중간중간 궁금증을 유발하는 \'오픈 루프\' 기법을 사용하세요. AI 대본 가이드는 이러한 심리학적 구조를 반영하여 제작됩니다.'
                    }
                ],
                faq: [
                    { q: 'AI가 만든 제목을 그대로 써도 되나요?', a: '네, 물론입니다! 하지만 제안된 여러 가지 후보 중 자신의 영상 분위기에 가장 잘 맞는 것을 골라 조금만 수정하면 훨씬 독창적인 제목이 됩니다.' },
                    { q: '태그는 무조건 많이 넣는 게 좋은가요?', a: '아니요. 영상과 관련 없는 태그를 많이 넣는 것은 오히려 알고리즘에 악영향을 줍니다. 우리 AI가 추천하는 가장 핵심적인 10-15개의 태그만 사용하는 것을 권장합니다.' },
                    { q: '이 도구는 무료인가요?', a: '네, UltraUtils의 모든 도구는 크리에이터들의 성장을 돕기 위해 100% 무료로 제공됩니다.' }
                ]
            }
        }
    },
    en: {
        common: {
            settings: 'Settings',
            download: 'Download',
            processing: 'Processing...',
            apply: 'Apply',
            cancel: 'Cancel',
            error: 'Error',
            success: 'Success',
            selectImage: 'Select Image',
            dropHere: 'Drop your image here',
            orClick: 'or click to browse from files',
            shareResult: 'Share Result',
            copiedLink: 'Link copied to clipboard!',
        },
        navbar: {
            title: 'My Utils',
            home: 'Home',
            imageSuite: 'Image Master',
            promptGen: 'Prompt Gen',
            ytGrab: 'YT Grabber',
            qrGen: 'QR Gen',
            textConv: 'Text Conv',
            bgRemover: 'BG Remover',
            ytPlanner: 'YT Planner',
        },
        imageMaster: {
            title: 'Image Master Suite: Professional Online Image Optimization',
            desc: 'Reduce file size without losing quality and maximize web performance. AI-driven smart algorithms preserve image clarity.',
            quality: 'Compression Quality',
            size: 'Resize Options',
            width: 'Width (px)',
            height: 'Height (px)',
            smartEnhance: 'AI Smart Enhance',
            smartEnhanceDesc: 'AI analyzes and restores fine details and textures that might be lost during compression in real-time.',
            original: 'Original Image',
            optimized: 'Optimized Image',
            saveMsg: '{percent}% disk space saved compared to original',
            applyOptimize: 'Optimize Now',
            downloadOptimized: 'Save Optimized Image',
            guide: {
                title: 'Master Guide for Image Compression and Web Performance',
                subtitle: 'Why optimize images? Key tips from SEO experts',
                sections: [
                    {
                        title: '1. Impact of Image Compression on Web Speed and SEO',
                        content: 'Page loading speed is a critical ranking factor in today\'s search results. Did you know that more than half of an average website\'s size comes from image files? Using Image Master Suite, you can reduce file sizes by up to 80-90% with almost no visible loss in quality. This directly helps improve Google search rankings by increasing user stay time and reducing bounce rates.'
                    },
                    {
                        title: '2. JPEG vs PNG: Choosing the Right Format',
                        content: 'Not all images are compressed the same way. For portraits or complex landscapes, JPEG is usually most efficient. For graphics with transparency, logos, or text, we recommend PNG. Our tool supports both and applies optimized algorithms for each format.'
                    },
                    {
                        title: '3. Why AI Smart Enhance is Special',
                        content: 'Generic compression tools often result in blurry images. UltraUtils\' Smart Enhance uses deep learning to protect edges and maintain textures. Enable this for professional portfolios or e-commerce results to get the highest quality output.'
                    },
                    {
                        title: '4. Web Accessibility and Image Optimization',
                        content: 'High-capacity images can be a major barrier for users on slow internet or mobile devices. Providing a smooth experience for all users is a fundamental web standard. Image Master is an essential first step towards ensuring equal digital access for everyone.'
                    }
                ],
                faq: [
                    { q: 'How much does quality drop when compressing?', a: 'At the default 80-90% quality, it is almost impossible to tell the difference with the naked eye. We recommend this range for most purposes.' },
                    { q: 'Can I process multiple images at once?', a: 'Currently, we offer one-by-one processing for the most precise optimization. A bulk processing feature is planned for a future update.' },
                    { q: 'Is there a risk of my photos being leaked from the server?', a: 'Absolutely not. All image processing in UltraUtils happens entirely within your browser memory. All information is automatically destroyed as soon as you close the page.' }
                ]
            }
        },
        promptGen: {
            title: 'AI Prompt Generator',
            desc: 'Craft the perfect prompts for Suno, Midjourney, and more.',
            platform: 'Platform',
            genre: 'Genre / Style',
            subject: 'Subject',
            subjectPlaceholder: 'What is this about?',
            details: 'Details / Description',
            detailsPlaceholder: 'Add style, lighting, instruments, or any specific details...',
            outputTitle: 'Generated Prompt',
            copy: 'Copy',
            copied: 'Copied!',
            placeholder: 'Prompt will appear here...',
            platforms: {
                midjourney: 'Midjourney',
                suno: 'Suno',
                stableDiffusion: 'Stable Diffusion',
            },
            genres: {
                'K-Pop': 'K-Pop',
                'Lofi': 'Lofi',
                'Jazz': 'Jazz',
                'Rock': 'Rock',
                'Electronic': 'Electronic',
                'Acoustic': 'Acoustic',
                'Cinematic': 'Cinematic',
                'Anime': 'Anime',
                'Cyberpunk': 'Cyberpunk',
                'Minimalist': 'Minimalist',
                '3D Render': '3D Render',
                'Oil Painting': 'Oil Painting',
            },
            guide: {
                title: 'AI Prompt Master Guide',
                subtitle: 'How to write perfect prompts for Midjourney and Suno',
                sections: [
                    {
                        title: 'Midjourney Pro Tips',
                        content: 'Add style (e.g. Cinematic) and details (e.g. 8k, highly detailed) after the subject. Use parameters like --ar 16:9 for the best composition.'
                    },
                    {
                        title: 'Suno Music Generation',
                        content: 'Use brackets [K-Pop, Jazz] for genres. Including mood and specific instruments in the details helps create much better songs.'
                    }
                ],
                faq: [
                    { q: 'Why is prompt structure important?', a: 'AI quality depends on specificity. A clear structure helps the AI understand your intent precisely, leading to better creative outputs.' },
                    { q: 'Can I use these for other AIs?', a: 'Yes! The base prompts generated here work great with DALL-E, Stable Diffusion, and most other generative AI platforms.' }
                ]
            }
        },
        ytGrab: {
            title: 'High-Quality YouTube Thumbnail Grabber & Analysis Tool',
            desc: 'Get 4K/Full HD YouTube thumbnails and Shorts backgrounds in one click. The fastest way with no signup or installation required.',
            placeholder: 'Paste YouTube URL (e.g., https://www.youtube.com/watch?v=...)',
            getBtn: 'Grab HD Thumbnail',
            invalidUrl: 'The URL format entered is invalid. Please check again.',
            fetching: 'Fetching thumbnail data from YouTube servers...',
            downloadHd: 'Download Max Res (HD) Instantly',
            editBtn: 'AI Background Remove & Edit',
            guide: {
                title: 'Professional Guide to YouTube Thumbnail Extraction and Use',
                subtitle: 'Copyright and technical tips for creators and marketers',
                sections: [
                    {
                        title: '1. 5 Common Scenarios for Using a Thumbnail Grabber',
                        content: 'Professional creators use thumbnail grabbers for more than just saving images:\n• Analyzing design elements of competitor channels\n• Recovering your own thumbnail source files if lost\n• Using high-quality images when quoting YouTube videos in blogs or news\n• Creating card news for social media sharing\n• Capturing attractive frames from YouTube Shorts'
                    },
                    {
                        title: '2. Guaranteed 4K and Full HD Resolution',
                        content: 'Our tool prioritizes `maxresdefault.jpg`, the highest resolution provided by the YouTube API. If the creator uploaded an HD thumbnail, you can get a crisp 1080p+ original image. For older or lower-quality videos, we automatically provide the best possible alternative like `hqdefault`.'
                    },
                    {
                        title: '3. Full Support for YouTube Shorts',
                        content: 'We perfectly support Shorts videos which have a different URL structure. Just copy and paste the `youtube.com/shorts/...` address. We extract the high-quality thumbnail while maintaining the unique vertical aspect ratio.'
                    },
                    {
                        title: '4. Copyright and Fair Use Guide',
                        content: 'Extracted thumbnails are the intellectual property of the original creator. Redistributing or modifying them for commercial use without permission may lead to legal issues. We recommend using them within the bounds of \'Fair Use\' for personal reference, criticism, education, or news reporting. Always seek permission from the creator when in doubt.'
                    }
                ],
                faq: [
                    { q: 'Why don\'t I see the "Max Res" download button?', a: 'If the video quality isn\'t high enough or the uploader didn\'t set a high-resolution thumbnail, the YouTube system doesn\'t generate that file. In this case, please use the standard high-quality (SD) images below.' },
                    { q: 'Is it safe to download these images to my computer?', a: 'Yes, it fetches directly from official YouTube image servers to your browser, so there is no risk of malware.' },
                    { q: 'Can I remove the background right after grabbing?', a: 'Yes! Click the \'AI Background Remove\' button below the result to instantly enter edit mode where you can remove the background from subjects.' }
                ]
            }
        },
        qrGen: {
            title: 'Free Premium QR Code Generator',
            desc: 'Create custom QR codes for business, social media, and Wi-Fi. Supports high-resolution images and vector formats.',
            target: 'Enter URL or Text to Link',
            fgColor: 'Accent Color',
            bgColor: 'Background Color',
            size: 'Output Resolution',
            downloadPng: 'Download High-Res PNG',
            vectorReady: 'Preparing high-resolution vector output...',
            guide: {
                title: 'Professional QR Code Marketing Strategies',
                subtitle: 'Level up your business with smart QR utilization',
                sections: [
                    {
                        title: '1. Tips for Maximum Scan Reliability',
                        content: 'The key to a great QR code is contrast. Ensure your accent color is dark enough against a light background. Our tool uses standard error correction levels to maintain readability even if the code is slightly distorted or partially obscured.'
                    },
                    {
                        title: '2. Creative Offline Use Cases',
                        content: '• Smart Business Cards: Link directly to your portfolio.\n• Contactless Menus: Perfect for modern restaurants.\n• Event Access: Streamline check-ins with scanned tickets.\n• One-Tap Wi-Fi: No more typing long passwords.'
                    },
                    {
                        title: '3. Static vs Dynamic QR Codes',
                        content: 'The codes generated here are \'Static,\' meaning the data is encoded directly into the pattern. They work offline, never expire, and require no subscription. Just verify your URL before printing!'
                    }
                ],
                faq: [
                    { q: 'Why won\'t my QR code scan?', a: 'Common issues include low color contrast, printing the code too small, or not leaving enough empty space (Quiet Zone) around the edges.' },
                    { q: 'Can I use these for commercial purposes?', a: 'Yes, all QR codes generated are 100% royalty-free and can be used for any commercial project.' }
                ]
            }
        },
        textConverter: {
            title: 'All-in-One Text Suite: Professional Tools for Data & Content',
            desc: 'From case conversion to data cleanup and encoding, handle all your text processing needs. Essential for developers and analysts.',
            inputPlaceholder: 'Paste your text or data here for analysis...',
            statsCharacters: 'Total Characters',
            statsWords: 'Word Count',
            statsLines: 'Line Count',
            categoryCase: 'Case Conversion',
            categoryCleanup: 'Cleanup & Formatting',
            categoryWeb: 'Web & Encoding',
            categoryData: 'Sorting & Filters',
            btnUppercase: 'UPPERCASE',
            btnLowercase: 'lowercase',
            btnCapitalize: 'Capitalize Case',
            btnTrim: 'Trim Spaces',
            btnRemoveEmpty: 'Remove Empty Lines',
            btnRemoveDupes: 'Remove Duplicate Lines',
            btnRemoveDupesWords: 'Remove Duplicate Words',
            btnUrlEncode: 'URL Encode',
            btnUrlDecode: 'URL Decode',
            btnBase64Encode: 'Base64 Encode',
            btnBase64Decode: 'Base64 Decode',
            btnJsonFormat: 'Format JSON',
            btnSortAz: 'Sort A-Z',
            btnSortZa: 'Sort Z-A',
            btnCopy: 'Copy Result',
            btnCopied: 'Copied to Clipboard!',
            btnClear: 'Clear All',
            guide: {
                title: 'Pro Tips for Efficient Text Processing',
                subtitle: 'Increase your productivity with advanced editing features',
                sections: [
                    {
                        title: '1. Improving Data Quality with Cleanup Tools',
                        content: 'When copying data from spreadsheets or websites, unwanted duplicates and whitespace can ruin your analysis. Use our "Remove Duplicates" and "Trim" tools to get clean raw data instantly.'
                    },
                    {
                        title: '2. Encoding Utilities for Developers',
                        content: 'Quickly verify URL parameters or Base64 strings without setting up a local environment. Everything is processed instantly in your browser.'
                    },
                    {
                        title: '3. JSON Prettify for Readability',
                        content: 'Transform messy, minified JSON into a readable structure. Essential for debugging API responses and code reviews.'
                    }
                ],
                faq: [
                    { q: 'Is there a limit on text size?', a: 'Our tool can handle thousands of lines efficiently. Since processing is local, it\'s limited only by your device memory.' },
                    { q: 'Is my data secure?', a: 'Yes. We never send your text to any server. All transformations happen locally in your browser.' }
                ]
            }
        },
        bgRemover: {
            title: 'AI Background Remover',
            desc: 'Instantly remove backgrounds from your photos using AI.',
            preparing: 'Preparing AI...',
            processing: 'Removing background...',
            modelLoading: 'Loading AI Engine (~20MB)...',
            downloadReady: 'Download Transparent Image',
            dropMsg: 'Drop your photo here',
            comparison: 'Before & After',
            stepFetch: 'Preparing image...',
            stepModel: 'Loading AI model...',
            stepInference: 'Removing background...',
            refineTitle: 'Manual Refine Mode',
            refineDesc: 'Use the brush to restore parts or erase more.',
            brushRestore: 'Restore',
            brushErase: 'Erase',
            brushSize: 'Brush Size',
            applyRefine: 'Apply Changes',
            cancelRefine: 'Cancel',
            stickerEffect: 'Sticker Effect',
            stickerColor: 'Sticker Color',
            backgroundColor: 'Background Color',
            bgTransparent: 'Transparent',
            bgSolid: 'Solid Color',
            bgGradient: 'Gradient',
            bgImage: 'Custom BG',
            undo: 'Undo',
            redo: 'Redo',
            reset: 'Reset',
            zoom: 'Zoom',
            showGuide: 'Show Guide',
            idPhoto: 'ID Photo Master',
            passport: 'Passport (3.5x4.5cm)',
            usVisa: 'US Visa (2x2in)',
            idCard: 'ID Card (3x4cm)',
            bgLibrary: 'AI Background Library',
            designTemplates: 'Design Templates',
            templateInsta: 'Instagram Story',
            templateYoutube: 'YouTube Thumbnail',
            templateProduct: 'Product Display',
            batchMode: 'Batch Mode',
            batchProcessing: 'Real-time Batch Processing',
            batchUploadMore: 'Add More Images',
            batchStart: 'Start Processing All',
            batchRemaining: 'Remaining',
            batchComplete: 'Processing Complete!',
            uploadCustomBg: 'Upload Custom BG',
            addText: 'Add Text',
            deleteText: 'Delete',
            deleteImage: 'Delete Image',
            resetPos: 'Reset Pos',
            subjectScale: 'Scale',
            brightness: 'Brightness',
            contrast: 'Contrast',
            saturation: 'Saturation',
            filterPresets: 'Filters & Presets',
            filterOriginal: 'Original',
            filterBW: 'B&W',
            filterSepia: 'Sepia',
            filterWarm: 'Warm',
            filterCool: 'Cool',
            filterVintage: 'Vintage',
            textEditing: 'Text Editor',
            textPlaceholder: 'Enter text...',
            textSize: 'Size',
            stickerWidth: 'Border Width',
            shortsCrop: '9:16 Shorts',
            share: 'Share',
            guide: {
                title: 'AI Background Removal & Cutout Guide',
                subtitle: 'Remove complex backgrounds in just 5 seconds using AI',
                sections: [
                    {
                        title: 'How to Get Best Results',
                        content: 'High contrast between the subject and background yields the cleanest results. Even for complex backgrounds, use \'Manual Refine Mode\' to polish details.'
                    },
                    {
                        title: 'Using Sticker Effects',
                        content: 'After removing the background, enable \'Sticker Effect\' to add a white border—perfect for merch design or YouTube thumbnails.'
                    }
                ],
                faq: [
                    { q: 'Is my data safe?', a: 'Yes, your photos are never uploaded to a server. All processing happens directly on your device (browser).' },
                    { q: 'Can I remove video backgrounds?', a: 'Currently, only images (JPG, PNG, WebP) are supported. Video support is coming in a future update.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Master Suite',
            desc: 'Powerful tools to merge, split, and convert your PDFs to images.',
            merge: 'Merge PDF',
            split: 'Split PDF',
            toImage: 'PDF to Image',
            uploadMsg: 'Drop PDF files here or click to browse',
            filesSelected: 'files selected',
            mergeNow: 'Merge Now',
            splitNow: 'Split Now',
            downloadMerged: 'Download Merged PDF',
            downloadSplit: 'Download Split Files',
            addMore: 'Add More Files',
            guide: {
                title: 'Ultimate PDF Management Guide',
                subtitle: 'How to manage and edit your PDF files like a pro',
                sections: [
                    {
                        title: 'How to Merge PDFs',
                        content: '1. Select and upload multiple PDF files you want to combine.\n2. Review the order and click \'Merge Now\'.\n3. Download your combined document instantly.'
                    },
                    {
                        title: 'Privacy and Security',
                        content: 'All PDF processing is done locally within your browser. Your files are never uploaded to any server, ensuring 100% privacy.'
                    }
                ],
                faq: [
                    { q: 'Is there a limit on the number of files?', a: 'We recommend merging up to 50 files at once for optimal performance.' },
                    { q: 'Can I process large PDF files?', a: 'Yes, although it depends on your device performance, files up to 100MB are usually processed smoothly.' }
                ]
            }
        },
        home: {
            badge: 'All tools are free & privacy-focused',
            titlePrefix: 'Digital Superpowers for',
            titleSuffix: 'Modern Creators',
            desc: 'A curated collection of high-performance utility tools.',
            descLine2: 'No sign-ups, no paywalls, just pure functionality.',
            launchTool: 'Launch Tool',
        },
        advertise: {
            title: 'Advertise with Us',
            desc: 'Showcase your product to the global creator community on UltraUtils.',
            slotsTitle: 'Available Ad Slots',
            formTitle: 'Send an Inquiry',
            name: 'Name / Company',
            email: 'Email Address',
            dates: 'Desired Dates',
            message: 'Message (Ad link, etc.)',
            submit: 'Send Inquiry',
            success: 'Inquiry sent successfully. We will contact you soon!',
            slotTop: 'Top Premium Banner',
            slotSide: 'Side Skyscraper (Sticky)',
            slotBottom: 'Bottom Fixed Banner',
            faq: [
                { q: 'How is the ad rate determined?', a: 'We accept small contributions for site operation based on slot position and duration. Please contact us and we will suggest a reasonable rate along with current traffic stats.' },
                { q: 'Do you support video ads?', a: 'Currently, we only support image and text-based banners to maintain site performance.' },
                { q: 'How far in advance should I book?', a: 'Premium slots may book out early. We recommend reaching out at least 1-2 weeks before your desired date.' },
                { q: 'What are the payment options?', a: 'We currently support wire transfers and dedicated payment platforms. Specific payment details and procedures will be provided individually upon inquiry.' }
            ]
        },
        houseAds: {
            bgRemoverTitle: 'Pro AI Background Remover',
            bgRemoverDesc: 'Perfect cutouts in 3 seconds with AI. Try it now for free.',
            ytGrabTitle: 'YouTube Thumbnail Master',
            ytGrabDesc: 'Extract high-res thumbnails instantly. Essential for creators!',
            imageCompTitle: 'Lossless Image Compression',
            imageCompDesc: 'Reduce file size, keep the quality. Perfect for SEO boost.',
            pdfMasterTitle: 'Ultimate PDF Master',
            pdfMasterDesc: 'Merge, split, and convert PDFs to images in one place.',
            coffeeTitle: 'Buy Us a Coffee?',
            coffeeDesc: 'Your support keeps UltraUtils free and fast for everyone! ☕️'
        },
        footer: {
            tools: 'Popular Tools',
            resources: 'Resources',
            legal: 'Legal',
            support: 'Support & Donate',
            privacy: 'Privacy Policy',
            terms: 'Terms of Service',
            advertise: 'Advertise',
            coffee: 'Buy Me a Coffee',
            allRights: 'All rights reserved.',
            social: 'Follow Us',
            about: 'About Us',
            contact: 'Contact Us',
        },
        privacy: {
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: Feb 15, 2026',
            sections: [
                {
                    title: '1. Information Collection and Use',
                    content: 'UltraUtils is a registration-free service. We do not directly collect personally identifiable information such as names or email addresses. All service usage is anonymous, and processed data stays within your browser in real-time.'
                },
                {
                    title: '2. Cookies and Personalization',
                    content: 'This site uses cookies to optimize user experience and analyze ad performance. Third-party vendors, including Google, use cookies to serve ads based on a user\'s prior visits to your website or other websites. You may opt out of personalized advertising by visiting Google Ads Settings.'
                },
                {
                    title: '3. Data Security and Local Processing',
                    content: 'Our core utilities, like background removal and PDF merging, use local browser rendering. Your files are never uploaded to our servers, ensuring your data remains private and secure on your own device.'
                },
                {
                    title: '4. Third-party Links',
                    content: 'Our service may contain links to external sites or ad banners. We are not responsible for the privacy practices of those sites, and we encourage you to read their policies upon visiting.'
                }
            ]
        },
        terms: {
            title: 'Terms of Service',
            lastUpdated: 'Last Updated: Feb 15, 2026',
            sections: [
                {
                    title: '1. Purpose and Acceptance',
                    content: 'These terms govern your use of the web tools provided by UltraUtils. By accessing this site, you acknowledge that you have read, understood, and agreed to be bound by these terms.'
                },
                {
                    title: '2. Usage Restrictions',
                    content: 'You agree not to engage in activities that disrupt service stability or use our tools for illegal purposes. Crawling or duplicating content without explicit permission is strictly prohibited.'
                },
                {
                    title: '3. Limitation of Liability',
                    content: 'While we strive for the highest quality, UltraUtils is not liable for any direct or indirect damages arising from service interruptions, data errors, or use of the tools. All tools are provided "as is".'
                },
                {
                    title: '4. Intellectual Property',
                    content: 'The logos, design, and textual content of UltraUtils are our intellectual property. However, the user retains full ownership of any outputs generated through our tools (e.g., QR codes, processed images).'
                }
            ]
        },
        about: {
            title: 'About UltraUtils',
            subtitle: 'Starting a faster, safer digital workflow',
            sections: [
                {
                    title: 'Our Mission',
                    content: 'UltraUtils aims to provide a professional digital environment where creators, developers, and everyday users can perform tasks without complex installations or sign-ups. We focus on utility and simplicity.'
                },
                {
                    title: 'Why UltraUtils?',
                    content: 'Privacy is our top priority. Unlike many tools that send files to a server, we leverage modern web technology to process everything directly in your browser. Experience innovation with speed and security.'
                },
                {
                    title: 'Global Platform',
                    content: 'We support multiple languages to break barriers and regularly update our toolkit to maximize productivity for users worldwide.'
                }
            ]
        },
        contact: {
            title: 'Contact Us',
            subtitle: 'Have questions or suggestions?',
            desc: 'Whether it\'s a feature request, business inquiry, or bug report, we value your feedback.',
            infoTitle: 'Support Channel',
            infoEmail: 'official.ultrautils@gmail.com',
            infoResponse: 'We strive to respond within 24 hours on business days.'
        },
        notFound: {
            title: 'Are you lost?',
            desc: "The page you're looking for doesn't exist. Check the URL or click the button below to return home.",
            backHome: 'Back to Homepage',
        },
        feedback: {
            title: 'Was this tool useful today?',
            useful: 'Very useful! 👍',
            neutral: 'Just okay 😐',
            improve: 'Could be better 🔧',
            placeholder: 'Feel free to share any features you need or feedback...',
            submit: 'Send Feedback',
            success: 'Thank you for your feedback!',
            commitment: 'We strive every day to improve our tools based on your valuable feedback.',
        },
        share: {
            title: 'Love this tool? Share it with your friends!',
            copy: 'Copy Link',
            copied: 'Copied!',
            twitter: 'X (Twitter)',
            facebook: 'Facebook',
            whatsapp: 'WhatsApp',
        },
        ytPlanner: {
            title: 'AI YouTube Strategy Master',
            desc: 'Boost your views with AI-generated titles, tags, and script drafts for free.',
            placeholder: 'Enter a topic to get a full strategy...',
            generateBtn: 'Generate AI Plan',
            generating: 'AI is crafting your viral strategy...',
            tabTitles: 'Catchy Titles',
            tabScripts: 'Script Draft',
            tabTags: 'Tags & SEO',
            tabStrategy: 'Traffic Boost',
            videoType: 'Video Type',
            vlog: 'Vlog / Lifestyle',
            info: 'Education / Info',
            review: 'Product Review',
            shorts: 'Shorts / Vertical',
            topic: 'Main Topic',
            topicPlaceholder: 'e.g., Best Pizza in NY, iPhone 15 Review...',
            advancedOptions: 'Advanced Options',
            tone: 'Tone of Voice',
            toneFunny: 'Humorous',
            toneSerious: 'Serious & Detailed',
            toneProfessional: 'Professional',
            targetAudience: 'Target Audience',
            targetGeneral: 'General Public',
            targetExpert: 'Experts',
            targetBeginner: 'Beginners',
            resultsTitle: 'AI Strategic Report',
            setupTab: 'Setup',
            resultsTab: 'Results',
            copyAll: 'Copy to Clipboard',
            copied: 'Copied!',
            guide: {
                title: 'Ultimate YouTube Success Guide',
                subtitle: 'Mastering the Algorithm in 3 Steps',
                sections: [
                    {
                        title: '1. The Secret to Clickeable Titles (CTR)',
                        content: '80% of your success depends on the title and thumbnail. Instead of just listing facts, pique curiosity (e.g., "The Secret No One Tells You...") or highlight immediate benefits. Our AI suggests titles based on top-performing viral data.'
                    },
                    {
                        title: '2. Master SEO Meta Data',
                        content: 'YouTube is the world\'s second-largest search engine. By including core keywords in the first two lines of your description and using highly relevant tags, you significantly increase your chances of appearing on both YouTube recommendations and Google search.'
                    },
                    {
                        title: '3. Structure for Retention (Watch Time)',
                        content: 'The first 15 seconds are crucial. Clearly state the value viewers will gain immediately. Our AI scripts follow professional storytelling structures to keep your audience engaged until the end.'
                    }
                ],
                faq: [
                    { q: 'Are these titles ready to use?', a: 'Yes! However, picking the best fit and adding your personal touch will make them even more unique.' },
                    { q: 'Should I use as many tags as possible?', a: 'No. Irrelevant tags can hurt your ranking. Use the 10-15 core keywords our AI suggests for the best results.' },
                    { q: 'Is it completely free?', a: 'Yes, All tools on UltraUtils are 100% free to support creators worldwide.' }
                ]
            }
        }
    },
    zh: {
        common: {
            settings: '设置',
            download: '下载',
            processing: '处理中...',
            apply: '应用',
            cancel: '取消',
            error: '错误',
            success: '成功',
            selectImage: '选择图片',
            dropHere: '将图片拖到此处',
            orClick: '或点击选择文件',
            shareResult: '分享结果',
            copiedLink: '链接已复制到剪贴板！',
        },
        navbar: {
            title: '我的工具',
            home: '首页',
            imageSuite: '图片大师',
            promptGen: '提示词生成',
            ytGrab: 'YouTube提取',
            qrGen: '二维码生成',
            textConv: '文本转换',
            bgRemover: '背景移除',
            ytPlanner: 'YouTube 策划师',
        },
        imageMaster: {
            title: '影像大师套件',
            desc: '无损压缩、调整大小并增强您的图像。',
            quality: '质量',
            size: '调整尺寸',
            width: '宽度',
            height: '高度',
            smartEnhance: '智能增强',
            smartEnhanceDesc: '使用AI算法修复压缩后损失的边缘和清晰度。',
            original: '原始',
            optimized: '优化结果',
            saveMsg: '节省 {percent}%',
            applyOptimize: '应用并优化',
            downloadOptimized: '下载优化后的图片',
            guide: {
                title: '图像优化与压缩全面指南',
                subtitle: '在不损失画质的情况下提升网站加载速度',
                sections: [
                    {
                        title: '为什么图像压缩很重要',
                        content: '图像通常占网站总大小的 60% 以上。在保持高质量的同时减小文件大小，可以显著提升网站速度并改善 SEO 排名。'
                    },
                    {
                        title: '利用 AI 智能增强',
                        content: '开启 AI 智能增强功能，可以修复压缩过程中可能损失的细节，确保输出图像依然清晰专业。'
                    }
                ],
                faq: [
                    { q: '有文件大小限制吗？', a: '建议上传 10MB 以下的图片。所有处理均在您的浏览器中安全完成。' },
                    { q: '支持压缩 PNG 文件吗？', a: '支持！我们的工具可以智能压缩 JPEG 和 PNG，在减小体积的同时保留透明度。' }
                ]
            }
        },
        promptGen: {
            title: 'AI 提示词生成器',
            desc: '为 Suno、Midjourney 等生成完美的提示词。',
            platform: '平台',
            genre: '风格/流派',
            subject: '主题',
            subjectPlaceholder: '主题是什么？',
            details: '细节描述',
            detailsPlaceholder: '添加风格、光影、乐器或其他具体细节...',
            outputTitle: '生成的提示词',
            copy: '复制',
            copied: '已复制！',
            placeholder: '提示词将显示在这里...',
            platforms: {
                midjourney: 'Midjourney',
                suno: 'Suno',
                stableDiffusion: 'Stable Diffusion',
            },
            genres: {
                'K-Pop': 'K-Pop',
                'Lofi': 'Lofi',
                'Jazz': '爵士',
                'Rock': '摇滚',
                'Electronic': '电子',
                'Acoustic': '原声',
                'Cinematic': '电影感',
                'Anime': '动漫',
                'Cyberpunk': '赛博朋克',
                'Minimalist': '极简主义',
                '3D Render': '3D渲染',
                'Oil Painting': '油画',
            },
            guide: {
                title: 'AI 提示词大师指南',
                subtitle: '如何为 Midjourney 和 Suno 编写完美提示词',
                sections: [
                    {
                        title: 'Midjourney 专业技巧',
                        content: '在主体后添加风格（如 Cinematic）和细节（如 8k, highly detailed）。使用参数（如 --ar 16:9）获得最佳构图。'
                    },
                    {
                        title: 'Suno 音乐生成',
                        content: '使用方括号 [K-Pop, Jazz] 指定流派。在细节中包含情绪和特定乐器有助于创造更好的歌曲。'
                    }
                ],
                faq: [
                    { q: '为什么提示词结构很重要？', a: 'AI 质量取决于具体程度。清晰的结构可帮助 AI 准确理解您的意图，从而获得更好的创意输出。' },
                    { q: '这些可以用于其他 AI 吗？', a: '可以！这里生成的提示词在 DALL-E、Stable Diffusion 和大多数其他生成式 AI 平台上都表现出色。' }
                ]
            }
        },
        ytGrab: {
            title: 'YouTube 缩略图提取器',
            desc: '几秒钟内获取任何 YouTube 视频的高清缩略图。',
            placeholder: '在此粘贴 YouTube URL...',
            getBtn: '获取缩略图',
            invalidUrl: '无效的 YouTube URL。请检查并重试。',
            fetching: '正在获取缩略图...',
            downloadHd: '高清下载',
            editBtn: '专业编辑',
            guide: {
                title: 'YouTube 缩略图提取器完整指南',
                subtitle: '如何安全、快速地下载高画质缩略图',
                sections: [
                    {
                        title: '如何提取缩略图',
                        content: '1. 复制您想要的 YouTube 视频或 Shorts 的链接。\n2. 将链接粘贴到上面的输入框中。\n3. 点击“获取缩略图”按钮。\n4. 选择您需要的分辨率并点击下载。'
                    },
                    {
                        title: '主要功能',
                        content: '• 支持高达 4K 和全高清分辨率\n• 完美支持 YouTube Shorts 短视频\n• 100% 免费 - 无需注册或登录\n• 安全可靠的直接下载方式'
                    },
                    {
                        title: '版权提示',
                        content: '缩略图的版权归原作者所有。商业使用或重新发布前，请务必获得原作者的许可。'
                    }
                ],
                faq: [
                    { q: '最高分辨率是多少？', a: '取决于视频本身，最高可支持 1920x1080 (高清) 分辨率。' },
                    { q: '支持 Shorts 视频吗？', a: '支持，输入 Shorts 链接即可像普通视频一样提取。' },
                    { q: '图片无法显示怎么办？', a: '请检查链接是否正确。私有视频或已删除的视频无法提取缩略图。' }
                ]
            }
        },
        qrGen: {
            title: '免费高级 QR 代码生成器',
            desc: '为商业、社交媒体和 Wi-Fi 连接设计自定义 QR 代码。支持高分辨率图像和矢量格式。',
            target: '输入要链接的网页地址 (URL) 或文本',
            fgColor: 'QR 代码强调色',
            bgColor: '背景颜色设置',
            size: '输出图像分辨率',
            downloadPng: '保存高清 PNG',
            vectorReady: '正在准备用于印刷的高清矢量文件...',
            guide: {
                title: '助力业务增长的 QR 代码完美应用策略',
                subtitle: '超越简单的信息传递，将其作为专业营销工具的使用技巧',
                sections: [
                    {
                        title: '1. 提高 QR 代码扫描识别率的核心技巧',
                        content: 'QR 代码的核心在于“可读性”。背景与代码之间的对比度（Contrast）越明显，所有智能手机的识别速度就越快。我们建议使用深色系而不是浅色系作为代码颜色。我们的工具应用了标准纠错算法，即使代码受到轻微污染或遮挡，也能保证稳定识别。'
                    },
                    {
                        title: '2. 线下营销中的 QR 代码应用案例',
                        content: '• 智能名片：将联系方式和作品集链接印在名片上。\n• 餐厅菜单：通过非接触式菜单查看，同时兼顾卫生和效率。\n• 活动门票：自动化的门票确认流程。\n• Wi-Fi 自动连接：扫描即可连接，无需手动输入繁琐密码。'
                    },
                    {
                        title: '3. 静态 QR 代码与动态 QR 代码的区别',
                        content: 'UltraUtils 生成的 QR 代码是“静态（Static）”方式。这意味着输入的信息直接嵌入在代码内部，无需互联网即可识别，且具有永久有效、无有效期限制的巨大优势。但由于无法更改已生成代码的目标地址，生成时请务必确认信息无误。'
                    }
                ],
                faq: [
                    { q: 'QR 代码无法扫描，为什么？', a: '通常是因为颜色对比度不足，或代码打印得太小。此外，代码周围如果没有留出足够的“空白区域（Quiet Zone）”，也会导致识别困难。' },
                    { q: '生成的 QR 代码可以用于商业用途吗？', a: '是的，通过 UltraUtils 生成的所有 QR 代码均可用于商业用途，无任何版税或限制。' }
                ]
            }
        },
        textConverter: {
            title: '全能文本解决方案：专业文本转换与整理工具',
            desc: '从大小写转换到数据清洗、编码转换，一站式解决所有文本处理需求。是数据分析师和开发者的必备工具。',
            inputPlaceholder: '在此输入文本或粘贴要分析的数据...',
            statsCharacters: '总字符数',
            statsWords: '单词数 (空格分隔)',
            statsLines: '总行数',
            categoryCase: '字母大小写转换',
            categoryCleanup: '文本清洗与整理',
            categoryWeb: 'Web 开发与编码',
            categoryData: '数据排序与过滤',
            btnUppercase: '全部大写',
            btnLowercase: '全部小写',
            btnCapitalize: '首字母大写',
            btnTrim: '删除多余空格',
            btnRemoveEmpty: '删除空行',
            btnRemoveDupes: '删除重复行',
            btnRemoveDupesWords: '删除重复词汇',
            btnUrlEncode: 'URL 编码',
            btnUrlDecode: 'URL 解码',
            btnBase64Encode: 'Base64 编码',
            btnBase64Decode: 'Base64 解码',
            btnJsonFormat: 'JSON 格式化美化',
            btnSortAz: '按字母升序排列',
            btnSortZa: '按字母降序排列',
            btnCopy: '复制处理结果',
            btnCopied: '已成功复制到剪贴板！',
            btnClear: '清空所有内容',
            guide: {
                title: '提高数据处理效率的文本转换器应用方法',
                subtitle: '超越简单转换，提升工作效率的商业级编辑技术',
                sections: [
                    {
                        title: '1. 通过文本清洗 (Cleanup) 提高数据质量',
                        content: '从 Excel 或网络上复制数据时，经常会出现多余的重复行或空格。通过一键执行“删除重复行”和“删除空行”，快速获取干净的原始数据。'
                    },
                    {
                        title: '2. 面向开发者的编码与解码工具',
                        content: '在处理 URL 参数或 API 响应时，经常需要即时确认 URL Encode 或 Base64 数据。无需搭建复杂的本地开发环境，直接在浏览器中验证和转换数据。'
                    },
                    {
                        title: '3. JSON Prettify：打造易读的代码',
                        content: '将压缩成一行的、难以阅读的 JSON 数据按层次结构整齐排列。在代码审查 (Review) 或调试过程中，能极大帮助您一眼看清数据结构。'
                    }
                ],
                faq: [
                    { q: '处理的文本量有限制吗？', a: '可以处理数万行的巨量文本。所有运算均在您的浏览器本地进行，速度极快且极其安全。' },
                    { q: '中英文混合文本也能正常处理吗？', a: '是的，完美支持多语言 Unicode，处理中英韩、特殊字符混合的文本毫无压力。' }
                ]
            }
        },
        bgRemover: {
            title: 'AI 背景移除',
            desc: '使用人工智能立即移除照片背景。',
            preparing: '准备 AI 中...',
            processing: '正在移除背景...',
            modelLoading: '正在加载 AI 引擎 (约 20MB)...',
            downloadReady: '下载透明格式图片',
            dropMsg: '将照片拖到此处',
            comparison: '前后对比',
            stepFetch: '正在准备图片...',
            stepModel: '正在加载 AI 模型...',
            stepInference: '正在移除背景...',
            refineTitle: '手动修整模式',
            refineDesc: '使用画笔恢复部分内容或进一步擦除。',
            brushRestore: '恢复',
            brushErase: '擦除',
            brushSize: '画笔大小',
            applyRefine: '应用更改',
            cancelRefine: '取消',
            stickerEffect: '贴纸效果',
            stickerColor: '贴纸颜色',
            backgroundColor: '背景颜色',
            bgTransparent: '透明',
            bgSolid: '纯色',
            bgGradient: '渐变',
            bgImage: '自定义',
            undo: '撤销',
            redo: '重做',
            reset: '重置',
            zoom: '缩放',
            showGuide: '显示指南',
            idPhoto: '证件照大师',
            passport: '护照照片 (3.5x4.5cm)',
            usVisa: '美国签证 (2x2英寸)',
            idCard: '身份证/证件 (3x4cm)',
            bgLibrary: 'AI 배경 라이브러리',
            designTemplates: '设计模板',
            templateInsta: '影集快拍 (Story)',
            templateYoutube: 'YouTube 缩略图',
            templateProduct: '宣传用/产品 (Product)',
            batchMode: '大批量模式',
            batchProcessing: '实时批量处理',
            batchUploadMore: '添加更多图片',
            batchStart: '开始处理全部',
            batchRemaining: '剩余项目',
            batchComplete: '处理完成！',
            uploadCustomBg: '上传自定义背景',
            addText: '添加文本',
            deleteText: '删除',
            deleteImage: '删除图像',
            resetPos: '重置位置',
            subjectScale: '缩放',
            brightness: '亮度',
            contrast: '对比度',
            saturation: '饱和度',
            filterPresets: '滤镜和预设',
            filterOriginal: '原图',
            filterBW: '黑白',
            filterSepia: '棕褐色',
            filterWarm: '暖色',
            filterCool: '冷色',
            filterVintage: '复古',
            textEditing: '文本编辑器',
            textPlaceholder: '输入内容...',
            textSize: '大小',
            stickerWidth: '边框厚度',
            shortsCrop: '9:16 竖屏',
            share: '分享',
            guide: {
                title: 'AI 背景移除与抠图指南',
                subtitle: '利用 AI 技术在 5 秒内移除复杂背景',
                sections: [
                    {
                        title: '如何获得最佳效果',
                        content: '主体与背景之间的对比度越高，效果越干净。对于复杂背景，您可以使用“手动修整模式”来微调细节。'
                    },
                    {
                        title: '使用贴纸效果',
                        content: '移除背景后，开启“贴纸效果”可以添加白色描边，非常适合设计周边产品或制作 YouTube 缩略图。'
                    }
                ],
                faq: [
                    { q: '我的数据安全吗？', a: '安全。您的照片不会上传到服务器，所有处理都在您的设备（浏览器）上直接完成。' },
                    { q: '可以移除视频背景吗？', a: '目前仅支持图片（JPG、PNG、WebP）。视频支持将在未来更新中推出。' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF 大师',
            desc: '强大的 PDF 合并、拆分和图像转换工具。',
            merge: '合并 PDF',
            split: '拆分 PDF',
            toImage: 'PDF 转图片',
            uploadMsg: '将 PDF 文件拖到此处或点击选择',
            filesSelected: '个文件已选择',
            mergeNow: '立即合并',
            splitNow: '立即拆分',
            downloadMerged: '下载合并后的 PDF',
            downloadSplit: '下载拆分后的文件',
            addMore: '添加更多文件',
            guide: {
                title: 'PDF 管理终极指南',
                subtitle: '如何像专业人士一样管理和编辑您的 PDF 文件',
                sections: [
                    {
                        title: '如何合并 PDF',
                        content: '1. 选择并上传您想要合并的多个 PDF 文件。\n2. 检查顺序并点击“立即合并”。\n3. 立即下载合并后的文档。'
                    },
                    {
                        title: '隐私与安全',
                        content: '所有 PDF 处理都在您的浏览器本地完成。您的文件永远不会上传到任何服务器，确保 100% 的隐私。'
                    }
                ],
                faq: [
                    { q: '是否有文件数量限制？', a: '为了获得最佳性能，我们建议一次最多合并 50 个文件。' },
                    { q: '我可以处理大型 PDF 文件吗？', a: '是的，尽管这取决于您的设备性能，通常 100MB 以内的文件都能流畅处理。' }
                ]
            }
        },
        home: {
            badge: '所有工具都是免费的且注重隐私',
            titlePrefix: '为现代创作者提供的',
            titleSuffix: '数字超级能力',
            desc: '精选的高性能实用工具集。',
            descLine2: '无需注册，无需付费，只有纯粹的功能。',
            launchTool: '运行工具',
        },
        advertise: {
            title: '广告投放',
            desc: '在 UltraUtils 上向全球创作者社区展示您的产品。',
            slotsTitle: '可用广告位',
            formTitle: '发送查询',
            name: '姓名 / 公司',
            email: '电子邮件地址',
            dates: '期望日期',
            message: '内容 (广告链接等)',
            submit: '发送查询',
            success: '查询发送成功。我们将尽快与您联系！',
            slotTop: '顶部顶级横幅',
            slotSide: '侧边滚动固定位',
            slotBottom: '底部任务完成位',
            faq: [
                { q: '广告费用如何计算？', a: '根据广告位和时长收取少量运营支持费。请联系我们，我们将根据当前的流量数据为您提供合理的建议。' },
                { q: '支持视频广告吗？', a: '目前仅支持图片和文字横幅，以保证网站의访问速度。' },
                { q: '需要提前多久预订？', a: '热门位置可能会提前订满。建议您至少提前 1-2 周联系。' },
                { q: '有哪些支付方式？', a: '目前支持银行转账及相关支付平台。具体的支付流程和细节将在咨询时详细说明。' }
            ]
        },
        houseAds: {
            bgRemoverTitle: '专业 AI 背景移除',
            bgRemoverDesc: 'AI 3秒完成完美抠图。立即免费体验。',
            ytGrabTitle: 'YouTube 封面大师',
            ytGrabDesc: '立即提取高画质封面。创作者必备工具！',
            imageCompTitle: '无损图片压缩',
            imageCompDesc: '缩小体积，保持画质。SEO优化的首选。',
            pdfMasterTitle: '终极 PDF 大师',
            pdfMasterDesc: '一站式完成 PDF 合并、拆分和图片转换。',
            coffeeTitle: '请我们喝杯咖啡？',
            coffeeDesc: '您的支持是 UltraUtils 保持免费和快速的动力！☕️'
        },
        footer: {
            tools: '热门工具',
            resources: '资源中心',
            legal: '法律条款',
            support: '支持与赞助',
            privacy: '隐私政策',
            terms: '服务条款',
            advertise: '投放广告',
            coffee: '请开发者喝杯咖啡',
            allRights: '保留所有权利。',
            social: '关注我们',
            about: '关于我们',
            contact: '联系我们',
        },
        privacy: {
            title: '隐私政策',
            lastUpdated: '最后更新: 2026年2月15日',
            sections: [
                {
                    title: '1. 信息收集与使用',
                    content: 'UltraUtils 是一款无需注册即可使用的服务。我们不会直接收集您的姓名、电子邮件地址等个人身份信息。所有服务均匿名使用，处理后的数据实时保留在您的浏览器中。'
                },
                {
                    title: '2. Cookie 与个性化',
                    content: '本网站使用 Cookie 来优化用户体验并分析广告效果。包括 Google 在内的第三方供应商会根据用户之前访问本网站或其他网站的情况，在您的网站上投放广告。您可以访问 Google 广告设置页面，选择退出个性化广告。'
                },
                {
                    title: '3. 数据安全与本地处理',
                    content: '我们的核心工具（如背景移除、PDF 合并）均采用本地浏览器渲染。您的文件永远不会上传到我们的服务器，确保您的数据在您自己的设备上保持私密和安全。'
                },
                {
                    title: '4. 第三方链接',
                    content: '我们的服务可能包含指向外部网站或广告横幅的链接。我们不对这些网站的隐私惯例负责，并建议您在访问时阅读其政策。'
                }
            ]
        },
        terms: {
            title: '服务条款',
            lastUpdated: '最后更新: 2026年2月15日',
            sections: [
                {
                    title: '1. 目的与接受',
                    content: '这些条款管理您对 UltraUtils 提供的网页工具的使用。访问本网站即表示您确认已阅读、理解并同意受这些条款的约束。'
                },
                {
                    title: '2. 使用限制',
                    content: '您同意不参与破坏服务稳定性或将我们的工具用于非法目的의 活动。严禁未经明确允许抓取或复制内容。'
                },
                {
                    title: '3. 责任限制',
                    content: '虽然我们力求最高质量，但对于因服务中断、数据错误或使用工具而产生的任何直接或间接损失，UltraUtils 不承担任何责任。所有工具均按“原样”提供。'
                },
                {
                    title: '4. 知识产权',
                    content: 'UltraUtils 的徽标、设计和文本内容均属于我们的知识产权。但是，用户保留通过我们的工具生成的任何输出（如二维码、处理后的图像）的全部所有权。'
                }
            ]
        },
        about: {
            title: '关于 UltraUtils',
            subtitle: '开启更快速、更安全的数字化工作流程',
            sections: [
                {
                    title: '我们的使命',
                    content: 'UltraUtils 旨在提供一个专业的数字环境，让创作者、开发者和普通用户无需复杂的安装 or 注册即可执行任务。我们专注于实用性和简洁性。'
                },
                {
                    title: '为什么选择 UltraUtils？',
                    content: '隐私是我们的重中之重。与许多将文件发送到服务器的工具不同，我们利用现代 Web 技术直接在您的浏览器中处理一切。体验速度与安全兼备의 创新。'
                },
                {
                    title: '全球平台',
                    content: '我们支持多种语言以打破障碍，并定期更新我们的工具包，以最大限度地提高全球用户的生产力。'
                }
            ]
        },
        contact: {
            title: '联系 我们',
            subtitle: '有什么问题或建议吗？',
            desc: '无论是功能请求、业务咨询还是错误报告，我们都珍视您的反馈。',
            infoTitle: '支持渠道',
            infoEmail: 'official.ultrautils@gmail.com',
            infoResponse: '我们力求在工作日 24 小时内回复。'
        },
        notFound: {
            title: '您迷路了吗？',
            desc: '您寻找的页面不存在。请检查网址或点击下方按钮返回主页。',
            backHome: '返回主页',
        },
        feedback: {
            title: '今天的工具对您有用吗？',
            useful: '非常有用的！ 👍',
            neutral: '还可以 😐',
            improve: '有待改进 🔧',
            placeholder: '请随时 share 您需要的功能或反馈...',
            submit: '发送反馈',
            success: '感谢您的反馈！',
            commitment: '我们将根据您的宝贵建议，每天努力改进我们的工具。',
        },
        share: {
            title: '喜欢这个工具吗？分享给你的朋友吧！',
            copy: '复制链接',
            copied: '已复制！',
            twitter: 'X (推特)',
            facebook: '脸书',
            whatsapp: 'WhatsApp',
        },
        ytPlanner: {
            title: 'AI YouTube 视频策划大师',
            desc: '一键免费生成能引爆播放量的标题、标签和剧本草案。',
            placeholder: '输入主题，AI 将为您编写策划方案...',
            generateBtn: '免费生成 AI 策划案',
            generating: 'AI 正在为您制定病毒式传播策略...',
            tabTitles: '推荐标题',
            tabScripts: '剧本草稿',
            tabTags: '标签与关键字',
            tabStrategy: '曝光策略',
            videoType: '视频类型',
            vlog: '生活 VLOG',
            info: '知识科普',
            review: '产品评测',
            shorts: '短视频/挂载',
            topic: '核心主题',
            topicPlaceholder: '例如：北京美食探店，新款相机使用体验等',
            advancedOptions: '高级选项',
            tone: '视频基调',
            toneFunny: '幽默风趣',
            toneSerious: '严谨专注',
            toneProfessional: '专业权威',
            targetAudience: '目标受众',
            targetGeneral: '大众用户',
            targetExpert: '专业人士',
            targetBeginner: '零基础新手',
            resultsTitle: 'AI 策划报告',
            setupTab: '方案设置',
            resultsTab: '结果报告',
            copyAll: '复制全部内容',
            copied: '已复制到剪贴板！',
            guide: {
                title: 'YouTube 成功策略指南',
                subtitle: '攻克点击率与播放量的算法秘籍',
                sections: [
                    {
                        title: '1. 引爆点击的标题艺术 (CTR)',
                        content: '80% 的播放量由封面和标题决定。不要只是罗列事实，要学会激发好奇心（如："从未公开的秘密..."）或强调即时价值。我们的 AI 基于海量热门数据为您量身打造高点击率标题。'
                    },
                    {
                        title: '2. 让 Google 爱上您的 SEO 优化',
                        content: 'YouTube 是全球第二大搜索引擎。在描述的前两行放入核心关键字并合理配置标签，不仅能获得 YouTube 推荐，还能在 Google 搜索结果中占据高位。'
                    },
                    {
                        title: '3. 留住观众的剧本结构 (Retention)',
                        content: '开头 15 秒是留存的关键。在视频开始时明确展示观众能获得的价值。AI 剧本指南采用心理学结构设计，助您最大化延长观看时长。'
                    }
                ],
                faq: [
                    { q: 'AI 生成的标题可以直接用吗？', a: '当然可以！但建议在候选方案中挑选最符合您风格的一个稍作调整，这样效果会更好。' },
                    { q: '标签应该越多越好吗？', a: '不是的。放入无关标签会混淆算法。建议只使用 AI 推荐的最核心的 10-15 个关键词。' },
                    { q: '这个工具收费吗？', a: '完全免费。UltraUtils 的目标是助力全球创작者的成长。' }
                ]
            }
        }
    }
};
