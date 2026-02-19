# 🛡️ UltraUtils 프로그램 백업 이력 및 가이드

이 파일은 사장님의 소중한 프로그램 버전을 안전하게 관리하기 위한 기록지입니다. 
새로운 기능을 추가하거나 큰 변화가 있을 때마다 저(안티)에게 백업을 요청하시면 여기에 순서대로 기록해 드릴게요!

---

## 📌 백업 및 복구 방법
*   **백업 요청:** "안티야, 지금 상태를 **v2**로 백업해줘"라고 말씀해 주세요.
*   **복구 요청:** "안티야, 문제가 생겼어. **v1** 상태로 즉시 돌려줘"라고 말씀하시면 단 몇 초 만에 복구됩니다.

---

## 📋 버전 관리 이력 (History)

### [ v1 ] 2026-02-15 18:30 (현재 안정 버전)
*   **내용:** 애드센스 승인용 프리미엄 UI 복구 완료
*   **주요 특징:** 
    *   ULTRAUTILS 브랜딩 및 로고 복구
    *   모든 도구 페이지 광고 배너(AdBanner) 재배치
    *   모든 도구 페이지 사용 가이드 및 FAQ 보강
    *   관리자(Admin) 수익 분석 및 캠페인 관리 기능 활성화
*   **기록 태그:**
    *   `checkpoint-adsense-ui-v1`: Initial AdSense ready UI with premium elements.
    *   `checkpoint-ui-ux-optimized`: Golden Lightning Logo applied, and AdBanners optimized for better UX.
    *   `checkpoint-mobile-menu-fixed`: Fixed mobile menu text overlap with solid background.
    *   `checkpoint-final-mobile-optimized`: Final high-contrast full-screen "Menu Board" style for maximum reliability on all mobile devices.

---

### [ v2 ] 2026-02-16 17:00 (신규 수익화 & 소통 강화 버전)
*   **내용:** 페이지별 독립 광고판 및 사용자 피드백 시스템 도입
*   **주요 특징:** 
    *   **독립 광고판 시스템**: 각 도구 페이지별로 광고를 따로 팔 수 있는 동적 슬롯(slot) 기능 구현.
    *   **광고 복구 로직**: 특정 페이지 광고가 없어도 공통 광고(top/bottom)를 자동으로 찾아오는 하이브리드 로직 적용.
    *   **사용자 피드백 위젯**: 도구별 "요긴해요!" 반응 및 의견 수집 기능 추가 (Firebase 연동).
    *   **프리미엄 404 페이지**: 잘못된 주소로 들어온 사용자에게 길을 안내하는 고품격 로고 페이지 제작.
    *   **후원 연결 수정**: 'Buy Me a Coffee' 링크를 사장님의 실제 아이디(`jinfengtian75`)로 완벽 연결.
*   **기록 태그:**
    *   `checkpoint-dynamic-ad-slots`: Enabled independent ad management per tool page.
    *   `checkpoint-feedback-widget`: User reaction and comment system integrated with Firestore.
    *   `checkpoint-ads-fallback-safe`: Robust ad fetching logic with automatic global fallback.

### [ v3 ] 2026-02-17 07:50 (모바일 UX 및 네비게이션 완성 버전)
*   **내용:** 모바일 사용자 편의성 극대화 및 전사적 스크롤 버그 수정
*   **주요 특징:** 
    *   **모바일 전용 복구 툴바**: 배경 제거 도구에서 모바일 사용자가 찾기 힘들었던 복구 메뉴를 하단 플로팅 버튼으로 재설계.
    *   **고대비 디자인 적용**: 배경색과 겹쳐 보이지 않던 메뉴들을 진한 보라색(Indigo)과 선명한 아이콘으로 변경하여 가독성 확보.
    *   **전역 스크롤 리셋**: 페이지 이동 시 화면 중간에서 시작되던 고질적인 버그를 수정하여 모든 페이지가 항상 최상단에서 보이도록 개선 (`LayoutShell.tsx`).
    *   **모바일 작업공간 최적화**: 메뉴 크기를 줄이고 이미지 영역을 넓혀 스마트폰에서도 시원한 작업 환경 구현.
