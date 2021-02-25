import React from 'react';
import { useState } from 'react';
import { drag } from '../../common_style/common';
import GotopBtn from '../itemList/GotopBtn';
import Coupon from './Coupon';
import DeliveryInfo from './DeliveryInfo';
import MemberInfo from './MemberInfo';
import OrderProduct from './OrderProduct';
import PayButton from './PayButton';
import PayHistory from './PayHistory';
import PaySelection from './PaySelection';
import PersonalAgree from './PersonalAgree';

const headingStyle = 'w-p-1050 text-5xl font-semibold pb-r-4.4 pt-r-5.5 mx-auto text-center';

const OrderContainer = () => {
  const [agreeCheck, setAgreeCheck] = useState(true);

  return (
    <div className="pb-r-12" style={drag}>
      <h1 className={headingStyle}>주문서</h1>
      <OrderProduct />
      <MemberInfo />
      <DeliveryInfo />
      <div className="flex flex-wrap mx-auto w-p-1050">
        <Coupon />
        <PayHistory />
        <PaySelection />
      </div>
      <PersonalAgree
        onCheck={() => {
          setAgreeCheck(!agreeCheck);
        }}
        agreeCheck={agreeCheck}
      />
      <PayButton agreeCheck={agreeCheck} />
      <GotopBtn />
    </div>
  );
};

export default OrderContainer;
