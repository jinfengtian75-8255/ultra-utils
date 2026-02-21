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
        scaleLabel: string;
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
            scaleLabel: '크기 조절',
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
            guide: {
                title: '배경 제거 가이드',
                subtitle: 'AI를 이용한 배경 제거 방법',
                sections: [
                    {
                        title: '1. 피사체와 배경의 대비를 활용한 무결점 누끼 따기',
                        content: 'AI 배경 제거의 핵심은 피사체와 배경 사이의 경계를 명확히 인식하는 것입니다. 인물 사진의 경우 머리카락 한 올까지 살리고 싶다면, 가급적 배경과 색상 대비가 뚜렷한 곳에서 촬영된 이미지를 사용하세요. 우리 도구는 최신 딥러닝 모델을 사용하여 복잡한 배경에서도 높은 정확도를 보여주지만, 대비가 좋을수록 결과물의 선명도는 기하급수적으로 올라갑니다.'
                    },
                    {
                        title: '2. 수동 수정(Refine) 모드로 전문가급 디테일 완성하기',
                        content: 'AI가 실수로 제거하지 못한 부분이나, 너무 많이 지워진 부분이 있다면 상단의 \'수동 수정 모드\'를 활성화하세요. 제로-딜레이 캔버스 렌더링 기술이 적용된 정밀 브러시를 통해 원하는 부분만 완벽하게 복구하거나 추가로 지울 수 있습니다. 이는 특히 투명한 물체나 미세한 털이 있는 동물을 처리할 때 유용합니다.'
                    },
                    {
                        title: '3. 상업적 활용을 위한 다양한 규격 및 스티커 효과',
                        content: '배경을 지운 후 단순히 투명하게 남겨두지 마세요. UltraUtils는 여권/증명사진 규격 자동 맞춤 기능을 제공하며, 외곽선에 \'스티커 효과\'를 추가하여 굿즈 제작이나 화려한 유튜브 썸네일용 소스로 즉시 활용할 수 있게 돕습니다. 테두리 두께와 색상을 조절하여 당신만의 독특한 스타일을 완성해 보세요.'
                    },
                    {
                        title: '4. 보안과 프라이버시: 서버 없는 로컬 처리 방식',
                        content: '여러분의 소중한 사진이 서버에 유출될까 걱정되시나요? UltraUtils는 모든 연산을 사용자 기기의 브라우저 내에서 직접 수행합니다. 사진은 단 1바이트도 서버로 전송되지 않으므로, 보안이 중요한 업무용 사진이나 개인적인 사진도 안심하고 누끼를 딸 수 있습니다.'
                    }
                ],
                faq: [
                    { q: '배경을 지운 후 화질이 저하되지는 않나요?', a: '아니요. 원본 이미지의 해상도를 최대한 유지하면서 배경 정보만 투명(Alpha Channel)으로 변환합니다. 변환 후 저장 시 고화질 PNG 포맷을 사용하여 선명도를 보존합니다.' },
                    { q: '투명 배경 이미지를 어디에 주로 활용하나요?', a: '유튜브 썸네일 합성, 이커머스 상세페이지 제품 누끼, 인스타그램 스토리에 올릴 인물 스티커 제작, 사원증/여권 사진 제작 등 무궁무진하게 활용 가능합니다.' },
                    { q: '한 번에 여러 장의 배경을 지울 수 있나요?', a: '현재는 한 장 한 장의 정밀한 품질을 위해 단일 이미지 처리를 지원하며, 빠른 시일 내에 대량 처리(Batch Processing) 기능을 업데이트할 예정입니다.' },
                    { q: '배경 제거 실패 메시지가 뜹니다.', a: '피사체가 너무 작거나 배경과 완전히 동화되어 식별이 어려운 경우 발생할 수 있습니다. 피사체가 중심에 위치한 다른 사진으로 다시 시도해 보세요.' }
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
                        title: '1. 대용량 PDF 합치기 및 최적화 전략',
                        content: '업무나 학습 과정에서 분산된 여러 PDF 문서를 하나로 합치는 것은 문서 관리의 기본입니다. UltraUtils PDF 마스터는 순서를 자유롭게 조정한 후 파일들을 결합하며, 결합 과정에서 메타데이터를 정규화하여 안정적인 결과물을 생성합니다. 보고서나 포트폴리오를 제출하기 전 누락된 페이지 없이 하나의 파일로 완벽하게 정리하세요.'
                    },
                    {
                        title: '2. 정밀한 페이지 나누기(Split) 기능 활용법',
                        content: '수백 페이지에 달하는 대용량 문서에서 특정 챕터나 페이지만 필요하신가요? 나누기 기능을 사용하면 각 페이지를 개별 PDF 파일로 즉시 분리하여 압축(ZIP) 파일로 제공합니다. 필요한 부분만 추출하여 보관하거나 공유할 때 매우 효과적인 기능입니다.'
                    },
                    {
                        title: '3. PDF를 고화질 이미지(JPG)로 일괄 변환하기',
                        content: 'PDF 내용을 인스타그램이나 블로그, 카드 뉴스에 공유하고 싶을 때 이미지 변환 기능을 사용하세요. 단순 캡처보다 훨씬 높은 해상도로 전체 페이지를 JPEG 이미지로 변환해 드립니다. 텍스트 가독성을 유지하면서 시각적 매체로 확장하는 가장 빠른 방법입니다.'
                    },
                    {
                        title: '4. 철저한 보안: 100% 로컬 브라우저 처리',
                        content: '중요한 계약서나 기밀 정보가 담긴 PDF를 온라인에 올리는 것이 불안하신가요? UltraUtils는 pdf-lib 기술을 활용하여 모든 작업을 사용자의 브라우저 메모리상에서만 수행합니다. 외부 서버로 파일이 단 1KB도 업로드되지 않으므로, 기업용 기밀 문서도 안심하고 편집하실 수 있습니다.'
                    }
                ],
                faq: [
                    { q: '합칠 수 있는 파일의 개수나 용량 제한이 있나요?', a: '기술적인 제한은 없으나, 안정적인 처리를 위해 한 번에 50개 이하 혹은 전체 100MB 이하의 작업을 권장합니다. 기기의 RAM 성능에 따라 더 큰 작업도 가능합니다.' },
                    { q: '이미지로 변환할 때 화질 설정이 가능한가요?', a: '현재는 텍스트 가독성을 보장하는 고해상도(2.0x Scale) 설정을 기본값으로 제공하여, 별도의 설정 없이도 선명한 결과물을 얻으실 수 있습니다.' },
                    { q: '비밀번호가 걸린 PDF도 편집 가능한가요?', a: '보안 문제로 암호화된 파일은 처리가 제한될 수 있습니다. 암호를 해제한 후 업로드하여 사용하시기 바랍니다.' },
                    { q: '변환된 파일은 어디에 저장되나요?', a: '변환 즉시 ZIP 파일 형태로 사용자의 다운로드 폴더에 저장됩니다. 작업 내역은 브라우저 종료 시 자동으로 소멸됩니다.' }
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
            coffeeDesc: '더 나은 도구 제작을 위해 따뜻한 응원을 부탁드립니다.'
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
            scaleLabel: 'Scale',
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
                    { q: 'Does removing the background reduce image quality?', a: 'No. We maintain the original resolution of your image while only converting the background information into a transparent Alpha Channel. We use high-quality PNG export to preserve every pixel.' },
                    { q: 'Where can I use these transparent images?', a: 'They are perfect for YouTube thumbnail composites, e-commerce product listings, Instagram story stickers, professional ID photos, and any graphic design project.' },
                    { q: 'Can I process multiple images at once?', a: 'Currently, we focus on high-precision single image processing. A bulk batch processing feature is planned for a future update to help you work even faster.' },
                    { q: 'What should I do if the AI fails to identify the subject?', a: 'This usually happens if the subject is too small or blends perfectly into the background. Try another photo where the subject is centered and clearly distinguishable from its surroundings.' }
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
                        title: '1. Advanced PDF Merging & Metadata Optimization',
                        content: 'Managing fragmented documents is a core part of any workflow. UltraUtils PDF Master allows you to combine multiple PDF files while maintaining a custom order and normalizing metadata for a stable output. Perfect for organizing reports, portfolios, or large academic structures before final submission.'
                    },
                    {
                        title: '2. Precision Page Splitting for Content Extraction',
                        content: 'Need just a specific chapter or single page from a massive document? Our splitting tool instantly separates every page into individual PDFs and packages them into a convenient ZIP file. It\'s the most efficient way to extract and share only what\'s necessary.'
                    },
                    {
                        title: '3. High-Res PDF to Image (JPG) Batch Conversion',
                        content: 'When you need to share PDF content on visually-driven platforms like Instagram, LinkedIn, or blogs, use our image conversion tool. We convert entire pages to high-resolution JPEG images, preserving text readability far better than a simple screenshot.'
                    },
                    {
                        title: '4. Enterprise-Grade Security: 100% Local Logic',
                        content: 'Concerned about uploading confidential contracts or personal info? UltraUtils utilizes pdf-lib technology to perform all edits entirely within your browser memory. Not even 1KB of your file data is uploaded to our servers, ensuring your data remains truly private.'
                    }
                ],
                faq: [
                    { q: 'Is there a limit on file size or count?', a: 'While there are no hard limits, we recommend merging up to 50 files or 100MB for the smootmost experience. The actual limit depends on your device\'s RAM capacity.' },
                    { q: 'Can I adjust the image quality when converting to JPG?', a: 'We provide a high-resolution default (2.0x Viewport Scale) that ensures professional-grade text clarity, giving you perfect results without needing complex settings.' },
                    { q: 'Does it support password-protected PDFs?', a: 'For security reasons, encrypted files cannot be processed directly. Please decrypt your files before uploading for editing.' },
                    { q: 'Where are my processed files stored?', a: 'Files are saved immediately to your device\'s Downloads folder. No data is stored on our end, and all session data is wiped once you close the tab.' }
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
                        content: 'YouTube is the world\'s second-largest search engine. By placing core keywords within the first two lines of your description and aligning them with strategic tags, you create a metadata synergy. This significantly increases your visibility nicht just on YouTube Recommendations, but also on Google Search results, driving organic evergreen traffic.'
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
            coffeeDesc: 'Support our work and help us build better tools.'
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
            scaleLabel: '缩放',
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
                        title: '1. 高级 PDF 合并与元数据优化',
                        content: '管理碎片化文档是任何工作流程的核心部分。UltraUtils PDF 大师允许您在保持自定义顺序的同时合并多个 PDF 文件，并规范化元数据以实现稳定的输出。非常适合在最终提交前整理报告、作品集或大型学术结构。'
                    },
                    {
                        title: '2. 精准页面拆分实现内容提取',
                        content: '只需要大型文档中的特定章节或单页？我们的拆分工具可立即将每一页分离为独立的 PDF，并将其打包成方便的 ZIP 文件。这是提取和仅分享必要内容的最有效方式。'
                    },
                    {
                        title: '3. 高清 PDF 转图像 (JPG) 批量转换',
                        content: '当您需要在 Instagram、LinkedIn 或博客等视觉导向的平台上分享 PDF 内容时，请使用我们的图像转换工具。我们将整页转换为高分辨率 JPEG 图像，保留的文本可读性远优于简单的屏幕截图。'
                    },
                    {
                        title: '4. 企业级安全：100% 本地逻辑',
                        content: '担心上传机密合同或个人信息？UltraUtils 利用 pdf-lib 技术完全在您的浏览器内存中执行所有编辑。您的文件数据甚至不会有 1KB 上传到我们的服务器，确保您的数据真正私密。'
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
            bgRemoverTitle: 'プロ級の背景削除',
            bgRemoverDesc: 'AIがワンクリックで背景を正確に除去。',
            pdfMasterTitle: 'スマートPDFエディタ',
            pdfMasterDesc: '結合、分割、画像変換をこれ一つで。',
            imageCompTitle: '超高性能图片压缩',
            imageCompDesc: '在不损失画质的情况下显著减小文件体积。',
            ytGrabTitle: 'YouTube 封面提取',
            ytGrabDesc: '即刻下载并编辑高画质视频封面。',
            coffeeTitle: 'Antiにコーヒーを奢る',
            coffeeDesc: '皆様の応援がツール開発の動力になります。'
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
        },
        navbar: {
            title: 'マイツール',
            home: 'ホーム',
            imageSuite: '画像マスター',
            promptGen: 'プロンプト生成',
            ytGrab: 'YouTube抽出',
            qrGen: 'QR生成',
            textConv: 'テキスト変換',
            bgRemover: '背景削除',
            ytPlanner: 'YouTube企画',
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
            downloadPng: '高画質PNG保存',
            vectorReady: 'ベクターデータ作成中...',
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
            filterPresets: 'フィルタ',
            filterOriginal: 'オリジナル',
            filterBW: '白黒',
            filterSepia: 'セピア',
            filterWarm: '暖色',
            filterCool: '寒色',
            filterVintage: 'ヴィンテージ',
            textEditing: 'テキスト編集',
            textPlaceholder: '入力...',
            textSize: 'サイズ',
            stickerWidth: '枠線の太さ',
            shortsCrop: '9:16 Shorts',
            share: '共有',
            shareText: 'AIクリエイティブスタジオ! ⚡',
            photoMode: '写真モード',
            studio: 'スタジオ',
            original: 'オリジナル',
            result: '結果',
            scaleLabel: 'スケール',
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
            title: 'PDFマスター',
            desc: 'PDFの結合、分割、画像変換をワンストップで。',
            merge: 'PDF結合',
            split: 'PDF分割',
            toImage: 'PDFを画像へ',
            uploadMsg: 'PDFをドロップまたはクリック',
            filesSelected: '個を選択中',
            mergeNow: '結合を実行',
            splitNow: '分割を実行',
            downloadMerged: '結合PDFを保存',
            downloadSplit: '分割ファイルを保存',
            addMore: '追加',
            guide: {
                title: 'PDF活用ガイド',
                subtitle: '効率的なPDF管理',
                sections: [
                    {
                        title: '1. 高度なPDF結合とメタデータの最適化',
                        content: '断片化したドキュメントの管理は、あらゆるワークフローの核心です。UltraUtils PDFマスターを使用すると、カスタムオーダーを維持しながら複数のPDFファイルを結合し、安定した出力のためにメタデータを正規化できます。最終提出前のレポート、ポートフォリオ、大規模な学術資料の整理に最適です。'
                    },
                    {
                        title: '2. コンテンツ抽出のための精密ページ分割',
                        content: '膨大なドキュメントから特定の章や単一のページだけが必要な場合、当ツールの分割機能が役立ちます。すべてのページを即座に個別のPDFに分離し、便利なZIPファイルにパッケージ化します。必要なものだけを抽出して共有するための最も効率的な方法です。'
                    },
                    {
                        title: '3. 高解像度PDFから画像(JPG)への一括変換',
                        content: 'Instagram、LinkedIn、ブログなどの視覚的なプラットフォームでPDFコンテンツを共有する必要がある場合は、画像変換ツールを使用してください。ページ全体を高解像度のJPEG画像に変換し、単なるスクリーンショットよりもはるかに優れたテキストの可読性を維持します。'
                    },
                    {
                        title: '4. エンタープライズ級のセキュリティ：100%ローカルロジック',
                        content: '機密契約書や個人情報のアップロードが心配ですか？UltraUtilsはpdf-lib技術を活用し、すべての編集をお使いのブラウザメモリ内で完全に実行します。1KBのファイルデータもサーバーにアップロードされることはなく、データの真のプライバシーを保証します。'
                    }
                ],
                faq: [
                    { q: 'ファイルサイズや数に制限はありますか？', a: 'ハード的な制限はありませんが、スムーズな体験のために一度に50ファイルまたは100MBまでの処理を推奨しています。実際の制限はお使いのデバイスのRAM容量に依存します。' },
                    { q: 'JPG変換時に画質を調整できますか？', a: '高解像度のデフォルト設定（2.0xビューポートスケール）を提供しており、複雑な設定なしでプロ級のテキストの鮮明さを保証します。' },
                    { q: 'パスワード保護されたPDFはサポートされていますか？', a: 'セキュリティ上の理由から、暗号化されたファイルを直接処理することはできません。編集のためにアップロードする前に、ファイルの暗号化を解除してください。' },
                    { q: '処理されたファイルはどこに保存されますか？', a: 'ファイルはお使いのデバイスの「ダウンロード」フォルダに即座に保存されます。当方にはデータは保存されず、タブを閉じるとすべてのセッションデータが消去されます。' }
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
                title: 'YouTube成功ガイド',
                subtitle: 'アルゴリズムを攻略',
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
        houseAds: { bgRemoverTitle: 'プロ級背景削除', bgRemoverDesc: 'AIが一瞬で透過処理。', pdfMasterTitle: 'PDFエディタ', pdfMasterDesc: '結合・分割を簡単に。', imageCompTitle: '画像圧縮', imageCompDesc: '画質維持で容量削減。', ytGrabTitle: 'サムネイル抽出', ytGrabDesc: '高画質で即ダウンロード。', coffeeTitle: 'コーヒーを奢る', coffeeDesc: '開発の励みになります！' }
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
        },
        navbar: {
            title: 'Mis Utils',
            home: 'Inicio',
            imageSuite: 'Maestro de Imagen',
            promptGen: 'Generador de Prompts',
            ytGrab: 'Extractor YT',
            qrGen: 'Gen QR',
            textConv: 'Conv de Texto',
            bgRemover: 'Quitar Fondo',
            ytPlanner: 'Planificador YT',
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
            downloadPng: 'Guardar PNG',
            vectorReady: 'Preparando vector...',
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
            scaleLabel: 'Escala',
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
            title: 'Maestro PDF',
            desc: 'Une, divide y convierte PDFs en un solo lugar.',
            merge: 'Unir PDF',
            split: 'Dividir PDF',
            toImage: 'PDF a Imagen',
            uploadMsg: 'Suelte PDFs aquí',
            filesSelected: 'archivos seleccionados',
            mergeNow: 'Unir ahora',
            splitNow: 'Dividir ahora',
            downloadMerged: 'Descargar unido',
            downloadSplit: 'Descargar divididos',
            addMore: 'Añadir más',
            guide: {
                title: 'Guía PDF',
                subtitle: 'Gestión profesional',
                sections: [
                    {
                        title: '1. Fusión de PDF Avanzada y Optimización de Metadatos',
                        content: 'La gestión de documentos fragmentados es una parte central de cualquier flujo de trabajo. UltraUtils PDF Master le permite combinar múltiples archivos PDF manteniendo un orden personalizado y normalizando los metadatos para una salida estable. Perfecto para organizar informes, portafolios o grandes estructuras académicas antes de la presentación final.'
                    },
                    {
                        title: '2. Divisón de Páginas de Precisión para Extracción de Contenido',
                        content: '¿Necesita solo un capítulo específico o una sola página de un documento masivo? Nuestra herramienta de división separa instantáneamente cada página en archivos PDF individuales y los empaqueta en un conveniente archivo ZIP. Es la forma más eficiente de extraer y compartir solo lo necesario.'
                    },
                    {
                        title: '3. Conversión por Lotes de PDF a Imagen (JPG) de Alta Resolución',
                        content: 'Cuando necesite compartir contenido de PDF en plataformas centradas en lo visual como Instagram, LinkedIn o blogs, utilice nuestra herramienta de conversión de imágenes. Convertimos páginas completas en imágenes JPEG de alta resolución, preservando la legibilidad del texto mucho mejor que una simple captura de pantalla.'
                    },
                    {
                        title: '4. Seguridad de Grado Empresarial: Lógica 100% Local',
                        content: '¿Le preocupa subir contratos confidenciales o información personal? UltraUtils utiliza la tecnología pdf-lib para realizar todas las ediciones íntegramente dentro de la memoria de su navegador. Ni siquiera 1 KB de los datos de su archivo se carga en nuestros servidores, lo que garantiza que sus datos permanezcan verdaderamente privados.'
                    }
                ],
                faq: [
                    { q: '¿Hay un límite en el tamaño o la cantidad de archivos?', a: 'Si bien no hay límites estrictos, recomendamos unir hasta 50 archivos o 100 MB para una experiencia más fluida. El límite real depende de la capacidad de RAM de su dispositivo.' },
                    { q: '¿Puedo ajustar la calidad de la imagen al convertir a JPG?', a: 'Proporcionamos un valor predeterminado de alta resolución (Escala de Viewport de 2.0x) que garantiza una claridad de texto de nivel profesional, brindándole resultados perfectos sin necesidad de configuraciones complejas.' },
                    { q: '¿Soporta PDF protegidos con contraseña?', a: 'Por razones de seguridad, los archivos cifrados no se pueden procesar directamente. Descifre sus archivos antes de cargarlos para editarlos.' },
                    { q: '¿Dónde se almacenan mis archivos procesados?', a: 'Los archivos se guardan inmediatamente en la carpeta Descargas de su dispositivo. No se almacenan datos por nuestra parte y todos los datos de la sesión se borran una vez que cierra la pestaña.' }
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
        houseAds: { bgRemoverTitle: 'Quitar fondo Pro', bgRemoverDesc: 'Precisión AI al instante.', pdfMasterTitle: 'Maestro PDF', pdfMasterDesc: 'Une y divide sin líos.', imageCompTitle: 'Comprensión Pro', imageCompDesc: 'Reduce peso sin perder calidad.', ytGrabTitle: 'Miniaturas HD', ytGrabDesc: 'Descarga y edita fácil.', coffeeTitle: 'Invita a café', coffeeDesc: 'Apóyanos para seguir.' }
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
        },
        navbar: {
            title: 'Meine Utils',
            home: 'Home',
            imageSuite: 'Bild-Meister',
            promptGen: 'Prompt-Gen',
            ytGrab: 'YT Grabber',
            qrGen: 'QR-Gen',
            textConv: 'Text-Konv',
            bgRemover: 'Hintergrund',
            ytPlanner: 'YT-Planer',
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
            downloadPng: 'PNG speichern',
            vectorReady: 'Vektor wird vorbereitet...',
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
            scaleLabel: 'Skalierung',
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
            title: 'PDF-Meister',
            desc: 'Zusammenfügen, Trennen und Umwandeln.',
            merge: 'PDF zusammenfügen',
            split: 'PDF teilen',
            toImage: 'PDF zu Bild',
            uploadMsg: 'PDF hier ablegen',
            filesSelected: 'Dateien gewählt',
            mergeNow: 'Zusammenführen',
            splitNow: 'Teilen',
            downloadMerged: 'Gesamt-PDF downloaden',
            downloadSplit: 'Einzeldateien downloaden',
            addMore: 'Hinzufügen',
            guide: {
                title: 'PDF Guide',
                subtitle: 'Profi-Verwaltung',
                sections: [
                    {
                        title: '1. Fortschrittliches PDF-Zusammenfügen & Metadaten-Optimierung',
                        content: 'Die Verwaltung fragmentierter Dokumente ist ein zentraler Bestandteil jedes Workflows. Mit dem UltraUtils PDF-Meister können Sie mehrere PDF-Dateien kombinieren, wobei eine benutzerdefinierte Reihenfolge beibehalten und Metadaten für eine stabile Ausgabe normalisiert werden. Perfekt zum Organisieren von Berichten, Portfolios oder großen akademischen Strukturen vor der endgültigen Abgabe.'
                    },
                    {
                        title: '2. Präzises Splitten von Seiten zur Inhaltsextraktion',
                        content: 'Benötigen Sie nur ein bestimmtes Kapitel oder eine einzelne Seite aus einem umfangreichen Dokument? Unser Splitting-Tool trennt sofort jede Seite in einzelne PDFs und verpackt sie in eine praktische ZIP-Datei. Dies ist der effizienteste Weg, nur das Notwendige zu extrahieren und zu teilen.'
                    },
                    {
                        title: '3. Hochauflösende PDF-zu-Bild (JPG) Batch-Konvertierung',
                        content: 'Wenn Sie PDF-Inhalte auf visuell orientierten Plattformen wie Instagram, LinkedIn oder Blogs teilen möchten, nutzen Sie unser Bildkonvertierungstool. Wir konvertieren ganze Seiten in hochauflösende JPEG-Bilder und bewahren die Lesbarkeit des Textes weitaus besser als ein einfacher Screenshot.'
                    },
                    {
                        title: '4. Sicherheit auf Enterprise-Niveau: 100 % lokale Logik',
                        content: 'Haben Sie Bedenken beim Hochladen vertraulicher Verträge oder persönlicher Daten? UltraUtils nutzt die pdf-lib-Technologie, um alle Bearbeitungen vollständig im Speicher Ihres Browsers durchzuführen. Es werden keine Dateidaten auf unsere Server hochgeladen, sodass Ihre Daten absolut privatsphäregeschützt bleiben.'
                    }
                ],
                faq: [
                    { q: 'Gibt es ein Limit für Dateigröße oder Anzahl?', a: 'Obwohl es keine festen Limits gibt, empfehlen wir für ein reibungsloses Erlebnis das Zusammenfügen von bis zu 50 Dateien oder 100 MB. Das tatsächliche Limit hängt von der RAM-Kapazität Ihres Geräts ab.' },
                    { q: 'Kann ich die Bildqualität bei der Konvertierung in JPG anpassen?', a: 'Wir bieten eine hochauflösende Standardeinstellung (2,0x Viewport-Skalierung), die eine professionelle Textklarheit gewährleistet und Ihnen perfekte Ergebnisse ohne komplexe Einstellungen liefert.' },
                    { q: 'Werden passwortgeschützte PDFs unterstützt?', a: 'Aus Sicherheitsgründen können verschlüsselte Dateien nicht direkt verarbeitet werden. Bitte entschlüsseln Sie Ihre Dateien vor dem Hochladen zur Bearbeitung.' },
                    { q: 'Wo werden meine verarbeiteten Dateien gespeichert?', a: 'Dateien werden sofort im Download-Ordner Ihres Geräts gespeichert. Wir speichern keine Daten unsererseits, und alle Sitzungsdaten werden gelöscht, sobald Sie den Tab schließen.' }
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
        houseAds: { bgRemoverTitle: 'HG Entferner Pro', bgRemoverDesc: 'KI-Präzision sofort.', pdfMasterTitle: 'PDF Meister', pdfMasterDesc: 'Trennen & Zusammenfügen.', imageCompTitle: 'Kompression Pro', imageCompDesc: 'Leichtgewicht ohne Verlust.', ytGrabTitle: 'Thumbnail HD', ytGrabDesc: 'Einfach runterladen & editieren.', coffeeTitle: 'Kaffee spendieren', coffeeDesc: 'Unterstützen Sie uns.' }
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
        },
        navbar: {
            title: 'Moje Narzędzia',
            home: 'Start',
            imageSuite: 'Mistrz Obrazu',
            promptGen: 'Generator Promptów',
            ytGrab: 'Pobieranie YT',
            qrGen: 'Generator QR',
            textConv: 'Konwerter Tekstu',
            bgRemover: 'Usuń Tło',
            ytPlanner: 'Planer YT',
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
            downloadPng: 'Zapisz PNG',
            vectorReady: 'Przygotowanie wektora...',
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
            scaleLabel: 'Skala',
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
            title: 'Mistrz PDF',
            desc: 'Łącz, dziel i konwertuj dokumenty PDF.',
            merge: 'Łączenie PDF',
            split: 'Dzielenie PDF',
            toImage: 'PDF do Obrazu',
            uploadMsg: 'Upuść plik PDF tutaj',
            filesSelected: 'wybranych plików',
            mergeNow: 'Połącz teraz',
            splitNow: 'Podziel teraz',
            downloadMerged: 'Pobierz połączony PDF',
            downloadSplit: 'Pobierz podzielone pliki',
            addMore: 'Dodaj więcej',
            guide: {
                title: 'Przewodnik PDF',
                subtitle: 'Profesjonalne zarządzanie',
                sections: [
                    {
                        title: '1. Zaawansowane łączenie plików PDF i optymalizacja metadanych',
                        content: 'Zarządzanie rozproszonymi dokumentami to kluczowa część każdego przepływu pracy. UltraUtils PDF Master pozwala łączyć wiele plików PDF przy zachowaniu niestandardowej kolejności i normalizacji metadanych w celu uzyskania stabilnego wyniku. Idealny do porządkowania raportów, portfolio lub dużych struktur akademickich przed ostatecznym złożeniem.'
                    },
                    {
                        title: '2. Precyzyjne dzielenie stron w celu ekstrakcji treści',
                        content: 'Potrzebujesz tylko konkretnego rozdziału lub pojedynczej strony z ogromnego dokumentu? Nasze narzędzie do dzielenia natychmiast rozdziela każdą stronę na osobne pliki PDF i pakuje je w wygodny plik ZIP. To najskuteczniejszy sposób na wyodrębnienie i udostępnienie tylko tego, co niezbędne.'
                    },
                    {
                        title: '3. Konwersja wsadowa PDF do obrazu (JPG) w wysokiej rozdzielczości',
                        content: 'Gdy musisz udostępnić treść PDF na platformach zorientowanych wizualnie, takich jak Instagram, LinkedIn lub blogi, skorzystaj z naszego narzędzia do konwersji obrazów. Konwertujemy całe strony na obrazy JPEG o wysokiej rozdzielczości, zachowując czytelność tekstu znacznie lepiej niż zwykły zrzut ekranu.'
                    },
                    {
                        title: '4. Bezpieczeństwo klasy korporacyjnej: 100% lokalna logika',
                        content: 'Obawiasz się przesyłania poufnych umów lub danych osobowych? UltraUtils wykorzystuje technologię pdf-lib do wykonywania wszystkich edycji w całości w pamięci przeglądarki. Nawet 1 KB danych pliku nie trafia na nasze serwery, co gwarantuje, że Twoje dane pozostają naprawdę prywatne.'
                    }
                ],
                faq: [
                    { q: 'Czy istnieje limit rozmiaru lub liczby plików?', a: 'Choć nie ma sztywnych limitów, zalecamy łączenie do 50 plików lub 100 MB dla najbardziej płynnego działania. Rzeczywisty limit zależy od pojemności pamięci RAM urządzenia.' },
                    { q: 'Czy mogę dostosować jakość obrazu podczas konwersji na JPG?', a: 'Zapewniamy domyślną wysoką rozdzielczość (skala Viewport 2.0x), która gwarantuje profesjonalną czystość tekstu, dając doskonałe wyniki bez potrzeby skomplikowanych ustawień.' },
                    { q: 'Czy obsługuje pliki PDF chronione hasłem?', a: 'Ze względów bezpieczeństwa zaszyfrowane pliki nie mogą być przetwarzane bezpośrednio. Przed przesłaniem do edycji należy odszyfrować pliki.' },
                    { q: 'Gdzie są przechowywane moje przetworzone pliki?', a: 'Pliki są natychmiast zapisywane w folderze Pobrane na Twoim urządzeniu. Nie przechowujemy żadnych danych po naszej stronie, a wszystkie dane sesji są usuwane po zamknięciu karty.' }
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
        houseAds: { bgRemoverTitle: 'Usuwanie Tła Pro', bgRemoverDesc: 'Precyzja AI natychmiast.', pdfMasterTitle: 'Mistrz PDF', pdfMasterDesc: 'Łącz i dziel bez stresu.', imageCompTitle: 'Kompresja Pro', imageCompDesc: 'Lekkość bez starty jakości.', ytGrabTitle: 'Miniatury HD', ytGrabDesc: 'Pobieraj i edytuj łatwo.', coffeeTitle: 'Postaw kawę', coffeeDesc: 'Wesprzyj naszą pracę.' }
    }
};
