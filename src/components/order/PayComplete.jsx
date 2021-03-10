import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';

const PayComplete = () => {
  return (
    <div>
      <h1>결제 완료</h1>
      <FiCheckCircle />
      <p>백나라님의 주문이 완료되었습니다.</p>
      <p>곧 만나요!</p>
      <div>
        <h2>결제수단</h2>
        <p>네이버 페이</p>
      </div>
      <div>
        <h2>결제금액</h2>
        <p>3,400원</p>
      </div>
      <div>
        <button>홈으로 이동</button>
        <button>주문내역 상세보기</button>
      </div>
      <p>
        <span>'입금확인'</span>상태일 때는 주문내역 상세 페이지에서 직접 주문 취소가 가능합니다.
      </p>
    </div>
  );
};

export default PayComplete;
