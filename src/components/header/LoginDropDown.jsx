import React from 'react';
import { BiSearch } from 'react-icons/bi';

const loginWrapper =
  'absolute bg-white border-2 border-gray-100 pt-8 pr-7 pb-8 pl-8 text-1.6 w-p-308 right-8 top-r-4.6 z-30';
const loginBtn = 'text-kp-600 border border-kp-600 w-r-10.3 mr-4 rounded-md';
const locationBtn =
  'bg-kp-600 text-white flex border border-kp-600 w-r-15.8 justify-center py-4 rounded-md';

const LoginDropDown = () => {
  return (
    <div className={loginWrapper}>
      <div className="text-kp-600 font-medium mb-2">배송지를 등록하고</div>
      <span>구매 가능한 상품을 확인하세요!</span>
      <div className="flex text-1.2 mt-7">
        <button className={loginBtn}>로그인</button>
        <button className={locationBtn}>
          <BiSearch />
          <span>주소검색</span>
        </button>
      </div>
    </div>
  );
};

export default LoginDropDown;
