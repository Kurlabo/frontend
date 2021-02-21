import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartGoods from './CartGoods';
import CartGoodsType from './CartGoodsType';
import NoGoods from './NoGoods';
import { isDropDownAmbient, isDropDownCold, isDropDownFrozen } from '../../modules/cart';
import { setAllPrices } from '../../modules/cart';

const Cart = () => {
  const dispatch = useDispatch();
  const goodsTest = useSelector(state => state.goodsCart);

  // 상온 상품
  const goods = [
    {
      id: 1,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트 냉동',
      prices: 28000,
      packing_type_text: '냉동/종이포장',
    },
    {
      id: 2,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트 냉장',
      prices: 28000,
      packing_type_text: '냉장/종이포장',
    },
    {
      id: 3,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트 상온',
      prices: 28000,
      packing_type_text: '상온/종이포장',
    },
    {
      id: 4,
      url: 'https://img-cf.kurly.com/shop/data/goods/1611646838140i0.jpg',
      title: '[닥터포헤어] 폴리젠 트리트먼트 상온',
      prices: 28000,
      packing_type_text: '상온/종이포장',
    },
  ];

  // "냉동/종이포장",
  // "냉장/종이포장",
  // "상온/종이포장"
  const ambient = goods.filter(good => good.packing_type_text === '상온/종이포장');
  const cold = goods.filter(good => good.packing_type_text === '냉동/종이포장');
  const frozen = goods.filter(good => good.packing_type_text === '냉장/종이포장');

  const isDropdownFrozen = useSelector(state => state.cart.frozen);
  const isDropdownAmbient = useSelector(state => state.cart.ambient);
  const isDropdownCold = useSelector(state => state.cart.cold);
  console.log(isDropdownCold);

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
          <CartGoodsType isDropdownFrozen={isDropdownFrozen} dropdownFrozen={dropdownFrozen} cold />
          <div className={isDropdownFrozen ? 'hidden' : ''}>
            <CartGoods goods={frozen} />
          </div>
        </div>
      )}
      {frozen.length === 0 && ambient.length === 0 && cold.length === 0 && (
        <div className="border-t pt-6 border-black" />
      )}
      {cold.length !== 0 && (
        <div>
          <CartGoodsType isDropdownCold={isDropdownCold} dropdownCold={dropdownCold} frozen />
          <div className={isDropdownCold ? 'hidden' : ''}>
            <CartGoods isDropdownCold={isDropdownCold} goods={ambient} />
          </div>
        </div>
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
  function dropdownCold() {
    dispatch(isDropDownCold());
  }
};

export default Cart;
