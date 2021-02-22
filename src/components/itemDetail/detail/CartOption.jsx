import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount } from '../../../modules/cartAddOption';
import Counter from '../common/Counter';

const openStyle = 'fixed z-900 bottom-0 left-0 w-full bg-white';
const closeStyle = 'fixed z-900 left-0 w-full bg-white';

const CartOption = ({ itemDetail, openModal }) => {
  const isLogin = true;
  const { name, original_price, discount_percent } = itemDetail;

  const { count, productPrice } = useSelector(state => state.cartAddOption);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const increase = useCallback(() => {
    if (count > 99) return;
    dispatch(setCartCount(count + 1));
  }, [count, dispatch]);

  const decrease = useCallback(() => {
    if (count < 1) {
      return;
    }
    dispatch(setCartCount(count - 1));
  }, [count, dispatch]);

  const onClick = useCallback(() => {
    setOpen(open => !open);
  }, []);

  const onClickAddCart = useCallback(() => {
    console.log(count);
    if (count === 0) {
      openModal();
      return;
    }
    // 장바구니 post 요청
    console.log('post cart', count);
  }, [openModal, count]);
  return (
    <div
      className={open ? openStyle : `${closeStyle} ${isLogin ? '-bottom-r-25' : '-bottom-r-28.4'}`}
    >
      <div className=" border-t-2 pt-8 border-klp-600 pb-4">
        <div
          className="absolute ml-p-278 left-1/2 text-p-14 w-r-17 h-r-4.8 pt-5 bg-klp-600 rounded-t -top-r-4.8 cursor-pointer text-center text-white"
          onClick={onClick}
        >
          상품선택
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className=" w-8 inline-block ml-p-18"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className=" w-8 inline-block ml-p-18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="w-r-90 py-3 px-7 flex justify-between mx-auto bg-gray-100">
          <span className="flex-shrink-0 w-p-430 text-p-14 pt-1">{name}</span>
          <div className="w-p-88 self-start">
            <Counter cartNum={count} increase={increase} decrease={decrease} />
          </div>
          <span className=" text-r-1.5 pt-1 pr-12 font-medium">
            {!!discount_percent && !!isLogin && (
              <span className="text-r-1.5 pt-1 pr-4 font-medium text-gray-500 line-through">
                {original_price.toLocaleString()} 원
              </span>
            )}
            {productPrice.toLocaleString()}원
          </span>
        </div>
        <div className="flex justify-end flex-wrap items-end w-r-90 pt-8 mx-auto leading-10">
          <span className="text-p-13 font-medium mt-1">총 상품금액: </span>
          <span className="text-p-28 ml-5 font-bold">
            {(count * productPrice).toLocaleString()}
          </span>
          <span className="text-p-20 ml-2">원</span>
          {!isLogin && !!discount_percent && (
            <p className="text-p-13 font-medium w-full text-right mt-4 text-kp-600">
              로그인 후, 회원할인가가 적용됩니다.
            </p>
          )}
        </div>
        <div className="flex w-r-90 py-8 mx-auto justify-between pb-24">
          <div className="border border-gray-300 rounded select-none text-gray-400 w-r-21.2 h-p-56 text-p-16 text-center pt-6 font-medium">
            재입고 알림
          </div>
          <div className="border border-klp-600 rounded select-none text-klp-600 w-r-21.2 h-p-56 text-p-16 text-center pt-6 font-medium cursor-pointer">
            늘 사는 것
          </div>
          <div
            className="border border-klp-600 rounded select-none text-white w-r-45 h-p-56 text-p-16 text-center pt-6 font-medium cursor-pointer bg-klp-600"
            onClick={onClickAddCart}
          >
            장바구니 담기
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(CartOption);
