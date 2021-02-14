import React from 'react';

const imgUrls = [
  'https://res.kurly.com/pc/ico/1910/01_check.svg',
  'https://res.kurly.com/pc/ico/1910/02_only.svg',
  'https://res.kurly.com/pc/ico/1910/03_cold.svg',
  'https://res.kurly.com/pc/ico/1910/04_price.svg',
  'https://res.kurly.com/pc/ico/1910/05_eco.svg',
];

const titles = [
  '깐깐한 상품위원회',
  '차별화된 Kurly Only 상품',
  '신선한 풀콜드체인 배송',
  '고객, 생산자를 위한 최선의 가격',
  '환경을 생각하는 지속 가능한 유통',
];

const msgs = [
  '나와 내 가족이 먹고 쓸 상품을 고르는 마음으로 매주 상품을 직접 먹어보고, 경험해보고 성분, 맛, 안정성 등 다각도의 기준을 통과한 상품만을 판매합니다.',
  '전국 각지와 해외의 훌륭한 생산자가 믿고 선택하는 파트너, 마켓컬리. 2천여 개가 넘는 컬리 단독 브랜드, 스펙의 Kurly Only 상품을 믿고 만나보세요.',
  '온라인 업계 최초로 산지에서 문 앞까지 상온, 냉장, 냉동 상품을 분리 포장 후 최적의 온도를 유지하는 냉장 배송 시스템, 풀콜드체인으로 상품을 신선하게 전해드립니다.',
  '매주 대형 마트와 주요 온라인 마트의 가격 변동 상황을 확인해 신선식품은 품질을 타협하지 않는 선에서 최선의 가격으로, 가공식품은 언제나 합리적인 가격으로 정기 조정합니다.',
  '친환경 포장재부터 생산자가 상품에만 집중할 수 있는 직매입 유통구조까지, 지속 가능한 유통을 고민하며 컬리를 있게하는 모든 환경(생산자, 커뮤니티, 직원)이 더 나아질 수 있도록 노력합니다.',
];

const MsgComp = ({ img, title, msg }) => {
  return (
    <div className="w-p-320 mt-16 inline-block m-2">
      <img className="w-p-40 mx-auto" src={img} alt="icon" />
      <p className="text-r-1.8 text-klp-600 font-medium mx-auto mt-4">{title}</p>
      <p className="mt-9 w-p-278 text-p-16 font-light mx-auto">{msg}</p>
    </div>
  );
};

const WhyKurly = () => {
  return (
    <div className="w-full text-center pt-12 mb-32">
      <p className="uppercase text-r-3.3 text-gray-500 font-normal">Why Kurly</p>
      <MsgComp img={imgUrls[0]} title={titles[0]} msg={msgs[0]} />
      <MsgComp img={imgUrls[1]} title={titles[1]} msg={msgs[1]} />
      <MsgComp img={imgUrls[2]} title={titles[2]} msg={msgs[2]} />
      <MsgComp img={imgUrls[3]} title={titles[3]} msg={msgs[3]} />
      <MsgComp img={imgUrls[4]} title={titles[4]} msg={msgs[4]} />
    </div>
  );
};

export default WhyKurly;