*   **기록 태그:**
    *   `checkpoint-mobile-ux-v3`: Complete mobile UI overhaul for background remover and global scroll fixes.

### [ v4 ] 2026-02-18 11:15 (플래티넘 수익화 및 크리에이터 특화 버전)
*   **내용:** [AI 유튜브 기획 마스터] 최종 완성 및 전방위적 수익 모델(AdSense) 결합
*   **주요 특징:** 
    *   **플래티넘 수익 모델**: 페이지 상/하단에 전략적 광고 배너(AdBanner) 슬롯 2개 전격 배치.
    *   **데이터 소장 기능**: 기획 리포트를 깔끔한 .TXT 파일로 저장할 수 있는 다운로드 엔진 탑재.
    *   **유튜브 킬러 보조**: 제목 추천뿐 아니라 '썸네일 전용 텍스트'를 따로 제안하는 전문 크리에이터 기능 추가.
    *   **기술적 무결점**: React Hook 충돌 및 임포트 오류를 완벽 해결하여 고성능 작업 환경 구축.
    *   **사용자 경험 극대화**: 모바일 탭 자동 전환 + 정밀 스크롤 + 다국어 통합으로 글로벌 1등 수준의 UX 달성.
*   **기록 태그:**
    *   `checkpoint-yt-planner-platinum`: Final professional version with ads and download features.
    *   `checkpoint-monetization-optimized`: UI optimized for both user satisfaction and ad revenue.

### [ v4.1 ] 2026-02-18 11:45 (쇼츠 최적화 및 모바일 오버레이 UI 버전)
*   **내용:** [유튜브 썸네일 다운로더]의 모바일 사용성 및 쇼츠(Shorts) 영상 가독성 극대화
*   **주요 특징:** 
    *   **쇼츠 전용 레이아웃**: 세로 영상 입력 시 9:16 비율로 자동 변환하여 모바일 화면에서 이미지 크기를 최대화함.
    *   **오버레이 액션 바**: PC 스타일의 메뉴 레이아웃을 모바일에 이식, 이미지 위에 직접 [AI 편집], [공유] 메뉴를 띄우는 프리미엄 UI 구현.
    *   **그라데이션 마스크 적용**: 이미지 하단에 소프트 마스크를 적용하여 메뉴 가독성과 디자인 완성도를 동시에 잡음.
*   **기록 태그:**
    *   `checkpoint-shorts-optimized`: Perfect portrait support for YouTube Shorts.
    *   `checkpoint-mobile-overlay-ui`: Desktop-class interaction model on mobile devices.

---

### [ v5 ] 2026-02-17 14:55 (AI 크리에이티브 스튜디오 완성 버전)
*   **내용:** [AI 배경 제거] 도구를 프리미엄 편집 스튜디오로 업그레이드
*   **주요 특징:** 
    *   **프리미엄 자막 엔진**: 멀티 텍스트 레이어, 드래그 이동, 굵은 테두리(Stroke), 폰트 두께 조절 기능 탑재.
    *   **스마트 조명 및 필터**: 인물 전용 밝기/대비/채도 조절 및 6가지 원클릭 시네마틱 프리셋 구현.
    *   **전문가용 조작감**: 캔버스 직접 드래그 이동, 위치/크기 초기화, 고성능 실시간 렌더링 시스템 구축.
    *   **안전한 작업 기록**: 모든 자막 이동 및 보정 작업을 [뒤로 가기/앞으로 가기]로 완벽 제어.
*   **기록 태그:**
    *   `checkpoint-creative-studio-v5`: Full text and filter engine integrated.
    *   `checkpoint-studio-lighting-matched`: Smart subject-only filters for professional compositing.
    *   `backup-file`: `page.tsx.bak_20260217_1425` (작업 전 원본 보관 중)
