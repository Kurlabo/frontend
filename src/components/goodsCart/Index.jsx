import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getGoodsInfo } from '../../modules/goodsCart';
import Adress from './Adress';
import Cart from './Cart';
import Notice from './Notice';
import Prices from './Prices';
import Select from './Select';
import Summit from './Summit';
import Title from './Title';

const GoodsCart = () => {
  return (
    <div className="container">
      <Title />
      <div className="flex">
        <div className="inline-block mr-r-3.5">
          <Select />
          <Cart />
          <Select bottom />
        </div>
        <div className="inline-block mt-r-4.5">
          <Adress />
          <Prices />
          <Summit />
          <Notice />
        </div>
      </div>
    </div>
  );
};

export default GoodsCart;
