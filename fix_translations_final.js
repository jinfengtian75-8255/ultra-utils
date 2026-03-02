const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src/lib/translations.ts');

const content = `export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'es' | 'de' | 'pl';

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
    };
    navbar: {
        title: string;
        ytPlanner: string;
        ytGrab: string;
        qrGen: string;
        imageSuite: string;
        promptGen: string;
        textConv: string;
        bgRemover: string;
        imageRestorer: string;
        pdfMaster: string;
        home: string;
    };
    allTools: string;
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
    };
    qrGen: {
        title: string;
        desc: string;
        target: string;
        fgColor: string;
        bgColor: string;
        size: string;
        downloadPng: string;
        downloadSvg: string;
    };
    promptGen: {
        title: string;
        desc: string;
        subject: string;
        style: string;
        stylePlaceholder: string;
        platform: string;
        aspect: string;
        generate: string;
        copy: string;
        placeholder: string;
    };
    ytGrab: {
        title: string;
        desc: string;
        urlPlaceholder: string;
        grabBtn: string;
        invalidUrl: string;
        resolutions: {
            max: string;
            high: string;
            medium: string;
            standard: string;
        };
    };
    textConverter: {
        title: string;
        desc: string;
        inputLabel: string;
        outputLabel: string;
        toUpper: string;
        toLower: string;
        removeSpaces: string;
        reverse: string;
        countChars: string;
        copy: string;
    };
    bgRemover: {
        title: string;
        desc: string;
        original: string;
        noBg: string;
        manualRefine: string;
        brushSize: string;
        brushStrength: string;
        bgColor: string;
        addOutline: string;
        outlineColor: string;
        outlineSize: string;
        fontFamily: string;
        fontSize: string;
        fontColor: string;
        fontWeight: string;
        fontStyle: string;
        fontDecoration: string;
        textAlign: string;
        lineHeight: string;
        letterSpacing: string;
        textShadow: string;
        textOutline: string;
        textBackground: string;
        textPadding: string;
        textBorderRadius: string;
        textOpacity: string;
        textRotate: string;
        textZIndex: string;
        textPosition: string;
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
    };
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
    };
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
            [key: string]: { title: string; desc: string };
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
            tips: { title: string; desc: string; tool: string; href: string }[];
        };
        nextStep: string;
        suggestNext: string;
        installPwa: string;
        installPwaDesc: string;
        installBtn: string;
        recentTools: string;
    };
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
    };
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
    };
    privacy: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
    terms: {
        title: string;
        lastUpdated: string;
        sections: { title: string; content: string }[];
    };
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
    };
    contact: {
        title: string;
        subtitle: string;
        desc: string;
        infoTitle: string;
        infoEmail: string;
        infoResponse: string;
    };
    notFound: {
        title: string;
        desc: string;
        backHome: string;
    };
    feedback: {
        title: string;
        useful: string;
        neutral: string;
        improve: string;
        placeholder: string;
        submit: string;
        success: string;
        commitment: string;
    };
    share: {
        title: string;
        copy: string;
        copied: string;
        twitter: string;
        facebook: string;
        whatsapp: string;
    };
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
        gaming: string;
        review: string;
        shorts: string;
        resultsTitle: string;
        copyAll: string;
        allCopied: string;
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
    };
}

const enBase = {
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
        ytPlanner: 'YT Planner',
        ytGrab: 'YT Grabber',
        qrGen: 'QR Generator',
        imageSuite: 'Image Suite',
        promptGen: 'Prompt Gen',
        textConv: 'Text Conv',
        bgRemover: 'AI Remover',
        imageRestorer: 'AI Image Restorer',
        pdfMaster: 'PDF Master',
        home: 'Home',
    },
    allTools: 'All Tools',
    screenRecorder: {
        title: 'Online Screen Recorder',
        desc: 'Record your screen, webcam, and microphone directly in the browser and save as MP4 without installing any software.',
        startBtn: 'Start Recording',
        stopBtn: 'Stop Recording',
        downloadBtn: 'Save Video (MP4)',
        webcam: 'Include Webcam',
        mic: 'Use Microphone',
        recording: 'Recording...',
        ready: 'Ready to Record',
        guide: {
            title: 'Web Screen Recording Guide',
            subtitle: 'Tips for creating high-quality lectures and tutorials',
            sections: [
                { title: '1. Why no-install matters', content: 'Record safely within the browser security environment without worrying about viruses.' },
                { title: '2. Using camera overlay', content: 'Show your face on screen to build trust with your audience.' }
            ],
            faq: [
                { q: 'Is there a time limit?', a: 'You can record as long as your memory allows, but we recommend under 1 hour for stability.' }
            ]
        }
    },
    revenueCalc: {
        title: 'YouTube Revenue & Growth Calculator',
        desc: 'Calculate your estimated channel revenue and receive a professional growth strategy report.',
        views: 'Daily Estimated Views',
        cpm: 'Estimated CPM ($)',
        calculate: 'Analyze Revenue',
        resultDaily: 'Daily Estimated Revenue',
        resultMonthly: 'Monthly Estimated Revenue',
        resultYearly: 'Yearly Estimated Revenue',
        growthTip: 'Growth Acceleration Tips',
        guide: {
            title: 'Maximizing YouTube Revenue Guide',
            subtitle: 'Strategies to increase your Revenue Per Mille (RPM)',
            sections: [
                { title: '1. CPM vs RPM', content: 'Advertising rates vary by niche. Focus on high-RPM topics like finance or tech.' },
                { title: '2. Watch Time Importance', content: 'Videos over 8 minutes allow for mid-roll ads, which can significantly boost earnings.' }
            ],
            faq: [
                { q: 'Are these numbers 100% accurate?', a: 'These are estimates based on platform benchmarks. Actual earnings depend on audience demographics.' }
            ]
        }
    },
    imageMaster: {
        title: 'Image Master PRO',
        desc: 'Professional image optimization and compression without quality loss.',
        quality: 'Quality (%)',
        size: 'Expected Size',
        width: 'Width',
        height: 'Height',
        smartEnhance: 'Smart SEO Enhance',
        smartEnhanceDesc: 'Optimize metadata for search engines',
        original: 'Original',
        optimized: 'Optimized',
        saveMsg: 'Image saved to downloads',
        applyOptimize: 'Optimize Image',
        downloadOptimized: 'Download PNG/WebP',
        guide: {
            title: 'Pro Image Optimization Guide',
            subtitle: 'Boost your site speed and SEO rankings',
            sections: [
                { title: '1. Why WebP is better', content: 'WebP provides superior lossless and lossy compression for images on the web.' },
                { title: '2. SEO Metadata Tips', content: 'Always use descriptive alt tags and file names for better image search visibility.' }
            ],
            faq: [
                { q: 'Is my data safe?', a: 'Yes, processing happens 100% locally in your browser.' }
            ]
        }
    },
    qrGen: {
        title: 'Premium QR Generator',
        desc: 'Create professional, branded QR codes for your business and social media.',
        target: 'Target URL',
        fgColor: 'Foreground Color',
        bgColor: 'Background Color',
        size: 'Size (px)',
        downloadPng: 'Download PNG',
        downloadSvg: 'Download SVG',
    },
    promptGen: {
        title: 'AI Prompt Master',
        desc: 'Generate high-performance prompts for Midjourney, DALL-E, and ChatGPT.',
        subject: 'Main Subject',
        style: 'Art Style',
        stylePlaceholder: 'e.g., Cyberpunk, Oil Painting...',
        platform: 'Target Platform',
        aspect: 'Aspect Ratio',
        generate: 'Create Prompt',
        copy: 'Copy to Clipboard',
        placeholder: 'Generated prompt will appear here...',
    },
    ytGrab: {
        title: 'YouTube Thumbnail Grabber',
        desc: 'Extract high-resolution thumbnails from any YouTube video in seconds.',
        urlPlaceholder: 'Paste YouTube link here...',
        grabBtn: 'Extract Thumbnails',
        invalidUrl: 'Please enter a valid YouTube URL',
        resolutions: {
            max: 'HD Max (1080p)',
            high: 'High Quality',
            medium: 'Medium',
            standard: 'Standard',
        },
    },
    textConverter: {
        title: 'Smart Text Tool',
        desc: 'Clean, format, and transform your text data instantly.',
        inputLabel: 'Input Text',
        outputLabel: 'Transformed Text',
        toUpper: 'UPPERCASE',
        toLower: 'lowercase',
        removeSpaces: 'Trim Spaces',
        reverse: 'Reverse',
        countChars: 'Count Chars',
        copy: 'Copy Result',
    },
    bgRemover: {
        title: 'AI Background Remover',
        desc: 'Remove backgrounds instantly using professional-grade AI.',
        original: 'Original Image',
        noBg: 'AI Cutout Result',
        manualRefine: 'Manual Refine Mode',
        brushSize: 'Brush Size',
        brushStrength: 'Strength',
        bgColor: 'Background Color',
        addOutline: 'Add Border',
        outlineColor: 'Border Color',
        outlineSize: 'Thickness',
        fontFamily: 'Font',
        fontSize: 'Size',
        fontColor: 'Color',
        fontWeight: 'Weight',
        fontStyle: 'Style',
        fontDecoration: 'Decoration',
        textAlign: 'Align',
        lineHeight: 'Line Height',
        letterSpacing: 'Spacing',
        textShadow: 'Shadow',
        textOutline: 'Outline',
        textBackground: 'BG Color',
        textPadding: 'Padding',
        textBorderRadius: 'Radius',
        textOpacity: 'Opacity',
        textRotate: 'Rotate',
        textZIndex: 'Z-Index',
        textPosition: 'Position',
        fontSerif: 'Serif',
        fontMono: 'Mono',
        fontHandwriting: 'Handwriting',
        fontDefault: 'Default',
        smartTrim: 'Smart Trim',
        smoothStream: 'Smooth Stream',
        guide: {
            title: 'AI Background Removal Guide',
            subtitle: 'Perfect cutouts in 5 seconds',
            sections: [
                { title: '1. AI Precision', content: 'Our AI model is trained on millions of images for pixel-perfect results.' }
            ],
            faq: [
                { q: 'Is it free?', a: 'Yes, 100% free with no limits.' }
            ]
        }
    },
    pdfMaster: {
        title: 'PDF Master PRO',
        desc: 'The ultimate toolkit for merging, splitting, and securing PDF files.',
        merge: 'Merge PDF',
        split: 'Split PDF',
        toImage: 'PDF to Image',
        rotate: 'Rotate PDF',
        protect: 'Unlock/Lock PDF',
        uploadMsg: 'Select or drag PDF files',
        filesSelected: 'documents added',
        mergeNow: 'Merge All',
        splitNow: 'Extract Pages',
        rotateNow: 'Rotate All',
        protectNow: 'Apply Security',
        downloadMerged: 'Download Result',
        downloadSplit: 'Download ZIP',
        addMore: 'Add More',
        clear: 'Clear',
        pageRange: 'Range (e.g. 1-3)',
        password: 'Password',
        options: 'Options',
        processingMsg: 'Processing your document...',
        successMsg: 'Done!',
        guide: {
            title: 'PDF Management Guide',
            subtitle: 'Tips for secure and efficient PDF workflows',
            sections: [
                { title: '1. Local Security', content: 'Processing happens in-browser for maximum privacy.' }
            ],
            faq: [
                { q: 'File limit?', a: 'Up to 50MB per session for stability.' }
            ]
        }
    },
    home: {
        badge: 'Secure & Free Utilities',
        titlePrefix: 'Premium Tools for',
        titleSuffix: 'The Modern Web',
        desc: 'Professional-grade utility tools running locally in your browser.',
        descLine2: 'Privacy-focused, high-performance, and completely free.',
        launchTool: 'Start Now',
        missionTitle: 'Why Choose UltraUtils?',
        missionDesc1: 'We believe premium tools shouldn\'t cost your privacy or your wallet.',
        missionDesc2: 'All computations are handled on your device, ensuring total data security.',
        features: {
            privacy: { title: 'Privacy', desc: 'No data leaves your device' },
            speed: { title: 'Speed', desc: 'Instant local processing' },
            design: { title: 'Design', desc: 'Sleek, modern interface' },
            free: { title: 'Free', desc: 'No subscriptions required' }
        },
        footerNote: {
            title: 'Built for Efficiency',
            subtitle: 'Join thousands of users optimizing their workflow today.',
            media: { title: 'Media Suite', desc: 'Advanced image and video tools.' },
            data: { title: 'Data Tools', desc: 'Formatting and text utilities.' },
            design: { title: 'Design Suite', desc: 'QR and brand asset tools.' }
        },
        growthTips: {
            title: 'Productivity Insights',
            subtitle: 'Maximize your output with these expert tips.',
            tips: [
                { title: 'SEO Mastery', desc: 'Compress images properly to rank higher.', tool: 'Image Master', href: '/tools/image-compressor' }
            ]
        },
        nextStep: 'Recommended Tool',
        suggestNext: 'Check out our top-rated utility',
        installPwa: 'Install App',
        installPwaDesc: 'Access tools offline and from your home screen.',
        installBtn: 'Add to Screen',
        recentTools: 'Recently Used'
    },
    advertise: {
        title: 'Advertise',
        desc: 'Reach a global audience of creators and professionals.',
        slotsTitle: 'Ad Space',
        formTitle: 'Contact Us',
        name: 'Full Name',
        namePlaceholder: 'Your name...',
        email: 'Email',
        emailPlaceholder: 'you@example.com',
        dates: 'Duration',
        datesPlaceholder: 'Selected dates...',
        message: 'Message',
        messagePlaceholder: 'Tell us about your campaign...',
        submit: 'Send Request',
        success: 'Thanks! We will be in touch.',
        backToForm: 'Back',
        submitError: 'Error sending request.',
        slotTop: 'Main Header Banner',
        slotTopDesc: 'Maximum exposure on every page.',
        slotHome: 'Home Feed Native',
        slotHomeDesc: 'Blends into the tool grid.',
        slotSide: 'Sticky Sidebar',
        slotSideDesc: 'Constant visibility while working.',
        slotBottom: 'Footer Banner',
        slotBottomDesc: 'Lasting impression at page end.',
        pricePremium: 'Premium',
        priceHighCTR: 'High Reach',
        priceConversion: 'Dynamic',
        benefits: ['Targeted Audience', 'Brand Safety', 'Real-time Stats'],
        partnerMsg: 'Partner with the leading web utility suite.',
        faqTitle: 'Ad FAQ',
        faqDesc: 'Everything you need to know.',
        faq: [{ q: 'Rates?', a: 'Flexible based on slot and traffic.' }]
    },
    footer: {
        tools: 'Utilities',
        resources: 'Resources',
        legal: 'Legal',
        support: 'Support',
        privacy: 'Privacy',
        terms: 'Terms',
        advertise: 'Partner',
        coffee: 'Support Us',
        allRights: 'UltraUtils. All rights reserved.',
        social: 'Social',
        about: 'About',
        contact: 'Contact',
    },
    privacy: {
        title: 'Privacy Policy',
        lastUpdated: 'Feb 2026',
        sections: [{ title: 'Service Policy', content: 'We do not store your data. Period.' }]
    },
    terms: {
        title: 'Terms of Use',
        lastUpdated: 'Feb 2026',
        sections: [{ title: 'Usage', content: 'Tools are provided for free and lawful use.' }]
    },
    about: {
        title: 'About UltraUtils',
        subtitle: 'Our Vision',
        sections: [{ title: 'The Mission', content: 'Empowering users with local, high-speed tools.' }],
        stats: { free: 'Free', logs: 'No Logs', languages: 'Global', utilities: 'Pro' }
    },
    contact: {
        title: 'Contact',
        subtitle: 'Get in Touch',
        desc: 'We are here to help.',
        infoTitle: 'Email us at',
        infoEmail: 'official.ultrautils@gmail.com',
        infoResponse: 'We respond fast!'
    },
    notFound: {
        title: '404 - Not Found',
        desc: 'This page doesn\'t exist.',
        backHome: 'Home',
    },
    feedback: {
        title: 'Feedback',
        useful: 'Great!',
        neutral: 'OK',
        improve: 'Poor',
        placeholder: 'Tell us more...',
        submit: 'Send',
        success: 'Thanks!',
        commitment: 'We listen to you.'
    },
    share: {
        title: 'Share the Love',
        copy: 'Copy',
        copied: 'Copied',
        twitter: 'X',
        facebook: 'FB',
        whatsapp: 'WA',
    },
    ytPlanner: {
        title: 'AI Strategy',
        desc: 'Master YouTube growth.',
        placeholder: 'Enter topic...',
        generateBtn: 'Plan Now',
        generating: 'Thinking...',
        tabTitles: 'Titles',
        tabScripts: 'Scripts',
        tabTags: 'Tags',
        tabStrategy: 'Growth',
        videoType: 'Type',
        vlog: 'Vlog',
        info: 'Info',
        gaming: 'Game',
        review: 'Review',
        shorts: 'Short',
        resultsTitle: 'Your Plan',
        copyAll: 'Copy All',
        allCopied: 'Copied',
        guide: { title: 'Plan Guide', subtitle: 'How to grow', sections: [], faq: [] }
    },
    megaMenu: {
        title: 'Mega Menu',
        subtitle: 'All tools in one place',
        searchPlaceholder: 'Search...',
        noResults: 'Empty',
        totalTools: 'Tools'
    },
    houseAds: {
        bgRemoverTitle: 'AI Remover',
        bgRemoverDesc: 'Clean backgrounds fast.',
        pdfMasterTitle: 'PDF Master',
        pdfMasterDesc: 'Edit PDFs easily.',
        imageCompTitle: 'Compressor',
        imageCompDesc: 'Save space.',
        ytGrabTitle: 'Thumbnail',
        ytGrabDesc: 'Get images.',
        coffeeTitle: 'Donate',
        coffeeDesc: 'Buy me a coffee.',
        imageRestorerTitle: 'Restorer',
        imageRestorerDesc: 'Fix old photos.'
    }
};

const koBase = {
    ...enBase,
    common: {
        ...enBase.common,
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
        total: '전체',
    },
    navbar: {
        ...enBase.navbar,
        title: 'UltraUtils',
        ytPlanner: '유튜브 기획',
        ytGrab: '썸네일 추출',
        qrGen: 'QR 생성기',
        imageSuite: '이미지 툴',
        promptGen: '프롬프트 생성',
        textConv: '텍스트 변환',
        bgRemover: '배경 제거',
        imageRestorer: '이미지 복구',
        pdfMaster: 'PDF 마스터',
        home: '홈',
    },
    allTools: '모든 도구',
    screenRecorder: {
        ...enBase.screenRecorder,
        title: '무설치 웹 화면 녹화',
        desc: '소프트웨어 설치 없이 브라우저에서 직접 화면, 웹캠, 마이크를 녹화하고 MP4로 저장하세요.',
        startBtn: '녹화 시작',
        stopBtn: '녹화 중지',
        downloadBtn: '비디오 저장 (MP4)',
        webcam: '웹캠 포함',
        mic: '마이크 사용',
        recording: '녹화 중...',
        ready: '녹화 준비 완료',
        guide: {
            title: '웹 화면 녹화 가이드',
            subtitle: '고품질 강의 및 튜토리얼 제작 팁',
            sections: [
                { title: '1. 무설치의 장점', content: '브라우저 보안 환경 내에서 별도의 프로그램 설치 없이 바이러스 걱정 없이 안전하게 녹화하세요.' },
                { title: '2. 카메라 오버레이 활용', content: '화면 한구석에 얼굴을 노출하여 시청자와의 신뢰도를 높이고 더 생동감 있는 영상을 만드세요.' }
            ],
            faq: [
                { q: '녹화 시간 제한이 있나요?', a: '기기 메모리가 허용하는 한 계속 녹화할 수 있지만, 안정성을 위해 1시간 이내를 권장합니다.' }
            ]
        }
    },
    revenueCalc: {
        ...enBase.revenueCalc,
        title: '유튜브 수익 및 성장 계산기',
        desc: '채널의 예상 예상 수익을 계산하고 전문가급 성장 전략 리포트를 받아보세요.',
        views: '일일 예상 조회수',
        cpm: '예상 CPM ($)',
        calculate: '수익 분석하기',
        resultDaily: '일일 예상 수익',
        resultMonthly: '월간 예상 수익',
        resultYearly: '연간 예상 수익',
        growthTip: '성장 가속화 팁',
        guide: {
            title: '유튜브 수익 극대화 가이드',
            subtitle: '조회수당 수익(RPM)을 높이는 전략',
            sections: [
                { title: '1. CPM vs RPM', content: '광고주가 지불하는 단가보다 실제 내 채널에 정산되는 RPM을 관리하는 것이 더 중요합니다.' },
                { title: '2. 시청 지속 시간의 비밀', content: '8분 이상의 영상에 중간 광고를 전략적으로 배치하면 수익이 비약적으로 상승합니다.' }
            ],
            faq: [
                { q: '계산 결과가 100% 정확한가요?', a: '공식 데이터를 기반으로 한 추정치이며, 실제 수익은 국가 및 시청자 층에 따라 달라질 수 있습니다.' }
            ]
        }
    },
    megaMenu: {
        ...enBase.megaMenu,
        title: '모든 도구',
        subtitle: 'UltraUtils의 고성능 디지털 유틸리티를 한눈에 확인하세요',
        searchPlaceholder: '필요한 도구를 검색하세요...',
        noResults: '검색 결과가 없습니다',
        totalTools: '개의 프로 유틸리티 사용 가능',
    },
    advertise: {
        ...enBase.advertise,
        title: '광고 문의',
    }
};

const plBase = {
    ...enBase,
    common: {
        ...enBase.common,
        settings: 'Ustawienia',
        download: 'Pobierz',
    },
    navbar: {
        ...enBase.navbar,
        title: 'UltraUtils',
    },
    allTools: 'Wszystkie narzędzia',
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
        title: 'Kalkulator Zarobków YouTube',
        desc: 'Oblicz szacunkowe zarobki swojego kanału i otrzymaj profesjonalny raport strategii rozwoju.',
        views: 'Szacowana dzienna liczba wyświetleń',
        cpm: 'Szacowany CPM ($)',
        calculate: 'Analizuj przychody',
        resultDaily: 'Szacowany dzienny dochód',
        resultMonthly: 'Szacowany miesięczny dochód',
        resultYearly: 'Szacowany roczny dochód',
        growthTip: 'Wskazówki dotyczące rozwoju',
        guide: {
            title: 'Przewodnik po zarobkach',
            subtitle: 'Jak zwiększyć swoje RPM',
            sections: [],
            faq: []
        }
    }
};

const translations = {
    ko: koBase,
    en: enBase,
    zh: enBase,
    ja: enBase,
    es: enBase,
    de: enBase,
    pl: plBase
};

const finalFile = \`export type Language = 'ko' | 'en' | 'zh' | 'ja' | 'es' | 'de' | 'pl';

\${content.split('export const translations')[0].trim().replace('export type Language = \'ko\' | \'en\' | \'zh\' | \'ja\' | \'es\' | \'de\' | \'pl\';', '')}

export const translations: Record<Language, TranslationSchema> = \${JSON.stringify(translations, null, 4)};\`;

fs.writeFileSync(filePath, finalFile);
console.log('REBUILT FROM SCRATCH. CRASH FIXED.');
