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
        reset: string;
        zoom: string;
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
    },
    privacy: {
        title: string;
        lastUpdated: string;
        content: string;
    },
    terms: {
        title: string;
        lastUpdated: string;
        content: string;
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
        },
        imageMaster: {
            title: '이미지 마스터 슈트',
            desc: '품질 저하 없이 이미지를 압축하고, 크기를 조절하며, 선명도를 개선하세요.',
            quality: '압축 품질',
            size: '크기 조절',
            width: '너비',
            height: '높이',
            smartEnhance: '스마트 개선',
            smartEnhanceDesc: 'AI를 사용하여 압축 후 흐릿해진 테두리를 자동으로 복원합니다.',
            original: '원본',
            optimized: '최적화 결과',
            saveMsg: '{percent}% 절약',
            applyOptimize: '적용 및 최적화',
            downloadOptimized: '최적화 이미지 다운로드',
            guide: {
                title: '이미지 최적화 및 압축 완벽 가이드',
                subtitle: '품질 저하 없이 웹사이트 속도를 높이는 이미지 관리법',
                sections: [
                    {
                        title: '이미지 압축이 중요한 이유',
                        content: '이미지는 웹사이트 용량의 60% 이상을 차지합니다. 고품질을 유지하면서 용량을 줄이면 사이트 로딩 속도가 빨라지고 SEO 순위도 올라갑니다.'
                    },
                    {
                        title: '스마트 개선 기능 활용하기',
                        content: '우리 도구의 AI 스마트 개선 기능을 켜면, 압축 과정에서 손실될 수 있는 미세한 디테일을 복원하여 훨씬 더 선명한 결과물을 얻을 수 있습니다.'
                    }
                ],
                faq: [
                    { q: '최대 파일 크기 제한이 있나요?', a: '약 10MB 이하의 이미지를 권장하며, 모든 처리는 브라우저에서 안전하게 수행됩니다.' },
                    { q: 'PNG 파일도 압축되나요?', a: '네, JPEG 뿐만 아니라 PNG 형식도 스마트하게 압축하여 투명도를 유지하면서 용량을 줄여줍니다.' }
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
            }
        },
        ytGrab: {
            title: 'YouTube 썸네일 추출기',
            desc: '단 몇 초 만에 고화질 YouTube 썸네일을 가져오세요.',
            placeholder: 'YouTube URL을 여기에 붙여넣으세요...',
            getBtn: '썸네일 가져오기',
            invalidUrl: '유효하지 않은 YouTube URL입니다. 다시 확인해 주세요.',
            fetching: '썸네일을 불러오는 중...',
            downloadHd: '고화질 다운로드',
            editBtn: '프로 편집',
            guide: {
                title: 'YouTube 썸네일 추출기 완벽 가이드',
                subtitle: '고화질 썸네일을 안전하고 빠르게 다운로드하는 방법',
                sections: [
                    {
                        title: '썸네일 추출기 사용 방법',
                        content: '1. 다운로드하고 싶은 YouTube 비디오 또는 Shorts의 URL을 복사합니다.\n2. 위의 입력창에 URL을 붙여넣습니다.\n3. \'썸네일 가져오기\' 버튼을 클릭합니다.\n4. 생성된 이미지 중 원하는 해상도(HD, SD 등)의 다운로드 버튼을 누릅니다.'
                    },
                    {
                        title: '주요 특징',
                        content: '• 4K 및 Full HD 해상도 지원\n• YouTube Shorts 영상 완벽 지원\n• 가입이나 로그인 없이 100% 무료 사용\n• 기기에 직접 저장되는 안전한 방식'
                    },
                    {
                        title: '저작권 주의사항',
                        content: '추출된 썸네일의 저작권은 해당 영상의 크리에이터에게 있습니다. 개인적인 참고용이 아닌 상업적 이용이나 재배포 시에는 반드시 원작자의 허가가 필요합니다.'
                    }
                ],
                faq: [
                    { q: '최대 해상도는 얼마인가요?', a: '영상이 지원하는 경우 최대 1920x1080(HD) 해상도까지 추출 가능합니다.' },
                    { q: 'Shorts 영상도 가능한가요?', a: '네, 일반 영상과 동일하게 URL만 입력하면 Shorts 썸네일도 가져올 수 있습니다.' },
                    { q: '이미지가 안 나와요.', a: 'URL이 정확한지 확인해 주세요. 비공개 영상이나 삭제된 영상은 썸네일을 가져올 수 없습니다.' }
                ]
            }
        },
        qrGen: {
            title: '프리미엄 QR 생성기',
            desc: '비즈니스나 SNS를 위한 아름다운 브랜드 QR 코드를 몇 초 만에 만들어보세요.',
            target: '연결할 URL 또는 텍스트',
            fgColor: '전경 색상',
            bgColor: '배경 색상',
            size: 'QR 크기',
            downloadPng: 'PNG로 다운로드',
            vectorReady: '고해상도 벡터 준비 완료',
            guide: {
                title: '전문적인 QR 코드 활용 가이드',
                subtitle: '비즈니스와 마케팅을 위한 고품질 QR 코드 만들기',
                sections: [
                    {
                        title: 'QR 코드 색상 선택 팁',
                        content: '전경(Foreground) 색상은 어둡게, 배경(Background) 색상은 밝게 설정하는 것이 인식률이 가장 높습니다. 대비가 확실할수록 멀리서도 잘 스캔됩니다.'
                    },
                    {
                        title: '사용 가능한 곳',
                        content: '• 명함 및 리플렛\n• 레스토랑 메뉴판\n• Wi-Fi 자동 연결\n• SNS 프로필 링크'
                    }
                ],
                faq: [
                    { q: 'QR 코드가 스캔이 안 돼요.', a: '색상 대비가 충분한지 확인해 주세요. 로고를 너무 크게 넣거나 배경이 너무 어두우면 인식이 어려울 수 있습니다.' },
                    { q: '링크를 나중에 바꿀 수 있나요?', a: '본 도구는 정적 QR 코드를 생성하므로, 한 번 생성된 코드의 내용은 변경할 수 없습니다.' }
                ]
            }
        },
        textConverter: {
            title: '궁극의 텍스트 변환기',
            desc: '대소문자 변경, 글자수 세기, 인코딩 변환 등 모든 텍스트 작업을 한 곳에서 해결하세요.',
            inputPlaceholder: '여기에 텍스트를 입력하거나 붙여넣으세요...',
            statsCharacters: '글자수',
            statsWords: '단어수',
            statsLines: '줄수',
            categoryCase: '대소문자 변환',
            categoryCleanup: '텍스트 정리',
            categoryWeb: '웹/인코딩',
            categoryData: '데이터 정렬',
            btnUppercase: '대문자로',
            btnLowercase: '소문자로',
            btnCapitalize: '첫 글자 대문자',
            btnTrim: '공백 제거',
            btnRemoveEmpty: '빈 줄 제거',
            btnRemoveDupes: '중복 줄 제거',
            btnRemoveDupesWords: '중복 단어 제거',
            btnUrlEncode: 'URL 인코딩',
            btnUrlDecode: 'URL 디코딩',
            btnBase64Encode: 'Base64 인코딩',
            btnBase64Decode: 'Base64 디코딩',
            btnJsonFormat: 'JSON 정렬',
            btnSortAz: '가나다 정렬',
            btnSortZa: '역순 정렬',
            btnCopy: '결과 복사',
            btnCopied: '복사됨!',
            btnClear: '내용 지우기',
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
            reset: '초기화',
            zoom: '확대/축소',
            guide: {
                title: 'AI 배경 제거 및 누끼 따기 가이드',
                subtitle: '인공지능으로 복잡한 배경도 단 5초 만에 제거하세요',
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
            desc: 'PDF 합치기, 나누기 및 변환을 위한 강력한 도구 모음입니다.',
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
            desc: 'UltraUtils의 글로벌 크리에이터 커뮤니티에 당신의 제품을 소개하세요.',
            slotsTitle: '사용 가능한 광고 슬롯',
            formTitle: '상세 문의하기',
            name: '성함/기업명',
            email: '이메일 주소',
            dates: '희망 광고 기간',
            message: '문의 내용 (광고 링크 등)',
            submit: '문의 보내기',
            success: '문의가 성공적으로 전달되었습니다. 곧 연락드리겠습니다!',
            slotTop: '상단 프리미엄 배너',
            slotSide: '측정 사이드 스카이스크래퍼',
            slotBottom: '하단 고정 배너',
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
        },
        privacy: {
            title: '개인정보처리방침',
            lastUpdated: '최종 수정일: 2026년 2월 13일',
            content: 'UltraUtils는 사용자의 개인정보를 소중히 여깁니다. 본 서비스는 별도의 회원가입 없이 이용 가능하며, 어떠한 개인정보도 서버에 저장하지 않습니다. 모든 이미지 처리 작업은 브라우저 내에서 안전하게 수행됩니다.',
        },
        terms: {
            title: '이용약관',
            lastUpdated: '최종 수정일: 2026년 2월 13일',
            content: '본 서비스를 이용함으로써 귀하는 본 약관에 동의하게 됩니다. 본 서비스는 개인적 및 상업적 용도로 자유롭게 사용 가능합니다. 단, 서비스의 안정적인 운영을 방해하는 행위는 금지됩니다.',
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
        },
        imageMaster: {
            title: 'Image Master Suite',
            desc: 'Compress, resize, and enhance your images without losing quality.',
            quality: 'Compression Quality',
            size: 'Resize Dimensions',
            width: 'Width',
            height: 'Height',
            smartEnhance: 'Smart Enhance',
            smartEnhanceDesc: 'Uses AI algorithms to restore edges and clarity lost during compression.',
            original: 'Original',
            optimized: 'Optimized',
            saveMsg: '{percent}% Saved',
            applyOptimize: 'Apply & Optimize',
            downloadOptimized: 'Download Optimized',
            guide: {
                title: 'Ultimate Image Optimization & Compression Guide',
                subtitle: 'Supercharge your website speed without losing image quality',
                sections: [
                    {
                        title: 'Why Image Compression Matters',
                        content: 'Images often make up over 60% of a website\'s total weight. Reducing file sizes while maintaining quality speeds up your site and improves SEO rankings.'
                    },
                    {
                        title: 'Leveraging AI Smart Enhance',
                        content: 'Enable our AI Smart Enhance to restore micro-details potentially lost during compression, ensuring professional-grade results every time.'
                    }
                ],
                faq: [
                    { q: 'Is there a file size limit?', a: 'We recommend images under 10MB. All processing happens securely in your browser.' },
                    { q: 'Can I compress PNG files?', a: 'Yes! Our tool intelligently compresses both JPEG and PNG files, preserving transparency while reducing size.' }
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
            }
        },
        ytGrab: {
            title: 'YouTube Thumbnail Grabber',
            desc: 'Get high-quality thumbnails from any YouTube video or Shorts.',
            placeholder: 'Paste YouTube URL (Video or Shorts)',
            getBtn: 'Grab Thumbnail',
            invalidUrl: 'Please enter a valid YouTube URL',
            fetching: 'Fetching thumbnail...',
            downloadHd: 'Download Max Res',
            editBtn: 'Pro Edit',
            guide: {
                title: 'Ultimate YouTube Thumbnail Grabber Guide',
                subtitle: 'How to download high-quality thumbnails safely and instantly',
                sections: [
                    {
                        title: 'How to Grab Thumbnails',
                        content: '1. Copy the URL of the YouTube video or Shorts you want.\n2. Paste the URL into the input field above.\n3. Click the \'Grab Thumbnail\' button.\n4. Choose your preferred resolution and click download.'
                    },
                    {
                        title: 'Key Features',
                        content: '• Supports up to 4K and Full HD resolution\n• Fully compatible with YouTube Shorts\n• 100% Free - No registration or login required\n• Safe & Secure direct downloads'
                    },
                    {
                        title: 'Copyright Notice',
                        content: 'The copyright of the thumbnail belongs to the original creator. Permission from the author is required for commercial use or redistribution.'
                    }
                ],
                faq: [
                    { q: 'What is the maximum resolution?', a: 'You can extract up to 1920x1080 (HD) depending on the video quality.' },
                    { q: 'Does it work for Shorts?', a: 'Yes, it works perfectly for YouTube Shorts just like regular videos.' },
                    { q: 'Why is the thumbnail not showing?', a: 'Please double-check the URL. Private or deleted videos cannot be accessed.' }
                ]
            }
        },
        qrGen: {
            title: 'Premium QR Generator',
            desc: 'Create beautiful, branded QR codes for your business or social media in seconds.',
            target: 'Target URL or Text',
            fgColor: 'Foreground Color',
            bgColor: 'Background Color',
            size: 'QR Size',
            downloadPng: 'Download PNG',
            vectorReady: 'High Definition Vector Ready',
            guide: {
                title: 'Professional QR Code Usage Guide',
                subtitle: 'Create high-quality QR codes for business and marketing',
                sections: [
                    {
                        title: 'Color Contrast Tips',
                        content: 'For best scan results, always use a dark foreground color and a light background color. High contrast ensures better readability from a distance.'
                    },
                    {
                        title: 'Where to Use',
                        content: '• Business Cards & Flyers\n• Restaurant Menus\n• Automatic Wi-Fi connection\n• Social Media profile links'
                    }
                ],
                faq: [
                    { q: 'Why is my QR code not scanning?', a: 'Check the color contrast. If the logo is too large or the background is too dark, scanners might struggle to read the data.' },
                    { q: 'Can I change the link later?', a: 'This tool creates static QR codes, meaning the content is permanent and cannot be changed after creation.' }
                ]
            }
        },
        textConverter: {
            title: 'Ultimate Text Converter',
            desc: 'Transform case, count stats, encode data, and cleanup text instantly.',
            inputPlaceholder: 'Type or paste your text here...',
            statsCharacters: 'Characters',
            statsWords: 'Words',
            statsLines: 'Lines',
            categoryCase: 'Case Transformation',
            categoryCleanup: 'Text Cleanup',
            categoryWeb: 'Web & Encoding',
            categoryData: 'Data Tools',
            btnUppercase: 'UPPERCASE',
            btnLowercase: 'lowercase',
            btnCapitalize: 'Capitalize',
            btnTrim: 'Trim Spaces',
            btnRemoveEmpty: 'Remove Empty Lines',
            btnRemoveDupes: 'Remove Duplicates',
            btnRemoveDupesWords: 'Remove Dupe Words',
            btnUrlEncode: 'URL Encode',
            btnUrlDecode: 'URL Decode',
            btnBase64Encode: 'Base64 Encode',
            btnBase64Decode: 'Base64 Decode',
            btnJsonFormat: 'JSON Prettify',
            btnSortAz: 'Sort A-Z',
            btnSortZa: 'Sort Z-A',
            btnCopy: 'Copy Result',
            btnCopied: 'Copied!',
            btnClear: 'Clear All',
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
            reset: 'Reset',
            zoom: 'Zoom',
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
            title: 'PDF Master',
            desc: 'Powerful tools to merge, split, and convert your PDFs.',
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
        },
        privacy: {
            title: 'Privacy Policy',
            lastUpdated: 'Last Updated: Feb 13, 2026',
            content: 'UltraUtils values your privacy. This service can be used without registration, and we do not store any personal data on our servers. All image processing is performed securely within your browser.',
        },
        terms: {
            title: 'Terms of Service',
            lastUpdated: 'Last Updated: Feb 13, 2026',
            content: 'By using this service, you agree to these terms. This service is free for both personal and commercial use. Any activity that disrupts the stable operation of the service is prohibited.',
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
            title: '高级二维码生成器',
            desc: '几秒钟内为您的业务或社交媒体创建精美的品牌二维码。',
            target: '目标网址或文本',
            fgColor: '前景色',
            bgColor: '背景色',
            size: '尺寸',
            downloadPng: '下载 PNG',
            vectorReady: '高清矢量就绪',
            guide: {
                title: '专业二维码使用指南',
                subtitle: '为业务和营销创建高质量二维码',
                sections: [
                    {
                        title: '颜色对比度建议',
                        content: '为了获得最佳扫描效果，请务必使用深色前景和浅色背景。高对比度可确保在较远距离也易于识别。'
                    },
                    {
                        title: '应用场景',
                        content: '• 商务名片与传单\n• 餐厅菜单\n• 自动 Wi-Fi 连接\n• 社交媒体个人资料链接'
                    }
                ],
                faq: [
                    { q: '为什么二维码无法扫描？', a: '请检查颜色对比度。如果 Logo 过大或背景过深，扫描器可能无法正确读取数据。' },
                    { q: '以后可以更改链接吗？', a: '此工具创建的是静态二维码，意味着内容是永久性的，生成后无法更改。' }
                ]
            }
        },
        textConverter: {
            title: '终极文本转换器',
            desc: '即时转换大小写、统计字数、编码数据并清理文本。',
            inputPlaceholder: '在此输入或粘贴文本...',
            statsCharacters: '字符数',
            statsWords: '单词数',
            statsLines: '行数',
            categoryCase: '大小写转换',
            categoryCleanup: '文本清理',
            categoryWeb: '网页与编码',
            categoryData: '数据工具',
            btnUppercase: '大写',
            btnLowercase: '小写',
            btnCapitalize: '首字母大写',
            btnTrim: '修剪空格',
            btnRemoveEmpty: '删除空行',
            btnRemoveDupes: '删除重复行',
            btnRemoveDupesWords: '删除重复词',
            btnUrlEncode: 'URL 编码',
            btnUrlDecode: 'URL 解码',
            btnBase64Encode: 'Base64 编码',
            btnBase64Decode: 'Base64 解码',
            btnJsonFormat: 'JSON 美化',
            btnSortAz: '正序排序',
            btnSortZa: '倒序排序',
            btnCopy: '复制结果',
            btnCopied: '已复制！',
            btnClear: '清空内容',
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
            reset: '重置',
            zoom: '缩放',
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
            desc: '强大的 PDF 合并、拆分和转换工具。',
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
            slotTop: '顶部优质横幅',
            slotSide: '侧边摩天大楼 (固定)',
            slotBottom: '底部固定横幅',
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
        },
        privacy: {
            title: '隐私政策',
            lastUpdated: '最后更新: 2026年2月13일',
            content: 'UltraUtils 重视您的隐私。本服务无需注册即可使用，我们不会在服务器上存储任何个人数据。所有图像处理均在您的浏览器中安全执行。',
        },
        terms: {
            title: '服务条款',
            lastUpdated: '最后更新: 2026年2月13일',
            content: '使用本服务即表示您同意这些条款。本服务可免费用于个人和商业用途。禁止任何干扰服务稳定运行的行为。',
        }
    }
};
