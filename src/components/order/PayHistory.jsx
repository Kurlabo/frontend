import React from 'react';
import PayHistoryDl from './PayHistoryDl';

const accumulate =
  'inline-block text-center text-white bg-yellow-400 border-yellow-500 border border-solid w-12 h-r-1.8 rounded-2xl text-base mr-2  align-text-bottom';

const PayHistory = () => {
  return (
    <div className="w-r-28.4">
      <h2 className="text-2 font-medium pb-r-1.6">결제금액</h2>
      <div className="py-7 px-7 border-2 border-gray-200 bg-kg-500 w-r-28.4">
        <PayHistoryDl title="주문금액" />
        <PayHistoryDl title="상품금액" subtitle="subtitle" />
        <PayHistoryDl title="상품할인금액" subtitle="subtitle" />
        <PayHistoryDl title="배송비" />
        <PayHistoryDl title="쿠폰할인금액" />
        <PayHistoryDl title="적립금사용" />
        <PayHistoryDl title="최종결제금액" />
        <p className="text-right pt-r-1.6">
          <span className={accumulate}>적립</span>
          <span className="text-1.2 align-top text-gray-800 ">구매 시 71원(0.5%)적립</span>
        </p>
      </div>
    </div>
  );
};

export default PayHistory;
