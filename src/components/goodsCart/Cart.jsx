import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import CartGoodsType from './CartGoodsType';
import NoGoods from './NoGoods';
import { isDropDownAmbient, isDropDownCold, isDropDownFrozen } from '../../modules/cart';
import { getGoodsInfo } from '../../modules/goodsCart';
import { useCookies } from 'react-cookie';

const Cart = () => {
  const dispatch = useDispatch();

  // 업데이트 할때마다 변수가 다시 호출되는 문제 해결하는 리팩토링
  const goods = useSelector(state => state.goodsCart.cart);
  const loading = useSelector(state => state.goodsCart.loading);
  const [cookies] = useCookies(['auth']);

  const isDropdownFrozen = useSelector(state => state.cart.frozen);
  const isDropdownAmbient = useSelector(state => state.cart.ambient);
  const isDropdownCold = useSelector(state => state.cart.cold);

  const ambient = goods.filter(good => good.packing_type_text === '상온/종이포장');
  const frozen = goods.filter(
    good => good.packing_type_text === '냉동/종이포장' || good.packing_type_text === '기타',
  );
  const cold = goods.filter(good => good.packing_type_text === '냉장/종이포장');

  useEffect(() => {
    dispatch(getGoodsInfo(cookies));
  }, [cookies, dispatch]);

  return (
    <div>
      {!loading && cold.length !== 0 && (
        <div>
          <CartGoodsType isDropdownCold={isDropdownCold} dropdownCold={dropdownCold} cold />
          <div className={isDropdownCold ? 'hidden' : ''}>
            <Product isDropdownCold={isDropdownCold} goods={cold} />
          </div>
        </div>
      )}
      {!loading && frozen.length !== 0 && (
        <div>
          <CartGoodsType
            isDropdownFrozen={isDropdownFrozen}
            dropdownFrozen={dropdownFrozen}
            frozen
          />
          <div className={isDropdownFrozen ? 'hidden' : ''}>
            <Product isDropdownFrozen={isDropdownFrozen} goods={frozen} />
          </div>
        </div>
      )}
      {!loading && ambient.length !== 0 && (
        <div>
          <CartGoodsType isDropdownAmbient={isDropdownAmbient} dropdownAmbient={dropdownAmbient} />
          <div className={isDropdownAmbient ? 'hidden' : ''}>
            <Product isDropdownAmbient={isDropdownAmbient} goods={ambient} />
          </div>
        </div>
      )}
      {!loading && !ambient.length && !frozen.length && !cold.length && <NoGoods />}
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
