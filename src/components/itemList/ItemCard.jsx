import React, { useState } from 'react';
import CartModal from './CartModal';
const imgStyle = 'w-p-308 h-p-396 transform hover:scale-105 duration-700';
const cartStyle = 'absolute right-6 bottom-48';

const ItemCard = ({ imgUrl, productName, originalPrice, shortDesc, stickerImageUrl }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <>
      <div className="pt-10 pl-14 relative cursor-pointer mb-52">
        <div className="overflow-hidden">
          <img src={imgUrl} alt="avocado" className={imgStyle} />
          <div className="absolute top-10 w-24">
            <img src={stickerImageUrl} alt="스티커 이미지" />
          </div>
        </div>
        <div>
          <button>
            <img
              src="/img/cart.svg"
              alt="장바구니 이미지"
              className={cartStyle}
              onClick={openModal}
            />
          </button>
          <div className="text-gray-900 text-r-2">{productName}</div>
          <div className="font-bold text-3xl pt-r-0.8">{originalPrice.toLocaleString()}원</div>
          <div className="text-gray-400 text-xl pt-r-0.8">{shortDesc}</div>
        </div>
      </div>
      <CartModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        productName={productName}
        originalPrice={+originalPrice}
      />
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
