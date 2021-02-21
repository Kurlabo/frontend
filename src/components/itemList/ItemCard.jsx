import React, { useState } from 'react';
import CartModal from './CartModal';
const imgStyle = 'w-p-308 h-p-396 transform hover:scale-105 duration-700';
const cartStyle = 'absolute right-6 bottom-48';

const ItemCard = () => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <>
      <div className="pt-10 pl-14 relative cursor-pointer">
        <div className="overflow-hidden">
          <img src="/img/salmon.jpg" alt="avocado" className={imgStyle} />
        </div>
        <div className="pt-6 ">
          <button>
            <img
              src="/img/cart.svg"
              alt="장바구니 이미지"
              className={cartStyle}
              onClick={openModal}
            />
          </button>
          <div className="text-gray-900 text-4xl">[KF365] 아보카도 1개</div>
          <div className="font-bold text-3xl pt-3">2,600원</div>
          <div className="text-gray-400 text-xl pt-3">부드럽고 상큼한 과육, 숲속의 버터 (1개)</div>
        </div>
      </div>
      <CartModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </>
  );
  function openModal() {
    setmodalIsOpen(true);
  }
  function closeModal() {
    setmodalIsOpen(false);
  }
};

export default ItemCard;
