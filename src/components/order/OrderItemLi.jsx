import React from 'react';

const OrderItemLi = ({ quantity, productName, price }) => {
  return (
    <li className="h-r-12.8 border-b border-gray-100 flex items-center">
      <img src="/img/banana.jpg" alt="banana" className="w-24 h-r-7.9 inline-block mr-8" />
      <p className="w-r-73.9 text-gray-900 text-1.6 font-medium pr-8">{productName}</p>
      <p className="w-40 text-1.4 font-light">{quantity}개</p>
      <p className="w-r-12 text-right">{price}원</p>
    </li>
  );
};

export default OrderItemLi;
