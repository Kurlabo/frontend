// draggable = false Style
// style = { drag }로 적용
export const drag = {
  msUserSelect: 'none',
  MozUserSelect: 'none',
  KhtmlUserSelect: 'none',
  WebkitUserSelect: 'none',
  userSelect: 'none',
};

// tailwind config의 color 속성에 inputRadio:#dddddd 추가 후 사용
// 체크된 보라색 아이콘 스타일
export const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-r-1.2 text-kp-600';

// tailwind config의 color 속성에 inputGray:#cccccc 추가 후 사용
// 체크안된 회색 아이콘 스타일
export const formRadioIcon2 = `${formRadioIcon} text-inputGray`;

// 전체 카테고리 데이터
export const categoryDatas = [
  {
    id: '1000',
    inactiveImg: 'icon_veggies_inactive@3x.1586324413.png',
    activeImg: 'icon_veggies_active@3x.1586324413.png',
    text: '채소',
    sub: [
      {
        id: '0',
        text: '고구마·당근·야채',
      },
      {
        id: '1',
        text: '시금치·쌈채소·나물·',
      },
      {
        id: '2',
        text: '브로콜리·파프리카·양배추',
      },
      {
        id: '3',
        text: '양파·대파·마늘·배추',
      },
      {
        id: '4',
        text: '오이·호박·고추',
      },
      {
        id: '5',
        text: '냉동·이색·간편채소',
      },
      {
        id: '6',
        text: '콩나물·버섯',
      },
    ],
  },
  {
    id: '1001',
    inactiveImg: 'icon_fruit_inactive@3x.1572229045.png',
    activeImg: 'icon_fruit_active@3x.1572229046.png',
    text: '과일·견과·쌀',
    sub: [
      { id: '10', text: '제철과일' },
      { id: '11', text: '국산과일' },
      { id: '12', text: '수입과일' },
      { id: '13', text: '간편과일' },
      { id: '14', text: '냉동·건과일' },
      { id: '15', text: '견과류' },
      { id: '16', text: '쌀·잡곡' },
    ],
  },
  {
    id: '1002',
    inactiveImg: 'icon_seafood_inactive@3x.1572228964.png',
    activeImg: 'icon_seafood_active@3x.1572228965.png',
    text: '수산·해산·건어물',
    sub: [
      { id: '20', text: '제철수산' },
      { id: '21', text: '생선류' },
      { id: '22', text: '굴비·반건류' },
      { id: '23', text: '오징어·낙지·문어' },
      { id: '24', text: '새우·게·랍스터' },
      { id: '25', text: '해산물·조개류' },
      { id: '26', text: '수산가공품' },
      { id: '27', text: '김·미역·해조류' },
      { id: '28', text: '건어물·다시팩' },
    ],
  },
  {
    id: '1003',
    inactiveImg: 'icon_meat_inactive@3x.1572229206.png',
    activeImg: 'icon_meat_active@3x.1572229206.png',
    text: '정육·계란',
    sub: [
      { id: '30', text: '국내산 소고기' },
      { id: '31', text: '수입산 소고기' },
      { id: '32', text: '돼지고기' },
      { id: '33', text: '계란류' },
      { id: '34', text: '닭·오리고기' },
      { id: '35', text: '양념육·돈까스' },
      { id: '36', text: '양고기' },
    ],
  },
  {
    id: '1004',
    inactiveImg: 'icon_side_inactive@3x.1572243189.png',
    activeImg: 'icon_side_active@3x.1572243189.png',
    text: '국·반찬·메인요리',
    sub: [
      { id: '40', text: '국·탕·찌개' },
      { id: '41', text: '밀키트·메인요리' },
      { id: '42', text: '밑반찬' },
      { id: '43', text: '김치·젓갈·장류' },
      { id: '44', text: '두부·어묵·부침개' },
      { id: '45', text: '베이컨·햄·통조림' },
    ],
  },
  {
    id: '1005',
    inactiveImg: 'icon_convenient_inactive@3x.1572243452.png',
    activeImg: 'icon_convenient_active@3x.1572243452.png',
    text: '샐러드·간편식',
    sub: [
      { id: '50', text: '샐러드·닭가슴살' },
      { id: '51', text: '도시락·밥류' },
      { id: '52', text: '파스타·면류' },
      { id: '53', text: '떡볶이·튀김·순대' },
      { id: '54', text: '피자·핫도그·만두' },
      { id: '55', text: '폭립·떡갈비·안주' },
      { id: '56', text: '죽·스프·카레' },
      { id: '57', text: '선식·시리얼' },
    ],
  },
  {
    id: '1006',
    inactiveImg: 'icon_sauce_inactive@3x.1572243130.png',
    activeImg: 'icon_sauce_active@3x.1572243130.png',
    text: '면·양념·오일',
    sub: [
      { id: '60', text: '파스타·면류' },
      { id: '61', text: '식초·소스·드레싱' },
      { id: '62', text: '양념·액젓·장류' },
      { id: '63', text: '식용유·참기름·오일' },
      { id: '64', text: '소금·설탕·향신료' },
      { id: '65', text: '밀가루·가루·믹스' },
    ],
  },
  {
    id: '1007',
    inactiveImg: 'icon_snacks_inactive@3x.1572243151.png',
    activeImg: 'icon_snacks_active@3x.1572243151.png',
    text: '생수·음료·우유·커피',
    sub: [
      { id: '70', text: '생수·탄산수' },
      { id: '71', text: '음료·주스' },
      { id: '72', text: '우유·두유·요거트' },
      { id: '73', text: '커피' },
      { id: '74', text: '차' },
    ],
  },
  {
    id: '1008',
    inactiveImg: 'icon_cookie_inactive.1610074009.png',
    activeImg: 'icon_cookie_active.1610074009.png',
    text: '간식·과자·떡',
    sub: [
      { id: '80', text: '과자·스낵·쿠키' },
      { id: '81', text: '초콜릿·젤리·캔디' },
      { id: '82', text: '떡·한과' },
      { id: '83', text: '아이스크림' },
    ],
  },
  {
    id: '1009',
    inactiveImg: 'icon_deli_inactive@3x.1572229829.png',
    activeImg: 'icon_deli_active@3x.1572229829.png',
    text: '베이커리·치즈·델리',
    sub: [
      { id: '90', text: '식빵·빵류' },
      { id: '91', text: '잼·버터·스프레드' },
      { id: '92', text: '케이크·파이·디저트' },
      { id: '93', text: '치즈' },
      { id: '94', text: '델리' },
      { id: '95', text: '올리브·피클' },
    ],
  },
  {
    id: '1010',
    inactiveImg: 'icon_health_inactive@3x.1574645923.png',
    activeImg: 'icon_health_active@3x.1574645924.png',
    text: '건강식품',
    sub: [
      { id: '100', text: '영양제' },
      { id: '101', text: '유산균' },
      { id: '102', text: '홍삼·인삼·꿀' },
      { id: '103', text: '건강즙·건강음료' },
      { id: '104', text: '건강분말·건강환' },
      { id: '105', text: '다이어트·이너뷰티' },
      { id: '106', text: '유아동' },
    ],
  },
  {
    id: '1011',
    inactiveImg: 'icon_living_inactive@3x.1588814090.png',
    activeImg: 'icon_living_active@3x.1588814091.png',
    text: '생활용품·리빙',
    sub: [
      { id: '110', text: '휴지·티슈' },
      { id: '111', text: '여성·위생용품' },
      { id: '112', text: '세제·청소용품' },
      { id: '113', text: '화훼·인테리어소품' },
      { id: '114', text: '의약약품·마스크' },
      { id: '115', text: '생활잡화·문구' },
    ],
  },
  {
    id: '1012',
    inactiveImg: 'icon_beauty_inactive@3x.1588750189.png',
    activeImg: 'icon_beauty_active@3x.1588750189.png',
    text: '뷰티·바디케어',
    sub: [
      { id: '120', text: '스킨케어' },
      { id: '121', text: '구강·면도' },
      { id: '122', text: '바디·제모' },
      { id: '123', text: '헤어케어' },
      { id: '124', text: '미용기기·소품' },
    ],
  },
  {
    id: '1013',
    inactiveImg: 'icon_kitchen_inactive@3x.1574646458.png',
    activeImg: 'icon_kitchen_active@3x.1574646459.png',
    text: '주방용품',
    sub: [
      { id: '130', text: '주방소모품·잡화' },
      { id: '131', text: '주방·조리도구' },
      { id: '132', text: '냄비·팬·솥' },
      { id: '133', text: '보관용기·텀블러' },
      { id: '134', text: '식기·테이블웨어' },
      { id: '135', text: '컵·잔·커피도구' },
    ],
  },
  {
    id: '1014',
    inactiveImg: 'icon_electronic_inactive@3x.1574417979.png',
    activeImg: 'icon_electronic_active@3x.1574417979.png',
    text: '가전제품',
    sub: [
      { id: '140', text: '주방가전' },
      { id: '141', text: '생활가전' },
      { id: '142', text: '계절가전' },
    ],
  },
  {
    id: '1015',
    inactiveImg: 'icon_kids_inactive@3x.1572229885.png',
    activeImg: 'icon_kids_active@3x.1572229885.png',
    text: '베이비·키즈',
    sub: [
      { id: '150', text: '분유·간편 이유식' },
      { id: '151', text: '이유식 재료' },
      { id: '152', text: '간식·음식·음료' },
      { id: '153', text: '건강식품' },
      { id: '154', text: '이유·수유용품' },
      { id: '155', text: '기저귀·물티슈' },
      { id: '156', text: '세제·위생용품' },
      { id: '157', text: '스킨·구강케어' },
      { id: '158', text: '완구·잡화류' },
    ],
  },
  {
    id: '1016',
    inactiveImg: 'icon_pet_inactive@3x.1587442294.png',
    activeImg: 'icon_pet_active@3x.1587442295.png',
    text: '반려동물',
    sub: [
      { id: '160', text: '강아지 간식' },
      { id: '161', text: '강아지 주식' },
      { id: '162', text: '고양이 간식' },
      { id: '163', text: '고양이 주식' },
      { id: '164', text: '반려동물 용품' },
      { id: '165', text: '배변·위생' },
      { id: '166', text: '소용량·샘플' },
    ],
  },
];
