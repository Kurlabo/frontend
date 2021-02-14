import React from 'react';
import { VscClose } from 'react-icons/vsc';

const modalWrapper =
  'w-r-19 py-r-1.4 pl-r-1.4 pr-r-3.6 top-12 -right-9 h-24 text-1.2 text-white bg-klp-150 text-left rounded-lg absolute';
const imgUrl = 'https://res.kurly.com/pc/service/order/2011/ico_location_picker.svg';

const SmallModal = ({ setModal }) => {
  return (
    <div className={modalWrapper}>
      <img src={imgUrl} alt="img" className="absolute -top-4 right-13" />
      <p>장바구니,홈에서</p>
      <p>배송지를 변경할 수 있어요.</p>
      <button className="absolute top-5 right-5 focus:outline-0">
        <VscClose className="text-4xl" />
      </button>
    </div>
  );
};

export default SmallModal;
