import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductInfo } from '../../modules/itemDetail';
import CartModal from './CartModal';

const imgStyle = 'w-p-308 h-p-396 transform hover:scale-105 duration-700';

const ThemeProductCard = ({
  imgUrl,
  productName,
  originalPrice,
  shortDesc,
  stickerImageUrl,
  product_id,
  discount_percent,
  discounted_price,
}) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const dispatch = useDispatch();
  return (
    <>
      <div className="pt-10 pl-14 relative cursor-pointer mb-52">
        <Link to={`/shop/goods/goods_view/${product_id}`}>
          <div className="overflow-hidden mb-6">
            <img src={imgUrl} alt={productName} className={imgStyle} onError={handleImgError} />
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
            {discount_percent === 0 ? (
              <>
                <span className="font-bold inline-block text-3xl pt-r-0.7">
                  {originalPrice.toLocaleString()}원
                </span>
              </>
            ) : (
              <>
                <span className="text-discount-100 text-3xl font-bold inline-block pt-r-0.7 pr-r-0.6">
                  {discount_percent}%
                </span>
                <span className="font-bold text-3xl">{discounted_price.toLocaleString()}원</span>
                <span className="font-normal block text-3xl text-gray-400 text-r-1.6 line-through pt-r-0.6">
                  {originalPrice.toLocaleString()}원
                </span>
              </>
            )}

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
        discounted_price={+discounted_price}
        discount_percent={+discount_percent}
        product_id={product_id}
      />
    </>
  );

  function openModal() {
    dispatch(getProductInfo(product_id));
    setmodalIsOpen(true);
  }
  function closeModal() {
    setmodalIsOpen(false);
  }

  function handleImgError(e) {
    e.target.src = '/img/commingsoonresize.png';
  }
};

export default ThemeProductCard;
