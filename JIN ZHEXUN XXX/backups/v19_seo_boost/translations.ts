export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'es' | 'de' | 'pl';

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
        trySample: string;
        copyImage: string;
        imageCopied: string;
        imageCopyError: string;
        total: string;
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
        pdfMaster: string;
        imageRestorer: string;
        screenRecorder: string;
        revenueCalc: string;
        allTools: string;
        megaMenu: string;
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
        simulatorTitle: string;
        simulatorSubtitle: string;
        simulatorDesc: string;
        safeZoneBtn: string;
        shortsSafeZoneBtn: string;
        colorPalette: string;
        closeBtn: string;
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
        downloadSvg: string;
        vectorReady: string;
        uploadLogo: string;
        logoSize: string;
        removeLogo: string;
        templates: string;
        styles: string;
        frames: string;
        frameText: string;
        presets: {
            instagram: string;
            youtube: string;
            link: string;
            wifi: string;
        };
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
        smartExtract: string;
        smartExtractDesc: string;
        selectObject: string;
        clickToExtract: string;
        backToSelection: string;
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
        idPhoto: string;
        passport: string;
        usVisa: string;
        idCard: string;
        bgLibrary: string;
        uploadCustomBg: string;
        addText: string;
        deleteText: string;
        deleteImage: string;
        resetPos: string;
        subjectScale: string;
        brightness: string;
        contrast: string;
        saturation: string;
        rotation: string;
        flipH: string;
        flipV: string;
        opacity: string;
        shadow: string;
        tabTransform: string;
        tabEnhance: string;
        tabStyling: string;
        alignment: string;
        centerH: string;
        centerV: string;
        bringToFront: string;
        sendToBack: string;
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
        shareText: string;
        photoMode: string;
        studio: string;
        original: string;
        result: string;
        compare: string;
        scale: string;
        bgTrsp: string;
        bgClr: string;
        bgGrad: string;
        bgImg: string;
        scaleLabel: string;
        smartClick: string;
        roughLasso: string;
        clickPrompt: string;
        lassoPrompt: string;
        resetConfirmTitle: string;
        resetConfirmDesc: string;
        aspectTitle: string;
        aspectSquare: string;
        aspectSocial: string;
        aspectTV: string;
        edgeTitle: string;
        edgeDesc: string;
        precisionTitle: string;
        precisionDesc: string;
        proBgTitle: string;
        proBgDesc: string;
        aiThinking: string;
        panView: string;
        brush: string;
        selection: string;
        fontGothic: string;
        fontSerif: string;
        fontMono: string;
        fontHandwriting: string;
        fontDefault: string;
        smartTrim: string;
        smoothStream: string;
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
        rotate: string;
        protect: string;
        uploadMsg: string;
        filesSelected: string;
        mergeNow: string;
        splitNow: string;
        rotateNow: string;
        protectNow: string;
        downloadMerged: string;
        downloadSplit: string;
        addMore: string;
        clear: string;
        pageRange: string;
        password: string;
        options: string;
        processingMsg: string;
        successMsg: string;
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
        missionTitle: string;
        missionDesc1: string;
        missionDesc2: string;
        features: {
            privacy: { title: string; desc: string };
            speed: { title: string; desc: string };
            global: { title: string; desc: string };
            free: { title: string; desc: string };
        };
        footerNote: {
            title: string;
            subtitle: string;
            media: { title: string; desc: string };
            data: { title: string; desc: string };
            design: { title: string; desc: string };
        };
        growthTips: {
            title: string;
            subtitle: string;
            tips: {
                title: string;
                desc: string;
                tool: string;
                href: string;
            }[];
        };
        nextStep: string;
        suggestNext: string;
        installPwa: string;
        installPwaDesc: string;
        installBtn: string;
        recentTools: string;
    },
    advertise: {
        title: string;
        desc: string;
        slotsTitle: string;
        formTitle: string;
        name: string;
        namePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        dates: string;
        datesPlaceholder: string;
        message: string;
        messagePlaceholder: string;
        submit: string;
        success: string;
        backToForm: string;
        submitError: string;
        slotTop: string;
        slotTopDesc: string;
        slotHome: string;
        slotHomeDesc: string;
        slotSide: string;
        slotSideDesc: string;
        slotBottom: string;
        slotBottomDesc: string;
        pricePremium: string;
        priceHighCTR: string;
        priceConversion: string;
        benefits: string[];
        partnerMsg: string;
        faqTitle: string;
        faqDesc: string;
        faq: { q: string; a: string }[];
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
        stats: {
            free: string;
            logs: string;
            languages: string;
            utilities: string;
        };
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
    },
    houseAds: {
        bgRemoverTitle: string;
        bgRemoverDesc: string;
        pdfMasterTitle: string;
        pdfMasterDesc: string;
        imageCompTitle: string;
        imageCompDesc: string;
        ytGrabTitle: string;
        ytGrabDesc: string;
        coffeeTitle: string;
        coffeeDesc: string;
        imageRestorerTitle: string;
        imageRestorerDesc: string;
    },
    imageRestorer: {
        title: string;
        desc: string;
        restoreBtn: string;
        remasterBtn: string;
        processing: string;
        enhancement: string;
        resolution: string;
        noise: string;
        face: string;
        color: string;
        original: string;
        restored: string;
        upscaleX2: string;
        upscaleX4: string;
        guide: {
            title: string;
            subtitle: string;
            sections: { title: string; content: string }[];
            faq: { q: string; a: string }[];
        };
    },
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
    },
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
    },
    megaMenu: {
        title: string;
        subtitle: string;
        searchPlaceholder: string;
        noResults: string;
        totalTools: string;
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
            trySample: '샘플 이미지로 테스트하기',
            copyImage: '이미지 복사',
            imageCopied: '이미지가 클립보드에 복사되었습니다!',
            imageCopyError: '이미지 복사에 실패했습니다.',
            total: '총',
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
            pdfMaster: 'PDF 마스터',
            imageRestorer: 'AI 이미지 복구',
            screenRecorder: '웹화면 녹화기',
            revenueCalc: '수익 계산기',
            allTools: '모든 도구 보기',
            megaMenu: '전체 메뉴',
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
                        title: '4. 웹 접근성과 이미지 최적화',
                        content: '고용량 이미지는 느린 인터넷 환경이나 모바일 사용자에게 큰 장벽이 됩니다. 모든 사용자에게 쾌적한 환경을 제공하는 것은 현대 웹의 기본 소양입니다. 이미지 마스터를 통해 누구나 차별 없는 정보 접근성을 보장받을 수 있는 첫걸음을 떼어보세요.'
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
                subtitle: 'Midjourney와 Suno를 위한 완벽한 프롬프트 작성법',
                sections: [
                    {
                        title: '1. AI 프롬프트 엔지니어링의 기초',
                        content: 'AI 모델에게 일을 시키는 것은 주방장에게 요리를 주문하는 것과 같습니다. 단순히 "이미지 그려줘" 보다는 "17세기 네덜란드 유화 화풍으로 아침 햇살이 비치는 사과 이미지를 그려줘"라고 말할 때 훨씬 정교한 결과가 나옵니다. 우리 프롬프트 생성기는 구도, 조명, 화풍 등 전문가들이 자주 사용하는 키워드를 자동으로 조합해 드립니다.'
                    },
                    {
                        title: '2. Midjourney v6 및 최신 모델 최적화',
                        content: '미드저니는 단어의 순서와 파라미터가 매우 중요합니다. --ar 16:9와 같은 종횡비 설정이나 --v 6.0과 같은 모델 지정 코드를 실수 없이 생성해 보세요. 복잡한 영문 묘사가 어려워도, 핵심 키워드 선택만으로 세련된 영문 프롬프트가 완성됩니다.'
                    },
                    {
                        title: '3. Suno AI로 전문가급 음악 생성하기',
                        content: '수노(Suno)와 같은 음악 AI는 가사 창의 분위기뿐만 아니라 스타일 창에 입력되는 메타태그(Metatags)가 곡의 장르를 결정합니다. [Male Vocal, Heavy Metal, Aggressive]와 같이 대괄호를 활용한 태그 기법을 적용하여, 당신이 상상하던 그 멜로디를 현실로 만들어보세요.'
                    },
                    {
                        title: '4. Stable Diffusion 및 Dall-E를 위한 범용성',
                        content: '여기서 생성된 프롬프트는 특정 플랫폼에 국한되지 않습니다. 풍부한 형용사와 스타일 묘사가 포함된 텍스트는 스테이블 디퓨전이나 달이(DALL-E 3) 등 대부분의 이미지 생성 AI에서 높은 이해도를 보입니다. 생성된 내용을 복사하여 다양한 AI에서 테스트해 보세요.'
                    }
                ],
                faq: [
                    { q: '프롬프트가 왜 중요한가요?', a: 'AI는 입력된 텍스트의 구체성에 따라 결과물의 품질이 결정됩니다. 명확하고 구조화된 지침은 AI가 사용자의 의도를 정확히 파악하게 돕습니다.' },
                    { q: '다른 이미지 생성 AI에서도 사용 가능한가요?', a: '네, 여기서 생성된 기본 프롬프트는 DALL-E, Stable Diffusion 등 대부분의 이미지 생성 AI에서도 높은 퀄리티의 결과물을 보장합니다.' },
                    { q: '영어 프롬프트만 가능한가요?', a: '네, 대부분의 고성능 AI 모델은 영어를 가장 정확하게 이해합니다. 우리 도구는 한글 선택지를 통해 자연스러운 고급 영문 프롬프트를 자동으로 구성해 줍니다.' },
                    { q: '생성한 프롬프트를 저장할 수 있나요?', a: '현재는 복사하기 기능을 제공합니다. 마음에 드는 프롬프트는 메모장이나 노션 등에 모아두면 나중에 자신만의 프롬프트 뱅크가 됩니다.' }
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
            simulatorTitle: '유튜브 홈 시뮬레이터',
            simulatorSubtitle: '실제 피드 환경에서 어떻게 보일지 확인하세요',
            simulatorDesc: '이 기능은 실제 유튜브 홈 화면에서의 모바일 노출을 시뮬레이션 합니다.\n다른 경쟁 영상들 사이에서 내 썸네일이 얼마나 잘 보이는지 확인해보세요.',
            safeZoneBtn: '재생시간 겹침 체크',
            shortsSafeZoneBtn: 'Shorts UI 체크',
            colorPalette: '컬러 팔레트',
            closeBtn: '확인 완료',
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
            downloadPng: 'PNG 다운로드 (고화질)',
            downloadSvg: 'SVG 다운로드 (벡터 형)',
            vectorReady: '출력용 고해상도 벡터 준비 작업 수행 중...',
            uploadLogo: '로고 이미지 업로드',
            logoSize: '로고 크기 조절',
            removeLogo: '로고 삭제',
            templates: '비즈니스 템플릿',
            styles: 'QR 스타일 설정',
            frames: '프레임 및 문구',
            frameText: '하단 문구 입력',
            presets: {
                instagram: '인스타그램',
                youtube: '유튜브',
                link: '웹사이트',
                wifi: 'Wi-Fi 접속',
            },
            guide: {
                title: 'QR 코드 활용 가이드',
                subtitle: '마케팅 도구로 활용하는 전문가급 전략 4가지',
                sections: [
                    {
                        title: '1. QR 코드 인식률을 높이는 핵심 팁',
                        content: 'QR 코드의 핵심은 가독성입니다. 배경과 코드의 대비(Contrast)가 뚜렷할수록 모든 스마트폰에서 빠르게 인식됩니다. 너무 밝은 색상보다는 어두운 계열의 색상을 권장하며, 주변에 충분한 여백(Quiet Zone)을 두는 것이 중요합니다. 우리 도구는 표준 오류 복구 알고리즘을 적용하여 안정적인 인식을 보장합니다.'
                    },
                    {
                        title: '2. 마케팅과 브랜딩을 위한 로고 삽입 기법',
                        content: '천편일률적인 흑백 QR 코드보다는 브랜드 컬러를 입히고 중앙에 로고를 삽입하여 사용자에게 신뢰를 주는 것이 중요합니다. 이벤트 페이지, 매장 와이파이 정보, 혹은 스마트 명함 등 목적에 맞는 스타일을 선택하여 세련된 브랜딩을 완성하세요.'
                    },
                    {
                        title: '3. 정적 QR 코드의 특징과 활용성',
                        content: 'UltraUtils에서 생성하는 QR 코드는 정적(Static) 방식입니다. 정보가 코드 내부에 직접 들어있어 인터넷 연결 없이도 영구적으로 사용할 수 있습니다. 유효 기간이 없는 평생 사용 가능한 코드를 무료로 만들어 보세요.'
                    },
                    {
                        title: '4. 인쇄를 위한 벡터(SVG) 포맷의 중요성',
                        content: '명함이나 대형 배너에 인쇄할 때는 PNG보다 SVG 포맷을 추천합니다. 벡터 방식은 아무리 크게 확대해도 계단 현상 없이 선명한 외곽선을 유지하므로, 전문 인쇄물 제작 시에 가장 적합한 형식입니다.'
                    }
                ],
                faq: [
                    { q: 'QR 코드가 스캔이 잘 안 됩니다. 왜 그럴까요?', a: '색상의 대비가 부족하거나, 코드를 너무 작게 인쇄했을 때 주로 발생합니다. 또한 코드 주변에 여백이 충분하지 않아도 인식이 어려울 수 있으니 여유 공간을 확보해 주세요.' },
                    { q: '생성한 QR 코드는 상업적으로 써도 되나요?', a: '네, UltraUtils를 통해 생성된 모든 QR 코드는 상업적 용도로 사용 가능하며 어떠한 로열티나 제한도 없습니다.' },
                    { q: '한글 데이터도 입력할 수 있나요?', a: '네, URL뿐만 아니라 한글 메시지나 긴 텍스트 데이터도 인코딩하여 저장할 수 있습니다.' },
                    { q: '로고 크기가 너무 크면 안 되나요?', a: '로고가 너무 크면 데이터 영역을 너무 많이 가리게 되어 인식이 불가능해질 수 있습니다. 미리보기 화면에서 적절한 크기로 조정해 보시길 권장합니다.' }
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
                subtitle: '업무 효율을 높이는 스마트 편집 기술 4가지',
                sections: [
                    {
                        title: '1. 텍스트 정제(Cleanup) 기능으로 데이터 품질 높이기',
                        content: '엑셀이나 웹에서 데이터를 복사해올 때 발생하는 원치 않는 중복 줄이나 불필요한 공백은 분석을 방해하는 큰 요소입니다. 중복 줄 제거와 빈 줄 삭제 기능을 클릭 한 번으로 수행하여 깨끗하고 정규화된 데이터를 확보하세요.'
                    },
                    {
                        title: '2. 개발자를 위한 인코딩 및 디코딩 유틸리티',
                        content: 'URL 파라미터나 API 응답에서 접하는 URL Encode 및 Base64 데이터를 즉시 확인해야 할 때 유용합니다. 복잡한 로컬 개발 환경을 구축할 필요 없이 브라우저에서 즉석으로 데이터를 변환하고 검증할 수 있습니다.'
                    },
                    {
                        title: '3. 대소문자 변환을 통한 문서 일관성 유지',
                        content: '영문 문서 작성 시 제목에 맞는 대문자 변환(Capitalize)이나 전체 소문자 변환 등이 필요할 때가 있습니다. 하나씩 수정할 필요 없이 전체 텍스트를 한 번에 변환하여 문서의 타이포그래피 통일성을 지키세요.'
                    },
                    {
                        title: '4. 철저한 보안: 100% 로컬 브라우저 처리',
                        content: '민감한 로그 데이터나 개인적인 메모를 온라인 변환기에 붙여넣는 것이 불안하신가요? UltraUtils는 모든 텍스트 처리를 사용자의 웹 브라우저 내에서 직접 수행합니다. 데이터가 서버로 단 1바이트도 전송되지 않으니 안심하고 작업하세요.'
                    }
                ],
                faq: [
                    { q: '변환할 수 있는 텍스트 길이에 제한이 있나요?', a: '일반적인 텍스트는 수만 라인까지도 브라우저 성능 내에서 빠르게 처리됩니다. 다만 수십 MB 이상의 대용량 텍스트는 일시적으로 브라우저가 느려질 수 있습니다.' },
                    { q: '결과물이 서버에 자동으로 저장되나요?', a: '아니요, UltraUtils는 어떠한 사용자 입력 정보도 저장하지 않습니다. 브라우저 창을 닫으면 처리 결과는 즉시 삭제됩니다.' },
                    { q: '암호화된 텍스트도 복호화가 가능한가요?', a: 'Base64와 같이 표준 인코딩 방식은 지원하지만, AES 등 별도의 키가 필요한 암호화 방식은 지원하지 않습니다.' },
                    { q: 'JSON 포맷 기능은 무엇인가요?', a: '한 줄로 뭉쳐놓은 JSON 코드를 보기 좋게 들여쓰기하여 가독성을 높여주는 기능입니다. 디버깅이나 코드 리뷰 시 매우 유용합니다.' }
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
            smartExtract: '스마트 추출',
            smartExtractDesc: '남기고 싶은 개체 주변을 그려서 선택하세요.',
            selectObject: '개체 선택',
            clickToExtract: '사진에서 남기고 싶은 부분을 터치하세요',
            backToSelection: '다시 선택하기',
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
            idPhoto: 'ID 증명사진 마스터',
            passport: '여권 사진 (3.5x4.5cm)',
            usVisa: '미국 비자 (2x2인치)',
            idCard: '반명함/증명 (3x4cm)',
            bgLibrary: 'AI 배경 라이브러리',
            uploadCustomBg: '커스텀 배경 업로드',
            addText: '텍스트 추가',
            deleteText: '삭제',
            deleteImage: '이미지 삭제',
            resetPos: '위치 초기화',
            subjectScale: '객체 스케일',
            brightness: '밝기',
            contrast: '대비',
            saturation: '채도',
            rotation: '회전',
            flipH: '좌우 반전',
            flipV: '상하 반전',
            opacity: '투명도',
            shadow: '그림자 깊이',
            tabTransform: '크기/변형',
            tabEnhance: '색상보정',
            tabStyling: '디자인효과',
            alignment: '배열/정렬',
            centerH: '가로 중앙',
            centerV: '세로 중앙',
            bringToFront: '맨 앞으로',
            sendToBack: '맨 뒤로',
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
            shareText: 'AI 크리에이티브 스튜디오! ⚡',
            photoMode: '사진 모드',
            studio: '스튜디오',
            original: '원본',
            result: '결과물',
            compare: '전/후 비교',
            scale: '스케일',
            bgTrsp: '투명',
            bgClr: '색상',
            bgGrad: '그라데이션',
            bgImg: '이미지',
            scaleLabel: '크기 조절',
            smartClick: '스마트 클릭',
            roughLasso: '자유 선택(올가미)',
            clickPrompt: '개체를 클릭해 주세요',
            lassoPrompt: '개체 주위를 그려주세요',
            resetConfirmTitle: '정말 초기화할까요?',
            resetConfirmDesc: '지금까지 작업한 내용이 모두 사라집니다.',
            aspectTitle: '화면 비율',
            aspectSquare: '1:1 정사각형',
            aspectSocial: '4:5 인스타그램',
            aspectTV: '16:9 와이드/TV',
            edgeTitle: '완벽한 외곽선',
            edgeDesc: '고급 AI가 아주 세밀한 디테일까지 보존합니다.',
            precisionTitle: '정밀한 제어',
            precisionDesc: '수동 브러시로 완벽하게 수정할 수 있습니다.',
            proBgTitle: '프로페셔널 배경',
            proBgDesc: '클릭 한 번으로 증명사진이나 썸네일을 만듭니다.',
            aiThinking: 'AI가 배경을 분석하고 있습니다...',
            panView: '화면 이동',
            brush: '브러시',
            selection: '영역 선택',
            fontGothic: '고딕',
            fontSerif: '명조',
            fontMono: '코딩',
            fontHandwriting: '필기',
            fontDefault: '기본',
            smartTrim: '스마트 트리밍',
            smoothStream: '부드러운 스트림',
            guide: {
                title: 'AI 배경 제거 및 누끼 따기 가이드',
                subtitle: 'AI를 사용하여 5초 만에 복잡한 배경물을 지우는 비법',
                sections: [
                    {
                        title: '1. AI 대비 최적화를 통한 완벽한 누끼',
                        content: '완벽한 배경 제거의 핵심은 피사체와 배경의 명확한 경계입니다. 인물 사진의 경우, 머리카락 한 올까지 살리고 싶다면 피사체와 배경의 색상 대비가 뚜렷한 이미지를 사용해 보세요. 우리 도구는 최신 딥러닝 모델을 사용하여 복잡한 환경에서도 전문적인 수준의 누끼를 제공하지만, 대비가 높을수록 결과물의 선명도가 비약적으로 향상됩니다.'
                    },
                    {
                        title: '2. 수동 수정 모드로 디테일한 마무리',
                        content: 'AI가 미처 인식하지 못했거나 너무 많이 지워진 부분이 있다면 상단의 "수동 수정 모드"를 활용하세요. 지연 없는 캔버스 렌더링 기술이 적용된 정밀 브러시를 통해 원하는 영역만 완벽하게 복구하거나 추가로 지울 수 있습니다. 투명한 물체, 얇은 천, 혹은 복잡한 털을 가진 반려동물 사진을 보정할 때 유용합니다.'
                    },
                    {
                        title: '3. 상업적 활용을 위한 스티커 효과 커스터마이징',
                        content: '단순한 투명화를 넘어, UltraUtils는 증명사진 및 여권 사진 규격 맞춤 기능을 제공합니다. 또한 "스티커 효과(외곽선)" 기능을 활성화하여 피사체를 돋보이게 만들 수 있는데, 이는 굿즈 제작용 도안이나 유튜브 썸네일 제작에 최적화되어 있습니다. 테두리 두께와 색상을 조절하여 나만의 스타일을 완성해 보세요.'
                    },
                    {
                        title: '4. 서버 저장 없는 로컬 처리로 완벽한 개인정보 보호',
                        content: '사진 유출이 걱정되시나요? UltraUtils의 배경 제거 작업은 100% 사용자의 브라우저 로컬 환경에서 수행됩니다. 단 1바이트의 이미지 데이터도 서버로 전송되지 않으므로, 민감한 비즈니스 문서나 개인적인 사진도 안심하고 처리할 수 있는 가장 안전한 선택입니다.'
                    }
                ],
                faq: [
                    { q: '배경을 지우면 화질이 떨어지나요?', a: '아니요. 원본 해상도를 그대로 유지하면서 배경 정보만 투명(Alpha Channel)으로 변환합니다. 고화질 PNG 내보내기를 통해 픽셀 손실 없는 최상의 퀄리티를 보장합니다.' },
                    { q: '투명해진 이미지는 어디에 활용하나요?', a: '유튜브 썸네일 합성, 쇼핑몰 상품 등록, 인스타그램 스토리 스티커, 전문 증명사진 제작 등 모든 디자인 프로젝트에 즉시 활용할 수 있습니다.' },
                    { q: '여러 장을 한꺼번에 처리할 수 있나요?', a: '현재는 정밀한 작업 결과물을 위해 단일 이미지 처리에 집중하고 있습니다. 대량의 이미지를 한 번에 처리하는 일괄 작업 기능은 추후 업데이트될 예정입니다.' },
                    { q: 'AI가 피사체를 찾지 못하면 어떻게 하나요?', a: '피사체와 배경이 너무 비슷하거나 피사체가 너무 작을 때 발생할 수 있습니다. 피사체가 중앙에 위치하고 배경과 명확히 구분되는 사진으로 다시 시도해 보세요.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF 마스터 PRO',
            desc: '업무 효율을 극대화하는 올인원 PDF 도구. 합치기, 분할, 이미지 변환 및 보안까지 지원합니다.',
            merge: '파일 병합',
            split: '페이지 분할',
            toImage: '이미지 변환',
            rotate: '페이지 회전',
            protect: '비밀번호 설정',
            uploadMsg: 'PDF 파일을 드래그하여 놓거나 클릭하세요',
            filesSelected: '개의 파일 선택됨',
            mergeNow: '결합된 파일 생성',
            splitNow: '전체 페이지 분할',
            rotateNow: '90도 회전 적용',
            protectNow: '비밀번호 암호화',
            downloadMerged: '결합 파일 다운로드',
            downloadSplit: '분할 파일(ZIP) 저장',
            addMore: '파일 추가',
            clear: '목록 비우기',
            pageRange: '페이지 범위 (예: 1-5, 10)',
            password: '비밀번호 입력',
            options: '상세 설정',
            processingMsg: '고성능 엔진으로 PDF 처리 중...',
            successMsg: '작업이 완료되었습니다!',
            guide: {
                title: 'PDF 마스터 활용 가이드',
                subtitle: '전문가처럼 PDF 문서를 관리하고 편집하는 4가지 효율적인 방법',
                sections: [
                    {
                        title: '1. 스마트 PDF 병합 및 메타데이터 최적화 전략',
                        content: '여러 개의 PDF 파일을 하나로 합치는 것은 단순한 결합 이상의 의미가 있습니다. UltraUtils PDF 마스터는 파일 간의 폰트 충돌을 방지하고 메타데이터를 정규화하여, 병합 후에도 깨짐 없는 안정적인 결과물을 생성합니다. 업무 보고서나 학습 자료를 체계적으로 관리하고 싶을 때 최적의 솔루션을 제공합니다.'
                    },
                    {
                        title: '2. 정밀한 페이지 추출 및 분할 기술',
                        content: '수백 페이지에 달하는 방대한 문서에서 특정 장(Chapter)만 필요하신가요? 페이지 범위 지정(예: 1-5, 10-12) 기능을 사용하면 원하는 페이지만 정확하게 골라내어 새로운 PDF로 만들 수 있습니다. 전체 페이지를 각각의 파일로 분리하여 관리하고 싶을 때는 ZIP 압축 기능을 통해 일괄 다운로드가 가능합니다.'
                    },
                    {
                        title: '3. 고해상도 PDF to Image 변환 엔진',
                        content: 'PDF 문서의 내용을 슬라이드나 웹 페이지에 활용하고 싶을 때, 우리의 변환 엔진은 텍스트 가독성을 최우선으로 고려합니다. 2.0x 고해상도 렌더링을 기본으로 적용하여, 작은 글씨까지 뭉개짐 없이 선명한 JPEG/PNG 이미지로 변환합니다. 변환된 모든 페이지는 ZIP 파일로 묶어 즉시 저장됩니다.'
                    },
                    {
                        title: '4. 철저한 프라이버시: 100% 로컬 브라우저 처리',
                        content: '계약서나 개인 정보가 담긴 민감한 문서를 온라인 서버에 업로드하는 것이 걱정되시나요? UltraUtils는 모든 데이터 연산을 사용자의 브라우저 내에서 직접 수행합니다. 파일이 외부 서버로 전송되지 않으므로, 데이터 유출 가능성이 0%인 가장 안전한 PDF 편집 환경을 약속드립니다.'
                    }
                ],
                faq: [
                    { q: '합칠 수 있는 파일 수에 제한이 있나요?', a: '기술적인 제한은 없으나 안정적인 처리를 위해 한 번에 50개 내외의 파일 혹은 전체 100MB 이하의 작업을 권장합니다. 기기의 RAM 성능에 따라 더 큰 작업도 가능합니다.' },
                    { q: '비밀번호가 걸린 PDF도 편집 가능한가요?', a: '보안 문제로 암호화된 파일은 직접 처리가 어려울 수 있습니다. 암호를 해해한 후 업로드하여 사용하시기 바랍니다.' },
                    { q: '변환된 이미지는 어디에 저장되나요?', a: '변환 즉시 ZIP 파일 형태로 사용자의 다운로드 폴더에 저장됩니다. 모든 작업 내역은 브라우저 종료 시 자동으로 소멸되어 복구할 수 없습니다.' },
                    { q: '모바일 환경에서도 사용이 가능한가요?', a: '네, 최신 브라우저를 지원하는 스마트폰이라면 별도의 앱 설치 없이도 데스크톱과 동일한 PDF 편집 기능을 바로 이용할 수 있습니다.' }
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
            missionTitle: '개인정보 보호 중심의 초고속 디지털 도구',
            missionDesc1: 'UltraUtils에 오신 것을 환영합니다. 우리는 사용자의 프라이버시를 최우선으로 생각하는 고성능 디지털 유틸리티를 제공합니다. 복잡한 가입이나 숨겨진 비용 없이 전문적인 기능을 누구나 무료로 사용할 수 있습니다.',
            missionDesc2: '우리의 목표는 모든 작업을 브라우저 내에서 직접 처리하여 데이터가 서버로 전송되지 않도록 하는 것입니다. AI 배경 제거, SEO 이미지 최적화, PDF 편집 등 민감한 파일을 서버에 업로드하지 않고도 안전하게 처리할 수 있습니다.',
            features: {
                privacy: { title: '프라이버시', desc: '서버 업로드 없음' },
                speed: { title: '속도', desc: '로컬 프로세싱' },
                global: { title: '글로벌', desc: '다국어 지원' },
                free: { title: '무료', desc: '숨겨진 비용 없음' }
            },
            footerNote: {
                title: '모두를 위한 전문 도구',
                subtitle: '왜 수천 명의 사용자가 UltraUtils를 신뢰하는지 확인해보세요.',
                media: { title: '미디어 스위트', desc: '고품질 유튜브 썸네일 추출 및 AI 배경 제거. 크리에이터를 위한 완벽한 작업 환경.' },
                data: { title: '데이터 & 텍스트', desc: '고급 텍스트 변환 및 정리 도구. 데이터 분석가와 개발자를 위한 필수 도구.' },
                design: { title: '디자인 에셋', desc: '커스텀 스타일링이 가능한 고해상도 QR 코드 생성. 비즈니스 마케팅에 최적화.' }
            },
            growthTips: {
                title: '디지털 성장을 위한 전문가 팁',
                subtitle: '각 도구를 200% 활용하여 수익화와 트래픽을 가속화하세요.',
                tips: [
                    {
                        title: '유튜브 썸네일 전략',
                        desc: '경쟁사 썸네일을 분석하고 실제 피드에서 어떻게 보일지 미리 테스트하세요.',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'SEO 최적화 워크플로우',
                        desc: 'AI 배경 제거 후 즉시 압축하여 구글 검색 노출에 최적인 이미지를 만드세요.',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'AI 크리에이티브 부스트',
                        desc: '정교한 프롬프트 생성기로 당신의 창작 아이디어를 실현가능한 결과물로 바꾸세요.',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: '다음 단계 추천',
            suggestNext: '이 도구와 함께 사용하면 좋은 기능을 추천합니다',
            installPwa: '앱으로 설치하기',
            installPwaDesc: '바탕화면에 추가하여 더 빠르고 편리하게 UltraUtils를 이용하세요.',
            installBtn: '지금 설치',
            recentTools: '최근 사용한 도구'
        },
        advertise: {
            title: '광고 문의',
            desc: 'UltraUtils의 글로벌 크리에이터 커뮤니티에 당신의 제품을 선보이세요.',
            slotsTitle: '사용 가능한 광고 슬롯',
            formTitle: '광고 게재 문의하기',
            name: '성함 / 회사명',
            namePlaceholder: '홍길동 / (주)유틸리티',
            email: '이메일 주소',
            emailPlaceholder: 'example@company.com',
            dates: '희망 노출 기간',
            datesPlaceholder: '예: 2026-03-01 ~ 2026-03-15',
            message: '문의 내용 (제품 설명, 링크 등)',
            messagePlaceholder: '홍보하고 싶은 제품이나 서비스에 대해 알려주세요...',
            submit: '문의 보내기',
            success: '문의가 성공적으로 전달되었습니다. 곧 연락드리겠습니다!',
            backToForm: '양식으로 돌아가기',
            submitError: '전송에 실패했습니다. 다시 시도해 주세요.',
            slotTop: '상단 프리미엄 배너',
            slotTopDesc: '모든 도구 페이지 최상단에 노출되는 728x90 배너입니다. 브랜드 인지도를 극대화하세요.',
            slotHome: '홈 피드 배너',
            slotHomeDesc: '홈페이지 도구 그리드 사이에 자연스럽게 배치됩니다. 높은 클릭률을 보장합니다.',
            slotSide: '사이드바 스카이스크래퍼',
            slotSideDesc: '160x600 크기로 사이드바에 고정 노출되어 지속적인 브랜드 노출이 가능합니다.',
            slotBottom: '하단 전환 배너',
            slotBottomDesc: '모든 도구 페이지 하단에 노출되는 728x90 배너입니다. 구매 전환에 유리합니다.',
            pricePremium: '프리미엄',
            priceHighCTR: '높은 클릭률',
            priceConversion: '구매 전환',
            benefits: [
                '월 10만 명 이상의 활성 사용자',
                'YouTube 크리에이터들의 높은 참여도',
                '글로벌 및 로컬 동시 도달',
                '투명한 퍼포먼스 리포트 제공'
            ],
            partnerMsg: 'UltraUtils와 파트너가 되는 것은 차세대 디지털 빌더들과 연결되는 것을 의미합니다.',
            faqTitle: '광고 문의 FAQ',
            faqDesc: 'UltraUtils 광고 게재에 대해 자주 묻는 질문들입니다.',
            faq: [
                { q: '광고 단가는 어떻게 결정되나요?', a: '슬롯의 위치와 기간에 따라 소정의 운영 지원비를 받고 있습니다. 문의를 주시면 현재 트래픽 성과와 함께 적정 비용을 제안해 드립니다.' },
                { q: '이미지가 아닌 영상 광고도 가능한가요?', a: '현재는 이미지와 텍스트 기반 배너만 지원합니다. 사이트 성능 유지를 위해 지나치게 무거운 애니메이션은 지양하고 있습니다.' },
                { q: '예약은 얼마나 미리 해야 하나요?', a: '인기 있는 상단 슬롯은 미리 마감될 수 있습니다. 희망하시는 날짜의 최소 1~2주 전에는 문의 주시는 것을 권장합니다.' },
                { q: '결제는 어떤 방식으로 진행되나요?', a: '현재는 계좌이체 및 후원 플랫폼을 통한 결제를 지원하고 있습니다. 구체적인 처리 절차와 결제 정보는 문의 시 상담을 통해 안내해 드립니다.' }
            ]
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
            ],
            stats: {
                free: '100% 무료',
                logs: '서버 로그 제로',
                languages: '다국어 지원',
                utilities: '전문가용 도구'
            }
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
                        title: '1. 클릭을 부르는 썸네일 제목의 심리학 (CTR 극대화)',
                        content: '유튜브 조회수의 80%는 썸네일과 제목에서 결정됩니다. 단순히 사실을 나열하기보다 시청자의 호기심을 유발하는 \'정보적 공백(Information Gap)\' 기법이나 즉각적인 보상을 제시하는 문구를 활용하세요. 우리 AI는 수만 개의 히트 영상 데이터를 분석하여, 사람들의 클릭을 유도하는 뇌과학적 원리가 담긴 제목을 제안합니다.'
                    },
                    {
                        title: '2. 검색 상위 노출을 위한 SEO 설명 및 스마트 태그 전략',
                        content: '유튜브는 전 세계 2위의 검색 엔진입니다. 영상 본문 상단 3줄 내에 핵심 키워드를 배치하고, AI가 추천하는 연관 태그들을 적절히 섞어주세요. 이렇게 최적화된 메타데이터는 유튜브 추천 알고리즘뿐만 아니라 구글 검색 결과에서도 상단에 배치될 확률을 비약적으로 높여줍니다.'
                    },
                    {
                        title: '3. 시청 지속 시간(Watch Time)을 늘리는 완벽한 대본 구조',
                        content: '초반 15초의 \'훅(Hook)\'이 영상의 운명을 결정합니다. AI가 제안하는 대본 가이드는 도입부에서의 가치 제안, 중반부에서의 몰입감 유지, 그리고 엔딩에서의 강력한 CTA(구독 유도) 구조를 반영합니다. 이 구조를 따르면 시청 지속 시간이 늘어나 알고리즘의 선택을 받을 확률이 높아집니다.'
                    },
                    {
                        title: '4. 쇼츠(Shorts) 알고리즘을 공략하는 숏폼 기획 비결',
                        content: '60초 이내에 승부를 봐야 하는 쇼츠는 호흡이 훨씬 빨라야 합니다. 쇼츠 전용 기획 옵션을 사용하면 루프(Loop)를 유도하거나 반전을 선사하는 숏폼 전용 엔진이 가동됩니다. 짧지만 강렬한 인상을 남기고 반복 시청을 유도하는 전략을 만나보세요.'
                    }
                ],
                faq: [
                    { q: 'AI가 만든 제목을 그대로 써도 되나요?', a: '네, 물론입니다! 하지만 제안된 후보들 중 채널의 톤앤매너에 가장 잘 맞는 것을 골라 자신의 개성을 한 스푼 더해주면 훨씬 강력한 효과를 발휘합니다.' },
                    { q: '태그는 무조건 많이 넣는 게 좋은가요?', a: '아니요. 관련 없는 태그의 남발은 오히려 알고리즘에 혼선을 줍니다. 우리 AI가 선별해 드리는 가장 영향력 있는 10-15개의 핵심 키워드 위주로 사용하세요.' },
                    { q: '기획 리포트를 나중에 다시 볼 수 있나요?', a: '현재는 세션이 유지되는 동안에만 확인할 수 있습니다. 중요한 기획안은 우측 하단의 \'내용 복사하기\' 버튼을 눌러 메모장이나 노션에 저장해 두시는 것을 권장합니다.' },
                    { q: '외국어 자막용 기획도 가능한가요?', a: '네, 다국어 설정을 통해 영어, 일본어 등 글로벌 시청자를 위한 제목 및 설명 기획도 곧 지원될 예정입니다.' }
                ]
            }
        },
        houseAds: {
            bgRemoverTitle: '전문가급 배경 제거',
            bgRemoverDesc: 'AI로 클릭 한 번에 깨끗하게 배경을 지우세요.',
            pdfMasterTitle: '스마트 PDF 편집기',
            pdfMasterDesc: '합치기, 나누기, 이미지 변환까지 한곳에서.',
            imageCompTitle: '초고성능 이미지 압축',
            imageCompDesc: '화질 저하 없이 용량을 혁신적으로 줄이세요.',
            ytGrabTitle: '유튜브 썸네일 추출',
            ytGrabDesc: '고화질 썸네일을 즉시 다운로드하고 편집하세요.',
            coffeeTitle: '안티에게 커피 한 잔',
            coffeeDesc: '더 나은 도구 제작을 위해 따뜻한 응원을 부탁드립니다.',
            imageRestorerTitle: 'AI 이미지 복구',
            imageRestorerDesc: '흐릿한 사진을 선명하게.',
        },
        imageRestorer: {
            title: 'AI 이미지 복구 및 리마스터',
            desc: '희미한 사진, 낡고 손상된 이미지를 AI가 분석하여 고화질로 복구하고 리마스터합니다.',
            restoreBtn: '복구하기',
            remasterBtn: '리마스터링',
            processing: 'AI가 이미지를 정밀 분석 중입니다...',
            enhancement: '디테일 강화',
            resolution: '해상도 개선',
            noise: '노이즈 제거',
            face: '얼굴 복원',
            color: '색상 보정',
            original: '원본 이미지',
            restored: '복구된 이미지',
            upscaleX2: '2배 확대',
            upscaleX4: '4배 확대',
            guide: {
                title: 'AI 이미지 복구 및 리마스터 전문 가이드',
                subtitle: '소중한 추억을 4K 고화질로 되살리는 AI 기술의 모든 것',
                sections: [
                    {
                        title: '1. 흐릿하고 초점이 맞지 않는 사진의 정밀 복구',
                        content: '초점이 나갔거나 흔들린 흔적이 있는 사진을 AI가 픽셀 단위로 분석하여 선명하게 재구성합니다. 특히 인물의 눈, 코, 입과 같은 핵심 이목구비를 또렷하게 살려내어 생동감을 불어넣습니다.'
                    },
                    {
                        title: '2. 오래된 낡은 사진의 디지털 리마스터링',
                        content: '장기간 보관으로 인해 색이 바래거나 흠집이 난 옛날 사진을 최신 디지털 기술로 보정합니다. 손상된 데이터 영역을 주변 픽셀과의 상관관계를 통해 복원하고 자연스러운 색감을 입혀 마치 요즘 찍은 듯한 느낌을 줍니다.'
                    },
                    {
                        title: '3. 초해상도(Super Resolution) 업스케일링',
                        content: '작은 이미지를 단순히 늘리는 것이 아니라, AI가 누락된 디테일을 추론하여 채워 넣으며 해상도를 높입니다. 저화질 웹 이미지를 인쇄 가능한 수준의 고화질 에셋으로 변환할 때 필수적인 도구입니다.'
                    },
                    {
                        title: '4. 인물 및 풍경 최적화 알고리즘',
                        content: '인물 사진에는 피부 질감을 부드럽게 살리는 알고리즘을, 풍경 사진에는 대비와 선명도를 강조하는 알고리즘을 적용합니다. 사진의 주제에 맞는 최적의 복구 방식을 통해 이질감 없는 완벽한 결과물을 제공합니다.'
                    }
                ],
                faq: [
                    { q: '이미지가 너무 작아도 복구가 되나요?', a: '네, 2배 및 4배 업스케일 기능을 통해 매우 작은 이미지도 깨짐 없이 선명하게 키울 수 있습니다. 다만 원본 파손이 너무 심할 경우 복구 결과에 차이가 있을 수 있습니다.' },
                    { q: '복구 과정에서 데이터가 서버로 전송되나요?', a: '아니요, UltraUtils는 개인정보 보호를 위해 모든 이미지 처리를 사용자의 기기 내에서 로컬로 수행합니다. 소중한 사진이 외부로 유출될 위험이 전혀 없습니다.' },
                    { q: '복구된 사진을 바로 인쇄해도 되나요?', a: '네, 업스케일링을 통해 해상도가 대폭 향상되므로 일반적인 사진 인화나 디지털 앨범 제작에 충분한 퀄리티를 얻으실 수 있습니다.' },
                    { q: 'Remaster와 Restore의 차이는 무엇인가요?', a: 'Restore는 손상된 부분을 고치는 데 집중하며, Remaster는 전반적인 질감과 색감, 해상도를 개선하여 더욱 현대적인 미감이 느껴지도록 만드는 고급 공정입니다.' }
                ]
            }
        },
        screenRecorder: {
            title: '무설치 웹 화면 녹화기',
            desc: '설치 없이 브라우저에서 화면, 웹캠, 마이크를 바로 녹화하고 프리미엄 화질의 MP4로 저장하세요.',
            startBtn: '녹화 시작',
            stopBtn: '녹화 중지',
            downloadBtn: '비디오 저장 (MP4)',
            webcam: '웹캠 포함',
            mic: '마이크 사용',
            recording: '녹화 진행 중...',
            ready: '녹화 준비 완료',
            guide: {
                title: '웹 화면 녹화 마스터 가이드',
                subtitle: '고품질 강의 및 튜토리얼 제작을 위한 시스템 최적화 노하우',
                sections: [
                    {
                        title: '1. 설치 없는 웹 환경이 주는 보안과 편리함',
                        content: '별도의 프로그램을 설치할 필요 없이 브라우저 내에서 즉시 구동되어 바이러스나 악성코드 걱정 없이 안전하게 녹화할 수 있습니다. 운영체제에 상관없이 크롬이나 웨일 등 최신 브라우저만 있다면 어디서든 작업이 가능합니다.'
                    },
                    {
                        title: '2. 4K/UHD 고해상도 지원 및 품질 최적화',
                        content: 'UltraUtils 화면 녹화기는 브라우저가 제공하는 최고 해상도를 지원합니다. 전체 화면 녹화 시 \'시스템 오디오 공유\'를 체크하면 컴퓨터에서 나는 소리까지 생생하게 담을 수 있습니다. 강의 제작이나 게임 하이라이트 기록에 최적화된 성능을 제공합니다.'
                    },
                    {
                        title: '3. 웹캠 및 마이크 동시 녹화 (PIP 모드)',
                        content: '화면뿐만 아니라 자신의 얼굴(웹캠)과 목소리(마이크)를 동시에 녹화하여 전문적인 튜토리얼 영상을 만드세요. 웹캠 화면은 자유롭게 위치를 조정할 수 있어 시청자에게 더 친숙하고 신뢰감 있는 메시지를 전달할 수 있습니다.'
                    },
                    {
                        title: '4. 개인정보 보호를 위한 로컬 인코딩 기술',
                        content: '우리는 귀하의 민감한 화면 데이터가 서버로 전송되는 것을 원치 않습니다. 모든 인코딩 작업은 사용자의 브라우저 내에서 즉시 처리되며, 녹화 중지 버튼을 누르는 순간 바로 MP4 파일로 저장됩니다. 기업 내부 기밀 회의나 개인적인 작업도 안심하고 녹화하세요.'
                    }
                ],
                faq: [
                    { q: '녹화 시간 제한이 있나요?', a: '브라우저 메모리 용량이 허용하는 한 무제한으로 녹화가 가능합니다. 단, 시스템 안정성을 위해 1시간 단위로 나누어 녹화하시는 것을 권장합니다.' },
                    { q: '시스템 소리가 녹음되지 않아요. 어떻게 하죠?', a: '전체 화면 공유를 선택할 때 하단의 \'시스템 오디오 공유\' 체크박스를 반드시 활성화해야 합니다. 특정 탭만 녹화할 때는 해당 탭의 소리만 기록됩니다.' },
                    { q: '저장된 MP4 파일이 재생되지 않는 경우', a: '일부 구형 플레이어에서 코덱 문제로 재생이 안 될 수 있습니다. 최신 버전의 VLC 플레이어나 브라우저에 파일을 드래그하여 재생해 보시기 바랍니다.' },
                    { q: '모바일에서도 녹화가 가능한가요?', a: '현재 화면 녹화 API는 데스크톱 브라우저 환경에 최적화되어 있습니다. 모바일은 브라우저 정책상 지원되지 않을 수 있으니 PC 환경을 이용해 주세요.' }
                ]
            }
        },
        revenueCalc: {
            title: '유튜브 수익 및 성장 분석기',
            desc: '새 영상을 기획 중이신가요? 예상 수익과 성장 전략 보고서를 받아보세요.',
            views: '일일 예상 조회수',
            cpm: '예상 CPM ($)',
            calculate: '수익 분석하기',
            resultDaily: '일일 예상 수익',
            resultMonthly: '월간 예상 수익',
            resultYearly: '연간 예상 수익',
            growthTip: '성장 가속 팁',
            guide: {
                title: '유튜브 수익 극대화 전략 가이드',
                subtitle: '당신의 채널 성장을 가속화하고 수익(RPM)을 2배 높이는 비결',
                sections: [
                    {
                        title: '1. 광고주가 지불하는 CPM vs 실제 내 수익 RPM 이해하기',
                        content: '광고주가 1,000회 노출당 지불하는 금액(CPM)보다 실제 채널 운영자 주머니에 들어오는 순수익 단위인 RPM 관리가 훨씬 중요합니다. UltraUtils 수익 계산기는 이러한 플랫폼 수수료와 시청 지속 시간을 고려하여 보다 현실적인 추정치를 제공합니다.'
                    },
                    {
                        title: '2. 조회수당 수익을 결정짓는 3가지 핵심 요소',
                        content: '유튜브 수익은 단순히 조회수만으로 결정되지 않습니다. 시청자의 국가(지리적 위치), 영상의 주제(카테고리), 그리고 시청 연령층에 따라 광고 단가가 천차만별입니다. 금융이나 비즈니스 주제는 엔터테인먼트보다 보통 3~5배 높은 수익을 창출합니다.'
                    },
                    {
                        title: '3. 미드롤 광고 배치를 통한 수익 극대화 전략',
                        content: '8분 이상의 영상은 중간 광고(Mid-roll)를 수동으로 배치할 수 있습니다. 시청 흐름이 끊기지 않는 지점에 전략적으로 광고를 배치하면 동일한 조회수 대비 수익을 최대 2배까지 높일 수 있다는 연구 결과가 있습니다.'
                    },
                    {
                        title: '4. 알고리즘 노출과 수익의 상관관계 분석',
                        content: '높은 클릭률(CTR)과 시청 지속 시간은 알고리즘이 영상을 더 많은 사람에게 추천하게 만드는 핵심 지표입니다. 트래픽이 늘어나면 광고 경쟁이 붙어 자연스럽게 수익성이 개선됩니다. 수익 도구를 통해 목표치를 설정하고 채널 성장을 가속화하세요.'
                    }
                ],
                faq: [
                    { q: '계산 결과가 실제 내 수익과 왜 다른가요?', a: '제공되는 데이터는 업계 평균 데이터를 기반으로 한 추정치입니다. 실제 수익은 시청 시간, 광고 노출 위치, 시즌(연말 성수기 등)에 따라 변동될 수 있습니다.' },
                    { q: '어떤 카테고리가 광고 단가가 가장 높은가요?', a: '일반적으로 금융(Finance), 비즈니스(Business), IT/테크(Technology) 분야의 CPM이 가장 높습니다. 이는 광고주들 간의 경쟁이 치열하기 때문입니다.' },
                    { q: '쇼츠(Shorts) 수익은 어떻게 계산하나요?', a: '쇼츠는 일반 영상과 수익 창출 구조가 다릅니다. 현재 도구는 롱폼 영상을 기준으로 설계되었으나, 조만간 쇼츠 전용 수익 분석 모델도 업데이트될 예정입니다.' },
                    { q: '수익을 올리기 위해 가장 먼저 해야 할 일은?', a: '영상의 도입부(Hook)를 강화하여 시청 지속 시간을 늘리는 것이 최우선입니다. 이후 UltraUtils의 YT Planner 도구를 사용하여 검색 엔진에 최적화된 영상 기획을 시도해 보세요.' }
                ]
            }
        },
        megaMenu: {
            title: '모든 도구 찾아보기',
            subtitle: '에이전시급 퀼리티의 무료 웹 도구들',
            searchPlaceholder: '필요한 도구 검색...',
            noResults: '검색 결과가 없습니다.',
            totalTools: '개의 도구'
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
            trySample: 'Try with a sample image',
            copyImage: 'Copy Image',
            imageCopied: 'Image copied to clipboard!',
            imageCopyError: 'Failed to copy image.',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: 'Home',
            imageSuite: 'Image Suite',
            promptGen: 'Prompt Gen',
            ytGrab: 'YT Grabber',
            qrGen: 'QR Generator',
            textConv: 'Text Conv',
            bgRemover: 'AI Remover',
            ytPlanner: 'YT Planner',
            pdfMaster: 'PDF Master',
            imageRestorer: 'AI Image Restorer',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
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
                subtitle: 'Professional Techniques for Writing Perfect Prompts for Midjourney and Suno',
                sections: [
                    {
                        title: '1. Foundations of AI Prompt Engineering',
                        content: 'Ordering tasks from an AI is like ordering food from a professional chef. Instead of just "draw an image," saying "draw an apple in a 17th-century Dutch oil painting style with morning sunlight" yields much more refined results. Our generator combines keywords like composition, lighting, and style used by pros to craft the ideal starting point.'
                    },
                    {
                        title: '2. Optimizing for Midjourney v6 & Latest Models',
                        content: 'In Midjourney, word order and parameters are crucial. Generate aspect ratio settings like --ar 16:9 or model specification codes like --v 6.0 without errors. Even if complex English descriptions are difficult, a sophisticated English prompt is completed just by selecting key attributes.'
                    },
                    {
                        title: '3. Professional Music Generation with Suno AI',
                        content: 'For music AIs like Suno, metatags entered in the style window, along with the mood of the lyrics, determine the genre. Apply tagging techniques using brackets, such as [Male Vocal, Heavy Metal, Aggressive], to bring the melody you imagined to life.'
                    },
                    {
                        title: '4. Universal Compatibility for Stable Diffusion & Dall-E 3',
                        content: 'The prompts generated here aren\'t limited to one platform. Text containing rich adjectives and style descriptions is highly intelligible to most image generation AIs, including Stable Diffusion and DALL-E 3. Copy your results and test them across different platforms.'
                    }
                ],
                faq: [
                    { q: 'Why is prompt structure important?', a: 'AI quality depends on specificity. A clear, structured guide helps the AI understand your intent precisely, leading to superior creative outputs.' },
                    { q: 'Can I use these for other generative AIs?', a: 'Yes! The base prompts generated here work excellently with DALL-E, Stable Diffusion, and most other modern AI platforms.' },
                    { q: 'Are prompts only supported in English?', a: 'Most high-performance AI models understand English most accurately. Our tool uses multi-language options to automatically construct natural, advanced English prompts for you.' },
                    { q: 'Can I save the generated prompts?', a: 'Currently, we offer a copy feature. Collecting prompts you like in a notepad or Notion file is a great way to build your own personal prompt library.' }
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
            downloadHd: 'Download Max Res (HD)',
            editBtn: 'AI Background Remover',
            simulatorTitle: 'YouTube Home Simulator',
            simulatorSubtitle: 'Preview how it looks in feed',
            simulatorDesc: 'This feature simulates mobile exposure on the actual YouTube home screen.\nCheck how visible your thumbnail is among other competing videos.',
            safeZoneBtn: 'Check Safe Zone',
            shortsSafeZoneBtn: 'Check Shorts UI',
            colorPalette: 'Color Palette',
            closeBtn: 'Close',
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
            downloadSvg: 'Download Vector SVG',
            vectorReady: 'Preparing high-resolution vector output...',
            uploadLogo: 'Upload Custom Logo',
            logoSize: 'Adjust Logo Size',
            removeLogo: 'Remove Logo',
            templates: 'Business Templates',
            styles: 'QR Style Settings',
            frames: 'Frames & Labels',
            frameText: 'Label Text',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: 'Website',
                wifi: 'Wi-Fi Connection',
            },
            guide: {
                title: 'Professional QR Code Strategy Guide',
                subtitle: '4 Expert Methods for Boosting Marketing Reliability and Recognition',
                sections: [
                    {
                        title: '1. Essential Tips for Maximum Recognition',
                        content: 'The key to a reliable QR code is contrast. Cameroon-style sensors detect dark-on-light patterns fastest. Avoid light-colored codes on light backgrounds, and ensure there is a clear "Quiet Zone" (empty border) around the edges. Our tool includes error correction to maintain scans even if the code is slightly obscured.'
                    },
                    {
                        title: '2. Custom Branding for Marketing and Trust',
                        content: 'Generic black-and-white QR codes often have lower Click-Through Rates (CTR). By applying brand colors and inserting a logo in the center, you build immediate user trust. Choose styles that match your event, Wi-Fi stickers, or business cards for professional results.'
                    },
                    {
                        title: '3. Benefits of Static QR Codes for Permanence',
                        content: 'The QR codes generated on UltraUtils are "Static," meaning the data is encoded directly into the pattern. They work offline, require no subscription, and never expire. Create a lifetime code for free and use it as long as you need.'
                    },
                    {
                        title: '4. Importance of Vector (SVG) Format for Printing',
                        content: 'When printing on business cards or large banners, we strongly recommend SVG over PNG. Vector formats maintain sharp, crisp edges no matter how much they are scaled, making them the preferred choice for professional print shops.'
                    }
                ],
                faq: [
                    { q: 'Why won\'t my QR code scan?', a: 'The most common issues are low color contrast or printing the code too small. Ensure there is enough empty space (Quiet Zone) around the code so the software doesn\'t confuse it with other design elements.' },
                    { q: 'Are these QR codes safe for commercial use?', a: 'Yes, all QR codes generated are 100% royalty-free. You can use them for marketing, packaging, or any commercial project without restrictions.' },
                    { q: 'Can I include non-English text?', a: 'Yes! Beyond URLs, you can encode sentences or data in various languages including Korean, Japanese, and more.' },
                    { q: 'Is there a limit on logo size?', a: 'If a logo is too large, it covers too much data area and will prevent scanning. We recommend adjusting the size in the preview until it looks balanced and recognizable.' }
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
                title: 'Text Suite Mastery Guide',
                subtitle: '4 Smart Ways to Elevate Professional Data and Content Workflows',
                sections: [
                    {
                        title: '1. Elevating Data Quality with Cleanup Tools',
                        content: 'When copying data from spreadsheets or web sources, invisible tabs, extra spaces, and duplicate lines can ruin your analysis. Use our "Trim" and "Remove Duplicates" features to ensure clean, normalized source data in seconds.'
                    },
                    {
                        title: '2. Essential Encoding Utilities for Developers',
                        content: 'Handling URL-encoded strings or Base64 data is a daily task for web developers. Instead of setting up a local environment, use our secure in-browser conversion to instantly verify and transform data for your APIs or CSS assets.'
                    },
                    {
                        title: '3. Maintaining Consistency with Case Conversion',
                        content: 'Whether you need title-case for headers or uniform lowercase for data entry, manual editing is a waste of time. Batch-convert large blocks of text instantly to ensure typographical consistency across your entire document.'
                    },
                    {
                        title: '4. Absolute Privacy: 100% Local Processing',
                        content: 'Worried about pasting sensitive logs or private notes into online converters? UltraUtils processes everything locally in your browser. Not a single character of your input is sent to our servers, making it the safest choice for confidential text manipulation.'
                    }
                ],
                faq: [
                    { q: 'Is there a character limit for processing?', a: 'Most text up to tens of thousands of lines can be processed instantly. Extremely large files (several MBs) may cause a slight temporary delay depending on your browser performance.' },
                    { q: 'Are my logs or text inputs saved on the server?', a: 'No, UltraUtils is a privacy-first platform. We never store your text data. Everything is erased as soon as you close or refresh the browser tab.' },
                    { q: 'Can I decode encrypted text?', a: 'Standard encoding methods like Base64 and URL-encoding are supported. However, we do not support decryption for formats that require specific keys like AES.' },
                    { q: 'What does the JSON Formatting tool do?', a: 'It turns a minified, single-line JSON blob into a "pretty-printed" version with proper indentation and line breaks, making it much easier for humans to read and debug.' }
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
            smartExtract: 'Smart Extract',
            smartExtractDesc: 'Draw around the object you want to keep.',
            selectObject: 'Select Object',
            clickToExtract: 'Touch the object you want to keep',
            backToSelection: 'Reselect',
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
            idPhoto: 'ID Photo Master',
            passport: 'Passport (3.5x4.5cm)',
            usVisa: 'US Visa (2x2in)',
            idCard: 'ID Card (3x4cm)',
            bgLibrary: 'AI Background Library',
            uploadCustomBg: 'Upload Custom BG',
            addText: 'Add Text',
            deleteText: 'Delete',
            deleteImage: 'Delete Image',
            resetPos: 'Reset Pos',
            subjectScale: 'Scale',
            brightness: 'Brightness',
            contrast: 'Contrast',
            saturation: 'Saturation',
            rotation: 'Rotation',
            flipH: 'Flip H',
            flipV: 'Flip V',
            opacity: 'Opacity',
            shadow: 'Shadow',
            tabTransform: 'Transform',
            tabEnhance: 'Enhance',
            tabStyling: 'Styling',
            alignment: 'Alignment',
            centerH: 'Center H',
            centerV: 'Center V',
            bringToFront: 'Bring to Front',
            sendToBack: 'Send to Back',
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
            shareText: 'AI Creative Studio! ⚡',
            photoMode: 'Photo Mode',
            studio: 'Studio',
            original: 'Original',
            result: 'Result',
            compare: 'Compare',
            scale: 'Scale',
            bgTrsp: 'Trsp',
            bgClr: 'Color',
            bgGrad: 'Grad',
            bgImg: 'Image',
            scaleLabel: 'Adjust Scale',
            smartClick: 'Smart Click',
            roughLasso: 'Rough Lasso',
            clickPrompt: 'Click on the object',
            lassoPrompt: 'Draw around the object',
            resetConfirmTitle: 'Reset everything?',
            resetConfirmDesc: 'All your current progress will be lost.',
            aspectTitle: 'Aspect Ratio',
            aspectSquare: '1:1 Square',
            aspectSocial: '4:5 Social',
            aspectTV: '16:9 TV/Wide',
            edgeTitle: 'Edge Perfect',
            edgeDesc: 'Advanced AI preserves every fine detail.',
            precisionTitle: 'Precision Control',
            precisionDesc: 'Manual brush for perfect refinements.',
            proBgTitle: 'Pro Backgrounds',
            proBgDesc: 'One-click ID photos and thumbnails.',
            aiThinking: "AI is analyzing the background...",
            panView: 'Pan View',
            brush: 'Brush',
            selection: 'Selection',
            fontGothic: 'Gothic',
            fontSerif: 'Serif',
            fontMono: 'Mono',
            fontHandwriting: 'Handwriting',
            fontDefault: 'Default',
            smartTrim: 'Smart Trim',
            smoothStream: 'Smooth Stream',
            guide: {
                title: 'AI Background Removal & Cutout Guide',
                subtitle: 'Remove complex backgrounds in just 5 seconds using AI',
                sections: [
                    {
                        title: '1. Flawless Cutouts with AI Contrast Mastery',
                        content: 'The key to perfect AI background removal is clearly defined boundaries. For portraits, if you want to preserve every strand of hair, try using images with high color contrast between the subject and the background. Our tool uses state-of-the-art deep learning models to deliver professional accuracy even in complex scenes, but higher contrast exponentially increases the final sharpness.'
                    },
                    {
                        title: '2. Pro-Level Details with Manual Refine Mode',
                        content: 'If there are parts the AI missed or over-erased, simply activate the "Manual Refine Mode" at the top. Using precision brush technology with zero-delay canvas rendering, you can perfectly restore or erase specific areas. This is especially useful for transparent objects, fine fabric, or pets with complex fur.'
                    },
                    {
                        title: '3. Commercial Standards & Custom Sticker Effects',
                        content: 'Don\'t just stop at transparency. UltraUtils provides automatic standard sizing for ID and passport photos, and lets you add a "Sticker Effect" (white border) to make your subjects pop—perfect for custom merchandise design or eye-catching YouTube thumbnails. Adjust border thickness and color to create your own signature style.'
                    },
                    {
                        title: '4. Absolute Privacy with Serverless Local Processing',
                        content: 'Worried about your photos being leaked to a server? UltraUtils performs all computations locally within your browser. Not a single byte of your image data is ever uploaded to a server, making it the safest choice for processing sensitive business documents or private personal photos.'
                    }
                ],
                faq: [
                    { q: 'Does removing the background reduce image quality?', a: 'No. We maintain the original resolution of your image while converting the background to transparency. High-quality PNG export ensures pixel-perfect results.' },
                    { q: 'Where can I use these transparent images?', a: 'They are perfect for YouTube thumbnails, eCommerce listings, Instagram stickers, professional ID photos, and any graphic design project.' },
                    { q: 'Can I process multiple images at once?', a: 'Currently, we focus on high-precision single image processing. Batch processing for bulk images is planned for a future update.' },
                    { q: 'What if the AI fails to find the subject?', a: 'This usually happens if the subject is too small or blends in with the background. Try another photo with a clear contrast between the subject and the surroundings.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Master PRO',
            desc: 'The ultimate all-in-one PDF toolkit. Merge, Split, Convert, and Secure your documents with ease.',
            merge: 'Merge Files',
            split: 'Split Pages',
            toImage: 'Convert to Image',
            rotate: 'Rotate Pages',
            protect: 'Set Password',
            uploadMsg: 'Drag and drop PDF files or click to browse',
            filesSelected: 'files selected',
            mergeNow: 'Create Merged PDF',
            splitNow: 'Split All Pages',
            rotateNow: 'Apply 90° Rotation',
            protectNow: 'Encrypt Document',
            downloadMerged: 'Download Result',
            downloadSplit: 'Download All (ZIP)',
            addMore: 'Add Files',
            clear: 'Clear List',
            pageRange: 'Page Range (e.g., 1-5, 10)',
            password: 'Enter Password',
            options: 'Advanced Options',
            processingMsg: 'Processing PDF with high-performance engine...',
            successMsg: 'Task completed successfully!',
            guide: {
                title: 'PDF Master Mastery Guide',
                subtitle: '4 Professional Ways to Manage and Edit Your PDF Documents Efficiently',
                sections: [
                    {
                        title: '1. Advanced PDF Merging & Metadata Optimization',
                        content: 'Merging multiple PDF files is more than just joining them. UltraUtils PDF Master prevents font conflicts between files and normalizes metadata to generate stable results without corruption. It provides the ideal solution when you want to organize business reports or study materials systematically.'
                    },
                    {
                        title: '2. Precision Page Extraction & Splitting Technology',
                        content: 'Need only specific chapters from a massive hundred-page document? Using the page range specification (e.g., 1-5, 10-12) allows you to accurately pick out only the pages you want and create a new PDF. When you want to separate all pages into individual files, batch downloading is available via the ZIP compression feature.'
                    },
                    {
                        title: '3. High-Resolution PDF to Image Conversion Engine',
                        content: 'When you want to use PDF content in slides or web pages, our conversion engine prioritizes text readability. By applying 2.0x high-resolution rendering by default, it converts documents into sharp JPEG/PNG images without blurring, even for small text. All converted pages are bundled into a ZIP file for immediate saving.'
                    },
                    {
                        title: '4. Absolute Privacy: 100% Local Browser Processing',
                        content: 'Are you worried about uploading sensitive documents like contracts or those containing personal information to online servers? UltraUtils performs all data operations directly within the user\'s browser. Since files are never transmitted to an external server, we promise the safest PDF editing environment with a 0% chance of data leakage.'
                    }
                ],
                faq: [
                    { q: 'Is there a limit to the number of files I can merge?', a: 'There are no technical limits, but for stable processing, we recommend around 50 files or a total of under 100MB at once. Larger tasks are possible depending on your device\'s RAM performance.' },
                    { q: 'Can I edit password-protected PDFs?', a: 'Due to security protocols, encrypted files may be difficult to process directly. Please use them after removing the password.' },
                    { q: 'Where are the converted images saved?', a: 'They are saved to your device\'s download folder in ZIP format immediately after conversion. All task history is destroyed upon closing the browser and cannot be recovered.' },
                    { q: 'Is it available on mobile devices?', a: 'Yes, if you have a smartphone that supports modern browsers, you can easily use the same PDF editing features as on a desktop without installing a separate app.' }
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
            missionTitle: 'Privacy-First, High-Performance Utilities',
            missionDesc1: 'Welcome to UltraUtils, your premium destination for high-performance, privacy-focused digital utilities. In an era where online tools often compromise user data or hide behind complex paywalls, we stand for a different approach: 100% free, entirely local, and professionally designed.',
            missionDesc2: 'Our mission is to empower creators, developers, and everyday users with tools that work directly in the browser. Whether you need to remove backgrounds with AI, optimize images for SEO, or manage complex PDF documents, our suite of tools handles the heavy lifting without ever uploading your sensitive files to a server.',
            features: {
                privacy: { title: 'Privacy', desc: 'No server uploads' },
                speed: { title: 'Speed', desc: 'Local processing' },
                global: { title: 'Global', desc: 'Multi-language' },
                free: { title: 'Free', desc: 'No hidden fees' }
            },
            footerNote: {
                title: 'Professional Tools for Everyone',
                subtitle: 'Discover why thousands of users trust UltraUtils for their daily digital workflows.',
                media: { title: 'Media Suite', desc: 'High-quality YouTube thumbnail extraction and AI-powered background removal. Perfect for YouTubers and content creators.' },
                data: { title: 'Data & Text', desc: 'Advanced text conversion, formatting, and cleanup tools. Essential for data analysts and developers.' },
                design: { title: 'Design Assets', desc: 'Professional QR code generation with custom styling and high-resolution output. Ideal for businesses.' }
            },
            growthTips: {
                title: 'Expert Tips for Digital Growth',
                subtitle: 'Learn how to utilize each tool to 200% capacity to accelerate your traffic.',
                tips: [
                    {
                        title: 'YouTube Thumbnail Strategy',
                        desc: 'Analyze competitor thumbnails and test how they look in real feeds before publishing.',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'SEO Optimization Workflow',
                        desc: 'Remove backgrounds and compress immediately to create Google-ready images.',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'AI Creative Boost',
                        desc: 'Turn your creative ideas into reality with our professional prompt generator.',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: 'Recommended Next Step',
            suggestNext: 'We recommend these tools to boost your workflow',
            installPwa: 'Install UltraUtils App',
            installPwaDesc: 'Add to your home screen for faster and easier access to all tools.',
            installBtn: 'Install Now',
            recentTools: 'Recently Used'
        },
        advertise: {
            title: 'Advertise with Us',
            desc: 'Showcase your product to the global creator community on UltraUtils.',
            slotsTitle: 'Available Ad Slots',
            formTitle: 'Send an Inquiry',
            name: 'Name / Company',
            namePlaceholder: 'Jane Doe / Acme Corp',
            email: 'Email Address',
            emailPlaceholder: 'jane@example.com',
            dates: 'Desired Dates',
            datesPlaceholder: 'e.g., 2026-03-01 ~ 2026-03-15',
            message: 'Message (Ad link, etc.)',
            messagePlaceholder: 'Tell us about your product or share an ad link...',
            submit: 'Send Inquiry',
            success: 'Inquiry sent successfully. We will contact you soon!',
            backToForm: 'Back to Form',
            submitError: 'Submission failed. Please try again.',
            slotTop: 'Top Premium Banner',
            slotTopDesc: '728x90 Banner - Prime visibility at the very top of all tool pages. Maximize your brand awareness.',
            slotHome: 'Home Feed Banner',
            slotHomeDesc: 'Native placement within the tool grid on the homepage. Perfect for high engagement.',
            slotSide: 'Side Skyscraper (Sticky)',
            slotSideDesc: '160x600 Skyscraper - Sticky sidebar placement for prolonged brand exposure.',
            slotBottom: 'Bottom Fixed Banner',
            slotBottomDesc: '728x90 Banner - High intent placement at the bottom of every tool page.',
            pricePremium: 'Premium',
            priceHighCTR: 'High CTR',
            priceConversion: 'Conversion',
            benefits: [
                '100k+ Monthly Active Users',
                'High engagement from YouTube Creators',
                'Bilingual reach (Global & Local)',
                'Transparent performance reports'
            ],
            partnerMsg: 'Partnering with UltraUtils means connecting with the next generation of digital builders.',
            faqTitle: 'Advertising FAQ',
            faqDesc: 'Frequently asked questions about advertising on UltraUtils',
            faq: [
                { q: 'How is the ad rate determined?', a: 'Pricing is based on slot placement and duration. Contact us for a custom quote based on current traffic performance.' },
                { q: 'Do you support video ads?', a: 'Currently, we only support image and text-based banners to maintain site performance.' },
                { q: 'How far in advance should I book?', a: 'Premium slots may book out early. We recommend reaching out at least 1-2 weeks before your desired date.' },
                { q: 'What are the payment options?', a: 'We currently support wire transfers and dedicated payment platforms. Specific payment details and procedures will be provided individually upon inquiry.' }
            ]
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
            ],
            stats: {
                free: '100% Free',
                logs: '0 Server Logs',
                languages: 'Multi-language',
                utilities: 'Pro Utilities'
            }
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
                        title: '1. Psychology of High-CTR Titles (Click Magnet)',
                        content: '80% of your view count is determined at the threshold of the title and thumbnail. Instead of just listing facts, use the "Information Gap" technique—piquing curiosity with phrases that hint at a secret or a massive reward. Our AI analyzes thousands of viral data points to suggest titles that trigger a psychological urge to click while remaining honest to your content.'
                    },
                    {
                        title: '2. Holistic SEO Strategy for Global Reach',
                        content: 'YouTube is the world\'s second-largest search engine. By placing core keywords within the first two lines of your description and aligning them with strategic tags, you create a metadata synergy. This significantly increases your visibility not just on YouTube Recommendations, but also on Google Search results, driving organic evergreen traffic.'
                    },
                    {
                        title: '3. Strategic Scripting for Maximum Watch Time',
                        content: 'The first 15 seconds are the "Hook Zone" where you win or lose your audience. Every script draft we provide follows a value-first structure: Hook (Immediate Promise) -> Value Prop (The Plan) -> Core Content (Resolution). This professional storytelling framework is engineered to maintain high retention rates, the most critical factor for the YouTube algorithm.'
                    },
                    {
                        title: '4. Shorts Mastery: Retention & Plot Twists',
                        content: 'For YouTube Shorts, the rules are different. Success depends on a "Loopable" structure and immediate visual stimulation. Our AI suggests specific strategies for Shorts, such as visual plot twists at the 45-second mark or curiosity-based loops that encourage viewers to watch your video multiple times, exponentially boosting its viral potential.'
                    }
                ],
                faq: [
                    { q: 'Can I use AI-generated titles exactly as they are?', a: 'Absolutely! Our titles are optimized for performance. However, adding your own "Voice" or channel-specific context to the best-fitting suggestion will result in the highest engagement rates.' },
                    { q: 'Is there an ideal number of tags I should use?', a: 'Focus on quality over quantity. Using 10-15 highly relevant keywords (as suggested by our AI) is more effective than filling all 500 characters with junk, which can confuse the search algorithm.' },
                    { q: 'Can I save these plans for later?', a: 'Yes. Use the "Download .TXT" button to save your full strategy locally, or simply copy individual sections to your Notion or Notepad for production.' },
                    { q: 'Is it completely free for commercial use?', a: 'Yes. All tools on UltraUtils, including the Strategy Master, are 100% free and require no credit or sign-up, supporting creators at every stage of their journey.' }
                ]
            }
        },
        houseAds: {
            bgRemoverTitle: 'Pro Background Remover',
            bgRemoverDesc: 'Erase backgrounds instantly with AI precision.',
            pdfMasterTitle: 'Smart PDF Master',
            pdfMasterDesc: 'Merge, split, and convert PDFs in one place.',
            imageCompTitle: 'High-Performance Compression',
            imageCompDesc: 'Reduce file size without losing image quality.',
            ytGrabTitle: 'YouTube Thumbnail Grabber',
            ytGrabDesc: 'Download and edit high-quality thumbnails easily.',
            coffeeTitle: 'Buy Anti a Coffee',
            coffeeDesc: 'Support our work and help us build better tools.',
            imageRestorerTitle: 'AI Image Restorer',
            imageRestorerDesc: 'Fix blurry photos instantly.',
        },
        imageRestorer: {
            title: 'AI Image Restorer & Remaster',
            desc: 'Restore blurry, old, and damaged photos with advanced AI remastering technology.',
            restoreBtn: 'Restore Now',
            remasterBtn: 'Remastering',
            processing: 'AI is analyzing and restoring the image...',
            enhancement: 'Detail Enhance',
            resolution: 'Upscaling',
            noise: 'Denoising',
            face: 'Face Restore',
            color: 'Color Fix',
            original: 'Original',
            restored: 'Restored',
            upscaleX2: '2x Upscale',
            upscaleX4: '4x Upscale',
            guide: {
                title: 'Professional AI Image Restoration Guide',
                subtitle: 'Revive your precious memories in stunning 4K definition',
                sections: [
                    {
                        title: '1. Fixing Blurry & Out-of-Focus Photos',
                        content: 'Our AI reconstructs blurry images by analyzing pixel data and predicting lost details using advanced neural patterns. It works exceptionally well at defining facial features like eyes and lips, bringing life back to unsharp exposures.'
                    },
                    {
                        title: '2. Remastering Old & Damaged Vintage Photos',
                        content: 'Digital restoration repairs scratches, tears, and fading commonly found in family archives. By analyzing surrounding pixel textures, it fills in damaged areas and applies natural color correction for a modern, high-quality look.'
                    },
                    {
                        title: '3. Super Resolution & Advanced Upscaling',
                        content: 'Instead of just stretching pixels, our AI "fills the gaps" with inferred textures. This allows for 2x or 4x upscaling without pixelation, making low-resolution web images suitable for professional printing and digital displays.'
                    },
                    {
                        title: '4. Subject-Specific Optimization Algorithms',
                        content: 'We use distinct processing models for different content. Portraits receive skin texture smoothing and facial enhancement, while landscape photos benefit from boosted contrast and edge sharpening for ultimate realism.'
                    }
                ],
                faq: [
                    { q: 'Can tiny images be successfully restored?', a: 'Yes, our 2x and 4x upscaling can turn small thumbnails into crisp images. However, the quality of the result depends on how much recoverable information is in the original file.' },
                    { q: 'Is my personal data safe during the process?', a: 'Absolutely. UltraUtils performs all AI processing locally on your device. Your images are never uploaded to our servers, ensuring 100% privacy for your family and business photos.' },
                    { q: 'Are the restored results ready for printing?', a: 'Yes, by significantly increasing the pixel density and resolution, the output is optimized for physical photo prints, digital albums, and high-DPI web presentations.' },
                    { q: 'What is the difference between Restore and Remaster?', a: 'Restoration focuses on fixing damage and blur, while Remastering is an advanced aesthetic pass that improves overall lighting, color balance, and ultra-high-definition clarity.' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'No-Install Screen Recording Master Guide',
                subtitle: 'How to create professional-grade tutorials and game highlights instantly',
                sections: [
                    {
                        title: '1. Zero Installation & Ultimate Privacy Guarantee',
                        content: 'UltraUtils Screen Recorder runs entirely in your browser\'s security sandbox. No software downloads mean zero risk of viruses or malware. Record safely and instantly without the hassle of a setup process.'
                    },
                    {
                        title: '2. 4K Resolution & High-Fidelity System Audio',
                        content: 'Unlock the full potential of your display with high-resolution recording capabilities. Simply check the "Share system audio" box when selecting your screen to capture crystal-clear sound from your applications or games.'
                    },
                    {
                        title: '3. Webcam Overlay & Dynamic Interactive Tutorials',
                        content: 'Create engaging content by combining your screen capture with a live webcam feed and microphone input. This Picture-in-Picture (PIP) layout is perfect for educators and gamers looking to add a professional personal touch.'
                    },
                    {
                        title: '4. High-Performance Local Encoding Technology',
                        content: 'All video processing and encoding happen locally on your computer. Your data never leaves your device, ensuring total confidentiality. Once you stop recording, a high-quality MP4 file is instantly ready for download.'
                    }
                ],
                faq: [
                    { q: 'Is there a limit on how long I can record?', a: 'There are no artificial limits. You can record as long as your system memory permits. For best stability, we recommend recording in segments of 1 hour.' },
                    { q: 'How do I record computer sounds or music?', a: 'When selecting "Entire Screen," look for the "Share system audio" checkbox at the bottom left of the browser popup. Make sure it is checked before starting.' },
                    { q: 'Which format is the recording saved in?', a: 'Wait. Your recording is saved in the industry-standard MP4 (MPEG-4) format, which is compatible with all modern smartphones, PCs, and editing software like Premiere Pro or CapCut.' },
                    { q: 'Does this work on smartphones?', a: 'This tool is optimized for desktop browsers. Due to mobile OS security policies, screen recording via web browsers is currently limited on iOS and Android devices.' }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'YouTube Revenue & Monetization Strategy Guide',
                subtitle: 'Unlock the secrets to doubling your channel\'s RPM and session value',
                sections: [
                    {
                        title: '1. Demystifying CPM vs RPM: Your Real Payout',
                        content: 'Understanding the difference between what advertisers pay (CPM) and what you actually earn (RPM) is the first step toward monetization mastery. Our calculator helps you project your real take-home pay after the platform\'s share.'
                    },
                    {
                        title: '2. High-Yield Niches and Global Audience Impact',
                        content: 'Revenue significantly fluctuates based on your content category. High-ticket niches like Finance, Technology, and Business often see 5x to 10x higher ad rates than general entertainment, as advertisers compete more fiercely for those viewers.'
                    },
                    {
                        title: '3. Strategic Ad Mid-rolls for 8+ Minute Content',
                        content: 'Videos over 8 minutes allow for manual mid-roll placement. Strategically placing ads at natural transitions in your content can significantly increase your revenue without hurting your audience retention or user experience.'
                    },
                    {
                        title: '4. Synergizing Metadata SEO with Revenue Potential',
                        content: 'High engagement metrics like CTR and average view duration are signals that tell the algorithm to promote your video to higher-paying ad inventories. Better SEO leads to better audiences, which leads to better ad revenue.'
                    }
                ],
                faq: [
                    { q: 'How accurate are these revenue estimations?', a: 'Our calculator uses industry-wide benchmarks and real-time ad data. However, your actual earnings depend on your specific CPM, seasonality (e.g., Q4 peaks), and actual ad play rates.' },
                    { q: 'Which niches have the highest payout per view?', a: 'Finance, SaaS, Legal, and Business niches generally command the highest CPMs. Entertainment and Gaming tend to have higher volume but lower individual ad rates.' },
                    { q: 'Does the calculator support YouTube Shorts?', a: 'Shorts have a different revenue-sharing model based on the Creator Pool. This tool primarily focuses on long-form content, but a dedicated Shorts model is coming soon.' },
                    { q: 'How can I increase my channel\'s revenue immediately?', a: 'Focus on increasing your Average View Duration. The longer viewers stay, the more ads they see, and the more valuable your video becomes to the YouTube recommendation algorithm.' }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
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
            trySample: '试用示例图片',
            copyImage: '复制图片',
            imageCopied: '图片已复制到剪贴板！',
            imageCopyError: '复制图片失败。',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: '首页',
            imageSuite: '图像大师',
            promptGen: '提示词生成',
            ytGrab: 'YT 提取器',
            qrGen: 'QR 生成器',
            textConv: '文本转换',
            bgRemover: 'AI 背景消除',
            ytPlanner: 'YouTube 策划',
            pdfMaster: 'PDF 大师',
            imageRestorer: 'AI 图像修复',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
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
            downloadHd: '立即下载最高画质 (HD)',
            editBtn: 'AI 背景移除与编辑',
            simulatorTitle: 'YouTube 主页模拟器',
            simulatorSubtitle: '预览其在动态中的外观',
            simulatorDesc: '此功能模拟实际 YouTube 主页上的移动曝光。\n检查您的缩略图在其他竞争视频中的可见度。',
            safeZoneBtn: '检查安全区域',
            shortsSafeZoneBtn: '检查 Shorts UI',
            colorPalette: '调色板',
            closeBtn: '关闭',
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
            downloadPng: '下载高分辨率 PNG',
            downloadSvg: '下载矢量 SVG',
            vectorReady: '正在准备高分辨率矢量输出...',
            uploadLogo: '上传自定义徽标',
            logoSize: '调整徽标大小',
            removeLogo: '移除徽标',
            templates: '商务模板',
            styles: 'QR 样式设置',
            frames: '边框与文本',
            frameText: '底部文本',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: '网站',
                wifi: 'Wi-Fi 连接',
            },
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
                        content: '• 智能名片：将联系方式和作品集链接印在名片上。\n• 餐厅菜单：通过非接触式菜单查看，同时兼顾卫生和效率。\n• 活动门票：通过扫描实现自动化的门票确认流程。\n• Wi-Fi 自动连接：扫描即可连接，无需手动输入繁琐密码。'
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
            desc: '使用 AI 瞬间移除照片背景。',
            preparing: '正在准备 AI...',
            processing: '正在移除背景...',
            modelLoading: '正在加载 AI 引擎 (约 20MB)...',
            downloadReady: '下载透明格式图片',
            dropMsg: '将照片拖到此处',
            comparison: '前后对比',
            stepFetch: '正在准备图片...',
            stepModel: '正在加载 AI 模型...',
            stepInference: '正在移除背景...',
            refineTitle: '手动修正模式',
            refineDesc: '使用画笔恢复部分内容或进一步擦除。',
            brushRestore: '恢复',
            brushErase: '擦除',
            smartExtract: '智能提取',
            smartExtractDesc: '在该物体周围绘制选구.',
            selectObject: '选择对象',
            clickToExtract: '点击想要提取的物体',
            backToSelection: '重新选择',
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
            idPhoto: 'ID 证件照大师',
            passport: '护照照片 (3.5x4.5cm)',
            usVisa: '美国签证 (2x2英寸)',
            idCard: '身份证/证件 (3x4cm)',
            bgLibrary: 'AI 背景库',
            uploadCustomBg: '上传自定义背景',
            addText: '添加文本',
            deleteText: '删除',
            deleteImage: '删除图像',
            resetPos: '重置位置',
            subjectScale: '缩放',
            brightness: '亮度',
            contrast: '对比度',
            saturation: '饱和度',
            rotation: '旋转',
            flipH: '水平翻转',
            flipV: '垂直翻转',
            opacity: '透明度',
            shadow: '阴影深度',
            tabTransform: '变换',
            tabEnhance: '增强',
            tabStyling: '样式',
            alignment: '对齐/排列',
            centerH: '水平居中',
            centerV: '垂直居中',
            bringToFront: '置于顶层',
            sendToBack: '置于底层',
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
            shareText: 'AI 创意工作室! ⚡',
            photoMode: '照片模式',
            studio: '工作室',
            original: '原图',
            result: '结果',
            compare: '对比',
            scale: '缩放',
            bgTrsp: '透明',
            bgClr: '颜色',
            bgGrad: '渐变',
            bgImg: '图片',
            scaleLabel: '缩放',
            smartClick: '智能点击',
            roughLasso: '套索工具',
            clickPrompt: '点击要保留的物体',
            lassoPrompt: '在物体周围圈选',
            resetConfirmTitle: '确定要重置吗？',
            resetConfirmDesc: '当前的所有进度都将丢失。',
            aspectTitle: '纵横比',
            aspectSquare: '1:1 正方形',
            aspectSocial: '4:5 社交媒体',
            aspectTV: '16:9 宽屏',
            edgeTitle: '完美边缘',
            edgeDesc: '先进的 AI 保留每一个微小的细节。',
            precisionTitle: '精准控制',
            precisionDesc: '手动画笔可进行完美的修整。',
            proBgTitle: '专业背景',
            proBgDesc: '一键生成证件照和缩略图。',
            aiThinking: "AI 正在分析背景...",
            panView: '移动画布',
            brush: '画笔',
            selection: '区域选择',
            fontGothic: '黑体',
            fontSerif: '宋体',
            fontMono: '等宽',
            fontHandwriting: '手写',
            fontDefault: '默认',
            smartTrim: '智能裁剪',
            smoothStream: '平滑流',
            guide: {
                title: 'AI 背景移除与抠图指南',
                subtitle: '利用 AI 技术在 5 秒内移除复杂背景',
                sections: [
                    {
                        title: '1. 利用 AI 对比度掌握无瑕抠图',
                        content: '完美 AI 背景移除的关键在于清晰的边界。对于人像，如果您想保留每一根发丝，请尝试使用主体与背景颜色对比明显的图像。我们的工具采用最先进的深度学习模型，即使在复杂场景中也能提供专业级的准确度，而更高的对比度将呈几何级数提升最终的清晰度。'
                    },
                    {
                        title: '2. 手动修整模式打造专业级细节',
                        content: '如果 AI 遗漏了某些部分或擦除过多，只需激活顶部的“手动修整模式”。利用零延迟画布渲染的精密画笔技术，您可以完美地恢复或擦除特定区域。这对于透明物体、精细织物或毛发复杂的宠物特别有用。'
                    },
                    {
                        title: '3. 商业标准与自定义贴纸效果',
                        content: '不要仅仅停留在透明度。UltraUtils 提供证件照和护照照片的自动标准尺寸，并允许您添加“贴纸效果”（白色边框）使您的主体脱颖而出——非常适合自定义周边设计或引人注目的 YouTube 缩略图。调整边框厚度和颜色，打造您自己的标志性风格。'
                    },
                    {
                        title: '4. 无服务器本地处理保障绝对隐私',
                        content: '担心您的照片被泄露到服务器？UltraUtils 在您的浏览器中本地执行所有计算。您的文件数据不会有单字节上传到服务器，这使其成为处理敏感商业文件或私人个人照片的最安全选择。'
                    }
                ],
                faq: [
                    { q: '移除背景会降低画质吗？', a: '不会。我们在将背景信息转换为透明 Alpha 通道的同时，保持图像的原始分辨率。我们使用高质量的 PNG 导出以保留每个像素。' },
                    { q: '这些透明图像可以在哪里使用？', a: '它们非常适合 YouTube 缩略图合成、电子商务产品列表、Instagram 故事贴纸、专业证件照以及任何平面设计项目。' },
                    { q: '我可以一次处理多张图片吗？', a: '目前，我们专注于高精度的单张图片处理。未来更新中计划推出批量处理功能，以帮助您更高效地工作。' },
                    { q: '如果 AI 无法识别主体怎么办？', a: '这通常发生在主体太小或与背景完全融合的情况下。请尝试另一张主体居中且与周围环境明显区分的照片。' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF 大师 PRO',
            desc: '全方位 PDF 工具箱。轻松合并、拆分、转换并保护您的文档。',
            merge: '合并文件',
            split: '页面拆分',
            toImage: '转为图片',
            rotate: '旋转页面',
            protect: '设置密码',
            uploadMsg: '将 PDF 文件拖到此处或点击选择',
            filesSelected: '个文件已选择',
            mergeNow: '创建合并文件',
            splitNow: '拆分所有页面',
            rotateNow: '应用90度旋转',
            protectNow: '加密文档',
            downloadMerged: '下载结果',
            downloadSplit: '全部下载 (ZIP)',
            addMore: '添加文件',
            clear: '清空列表',
            pageRange: '页面范围 (如: 1-5, 10)',
            password: '输入密码',
            options: '高级设置',
            processingMsg: '高性能引擎处理中...',
            successMsg: '操作已成功完成！',
            guide: {
                title: 'PDF 大师进阶指南',
                subtitle: '像专业人士一样管理和编辑 PDF 文件',
                sections: [
                    {
                        title: '1. 高级 PDF 合并与元数据优化',
                        content: '管理碎片化文档是工作流程的核心。UltraUtils 允许您在保持顺序的同时合并多个 PDF 文件。'
                    },
                    {
                        title: '2. 精准页面拆分与范围提取',
                        content: '需要长文档中的特定章节？使用拆分功能将每一页独立分开，或提取特定范围创建新文件。'
                    },
                    {
                        title: '3. 安全第一：加密与保护',
                        content: '为敏感合同或私密文档设置密码。加密在浏览器内完成，确保密码不外泄。'
                    },
                    {
                        title: '4. 绝对隐私：100% 本地处理',
                        content: '担心上传敏感 PDF？我们的工具在本地运行，不向服务器发送任何数据。'
                    }
                ],
                faq: [
                    { q: '有文件大小或数量限制吗？', a: '虽然没有硬性限制，但为了获得最流畅的体验，我们建议合并最多 50 个文件或 100MB。实际限制取决于您设备的 RAM 容量。' },
                    { q: '转换为 JPG 时可以调整画质吗？', a: '我们提供高分辨率默认值（2.0x 视口缩放），可确保专业级的文本清晰度，让您无需复杂设置即可获得完美结果。' },
                    { q: '支持加密的 PDF 吗？', a: '出于安全原因，无法直接处理加密文件。请在上传编辑前解密您的文件。' },
                    { q: '处理后的文件存储在哪里？', a: '文件会立即保存到您设备的“下载”文件夹。我们端不存储任何数据，一旦您关闭标签页，所有会话数据都将被擦除。' }
                ]
            }
        },
        home: {
            badge: '所有工具均为免费且注重隐私',
            titlePrefix: '为现代创作者提供的',
            titleSuffix: '数字超级能力',
            desc: '精选的高性能实用工具集。',
            descLine2: '无需注册，无需付费，即刻体验纯粹的功能。',
            launchTool: '运行工具',
            missionTitle: '隐私优先、高性能的数字工具箱',
            missionDesc1: '欢迎来到 UltraUtils，这是您获取高性能、注重隐私的数字工具的理想之地。在当今在线工具经常妥协用户数据或设置复杂付费墙的时代，我们坚持不同的理念：100% 免费、完全本地化且由专业设计。',
            missionDesc2: '我们的使命是为创作者、开发人员和普通用户提供直接在浏览器中运行的工具。无论您是需要使用 AI 移除背景、为 SEO 优化图像，还是管理复杂的 PDF 文档，我们的工具套件都能在不将您的敏感文件上传到服务器的情况下完成繁重的工作。',
            features: {
                privacy: { title: '隐私安全', desc: '无服务器上传' },
                speed: { title: '极速体验', desc: '本地内存处理' },
                global: { title: '全球化', desc: '多语言支持' },
                free: { title: '全免费', desc: '无任何隐藏费用' }
            },
            footerNote: {
                title: '面向所有人的专业工具',
                subtitle: '了解为什么成千上万的用户在日常数字化工作流中信任 UltraUtils。',
                media: { title: '媒体套件', desc: '高质量 YouTube 缩略图提取与 AI 驱动的背景移除。创作者的完美工作流伙伴。' },
                data: { title: '数据与文本', desc: '高级文本转换、格式化和清理工具。数据分析师和开发人员的必备工具。' },
                design: { title: '设计资产', desc: '具有自定义样式和高分辨率输出的专业 QR 码生成。企业营销的理想选择。' }
            },
            growthTips: {
                title: '数字增长专家技巧',
                subtitle: '了解如何 200% 利用每个工具来加速您的流量。',
                tips: [
                    {
                        title: 'YouTube 缩略图策略',
                        desc: '分析竞争对手的缩略图，并在发布前测试它们在实际 Feed 中的显示效果。',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'SEO 优化工作流',
                        desc: '移除背景并立即压缩，以创建符合 Google 搜索要求的图像。',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'AI 创意提升',
                        desc: '利用我们的专业提示词生成器将您的创意变为现实。',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: '推荐下一步',
            suggestNext: '我们推荐这些工具来提升您的工作效率',
            installPwa: '安装 UltraUtils 应用',
            installPwaDesc: '添加到主屏幕，以便更快、更轻松地访问所有工具。',
            installBtn: '立即安装',
            recentTools: '最近使用'
        },
        advertise: {
            title: '广告投放',
            desc: '在 UltraUtils 上向全球创作者社区展示您的产品。',
            slotsTitle: '可用广告位',
            formTitle: '发送查询',
            name: '姓名 / 公司',
            namePlaceholder: '张三 / 某公司',
            email: '电子邮件地址',
            emailPlaceholder: 'zhangsan@example.com',
            dates: '期望日期',
            datesPlaceholder: '例如：2026-03-01 ~ 2026-03-15',
            message: '内容 (广告链接等)',
            messagePlaceholder: '请告诉我们您的产品或服务...',
            submit: '发送查询',
            success: '查询发送成功。我们将尽快与您联系！',
            backToForm: '返回表单',
            submitError: '提交失败。请稍后重试。',
            slotTop: '顶部顶级横幅',
            slotTopDesc: '728x90 横幅 - 位于所有工具页面顶部的黄金位置。最大化您的品牌忠诚度。',
            slotHome: '首页信息流横幅',
            slotHomeDesc: '原生嵌入首页工具网格中。非常适合高参与度活动。',
            slotSide: '侧边滚动固定位',
            slotSideDesc: '160x600 侧边栏常驻显示，确保持久的品牌曝光。',
            slotBottom: '底部任务完成位',
            slotBottomDesc: '728x90 横幅 - 位于工具页面底部的精准触达位。',
            pricePremium: '尊享',
            priceHighCTR: '高点击率',
            priceConversion: '高转化',
            benefits: [
                '每月 10w+ 活跃用户',
                'YouTube 创作者深度参与',
                '全球与本土化双重覆盖',
                '透明的广告表现数据报告'
            ],
            partnerMsg: '与 UltraUtils 合作意味着与下一代数字构建者直接建立联系。',
            faqTitle: '广告合作常见问题',
            faqDesc: '关于在 UltraUtils 上投放广告的常见问题',
            faq: [
                { q: '广告费用如何计算？', a: '根据广告位和时长收取少量运营支持费。请联系我们，我们将根据当前的流量数据为您提供合理的建议。' },
                { q: '支持视频广告吗？', a: '目前仅支持图片和文字类横幅，以确保网站的最佳访问速度。' },
                { q: '需要提前多久预订？', a: '热门位置可能会提前订满。建议您至少提前 1-2 周联系。' },
                { q: '有哪些支付方式？', a: '目前支持银行转账和全球主流支付平台。具体细节将在咨询中说明。' }
            ]
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
                    content: '您同意不参与破坏服务稳定性或将我们的工具用于非法目的的活动。严禁未经明确允许抓取或复制内容。'
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
                    content: 'UltraUtils 旨在提供一个专业的数字环境，让创作者、开发者和普通用户无需复杂的安装或注册即可执行任务。我们专注于实用性和简洁性，致力于技术民主化。'
                },
                {
                    title: '为什么选择 UltraUtils？',
                    content: '隐私是我们的重中之重。与许多将文件发送到服务器的工具不同，我们利用现代 Web 技术直接在您的浏览器中处理一切。不仅速度更快，而且您的数据永远不会离开您的设备。'
                },
                {
                    title: '全球化平台',
                    content: '我们支持多种语言以打破沟通障碍，并定期更新我们的工具包，以最大限度地提高全球用户的生产力。'
                }
            ],
            stats: {
                free: '100% 免费',
                logs: '服务器零日志',
                languages: '支持多语言',
                utilities: '专家级工具'
            }
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
                        title: '1. 高点击率标题的心理学（点击磁铁）',
                        content: '80% 的播放量取决于标题和缩略图的门槛。不要只是列出事实，而要使用“信息差”技巧——用暗示秘密或巨大奖励的词句激发好奇心。我们的 AI 分析了数千个病毒式数据点，以建议能够触发点击冲动同时保持内容真实性的标题。'
                    },
                    {
                        title: '2. 全球触达的整体 SEO 策略',
                        content: 'YouTube 是全球第二大搜索引擎。通过在描述的前两行放入核心关键字并将其与战略性标签对齐，您可以创造元数据协同效应。这不仅显著增加了您在 YouTube 推荐中的曝光度，还能提升在 Google 搜索结果中的排名，带来有机长尾流量。'
                    },
                    {
                        title: '3. 针对最大化观看时长的战略脚本',
                        content: '开头 15 秒是决定观众去留的“钩子区”。我们提供的每个脚本草案都遵循价值优先结构：钩子（即时承诺）-> 价值主张（计划）-> 核心内容（解决）。这种专业的叙事框架旨在维持高留存率，这是 YouTube 算法最关键的考量因素。'
                    },
                    {
                        title: '4. Shorts 掌握：留存与反转',
                        content: '对于 YouTube Shorts，规则有所不同。成功取决于“可循环”结构和即时视觉刺激。我们的 AI 建议了特定策略，例如在 45 秒处设置视觉反转，或设计基于好奇心的循环，鼓励观众多次观看您的视频，从而呈几何倍数提升病毒式传播潜力。'
                    }
                ],
                faq: [
                    { q: '我可以直接使用 AI 生成的标题吗？', a: '当然可以！我们的标题已针对性能进行优化。然而，在最合适的建议中加入您自己的“风格”或频道特定背景，将获得最高的参与率。' },
                    { q: '标签的最佳数量是多少？', a: '质量重于数量。侧重于 10-15 个高度相关的关键词（如我们的 AI 建议）比用 500 个字符的垃圾填满更有效，垃圾信息会混淆搜索算法。' },
                    { q: '我可以保存这些方案后查看吗？', a: '可以。使用“下载 .TXT”按钮将完整策略保存在本地，或者直接将各个章节复制到您的 Notion 或记事本中进行制作。' },
                    { q: '商业使用完全免费吗？', a: '是的。UltraUtils 上的所有工具（包括策划师）都 100% 免费，无需署名或注册，支持处于各个阶段的创作者。' }
                ]
            }
        },
        houseAds: {
            bgRemoverTitle: '专家级背景移除',
            bgRemoverDesc: 'AI 驱动一键精准移除。',
            pdfMasterTitle: 'PDF 大师',
            pdfMasterDesc: '合并、拆分、轻松转换 PDF。',
            imageCompTitle: '专家级压缩',
            imageCompDesc: '无损减小文件大小。',
            ytGrabTitle: 'HD 封面提取',
            ytGrabDesc: '轻松下载并编辑封面。',
            coffeeTitle: '请 Anti 喝杯咖啡',
            coffeeDesc: '支持我们的工作，开发更好的工具。',
            imageRestorerTitle: 'AI 图像修复',
            imageRestorerDesc: '瞬间修复模糊照片。',
        },
        imageRestorer: {
            title: 'AI 图像修复与重制',
            desc: '利用先进的 AI 重制技术修复模糊、古老和损坏的照片。',
            restoreBtn: '立即修复',
            remasterBtn: '重制中',
            processing: 'AI 正在分析并修复图像...',
            enhancement: '细节增强',
            resolution: '分辨率提升',
            noise: '降噪',
            face: '人脸修复',
            color: '色彩修正',
            original: '原图',
            restored: '修复后',
            upscaleX2: '2倍无损放大',
            upscaleX4: '4倍无损放大',
            guide: {
                title: '图像修复指南',
                subtitle: '以高清画质重温珍贵回忆',
                sections: [
                    {
                        title: '1. 修复模糊和对焦不准的照片',
                        content: '我们的 AI 通过学习的模式预测细节，重构模糊图像。对面部特征表现尤为出色。'
                    },
                    {
                        title: '2. 重制旧的和损坏的照片',
                        content: '修正老照片上的划痕和褪色。数字修复填补损坏的像素并应用自然的色彩校正。'
                    }
                ],
                faq: [
                    { q: '很小的图片也能修复吗？', a: '可以，使用超分辨率技术，我们可以在不失真的情况下放大图片并增强清晰度。' },
                    { q: '我的图像数据隐私吗？', a: '当然。UltraUtils 在您的设备本地执行所有 AI 处理，图像永远不会上传到服务器。' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'Tips',
                        content: 'Record safely within your browser.'
                    }
                ],
                faq: [
                    {
                        q: 'Limit?',
                        a: 'No absolute limit.'
                    }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'RPM',
                        content: 'RPM is key.'
                    }
                ],
                faq: [
                    {
                        q: 'Accurate?',
                        a: 'Estimates only.'
                    }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
        }
    },
    ja: {
        common: {
            settings: '設定',
            download: 'ダウンロード',
            processing: '処理中...',
            apply: '適用',
            cancel: 'キャンセル',
            error: 'エラー',
            success: '成功',
            selectImage: '画像を選択',
            dropHere: '画像をここにドロップ',
            orClick: 'またはクリックしてファイルを選択',
            shareResult: '結果を共有',
            copiedLink: 'リンクをコピーしました！',
            trySample: 'サンプル画像で試す',
            copyImage: '画像をコピー',
            imageCopied: '画像をクリップボードにコピーしました！',
            imageCopyError: '画像のコピーに失敗しました。',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: 'ホーム',
            imageSuite: '画像ツール',
            promptGen: 'プロンプト作成',
            ytGrab: 'YT 抽出',
            qrGen: 'QR 作成',
            textConv: 'テキスト変換',
            bgRemover: 'AI 背景削除',
            ytPlanner: 'YouTube 企画',
            pdfMaster: 'PDF マスター',
            imageRestorer: 'AI 画像修復',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
        },
        imageMaster: {
            title: '画像圧縮・最適化',
            desc: '品質を落とさずに容量を削減。AIアルゴリズムが鮮明さを維持します。',
            quality: '圧縮品質',
            size: '解像度調整',
            width: '幅 (px)',
            height: '高さ (px)',
            smartEnhance: 'AIスマート補正',
            smartEnhanceDesc: '圧縮で失われがちなディテールをAIがリアルタイムで復元します。',
            original: 'オリジナル',
            optimized: '最適化後',
            saveMsg: '元画像より {percent}% 削減完了',
            applyOptimize: '最適化を実行',
            downloadOptimized: '最適化画像を保存',
            guide: {
                title: '画像最適化ガイド',
                subtitle: 'Webパフォーマンス向上の秘訣',
                sections: [
                    {
                        title: '1. WebパフォーマンスとSEOへの影響',
                        content: 'ページの読み込み速度は、Googleの検索順位における重要な要素です。画像はウェブページの容量の60%以上を占めることが多いため、品質を維持したまま容量を削減することが、SEO改善への最短ルートとなります。'
                    },
                    {
                        title: '2. JPEG vs PNG：最適な形式の選び方',
                        content: '写真にはJPEG、ロゴや文字を含むグラフィック、透過が必要な場合はPNGが適しています。当ツールのAIは、ファイル形式に合わせて自動的に最適な圧縮アルゴリズムを適用します。'
                    },
                    {
                        title: '3. AIスマート補正の活用',
                        content: '一般的な圧縮ツールとは異なり、当ツールのスマート補正は輪郭やテクスチャを保護します。プロフェッショナルな仕上がりを求める場合は、この機能をオンにしてください。'
                    }
                ],
                faq: [
                    { q: '画質はどの程度落ちますか？', a: 'デフォルトの80-90%設定では、肉眼で違いを判別するのはほぼ不可能です。' },
                    { q: '画像データは安全ですか？', a: 'はい。すべての処理はお使いのブラウザ内で完結し、サーバーにアップロードされることはありません。' }
                ]
            }
        },
        promptGen: {
            title: 'AIプロンプト生成器',
            desc: 'SunoやMidjourneyのための完璧なプロンプトを作成します。',
            platform: 'プラットフォーム',
            genre: 'ジャンル/スタイル',
            subject: '主題',
            subjectPlaceholder: '何についての内容ですか？',
            details: '詳細描写',
            detailsPlaceholder: 'スタイル、照明、楽器など追加したい詳細を入力...',
            outputTitle: '生成されたプロンプト',
            copy: 'コピー',
            copied: 'コピー完了！',
            placeholder: 'プロンプトがここに表示されます...',
            platforms: { midjourney: 'Midjourney', suno: 'Suno', stableDiffusion: 'Stable Diffusion' },
            genres: { 'K-Pop': 'K-Pop', 'Lofi': 'Lofi', 'Jazz': 'ジャズ', 'Rock': 'ロック' },
            guide: {
                title: 'プロンプトマスターガイド',
                subtitle: '高品質なプロンプトの作り方',
                sections: [
                    {
                        title: '1. Midjourney プロ級のコツ',
                        content: '主題の後に、スタイル（例：Cinematic）や詳細（例：8k, highly detailed）を追加してください。--ar 16:9 などのパラメータを使うことで、より映画的な構図が得られます。'
                    },
                    {
                        title: '2. Sunoでの楽曲生成',
                        content: 'ジャンルの指定には [K-Pop, Jazz] のように角括弧を使用してください。詳細欄に雰囲気や特定の楽器を入れることで、より質の高い楽曲が生成されます。'
                    }
                ],
                faq: [
                    { q: 'プロンプトの構造がなぜ重要なのですか？', a: 'AIの出力品質は具体性に依存します。明確な構造を持たせることで、AIがあなたの意図を正確に理解し、より良いクリエイティブを生成できます。' },
                    { q: '他のAIでも使えますか？', a: 'はい！ここで生成されたベースプロンプトは、DALL-EやStable Diffusionなど、ほとんどの画像・音声生成AIで活用可能です。' }
                ]
            }
        },
        ytGrab: {
            title: 'YouTubeサムネイル抽出',
            desc: 'クリック一つで高画質サムネイルを取得。',
            placeholder: 'YouTubeのURLを入力してください',
            getBtn: 'サムネイルを取得',
            invalidUrl: '無効なURL形式です。',
            fetching: 'データを読み込み中...',
            downloadHd: '最高画質(HD)をダウンロード',
            editBtn: 'AI背景削除・編集',
            simulatorTitle: 'YouTubeホームシミュレーター',
            simulatorSubtitle: '実際のフィードでの見え方を確認',
            simulatorDesc: '他動画の中で自分のサムネイルがどれだけ目立つかシミュレーションします。',
            safeZoneBtn: 'セーフゾーン確認',
            shortsSafeZoneBtn: 'Shorts UI確認',
            colorPalette: 'カラーパレット',
            closeBtn: '閉じる',
            guide: {
                title: 'サムネイル活用ガイド',
                subtitle: '著作権と活用法',
                sections: [
                    {
                        title: '1. サムネイル抽出の活用シーン',
                        content: 'プロのクリエイターは、単なる保存以外にも以下のような目的で活用しています：\n• 競合チャンネルのデザイン要素の分析\n• 紛失した自チャンネルのサムネイル素材の復旧\n• ブログやニュース記事での動画引用時の高画質画像として\n• YouTube Shortsの印象的なフレームのキャプチャ'
                    },
                    {
                        title: '2. 4K・フルHD解像度の保証',
                        content: '当ツールはYouTube APIが提供する最高解像度である `maxresdefault.jpg` を優先的に取得します。アップローダーがHDサムネイルを設定していれば、鮮明なオリジナル画像を入手できます。'
                    }
                ],
                faq: [
                    { q: '最高画質版（HD）が表示されないのはなぜですか？', a: '動画自体の解像度が低いか、投稿者が高画質サムネイルを設定していない場合、YouTube側でファイルが生成されません。その場合は標準画質のものをご利用ください。' },
                    { q: '画像のダウンロードは安全ですか？', a: 'はい。YouTubeの公式画像サーバーから直接ブラウザに読み込むため、マルウェアの心配はありません。' }
                ]
            }
        },
        qrGen: {
            title: 'QRコード生成',
            desc: 'ビジネスやSNS用のカスタムQRコードをデザイン。高解像度対応。',
            target: 'URLまたはテキストを入力',
            fgColor: 'コードの色',
            bgColor: '背景色',
            size: '解像度',
            downloadPng: '高解像度 PNG ダウンロード',
            downloadSvg: 'ベクター SVG ダウンロード',
            vectorReady: '出力用の高解像度ベクターを準備しています...',
            uploadLogo: 'カスタムロゴをアップロード',
            logoSize: 'ロゴサイズの調整',
            removeLogo: 'ロゴを削除',
            templates: 'ビジネス用テンプレート',
            styles: 'QRスタイル設定',
            frames: 'フレームとテキスト',
            frameText: 'ラベルテキスト',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: 'ウェブサイト',
                wifi: 'Wi-Fi 接続',
            },
            guide: {
                title: 'QRコード活用ガイド',
                subtitle: 'マーケティングでの活用',
                sections: [
                    {
                        title: '1. スキャンの信頼性を高めるコツ',
                        content: 'QRコードにおいて最も重要なのはコントラストです。明るい背景に対して、暗いアクセントカラーを使用してください。当ツールは標準的な誤り訂正レベルを採用しており、多少の汚れや歪みがあっても読み取りが可能です。'
                    },
                    {
                        title: '2. オフラインでのクリエイティブな活用',
                        content: '• スマート名刺：ポートフォリオへ直接リンク\n• 非接触メニュー：飲食店での衛生的な注文体験\n• イベント入場：チケットのスキャンによるスムーズな受付\n• ワンタップWi-Fi：長いパスワードの入力を省略'
                    }
                ],
                faq: [
                    { q: 'QRコードが読み取れない場合は？', a: 'コントラストが低い、印刷サイズが小さすぎる、または周囲の余白（クワイエットゾーン）が不足していることが主な原因です。' },
                    { q: '商用利用は可能ですか？', a: 'はい。生成されたすべてのQRコードはロイヤリティフリーで、あらゆる商用プロジェクトで自由にお使いいただけます。' }
                ]
            }
        },
        textConverter: {
            title: 'テキスト変換・整理',
            desc: '大文字小文字変換、データクレンジングを一箇所で。',
            inputPlaceholder: 'ここにテキストを入力...',
            statsCharacters: '全文字数',
            statsWords: '単語数',
            statsLines: '行数',
            categoryCase: 'ケース変換',
            categoryCleanup: 'クリーニング',
            categoryWeb: 'Web/エンコード',
            categoryData: 'ソート/フィルタ',
            btnUppercase: '大文字へ',
            btnLowercase: '小文字へ',
            btnCapitalize: '先頭大文字',
            btnTrim: '余分な空白削除',
            btnRemoveEmpty: '空行削除',
            btnRemoveDupes: '重複行削除',
            btnRemoveDupesWords: '重複単語削除',
            btnUrlEncode: 'URLエンコード',
            btnUrlDecode: 'URLデコード',
            btnBase64Encode: 'Base64エンコード',
            btnBase64Decode: 'Base64デコード',
            btnJsonFormat: 'JSON整形',
            btnSortAz: '昇順ソート',
            btnSortZa: '降順ソート',
            btnCopy: '結果をコピー',
            btnCopied: 'コピーしました！',
            btnClear: 'クリア',
            guide: {
                title: 'テキスト変換活用ガイド',
                subtitle: '効率的なデータ編集',
                sections: [
                    {
                        title: '1. クレンジングツールによるデータ品質の向上',
                        content: 'スプレッドシートやウェブサイトからデータをコピーする際、不要な重複や空白が混じることがあります。「重複削除」や「空白削除」を使って、即座にクリーンな生データを作成しましょう。'
                    },
                    {
                        title: '2. 開発者のためのエンコードユーティリティ',
                        content: 'ローカル環境を構築することなく、ブラウザ上で即座にURLパラメータやBase64文字列を確認できます。すべての処理はブラウザ内で完結するため安全です。'
                    },
                    {
                        title: '3. JSON整形による可読性の向上',
                        content: '読みにくい1行のJSONを構造化された形式に変換します。APIレスポンスのデバッグやコードレビューに不可欠なツールです。'
                    }
                ],
                faq: [
                    { q: 'テキストのサイズ制限はありますか？', a: '数千行のデータでもスムーズに処理可能です。ローカル処理のため、お使いのデバイスのメモリ容量にのみ依存します。' },
                    { q: 'データは安全ですか？', a: 'はい。入力されたテキストがサーバーに送信されることはありません。すべての変換処理はローカルで行われます。' }
                ]
            }
        },
        bgRemover: {
            title: 'AI背景削除',
            desc: 'AIが写真から背景を自動で透明にします。',
            preparing: 'AI準備中...',
            processing: '背景分析中...',
            modelLoading: 'AIエンジン読み込み中...',
            downloadReady: '背景透過画像を保存',
            dropMsg: '写真をドロップ',
            comparison: 'ビフォーアフター',
            stepFetch: '画像準備中...',
            stepModel: 'モデル読み込み中...',
            stepInference: '背景削除中...',
            refineTitle: '手動修正モード',
            refineDesc: 'ブラシを使って復元や追加削除ができます。',
            brushRestore: '復元',
            brushErase: '消しゴム',
            smartExtract: 'スマート抽出',
            smartExtractDesc: '残したいオブジェクトの周りを描いて選択してください。',
            selectObject: 'オブジェクト選択',
            clickToExtract: '抽出したいオブジェクトをタッチしてください',
            backToSelection: '再選択',
            brushSize: 'サイズ',
            applyRefine: '修正完了',
            cancelRefine: 'キャンセル',
            stickerEffect: 'ステッカー効果',
            stickerColor: '枠線の色',
            backgroundColor: '背景色',
            bgTransparent: '透過',
            bgSolid: '単色',
            bgGradient: 'グラデーション',
            bgImage: '画像',
            undo: '元に戻す',
            redo: 'やり直し',
            reset: 'リセット',
            zoom: 'ズーム',
            idPhoto: 'ID/証明写真',
            passport: 'パスポート (3.5x4.5cm)',
            usVisa: 'USビザ (2x2in)',
            idCard: '証明写真 (3x4cm)',
            bgLibrary: 'AI背景ライブラリ',
            uploadCustomBg: '背景アップロード',
            addText: 'テキスト追加',
            deleteText: '削除',
            deleteImage: '画像削除',
            resetPos: '位置リセット',
            subjectScale: 'スケール',
            brightness: '明るさ',
            contrast: 'コントラスト',
            saturation: '彩度',
            rotation: '回転',
            flipH: '左右反転',
            flipV: '上下反転',
            opacity: '不透明度',
            shadow: 'シャドウ',
            tabTransform: '変形',
            tabEnhance: '補正',
            tabStyling: 'スタイル',
            alignment: '整列',
            centerH: '左右中央',
            centerV: '上下中央',
            bringToFront: '最前面へ',
            sendToBack: '最背面へ',
            filterPresets: '濾過器',
            filterOriginal: 'オリジナル',
            filterBW: '白黒',
            filterSepia: 'セピア',
            filterWarm: '暖色',
            filterCool: '冷色',
            filterVintage: 'ヴィンテージ',
            textEditing: 'テキスト編集',
            textPlaceholder: '入力...',
            textSize: 'サイズ',
            stickerWidth: '枠線の太さ',
            shortsCrop: '9:16 縦長',
            share: '共有',
            shareText: 'AIクリエイティブスタジオ! ⚡',
            photoMode: '写真モード',
            studio: 'スタジオ',
            original: 'オリジナル',
            result: '結果',
            compare: '比較',
            scale: 'スケール',
            bgTrsp: '透明',
            bgClr: 'カラー',
            bgGrad: 'グラデ',
            bgImg: '画像',
            scaleLabel: 'スケール調整',
            smartClick: 'スマートクリック',
            roughLasso: 'ラッソ選択',
            clickPrompt: '残したい対象をクリック',
            lassoPrompt: '対象の周りを囲むように描く',
            resetConfirmTitle: '初期化しますか？',
            resetConfirmDesc: 'これまでの作業内容がすべて失われます。',
            aspectTitle: 'アスペクト比',
            aspectSquare: '1:1 正方形',
            aspectSocial: '4:5 SNS素材',
            aspectTV: '16:9 ワイド/TV',
            edgeTitle: '完璧なエッジ',
            edgeDesc: '高度なAIが細部まで正確に保存します。',
            precisionTitle: '精密な制御',
            precisionDesc: '手動ブラシで完璧に修正できます。',
            proBgTitle: 'プロ背景',
            proBgDesc: 'クリック一つで証明写真やサムネイルを作成。',
            aiThinking: "AIが背景を分析しています...",
            panView: '画面移動',
            brush: 'ブラシ',
            selection: '範囲選択',
            fontGothic: 'ゴシック',
            fontSerif: '明朝',
            fontMono: '等幅',
            fontHandwriting: '手書き',
            fontDefault: 'デフォルト',
            smartTrim: 'スマートトリミング',
            smoothStream: 'スムースストリーム',
            guide: {
                title: '背景削除ガイド',
                subtitle: 'AIによる自動カットアウト',
                sections: [
                    {
                        title: '1. AIコントラストによる完璧な切り抜き',
                        content: '完璧なAI背景削除の秘訣は、境界線を明確にすることにあります。ポートレートの場合、髪の毛一本一本まで残したいなら、被写体と背景の色のコントラストがはっきりした画像を使用してみてください。当ツールは最新のディープラーニングモデルを採用しており、複雑なシーンでもプロ級の精度を提供しますが、コントラストが高いほど最終的な鮮明度は飛躍的に向上します。'
                    },
                    {
                        title: '2. 手動修正モードによるプロ級のディテール',
                        content: 'AIが一部を消し忘れたり、消しすぎたりした場合は、上部の「手動修正モード」を有効にしてください。遅延ゼロのキャンバスレンダリングによる精密ブラシ技術を使用して、特定の領域を完璧に復元または消去できます。これは、透明な物体、細かい布地、複雑な毛並みのペットに特に有効です。'
                    },
                    {
                        title: '3. 商業標準とカスタムステッカー効果',
                        content: '単なる透過処理で終わらせないでください。UltraUtilsは、証明写真やパスポート写真の自動標準サイズを提供し、主体を際立たせるための「ステッカー効果」（白い縁取り）を追加することも可能です。カスタマイズグッズのデザインや、目を引くYouTubeサムネイルに最適です。縁の太さや色を調整して、独自のスタイルを作成しましょう。'
                    },
                    {
                        title: '4. サーバーレス・ローカル処理による絶対的なプライバシー',
                        content: '写真がサーバーに流出することを心配していますか？UltraUtilsは、すべての計算をお使いのブラウザ内でローカルに実行します。画像データの1バイトたりともサーバーにアップロードされることはありません。機密性の高いビジネス文書やプライベートな写真の処理に、最も安全な選択肢です。'
                    }
                ],
                faq: [
                    { q: '背景を削除すると画質は落ちますか？', a: 'いいえ。背景情報を透明なアルファチャンネルに変換するだけで、画像の元の解像度は維持されます。すべてのピクセルを保持するために、高品質なPNG形式で書き出します。' },
                    { q: '透過画像はどこで使用できますか？', a: 'YouTubeサムネイルの合成、ECサイトの商品リスト、Instagramストーリーのステッカー、プロの証明写真、その他あらゆるグラフィックデザインプロジェクトに最適です。' },
                    { q: '複数の画像を一度に処理できますか？', a: '現在は高精度な単一画像処理に焦点を当てています。より迅速な作業をサポートするため、将来のアップデートで一括バッチ処理機能が計画されています。' },
                    { q: 'AIが主体を認識できない場合はどうすればいいですか？', a: '主体が小さすぎたり、背景と完全に同化している場合に起こりやすいです。主体が中央にあり、周囲と明確に区別できる別の写真でお試しください。' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Master PRO',
            desc: 'オールインワンPDFツールキット。結合、分割、変換、セキュリティ保護を簡単に。',
            merge: 'ファイルを結合',
            split: 'ページを分割',
            toImage: '画像に変換',
            rotate: 'ページを回転',
            protect: 'パスワード設定',
            uploadMsg: 'PDFファイルをドロップまたはクリック',
            filesSelected: '個のファイルを選択中',
            mergeNow: '結合PDFを作成',
            splitNow: '全ページを分割',
            rotateNow: '90度回転を適用',
            protectNow: 'ドキュメントを暗号化',
            downloadMerged: '結果をダウンロード',
            downloadSplit: 'すべて保存 (ZIP)',
            addMore: 'ファイルを追加',
            clear: 'リストをクリア',
            pageRange: 'ページ範囲 (例: 1-5, 10)',
            password: 'パスワード入力',
            options: '詳細設定',
            processingMsg: '高性能エンジンで処理中...',
            successMsg: '正常に完了しました！',
            guide: {
                title: 'PDF Master 活用ガイド',
                subtitle: 'プロのようにPDFを管理・編集する方法',
                sections: [
                    {
                        title: '1. 高度なPDF結合と最適化',
                        content: 'バラバラの資料を一つにまとめるのは基本です。順番を自由に並べ替えて結合できます。'
                    },
                    {
                        title: '2. 精密なページ分割と抽出',
                        content: '特定のページだけが必要な場合、全ページを個別に分けたり、範囲指定で抽出したりできます。'
                    },
                    {
                        title: '3. セキュリティ：パスワード保護',
                        content: '機密書類にパスワードをかけましょう。ブラウザ内で暗号化されるため安全です。'
                    },
                    {
                        title: '4. 完全なプライバシー：100%ローカル処理',
                        content: '外部サーバーにファイルを送信することはありません。お使いのPC内ですべて完結します。'
                    }
                ],
                faq: [
                    { q: '結合できるファイル数に制限はありますか？', a: '技術的な制限はありませんが、50ファイル以下または合計100MB以下を推奨します。' },
                    { q: '特定のページだけ抽出できますか？', a: 'はい、「分割」タブで「1-5, 10」のように指定すれば、そのページだけで新しいPDFを作れます。' },
                    { q: 'パスワード保護の安全性は？', a: '標準的な128bit AES暗号化を使用します。ローカルで処理されるため、パスワードが漏れることはありません。' },
                    { q: 'ファイルはどこに保存されますか？', a: '処理完了後、お使いのブラウザのダウンロードフォルダに直接保存されます。' }
                ]
            }
        },
        home: {
            badge: 'すべて無料・プライバシー重視',
            titlePrefix: 'デジタルな',
            titleSuffix: 'スーパーパワーを',
            desc: 'クリエイターのための高性能ツール集。',
            descLine2: '登録不要で即座にパワフルな機能を利用できます。',
            launchTool: 'ツールを開く',
            missionTitle: 'プライバシー優先・高性能デジタルツールキット',
            missionDesc1: 'UltraUtilsへようこそ。ここは、プライバシーを重視した高性能なデジタルユーティリティの究極の目的地です。ユーザーデータが妥協されたり、複雑な支払い画面が表示されたりすることが多い今日のオンラインツールにおいて、私たちは100%無料、完全ローカル処理、そしてプロフェッショナルなデザインという異なるアプローチをとっています。',
            missionDesc2: '私たちのミッションは、クリエイター、開発者、そして一般ユーザーが、ブラウザ内で直接動作するツールを活用できるようにすることです。AIによる背景削除、SEOのための画像最適化、複雑なPDFドキュメントの管理など、機密ファイルをサーバーにアップロードすることなく、すべての重い処理をローカルで完結させます。',
            features: {
                privacy: { title: 'プライバシー', desc: 'サーバーアップロードなし' },
                speed: { title: 'スピード', desc: 'ローカルメモリ処理' },
                global: { title: 'グローバル', desc: '多言語サポート' },
                free: { title: '完全無料', desc: '隠れた費用なし' }
            },
            footerNote: {
                title: 'すべての人のためのプロツール',
                subtitle: 'なぜ何千人ものユーザーが日常のデジタルワークフローでUltraUtilsを信頼しているのか、その理由をご確認ください。',
                media: { title: 'メディアスイート', desc: '高品質なYouTubeサムネイル抽出とAI背景削除。クリエイターに最適なワークフローパートナー。' },
                data: { title: 'データ＆テキスト', desc: '高度なテキスト変換、フォーマット、クリーニング。データアナリストや開発者の必須ツール。' },
                design: { title: 'デザイン資産', desc: 'カスタムスタイルと高解像度出力を備えたプロフェッショナルなQRコード生成。ビジネスマーケティングに最適。' }
            },
            growthTips: {
                title: 'デジタル成長のためのエキスパートチップス',
                subtitle: '各ツールを 200% 活用してトラフィックを加速させる方法をご紹介します。',
                tips: [
                    {
                        title: 'YouTube サムネイル戦略',
                        desc: '競合のサムネイルを分析し、公開前に実際のフィードでどのように見えるかテストしましょう。',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'SEO 最適化ワークフロー',
                        desc: '背景を削除してすぐに圧縮し、Google 検索に最適な画像を作成します。',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'AI クリエイティブブースト',
                        desc: 'プロフェッショナルなプロンプトジェネレーターで、あなたのクリエイティブなアイデアを現実に変えましょう。',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: '次のおすすめステップ',
            suggestNext: 'ワークフローを強化するためにこれらのツールをお勧めします',
            installPwa: 'UltraUtils アプリをインストール',
            installPwaDesc: 'ホーム画面に追加して、すべてのツールにすばやく簡単にアクセスできるようにします。',
            installBtn: '今すぐインストール',
            recentTools: '最近使ったツール'
        },
        advertise: {
            title: '広告掲載',
            desc: 'UltraUtilsのグローバルクリエイターコミュニティに、あなたの製品を宣伝しましょう。',
            slotsTitle: '利用可能な広告枠',
            formTitle: '広告掲載のお問い合わせ',
            name: '氏名 / 会社名',
            namePlaceholder: '山田太郎 / 株式会社サンプル',
            email: 'メールアドレス',
            emailPlaceholder: 'yamada@example.com',
            dates: '希望掲載期間',
            datesPlaceholder: '例: 2026-03-01 ~ 2026-03-15',
            message: 'お問い合わせ内容',
            messagePlaceholder: '製品やサービス、掲載希望のリンクなどをご記入ください...',
            submit: 'お問い合わせを送信',
            success: '送信が完了しました。担当者より近日中にご連絡いたします。',
            backToForm: '入力フォームに戻る',
            submitError: '送信に失敗しました。もう一度お試しください。',
            slotTop: 'トップバナー',
            slotTopDesc: 'すべてのツールページの最上部に表示される728x90バナー。ブランド認知度を最大化。',
            slotHome: 'ホームフィードバナー',
            slotHomeDesc: 'ホームのツールグリッド内にネイティブに配置。高いエンゲージメントに最適。',
            slotSide: 'サイドバナー',
            slotSideDesc: '160x600のスカイスクレイパー。追従型サイドバーで長時間のブランド露出。',
            slotBottom: 'フッターバナー',
            slotBottomDesc: 'すべてのツールページ下部に表示される728x90バナー。コンバージョン獲得に。',
            pricePremium: 'PREMIUM',
            priceHighCTR: 'HIGH CTR',
            priceConversion: 'CONVERSION',
            benefits: [
                '月间10万人以上のアクティブユーザー',
                'YouTubeクリエイターによる高い利用率',
                'グローバルかつローカルなリーチ',
                '透明性の高いパフォーマンスレポート'
            ],
            partnerMsg: 'UltraUtilsと提携することは、次世代のデジタルビルダーとつながることを意味します。',
            faqTitle: '広告掲載FAQ',
            faqDesc: 'UltraUtilsへの広告掲載に関するよくある質問',
            faq: [
                { q: '価格はどのように決まりますか？', a: '枠の種類と掲載期間に基づきます。現在のトラフィック状況に応じた最適なプランをご提案します。' },
                { q: '動画広告は可能ですか？', a: '現在はサイトパフォーマンスを考慮し、静止画およびテキストバナーのみ対応しています。' },
                { q: 'どのくらい前に予約が必要ですか？', a: '人気枠は早期に埋まる可能性があります。掲載開始の1〜2週間前のご連絡をお勧めします。' },
                { q: '支払い方法は何がありますか？', a: '銀行振込および主要なオンライン決済に対応しています。詳細は個別にご案内します。' }
            ]
        },
        footer: {
            tools: 'ツール',
            resources: 'リソース',
            legal: '法的情報',
            support: 'サポート',
            privacy: 'プライバシーポリシー',
            terms: '利用規約',
            advertise: '広告掲載',
            coffee: 'コーヒーを贈る',
            allRights: 'All rights reserved.',
            social: 'SNS',
            about: 'サイトについて',
            contact: 'お問合せ',
        },
        privacy: { title: 'プライバシーポリシー', lastUpdated: '更新日: 2026年2月15日', sections: [{ title: 'データの取り扱い', content: '当サイトは個人情報を直接収集しません。画像等の処理はすべてブラウザ内で行われます。' }] },
        terms: { title: '利用規約', lastUpdated: '更新日: 2026年2月15日', sections: [{ title: '免責事項', content: '当ツールは現状のまま提供され、使用により生じたいかなる損害も責任を負いません。' }] },
        about: {
            title: 'UltraUtilsについて',
            subtitle: 'より速く、より安全なデジタルワークフローを',
            sections: [
                {
                    title: '私たちのミッション',
                    content: 'UltraUtilsは、クリエイター、開発者、そして一般ユーザーが、複雑なインストールや登録なしでタスクを実行できるプロフェッショナルなデジタル環境を提供することを目指しています。私たちは実用性とシンプルさに焦点を当て、テクノロジーの民主化に努めています。'
                },
                {
                    title: 'なぜUltraUtilsなのですか？',
                    content: 'プライバシーは私たちの最優先事項です。ファイルをサーバーに送信する多くのツールとは異なり、私たちは最新のウェブ技術を活用して、すべてをブラウザ内で直接処理します。速度が向上するだけでなく、あなたのデータがデバイスから離れることはありません。'
                },
                {
                    title: 'グローバルプラットフォーム',
                    content: '私たちはコミュニケーションの壁を取り払うために多言語をサポートしており、世界中のユーザーの生産性を最大化するためにツールキットを定期的に更新しています。'
                }
            ],
            stats: {
                free: '100% 無料',
                logs: 'サーバーログなし',
                languages: '多言語対応',
                utilities: 'エキスパートツール'
            }
        },
        contact: { title: 'お問合せ', subtitle: 'ご質問はこちら', desc: '機能要望やバグ報告などお気軽に。', infoTitle: '窓口', infoEmail: 'official.ultrautils@gmail.com', infoResponse: '24時間以内の返信を心がけています。' },
        notFound: { title: 'お探しのページが見つかりません', desc: 'URLが正しいか確認してください。', backHome: 'ホームへ戻る' },
        feedback: { title: 'ツールはいかがでしたか？', useful: '役に立った！ 👍', neutral: '普通 😐', improve: '改善してほしい 🔧', placeholder: '要望や意見を入力してください...', submit: '送信', success: 'ご意見ありがとうございます！', commitment: 'より良いツール作成の参考にさせていただきます。' },
        share: { title: '気に入ったらシェア！', copy: 'リンクコピー', copied: 'コピー完了！', twitter: 'X', facebook: 'Facebook', whatsapp: 'WhatsApp' },
        ytPlanner: {
            title: 'AI YouTube企画マスター',
            desc: '自動でバズるタイトルや台本案を作成します。',
            placeholder: 'トピックを入力...',
            generateBtn: 'AI企画案を作成',
            generating: 'AIが戦略を練っています...',
            tabTitles: 'おすすめタイトル',
            tabScripts: '台本草案',
            tabTags: 'タグ&キーワード',
            tabStrategy: '露出戦略',
            videoType: 'ジャンル',
            vlog: 'VLOG',
            info: '教育系',
            review: 'レビュー',
            shorts: 'Shorts',
            topic: '動画テーマ',
            topicPlaceholder: '例: おすすめカフェ, ガジェット紹介など',
            advancedOptions: '詳細設定',
            tone: 'トーン',
            toneFunny: '面白く',
            toneSerious: '真面目に',
            toneProfessional: '専門的に',
            targetAudience: '視聴者',
            targetGeneral: '一般',
            targetExpert: '玄人',
            targetBeginner: '初心者',
            resultsTitle: 'AI企画レポート',
            setupTab: '設定',
            resultsTab: 'レポート',
            copyAll: '全部コピー',
            copied: 'コピーしました！',
            guide: {
                title: 'YouTube 成功戦略ガイド',
                subtitle: '攻克点击率与播放量的算法秘籍',
                sections: [
                    {
                        title: '1. 高CTRタイトルの心理学（クリックの磁石）',
                        content: '再生数の80%は、タイトルとサムネイルのしきい値で決まります。単に事実を並べるのではなく、「情報ギャップ」技術を使用してください。秘密や大きな報酬を予感させるフレーズで好奇心を刺激します。当AIは数千件のバイラルデータを分析し、内容に誠実でありながらクリックしたくなる心理的トリガーを含むタイトルを提案します。'
                    },
                    {
                        title: '2. グローバルリーチのための総合的なSEO戦略',
                        content: 'YouTubeは世界第2位の検索エンジンです。説明文の最初の2行にコアキーワードを配置し、戦略的なタグと整合させることで、メタデータの相乗効果が生まれます。これにより、YouTubeのおすすめだけでなく、Google検索結果での視認性も大幅に向上し、オーガニックなエバーグリーン・トラフィックを促進します。'
                    },
                    {
                        title: '3. 最大視聴時間のための戦略的なスクリプト作成',
                        content: '最初の15秒は、視聴者を勝ち取るか失うかの「フックゾーン」です。提供されるすべてのスクリプト案は、価値優先の構造に従っています。フック（即時の約束）→ 価値提案（計画）→ コアコンテンツ（解決）。このプロのストーリーテリングの枠組みは、YouTubeアルゴリズムにとって最も重要な要因である高いエンゲージメント維持率を維持するように設計されています。'
                    },
                    {
                        title: '4. Shortsマスター：維持率とどんでん返し',
                        content: 'YouTube Shortsではルールが異なります。成功は「ループ可能」な構造と即時の視覚刺激にかかっています。当AIは、45秒時点での視覚的などんでん返しや、視聴者が何度も動画を見たくなるような好奇心ベースのループなど、Shorts特有の戦略を提案し、バイラルポテンシャルを飛躍的に高めます。'
                    }
                ],
                faq: [
                    { q: 'AIが生成したタイトルをそのまま使ってもいいですか？', a: 'もちろんです。当ツールのタイトルはパフォーマンスに合わせて最適化されています。ただし、最適な提案に自分自身の「声」やチャンネル固有のコンテキストを加えることで、最高のエンゲージメント率が得られます。' },
                    { q: 'タグの理想的な数はありますか？', a: '量より質に焦点を当ててください。当AIが提案する10〜15個の関連性の高いキーワードを使用する方が、500文字を意味のない言葉で埋め尽くすよりも効果的です。無関係なタグは検索アルゴリズムを混乱させます。' },
                    { q: 'これらの計画を後で見るために保存できますか？', a: 'はい。「.TXTをダウンロード」ボタンを使用してフル戦略をローカルに保存するか、各セクションをメモ帳やNotionにコピーして制作に活用してください。' },
                    { q: '商用利用は完全に無料ですか？', a: 'はい。UltraUtilsのすべてのツール（戦略マスターを含む）は100%無料で、クレジット表記や登録も不要です。あらゆる段階のクリエイターをサポートします。' }
                ]
            }
        },
        houseAds: {
            bgRemoverTitle: 'プロ級背景削除',
            bgRemoverDesc: 'AIが一瞬で透過処理。',
            pdfMasterTitle: 'PDFエディタ',
            pdfMasterDesc: '結合・分割を簡単に。',
            imageCompTitle: '画像圧縮',
            imageCompDesc: '画質維持で容量削減。',
            ytGrabTitle: 'サムネイル抽出',
            ytGrabDesc: '高画質で即ダウンロード。',
            coffeeTitle: 'コーヒーを奢る',
            coffeeDesc: '開発の励みになります！',
            imageRestorerTitle: 'AI 画像修復',
            imageRestorerDesc: 'ぼやけた写真を鮮明に。',
        },
        imageRestorer: {
            title: 'AI 画像修復 & リマスター',
            desc: '高度な AI リマスタリング技術で、ぼやけた写真、古い写真、破損した写真を修復します。',
            restoreBtn: '今すぐ修復',
            remasterBtn: 'リマスタリング',
            processing: 'AI が画像を分析および修復しています...',
            enhancement: 'ディテール強化',
            resolution: '超解像',
            noise: 'ノイズ除去',
            face: '顔修復',
            color: '色補正',
            original: 'オリジナル',
            restored: '修復後',
            upscaleX2: '2倍拡大',
            upscaleX4: '4倍拡大',
            guide: {
                title: '画像修復ガイド',
                subtitle: '大切な思い出を鮮やかな高画質で',
                sections: [
                    {
                        title: '1. ぼやけた写真やピントの合っていない写真を直す',
                        content: '当社の AI は、学習したパターンから詳細を予測し、ぼやけた画像を再構成します。特に顔のパーツの再現に優れています。'
                    },
                    {
                        title: '2. 古い写真や破損した写真のリマスタリング',
                        content: '古い写真の傷や色あせを補正します。デジタルの修復技術で破損したピクセルを埋め、自然な色補正を適用します。'
                    }
                ],
                faq: [
                    { q: '非常に小さな画像でも修復できますか？', a: 'はい、超解像技術を使用して、画質を落とさずに画像を拡大し、鮮明度を高めることができます。' },
                    { q: '私の画像データは非公開ですか？', a: 'もちろんです。UltraUtils はすべての AI 処理をデバイス内でローカルに実行します。' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'Tips',
                        content: 'Record safely within your browser.'
                    }
                ],
                faq: [
                    {
                        q: 'Limit?',
                        a: 'No absolute limit.'
                    }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'RPM',
                        content: 'RPM is key.'
                    }
                ],
                faq: [
                    {
                        q: 'Accurate?',
                        a: 'Estimates only.'
                    }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
        }
    },
    es: {
        common: {
            settings: 'Ajustes',
            download: 'Descargar',
            processing: 'Procesando...',
            apply: 'Aplicar',
            cancel: 'Cancelar',
            error: 'Error',
            success: 'Éxito',
            selectImage: 'Seleccionar imagen',
            dropHere: 'Arrastra imagen aquí',
            orClick: 'o haz clic para buscar',
            shareResult: 'Compartir resultado',
            copiedLink: '¡Enlace copiado!',
            trySample: 'Probar con imagen de muestra',
            copyImage: 'Copiar imagen',
            imageCopied: '¡Imagen copiada al portapapeles!',
            imageCopyError: 'Error al copiar la imagen.',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: 'Inicio',
            imageSuite: 'Suite Imagen',
            promptGen: 'Prompt Gen',
            ytGrab: 'Extractor YT',
            qrGen: 'Gen QR',
            textConv: 'Conv Texto',
            bgRemover: 'Eliminar Fondo',
            ytPlanner: 'Planificador YT',
            pdfMaster: 'Maestro PDF',
            imageRestorer: 'Restaurador AI',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
        },
        imageMaster: {
            title: 'Compresión y Optimización',
            desc: 'Reduce tamaño sin perder calidad. Algoritmos AI mantienen la nitidez.',
            quality: 'Calidad de compresión',
            size: 'Ajustar resolución',
            width: 'Ancho (px)',
            height: 'Alto (px)',
            smartEnhance: 'Mejora AI Inteligente',
            smartEnhanceDesc: 'La AI restaura detalles perdidos durante la compresión en tiempo real.',
            original: 'Original',
            optimized: 'Optimizado',
            saveMsg: '{percent}% de espacio ahorrado',
            applyOptimize: 'Optimizar ahora',
            downloadOptimized: 'Guardar imagen optimizada',
            guide: {
                title: 'Guía de Optimización',
                subtitle: 'Mejora el rendimiento web',
                sections: [
                    {
                        title: '1. Impacto de la Compresión en la Velocidad Web y el SEO',
                        content: 'En el panorama digital actual, la velocidad de carga es un factor crítico de posicionamiento. ¿Sabía que más de la mitad del peso de un sitio web promedio proviene de las imágenes? Con Image Master, puede reducir el tamaño de los archivos hasta en un 80-90% con una diferencia de calidad casi imperceptible. Esto mejora directamente el tiempo de permanencia del usuario y reduce las tasas de rebote, ayudando a su sitio a escalar en los resultados de búsqueda de Google.'
                    },
                    {
                        title: '2. JPEG vs PNG: Eligiendo el Formato Correcto',
                        content: 'No todas las imágenes se comprimen igual. Para fotografías de personas o paisajes complejos, el formato JPEG ofrece la mejor eficiencia. Para gráficos con texto, logotipos o fondos transparentes, recomendamos el formato PNG. Nuestra herramienta soporta ambos y aplica algoritmos específicos para maximizar la calidad en cada caso.'
                    },
                    {
                        title: '3. Por qué es Especial la Mejora Inteligente AI',
                        content: 'Las herramientas tradicionales de compresión suelen dejar las imágenes borrosas. La función de mejora inteligente de UltraUtils utiliza algoritmos de aprendizaje profundo para proteger los bordes y mantener las texturas. Si necesita resultados profesionales para portafolios o comercio electrónico, asegúrese de activar esta función.'
                    }
                ],
                faq: [
                    { q: '¿Cuánta calidad se pierde al comprimir?', a: 'En el ajuste predeterminado del 80-90%, es casi imposible notar la diferencia a simple vista. Recomendamos este rango para la mayoría de los propósitos.' },
                    { q: '¿Puedo procesar varias imágenes a la vez?', a: 'Actualmente, ofrecemos procesamiento individual para asegurar la optimización más precisa. Una función de lote está planeada para el futuro.' },
                    { q: '¿Están mis fotos seguras?', a: 'Absolutamente. Todo el procesamiento ocurre localmente en tu navegador. Tus archivos nunca se suben a nuestros servidores.' }
                ]
            }
        },
        promptGen: {
            title: 'Generador de Prompts AI',
            desc: 'Crea prompts perfectos para Suno, Midjourney y más.',
            platform: 'Plataforma',
            genre: 'Género / Estilo',
            subject: 'Tema',
            subjectPlaceholder: '¿De qué trata?',
            details: 'Detalles',
            detailsPlaceholder: 'Estilo, luz, instrumentos...',
            outputTitle: 'Prompt Generado',
            copy: 'Copiar',
            copied: '¡Copiado!',
            placeholder: 'El prompt aparecerá aquí...',
            platforms: { midjourney: 'Midjourney', suno: 'Suno', stableDiffusion: 'Stable Diffusion' },
            genres: { 'K-Pop': 'K-Pop', 'Jazz': 'Jazz', 'Rock': 'Rock' },
            guide: {
                title: 'Guía Maestra de Prompts',
                subtitle: 'Cómo escribir prompts de alta calidad para Midjourney y Suno',
                sections: [
                    {
                        title: '1. Tips para Midjourney Pro',
                        content: 'Añade estilos (ej. Cinematic) y detalles (ej. 8k, altamente detallado) después del sujeto. Usa parámetros como --ar 16:9 para obtener la mejor composición cinematográfica.'
                    },
                    {
                        title: '2. Generación Musical con Suno',
                        content: 'Utiliza corchetes [K-Pop, Jazz] para los géneros. Incluir el estado de ánimo y los instrumentos específicos en los detalles ayuda a crear canciones mucho mejores.'
                    }
                ],
                faq: [
                    { q: '¿Por qué es importante la estructura del prompt?', a: 'La calidad de la IA depende de la especificidad. Una estructura clara ayuda a la IA a entender tu intención con precisión, resultando en mejores piezas creativas.' },
                    { q: '¿Puedo usarlos en otras IAs?', a: '¡Sí! Los prompts base generados aquí funcionan de maravilla con DALL-E, Stable Diffusion y la mayoría de las plataformas de IA generativa.' }
                ]
            }
        },
        ytGrab: {
            title: 'Extractor de Miniaturas YT',
            desc: 'Obtén miniaturas de YouTube en HD con un clic.',
            placeholder: 'Pega la URL aquí',
            getBtn: 'Obtener miniatura',
            invalidUrl: 'URL no válida.',
            fetching: 'Obteniendo datos...',
            downloadHd: 'Descargar HD',
            editBtn: 'Quitar Fondo AI',
            simulatorTitle: 'Simulador de YouTube',
            simulatorSubtitle: 'Mira cómo se ve en el feed',
            simulatorDesc: 'Comprueba si tu miniatura destaca entre la competencia.',
            safeZoneBtn: 'Zona segura',
            shortsSafeZoneBtn: 'UI de Shorts',
            colorPalette: 'Paleta de colores',
            closeBtn: 'Cerrar',
            guide: {
                title: 'Guía de Miniaturas',
                subtitle: 'Derechos y usos',
                sections: [
                    {
                        title: '1. Escenarios Comunes para usar un Extractor de Miniaturas',
                        content: 'Los creadores profesionales usan extractores para más que solo guardar imágenes:\n• Análisis de diseño de canales de la competencia.\n• Recuperación de archivos fuente propios perdidos.\n• Uso de imágenes de alta calidad para citas en blogs o noticias.\n• Captura de frames atractivos de YouTube Shorts.'
                    },
                    {
                        title: '2. Resolución 4K y Full HD Garantizada',
                        content: 'Nuestra herramienta prioriza `maxresdefault.jpg`, la resolución más alta proporcionada por la API de YouTube. Si el creador subió una miniatura en HD, obtendrás una imagen original nítida de 1080p+.'
                    },
                    {
                        title: '3. Soporte Completo para YouTube Shorts',
                        content: 'Soportamos perfectamente videos Shorts con estructura de URL diferente. Solo copia y pega la dirección `youtube.com/shorts/...` y extraeremos la miniatura manteniendo el aspecto vertical único.'
                    }
                ],
                faq: [
                    { q: '¿Por qué no veo el botón "HD"?', a: 'Si la calidad del video no es suficiente o el autor no configuró una miniatura de alta resolución, el sistema de YouTube no genera ese archivo.' },
                    { q: '¿Es seguro descargar estas imágenes?', a: 'Sí, se obtienen directamente de los servidores oficiales de imágenes de YouTube hacia su navegador, por lo que no hay riesgo de malware.' }
                ]
            }
        },
        qrGen: {
            title: 'Generador QR',
            desc: 'Diseña códigos QR para negocios o redes sociales. Alta resolución.',
            target: 'URL o texto',
            fgColor: 'Color del QR',
            bgColor: 'Color de fondo',
            size: 'Resolución',
            downloadPng: 'Descargar PNG de alta resolución',
            downloadSvg: 'Descargar SVG vectorial',
            vectorReady: 'Generando salida vectorial de alta definición...',
            uploadLogo: 'Subir logo personalizado',
            logoSize: 'Ajustar tamaño del logo',
            removeLogo: 'Eliminar logo',
            templates: 'Plantillas de negocios',
            styles: 'Ajustes de estilo QR',
            frames: 'Marcos y etiquetas',
            frameText: 'Texto de la etiqueta',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: 'Sitio web',
                wifi: 'Conexión Wi-Fi',
            },
            guide: {
                title: 'Guía QR',
                subtitle: 'Estrategias de marketing',
                sections: [
                    {
                        title: '1. Tips para Máxima Fiabilidad de Escaneo',
                        content: 'La clave de un buen código QR es el contraste. Asegura que tu color de acento sea lo suficientemente oscuro sobre un fondo claro. Nuestra herramienta usa niveles de corrección de errores estándar para mantener la legibilidad incluso con ligeras distorsiones.'
                    },
                    {
                        title: '2. Casos de Uso Creativos Offline',
                        content: '• Tarjetas de Visita Inteligentes: Enlaza directamente a tu portafolio.\n• Menús sin Contacto: Perfecto para restaurantes modernos.\n• Acceso a Eventos: Agiliza el check-in.\n• Wi-Fi en un toque: Sin necesidad de escribir contraseñas largas.'
                    },
                    {
                        title: '3. Códigos QR Estáticos vs Dinámicos',
                        content: 'Los códigos generados aquí son "Estáticos", lo que significa que los datos están codificados directamente en el patrón. Funcionan offline, nunca caducan y no requieren suscripción.'
                    }
                ],
                faq: [
                    { q: '¿Por qué no se escanea mi QR?', a: 'Los problemas comunes incluyen bajo contraste de color, imprimir el código demasiado pequeño o no dejar suficiente espacio vacío (Zona de Silencio) alrededor de los bordes.' },
                    { q: '¿Puedo usarlos para fines comerciales?', a: 'Sí, todos los códigos QR generados son 100% libres de regalías y se pueden usar para cualquier proyecto comercial.' }
                ]
            }
        },
        textConverter: {
            title: 'Conversor de Texto',
            desc: 'Limpia, formatea y convierte texto en un solo lugar.',
            inputPlaceholder: 'Pega tu texto aquí...',
            statsCharacters: 'Caracteres',
            statsWords: 'Palabras',
            statsLines: 'Líneas',
            categoryCase: 'Mayús/Minús',
            categoryCleanup: 'Limpieza',
            categoryWeb: 'Web/Encoding',
            categoryData: 'Datos',
            btnUppercase: 'MAYÚSCULAS',
            btnLowercase: 'minúsculas',
            btnCapitalize: 'Título',
            btnTrim: 'Recortar espacios',
            btnRemoveEmpty: 'Quitar vacías',
            btnRemoveDupes: 'Quitar duplicadas',
            btnRemoveDupesWords: 'Palabras duplicadas',
            btnUrlEncode: 'URL Encode',
            btnUrlDecode: 'URL Decode',
            btnBase64Encode: 'Base64 Encode',
            btnBase64Decode: 'Base64 Decode',
            btnJsonFormat: 'Formato JSON',
            btnSortAz: 'Ordenar A-Z',
            btnSortZa: 'Ordenar Z-A',
            btnCopy: 'Copiar resultado',
            btnCopied: '¡Copiado!',
            btnClear: 'Limpiar',
            guide: {
                title: 'Guía de Texto',
                subtitle: 'Edición eficiente',
                sections: [
                    {
                        title: '1. Mejora de Calidad de Datos con Herramientas de Limpieza',
                        content: 'Al copiar datos de hojas de cálculo o sitios web, los duplicados y espacios no deseados pueden arruinar tu análisis. Usa nuestras herramientas de "Eliminar duplicados" y "Limpiar espacios" para obtener datos puros al instante.'
                    },
                    {
                        title: '2. Utilidades de Codificación para Desarrolladores',
                        content: 'Verifica rápidamente parámetros URL o cadenas Base64 sin configurar un entorno local. Todo se procesa instantáneamente en tu navegador.'
                    },
                    {
                        title: '3. Formateo JSON para Legibilidad',
                        content: 'Transforma JSON desordenado o minificado en una estructura legible. Esencial para depurar respuestas de API y revisiones de código.'
                    }
                ],
                faq: [
                    { q: '¿Hay límite de tamaño de texto?', a: 'Nuestra herramienta puede manejar miles de líneas eficientemente. Al ser procesamiento local, solo está limitado por la memoria de tu dispositivo.' },
                    { q: '¿Mis datos están seguros?', a: 'Sí. Nunca enviamos tu texto a ningún servidor. Todas las transformaciones ocurren localmente en tu navegador.' }
                ]
            }
        },
        bgRemover: {
            title: 'Quitar Fondo AI',
            desc: 'Elimina el fondo de tus fotos al instante con AI.',
            preparing: 'Preparando AI...',
            processing: 'Quitando fondo...',
            modelLoading: 'Cargando motor AI...',
            downloadReady: 'Descargar imagen transparente',
            dropMsg: 'Suelta foto aquí',
            comparison: 'Antes y Después',
            stepFetch: 'Preparando imagen...',
            stepModel: 'Cargando modelo...',
            stepInference: 'Procesando...',
            refineTitle: 'Modo Retoque Manual',
            refineDesc: 'Usa el pincel para restaurar o borrar áreas.',
            brushRestore: 'Restaurar',
            brushErase: 'Borrar',
            smartExtract: 'Extracción Inteligente',
            smartExtractDesc: 'Dibuja alrededor del objeto que quieras conservar.',
            selectObject: 'Seleccionar Objeto',
            clickToExtract: 'Toca el objeto que quieras conservar',
            backToSelection: 'Volver a seleccionar',
            brushSize: 'Tamaño',
            applyRefine: 'Aplicar',
            cancelRefine: 'Cancelar',
            stickerEffect: 'Efecto Sticker',
            stickerColor: 'Color borde',
            backgroundColor: 'Color fondo',
            bgTransparent: 'Transparente',
            bgSolid: 'Sólido',
            bgGradient: 'Degradado',
            bgImage: 'Imagen',
            undo: 'Deshacer',
            redo: 'Rehacer',
            reset: 'Reset',
            zoom: 'Zoom',
            idPhoto: 'Master de Fotos ID',
            passport: 'Pasaporte',
            usVisa: 'Visa USA',
            idCard: 'DNI/Carnet',
            bgLibrary: 'Librería AI',
            uploadCustomBg: 'Subir fondo',
            addText: 'Añadir texto',
            deleteText: 'Borrar',
            deleteImage: 'Borrar imagen',
            resetPos: 'Reset pos',
            subjectScale: 'Escala',
            brightness: 'Brillo',
            contrast: 'Contraste',
            saturation: 'Saturación',
            rotation: 'Rotación',
            flipH: 'Volteo H',
            flipV: 'Volteo V',
            opacity: 'Opacidad',
            shadow: 'Sombra',
            tabTransform: 'Transformar',
            tabEnhance: 'Mejorar',
            tabStyling: 'Estilo',
            alignment: 'Alineación',
            centerH: 'Centrar H',
            centerV: 'Centrar V',
            bringToFront: 'Traer al frente',
            sendToBack: 'Enviar al fondo',
            filterPresets: 'Filtros',
            filterOriginal: 'Original',
            filterBW: 'B/N',
            filterSepia: 'Sepia',
            filterWarm: 'Cálido',
            filterCool: 'Frío',
            filterVintage: 'Vintage',
            textEditing: 'Editor de Texto',
            textPlaceholder: 'Escribir...',
            textSize: 'Tamaño',
            stickerWidth: 'Grosor borde',
            shortsCrop: '9:16 Shorts',
            share: 'Compartir',
            shareText: '¡Estudio Creativo AI! ⚡',
            photoMode: 'Modo Foto',
            studio: 'Estudio',
            original: 'Original',
            result: 'Resultado',
            compare: 'Comparar',
            scale: 'Escala',
            bgTrsp: 'Trsp',
            bgClr: 'Color',
            bgGrad: 'Grad',
            bgImg: 'Img',
            scaleLabel: 'Ajustar Escala',
            smartClick: 'Clic Inteligente',
            roughLasso: 'Lazo Rápido',
            clickPrompt: 'Haz clic en el objeto',
            lassoPrompt: 'Dibuja alrededor del objeto',
            resetConfirmTitle: '¿Reiniciar todo?',
            resetConfirmDesc: 'Se perderá todo el progreso actual.',
            aspectTitle: 'Relación de Aspecto',
            aspectSquare: '1:1 Cuadrado',
            aspectSocial: '4:5 Social',
            aspectTV: '16:9 Panorámico',
            edgeTitle: 'Bordes Perfectos',
            edgeDesc: 'AI avanzada que preserva cada detalle.',
            precisionTitle: 'Control de Precisión',
            precisionDesc: 'Pincel manual para retoques perfectos.',
            proBgTitle: 'Fondos Pro',
            proBgDesc: 'Fotos ID y miniaturas en un clic.',
            aiThinking: "La IA está analizando el fondo...",
            panView: 'Mover Vista',
            brush: 'Pincel',
            selection: 'Selección',
            fontGothic: 'Gótico',
            fontSerif: 'Serif',
            fontMono: 'Mono',
            fontHandwriting: 'Escritura',
            fontDefault: 'Predeterminado',
            smartTrim: 'Recorte inteligente',
            smoothStream: 'Transmisión fluida',
            guide: {
                title: 'Guía de Fondo',
                subtitle: 'Corte automático con AI',
                sections: [
                    {
                        title: '1. Recortes Impecables con Maestría de Contraste AI',
                        content: 'La clave para una eliminación de fondo AI perfecta son los límites claramente definidos. Para retratos, si desea preservar cada mechón de cabello, intente usar imágenes con alto contraste de color entre el sujeto y el fondo. Nuestra herramienta utiliza modelos de aprendizaje profundo de vanguardia para brindar una precisión profesional incluso en escenas complejas, pero un mayor contraste aumenta exponencialmente la nitidez final.'
                    },
                    {
                        title: '2. Detalles de Nivel Pro con Modo de Refinamiento Manual',
                        content: 'Si hay partes que la IA pasó por alto o borró en exceso, simplemente active el "Modo de Refinamiento Manual" en la parte superior. Utilizando tecnología de pincel de precisión con renderizado de lienzo sin demora, puede restaurar o borrar áreas específicas a la perfección. Esto es especialmente útil para objetos transparentes, telas finas o mascotas con pelaje complejo.'
                    },
                    {
                        title: '3. Estándares Comerciales y Efectos de Sticker Personalizados',
                        content: 'No se detenga solo en la transparencia. UltraUtils proporciona tamaños estándar automáticos para fotos de identificación y pasaporte, y le permite agregar un "Efecto Sticker" (borde blanco) para resaltar a sus sujetos, perfecto para el diseño de merchandising personalizado o miniaturas de YouTube llamativas. Ajuste el grosor y el color del borde para crear su propio estilo característico.'
                    },
                    {
                        title: '4. Privacidad Absoluta con Procesamiento Local sin Servidor',
                        content: '¿Le preocupa que sus fotos se filtren a un servidor? UltraUtils realiza todos los cálculos localmente dentro de su navegador. No se carga ni un solo byte de sus datos de imagen a un servidor, lo que lo convierte en la opción más segura para procesar documentos comerciales confidenciales o fotos personales privadas.'
                    }
                ],
                faq: [
                    { q: '¿Eliminar el fondo reduce la calidad de la imagen?', a: 'No. Mantenemos la resolución original de su imagen mientras solo convertimos la información de fondo en un canal alfa transparente. Utilizamos exportación PNG de alta calidad para preservar cada píxel.' },
                    { q: '¿Dónde puedo usar estas imágenes transparentes?', a: 'Son perfectas para montajes de miniaturas de YouTube, listados de productos de comercio electrónico, stickers de historias de Instagram, fotos de identificación profesionales y cualquier proyecto de diseño gráfico.' },
                    { q: '¿Puedo procesar varias imágenes a la vez?', a: 'Actualmente, nos enfocamos en el procesamiento de imágenes individuales de alta precisión. Se planea una función de procesamiento por lotes en una actualización futura para ayudarlo a trabajar aún más rápido.' },
                    { q: '¿Qué debo hacer si la IA no identifica al sujeto?', a: 'Esto suele suceder si el sujeto es demasiado pequeño o se mezcla perfectamente con el fondo. Intente con otra foto donde el sujeto esté centrado y sea claramente distinguible de su entorno.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Maestro PRO',
            desc: 'El kit de herramientas PDF definitivo. Una, divida, convierta y proteja sus archivos con facilidad.',
            merge: 'Unir archivos',
            split: 'Dividir páginas',
            toImage: 'Convertir a imagen',
            rotate: 'Rotar páginas',
            protect: 'Establecer contraseña',
            uploadMsg: 'Arrastre archivos PDF aquí o haga clic para buscar',
            filesSelected: 'archivos seleccionados',
            mergeNow: 'Crear PDF unido',
            splitNow: 'Dividir todas las páginas',
            rotateNow: 'Aplicar rotación de 90°',
            protectNow: 'Cifrar documento',
            downloadMerged: 'Descargar resultado',
            downloadSplit: 'Guardar todo (ZIP)',
            addMore: 'Agregar archivos',
            clear: 'Limpiar lista',
            pageRange: 'Rango de páginas (ej: 1-5, 10)',
            password: 'Ingrese contraseña',
            options: 'Opciones avanzadas',
            processingMsg: 'Procesando PDF con motor de alto rendimiento...',
            successMsg: '¡Tarea completada con éxito!',
            guide: {
                title: 'Guía Maestra de PDF',
                subtitle: 'Gestione y edite archivos PDF como un profesional',
                sections: [
                    {
                        title: '1. Fusión Avanzada y Optimización',
                        content: 'Combinar documentos fragmentados es clave. UltraUtils le permite unir varios archivos manteniendo el orden personalizado.'
                    },
                    {
                        title: '2. División de Precisión y Extracción',
                        content: '¿Necesita capítulos específicos? Use la función dividir para separar cada página o pick rangos exactos.'
                    },
                    {
                        title: '3. Seguridad: Cifrado y Protección',
                        content: 'Proteja sus contratos sensibles con passwords pro. El cifrado ocurre en su navegador, garantizando privacidad.'
                    },
                    {
                        title: '4. Privacidad Total: 100% Procesamiento Local',
                        content: 'No enviamos sus archivos a ningún servidor. Todo ocurre localmente en su propio dispositivo.'
                    }
                ],
                faq: [
                    { q: '¿Hay un límite de archivos para unir?', a: 'Técnicamente no, pero recomendamos menos de 50 archivos o 100MB para mejor rendimiento.' },
                    { q: '¿Puedo extraer páginas específicas?', a: '¡Sí! En la pestaña Dividir, ingrese un rango como "1-5, 10" para obtener solo esas páginas.' },
                    { q: '¿Es seguro el cifrado de contraseña?', a: 'Sí, usamos AES de 128 bits estándar. Al ser local, nadie más verá su contraseña.' },
                    { q: '¿Dónde se guardan mis archivos?', a: 'Se guardan directamente en su carpeta de descargas predeterminada tras el proceso.' }
                ]
            }
        },
        home: {
            badge: 'Gratis y enfocado en la privacidad',
            titlePrefix: 'Superpoderes Digitales para',
            titleSuffix: 'Creadores Modernos',
            desc: 'Una colección curada de herramientas utilitarias de alto rendimiento.',
            descLine2: 'Sin registros, sin muros de pago, solo funcionalidad pura.',
            launchTool: 'Iniciar herramienta',
            missionTitle: 'Utilidades de alto rendimiento con prioridad en la privacidad',
            missionDesc1: 'Bienvenido a UltraUtils, su destino premium para utilidades digitales de alto rendimiento y enfocadas en la privacidad. En una era donde las herramientas en línea a menudo comprometen los datos del usuario, nosotros apostamos por un enfoque diferente: 100% gratis, completamente local y diseñado profesionalmente.',
            missionDesc2: 'Nuestra misión es empoderar a creadores, desarrolladores y usuarios cotidianos con herramientas que funcionan directamente en el navegador. Ya sea que necesite eliminar fondos con IA, optimizar imágenes para SEO o gestionar documentos PDF complejos, nuestra suite maneja el trabajo pesado sin subir sus archivos.',
            features: {
                privacy: { title: 'Privacidad', desc: 'Sin subidas al servidor' },
                speed: { title: 'Velocidad', desc: 'Procesamiento local' },
                global: { title: 'Global', desc: 'Soporte multi-idioma' },
                free: { title: 'Gratis', desc: 'Sin tarifas ocultas' }
            },
            footerNote: {
                title: 'Herramientas profesionales para todos',
                subtitle: 'Descubra por qué miles de usuarios confían en UltraUtils para sus flujos de trabajo.',
                media: { title: 'Media Suite', desc: 'Extracción de miniaturas de YouTube y eliminación de fondos con IA. El flujo de trabajo perfecto para creadores.' },
                data: { title: 'Datos y Texto', desc: 'Conversión, formateo y limpieza de texto. Esencial para analistas de datos y desarrolladores.' },
                design: { title: 'Diseño', desc: 'Generación de códigos QR profesionales con estilos personalizados y alta resolución.' }
            },
            growthTips: {
                title: 'Consejos de expertos para el crecimiento digital',
                subtitle: 'Aprenda a utilizar cada herramienta al 200% para acelerar su tráfico.',
                tips: [
                    {
                        title: 'Estrategia de Miniaturas de YouTube',
                        desc: 'Analice las miniaturas de la competencia y pruebe cómo se ven en feeds reales antes de publicar.',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'Flujo de Trabajo de Optimización SEO',
                        desc: 'Elimine fondos y comprima inmediatamente para crear imágenes listas para Google.',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'Impulso Creativo con IA',
                        desc: 'Convierta sus ideas creativas en realidad con nuestro generador de prompts profesional.',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: 'Siguiente paso recomendado',
            suggestNext: 'Recomendamos estas herramientas para potenciar tu flujo de trabajo',
            installPwa: 'Instalar la aplicación UltraUtils',
            installPwaDesc: 'Añádela a tu pantalla de inicio para un acceso más rápido y fácil a todas las herramientas.',
            installBtn: 'Instalar ahora',
            recentTools: 'Usados recientemente'
        },
        advertise: {
            title: 'Anunciar con nosotros',
            desc: 'Muestre su producto a la comunidad global de creadores de UltraUtils.',
            slotsTitle: 'Espacios publicitarios disponibles',
            formTitle: 'Solicitar espacio publicitario',
            name: 'Nombre / Empresa',
            namePlaceholder: 'Juan Pérez / Empresa S.A.',
            email: 'Correo electrónico',
            emailPlaceholder: 'juan@example.com',
            dates: 'Duración deseada',
            datesPlaceholder: 'ej. 2026-03-01 ~ 2026-03-15',
            message: 'Detalles de la consulta',
            messagePlaceholder: 'Cuéntenos sobre su producto o comparta un enlace...',
            submit: 'Enviar consulta',
            success: '¡Consulta enviada con éxito! Nos pondremos en contacto pronto.',
            backToForm: 'Volver al formulario',
            submitError: 'Error al enviar. Por favor, inténtelo de nuevo.',
            slotTop: 'Banner Premium Superior',
            slotTopDesc: 'Banner de 728x90 - Visibilidad privilegiada en la parte superior de todas las páginas. Maximice el reconocimiento de marca.',
            slotHome: 'Banner de Inicio',
            slotHomeDesc: 'Colocación nativa en la cuadrícula de herramientas de la página de inicio. Perfecto para un alto compromiso.',
            slotSide: 'Rascacielos Lateral',
            slotSideDesc: '160x600 - Ubicación lateral fija (sticky) para una exposición prolongada de la marca.',
            slotBottom: 'Banner de Conversión Inferior',
            slotBottomDesc: 'Banner de 728x90 - Ubicación de alta intención al final de cada página de herramienta.',
            pricePremium: 'Premium',
            priceHighCTR: 'Alto CTR',
            priceConversion: 'Conversión',
            benefits: [
                'Más de 100k usuarios activos mensuales',
                'Alto compromiso de creadores de YouTube',
                'Alcance bilingüe (Global y Local)',
                'Informes de rendimiento transparentes'
            ],
            partnerMsg: 'Asociarse con UltraUtils significa conectarse con la próxima generación de constructores digitales.',
            faqTitle: 'FAQ de Publicidad',
            faqDesc: 'Preguntas frecuentes sobre publicidad en UltraUtils',
            faq: [
                { q: '¿Cómo se determina el precio?', a: 'El precio depende de la ubicación y duración del anuncio. Contáctenos para un presupuesto personalizado basado en el tráfico actual.' },
                { q: '¿Se aceptan anuncios de video?', a: 'Actualmente solo aceptamos banners de imagen y texto para mantener el rendimiento óptimo del sitio.' },
                { q: '¿Con cuánto tiempo debo reservar?', a: 'Los espacios populares se agotan rápidamente. Recomendamos consultar al menos 1-2 semanas antes de la fecha deseada.' },
                { q: '¿Qué métodos de pago aceptan?', a: 'Aceptamos transferencias bancarias y plataformas de pago globales. Los detalles se proporcionan durante la consulta.' }
            ]
        },
        footer: {
            tools: 'Herramientas',
            resources: 'Recursos',
            legal: 'Legal',
            support: 'Apoyo',
            privacy: 'Privacidad',
            terms: 'Términos',
            advertise: 'Anunciarse',
            coffee: 'Invítame a un café',
            allRights: 'Todos los derechos reservados.',
            social: 'Redes',
            about: 'Nosotros',
            contact: 'Contacto',
        },
        privacy: { title: 'Privacidad', lastUpdated: 'Última actualización: 15 Feb 2026', sections: [{ title: 'Tus Datos', content: 'No recogemos datos personales. Tus archivos se quedan en tu navegador.' }] },
        terms: { title: 'Condiciones', lastUpdated: 'Última actualización: 15 Feb 2026', sections: [{ title: 'Uso', content: 'Las herramientas se ofrecen tal cual para uso responsable.' }] },
        about: {
            title: 'Sobre UltraUtils',
            subtitle: 'Habilitando flujos de trabajo digitales más rápidos y seguros',
            sections: [
                {
                    title: 'Nuestra Misión',
                    content: 'UltraUtils tiene como objetivo proporcionar un entorno digital profesional donde creadores, desarrolladores y usuarios cotidianos puedan realizar tareas sin instalaciones o registros complejos. Nos centramos en la utilidad y la simplicidad, esforzándonos por democratizar la tecnología.'
                },
                {
                    title: '¿Por qué UltraUtils?',
                    content: 'La privacidad es nuestra máxima prioridad. A diferencia de muchas herramientas que envían archivos a los servidores, aprovechamos las tecnologías web modernas para procesar todo directamente en su navegador. No solo es más rápido, sino que sus datos nunca abandonan su dispositivo.'
                },
                {
                    title: 'Plataforma Global',
                    content: 'Soportamos múltiples idiomas para romper las barreras de comunicación y actualizamos regularmente nuestro conjunto de herramientas para maximizar la productividad de los usuarios en todo el mundo.'
                }
            ],
            stats: {
                free: '100% Gratis',
                logs: 'Logs de servidor cero',
                languages: 'Soporte multi-idioma',
                utilities: 'Herramientas expertas'
            }
        },
        contact: { title: 'Contacto', subtitle: '¿Alguna duda?', desc: 'Sugerencias, errores o negocios.', infoTitle: 'Canal', infoEmail: 'official.ultrautils@gmail.com', infoResponse: 'Respondemos en 24h laborables.' },
        notFound: { title: '¿Perdido?', desc: 'La página no existe.', backHome: 'Volver a casa' },
        feedback: { title: '¿Te ha servido?', useful: '¡Mucho! 👍', neutral: 'Ni fu ni fa 😐', improve: 'Podría mejorar 🔧', placeholder: 'Sugerencias...', submit: 'Enviar', success: '¡Gracias por tu opinión!', commitment: 'Usamos tu feedback para crecer cada día.' },
        share: { title: '¿Te gusta? ¡Comparte!', copy: 'Copiar link', copied: '¡Copiado!', twitter: 'X', facebook: 'Facebook', whatsapp: 'WhatsApp' },
        ytPlanner: {
            title: 'Planificador de Estrategia AI',
            desc: 'Mejora tus vistas con guiones, tags y títulos AI gratis.',
            placeholder: 'Escribe un tema...',
            generateBtn: 'Generar Plan AI',
            generating: 'La AI está creando tu estrategia viral...',
            tabTitles: 'Títulos',
            tabScripts: 'Guion',
            tabTags: 'Tags & SEO',
            tabStrategy: 'Tráfico',
            videoType: 'Tipo',
            vlog: 'Vlog',
            info: 'Educativo',
            review: 'Reseña',
            shorts: 'Shorts',
            topic: 'Tema principal',
            topicPlaceholder: 'ej. Mejores pizzas de Madrid...',
            advancedOptions: 'Más opciones',
            tone: 'Tono',
            toneFunny: 'Humor',
            toneSerious: 'Serio',
            toneProfessional: 'Profesional',
            targetAudience: 'Audiencia',
            targetGeneral: 'General',
            targetExpert: 'Expertos',
            targetBeginner: 'Principiantes',
            resultsTitle: 'Reporte AI',
            setupTab: 'Ajustes',
            resultsTab: 'Reporte',
            copyAll: 'Copiar todo',
            copied: '¡Copiado!',
            guide: {
                title: 'Éxito en YouTube',
                subtitle: 'Domina el algoritmo',
                sections: [
                    {
                        title: '1. Psicología de los Títulos de Alto CTR (Imanes de Clics)',
                        content: 'El 80% de tus vistas dependen del umbral del título y la miniatura. No solo enumeres hechos; usa la técnica de "brecha de información": despierta la curiosidad con frases que sugieran un secreto o una recompensa masiva. Nuestra IA analiza miles de puntos de datos virales para sugerir títulos que activan el impulso de hacer clic manteniendo la honestidad del contenido.'
                    },
                    {
                        title: '2. Estrategia SEO Holística para Alcance Global',
                        content: 'YouTube es el segundo buscador más grande del mundo. Al colocar palabras clave principales en las dos primeras líneas de la descripción y alinearlas con etiquetas estratégicas, creas una sinergia de metadatos. Esto no solo aumenta drásticamente tu exposición en las recomendaciones de YouTube, sino que también mejora tu posición en los resultados de Google, impulsando tráfico orgánico constante.'
                    },
                    {
                        title: '3. Guion Estratégico para Maximizar el Tiempo de Visualización',
                        content: 'Los primeros 15 segundos son la "zona de enganche" que gana o pierde al espectador. Cada borrador de guion que proporcionamos sigue una estructura de valor primero: Gancho (promesa inmediata) -> Propuesta de Valor (el plan) -> Contenido Principal (la solución). Este marco narrativo profesional está diseñado para mantener altas tasas de retención, el factor más crítico para el algoritmo de YouTube.'
                    },
                    {
                        title: '4. Dominio de Shorts: Retención y Giros',
                        content: 'Para YouTube Shorts, las reglas cambian. El éxito depende de estructuras "en bucle" y estímulos visuales inmediatos. Nuestra IA sugiere estrategias específicas para Shorts, como colocar un giro visual en el segundo 45 o diseñar bucles basados en la curiosidad que alienten a los espectadores a ver su video varias veces, aumentando exponencialmente su potencial viral.'
                    }
                ],
                faq: [
                    { q: '¿Puedo usar los títulos generados por la IA directamente?', a: '¡Por supuesto! Nuestros títulos están optimizados para el rendimiento. Sin embargo, agregar tu propia "voz" o contexto específico de tu canal a la mejor sugerencia dará las tasas de compromiso más altas.' },
                    { q: '¿Cuál es el número ideal de etiquetas?', a: 'Calidad sobre cantidad. Centrarse en 10-15 palabras clave altamente relevantes (como sugiere nuestra IA) es más efectivo que llenar los 500 caracteres con términos irrelevantes que confunden al algoritmo de búsqueda.' },
                    { q: '¿Puedo guardar estos planes para verlos más tarde?', a: 'Sí. Use el botón "Descargar .TXT" para guardar la estrategia completa localmente, o simplemente copie cada sección en su bloc de notas o Notion para su producción.' },
                    { q: '¿Es el uso comercial totalmente gratuito?', a: 'Sí. Todas las herramientas de UltraUtils, incluyendo el planificador, son 100% gratuitas, sin necesidad de atribución ni registro, apoyando a creadores en todas sus etapas.' }
                ]
            }
        },
        houseAds: { bgRemoverTitle: 'Quitar fondo Pro', bgRemoverDesc: 'Precisión AI al instante.', pdfMasterTitle: 'Maestro PDF', pdfMasterDesc: 'Une y divide sin líos.', imageCompTitle: 'Comprensión Pro', imageCompDesc: 'Reduce peso sin perder calidad.', ytGrabTitle: 'Miniaturas HD', ytGrabDesc: 'Descarga y edita fácil.', coffeeTitle: 'Invita a café', coffeeDesc: 'Apóyanos para seguir.', imageRestorerTitle: 'Restaurador AI', imageRestorerDesc: 'Saca nitidez al instante.' },
        imageRestorer: {
            title: 'Restaurador de Imágenes AI & Remaster',
            desc: 'Restaura fotos borrosas, antiguas y dañadas con tecnología avanzada de remasterización AI.',
            restoreBtn: 'Restaurar Ahora',
            remasterBtn: 'Remasterizando',
            processing: 'La IA está analizando y restaurando la imagen...',
            enhancement: 'Mejora de Detalles',
            resolution: 'Aumento de Resolución',
            noise: 'Eliminación de Ruido',
            face: 'Restauración de Rostros',
            color: 'Corrección de Color',
            original: 'Original',
            restored: 'Restaurada',
            upscaleX2: 'Aumento 2x',
            upscaleX4: 'Aumento 4x',
            guide: {
                title: 'Guía de Restauración de Imágenes',
                subtitle: 'Revive tus recuerdos más preciados en alta definición',
                sections: [
                    {
                        title: '1. Corregir fotos borrosas o fuera de foco',
                        content: 'Nuestra IA reconstruye imágenes borrosas prediciendo detalles a partir de patrones aprendidos. Funciona excepcionalmente bien para rasgos faciales.'
                    },
                    {
                        title: '2. Remasterización de fotos antiguas y dañadas',
                        content: 'Corrige arañazos y decoloración en fotos vintage. La restauración digital rellena los píxeles dañados y aplica una corrección de color natural.'
                    }
                ],
                faq: [
                    { q: '¿Se pueden restaurar imágenes muy pequeñas?', a: 'Sí, utilizando tecnología de Super Resolución, podemos aumentar el tamaño de imágenes pequeñas sin pixelación mientras mejoramos la claridad.' },
                    { q: '¿Son mis imágenes privadas?', a: 'Absolutamente. UltraUtils realiza todo el procesamiento de IA localmente en tu dispositivo; ninguna imagen se sube a un servidor.' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'Tips',
                        content: 'Record safely within your browser.'
                    }
                ],
                faq: [
                    {
                        q: 'Limit?',
                        a: 'No absolute limit.'
                    }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'RPM',
                        content: 'RPM is key.'
                    }
                ],
                faq: [
                    {
                        q: 'Accurate?',
                        a: 'Estimates only.'
                    }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
        }
    },
    de: {
        common: {
            settings: 'Einstellungen',
            download: 'Herunterladen',
            processing: 'Verarbeitung...',
            apply: 'Anwenden',
            cancel: 'Abbrechen',
            error: 'Fehler',
            success: 'Erfolg',
            selectImage: 'Bild wählen',
            dropHere: 'Bild hier ablegen',
            orClick: 'oder Datei wählen',
            shareResult: 'Ergebnis teilen',
            copiedLink: 'Link kopiert!',
            trySample: 'Mit Beispielbild versuchen',
            copyImage: 'Bild kopieren',
            imageCopied: 'Bild in die Zwischenablage kopiert!',
            imageCopyError: 'Kopieren des Bildes fehlgeschlagen.',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: 'Startseite',
            imageSuite: 'Bild-Suite',
            promptGen: 'Prompt-Gen',
            ytGrab: 'YT-Grabber',
            qrGen: 'QR-Generator',
            textConv: 'Text-Konv',
            bgRemover: 'KI-Entferner',
            ytPlanner: 'YT-Planer',
            pdfMaster: 'PDF-Meister',
            imageRestorer: 'AI Bild-Restaurator',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
        },
        imageMaster: {
            title: 'Bild-Optimierung',
            desc: 'Größe ohne Qualitätsverlust reduzieren. AI-Algorithmen bewahren die Schärfe.',
            quality: 'Qualität',
            size: 'Auflösung',
            width: 'Breite',
            height: 'Höhe',
            smartEnhance: 'AI Smart-Korrektur',
            smartEnhanceDesc: 'AI stellt feine Details in Echtzeit wieder her.',
            original: 'Original',
            optimized: 'Optimiert',
            saveMsg: '{percent}% Speicherplatz gespart',
            applyOptimize: 'Jetzt optimieren',
            downloadOptimized: 'Speichern',
            guide: {
                title: 'Optimierungshilfe',
                subtitle: 'Mehr Web-Performance',
                sections: [
                    {
                        title: '1. Auswirkungen auf Web-Performance und SEO',
                        content: 'Seitenladegeschwindigkeit ist ein kritischer Rankingfaktor. Da Bilder oft über 60% des Seitengewichts ausmachen, ist die Reduzierung ohne sichtbaren Qualitätsverlust der schnellste Weg zu besserem SEO.'
                    },
                    {
                        title: '2. JPEG vs PNG: Die richtige Wahl',
                        content: 'Verwenden Sie JPEG für Fotos und PNG für Grafiken mit Text oder Transparenz. Unsere KI wählt automatisch den besten Algorithmus für jeden Dateityp.'
                    },
                    {
                        title: '3. AI Smart-Korrektur',
                        content: 'Im Gegensatz zu Standard-Tools schützt unsere Smart-Korrektur feine Kanten und Texturen. Aktivieren Sie diese Funktion für professionelle Ergebnisse.'
                    }
                ],
                faq: [
                    { q: 'Gibt es Qualitätsverlust?', a: 'Bei 80-90% Qualität ist der Unterschied mit bloßem Auge nicht erkennbar.' },
                    { q: 'Sind meine Daten sicher?', a: 'Ja, alles wird lokal in Ihrem Browser verarbeitet. Nichts wird hochgeladen.' }
                ]
            }
        },
        promptGen: {
            title: 'AI Prompt-Generator',
            desc: 'Perfekte Prompts für Suno, Midjourney etc.',
            platform: 'Plattform',
            genre: 'Stil/Genre',
            subject: 'Thema',
            subjectPlaceholder: 'Worum geht es?',
            details: 'Details',
            detailsPlaceholder: 'Stil, Licht, Instrumente...',
            outputTitle: 'Generierter Prompt',
            copy: 'Kopieren',
            copied: 'Kopiert!',
            placeholder: 'Prompt erscheint hier...',
            platforms: { midjourney: 'Midjourney', suno: 'Suno', stableDiffusion: 'Stable Diffusion' },
            genres: { 'K-Pop': 'K-Pop', 'Jazz': 'Jazz', 'Rock': 'Rock' },
            guide: {
                title: 'Prompt-Master',
                subtitle: 'Qualität schreiben',
                sections: [
                    {
                        title: '1. Midjourney Pro Tipps',
                        content: 'Fügen Sie Stile (z.B. Cinematic) und Details (z.B. 8k) nach dem Hauptthema hinzu. Nutzen Sie Parameter wie --ar 16:9 für die beste Komposition.'
                    },
                    {
                        title: '2. Suno Musik-Generierung',
                        content: 'Nutzen Sie eckige Klammern [K-Pop, Jazz] für Genres. Details zu Stimmung und Instrumenten verbessern die Ergebnisse erheblich.'
                    }
                ],
                faq: [
                    { q: 'Warum ist die Struktur wichtig?', a: 'Präzision führt zu besseren Ergebnissen. Eine klare Struktur hilft der KI, Ihre Absicht genau zu verstehen.' },
                    { q: 'Auch für andere KIs nutzbar?', a: 'Ja, die Prompts funktionieren hervorragend mit DALL-E, Stable Diffusion und mehr.' }
                ]
            }
        },
        ytGrab: {
            title: 'YouTube Thumbnail Grabber',
            desc: 'Vorschaubilder in HD mit einem Klick.',
            placeholder: 'Link hier einfügen',
            getBtn: 'Holen',
            invalidUrl: 'Ungültige URL.',
            fetching: 'Laden...',
            downloadHd: 'HD Download',
            editBtn: 'Hintergrund entfernen',
            simulatorTitle: 'YT Simulator',
            simulatorSubtitle: 'Vorschau im Feed',
            simulatorDesc: 'Prüfen Sie, wie Ihr Bild auffällt.',
            safeZoneBtn: 'Sicherheitszone',
            shortsSafeZoneBtn: 'Shorts UI',
            colorPalette: 'Farbpalette',
            closeBtn: 'Schließen',
            guide: {
                title: 'Bild-Guide',
                subtitle: 'Rechte & Nutzung',
                sections: [
                    {
                        title: '1. Typische Szenarien für Thumbnail-Extraktion',
                        content: 'Profis nutzen Thumbnail-Grabber für:\n• Wettbewerbsanalyse der Design-Elemente\n• Wiederherstellung eigener verlorener Thumbnail-Quellcodas\n• Hochwertige Bilder für Blogs oder Nachrichten-Zitate\n• Attraktive Frames aus YouTube Shorts extrahieren'
                    },
                    {
                        title: '2. 4K und Full HD Auflösung',
                        content: 'Wir priorisieren `maxresdefault.jpg`. Wenn der Ersteller ein HD-Thumbnail hochgeladen hat, erhalten Sie das gestochen scharfe Originalbild.'
                    }
                ],
                faq: [
                    { q: 'Warum sehe ich kein HD?', a: 'Wenn das Video keine hohe Auflösung hat oder kein HD-Thumbnail gesetzt wurde, stellt YouTube diese Datei nicht bereit.' },
                    { q: 'Ist der Download sicher?', a: 'Ja, die Bilder kommen direkt von den offiziellen YouTube-Servern.' }
                ]
            }
        },
        qrGen: {
            title: 'QR-Generator',
            desc: 'Designen Sie QR-Codes für Business oder Social Media.',
            target: 'URL/Text',
            fgColor: 'Farbe',
            bgColor: 'Hintergrund',
            size: 'Größe',
            downloadPng: 'Hochauflösendes PNG herunterladen',
            downloadSvg: 'Vektor-SVG herunterladen',
            vectorReady: 'Vektorausgabe in hoher Auflösung wird generiert...',
            uploadLogo: 'Eigenes Logo hochladen',
            logoSize: 'Logogröße anpassen',
            removeLogo: 'Logo entfernen',
            templates: 'Business-Vorlagen',
            styles: 'QR-Stileinstellungen',
            frames: 'Rahmen & Beschriftungen',
            frameText: 'Beschriftungstext',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: 'Webseite',
                wifi: 'WLAN-Verbindung',
            },
            guide: {
                title: 'QR Guide',
                subtitle: 'Marketing-Tipps',
                sections: [
                    {
                        title: '1. Tipps für maximale Scan-Zuverlässigkeit',
                        content: 'Der Schlüssel ist Kontrast. Nutzen Sie dunkle Farben auf hellem Grund. Unsere Fehlerkorrektur sorgt für Lesbarkeit auch bei leichten Verzerrungen.'
                    },
                    {
                        title: '2. Kreative Offline-Nutzung',
                        content: '• Smarte Visitenkarten\n• Kontaktlose Menüs für Gastronomie\n• Event-Einlass\n• Ein-Klick WLAN-Zugang'
                    }
                ],
                faq: [
                    { q: 'Warum scannt mein QR nicht?', a: 'Häufig liegt es an zu geringem Kontrast, zu kleiner Druckgröße oder fehlenden Seitenabständen (Quiet Zone).' },
                    { q: 'Kommerziell nutzbar?', a: 'Ja, alle QR-Codes sind royalty-free.' }
                ]
            }
        },
        textConverter: {
            title: 'Text-Werkzeug',
            desc: 'Bereinigen und formatieren an einem Ort.',
            inputPlaceholder: 'Text einfügen...',
            statsCharacters: 'Zeichen',
            statsWords: 'Wörter',
            statsLines: 'Zeilen',
            categoryCase: 'Groß/Klein',
            categoryCleanup: 'Reinigung',
            categoryWeb: 'Web/Encoding',
            categoryData: 'Daten',
            btnUppercase: 'GROSS',
            btnLowercase: 'klein',
            btnCapitalize: 'Titel-Schrift',
            btnTrim: 'Leerzeichen trimmen',
            btnRemoveEmpty: 'Leerzeilen löschen',
            btnRemoveDupes: 'Doppelte löschen',
            btnRemoveDupesWords: 'Wort-Duplikate',
            btnUrlEncode: 'URL Encode',
            btnUrlDecode: 'URL Decode',
            btnBase64Encode: 'Base64 Encode',
            btnBase64Decode: 'Base64 Decode',
            btnJsonFormat: 'JSON-Format',
            btnSortAz: 'Sortieren A-Z',
            btnSortZa: 'Sortieren Z-A',
            btnCopy: 'Kopieren',
            btnCopied: 'Kopiert!',
            btnClear: 'Leeren',
            guide: {
                title: 'Text Guide',
                subtitle: 'Effizienz',
                sections: [
                    {
                        title: '1. Datenqualität steigern',
                        content: 'Beim Kopieren von Daten entstehen oft Duplikate oder Leerzeichen. Nutzen Sie "Duplikate entfernen" und "Trimmen" für saubere Rohdaten.'
                    },
                    {
                        title: '2. JSON Verschönern',
                        content: 'Verwandeln Sie unübersichtliches JSON in eine lesbare Struktur. Essenziell für Debugging und Code-Reviews.'
                    }
                ],
                faq: [
                    { q: 'Gibt es ein Text-Limit?', a: 'Das Tool verarbeitet tausende Zeilen flüssig, begrenzt nur durch Ihren RAM.' },
                    { q: 'Daten sicher?', a: 'Ja, alles bleibt lokal im Browser.' }
                ]
            }
        },
        bgRemover: {
            title: 'Hintergrund entfernen AI',
            desc: 'Entfernen Sie Hintergründe sofort mit AI.',
            preparing: 'Bereite AI vor...',
            processing: 'Verarbeitung...',
            modelLoading: 'KI-Motor lädt...',
            downloadReady: 'Bild speichern',
            dropMsg: 'Bild hier her',
            comparison: 'Vorher & Nachher',
            stepFetch: 'Vorbereitung...',
            stepModel: 'Lädt...',
            stepInference: 'KI arbeitet...',
            refineTitle: 'Manueller Modus',
            refineDesc: 'Pinsel nutzen für Details.',
            brushRestore: 'Wiederherstellen',
            brushErase: 'Löschen',
            smartExtract: 'Smart-Extraktion',
            smartExtractDesc: 'Zeichnen Sie um das Objekt herum, das Sie behalten möchten.',
            selectObject: 'Objekt auswählen',
            clickToExtract: 'Tippen Sie auf das Objekt, das Sie behalten möchten',
            backToSelection: 'Neu auswählen',
            brushSize: 'Pinselgröße',
            applyRefine: 'Übernehmen',
            cancelRefine: 'Abbrechen',
            stickerEffect: 'Sticker-Effekt',
            stickerColor: 'Randfarbe',
            backgroundColor: 'Hintergrundfarbe',
            bgTransparent: 'Transparent',
            bgSolid: 'Einfarbig',
            bgGradient: 'Verlauf',
            bgImage: 'Eigenes Bild',
            undo: 'Rückgängig',
            redo: 'Wiederholen',
            reset: 'Reset',
            zoom: 'Zoom',
            idPhoto: 'Passfoto Meister',
            passport: 'Reisepass',
            usVisa: 'US-Visum',
            idCard: 'Ausweis',
            bgLibrary: 'AI Bibliothek',
            uploadCustomBg: 'Hintergrund Upload',
            addText: 'Text hinzufügen',
            deleteText: 'Löschen',
            deleteImage: 'Bild löschen',
            resetPos: 'Reset Pos',
            subjectScale: 'Skalierung',
            brightness: 'Helligkeit',
            contrast: 'Kontrast',
            saturation: 'Sättigung',
            rotation: 'Drehung',
            flipH: 'Spiegeln H',
            flipV: 'Spiegeln V',
            opacity: 'Deckkraft',
            shadow: 'Schatten',
            tabTransform: 'Transformieren',
            tabEnhance: 'Verbessern',
            tabStyling: 'Styling',
            alignment: 'Ausrichtung',
            centerH: 'Horizontal zentrieren',
            centerV: 'Vertikal zentrieren',
            bringToFront: 'In den Vordergrund',
            sendToBack: 'In den Hintergrund',
            filterPresets: 'Filter',
            filterOriginal: 'Original',
            filterBW: 'S/W',
            filterSepia: 'Sepia',
            filterWarm: 'Warm',
            filterCool: 'Kalt',
            filterVintage: 'Vintage',
            textEditing: 'Texteditor',
            textPlaceholder: 'Eingabe...',
            textSize: 'Größe',
            stickerWidth: 'Randbreite',
            shortsCrop: '9:16 Shorts',
            share: 'Teilen',
            shareText: 'AI Creative Studio! ⚡',
            photoMode: 'Fotomodus',
            studio: 'Studio',
            original: 'Original',
            result: 'Ergebnis',
            compare: 'Vergleich',
            scale: 'Skala',
            bgTrsp: 'Trsp',
            bgClr: 'Farbe',
            bgGrad: 'Grad',
            bgImg: 'Bild',
            scaleLabel: 'Skalierung',
            smartClick: 'Smart Click',
            roughLasso: 'Lasso-Auswahl',
            clickPrompt: 'Klicken Sie auf das Objekt',
            lassoPrompt: 'Umkreisen Sie das Objekt',
            resetConfirmTitle: 'Alles zurücksetzen?',
            resetConfirmDesc: 'Ihr gesamter aktueller Fortschritt geht verloren.',
            aspectTitle: 'Seitenverhältnis',
            aspectSquare: '1:1 Quadrat',
            aspectSocial: '4:5 Social',
            aspectTV: '16:9 Breitbild',
            edgeTitle: 'Perfekte Kanten',
            edgeDesc: 'Fortschrittliche KI bewahrt jedes Detail.',
            precisionTitle: 'Präzisionskontrolle',
            precisionDesc: 'Manueller Pinsel für perfekte Korrekturen.',
            proBgTitle: 'Pro-Hintergründe',
            proBgDesc: 'ID-Fotos und Thumbnails mit einem Klick.',
            aiThinking: "Die KI analysiert den Hintergrund...",
            panView: 'Ansicht verschieben',
            brush: 'Pinsel',
            selection: 'Auswahl',
            fontGothic: 'Gothic',
            fontSerif: 'Serif',
            fontMono: 'Mono',
            fontHandwriting: 'Handschrift',
            fontDefault: 'Standard',
            smartTrim: 'Auto-Zuschneiden',
            smoothStream: 'Glatter Strom',
            guide: {
                title: 'HG Guide',
                subtitle: 'Auto-Cutout KI',
                sections: [
                    {
                        title: '1. Makellose Ausschnitte mit KI-Kontrastbeherrschung',
                        content: 'Der Schlüssel zu einer perfekten KI-Hintergrundentfernung sind klar definierte Grenzen. Wenn Sie bei Porträts jede Haarsträhne erhalten möchten, versuchen Sie, Bilder mit hohem Farbkontrast zwischen dem Motiv und dem Hintergrund zu verwenden. Unser Tool nutzt modernste Deep-Learning-Modelle, um selbst in komplexen Szenen professionelle Genauigkeit zu liefern. Ein höherer Kontrast erhöht die endgültige Schärfe jedoch exponentiell.'
                    },
                    {
                        title: '2. Details auf Profi-Niveau mit dem manuellen Verfeinerungsmodus',
                        content: 'Wenn es Stellen gibt, die von der KI übersehen oder zu viel gelöscht wurden, aktivieren Sie einfach oben den „Manuellen Verfeinerungsmodus“. Dank Präzisionspinsel-Technologie mit verzögerungsfreiem Canvas-Rendering können Sie bestimmte Bereiche perfekt wiederherstellen oder löschen. Dies ist besonders nützlich bei transparenten Objekten, feinen Stoffen oder Haustieren mit komplexem Fell.'
                    },
                    {
                        title: '3. Kommerzielle Standards & individuelle Sticker-Effekte',
                        content: 'Bleiben Sie nicht nur bei der Transparenz stehen. UltraUtils bietet eine automatische Standardgrößenanpassung für Ausweis- und Passfotos und ermöglicht das Hinzufügen eines „Sticker-Effekts“ (weißer Rand), um Ihre Motive hervorzuheben – perfekt für individuelles Merchandising-Design oder auffällige YouTube-Thumbnails. Passen Sie die Randdicke und -farbe an, um Ihren eigenen unverkennbaren Stil zu kreieren.'
                    },
                    {
                        title: '4. Absolute Privatsphäre durch serverlose lokale Verarbeitung',
                        content: 'Machen Sie sich Sorgen, dass Ihre Fotos auf einen Server gelangen könnten? UltraUtils führt alle Berechnungen lokal in Ihrem Browser durch. Es wird kein einziges Byte Ihrer Bilddaten auf einen Server hochgeladen, was es zur sichersten Wahl für die Bearbeitung sensibler Geschäftsdokumente oder privater Fotos macht.'
                    }
                ],
                faq: [
                    { q: 'Verringert das Entfernen des Hintergrunds die Bildqualität?', a: 'Nein. Wir behalten die ursprüngliche Auflösung Ihres Bildes bei, während wir lediglich die Hintergrundinformationen in einen transparenten Alpha-Kanal umwandeln. Wir verwenden einen hochwertigen PNG-Export, um jedes Pixel zu erhalten.' },
                    { q: 'Wo kann ich diese transparenten Bilder verwenden?', a: 'Sie eignen sich perfekt für YouTube-Thumbnail-Kompositionen, E-Commerce-Produktlisten, Instagram-Story-Sticker, professionelle Ausweisfotos und jedes Grafikdesign-Projekt.' },
                    { q: 'Kann ich mehrere Bilder gleichzeitig verarbeiten?', a: 'Derzeit konzentrieren wir uns auf die hochpräzise Verarbeitung von Einzelbildern. Eine Stapelverarbeitungsfunktion ist für ein zukünftiges Update geplant, damit Sie noch schneller arbeiten können.' },
                    { q: 'Was soll ich tun, wenn die KI das Motiv nicht erkennt?', a: 'Dies passiert meist, wenn das Motiv zu klein ist oder perfekt mit dem Hintergrund verschmilzt. Versuchen Sie es mit einem anderen Foto, auf dem das Motiv zentriert und deutlich von der Umgebung unterscheidbar ist.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Master PRO',
            desc: 'Das ultimative All-in-One PDF-Toolkit. Dateien zusammenfügen, teilen, konvertieren und schützen.',
            merge: 'Dateien verbinden',
            split: 'Seiten teilen',
            toImage: 'In Bild umwandeln',
            rotate: 'Seiten drehen',
            protect: 'Passwort festlegen',
            uploadMsg: 'PDF-Dateien hierher ziehen oder klicken',
            filesSelected: 'Dateien ausgewählt',
            mergeNow: 'Zusammengefügte PDF erstellen',
            splitNow: 'Alle Seiten teilen',
            rotateNow: '90° Drehung anwenden',
            protectNow: 'Dokument verschlüsseln',
            downloadMerged: 'Ergebnis herunterladen',
            downloadSplit: 'Alles speichern (ZIP)',
            addMore: 'Dateien hinzufügen',
            clear: 'Liste leeren',
            pageRange: 'Seitenbereich (z.B. 1-5, 10)',
            password: 'Passwort eingeben',
            options: 'Erweiterte Optionen',
            processingMsg: 'Verarbeitung mit Hochleistungs-Engine...',
            successMsg: 'Aufgabe erfolgreich abgeschlossen!',
            guide: {
                title: 'PDF Master Leitfaden',
                subtitle: 'PDF-Dokumente wie ein Profi verwalten',
                sections: [
                    {
                        title: '1. Fortschrittliche Zusammenführung',
                        content: 'Fragmentierte Dokumente zu vereinen ist essenziell. UltraUtils ermöglicht das Kombinieren mehrerer Dateien in jeder Reihenfolge.'
                    },
                    {
                        title: '2. Präzises Teilen und Extrahieren',
                        content: 'Benötigen Sie nur bestimmte Kapitel? Nutzen Sie die Teilungsfunktion, um Seiten einzeln oder nach Bereich zu trennen.'
                    },
                    {
                        title: '3. Sicherheit: Passwortschutz',
                        content: 'Schützen Sie sensible Verträge mit Passwörtern. Die Verschlüsselung erfolgt in Ihrem Browser - Ihre Daten bleiben privat.'
                    },
                    {
                        title: '4. Absolute Privatsphäre: 100% lokal',
                        content: 'Keine Datei-Uploads auf externe Server. Alles passiert direkt auf Ihrem Gerät.'
                    }
                ],
                faq: [
                    { q: 'Gibt es ein Limit für die Anzahl der Dateien?', a: 'Technisch nein, aber wir empfehlen unter 50 Dateien für optimale Performance.' },
                    { q: 'Kann ich nur bestimmte Seiten extrahieren?', a: 'Ja! Geben Sie im Tab "Teilen" einen Bereich wie "1-5, 10" ein.' },
                    { q: 'Wie sicher ist die Verschlüsselung?', a: 'Wir nutzen 128-Bit AES Standard. Da es lokal passiert, sieht niemand Ihr Passwort.' },
                    { q: 'Wo werden meine Dateien gespeichert?', a: 'Dateien werden direkt im Standard-Download-Ordner Ihres Browsers gespeichert.' }
                ]
            }
        },
        home: {
            badge: 'Kostenlos & Sicher',
            titlePrefix: 'Digitale Power für',
            titleSuffix: 'Moderne Creator',
            desc: 'Sammlung leistungsstarker Tools.',
            descLine2: 'Keine Anmeldung, keine versteckten Kosten.',
            launchTool: 'Tool starten',
            missionTitle: 'Datenschutzorientierte Hochleistungs-Digitaltools',
            missionDesc1: 'Willkommen bei UltraUtils, Ihrem Premium-Ziel für datenschutzsichere, leistungsstarke digitale Werkzeuge. In einer Zeit, in der Online-Tools oft Benutzerdaten gefährden oder komplexe Paywalls errichten, verfolgen wir einen anderen Ansatz: 100 % kostenlos, vollständig lokal und professionell gestaltet.',
            missionDesc2: 'Unsere Mission ist es, Creator, Entwickler und alltägliche Nutzer mit Tools auszustatten, die direkt in ihrem Browser laufen. Egal, ob Sie Hintergründe mit KI entfernen, Bilder für SEO optimieren oder komplexe PDF-Dokumente verwalten müssen – unsere Suite erledigt die Schwerstarbeit, ohne Ihre sensiblen Dateien jemals auf einen Server hochzuladen.',
            features: {
                privacy: { title: 'Privatsphäre', desc: 'Kein Server-Upload' },
                speed: { title: 'Geschwindigkeit', desc: 'Lokale Verarbeitung' },
                global: { title: 'Global', desc: 'Mehrsprachig' },
                free: { title: 'Kostenlos', desc: 'Keine Gebühren' }
            },
            footerNote: {
                title: 'Profi-Tools für alle',
                subtitle: 'Erfahren Sie, warum Tausende von Nutzern UltraUtils für ihren täglichen digitalen Workflow vertrauen.',
                media: { title: 'Media-Suite', desc: 'Hochwertiges YouTube-Thumbnail-Grabbing und KI-Hintergrundentfernung. Partner für Creator-Workflows.' },
                data: { title: 'Daten & Text', desc: 'Erweiterte Textkonvertierung, Formatierung und Reinigung. Essenziell für Analysten und Entwickler.' },
                design: { title: 'Design-Assets', desc: 'Professionelle QR-Code-Generierung mit benutzerdefinierten Stilen und hochauflösender Ausgabe.' }
            },
            growthTips: {
                title: 'Experten-Tipps für digitales Wachstum',
                subtitle: 'Erfahren Sie, wie Sie jedes Tool zu 200 % nutzen können, um Ihren Traffic zu beschleunigen.',
                tips: [
                    {
                        title: 'YouTube-Thumbnail-Strategie',
                        desc: 'Analysieren Sie die Thumbnails der Konkurrenz und testen Sie vor der Veröffentlichung, wie sie in echten Feeds aussehen.',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'SEO-Optimierungs-Workflow',
                        desc: 'Hintergründe entfernen und sofort komprimieren, um Google-bereite Bilder zu erstellen.',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'KI-Kreativitäts-Boost',
                        desc: 'Verwandeln Sie Ihre kreativen Ideen mit unserem professionellen Prompt-Generator in die Realität.',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: 'Empfohlener nächster Schritt',
            suggestNext: 'Wir empfehlen diese Tools, um Ihren Workflow zu verbessern',
            installPwa: 'UltraUtils App installieren',
            installPwaDesc: 'Fügen Sie sie Ihrem Home-Bildschirm hinzu, um schneller und einfacher auf alle Tools zuzugreifen.',
            installBtn: 'Jetzt installieren',
            recentTools: 'Zuletzt verwendet'
        },
        advertise: {
            title: 'Hier werben',
            desc: 'Präsentieren Sie Ihr Produkt der globalen Creator-Community von UltraUtils.',
            slotsTitle: 'Verfügbare Werbeplätze',
            formTitle: 'Werbeanfrage senden',
            name: 'Name / Firma',
            namePlaceholder: 'Max Mustermann / Beispiel GmbH',
            email: 'E-Mail-Adresse',
            emailPlaceholder: 'max@beispiel.de',
            dates: 'Gewünschte Dauer',
            datesPlaceholder: 'z.B. 2026-03-01 ~ 2026-03-15',
            message: 'Details der Anfrage',
            messagePlaceholder: 'Erzählen Sie uns von Ihrem Produkt oder teilen Sie einen Link...',
            submit: 'Anfrage senden',
            success: 'Anfrage erfolgreich gesendet! Wir melden uns bald.',
            backToForm: 'Zurück zum Formular',
            submitError: 'Senden fehlgeschlagen. Bitte versuchen Sie es erneut.',
            slotTop: 'Premium-Banner Oben',
            slotTopDesc: '728x90 Banner - Beste Sichtbarkeit ganz oben auf allen Seiten. Maximale Markenbekanntheit.',
            slotHome: 'Home-Feed Banner',
            slotHomeDesc: 'Natives Placement im Startseiten-Grid. Perfekt für hohes Engagement.',
            slotSide: 'Seitenleisten Skyscraper',
            slotSideDesc: '160x600 - Fixierte Seitenleisten-Platzierung (sticky) für dauerhafte Markenpräsenz.',
            slotBottom: 'Konversions-Banner Unten',
            slotBottomDesc: '728x90 Banner - Platzierung am Ende der Tool-Seiten für hohe Kaufabsicht.',
            pricePremium: 'Premium',
            priceHighCTR: 'Hohe CTR',
            priceConversion: 'Konversion',
            benefits: [
                'Über 100.000 aktive Nutzer monatlich',
                'Hohes Engagement von YouTube-Creatoren',
                'Bilinguale Reichweite (Global & Lokal)',
                'Transparente Leistungsberichte'
            ],
            partnerMsg: 'Eine Partnerschaft mit UltraUtils bedeutet, eine Verbindung zur nächsten Generation digitaler Builder aufzubauen.',
            faqTitle: 'Werbe-FAQ',
            faqDesc: 'Häufig gestellte Fragen zur Werbung auf UltraUtils',
            faq: [
                { q: 'Wie wird die Preisgestaltung bestimmt?', a: 'Die Preise basieren auf Platzierung und Dauer. Kontaktieren Sie uns für ein individuelles Angebot basierend auf dem aktuellen Traffic.' },
                { q: 'Wird Videowerbung unterstützt?', a: 'Aktuell unterstützen wir nur Bild- und Textbanner, um die optimale Performance der Website zu gewährleisten.' },
                { q: 'Wie weit im Voraus sollte ich buchen?', a: 'Beliebte Plätze sind schnell vergeben. Wir empfehlen 1-2 Wochen Vorlaufzeit vor Ihrem Wunschtermin.' },
                { q: 'Welche Zahlungsmethoden werden akzeptiert?', a: 'Wir akzeptieren Banküberweisungen und gängige globale Zahlungsplattformen. Details erhalten Sie bei der Beratung.' }
            ]
        },
        footer: {
            tools: 'Tools',
            resources: 'Ressourcen',
            legal: 'Rechtliches',
            support: 'Spenden',
            privacy: 'Datenschutz',
            terms: 'AGB',
            advertise: 'Werbung',
            coffee: 'Kaffee spendieren',
            allRights: 'Alle Rechte vorbehalten.',
            social: 'Social',
            about: 'Über uns',
            contact: 'Kontakt',
        },
        privacy: { title: 'Datenschutz', lastUpdated: '15. Feb 2026', sections: [{ title: 'Daten', content: 'Wir speichern keine persönlichen Daten. Alles lokal.' }] },
        terms: { title: 'AGB', lastUpdated: '15. Feb 2026', sections: [{ title: 'Nutzung', content: 'Tools werden "as is" zur Verfügung gestellt.' }] },
        about: {
            title: 'Über UltraUtils',
            subtitle: 'Ermöglicht schnellere und sicherere digitale Workflows',
            sections: [
                {
                    title: 'Unsere Mission',
                    content: 'UltraUtils zielt darauf ab, eine professionelle digitale Umgebung bereitzustellen, in der Creator, Entwickler und alltägliche Nutzer Aufgaben ohne komplexe Installationen oder Registrierungen ausführen können. Wir konzentrieren uns auf Nutzen und Einfachheit und streben danach, Technologie zu demokratisieren.'
                },
                {
                    title: 'Warum UltraUtils?',
                    content: 'Datenschutz ist unsere oberste Priorität. Im Gegensatz zu vielen Tools, die Dateien an Server senden, nutzen wir moderne Webtechnologien, um alles direkt in Ihrem Browser zu verarbeiten. Es ist nicht nur schneller, sondern Ihre Daten verlassen nie Ihr Gerät.'
                },
                {
                    title: 'Globale Plattform',
                    content: 'Wir unterstützen mehrere Sprachen, um Kommunikationsbarrieren abzubauen, und aktualisieren regelmäßig unser Toolkit, um die Produktivität der Nutzer weltweit zu maximieren.'
                }
            ],
            stats: {
                free: '100 % Kostenlos',
                logs: 'Keine Server-Logs',
                languages: 'Mehrsprachig',
                utilities: 'Experten-Tools'
            }
        },
        contact: { title: 'Kontakt', subtitle: 'Noch Fragen?', desc: 'Feedback, Bugs oder Business.', infoTitle: 'Support', infoEmail: 'official.ultrautils@gmail.com', infoResponse: 'Antwort binnen 24h.' },
        notFound: { title: 'Verlaufen?', desc: 'Seite nicht gefunden.', backHome: 'Zum Start' },
        feedback: { title: 'Hat es geholfen?', useful: 'Sehr! 👍', neutral: 'Ging so 😐', improve: 'Ausbaufähig 🔧', placeholder: 'Ihr Feedback...', submit: 'Senden', success: 'Vielen Dank!', commitment: 'Wir wachsen durch Ihr Feedback.' },
        share: { title: 'Gefällt es? Sagen Sie es weiter!', copy: 'Link kopieren', copied: 'Kopiert!', twitter: 'X', facebook: 'Facebook', whatsapp: 'WhatsApp' },
        ytPlanner: {
            title: 'KI-Strategie-Meister',
            desc: 'Viren-Strategie mit Skripten und Tags.',
            placeholder: 'Thema...',
            generateBtn: 'Strategie generieren',
            generating: 'KI plant gerade...',
            tabTitles: 'Titel',
            tabScripts: 'Skript',
            tabTags: 'Tags & SEO',
            tabStrategy: 'Traffic',
            videoType: 'Typ',
            vlog: 'Vlog',
            info: 'Bildung',
            review: 'Review',
            shorts: 'Shorts',
            topic: 'Hauptthema',
            topicPlaceholder: 'z.B. Beste Pizza in Berlin...',
            advancedOptions: 'Optionen',
            tone: 'Tonfall',
            toneFunny: 'Lustig',
            toneSerious: 'Ernst',
            toneProfessional: 'Profi',
            targetAudience: 'Zielgruppe',
            targetGeneral: 'Allgemein',
            targetExpert: 'Experten',
            targetBeginner: 'Anfänger',
            resultsTitle: 'KI-Report',
            setupTab: 'Setup',
            resultsTab: 'Bericht',
            copyAll: 'Alles kopieren',
            copied: 'Kopiert!',
            guide: {
                title: 'Erfolg auf YT',
                subtitle: 'Algorithmus meistern',
                sections: [
                    {
                        title: '1. Psychologie von High-CTR-Titeln (Klick-Magnete)',
                        content: '80 % Ihrer Aufrufe hängen von der Schwelle zwischen Titel und Thumbnail ab. Listen Sie nicht nur Fakten auf, sondern nutzen Sie die „Information Gap“-Technik – wecken Sie Neugier mit Phrasen, die ein Geheimnis oder eine massive Belohnung andeuten. Unsere KI analysiert tausende virale Datenpunkte, um Titel vorzuschlagen, die den Klickimpuls auslösen und gleichzeitig die Integrität des Inhalts wahren.'
                    },
                    {
                        title: '2. Ganzheitliche SEO-Strategie für globale Reichweite',
                        content: 'YouTube ist die zweitgrößte Suchmaschine der Welt. Indem Sie Kernschlüsselwörter in die ersten zwei Zeilen der Beschreibung setzen und sie mit strategischen Tags abgleichen, schaffen Sie Metadaten-Synergien. Dies erhöht nicht nur Ihre Präsenz in den YouTube-Empfehlungen drastisch, sondern verbessert auch Ihr Ranking in den Google-Suchergebnissen und fördert organischen Evergreen-Traffic.'
                    },
                    {
                        title: '3. Strategisches Scripting zur Maximierung der Watchtime',
                        content: 'Die ersten 15 Sekunden sind die „Hook-Zone“, in der Sie Zuschauer gewinnen oder verlieren. Jeder von uns bereitgestellte Skriptentwurf folgt einer Value-First-Struktur: Hook (sofortiges Versprechen) -> Value Proposition (der Plan) -> Kerninhalt (die Lösung). Dieser professionelle Storytelling-Rahmen ist darauf ausgelegt, hohe Bindungsraten (Retention) aufrechtzuerhalten, den kritischsten Faktor für den YouTube-Algorithmus.'
                    },
                    {
                        title: '4. Shorts-Meisterschaft: Bindung & Twists',
                        content: 'Bei YouTube Shorts gelten andere Regeln. Erfolg hängt von „loopbaren“ Strukturen und sofortigen visuellen Reizen ab. Unsere KI schlägt spezifische Strategien für Shorts vor, wie z. B. einen visuellen Twist bei Sekunde 45 oder das Design von Neugier-basierten Loops, die Zuschauer dazu ermutigen, Ihr Video mehrmals anzusehen, was das virale Potenzial exponentiell steigert.'
                    }
                ],
                faq: [
                    { q: 'Kann ich die KI-generierten Titel direkt verwenden?', a: 'Natürlich! Unsere Titel sind auf Leistung optimiert. Wenn Sie jedoch Ihren eigenen „Stil“ oder kanalspezifischen Kontext in den besten Vorschlag einfließen lassen, erzielen Sie die höchsten Engagement-Raten.' },
                    { q: 'Was ist die ideale Anzahl an Tags?', a: 'Qualität vor Quantität. Die Konzentration auf 10–15 hochrelevante Keywords (wie von unserer KI vorgeschlagen) ist effektiver, als die 500 Zeichen mit irrelevanten Begriffen zu füllen, die den Suchalgorithmus verwirren.' },
                    { q: 'Kann ich diese Pläne speichern, um sie später anzusehen?', a: 'Ja. Verwenden Sie die Schaltfläche „.TXT herunterladen“, um die vollständige Strategie lokal zu speichern, oder kopieren Sie die einzelnen Abschnitte einfach in Ihr Notizbuch oder Notion für die Produktion.' },
                    { q: 'Ist die kommerzielle Nutzung völlig kostenlos?', a: 'Ja. Alle Tools auf UltraUtils, einschließlich des Planers, sind zu 100 % kostenlos, ohne Namensnennung oder Registrierung, und unterstützen Creator in jeder Phase.' }
                ]
            }
        },
        houseAds: { bgRemoverTitle: 'HG Entferner Pro', bgRemoverDesc: 'KI-Präzision sofort.', pdfMasterTitle: 'PDF Meister', pdfMasterDesc: 'Trennen & Zusammenfügen.', imageCompTitle: 'Kompression Pro', imageCompDesc: 'Leichtgewicht ohne Verlust.', ytGrabTitle: 'Thumbnail HD', ytGrabDesc: 'Einfach runterladen & editieren.', coffeeTitle: 'Kaffee spendieren', coffeeDesc: 'Unterstützen Sie uns.', imageRestorerTitle: 'AI Bild-Restaurator', imageRestorerDesc: 'Fixiere unscharfe Bilder.' },
        imageRestorer: {
            title: 'AI Bild-Restaurator & Remaster',
            desc: 'Stelle verschwommene, alte und beschädigte Fotos mit fortschrittlicher AI-Remastering-Technologie wieder her.',
            restoreBtn: 'Jetzt Wiederherstellen',
            remasterBtn: 'Remastering',
            processing: 'Die KI analysiert und restauriert das Bild...',
            enhancement: 'Detailverbesserung',
            resolution: 'Upscaling',
            noise: 'Rauschunterdrückung',
            face: 'Gesichtswiederherstellung',
            color: 'Farbkorrektur',
            original: 'Original',
            restored: 'Wiederhergestellt',
            upscaleX2: '2x Vergrößerung',
            upscaleX4: '4x Vergrößerung',
            guide: {
                title: 'Leitfaden zur Bildrestaurierung',
                subtitle: 'Erwecke deine kostbaren Erinnerungen in High Definition zu neuem Leben',
                sections: [
                    {
                        title: '1. Verschwommene Fotos fixieren',
                        content: 'Unsere KI rekonstruiert verschwommene Bilder, indem sie Details aus gelernten Mustern vorhersagt. Dies funktioniert besonders gut bei Gesichtszügen.'
                    },
                    {
                        title: '2. Remastering alter und beschädigter Fotos',
                        content: 'Korrigiere Kratzer und Verblassen auf Vintage-Fotos. Die digitale Restaurierung füllt beschädigte Pixel auf und wendet eine natürliche Farbkorrektur an.'
                    }
                ],
                faq: [
                    { q: 'Können sehr kleine Bilder wiederhergestellt werden?', a: 'Ja, mit Super-Resolution-Technologie können wir kleine Bilder vergrößern, ohne dass sie pixelig werden, und gleichzeitig die Klarheit verbessern.' },
                    { q: 'Sind meine Bilddaten privat?', a: 'Absolut. UltraUtils führt alle KI-Verarbeitungen lokal auf deinem Gerät durch; Bilder werden niemals auf einen Server hochgeladen.' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'Tips',
                        content: 'Record safely within your browser.'
                    }
                ],
                faq: [
                    {
                        q: 'Limit?',
                        a: 'No absolute limit.'
                    }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'RPM',
                        content: 'RPM is key.'
                    }
                ],
                faq: [
                    {
                        q: 'Accurate?',
                        a: 'Estimates only.'
                    }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
        }
    },
    pl: {
        common: {
            settings: 'Ustawienia',
            download: 'Pobierz',
            processing: 'Przetwarzanie...',
            apply: 'Zastosuj',
            cancel: 'Anuluj',
            error: 'Błąd',
            success: 'Sukces',
            selectImage: 'Wybierz obraz',
            dropHere: 'Upuść obraz tutaj',
            orClick: 'lub kliknij, aby wybrać',
            shareResult: 'Udostępnij',
            copiedLink: 'Skopiowano link!',
            trySample: 'Wypróbuj obraz przykładowy',
            copyImage: 'Kopiuj obraz',
            imageCopied: 'Obraz skopiowany do schowka!',
            imageCopyError: 'Nie udało się skopiować obrazu.',
            total: 'Total',
        },
        navbar: {
            title: 'UltraUtils',
            home: 'Strona główna',
            imageSuite: 'Zestaw obrazów',
            promptGen: 'Generator promptów',
            ytGrab: 'Pobieracz YT',
            qrGen: 'Generator QR',
            textConv: 'Konwerter tekstu',
            bgRemover: 'Usuwanie tła AI',
            ytPlanner: 'Planer YouTube',
            pdfMaster: 'Mistrz PDF',
            imageRestorer: 'AI Przywracanie',
            screenRecorder: 'Screen Recorder',
            revenueCalc: 'Revenue Calc',
            allTools: 'All Tools',
            megaMenu: 'Mega Menu',
        },
        imageMaster: {
            title: 'Kompresja i Optymalizacja',
            desc: 'Zmniejsz rozmiar bez utraty jakości. Algorytmy AI dbają o ostrość.',
            quality: 'Jakość kompresji',
            size: 'Zmień rozdzielczość',
            width: 'Szerokość (px)',
            height: 'Wysokość (px)',
            smartEnhance: 'Inteligentne AI',
            smartEnhanceDesc: 'AI przywraca detale tracone podczas kompresji w czasie rzeczywistym.',
            original: 'Oryginał',
            optimized: 'Zoptymalizowany',
            saveMsg: 'Zaoszczędzono {percent}% miejsca',
            applyOptimize: 'Optymalizuj teraz',
            downloadOptimized: 'Zapisz obraz',
            guide: {
                title: 'Przewodnik Optymalizacji',
                subtitle: 'Szybszy internet',
                sections: [
                    {
                        title: '1. Wpływ optymalizacji na SEO i szybkość witryny',
                        content: 'Czas ładowania strony to kluczowy czynnik rankingowy Google. Ponad połowa wagi przeciętnej strony to obrazy. Dzięki Image Master możesz zmniejszyć rozmiar plików o 80-90% bez widocznej utraty jakości.'
                    },
                    {
                        title: '2. Inteligentne ulepszanie AI',
                        content: 'W przeciwieństwie do zwykłych narzędzi, nasza funkcja AI Smart Enhance chroni krawędzie i tekstury podczas kompresji. Aktywuj ją dla profesjonalnych rezultatów.'
                    }
                ],
                faq: [
                    { q: 'Ile jakości tracę?', a: 'Przy ustawieniu 80-90% różnica jest praktycznie niezauważalna dla ludzkiego oka.' },
                    { q: 'Czy moje zdjęcia są bezpieczne?', a: 'Tak. Całe przetwarzanie odbywa się lokalnie w Twojej przeglądarce.' }
                ]
            }
        },
        promptGen: {
            title: 'Generator Promptów AI',
            desc: 'Twórz idealne polecenia dla Suno, Midjourney i innych.',
            platform: 'Platforma',
            genre: 'Gatunek / Styl',
            subject: 'Temat',
            subjectPlaceholder: 'O czym to ma być?',
            details: 'Szczegóły',
            detailsPlaceholder: 'Styl, światło, instrumenty...',
            outputTitle: 'Wygenerowany Prompt',
            copy: 'Kopiuj',
            copied: 'Skopiowano!',
            placeholder: 'Prompt pojawi się tutaj...',
            platforms: { midjourney: 'Midjourney', suno: 'Suno', stableDiffusion: 'Stable Diffusion' },
            genres: { 'K-Pop': 'K-Pop', 'Jazz': 'Jazz', 'Rock': 'Rock' },
            guide: {
                title: 'Mistrz Promptów',
                subtitle: 'Jak pisać dobre polecenia',
                sections: [
                    {
                        title: '1. Wskazówki Midjourney Pro',
                        content: 'Dodawaj style (np. Cinematic) i szczegóły (np. 8k, highly detailed) po temacie głównym. Używaj parametrów takich jak --ar 16:9.'
                    },
                    {
                        title: '2. Generowanie muzyki Suno',
                        content: 'Używaj nawiasów kwadratowych [K-Pop, Jazz] dla gatunków. Opisanie nastroju i instrumentów pomaga stworzyć lepsze utwory.'
                    }
                ],
                faq: [
                    { q: 'Dlaczego struktura jest ważna?', a: 'Jakość AI zależy od precyzji. Jasna struktura pomaga AI zrozumieć Twoją intencję.' },
                    { q: 'Działa z innymi AI?', a: 'Tak, prompty generowane tutaj świetnie współpracują z DALL-E i Stable Diffusion.' }
                ]
            }
        },
        ytGrab: {
            title: 'Pobieranie Miniaturek YT',
            desc: 'Pobierz miniaturkę YouTube w HD jednym kliknięciem.',
            placeholder: 'Wklej URL YouTube...',
            getBtn: 'Pobierz',
            invalidUrl: 'Nieprawidłowy adres URL.',
            fetching: 'Pobieranie...',
            downloadHd: 'Pobierz w HD',
            editBtn: 'Usuń Tło AI',
            simulatorTitle: 'Symulator YouTube',
            simulatorSubtitle: 'Zobacz jak wygląda w feedzie',
            simulatorDesc: 'Sprawdź, czy Twoja miniatura wyróżnia się na tle konkurencji.',
            safeZoneBtn: 'Strefa bezpieczeństwa',
            shortsSafeZoneBtn: 'UI Shorts',
            colorPalette: 'Paleta kolorów',
            closeBtn: 'Zamknij',
            guide: {
                title: 'Poradnik Miniaturek',
                subtitle: 'Prawa i zasady',
                sections: [
                    {
                        title: '1. Scenariusze użycia Extractora',
                        content: 'Profesjonaliści używają narzędzia do:\n• Analizy designu konkurencji\n• Odzyskiwania własnych miniaturek\n• Tworzenia wysokiej jakości grafik do blogów\n• Wyciągania klatek z YouTube Shorts'
                    },
                    {
                        title: '2. Gwarancja HD i 4K',
                        content: 'Nasz system priorytetyzuje `maxresdefault.jpg`. Jeśli twórca wgrał miniaturę HD, pobierzesz ją w pełnej jakości.'
                    }
                ],
                faq: [
                    { q: 'Dlaczego nie widzę HD?', a: 'Jeśli wideo jest stare lub ma niską jakość, YouTube nie udostępnia pliku HD.' },
                    { q: 'Czy pobieranie jest bezpieczne?', a: 'Tak, pliki pochodzą bezpośrednio z oficjalnych serwerów YouTube.' }
                ]
            }
        },
        qrGen: {
            title: 'Generator QR',
            desc: 'Projektuj kody QR dla firmy lub mediów społecznościowych.',
            target: 'URL lub Tekst',
            fgColor: 'Kolor kodu',
            bgColor: 'Kolor tła',
            size: 'Rozdzielczość',
            downloadPng: 'Pobierz PNG wysokiej jakości',
            downloadSvg: 'Pobierz wektorowe SVG',
            vectorReady: 'Przygotowywanie wysokiej jakości wyjścia wektorowego...',
            uploadLogo: 'Prześlij własne logo',
            logoSize: 'Dostosuj rozmiar logo',
            removeLogo: 'Usuń logo',
            templates: 'Szablony biznesowe',
            styles: 'Ustawienia stylu QR',
            frames: 'Ramki i etykiety',
            frameText: 'Tekst etykiety',
            presets: {
                instagram: 'Instagram',
                youtube: 'YouTube',
                link: 'Strona internetowa',
                wifi: 'Połączenie Wi-Fi',
            },
            guide: {
                title: 'Przewodnik QR',
                subtitle: 'Marketing z QR',
                sections: [
                    {
                        title: '1. Niezawodność skanowania',
                        content: 'Kluczem jest kontrast. Używaj ciemnych kolorów na jasnym tle. Nasz system używa standardowej korekcji błędów.'
                    },
                    {
                        title: '2. Zastosowania Offline',
                        content: '• Inteligentne wizytówki\n• Menu w restauracjach\n• Bilety na wydarzenia\n• Szybkie łączenie z Wi-Fi'
                    }
                ],
                faq: [
                    { q: 'QR się nie skanuje?', a: 'Najczęstsze powody to zbyt niski kontrast, za mały rozmiar wydruku lub brak marginesu (Quiet Zone).' },
                    { q: 'Użytek komercyjny?', a: 'Tak, kody są w 100% darmowe do użytku komercyjnego.' }
                ]
            }
        },
        textConverter: {
            title: 'Konwerter Tekstu',
            desc: 'Porządkuj i formatuj tekst w jednym miejscu.',
            inputPlaceholder: 'Wklej tekst tutaj...',
            statsCharacters: 'Znaki',
            statsWords: 'Słowa',
            statsLines: 'Linie',
            categoryCase: 'Wielkość liter',
            categoryCleanup: 'Czyszczenie',
            categoryWeb: 'Web / Kodowanie',
            categoryData: 'Dane',
            btnUppercase: 'WIELKIE LITERY',
            btnLowercase: 'małe litery',
            btnCapitalize: 'Jak Tytuł',
            btnTrim: 'Usuń spacje',
            btnRemoveEmpty: 'Usuń puste linie',
            btnRemoveDupes: 'Usuń duplikaty',
            btnRemoveDupesWords: 'Zduplikowane słowa',
            btnUrlEncode: 'Kodowanie URL',
            btnUrlDecode: 'Dekodowanie URL',
            btnBase64Encode: 'Base64 Encode',
            btnBase64Decode: 'Base64 Decode',
            btnJsonFormat: 'Formatuj JSON',
            btnSortAz: 'Sortuj A-Z',
            btnSortZa: 'Sortuj Z-A',
            btnCopy: 'Kopiuj wynik',
            btnCopied: 'Skopiowano!',
            btnClear: 'Wyczyść',
            guide: {
                title: 'Przewodnik Tekstu',
                subtitle: 'Efektywna edycja',
                sections: [
                    {
                        title: '1. Poprawa jakości danych',
                        content: 'Usuwaj duplikaty i niepotrzebne spacje jednym kliknięciem. Idealne do czyszczenia danych z arkuszy kalkulacyjnych.'
                    },
                    {
                        title: '2. Narzędzia klanu Developerów',
                        content: 'Szybkie kodowanie URL i Base64 bezpośrednio w przeglądarce. Bezpiecznie i bez serwerów.'
                    },
                    {
                        title: '3. Formatowanie JSON',
                        content: 'Zamień nieczytelny kod JSON w przejrzystą strukturę.'
                    }
                ],
                faq: [
                    { q: 'Czy jest limit tekstu?', a: 'Przetwarzamy tysiące linii płynnie, zależnie tylko od Twojej pamięci RAM.' },
                    { q: 'Dane są bezpieczne?', a: 'Tak, wszystko dzieje się lokalnie.' }
                ]
            }
        },
        bgRemover: {
            title: 'Usuwanie Tła AI',
            desc: 'Usuń tło ze zdjęcia natychmiast dzięki AI.',
            preparing: 'Przygotowanie AI...',
            processing: 'Usuwanie tła...',
            modelLoading: 'Ładowanie silnika AI...',
            downloadReady: 'Pobierz przezroczysty obraz',
            dropMsg: 'Upuść zdjęcie tutaj',
            comparison: 'Przed i Po',
            stepFetch: 'Przygotowanie obrazu...',
            stepModel: 'Ładowanie modelu...',
            stepInference: 'AI pracuje...',
            refineTitle: 'Tryb Ręcznej Korekty',
            refineDesc: 'Użyj pędzla, aby przywrócić lub usunąć fragmenty.',
            brushRestore: 'Przywróć',
            brushErase: 'Gumka',
            smartExtract: 'Inteligentne Wycinanie',
            smartExtractDesc: 'Narysuj wokół obiektu, który chcesz zachować.',
            selectObject: 'Wybierz obiekt',
            clickToExtract: 'Dotknij obiektu, który chcesz zachować',
            backToSelection: 'Wybierz ponownie',
            brushSize: 'Rozmiar pędzla',
            applyRefine: 'Zastosuj',
            cancelRefine: 'Anuluj',
            stickerEffect: 'Efekt Naklejki',
            stickerColor: 'Kolor obramowania',
            backgroundColor: 'Kolor tła',
            bgTransparent: 'Przezroczyste',
            bgSolid: 'Kolor',
            bgGradient: 'Gradient',
            bgImage: 'Własne tło',
            undo: 'Cofnij',
            redo: 'Ponów',
            reset: 'Reset',
            zoom: 'Zoom',
            idPhoto: 'Mistrz Zdjęć ID',
            passport: 'Paszport',
            usVisa: 'Wiza USA',
            idCard: 'Dowód osobisty',
            bgLibrary: 'Biblioteka AI',
            uploadCustomBg: 'Wgraj tło',
            addText: 'Dodaj tekst',
            deleteText: 'Usuń',
            deleteImage: 'Usuń obraz',
            resetPos: 'Reset poz',
            subjectScale: 'Skala',
            brightness: 'Jasność',
            contrast: 'Kontrast',
            saturation: 'Nasycenie',
            rotation: 'Obrót',
            flipH: 'Odbicie H',
            flipV: 'Odbicie V',
            opacity: 'Przezroczystość',
            shadow: 'Cień',
            tabTransform: 'Transformacja',
            tabEnhance: 'Ulepszenie',
            tabStyling: 'Styliazacja',
            alignment: 'Wyrównanie',
            centerH: 'Środek H',
            centerV: 'Środek V',
            bringToFront: 'Na wierzch',
            sendToBack: 'Na spód',
            filterPresets: 'Filtry',
            filterOriginal: 'Oryginał',
            filterBW: 'Czarno-białe',
            filterSepia: 'Sepia',
            filterWarm: 'Ciepłe',
            filterCool: 'Zimne',
            filterVintage: 'Vintage',
            textEditing: 'Edytor Tekstu',
            textPlaceholder: 'Wpisz tekst...',
            textSize: 'Rozmiar',
            stickerWidth: 'Grubość ramki',
            shortsCrop: '9:16 Shorts',
            share: 'Udostępnij',
            shareText: 'AI Creative Studio! ⚡',
            photoMode: 'Tryb Zdjęcia',
            studio: 'Studio',
            original: 'Oryginał',
            result: 'Wynik',
            compare: 'Porównaj',
            scale: 'Skala',
            bgTrsp: 'Przezr',
            bgClr: 'Kolor',
            bgGrad: 'Grad',
            bgImg: 'Obraz',
            scaleLabel: 'Dostosuj skalę',
            smartClick: 'Inteligentne Kliknięcie',
            roughLasso: 'Szybkie Lasso',
            clickPrompt: 'Kliknij obiekt',
            lassoPrompt: 'Obrysuj obiekt',
            resetConfirmTitle: 'Zresetować wszystko?',
            resetConfirmDesc: 'Cały Twój obecny postęp zostanie utracony.',
            aspectTitle: 'Proporcje Obrazu',
            aspectSquare: '1:1 Kwadrat',
            aspectSocial: '4:5 Social',
            aspectTV: '16:9 Wide',
            edgeTitle: 'Idealne Krawędzie',
            edgeDesc: 'Zaawansowana AI zachowuje każdy szczegół.',
            precisionTitle: 'Precyzyjna Kontrola',
            precisionDesc: 'Ręczny pędzel do idealnych poprawek.',
            proBgTitle: 'Profesjonalne Tła',
            proBgDesc: 'Zdjęcia ID i miniatury jednym kliknięciem.',
            aiThinking: "AI analizuje tło...",
            panView: 'Przesuń widok',
            brush: 'Pędzel',
            selection: 'Wybór',
            fontGothic: 'Gothic',
            fontSerif: 'Szeryf',
            fontMono: 'Mono',
            fontHandwriting: 'Pismo ręczne',
            fontDefault: 'Domyślny',
            smartTrim: 'Inteligentne przycinanie',
            smoothStream: 'Gładki strumień',
            guide: {
                title: 'Przewodnik Tła',
                subtitle: 'Automatyczne wycinanie AI',
                sections: [
                    {
                        title: '1. Bezproblemowe wycinanie dzięki mistrzowskiemu kontrastowi AI',
                        content: 'Kluczem do idealnego usuwania tła przez AI są wyraźnie zdefiniowane granice. W przypadku portretów, jeśli chcesz zachować każdy kosmyk włosów, spróbuj użyć obrazów o wysokim kontraście kolorystycznym między obiektem a tłem. Nasze narzędzie wykorzystuje najnowocześniejsze modele głębokiego uczenia się, aby zapewnić profesjonalną dokładność nawet w złożonych scenach, ale wyższy kontrast wykładniczo zwiększa ostateczną ostrość.'
                    },
                    {
                        title: '2. Detale na poziomie Pro dzięki trybowi ręcznej korekty',
                        content: 'Jeśli istnieją części, które AI pominęła lub nadmiernie wymazała, po prostu aktywuj „Tryb ręcznej korekty” u góry. Korzystając z technologii precyzyjnego pędzla z renderowaniem płótna bez opóźnień, możesz idealnie przywrócić lub wymazać określone obszary. Jest to szczególnie przydatne w przypadku przezroczystych przedmiotów, cienkich tkanin lub zwierząt o skomplikowanym futrze.'
                    },
                    {
                        title: '3. Standardy komercyjne i niestandardowe efekty naklejek',
                        content: 'Nie zatrzymuj się tylko na przezroczystości. UltraUtils zapewnia automatyczne standardowe wymiarowanie zdjęć do dokumentów i paszportów oraz umożliwia dodanie „Efektu naklejki” (białej ramki), aby wyróżnić obiekty – idealne do projektowania gadżetów lub przyciągających wzrok miniaturek na YouTube. Dostosuj grubość i kolor ramki, aby stworzyć własny, charakterystyczny styl.'
                    },
                    {
                        title: '4. Absolutna prywatność dzięki lokalnemu przetwarzaniu bezserwerowemu',
                        content: 'Martwisz się, że Twoje zdjęcia wyciekną na serwer? UltraUtils wykonuje wszystkie obliczenia lokalnie w Twojej przeglądarce. Ani jeden bajt danych obrazu nie jest przesyłany na serwer, co czyni go najbezpieczniejszym wyborem do przetwarzania poufnych dokumentów biznesowych lub prywatnych zdjęć osobistych.'
                    }
                ],
                faq: [
                    { q: 'Czy usunięcie tła obniża jakość obrazu?', a: 'Nie. Zachowujemy oryginalną rozdzielczość obrazu, konwertując jedynie informacje o tle na przezroczysty kanał alfa. Używamy wysokiej jakości eksportu PNG, aby zachować każdy piksel.' },
                    { q: 'Gdzie mogę używać tych przezroczystych obrazów?', a: 'Idealnie nadają się do kompozycji miniaturek na YouTube, list produktów w e-commerce, naklejek na Instagram Stories, profesjonalnych zdjęć do dokumentów i wszelkich projektów graficznych.' },
                    { q: 'Czy mogę przetwarzać wiele obrazów jednocześnie?', a: 'Obecnie koncentrujemy się na wysokoprecyzyjnym przetwarzaniu pojedynczych obrazów. Funkcja masowego przetwarzania wsadowego jest planowana w przyszłej aktualizacji, aby pomóc Ci pracować jeszcze szybcieiej.' },
                    { q: 'Co mam zrobić, jeśli AI nie zidentyfikuje obiektu?', a: 'Dzieje się tak zazwyczaj, gdy obiekt jest zbyt mały lub idealnie wtapia się w tło. Spróbuj użyć innego zdjęcia, na którym obiekt znajduje się na środku i jest wyraźnie odróżnialny od otoczenia.' }
                ]
            }
        },
        pdfMaster: {
            title: 'PDF Master PRO',
            desc: 'Kompleksowy zestaw narzędzi PDF. Łącz, dziel, konwertuj i zabezpieczaj dokumenty.',
            merge: 'Połącz pliki',
            split: 'Podziel strony',
            toImage: 'Konwertuj na obraz',
            rotate: 'Obróć strony',
            protect: 'Ustaw hasło',
            uploadMsg: 'Przeciągnij pliki PDF tutaj lub kliknij, aby wybrać',
            filesSelected: 'wybranych plików',
            mergeNow: 'Utwórz połączony PDF',
            splitNow: 'Podziel wszystkie strony',
            rotateNow: 'Zastosuj obrót 90°',
            protectNow: 'Zaszyfruj dokument',
            downloadMerged: 'Pobierz wynik',
            downloadSplit: 'Zapisz wszystko (ZIP)',
            addMore: 'Dodaj pliki',
            clear: 'Wyczyść listę',
            pageRange: 'Zakres stron (np. 1-5, 10)',
            password: 'Wprowadź hasło',
            options: 'Opcje zaawansowane',
            processingMsg: 'Przetwarzanie PDF przez wydajny silnik...',
            successMsg: 'Zadanie zakończone sukcesem!',
            guide: {
                title: 'Przewodnik PDF Master',
                subtitle: 'Zarządzaj dokumentami PDF i edytuj je jak profesjonalista',
                sections: [
                    {
                        title: '1. Zaawansowane łączenie i optymalizacja',
                        content: 'Łączenie rozproszonych dokumentów to podstawa. UltraUtils pozwala scalać wiele plików przy zachowaniu własnej kolejności.'
                    },
                    {
                        title: '2. Precyzyjne dzielenie i ekstrakcja',
                        content: 'Potrzebujesz konkretnych rozdziałów? Użyj funkcji dzielenia, aby rozdzielić każdą stronę lub wybrać dokładny zakres.'
                    },
                    {
                        title: '3. Bezpieczeństwo: Szyfrowanie hasłem',
                        content: 'Chroń poufne umowy profesjonalnym hasłem. Szyfrowanie odbywa się w przeglądarce, zapewniając prywatność.'
                    },
                    {
                        title: '4. Pełna prywatność: 100% lokalne przetwarzanie',
                        content: 'Nie wysyłamy Twoich plików na żadne serwery. Wszystko dzieje się lokalnie na Twoim urządzeniu.'
                    }
                ],
                faq: [
                    { q: 'Czy istnieje limit plików do połączenia?', a: 'Technicznie nie, ale zalecamy poniżej 50 plików dla optymalnej wydajności.' },
                    { q: 'Czy mogę wyodrębnić konkretne strony?', a: 'Tak! W zakładce Podział wpisz zakres np. "1-5, 10", aby uzyskać tylko te strony.' },
                    { q: 'Czy szyfrowanie hasłem jest bezpieczne?', a: 'Tak, używamy standardu 128-bit AES. Ponieważ odbywa się to lokalnie, nikt inny nie zobaczy hasła.' },
                    { q: 'Gdzie zapisywane są moje pliki?', a: 'Pliki są zapisywane bezpośrednio w domyślnym folderze pobierania Twojej przeglądarki.' }
                ]
            }
        },
        home: {
            badge: 'Za darmo i prywatnie',
            titlePrefix: 'Cyfrowe Supermoce dla',
            titleSuffix: 'Nowoczesnych Twórców',
            desc: 'Zestaw wydajnych narzędzi użytkowych.',
            descLine2: 'Zacznij od razu, bez logowania.',
            launchTool: 'Uruchom narzędzie',
            missionTitle: 'Wydajne narzędzia cyfrowe skoncentrowane na prywatności',
            missionDesc1: 'Witaj w UltraUtils, Twoim miejscu docelowym dla wydajnych i bezpiecznych narzędzi cyfrowych. W erze, w której narzędzia online często narażają dane użytkowników lub wprowadzają skomplikowane systemy płatności, my stawiamy na inne podejście: 100% darmowe, całkowicie lokalne i zaprojektowane profesjonalnie.',
            missionDesc2: 'Naszą misją jest wspieranie twórców, programistów i zwykłych użytkowników narzędziami, które działają bezpośrednio w przeglądarce. Niezależnie od tego, czy potrzebujesz usunąć tło za pomocą AI, zoptymalizować obrazy pod kątem SEO czy zarządzać złożonymi dokumentami PDF, nasz zestaw narzędzi wykona ciężką pracę bez przesyłania Twoich poufnych plików na serwer.',
            features: {
                privacy: { title: 'Prywatność', desc: 'Brak przesyłania na serwer' },
                speed: { title: 'Szybkość', desc: 'Przetwarzanie lokalne' },
                global: { title: 'Globalność', desc: 'Wsparcie wielojęzyczne' },
                free: { title: 'Za darmo', desc: 'Brak ukrytych opłat' }
            },
            footerNote: {
                title: 'Profesjonalne narzędzia dla każdego',
                subtitle: 'Dowiedz się, dlaczego tysiące użytkowników ufa UltraUtils w swoim codziennym cyfrowym przepływie pracy.',
                media: { title: 'Media Suite', desc: 'Wysokiej jakości wyciąganie miniaturek z YouTube i usuwanie tła AI. Idealny partner dla twórców.' },
                data: { title: 'Dane i Tekst', desc: 'Zaawansowana konwersja, formatowanie i czyszczenie tekstu. Niezbędne dla analityków i programistów.' },
                design: { title: 'Zasoby graficzne', desc: 'Profesjonalne generowanie kodów QR z niestandardowymi stylami i wysoką rozdzielczością.' }
            },
            growthTips: {
                title: 'Wskazówki ekspertów dotyczące wzrostu cyfrowego',
                subtitle: 'Dowiedz się, jak wykorzystać każde narzędzie w 200%, aby przyspieszyć ruch na stronie.',
                tips: [
                    {
                        title: 'Strategia miniatur YouTube',
                        desc: 'Analizuj miniatury konkurencji i testuj ich wygląd w rzeczywistych kanałach przed opublikowaniem.',
                        tool: 'YT Grabber',
                        href: '/tools/youtube-thumbnail'
                    },
                    {
                        title: 'Przebieg optymalizacji SEO',
                        desc: 'Usuwaj tła i natychmiast kompresuj obrazy, aby były gotowe dla Google Search.',
                        tool: 'Image Master',
                        href: '/tools/image-compressor'
                    },
                    {
                        title: 'Zastrzyk kreatywności AI',
                        desc: 'Zamień swoje kreatywne pomysły w rzeczywistość dzięki naszemu profesjonalnemu generatorowi promptów.',
                        tool: 'Prompt Gen',
                        href: '/tools/prompt-generator'
                    }
                ]
            },
            nextStep: 'Zalecany następny krok',
            suggestNext: 'Polecamy te narzędzia, aby usprawnić Twoją pracę',
            installPwa: 'Zainstaluj aplikację UltraUtils',
            installPwaDesc: 'Dodaj do ekranu głównego, aby uzyskać szybszy i łatwiejszy dostęp do wszystkich narzędzi.',
            installBtn: 'Zainstaluj teraz',
            recentTools: 'Ostatnio używane'
        },
        advertise: {
            title: 'Reklamuj się u nas',
            desc: 'Zaprezentuj swój produkt globalnej społeczności twórców UltraUtils.',
            slotsTitle: 'Dostępne miejsca reklamowe',
            formTitle: 'Złóż zapytanie o reklamę',
            name: 'Imię / Firma',
            namePlaceholder: 'Jan Kowalski / Firma Sp. z o.o.',
            email: 'Adres E-mail',
            emailPlaceholder: 'jan@przyklad.pl',
            dates: 'Preferowany czas trwania',
            datesPlaceholder: 'np. 2026-03-01 ~ 2026-03-15',
            message: 'Szczegóły zapytania',
            messagePlaceholder: 'Opowiedz nam o swoim produkcie lub udostępnij link...',
            submit: 'Wyślij zapytanie',
            success: 'Zapytanie wysłano pomyślnie! Skontaktujemy się wkrótce.',
            backToForm: 'Wróć do formularza',
            submitError: 'Błąd podczas wysyłania. Spróbuj ponownie.',
            slotTop: 'Górny Baner Premium',
            slotTopDesc: 'Baner 728x90 - Najlepsza widoczność na górze wszystkich stron narzędzi. Zwiększ świadomość marki.',
            slotHome: 'Baner w Strumieniu Głównym',
            slotHomeDesc: 'Natywne umieszczenie w siatce narzędzi na stronie głównej. Idealne dla wysokiego zaangażowania.',
            slotSide: 'Boczny Skyscraper',
            slotSideDesc: '160x600 - Stała obecność (sticky) na pasku bocznym dla długotrwałej ekspozycji marki.',
            slotBottom: 'Dolny Baner Konwersji',
            slotBottomDesc: 'Baner 728x90 - Miejsce o wysokiej intencji na dole każdej strony narzędzia.',
            pricePremium: 'Premium',
            priceHighCTR: 'Wysoki CTR',
            priceConversion: 'Konwersja',
            benefits: [
                'Ponad 100 tys. aktywnych użytkowników miesięcznie',
                'Wysokie zaangażowanie twórców YouTube',
                'Zasięg dwujęzyczny (Globalny i Lokalny)',
                'Przejrzyste raporty z wyników'
            ],
            partnerMsg: 'Partnerstwo z UltraUtils to dotarcie do nowej generacji cyfrowych twórców.',
            faqTitle: 'FAQ Reklamowe',
            faqDesc: 'Często zadawane pytania dotyczące reklam na UltraUtils',
            faq: [
                { q: 'Jak ustalane są ceny?', a: 'Cena zależy od miejsca i czasu trwania reklamy. Skontaktuj się po ofertę opartą na aktualnym ruchu.' },
                { q: 'Czy wspieracie reklamy wideo?', a: 'Obecnie wspieramy tylko banery graficzne i tekstowe dla optymalnej szybkości strony.' },
                { q: 'Z jakim wyprzedzeniem rezerwować?', a: 'Popularne miejsca szybko się kończą. Sugerujemy kontakt przynajmniej 1-2 tygodnie wcześniej.' },
                { q: 'Jakie formy płatności są akceptowane?', a: 'Przelewy bankowe oraz główne globalne platformy płatnicze. Szczegóły podajemy podczas konsultacji.' }
            ]
        },
        footer: {
            tools: 'Narzędzia',
            resources: 'Zasoby',
            legal: 'Prawne',
            support: 'Wsparcie',
            privacy: 'Prywatność',
            terms: 'Regulamin',
            advertise: 'Reklama',
            coffee: 'Postaw kawę',
            allRights: 'Wszelkie prawa zastrzeżone.',
            social: 'Social',
            about: 'O nas',
            contact: 'Kontakt',
        },
        privacy: { title: 'Prywatność', lastUpdated: '15 lutego 2026', sections: [{ title: 'Dane', content: 'Nie zbieramy danych osobowych. Wszystko lokalnie.' }] },
        terms: { title: 'Regulamin', lastUpdated: '15 lutego 2026', sections: [{ title: 'Użytkowanie', content: 'Narzędzia dostarczane są w formie, w jakiej są.' }] },
        about: {
            title: 'O UltraUtils',
            subtitle: 'Szybszy i bezpieczniejszy cyfrowy przepływ pracy',
            sections: [
                {
                    title: 'Nasza Misja',
                    content: 'UltraUtils ma na celu zapewnienie profesjonalnego środowiska cyfrowego, w którym twórcy, programiści i zwykli użytkownicy mogą wykonywać zadania bez skomplikowanych instalacji lub rejestracji. Koncentrujemy się na użyteczności i prostocie, dążąc do demokratyzacji technologii.'
                },
                {
                    title: 'Dlaczego UltraUtils?',
                    content: 'Prywatność jest naszym priorytetem. W przeciwieństwie do wielu narzędzi wysyłających pliki na serwery, my wykorzystujemy nowoczesne technologie internetowe, aby przetwarzać wszystko bezpośrednio w Twojej przeglądarce. Jest to nie tylko szybsze, ale Twoje dane nigdy nie opuszczają Twojego urządzenia.'
                },
                {
                    title: 'Globalna Platforma',
                    content: 'Obsługujemy wiele języków, aby przełamać bariery komunikacyjne i regularnie aktualizujemy nasz zestaw narzędzi, aby zmaksymalizować produktywność użytkowników na całym świecie.'
                }
            ],
            stats: {
                free: '100% Za darmo',
                logs: 'Brak logów serwera',
                languages: 'Wsparcie wielu języków',
                utilities: 'Narzędzia eksperckie'
            }
        },
        contact: { title: 'Kontakt', subtitle: 'Masz pytania?', desc: 'Sugerencje, błędy lub biznes.', infoTitle: 'Kanał', infoEmail: 'official.ultrautils@gmail.com', infoResponse: 'Odpowiadamy w 24h.' },
        notFound: { title: 'Zgubiłeś się?', desc: 'Strona nie istnieje.', backHome: 'Wróć na start' },
        feedback: { title: 'Czy narzędzie pomogło?', useful: 'Bardzo! 👍', neutral: 'Tak sobie 😐', improve: 'Może być lepiej 🔧', placeholder: 'Twoja opinia...', submit: 'Wyślij', success: 'Dziękujemy za opinię!', commitment: 'Używamy Twojego feedbacku, by rosnąć każdego dnia.' },
        share: { title: 'Podoba się? Udostępnij!', copy: 'Kopiuj link', copied: 'Skopiowano!', twitter: 'X', facebook: 'Facebook', whatsapp: 'WhatsApp' },
        ytPlanner: {
            title: 'Mistrz Strategii AI',
            desc: 'Wirusowe zasięgi dzięki skryptom i tagom AI.',
            placeholder: 'Wpisz temat...',
            generateBtn: 'Generuj Plan AI',
            generating: 'AI tworzy Twoją strategię...',
            tabTitles: 'Tytuły',
            tabScripts: 'Scenariusz',
            tabTags: 'Tagi & SEO',
            tabStrategy: 'Traffic',
            videoType: 'Typ',
            vlog: 'Vlog',
            info: 'Edukacja',
            review: 'Recenzja',
            shorts: 'Shorts',
            topic: 'Główny temat',
            topicPlaceholder: 'np. Najlepsza kawa w Krakowie...',
            advancedOptions: 'Opcje',
            tone: 'Ton',
            toneFunny: 'Z humorem',
            toneSerious: 'Poważny',
            toneProfessional: 'Ekspert',
            targetAudience: 'Odbiorcy',
            targetGeneral: 'Ogólni',
            targetExpert: 'Eksperci',
            targetBeginner: 'Początkujący',
            resultsTitle: 'Raport AI',
            setupTab: 'Ustawienia',
            resultsTab: 'Raport',
            copyAll: 'Kopiuj wszystko',
            copied: 'Skopiowano!',
            guide: {
                title: 'Sukces na YT',
                subtitle: 'Opanuj algorytm',
                sections: [
                    {
                        title: '1. Psychologia tytułów o wysokim CTR (Magnesy na kliknięcia)',
                        content: '80% Twoich wyświetleń zależy od progu tytułu i miniaturki. Nie wymieniaj tylko faktów; użyj techniki „luki informacyjnej” – wzbudź ciekawość frazami sugerującymi tajemnicę lub ogromną nagrodę. Nasza AI analizuje tysiące wirusowych punktów danych, aby sugerować tytuły, które wyzwalają impuls do kliknięcia przy jednoczesnym zachowaniu uczciwości treści.'
                    },
                    {
                        title: '2. Holistyczna strategia SEO dla globalnego zasięgu',
                        content: 'YouTube to druga co do wielkości wyszukiwarka na świecie. Umieszczając kluczowe słowa w pierwszych dwóch liniach opisu i dopasowując je do strategicznych tagów, tworzysz synergię metadanych. To nie tylko drastycznie zwiększa Twoją ekspozycję w rekomendacjach YouTube, ale także poprawia ranking w wynikach wyszukiwania Google, napędzając organiczny ruch typu „evergreen”.'
                    },
                    {
                        title: '3. Strategiczne tworzenie scenariuszy dla maksymalnego czasu oglądania',
                        content: 'Pierwsze 15 sekund to „strefa haka”, w której zyskujesz lub tracisz widza. Każdy dostarczany przez nas szkic scenariusza opiera się na strukturze „wartość przede wszystkim”: Hak (natychmiastowa obietnica) -> Propozycja wartości (plan) -> Treść główna (rozwiązanie). Ta profesjonalna rama narracyjna ma na celu utrzymanie wysokich wskaźników retencji, najbardziej krytycznego czynnika dla algorytmu YouTube.'
                    },
                    {
                        title: '4. Opanowanie Shorts: Retencja i zwroty akcji',
                        content: 'W przypadku YouTube Shorts zasady są inne. Sukces zależy od struktur „pętlowych” i natychmiastowych bodźców wizualnych. Nasza AI sugeruje konkretne strategie dla Shorts, takie jak umieszczenie wizualnego zwrotu akcji w 45. sekundzie lub projektowanie pętli opartych na ciekawości, które zachęcają widzów do wielokrotnego oglądania wideo, co wykładniczo zwiększa potencjał wirusowy.'
                    }
                ],
                faq: [
                    { q: 'Czy mogę bezpośrednio używać tytułów wygenerowanych przez AI?', a: 'Oczywiście! Nasze tytuły są zoptymalizowane pod kątem wydajności. Jednak dodanie własnego „głosu” lub kontekstu specyficznego dla kanału do najlepszej sugestii zapewni najwyższe wskaźniki zaangażowania.' },
                    { q: 'Jaka jest idealna liczba tagów?', a: 'Jakość ponad ilość. Skupienie się na 10-15 wysoce trafnych słowach kluczowych (jak sugeruje nasza AI) jest skuteczniejsze niż wypełnianie 500 znaków nieistotnymi terminami, które dezorientują algorytm wyszukiwania.' },
                    { q: 'Czy mogę zapisać te plany, aby przejrzeć je później?', a: 'Tak. Użyj przycisku „Pobierz .TXT”, aby zapisać pełną strategię lokalnie, lub po prostu skopiuj poszczególne sekcje do swojego notatnika lub Notion.' },
                    { q: 'Czy użytek komercyjny jest całkowicie bezpłatny?', a: 'Tak. Wszystkie narzędzia na UltraUtils, w tym planer, są w 100% darmowe, nie wymagają przypisania ani rejestracji, wspierając twórców na każdym etapie ich rozwoju.' }
                ]
            }
        },
        houseAds: { bgRemoverTitle: 'Usuwanie Tła Pro', bgRemoverDesc: 'Precyzja AI natychmiast.', pdfMasterTitle: 'Mistrz PDF', pdfMasterDesc: 'Łącz i dziel bez stresu.', imageCompTitle: 'Kompresja Pro', imageCompDesc: 'Lekkość bez starty jakości.', ytGrabTitle: 'Miniatury HD', ytGrabDesc: 'Pobieraj i edytuj łatwo.', coffeeTitle: 'Postaw kawę', coffeeDesc: 'Wesprzyj naszą pracę.', imageRestorerTitle: 'AI Przywracanie', imageRestorerDesc: 'Napraw rozmyte zdjęcia.' },
        imageRestorer: {
            title: 'AI Przywracanie Zdjęć & Remaster',
            desc: 'Przywracaj rozmyte, stare i uszkodzone zdjęcia dzięki zaawansowanej technologii remasteringu AI.',
            restoreBtn: 'Przywróć Teraz',
            remasterBtn: 'Remastering',
            processing: 'AI analizuje i przywraca obraz...',
            enhancement: 'Uwydatnianie Detali',
            resolution: 'Skalowanie',
            noise: 'Odmaskowanie',
            face: 'Przywracanie Twarzy',
            color: 'Korekcja Kolorów',
            original: 'Oryginał',
            restored: 'Przywrócone',
            upscaleX2: 'Skalowanie 2x',
            upscaleX4: 'Skalowanie 4x',
            guide: {
                title: 'Przewodnik Przywracania Zdjęć',
                subtitle: 'Ożyw swoje cenne wspomnienia w wysokiej rozdzielczości',
                sections: [
                    {
                        title: '1. Naprawianie rozmytych zdjęć',
                        content: 'Nasze AI rekonstruuje rozmyte obrazy, przewidując szczegóły na podstawie wyuczonych wzorców. Działa wyjątkowo dobrze w przypadku rysów twarzy.'
                    },
                    {
                        title: '2. Remastering starych i uszkodzonych zdjęć',
                        content: 'Koryguj zadrapania i blaknięcie na zdjęciach vintage. Cyfrowa renowacja uzupełnia uszkodzone piksele i stosuje naturalną korekcję kolorów.'
                    }
                ],
                faq: [
                    { q: 'Czy bardzo małe zdjęcia można przywrócić?', a: 'Tak, używając technologii Super Resolution, możemy powiększać małe obrazy bez pikselizacji, jednocześnie zwiększając ich klarowność.' },
                    { q: 'Czy moje dane obrazu są prywatne?', a: 'Absolutnie. UltraUtils wykonuje całe przetwarzanie AI lokalnie na Twoim urządzeniu; żadne obrazy nie są przesyłane na serwer.' }
                ]
            }
        },
        screenRecorder: {
            title: 'No-Install Web Screen Recorder',
            desc: 'Record your screen, webcam, and microphone directly in the browser.',
            startBtn: 'Start',
            stopBtn: 'Stop',
            downloadBtn: 'Save',
            webcam: 'Webcam',
            mic: 'Mic',
            recording: 'Recording...',
            ready: 'Ready',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'Tips',
                        content: 'Record safely within your browser.'
                    }
                ],
                faq: [
                    {
                        q: 'Limit?',
                        a: 'No absolute limit.'
                    }
                ]
            }
        },
        revenueCalc: {
            title: 'Revenue Calculator',
            desc: 'Calculate your estimated earnings.',
            views: 'Daily Views',
            cpm: 'CPM ($)',
            calculate: 'Analyze',
            resultDaily: 'Daily',
            resultMonthly: 'Monthly',
            resultYearly: 'Yearly',
            growthTip: 'Growth Tip',
            guide: {
                title: 'Guide',
                subtitle: 'Tips',
                sections: [
                    {
                        title: 'RPM',
                        content: 'RPM is key.'
                    }
                ],
                faq: [
                    {
                        q: 'Accurate?',
                        a: 'Estimates only.'
                    }
                ]
            }
        },
        megaMenu: {
            title: 'Explore',
            subtitle: 'Web utilities',
            searchPlaceholder: 'Search...',
            noResults: 'No results.',
            totalTools: 'tools available.'
        }
    }
};
