import React from 'react';

const OrderItemLi = ({ quantity, tag, productName, price }) => {
  return (
    <li>
      <img src="/img/banana.jpg" alt="banana" className="w-20" />
      <span>
        {tag} {productName}
      </span>
      <span>{quantity}개</span>
      <span>{price}원</span>
    </li>
  );
};

export default OrderItemLi;
