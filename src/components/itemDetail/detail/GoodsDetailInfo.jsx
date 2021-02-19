import React from 'react';
import WhyKurly from './WhyKurly';
import GoodsInfoTable from './GoodsInfoTable';
import ConsumerCenter from './ConsumerCenter';

const GoodsDetailInfo = ({ name }) => {
  return (
    <div>
      <GoodsInfoTable name={name} />
      <WhyKurly />
      <ConsumerCenter />
    </div>
  );
};

export default React.memo(GoodsDetailInfo);