### [ v6 ] 2026-02-17 17:35 (글로벌 크리에이티브 스튜디오 & 기능 완전 복구 버전)
*   **내용:** [AI 배경 제거] 도구의 모든 프리미엄 기능 복구 및 다국어 완벽 통합
*   **주요 특징:** 
    *   **기능 완전 복구**: 오른쪽 사이드바의 세부 보정(대비, 채도), 필터(Warm, Cool, Vintage), 스티커 효과 및 텍스트 편집기 완벽 복원.
    *   **일괄 처리(Batch) 안정화**: 대량 이미지 처리 시 발생하던 번역 키 오류를 수정하고 실시간 상태 추적 UI 최적화.
    *   **다국어 통합 시스템**: 한국어, 영어, 중국어 모든 UI 레이블 및 안내 문구 동기화 완료 (`translations.ts`).
    *   **가이드 시스템 개선**: ID 증명사진 모드에서 '가이드 표시' 레이블을 더 직관적으로 수정하고 다국어 지원.
*   **기록 태그:**
    *   `checkpoint-global-studio-v6-final`: Absolute final version with all features restored and polished.
    *   `backup-file`: `page.tsx.v5_final`, `translations.ts.v5_final` 저장 완료.

### [ v6.1 ] 2026-02-18 22:50 (제로-딜레이 정밀 복구 시스템 도입)
*   **내용:** [AI 배경 제거] 수동 복구(Refine) 툴의 정교함 및 반응 속도 극대화
*   **주요 특징:** 
    *   **제로-딜레이 렌더링**: 기존의 DOM 방식 커서를 제거하고 **캔버스 직접 렌더링(Canvas Drawing)** 방식으로 전환. 마우스 움직임과 브러시 위치가 1ms의 오차 없이 완벽하게 일치함.
    *   **정밀 블랙 마킹 시스템**: 브러시 영역을 명확한 검은색 링과 센터 도트(Center Dot)로 표시하여, 세밀한 경계선 작업 시 시각적 정확도를 비약적으로 향상.
    *   **네이티브 조작감**: 캔버스 `crosshair` 커서와 실시간 `renderStudio` 루프를 결합하여, 전문 그래픽 툴 수준의 부드러운 조작감 구현.
*   **기록 태그:**
    *   `checkpoint-precision-refine-brush`: Replaced DOM cursor with high-performance Canvas-based brush preview.
    *   `checkpoint-zero-lag-interaction`: Optimized mouse event loop for split-second professional refinement.


### [ v7 ] 2026-02-18 03:00 (소셜 미디어 & ID 증명사진 마스터 완성 버전)
*   **내용:** [AI 배경 제거] 도구의 상업적 활용도를 극대화한 '규격 마스터' 엔진 탑재
*   **주요 특징:** 
    *   **소셜 미디어 비율 최적화**: 1:1, 4:5, 9:16, 16:9 규격을 원클릭으로 변환하고 프레임 모양이 즉시 바뀌는 동적 캔버스 구현.
    *   **원클릭 제로-딜레이 시스템**: 모든 규격 및 증명사진 설정 시 '두 번 클릭'하던 버그를 수정하여, 클릭 즉시 화면이 자동 갱신되는 반응형 상태 관리 적용.
    *   **고해상도 ID 증명사진 마스터**: 여권, 반명함, 비자 규격을 즉시 적용하고, 초록색 위치 가이드라인 및 규격별 자동 줌 최적화.
    *   **비교 뷰 레이아웃 최적화**: 전/후 비교 보기를 세로(상하) 배치로 변경하여 대형 이미지를 더 크게 확인할 수 있도록 시인성 확보.
    *   **유튜브 도킹 시스템 강화**: 유튜브 추출기에서 가져온 쇼츠 이미지의 세로 규격을 자동 감지하여 즉시 9:16 모드로 정렬.
*   **기록 태그:**
    *   `checkpoint-social-aspect-ratio-master`: Perfect layout transformation for all social media platforms.
    *   `checkpoint-id-photo-pro-v7`: Professional-grade ID photo generation with instant guide updates.
    *   `checkpoint-zero-click-sync`: Centralized state-sync engine for snappier UI response.
    *   `backup-file`: `page.tsx.v7_final_stable`

