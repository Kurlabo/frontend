import React from 'react';
import { Link } from 'react-router-dom';

const listStyle =
  'absolute right-0 top-12 border-gray-200 border py-2 px-r-0.9 bg-white text-1.2 text-gray-700 z-50';

const HeaderDropDown = () => {
  return (
    <ul className={listStyle}>
      <li className="mb-2">
        <Link to="/">공지사항</Link>
      </li>
      <li className="mb-2">
        <Link to="/">자주하는 질문</Link>
      </li>
      <li className="mb-2">
        <Link to="/">1:1 문의</Link>
      </li>
      <li className="mb-2">
        <Link to="/">상품 제안</Link>
      </li>
      <li className="mb-2">
        <Link to="/">에코포장 피드백</Link>
      </li>
    </ul>
  );
};

export default HeaderDropDown;
