import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import AgreeModal from './AgreeModal';
import { wrapper } from './Coupon';

const payButton =
  'w-r-24.2 h-r-5.5 bg-kp-600 text-white text-1.6 flex justify-center rounded-p-3 mx-auto';

const PayButton = ({ agreeCheck, history }) => {
  const [isopen, setIsopen] = useState(false);

  return (
    <div className={wrapper}>
      <div className={payButton}>
        <button
          className="focus:outline-0 px-36 py-4"
          onClick={() => {
            if (agreeCheck) setIsopen(true);
            else {
              setIsopen(false);
              history.push('/pay_complete');
            }
          }}
        >
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
