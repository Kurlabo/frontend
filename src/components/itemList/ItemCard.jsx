import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartModal from './CartModal';

const imgStyle = 'w-p-308 h-p-396 transform hover:scale-105 duration-700';

const ItemCard = ({
  imgUrl,
  productName,
  originalPrice,
  shortDesc,
  stickerImageUrl,
  product_id,
}) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  return (
    <>
      <div className="pt-10 pl-14 relative cursor-pointer mb-52">
        <Link to={`shop/goods/goods_view/${product_id}`}>
          <div className="overflow-hidden mb-6">
            <img src={imgUrl} alt="avocado" className={imgStyle} />
            {stickerImageUrl === 'None' ? (
              <></>
            ) : (
              <div className="absolute top-10 w-24">
                <img src={stickerImageUrl} alt="스티커 이미지" />
              </div>
            )}
          </div>
          <div>
            <div className="text-gray-900 text-r-2 ">{productName}</div>
            <div className="font-bold text-3xl pt-r-0.8">{originalPrice.toLocaleString()}원</div>
            <div className="text-gray-400 text-xl pt-r-0.8">{shortDesc}</div>
          </div>
        </Link>
        <button className="absolute top-r-35.5 right-r-2.2 focus:outline-0">
          <img src="/img/cart.svg" alt="장바구니 이미지" onClick={openModal} />
        </button>
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
