import React, { useState } from 'react';
import GoodsDesc from './GoodsDesc';
import GoodsDetailInfo from './GoodsDetailInfo';
import GoodsImg from './GoodsImg';
import GoodsReview from './GoodsReview';
import ProductQnA from './ProductQnA';
import InfoTab from './InfoTab';

const GoodsInfo = () => {
  const [state, setState] = useState('상품이미지');

  return (
    <div className="w-r-101 mt-20 mb-10">
      <InfoTab onClick={onClick} state={state} />
      <div className="w-full h-p-950 bg-pink-100">{render()}</div>
    </div>
  );

  function onClick(e) {
    setState(e.target.firstChild.nodeValue);
  }

  function render() {
    switch (state) {
      case '상품설명':
        return <GoodsDesc />;
      case '상품이미지':
        return <GoodsImg />;
      case '상세정보':
        return <GoodsDetailInfo />;
      case '고객후기':
        return <GoodsReview />;
      case '상품문의':
        return <ProductQnA />;
      default:
        return;
    }
  }
};

export default GoodsInfo;
