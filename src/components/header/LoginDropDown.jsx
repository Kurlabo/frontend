import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const width = 500;
const height = 400;
/*global daum*/

export const loginWrapper =
  'absolute border-2 bg-white border-gray-200 pt-8 pr-7 pb-8 pl-8 text-r-1.6 w-r-30.9 right-r-0.7 top-r-4.6 z-50 h-r-17 flex flex-col justify-center box-border';
const deliverReg = 'text-kp-600 font-medium mb-2';
const loginBtn =
  'text-kp-600 border border-kp-600 w-r-10.3 mr-4 rounded-md font-medium focus:outline-0 flex justify-center focus:outline-0';
const locationBtn =
  'bg-kp-600 text-white flex border border-kp-600 w-r-15.8 justify-center py-4 rounded-md';

const LoginDropDown = () => {
  return (
    <div className={loginWrapper}>
      <div className={deliverReg}>배송지를 등록하고</div>
      <span>구매 가능한 상품을 확인하세요!</span>
      <div className="flex text-1.2 mt-7 ">
        <Link to="/shop/account/signin" className={loginBtn}>
          <button>로그인</button>
        </Link>
        <button className={locationBtn} onClick={openSearch}>
          <BiSearch />
          <span>주소검색</span>
        </button>
      </div>
    </div>
  );

  function openSearch() {
    new daum.Postcode({
      oncomplete: function (data) {
        let left = Math.ceil((window.screen.width - width) / 2);
        let top = Math.ceil((window.screen.height - height) / 2);

        const addr = data.userSelectedType === 'R' ? data.roadAddress : data.jibunAddress;
        const buildingName = data.buildingName ? data.buildingName : '';

        // localStorage에 주소 값 저장
        sessionStorage.setItem('address', addr);
        sessionStorage.setItem('buildingName', buildingName);

        window.open(
          '/kakao/destination',
          '_blank',
          `height=${height},width=${width}, top=${top}, left=${left}`,
        );
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }
};

export default LoginDropDown;
