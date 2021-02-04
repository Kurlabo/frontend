import React from 'react';
import Carousel from './BigCarousel';
import SmallCarousel from './SmallCarousel/index';

const Main = () => {
  return (
    <div>
      {/* <Carousel /> */}
      <SmallCarousel title="이 상품 어때요?" />
    </div>
  );
};

export default Main;
