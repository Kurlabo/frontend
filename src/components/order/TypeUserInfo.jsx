import React from 'react';
import EntrancePwd from './EntrancePwd';
import ReceiveDelivery from './ReceiveDelivery';
import ReceiverInput from './ReceiverInput';
import SendMsg from './SendMsg';

const TypeUserInfo = () => {
  return (
    <form>
      <div>
        <div>
          <h2>배송정보</h2>
          <input type="checkbox" id="sameInfo" />
          <label htmlFor="sameInfo">주문자 정보와 동일</label>
        </div>
      </div>
      <ReceiverInput title="받으실 분" placeholder="이름을 입력해 주세요" />
      <ReceiverInput title="휴대폰" placeholder="숫자만 입력해주세요" />
      <ReceiveDelivery title="받으실 장소" />
      <EntrancePwd title="공동현관 출입방법" />
      <SendMsg title="배송 완료 메시지 전송" />
    </form>
  );
};

export default TypeUserInfo;
