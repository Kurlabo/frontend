import React from 'react';
import { useSelector } from 'react-redux';

const Prices = () => {
  const prices = useSelector(state => state.goodsCart.cart);
  const selectedGoods = prices.filter(item => item.select);

  const totalDiscountPrices = selectedGoods.reduce((acc, cur) => acc + cur.reduced_price, 0);

  const totalPrices = prices
    .filter(item => item.select)
    .reduce((acc, cur) => acc + cur.productTotalPrices, 0);

  return (
    <div className="w-r-28.4 px-8 py-9 border text-r-1.6 bg-kg-500">
      <p className="pt-3">
        <span>상품 금액</span>
        <span className="float-right">{totalPrices.toLocaleString()}원</span>
      </p>
      <p className="pt-3">
        <span>상품할인금액</span>
        <span className="float-right">
          {totalDiscountPrices === 0 ? '0원' : `-${totalDiscountPrices.toLocaleString()}원`}
        </span>
      </p>
      <p className="pt-3">
        <span>배송비</span>
        <span className="float-right">
          {totalPrices === 0 ? 0 : totalPrices <= 40000 ? '+3,000' : 0}원
        </span>
        <span
          className={
            totalPrices === 0
              ? 'hidden'
              : totalPrices <= 40000
              ? 'block text-r-1.2 text-kp-600 text-right pt-2'
              : 'hidden'
          }
        >
          {totalPrices <= 40000 ? (40000 - totalPrices).toLocaleString() : ''}원 추가주문 시,{' '}
          <span className="font-bold">무료배송</span>
        </span>
      </p>
      <p className="pt-7 border-t mt-7">
        <span>결제예정금액</span>
        <span className="float-right">
          <span className="text-r-2.2">
            {totalPrices === 0
              ? 0
              : totalPrices <= 40000
              ? (totalPrices + 3000).toLocaleString()
              : totalPrices.toLocaleString()}
            원
          </span>
        </span>
      </p>
    </div>
  );
};

export default Prices;
