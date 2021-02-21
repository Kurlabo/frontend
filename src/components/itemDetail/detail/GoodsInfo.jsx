import React, { useState } from 'react';
import GoodsDesc from './GoodsDesc';
import GoodsDetailInfo from './GoodsDetailInfo';
import GoodsImg from './GoodsImg';
import GoodsReview from './GoodsReview';
import ProductQnA from './ProductQnA';
import InfoTab from './InfoTab';
import { useCallback } from 'react';

const GoodsInfo = ({ itemDetail }) => {
  const { name, detail_context, short_description, detail_img_url, product_img_url } = itemDetail;
  const [state, setState] = useState('상품설명');

  const onClick = useCallback(e => {
    setState(e.target.firstChild.nodeValue);
  }, []);

  const render = useCallback(() => {
    switch (state) {
      case '상품설명':
        return (
          <GoodsDesc
            img={detail_img_url}
            name={name}
            desc={short_description}
            long_desc={detail_context}
          />
        );
      case '상품이미지':
        return <GoodsImg goods_detail_img={product_img_url} />;
      case '상세정보':
        return <GoodsDetailInfo name={name} />;
      case '고객후기':
        return <GoodsReview />;
      case '상품문의':
        return <ProductQnA />;
      default:
        return;
    }
  }, [detail_img_url, name, short_description, detail_context, product_img_url, state]);

  return (
    <div className="w-r-101 mt-20 mb-10">
      <InfoTab onClick={onClick} state={state} />
      {render()}
    </div>
  );
};

export default React.memo(GoodsInfo);
