import React from 'react';
import { useState } from 'react';
import { wrapper } from './Coupon';
import DeliveryTable from './DeliveryTable';
import SmallModal from './SmallModal';

const svgD =
  'M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z';
const questionBtn = 'text-1.4 text-gray-500 absolute right-0 top-3 focus:outline-0';

const DeliveryInfo = ({ orderer_name, orderer_phone, orderer_address, agreeCheck }) => {
  const [modal, setModal] = useState(false);

  return (
    <div className={wrapper}>
      <div className="pb-r-1.6 border-b border-gray-800 relative">
        <h2 className="text-2 font-medium inline-block">배송 정보</h2>
        <span className="text-1.4 text-gray-500 pl-r-1.4">
          배송 휴무일:샛별배송(휴무없음),택배배송(일요일)
        </span>
        <button className={questionBtn} onClick={onOpen}>
          <div className="mr-2 inline-block relative">배송지 변경 안내</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-gray-500 inline-block"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={svgD} />
          </svg>
        </button>
        {modal && <SmallModal modal={modal} onClose={onClose} />}
      </div>
      <DeliveryTable
        orderer_name={orderer_name}
        orderer_phone={orderer_phone}
        orderer_address={orderer_address}
        agreeCheck={agreeCheck}
      />
    </div>
  );

  function onOpen() {
    setModal(true);
  }
  function onClose() {
    setModal(!modal);
  }
};

export default DeliveryInfo;
