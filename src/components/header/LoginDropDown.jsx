import React from 'react';
import { BiSearch } from 'react-icons/bi';

const loginWrapper =
  'absolute border-2 bg-white border-gray-100 pt-8 pr-7 pb-8 pl-8 text-1.6 w-r-30.9 right-8 top-r-4.6 z-50 ';
const deliverReg = 'text-kp-600 font-medium mb-2';
const loginBtn =
  'text-kp-600 border border-kp-600 w-r-10.3 mr-4 rounded-md font-medium focus:outline-0';
const locationBtn =
  'bg-kp-600 text-white flex border border-kp-600 w-r-15.8 justify-center py-4 rounded-md';

const LoginDropDown = () => {
  return (
    <div className={loginWrapper}>
      <div className={deliverReg}>배송지를 등록하고</div>
      <span>구매 가능한 상품을 확인하세요!</span>
      <div className="flex text-1.2 mt-7 ">
        <button className={loginBtn}>로그인</button>
        <button className={locationBtn} onClick={onClick}>
          <BiSearch />
          <span>주소검색</span>
        </button>
      </div>
    </div>
  );
  function onClick() {
    const width = 500;
    const height = 400;
    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(
      '/kakao/destination',
      '_blank',
      `height=${height},width=${width}, top=${top}, left=${left}`,
    );
  }
};

export default LoginDropDown;
