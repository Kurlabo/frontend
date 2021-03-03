import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Submit = () => {
  const cart = useSelector(state => state.goodsCart.cart);
  const selectedProduct = cart.filter(item => item.select);
  const addressData = '1';

  const onClickLink = useCallback(() => {}, []);
  return (
    <>
      <div
        // kp-600 text-white
        className={`w-r-28.4 ${
          cart.length !== 0 && selectedProduct.length !== 0 && addressData !== '' ? 'hidden' : ''
        } inline-block h-24 bg-gray-200 mt-8 text-white leading-r-6.3 rounded-r-0.4 text-r-1.6 font-semibold text-center`}
      >
        {cart.length === 0 && <span to="#">상품을 담아주세요</span>}
        {cart.length !== 0 && selectedProduct.length === 0 && (
          <span to="#">상품을 선택해주세요</span>
        )}
        {addressData === '' && selectedProduct.length !== 0 && (
          <span to="#">배송지를 입력해주세요</span>
        )}
        {/* {cart.length !== 0 && selectedProduct.length !== 0 && addressData !== '' && (
          <Link to="/order">주문하기</Link>
        )} */}
      </div>
      {cart.length !== 0 && selectedProduct.length !== 0 && addressData !== '' && (
        <Link
          className="w-r-28.4 inline-block h-24 bg-kp-600 mt-8 text-white leading-r-6.3 rounded-r-0.4 text-r-1.6 font-semibold text-center"
          onClick={onClickLink}
          to="#"
        >
          주문하기
        </Link>
      )}
    </>
  );
};

export default Submit;
