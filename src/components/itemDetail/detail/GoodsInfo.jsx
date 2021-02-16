import React, { useState } from 'react';
import GoodsDesc from './GoodsDesc';
import GoodsDetailInfo from './GoodsDetailInfo';
import GoodsImg from './GoodsImg';
import GoodsReview from './GoodsReview';
import ProductQnA from './ProductQnA';
import InfoTab from './InfoTab';

const GoodsInfo = ({ img, name, desc, long_desc, goods_detail_img }) => {
  const [state, setState] = useState('상품설명');

  return (
    <div className="w-r-101 mt-20 mb-10">
      <InfoTab onClick={onClick} state={state} />
      {render()}
    </div>
  );

  function onClick(e) {
    setState(e.target.firstChild.nodeValue);
  }

  function render() {
    switch (state) {
      case '상품설명':
        return <GoodsDesc img={img} name={name} desc={desc} long_desc={long_desc} />;
      case '상품이미지':
        return <GoodsImg goods_detail_img={goods_detail_img} />;
      case '상세정보':
        return <GoodsDetailInfo name={name} />;
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
