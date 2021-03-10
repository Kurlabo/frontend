import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { drag } from '../../common_style/common';
import { getOrderInfo } from '../../modules/order';
import Loading from '../common/Loading';
import GotopBtn from '../itemList/GotopBtn';
import Coupon from './Coupon';
import DeliveryInfo from './DeliveryInfo';
import MemberInfo from './MemberInfo';
import OrderProduct from './OrderProduct';
import PayHistory from './PayHistory';
import PaySelection from './PaySelection';
import PersonalAgree from './PersonalAgree';

const headingStyle = 'w-p-1050 text-5xl font-semibold pb-r-4.4 pt-r-5.5 mx-auto text-center';

const OrderContainer = () => {
  const [agreeCheck, setAgreeCheck] = useState(true);
  const dispatch = useDispatch();
  const orderInfo = useSelector(state => state.orderInfo.orderInfo);
  const products_list = useSelector(state => state.orderInfo.orderInfo.products_list);
  const isLoading = useSelector(state => state.orderInfo.loading);

  useEffect(() => {
    dispatch(getOrderInfo());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loading />}
      <div className="pb-r-12" style={drag}>
        <h1 className={headingStyle}>주문서</h1>
        <OrderProduct products_list={products_list} />
        <MemberInfo
          orderer_name={orderInfo.orderer_name}
          orderer_phone={orderInfo.orderer_phone}
          orderer_email={orderInfo.orderer_email}
        />
        <DeliveryInfo
          orderer_name={orderInfo.orderer_name}
          orderer_phone={orderInfo.orderer_phone}
          orderer_address={orderInfo.orderer_address}
          agreeCheck={agreeCheck}
        />
        <div className="flex flex-wrap mx-auto w-p-1050">
          <Coupon />
          <PayHistory products_list={products_list} />
          <PaySelection />
        </div>
        <PersonalAgree
          onCheck={() => {
            setAgreeCheck(!agreeCheck);
          }}
          agreeCheck={agreeCheck}
        />
        <GotopBtn />
      </div>
    </>
  );
};

export default OrderContainer;
