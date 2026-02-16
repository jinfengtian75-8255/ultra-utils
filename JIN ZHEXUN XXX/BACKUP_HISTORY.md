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

---
*(이후 새로운 백업이 생성될 때마다 제가 이 아래에 이어서 기록하겠습니다!)*