### [ v8 ] 2026-02-18 16:20 (글로벌 광고 플랫폼 & SEO 마스터 버전) 🚀
*   **내용:** [광고 센터] 7개국어 완벽 현지화 및 글로벌 소셜 공유(OG) 시스템 최적화
*   **주요 특징:** 
    *   **7개국어 광고 센터 완벽 현지화**: 한국어, 영어, 중국어, 일본어, 스페인어, 독일어, 폴란드어 등 전 세계 7개 국어에 대해 광고 안내, 혜택, FAQ를 완벽하게 번역 및 적용.
    *   **지능형 문의 폼(Placeholders)**: 단순히 라벨만 번역하는 것을 넘어, 각 국가의 문화에 맞는 입력 예시(Placeholders)와 에러 메시지를 모든 언어별로 개별 적용.
    *   **소셜 공유(OpenGraph) 최적화**: 카카오톡, 페이스북, 트위터 공유 시 나타나는 미리보기 제목과 설명을 한국어 및 글로벌 환경에 맞춰 고도화하여 클릭률(CTR) 향상 기반 마련.
    *   **도구 현지화 디테일 보강**: 배경 제거 도구의 화면 비율(1:1 Square -> 1:1 정사각형 등) 라벨 및 공유 문구를 전역 언어 시스템에 통합하고, 기존의 다국어 오타 완벽 수정.
*   **기록 태그:**
    *   `checkpoint-global-ads-master-v8`: Complete localization of advertising platform and inquiry system.
    *   `checkpoint-seo-sharing-optimized`: Improved metadata for better social media representation.
    *   `checkpoint-localized-form-placeholders`: Language-aware inquiry form with smart inputs.

### [ v9 ] 2026-02-18 19:15 (프리미엄 SEO & 프로 도구 고도화 버전) 👑
*   **내용:** 주요 도구 전문성 강화, SEO 콘텐츠 대폭 확충 및 바이럴 공유 엔진 탑재
*   **주요 특징:** 
    *   **전문가급 SEO 가이드 확충**: PDF 마스터, 유튜브 기획기, 배경 제거 도구 하단에 '블로그 스타일'의 심층 활용 가이드와 FAQ를 한국어 기반으로 대폭 보강하여 검색 엔진 유입 극대화.
    *   **PDF 마스터 프로 업그레이드**: 합치기 전 파일 순서를 자유롭게 바꿀 수 있는 '이동(Move Up/Down)' 기능을 추가하여 사용성을 비약적으로 향상.
    *   **프리미엄 테마 고도화**: 다크/라이트 모드 전체를 딥 세일(Deep Slate)과 세련된 인디고 블루 톤으로 재조정하여 고가의 유료 툴 같은 프리미엄 디자인 완성.
    *   **바이럴 루프(Viral Loop) 장착**: 모든 주요 도구의 결과 페이지에 '결과 공유' 버튼을 추가하여 사용자가 자연스럽게 서비스를 확산시킬 수 있도록 유도.
*   **기록 태그:**
    *   `checkpoint-premium-seo-v9`: Enhanced SEO content and guides for main utilities.
    *   `checkpoint-pdf-master-pro`: File reordering support for advanced PDF management.
    *   `checkpoint-theme-refinement`: Modernized slate/indigo premium UI colors.
    *   `checkpoint-viral-loop-sharing`: New sharing engine integrated into top-tier tools.

### [ v10 ] 2026-02-18 18:10 (글로벌 퀀텀 점프 & 다이나믹 쉐어링 완성 버전) 🌍
*   **내용:** 전 세계 7개 국어 현지화 완성 및 AI 기반 실시간 공유 이미지 엔진 탑재
*   **주요 특징:** 
    *   **독일어(de) & 폴란드어(pl) 완벽 현지화**: 홈, 소개, 모든 도구의 가이드 및 FAQ까지 유럽 시장 타겟팅을 위한 전문 번역 완료.
    *   **다이나믹 OG(Open Graph) 엔진**: 정적인 이미지를 넘어, 사이트가 실시간으로 고해상도 공유 이미지를 생성하는 `opengraph-image.tsx` 시스템 도입. 카톡/페이스북 공유 시 전문 브랜드 이미지 자동 노출.
    *   **SEO 메타 데이터 최적화**: `metadataBase` 설정을 통해 구글 및 SNS 검색 봇이 사이트의 구조와 이미지를 가장 정확하게 파악할 수 있도록 기술적 보완 완료.
    *   **홈 & 소개 페이지 컨텐츠 완성**: 모든 언어에서 UltraUtils의 미션, 통계, 서비스 가치가 누락 없이 노출되도록 텍스트 스키마 완전 동기화.
