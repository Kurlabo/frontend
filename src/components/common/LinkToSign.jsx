import React from 'react';
import { NavLink } from 'react-router-dom';
import { GoTriangleDown } from 'react-icons/go';

const signWrapper = 'w-p-1050 flex justify-between items-center mx-auto mt-2 text-1.2';

const LinkToSign = () => {
  return (
    <div className={signWrapper}>
      <img
        src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"
        alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
        className="w-r-16.3 h-r-4.4"
      />
      <nav>
        <ul>
          <li className="inline-block text-kp-600">
            <NavLink to="/" className="px-3">
              회원가입
            </NavLink>
            <span className="text-gray-300">ㅣ</span>
          </li>
          <li className="inline-block">
            <NavLink to="/" className="px-3">
              로그인
            </NavLink>
            <span className="text-gray-300">ㅣ</span>
          </li>
          <li className="inline-block">
            <NavLink to="/" className="px-3">
              고객센터
            </NavLink>
            <GoTriangleDown className="inline-block" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LinkToSign;
