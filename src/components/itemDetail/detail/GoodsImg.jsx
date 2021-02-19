import React from 'react';

const GoodsImg = ({ goods_detail_img }) => {
  return (
    <div className="w-full min-h-screen">
      <img src={goods_detail_img} alt="상품 상세 이미지" />
    </div>
  );
};

export default React.memo(GoodsImg);
