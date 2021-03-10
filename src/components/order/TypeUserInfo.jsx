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
import Modal from 'react-modal';

const container = 'flex flex-col pt-12 pl-12 pr-12';

const TypeUserInfo = ({ modalIsOpen, closeModal, deliveryInfo, setDeliveryInfo }) => {
  const [check, setCheck] = useState(true);
  // 받으실 장소
  const [receiveDelivery, setreceiveDelivery] = useState('door');
  const DeliveryModalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '500px',
      height: '650px',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '10px',
      border: '3px solid #575555',
      overflow: 'auto',
      boxSizing: 'border-box',
    },
    overlay: {
      position: 'fixed',
      zIndex: 999,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(32, 32, 32, 0.75)',
    },
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={DeliveryModalStyles}
      contentLabel="회원가입"
      ariaHideApp={false}
    >
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
          <ReceiverInput
            title="받으실 분"
            placeholder="이름을 입력해 주세요"
            name="receiver"
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
          <ReceiverInput
            title="휴대폰"
            placeholder="숫자만 입력해주세요"
            name="phone"
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
          <ReceiveDelivery
            title="받으실 장소"
            state={receiveDelivery}
            onChange={e => {
              setreceiveDelivery(e.target.id);
              setDeliveryInfo({
                ...deliveryInfo,
                deliveryPlace: e.target.title,
                otherMsg: '',
                courierInfo: '',
                enterWay: '',
                enterPwd: '',
                securityMsg: '',
              });
            }}
            deliveryInfo={deliveryInfo}
          />
          {receiveDelivery === 'door' || receiveDelivery === 'courier' ? (
            <EntrancePwd
              title="공동현관 출입방법"
              state={receiveDelivery}
              deliveryInfo={deliveryInfo}
              setDeliveryInfo={setDeliveryInfo}
            />
          ) : (
            <ReceivePlace
              state={receiveDelivery}
              deliveryInfo={deliveryInfo}
              setDeliveryInfo={setDeliveryInfo}
            />
          )}
          <SendMsg
            title="배송 완료 메시지 전송"
            closeModal={closeModal}
            deliveryInfo={deliveryInfo}
            setDeliveryInfo={setDeliveryInfo}
          />
        </form>
      </div>
    </Modal>
  );
  function onSame() {
    setCheck(!check);
  }
};

export default TypeUserInfo;
