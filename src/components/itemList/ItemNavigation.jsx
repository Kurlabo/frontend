import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';
import ItemNavLink from './ItemNavLink';

// 카테고리 별 상품에서 네비게이션 바 part

export const listStyle =
  'inline-block pr-5 pl-5 pb-3 text-gray-900 border-solid border-b-2 hover:text-kp-600 hoverd:border-kp-600 duration-100';
const recStyle = 'text-xl text-gray-900 pr-5 pb-5';

const ItemNavigation = () => {
  return (
    <div className="flex justify-between pt-3">
      <nav className="w-870 ">
        <ul className="text-xl">
          <ItemNavLink />
          <li className={listStyle}>제철과일</li>
          <li className={listStyle}>국산과일</li>
          <li className={listStyle}>수입과일</li>
          <li className={listStyle}>간편과일</li>
          <li className={listStyle}>
            냉동<span>&#183;</span>건과일
          </li>
          <li className={listStyle}>견과류</li>
          <li className={listStyle}>
            쌀<span>&#183;</span>잡곡
          </li>
        </ul>
      </nav>
      <div className={recStyle}>
        추천순 <AiOutlineDown className="inline-block" />
      </div>
    </div>
  );
};

export default ItemNavigation;
