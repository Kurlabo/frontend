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
    id: 'vegetable',
    inactiveImg: 'icon_veggies_inactive@3x.1586324413.png',
    activeImg: 'icon_veggies_active@3x.1586324413.png',
    text: '채소',
    sub: [
      {
        id: 'subVegetable1',
        text: '고구마·당근·야채',
      },
      {
        id: 'subVegetable2',
        text: '시금치·쌈채소·나물·',
      },
      {
        id: 'subVegetable3',
        text: '브로콜리·파프리카·양배추',
      },
      {
        id: 'subVegetable4',
        text: '양파·대파·마늘·배추',
      },
      {
        id: 'subVegetable5',
        text: '오이·호박·고추',
      },
      {
        id: 'subVegetable6',
        text: '냉동·이색·간편채소',
      },
      {
        id: 'subVegetable7',
        text: '콩나물·버섯',
      },
    ],
  },
  {
    id: 'fruits',
    inactiveImg: 'icon_fruit_inactive@3x.1572229045.png',
    activeImg: 'icon_fruit_active@3x.1572229046.png',
    text: '과일·견과·쌀',
    sub: [
      { id: 'subFruits1', text: '제철과일' },
      { id: 'subFruits2', text: '국산과일' },
      { id: 'subFruits3', text: '수입과일' },
      { id: 'subFruits4', text: '간편과일' },
      { id: 'subFruits5', text: '냉동·건과일' },
      { id: 'subFruits6', text: '견과류' },
      { id: 'subFruits7', text: '쌀·잡곡' },
    ],
  },
  {
    id: 'seafood',
    inactiveImg: 'icon_seafood_inactive@3x.1572228964.png',
    activeImg: 'icon_seafood_active@3x.1572228965.png',
    text: '수산·해산·건어물',
    sub: [
      { id: 'subSeafood1', text: '제철수산' },
      { id: 'subSeafood2', text: '생선류' },
      { id: 'subSeafood3', text: '굴비·반건류' },
      { id: 'subSeafood4', text: '오징어·낙지·문어' },
      { id: 'subSeafood5', text: '새우·게·랍스터' },
      { id: 'subSeafood6', text: '해산물·조개류' },
      { id: 'subSeafood7', text: '수산가공품' },
      { id: 'subSeafood8', text: '김·미역·해조류' },
      { id: 'subSeafood9', text: '건어물·다시팩' },
    ],
  },
  {
    id: 'meat',
    inactiveImg: 'icon_meat_inactive@3x.1572229206.png',
    activeImg: 'icon_meat_active@3x.1572229206.png',
    text: '정육·계란',
    sub: [
      { id: 'subMeat1', text: '국내산 소고기' },
      { id: 'subMeat2', text: '수입산 소고기' },
      { id: 'subMeat3', text: '돼지고기' },
      { id: 'subMeat4', text: '계란류' },
      { id: 'subMeat5', text: '닭·오리고기' },
      { id: 'subMeat6', text: '양념육·돈까스' },
      { id: 'subMeat7', text: '양고기' },
    ],
  },
  {
    id: 'side',
    inactiveImg: 'icon_side_inactive@3x.1572243189.png',
    activeImg: 'icon_side_active@3x.1572243189.png',
    text: '국·반찬·메인요리',
    sub: [
      { id: 'subSide1', text: '국·탕·찌개' },
      { id: 'subSide2', text: '밀키트·메인요리' },
      { id: 'subSide3', text: '밑반찬' },
      { id: 'subSide4', text: '김치·젓갈·장류' },
      { id: 'subSide5', text: '두부·어묵·부침개' },
      { id: 'subSide6', text: '베이컨·햄·통조림' },
    ],
  },
  {
    id: 'salad',
    inactiveImg: 'icon_convenient_inactive@3x.1572243452.png',
    activeImg: 'icon_convenient_active@3x.1572243452.png',
    text: '샐러드·간편식',
    sub: [
      { id: 'subSalad1', text: '샐러드·닭가슴살' },
      { id: 'subSalad2', text: '도시락·밥류' },
      { id: 'subSalad3', text: '파스타·면류' },
      { id: 'subSalad4', text: '떡볶이·튀김·순대' },
      { id: 'subSalad5', text: '피자·핫도그·만두' },
      { id: 'subSalad6', text: '폭립·떡갈비·안주' },
      { id: 'subSalad7', text: '죽·스프·카레' },
      { id: 'subSalad8', text: '선식·시리얼' },
    ],
  },
  {
    id: 'sauce',
    inactiveImg: 'icon_sauce_inactive@3x.1572243130.png',
    activeImg: 'icon_sauce_active@3x.1572243130.png',
    text: '면·양념·오일',
    sub: [
      { id: 'subSauce1', text: '파스타·면류' },
      { id: 'subSauce2', text: '식초·소스·드레싱' },
      { id: 'subSauce3', text: '양념·액젓·장류' },
      { id: 'subSauce4', text: '식용유·참기름·오일' },
      { id: 'subSauce5', text: '소금·설탕·향신료' },
      { id: 'subSauce6', text: '밀가루·가루·믹스' },
    ],
  },
  {
    id: 'snacks',
    inactiveImg: 'icon_snacks_inactive@3x.1572243151.png',
    activeImg: 'icon_snacks_active@3x.1572243151.png',
    text: '생수·음료·우유·커피',
    sub: [
      { id: 'subSauce1', text: '생수·탄산수' },
      { id: 'subSauce2', text: '음료·주스' },
      { id: 'subSauce3', text: '우유·두유·요거트' },
      { id: 'subSauce4', text: '커피' },
      { id: 'subSauce5', text: '차' },
      { id: 'subSauce6', text: '밀가루·가루·믹스' },
    ],
  },
  {
    id: 'cookie',
    inactiveImg: 'icon_cookie_inactive.1610074009.png',
    activeImg: 'icon_cookie_active.1610074009.png',
    text: '간식·과자·떡',
    sub: [
      { id: 'cookie1', text: '과자·스낵·쿠키' },
      { id: 'cookie2', text: '초콜릿·젤리·캔디' },
      { id: 'cookie3', text: '떡·한과' },
      { id: 'cookie4', text: '아이스크림' },
      { id: 'cookie5', text: '생수·탄산수' },
    ],
  },
  {
    id: 'bakery',
    inactiveImg: 'icon_deli_inactive@3x.1572229829.png',
    activeImg: 'icon_deli_active@3x.1572229829.png',
    text: '베이커리·치즈·델리',
    sub: [
      { id: 'bakery1', text: '식빵·빵류' },
      { id: 'bakery2', text: '잼·버터·스프레드' },
      { id: 'bakery3', text: '케이크·파이·디저트' },
      { id: 'bakery4', text: '치즈' },
      { id: 'bakery5', text: '델리' },
      { id: 'bakery6', text: '올리브·피클' },
    ],
  },
  {
    id: 'healthFood',
    inactiveImg: 'icon_health_inactive@3x.1574645923.png',
    activeImg: 'icon_health_active@3x.1574645924.png',
    text: '건강식품',
    sub: [
      { id: 'subHealthFood1', text: '영양제' },
      { id: 'subHealthFood2', text: '유산균' },
      { id: 'subHealthFood3', text: '홍삼·인삼·꿀' },
      { id: 'subHealthFood4', text: '건강즙·건강음료' },
      { id: 'subHealthFood5', text: '건강분말·건강환' },
      { id: 'subHealthFood6', text: '다이어트·이너뷰티' },
      { id: 'subHealthFood7', text: '유아동' },
    ],
  },
  {
    id: 'houseHoldGoods',
    inactiveImg: 'icon_living_inactive@3x.1588814090.png',
    activeImg: 'icon_living_active@3x.1588814091.png',
    text: '생활용품·리빙',
    sub: [
      { id: 'subHouseholdGoods1', text: '휴지·티슈' },
      { id: 'subHouseholdGoods2', text: '여성·위생용품' },
      { id: 'subHouseholdGoods3', text: '세제·청소용품' },
      { id: 'subHouseholdGoods4', text: '화훼·인테리어소품' },
      { id: 'subHouseholdGoods5', text: '의약약품·마스크' },
      { id: 'subHouseholdGoods6', text: '생활잡화·문구' },
    ],
  },
  {
    id: 'beauty',
    inactiveImg: 'icon_beauty_inactive@3x.1588750189.png',
    activeImg: 'icon_beauty_active@3x.1588750189.png',
    text: '뷰티·바디케어',
    sub: [
      { id: 'subBeauty1', text: '스킨케어' },
      { id: 'subBeauty2', text: '구강·면도' },
      { id: 'subBeauty3', text: '바디·제모' },
      { id: 'subBeauty4', text: '헤어케어' },
      { id: 'subBeauty5', text: '미용기기·소품' },
    ],
  },
  {
    id: 'kitchenUtensils',
    inactiveImg: 'icon_kitchen_inactive@3x.1574646458.png',
    activeImg: 'icon_kitchen_active@3x.1574646459.png',
    text: '주방용품',
    sub: [
      { id: 'subKitchenUtensils1', text: '주방소모품·잡화' },
      { id: 'subKitchenUtensils2', text: '주방·조리도구' },
      { id: 'subKitchenUtensils3', text: '냄비·팬·솥' },
      { id: 'subKitchenUtensils4', text: '보관용기·텀블러' },
      { id: 'subKitchenUtensils5', text: '식기·테이블웨어' },
      { id: 'subKitchenUtensils6', text: '컵·잔·커피도구' },
    ],
  },
  {
    id: 'appliance',
    inactiveImg: 'icon_electronic_inactive@3x.1574417979.png',
    activeImg: 'icon_electronic_active@3x.1574417979.png',
    text: '가전제품',
    sub: [
      { id: 'subAppliance1', text: '주방가전' },
      { id: 'subAppliance2', text: '생활가전' },
      { id: 'subAppliance3', text: '계절가전' },
    ],
  },
  {
    id: 'baby',
    inactiveImg: 'icon_kids_inactive@3x.1572229885.png',
    activeImg: 'icon_kids_active@3x.1572229885.png',
    text: '베이비·키즈',
    sub: [
      { id: 'suBaby1', text: '분유·간편 이유식' },
      { id: 'suBaby2', text: '이유식 재료' },
      { id: 'suBaby3', text: '간식·음식·음료' },
      { id: 'suBaby4', text: '건강식품' },
      { id: 'suBaby5', text: '이유·수유용품' },
      { id: 'suBaby6', text: '기저귀·물티슈' },
      { id: 'suBaby7', text: '세제·위생용품' },
      { id: 'suBaby8', text: '스킨·구강케어' },
      { id: 'suBaby9', text: '완구·잡화류' },
    ],
  },
  {
    id: 'pet',
    inactiveImg: 'icon_pet_inactive@3x.1587442294.png',
    activeImg: 'icon_pet_active@3x.1587442295.png',
    text: '반려동물',
    sub: [
      { id: 'subPet1', text: '강아지 간식' },
      { id: 'subPet2', text: '강아지 주식' },
      { id: 'subPet3', text: '고양이 간식' },
      { id: 'subPet4', text: '고양이 주식' },
      { id: 'subPet5', text: '반려동물 용품' },
      { id: 'subPet6', text: '배변·위생' },
      { id: 'subPet7', text: '소용량·샘플' },
    ],
  },
];
