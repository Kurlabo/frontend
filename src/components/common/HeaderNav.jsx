import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

export const a11yHidden = 'text-r-0 opacity-0';
const linkHover = 'hover:text-kp-600 border-transparent border-b border-solid hover:border-kp-600';

const HeaderNav = () => {
  return (
    <>
      <h2 className={a11yHidden}>메인 네비게이션</h2>
      <nav className="w-p-1050  mx-auto text-p-16 flex justify-between items-center text-gray-800 pb-4 ">
        <button className="focus:outline-0">
          <GiHamburgerMenu className="inline-block align-baseline " />
          <span className="pl-4">전체 카테고리</span>
        </button>
        <ul className="flex flex-1 justify-evenly w-r-58 ">
          <li className={linkHover}>
            <NavLink to="/">신상품</NavLink>
          </li>
          <li className={linkHover}>
            <NavLink to="/">베스트</NavLink>
          </li>
          <li className={linkHover}>
            <NavLink to="/">알뜰쇼핑</NavLink>
          </li>
          <li className={linkHover}>
            <NavLink to="/">금주혜택</NavLink>
          </li>
        </ul>
        <HeaderSearch />
      </nav>
    </>
  );
};

export default HeaderNav;