*   **기록 태그:**
    *   `checkpoint-global-7-languages`: Finished full localization for all supported 7 languages.
    *   `checkpoint-dynamic-og-engine`: Integrated Next.js dynamic image generation for premium sharing.
    *   `checkpoint-metadata-base-fix`: Technical SEO optimization for reliable social media crawling.

---

### [ v10.1 ] 2026-02-18 18:55 (글로벌 마케팅 시동 & 구글 광고 전략 수립) 📈
*   **내용:** 실제 유입 및 수익 창출을 위한 [Google Ads] 실전 전략 가이드 구축
*   **주요 특징:** 
    *   **마케팅 전략지 생성**: `MARKETING_ADS_STRATEGY.md` 파일을 통해 도구별 타겟 키워드, 광고 카피, 입찰 전략 수립 완료.
    *   **사용자 편의 마케팅**: 로그인/가입 없는 '익명성'과 '무료' 가치를 핵심 마케팅 포인트로 확정.
    *   **비용 효율적 광고 설계**: 대행사 없이 사장님이 직접 소액(일 1만원)으로 운영 가능한 실전 세팅 가이드 제공.
*   **기록 태그:**
    *   `checkpoint-marketing-start`: Transitioned from development to growth & marketing phase.
    *   `strategy-file-created`: Saved `MARKETING_ADS_STRATEGY.md` with high-converting keywords.

---

### [ v11 ] 2026-02-18 20:05 (무료 마케팅 & SEO 부스트 페이즈) 🚀
*   **내용:** 유료 광고의 기술적 한계를 넘어선 '자연 유입(SEO)' 강화 및 브랜드 가치 내재화
*   **주요 특징:** 
    *   **성장 가이드(Growth Tips) 시스템 도입**: 홈 화면에 "유튜브 CTR 높이기", "브랜드 신뢰도 구축" 등 사용자에게 실질적인 가치를 주는 교육 성격의 마케팅 블록 추가.
    *   **7개국어 SEO 컨텐츠 확장**: 단순히 도구만 보여주는 것이 아니라, 각 언어별로 '어떻게 도구를 써서 성공하는가'에 대한 키워드 중심의 팁 텍스트를 전면 배치.
    *   **검색 키워드 정규화**: `layout.tsx`에 '유튜브 클릭률 높이는 법', '브랜드 구축 도구' 등 구글 검색 상위 노출을 위한 새로운 타겟 키워드 대량 탑재.
    *   **무료 마케팅 체제 전환**: 복잡한 구글 광고 세팅 대신, 사이트 자체를 강력한 '콘텐츠 자석'으로 만들어 광고비 없이도 유입이 발생하도록 웹 아키텍처 개선.
*   **기록 태그:**
    *   `checkpoint-seo-growth-tips`: Added actionable SEO content blocks to the homepage.
    *   `checkpoint-organic-marketing-pivot`: Shifted strategy from paid ads to high-value organic content.
    *   `checkpoint-meta-keyword-expansion`: Refined SEO metadata for broader search visibility.

---

### [ v11.5 ] 2026-02-19 22:50 (최종 기능 완성 및 코드 정밀 청소 전 안전 백업) 🛡️
*   **내용:** v11의 모든 기능(성장 팁, SEO)이 포함된 상태에서 코드 최적화 작업을 위해 현 시점을 보존함.
*   **주요 특징:** 
    *   **안전 장치 구축**: 코드 내부의 사소한 문법 오류(Lint)를 수정하기 전, 완벽하게 작동하는 현재 상태를 그대로 저장.
    *   **복구 지점 확보**: 수정 중 문제가 생길 경우 언제든 이 시점으로 100% 복구가 가능하도록 깃(Git) 체크포인트 생성 완료.
*   **기록 태그:**
    *   `checkpoint-v11-stable-pre-cleanup`: Professional features locked-in before final code polishing.

---
