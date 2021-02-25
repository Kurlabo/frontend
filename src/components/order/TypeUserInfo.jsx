import React from 'react';
import EntrancePwd from './EntrancePwd';
import ReceiveDelivery from './ReceiveDelivery';
import ReceiverInput from './ReceiverInput';
import SendMsg from './SendMsg';
import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { formRadioIcon, formRadioIcon2 } from '../../common_style/common';
import { useState } from 'react';
import ReceivePlace from './ReceivePlace';

const container = 'flex flex-col pt-12 pl-12 pr-12';

const TypeUserInfo = () => {
  const [check, setCheck] = useState(true);
  const [receiveDelivery, setreceiveDelivery] = useState('door');

  return (
    <div className={container}>
      <form>
        <div>
          <div className="flex justify-between items-center h-r-8.2">
            <h2 className="text-p-24 font-medium">배송정보</h2>
            <div className="text-1.4">
              <input type="checkbox" id="sameInfo" className="hidden" onChange={onSame} />
              <label className="cursor-pointer" htmlFor="sameInfo">
                {check ? (
                  <RiCheckboxCircleLine className={formRadioIcon2} />
                ) : (
                  <IoIosCheckmarkCircle className={formRadioIcon} />
                )}
                주문자 정보와 동일
              </label>
            </div>
          </div>
        </div>
        <ReceiverInput title="받으실 분" placeholder="이름을 입력해 주세요" />
        <ReceiverInput title="휴대폰" placeholder="숫자만 입력해주세요" />
        <ReceiveDelivery
          title="받으실 장소"
          state={receiveDelivery}
          onChange={e => setreceiveDelivery(e.target.id)}
        />
        {receiveDelivery === 'door' || receiveDelivery === 'courier' ? (
          <EntrancePwd title="공동현관 출입방법" state={receiveDelivery} />
        ) : (
          <ReceivePlace state={receiveDelivery} />
        )}
        <SendMsg title="배송 완료 메시지 전송" />
      </form>
    </div>
  );
  function onSame() {
    setCheck(!check);
  }
};

export default TypeUserInfo;
