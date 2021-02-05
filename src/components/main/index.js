import React from 'react';
import Carousel from './BigCarousel';
import SmallCarousel from './SmallCarousel/index';

const Main = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <SmallCarousel title="이 상품 어때요?" />
      <SmallCarousel title="알뜰 상품 >" />
      <SmallCarousel title="MD의 추천" mdSuggest />
      <SmallCarousel
        title="오늘의 신상품 >"
        subtitle="매일 정오, 컬리의 새로운 상품을 만나보세요"
      />
      <SmallCarousel title="지금 가장 핫한 상품>" bgGray />
    </div>
  );
};

export default Main;
