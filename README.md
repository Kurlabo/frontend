# 💻 Market Kurly Clone

# by Team Kurlabo FrontEnd

<p align="center"><img src="https://blog.kakaocdn.net/dn/DKoEm/btqCXu4AZAW/1C2ln6Z0ovZiWYAJcYtqL1/img.jpg" width="30%"></p>

2021년 2월 01일부터 2월 26일까지(업데이트 기간 제외) 진행한 Kurlabo 프로젝트입니다.

<div width><h2>1. 📖 Tech Stack</h2><p><img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>&nbsp;<br/><img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=GitHub&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/NPM-CB3837?style=flat-square&logo=NPM&logoColor=white"/>&nbsp;<img src="https://img.shields.io/badge/Storybook-FF4785?style=flat-square&logo=Storybook&logoColor=white"/>&nbsp;<br/><img src="https://img.shields.io/badge/Tailwind CSS-38B2AC?style=flat-square&logo=Tailwind CSS&logoColor=white"/><img src="https://img.shields.io/badge/Redux-764ABC?style=flat-square&logo=Redux&logoColor=white"/><img src="https://img.shields.io/badge/Postman-FF6C37?style=flat-square&logo=Postman&logoColor=white"/>

- 라이브러리

  <details>
      <summary>접기/펼치기</summary>
      <div>
  redux<br/>
  react-redux<br/>
  redux-saga<br/>
  redux-thunk<br/>
  react-router-dom<br/>
  axios<br/>
  react-modal<br/>
  tailwind css<br/>
  storybook<br/>
  redux-state-sync<br/>
  react-icons<br/>
  react-actions<br/>
  postcss<br/>
      </div>
  </details>

## 2. Getting Start!

`$ git clone "https://github.com/Kurlabo/frontend.git`
`$ npm install`
`$ npm run start`

## 3. Contributioning

Please read [CONTRIBUTING.md](https://github.com/Kurlabo/frontend/blob/develop/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us. /

## 4. Contributors

- **김어진**

  <details>
      <summary>작업 내용</summary>
      <div>
          <br/>
          - 메인페이지, 장바구니 페이지 UI, API 작업<br/><br/>
          - 기획, coding convention 작성,<br/><br/>
         </div>
  </details>

- **박상언** _-PM-_

  <details>
    <summary>작업 내용</summary>
    <div>
        <br/>
        - 프로젝트 전반적인 일정 관리 및 github repository 관리.<br/><br/>
        - 회원 가입 UI 구현 및 json server 이용하여 기능 구현.<br/><br/>
        - footer UI 구현.<br/><br/>
        - 메인페이지의 사이드 바 UI 구현.<br/><br/>
       </div>
  </details>

- **백나라**
  <details>
    <summary>작업 내용</summary>
    <div>
        <br/>
        - 상품 상세 페이지 UI 구현<br/><br/>
        - 고객센터 페이지 UI 구현<br/><br/>
        - API 연동하여 상품 정보 렌더, 연관 상품 캐러셀 렌더, 늘 사는 것에 상품 추가, 장바구니에 상품 추가, 상품 리뷰 작성 구현<br/><br/>
       </div>
  </details>

- **정세영**

  <details>
    <summary>작업 내용</summary>
    <div>
        <br/>
        - 로그인 페이지<br/><br/>
        - 주문 내역, 배송지 관리, 늘 사는 것, 상품 후기, 적립금, 쿠폰, 개인 정보 수정 UI 구현<br/><br/>
        - 늘 사는 것, 주문 내역 API 연동하여 렌더링 처리<br/><br/>
       </div>
  </details>

- **조재연**

  <details>
    <summary>작업 내용</summary>
    <div>
        <br/>
        - 메인 페이지 헤더 UI 구현.<br/><br/>
        - 배송지 검색 DAUM API 사용하여 구현.<br/><br/>
        - 카테고리 별 상품리스트 페이지 UI 구현 및 라우팅 처리.<br/><br/>
        - 신상품, 베스트, 알뜰쇼핑 페이지 UI 구현 및 라우팅 처리.<br/><br/>
        - 카테고리, 신상품, 베스트, 알뜰쇼핑 페이지네이션 구현.<br/><br/>
        - 주문하기 페이지, 장바구니 모달창 UI 구현.<br/><br/>
        - 주문서 페이지 API 요청 기능 구현.
        - 금주혜택 페이지 구현.
        - API 연동하여 상품 렌더링 기능 구현.<br/><br/>
        - documentation 작성.
       </div>
  </details>

## 5. Develop motivation

### 5-1 Reason for Kurly Clone

Market Kurly 사이트의 기존 기능과 더불어 개선점을 찾고 kurlabo 프로젝트에 적용하는 것이 가장 큰 목표였습니다. 웹 앱의 기본인 CRUD 기능은 물론 다채로운 기능을 가진 쇼핑몰을 Clone하여 interactive한 UI를 만들고자 하였습니다. 그리고 원활한 서버통신을 통해 백엔드와의 협업과 커뮤니케이션 능력을 배양하고자 시작하였습니다.

## 6. 서비스 기능

### 상품 상세 페이지

- 상품 ID에 따라 해당 상품에 대한 상세 정보 렌더링
- 해당 카테고리의 상품들로 구성된 연관 상품의 infinity carousel 구현
- 상품 정보 navigation의 선택된 탭에 따라 상품 info영역 렌더링
- 고객 후기 탭 선택시 해당 상품에 대한 상품 후기 렌더링
- 스크롤 위치에 따라 하단 장바구니 옵션창 여닫힘
- 장바구니 옵션(count, price) state로 관리하여 설정한 옵션 상/하단 연동
- 장바구니에 담기 기능 및 담기 결과 알림창 렌더
- count 수 1미만일 경우 알림 팝업창 구현
- 늘 사는 것 추가하기 기능 및 결과 팝업창 구현
- 후기 작성 가능여부 확인 후 후기 작성 페이지로 이동 또는 작성불가 알림

### 고객센터 페이지

- navigation의 선택된 탭에 따라 해당 부류의 내용 렌더링
- 공지사항의 글 클릭시 해당 글의 페이지로 이동 및 렌더링
- 자주하는 질문의 카테고리 선택 시 해당 카테고리의 글 목록 렌더링
- 1:1문의의 글쓰기 버튼 클릭 시 글쓰기 페이지로 이동
