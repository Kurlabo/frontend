import React from 'react';
import OrderItemLi from './OrderItemLi';

const OrderProduct = () => {
  return (
    <>
      <div className="flex justify-between border-b border-gray-800">
        <h2>주문상품</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
      <div>
        <div>
          [Kurly's] 동물복지 백색 유정란 10구의 <span className="text-kp-600">3개</span>상품을
          주문합니다.
        </div>
        <ul>
          <OrderItemLi
            quantity={1}
            tag="[Kurly's]"
            productName="동물복지 백색 유정란 10구"
            price={4600}
          />
        </ul>
      </div>
    </>
  );
};

export default OrderProduct;
