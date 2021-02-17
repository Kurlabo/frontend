import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartGoods from './CartGoods';
import CartGoodsType from './CartGoodsType';
import NoGoods from './NoGoods';
import { isDropDownAmbient, isDropDownFrozen } from '../../modules/cart';
import { setAllPrices } from '../../modules/cart';

const Cart = () => {
  const dispatch = useDispatch();

  // 상온 상품
  const goods = [
    {
      id: 1,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트',
      prices: 28000,
      ambient: false,
    },
    {
      id: 2,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트',
      prices: 28000,
      ambient: true,
    },
    {
      id: 3,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트',
      prices: 28000,
      ambient: false,
    },
    {
      id: 4,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트',
      prices: 28000,
      ambient: false,
    },
  ];

  const ambient = goods.filter(good => good.ambient);
  const frozen = goods.filter(good => !good.ambient);

  const isDropdownFrozen = useSelector(state => state.cart.frozen);
  const isDropdownAmbient = useSelector(state => state.cart.ambient);

  const dispatchPrams = goods.map(goods => ({
    id: goods.id,
    select: false,
    count: 1,
    prices: goods.prices,
    initalPrices: goods.prices,
  }));
  dispatch(setAllPrices(dispatchPrams));

  return (
    <div>
      {frozen.length !== 0 && (
        <div>
          <CartGoodsType
            isDropdownFrozen={isDropdownFrozen}
            dropdownFrozen={dropdownFrozen}
            frozen
          />
          <div className={isDropdownFrozen ? 'hidden' : ''}>
            <CartGoods goods={frozen} />
          </div>
        </div>
      )}
      {frozen.length === 0 && ambient.length === 0 && (
        <div className="border-t pt-6 border-black" />
      )}
      {ambient.length !== 0 && (
        <div>
          <CartGoodsType isDropdownAmbient={isDropdownAmbient} dropdownAmbient={dropdownAmbient} />
          <div className={isDropdownAmbient ? 'hidden' : ''}>
            <CartGoods isDropdownAmbient={isDropdownAmbient} goods={ambient} />
          </div>
        </div>
      )}
      {!ambient.length && !frozen.length && <NoGoods />}
    </div>
  );

  function dropdownFrozen() {
    dispatch(isDropDownFrozen());
  }

  function dropdownAmbient() {
    dispatch(isDropDownAmbient());
  }
};

export default Cart;