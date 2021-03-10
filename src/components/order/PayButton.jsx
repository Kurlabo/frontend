import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import axios from '../../../node_modules/axios/index';
import AgreeModal from './AgreeModal';
import { wrapper } from './Coupon';

const payButton =
  'w-r-24.2 h-r-5.5 bg-kp-600 text-white text-1.6 flex justify-center rounded-p-3 mx-auto';

const PayButton = ({ agreeCheck, history, deliveryInfo }) => {
  const [isopen, setIsopen] = useState(false);
  const checkout = useSelector(state => state.orderInfo.checkoutMethod);
  let reciever_visit_method = '';

  switch (deliveryInfo.deliveryPlace) {
    case '문 앞':
      if (deliveryInfo.enterWay === '공동현관 비밀번호') {
        reciever_visit_method = deliveryInfo.enterWay + deliveryInfo.enterPwd;
      } else if (deliveryInfo.enterWay === '자유 출입 가능') {
        reciever_visit_method = deliveryInfo.enterWay;
      } else {
        reciever_visit_method = deliveryInfo.otherMsg;
      }
      break;
    case '경비실':
      reciever_visit_method = '경비실' + deliveryInfo.securityMsg;
      break;
    case '택배함':
      if (deliveryInfo.enterWay === '공동현관 비밀번호') {
        reciever_visit_method =
          deliveryInfo.courierInfo + deliveryInfo.enterWay + deliveryInfo.enterPwd;
      } else if (deliveryInfo.enterWay === '자유 출입 가능') {
        reciever_visit_method = deliveryInfo.courierInfo + deliveryInfo.enterWay;
      } else {
        reciever_visit_method =
          deliveryInfo.courierInfo + deliveryInfo.enterWay + deliveryInfo.otherMsg;
      }
      break;

    // 기타 장소
    default:
      reciever_visit_method = deliveryInfo.enterWay + deliveryInfo.otherMsg;
      break;
  }

  const onClickPayButton = async () => {
    if (agreeCheck) setIsopen(true);
    else {
      setIsopen(false);
      const res = await axios.post('http://3.35.221.9:8080/api/order/checkout', {
        reciever: deliveryInfo.receiver,
        reciever_phone: deliveryInfo.phone,
        reciever_post: deliveryInfo.deliveryPlace,
        reciever_place: deliveryInfo.deliveryPlace,
        reciever_visit_method: reciever_visit_method,
        arrived_alarm: deliveryInfo.deliveryMsg,
        checkout: checkout,
        total_price: 3390,
        total_discount_price: 3900,
      });

      // history.push('/');
      console.log(res.data);
    }
  };

  return (
    <div className={`${wrapper} absolute -bottom-r-180`}>
      <div className={payButton}>
        <button className="focus:outline-0 px-36 py-4" onClick={onClickPayButton}>
          결제하기
        </button>
      </div>
      <div className="pt-16 text-1.4 mx-auto text-center">
        <p className="text-gray-700">
          직접 주문취소는 <span className="font-medium">'입금확인'</span>상태에서만 가능합니다.
        </p>
        <p className="text-gray-700">미성년자가 결제 시 법정대리인이 거래를 취소할 수 있습니다.</p>
        <p className="text-gray-900 font-semibold">상품 미 배송시, 결제수단으로 환불됩니다.</p>
      </div>
      <AgreeModal isopen={isopen} closeModal={closeModal} />
    </div>
  );

  // 결제 모달 닫기
  function closeModal() {
    setIsopen(false);
  }
};

export default withRouter(PayButton);
