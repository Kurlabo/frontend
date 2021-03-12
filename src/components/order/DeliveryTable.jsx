import React, { useCallback, useEffect, useState } from 'react';
import PayButton from './PayButton';
import TypeUserInfo from './TypeUserInfo';

const tdStyle = 'pt-r-1.9 text-1.4 font-normal pb-10';
const defaultDeliver =
  'w-r-7.4 rounded-r-1.1 bg-gray-100 text-1.2 text-center block mb-3 p-1 text-gray-600 font-medium';
const modifyBtn =
  'w-24 h-12 text-1.2 font-medium rounded-p-3 border border-kp-600 text-kp-600 focus:outline-0';

const DeliveryTable = ({ orderer_name, orderer_phone, orderer_address, agreeCheck, orders_id }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [deliveryInfo, setDeliveryInfo] = useState({
    receiver: '',
    phone: '',
    deliveryPlace: '문 앞',
    enterWay: '',
    enterPwd: '',
    securityMsg: '',
    otherMsg: '',
    courierInfo: '',
    deliveryMsg: '배송 직후',
  });
  const [receiverInfo, setReceiverInfo] = useState({
    receiverName: '',
    receiverPhone: '',
  });
  useEffect(() => {
    setReceiverInfo({ receiverName: orderer_name, receiverPhone: orderer_phone });
  }, [orderer_name, orderer_phone]);

  const openModal = useCallback(() => {
    setModalIsOpen(true);
  }, []);
  const closeModal = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <>
      <table className="w-full">
        <tbody className="text-gray-900 text-left">
          <tr className="border-b border-gray-100">
            <th style={{ width: '19rem' }} className="pt-r-1.9 text-1.4 font-medium align-text-top">
              배송지
            </th>
            <td className={tdStyle}>
              <span className={defaultDeliver}>기본배송지</span>
              <p>{orderer_address}</p>
              <span className="text-gray-400 block pt-2">택배배송</span>
            </td>
          </tr>
          <tr style={{ width: '19rem' }} className="align-text-top border-b border-gray-100">
            <th className="pt-r-1.9 text-1.4 font-medium">상세 정보</th>
            <td className={tdStyle}>
              <p className="pb-6 ">{`${receiverInfo.receiverName}, ${receiverInfo.receiverPhone}`}</p>
              <button className={modifyBtn} onClick={openModal}>
                입력
              </button>
            </td>
          </tr>
        </tbody>
        <TypeUserInfo
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          deliveryInfo={deliveryInfo}
          setDeliveryInfo={setDeliveryInfo}
          setReceiverInfo={setReceiverInfo}
          receiverInfo={receiverInfo}
        />
      </table>
      <PayButton agreeCheck={agreeCheck} deliveryInfo={deliveryInfo} orders_id={orders_id} />
    </>
  );
};

export default DeliveryTable;
