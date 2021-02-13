import React from 'react';

const Prices = () => {
  return (
    <div className="w-r-24.9 px-8 py-9 border text-r-1.6 bg-kg-500">
      <p className="pt-3">
        <span>상품 금액</span>
        <span className="float-right">0원</span>
      </p>
      <p className="pt-3">
        <span>상품할인금액</span>
        <span className="float-right">0원</span>
      </p>
      <p className="pt-3">
        <span>배송비</span>
        <span className="float-right">0원</span>
      </p>
      <p className="pt-7 border-t mt-7">
        <span>결제예정금액</span>
        <span className="float-right">
          <span className="text-r-2.2">0</span>원
        </span>
      </p>
    </div>
  );
};

export default Prices;
