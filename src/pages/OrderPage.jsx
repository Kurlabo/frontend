import React from 'react';
import Coupon from '../components/order/Coupon';
import DeliveryInfo from '../components/order/DeliveryInfo';
import MemberInfo from '../components/order/MemberInfo';
import OrderProduct from '../components/order/OrderProduct';
import PayHistory from '../components/order/PayHistory';
import PaySelection from '../components/order/PaySelection';
import PersonalAgree from '../components/order/PersonalAgree';

const OrderPage = () => {
  return (
    <div>
      <h1>주문서</h1>
      <OrderProduct />
      <MemberInfo />
      <DeliveryInfo />
      <Coupon />
      <PayHistory />
      <PaySelection />
      <PersonalAgree />
      <div>
        <form type="submit">
          <button>결제하기</button>
        </form>
        <p>
          직접 주문취소는 <span>'입금확인'</span>상태에서만 가능합니다.
        </p>
        <p>미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다.</p>
        <p>상품 미 배송시, 결제수단으로 환불됩니다.</p>
      </div>
    </div>
  );
};

export default OrderPage;
