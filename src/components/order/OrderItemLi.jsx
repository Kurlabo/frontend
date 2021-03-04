import React from 'react';

const OrderItemLi = ({
  list_image_url,
  product_cnt,
  product_name,
  product_price,
  product_discount_price,
}) => {
  console.log(typeof product_price);
  return (
    <li className="h-r-12.8 border-b border-gray-100 flex items-center">
      <img src={list_image_url} alt={product_name} className="w-24 h-r-7.9 inline-block mr-8" />
      <p className="w-r-73.9 text-gray-900 text-1.6 font-medium pr-8">{product_name}</p>
      <p className="w-40 text-1.4 font-light">{product_cnt}개</p>
      <p className="w-r-12 text-right">
        {product_discount_price
          ? (product_price - product_discount_price).toLocaleString()
          : product_price.toLocaleString()}
        원
      </p>
    </li>
  );
};

export default OrderItemLi;
