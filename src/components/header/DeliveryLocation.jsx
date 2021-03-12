import React, { useEffect } from 'react';
import { BiSearch } from 'react-icons/bi';
import { loginWrapper } from './LoginDropDown';

const width = 500;
const height = 400;
/*global daum*/

const locationBtn =
  'bg-white text-kp-600 flex border border-kp-600 w-full justify-center py-4 rounded-md focus:outline-0';

const DeliveryLocation = () => {
  let addr = sessionStorage.getItem('address');
  let buildingName = sessionStorage.getItem('buildingName');

  return (
    <div>
      <div className={loginWrapper}>
        <div className="font-medium mb-2 leading-9">
          {`${addr} ${buildingName && '(' + buildingName + ')'}`}
        </div>
        <div className="text-1.2 mt-7 ">
          <p className="pt-r-0.4 text-r-1.4 text-kp-600 font-medium mb-5">배송 가능</p>
          <button className={locationBtn} onClick={openSearch}>
            <BiSearch />
            <span>배송지 변경</span>
          </button>
        </div>
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

        // window.open(
        //   '/kakao/destination',
        //   '_blank',
        //   `height=${height},width=${width}, top=${top}, left=${left}`,
        // );
      },
    }).open({
      left: Math.ceil((window.screen.width - width) / 2),
      top: Math.ceil((window.screen.height - height) / 2),
    });
  }
};

export default DeliveryLocation;
