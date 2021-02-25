import React from 'react';
import OrderItemLi from './OrderItemLi';
import { RiArrowUpSLine, RiArrowDownSLine } from 'react-icons/ri';
import { useState } from 'react';

export const borderBottom = 'border-b border-gray-800';
const productWrapper = `flex justify-between w-p-1050 mx-auto text-2 ${borderBottom}`;

const OrderProduct = () => {
  const [btnSwitch, setBtnSwitch] = useState(false);

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
            <OrderItemLi
              quantity={1}
              productName="[Kurly's] 동물복지 백색 유정란 10구"
              price={4600}
            />
            <OrderItemLi
              quantity={1}
              productName="[Kurly's] 동물복지 백색 유정란 10구"
              price={4600}
            />
            <OrderItemLi
              quantity={1}
              productName="[Kurly's] 동물복지 백색 유정란 10구"
              price={4600}
            />
          </ul>
        ) : (
          <p className="text-center font-medium pt-12">
            방울토마토 500g외 <span className="text-kp-600">5개</span>상품을 주문합니다.
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
