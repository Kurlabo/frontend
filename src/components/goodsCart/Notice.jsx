import React from 'react';

const Notice = () => {
  return (
    <div className="pt-14 w-r-24.9">
      <p className="pt-3 pl-4 relative">
        <span className="inline-block absolute left-0">·</span>
        '입금확인' 상태일 때는 주문 내역 상세에서 직접 주문취소가 가능합니다.
      </p>
      <p className="pt-3 pl-4 relative">
        <span className="inline-block absolute left-0">·</span>
        '입금확인' 이후 상태에는 고객센터로 문의해주세요.
      </p>
    </div>
  );
};

export default Notice;
