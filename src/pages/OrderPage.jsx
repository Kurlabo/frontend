import React from 'react';
import GotopBtn from '../components/itemList/GotopBtn';
import Coupon from '../components/order/Coupon';
import DeliveryInfo from '../components/order/DeliveryInfo';
import MemberInfo from '../components/order/MemberInfo';
import OrderProduct from '../components/order/OrderProduct';
import PayButton from '../components/order/PayButton';
import PayHistory from '../components/order/PayHistory';
import PaySelection from '../components/order/PaySelection';
import PersonalAgree from '../components/order/PersonalAgree';

const headingStyle = 'w-p-1050 text-5xl font-semibold pb-r-4.4 pt-r-5.5 mx-auto text-center';

const OrderPage = () => {
  return (
    <div className="pb-r-12">
      <h1 className={headingStyle}>주문서</h1>
      <OrderProduct />
      <MemberInfo />
      <DeliveryInfo />
      <div className="flex flex-wrap mx-auto w-p-1050">
        <Coupon />
        <PayHistory />
        <PaySelection />
      </div>
      <PersonalAgree />
      <PayButton />
      <GotopBtn />
    </div>
  );
};

export default OrderPage;
