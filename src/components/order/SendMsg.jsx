import React from 'react';
import { useState } from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { formRadioIcon, formRadioIcon2 } from '../../common_style/common';

const cancelBtn = 'w-1/2 h-r-4.4 rounded-p-3 border border-gray-300 mr-4 focus:outline-0';
const saveBtn = 'w-1/2 bg-kp-600 text-white h-r-4.4 rounded-p-3';

const SendMsg = ({
  title,
  closeModal,
  deliveryInfo,
  setDeliveryInfo,
  setReceiverInfo,
  receiverInfo,
}) => {
  const [messageTime, setMessageTime] = useState('afterDelivery');

  return (
    <div>
      <fieldset id="message">
        <legend className="pb-6 pt-9 text-1.4 font-semibold">
          {title}
          <span className="text-formStar">*</span>
        </legend>
        <div className="flex text-1.4">
          {/* 배송 직후 클릭시 */}
          <div className="w-1/2">
            <input
              title="배송 직후"
              type="radio"
              name="message"
              id="afterDelivery"
              className="hidden"
              onChange={changeMsgTime}
            />
            <label htmlFor="afterDelivery" className="cursor-pointer">
              {messageTime === 'afterDelivery' ? (
                <RiRadioButtonFill className={formRadioIcon} />
              ) : (
                <RiCheckboxBlankCircleLine className={formRadioIcon2} />
              )}
              배송 직후
            </label>
          </div>
          {/* 오전 7시 클릭시 */}
          <div className="w-1/2">
            <input
              title="오전 7시"
              type="radio"
              name="message"
              id="sevenOclock"
              className="hidden"
              onChange={changeMsgTime}
            />
            <label htmlFor="sevenOclock" className="cursor-pointer">
              {messageTime === 'sevenOclock' ? (
                <RiRadioButtonFill className={formRadioIcon} />
              ) : (
                <RiCheckboxBlankCircleLine className={formRadioIcon2} />
              )}
              오전 7시
            </label>
          </div>
        </div>
      </fieldset>

      <div className="pt-r-2.9 pb-16 text-1.4 flex justify-between">
        <button className={cancelBtn} onClick={closeModal}>
          취소
        </button>
        <button className={saveBtn} onClick={setReceiver}>
          저장
        </button>
      </div>
    </div>
  );
  function changeMsgTime(e) {
    setMessageTime(e.target.id);
    deliveryInfo.deliveryMsg !== undefined &&
      setDeliveryInfo({ ...deliveryInfo, deliveryMsg: e.target.title });
  }

  function setReceiver() {
    closeModal();
    setReceiverInfo({
      receiverName: deliveryInfo.receiver,
      receiverPhone: deliveryInfo.Phone,
    });
  }
};

export default SendMsg;
