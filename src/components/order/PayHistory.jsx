import React from 'react';
import PayHistoryDl from './PayHistoryDl';

const PayHistory = () => {
  return (
    <div>
      <h2>결제금액</h2>

      <div>
        <PayHistoryDl title="주문금액" />
        <PayHistoryDl title="상품금액" />
        <PayHistoryDl title="상품할인금액" />
        <PayHistoryDl title="배송비" />
        <PayHistoryDl title="쿠폰할인금액" />
        <PayHistoryDl title="적립금사용" />
        <PayHistoryDl title="최종결제금액" />
        <p>
          <span>적립</span>
          <span>구매 시 71원(0.5%)적립</span>
        </p>
      </div>
    </div>
  );
};

export default PayHistory;
