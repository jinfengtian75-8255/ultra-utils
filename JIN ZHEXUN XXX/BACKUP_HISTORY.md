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
### [ v6 ] 2026-02-17 16:35 (글로벌 크리에이티브 스튜디오 & 반응성 완성 버전)
*   **내용:** 다국어 번역 무결점 처리 및 배경 이미지 로딩 반응성 100% 개선
*   **주요 특징:** 
    *   **다국어 통합 시스템**: 필터 이름(Original, B&W 등) 및 세부 도구 이름까지 한국어, 영어, 중국어로 완벽 지원 (`translations.ts`).
    *   **제로 랙(Zero-Lag) 렌더링**: 배경 업로드 및 프리셋 선택 시 클릭 즉시 캔버스에 반영되도록 이미지 로딩 감지 시스템 구축.
    *   **인터페이스 구조화**: 왼쪽(기초 설정+ID), 오른쪽(창의적 보정+텍스트)으로 도구를 재배치하여 전문적인 작업 동선 확보.
    *   **스마트 삭제 시스템**: 이미지 전체 삭제 기능을 추가하고 사용자 실수를 방지하는 확인(Confirm) 다이얼로그 연동.
*   **기록 태그:**
    *   `checkpoint-global-studio-v6`: Complete translation and responsive rendering fix.
    *   `backup-file`: `page.tsx.v5_final`, `translations.ts.v5_final` 저장 완료.

---
