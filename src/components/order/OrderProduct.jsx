import React from 'react';
import OrderItemLi from './OrderItemLi';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

export const borderBottom = 'border-b border-gray-800';
const productWrapper = `flex justify-between w-p-1050 mx-auto text-2 ${borderBottom}`;

const OrderProduct = ({ products_list }) => {
  const [btnSwitch, setBtnSwitch] = useState(false);
  const firstProduct = products_list.find((product, index) => index === 0);
  console.log(firstProduct);

  return (
    <>
      <div className={productWrapper}>
        <h2 className="pt-r-1.4 pb-r-1.6 font-medium">주문상품</h2>
        <button className="focus:outline-0 text-5xl" onClick={onClick}>
          {btnSwitch ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
        </button>
      </div>
      <div className="w-p-1050 mx-auto text-p-16">
        {btnSwitch ? (
          <ul>
            {products_list.map((product, index) => (
              <OrderItemLi
                key={product.product_id + index * 113}
                list_image_url={product.list_image_url}
                product_cnt={product.product_cnt}
                product_name={product.product_name}
                product_price={+product.product_price}
                product_discount_price={+product.product_discount_price}
              />
            ))}
          </ul>
        ) : (
          <p className="text-center font-medium pt-12">
            {firstProduct.product_name}외
            <span className="text-kp-600 ml-2">{products_list.length - 1}개</span>상품을 주문합니다.
          </p>
        )}
      </div>
    </>
  );
  function onClick() {
    setBtnSwitch(!btnSwitch);
  }
};

export default OrderProduct;
