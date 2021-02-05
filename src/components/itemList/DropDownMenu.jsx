import React from 'react';
const dropStyle = 'pt-5 pr-7 pb-4 hover:text-kp-600 cursor-pointer text-lg';
const dropContainer = 'bg-white absolute top-14 right-8 w-44 text-right block shadow-2xl';

const DropDownMenu = () => {
  return (
    <ul className={dropContainer}>
      <li className={dropStyle}>추천순</li>
      <li className={dropStyle}>신상품순</li>
      <li className={dropStyle}>인기상품순</li>
      <li className={dropStyle}>혜택순</li>
      <li className={dropStyle}>낮은 가격순</li>
      <li className={dropStyle}>높은 가격순</li>
    </ul>
  );
};

export default DropDownMenu;
