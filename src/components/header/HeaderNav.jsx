import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

export const a11yHidden = 'text-r-0 opacity-0';
const linkHover = 'hover:text-kp-600 border-transparent border-b border-solid hover:border-kp-600';
const navStyle =
  'w-p-1050  mx-auto text-p-16 flex justify-between items-center text-gray-800 pb-4 ';
const headerFix =
  'w-full fixed bg-white top-0 z-100 transform duration-75 border-gray-50 border-b-4 pt-4 ';
const headerRel = 'w-full bg-white z-100 transform duration-75 border-gray-50 border-b-4 relative';

const HeaderNav = () => {
  const [fix, setFix] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', changePos);
    return () => {
      window.removeEventListener('scroll', changePos);
    };
  }, []);

  return (
    <div className={fix ? headerFix : headerRel}>
      <h2 className={a11yHidden}>메인 네비게이션</h2>
      <nav className={navStyle}>
        <button className="focus:outline-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-9 inline-block text-gray-800 align-bottom"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
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
    </div>
  );

  function changePos() {
    window.pageYOffset > 100 ? setFix(true) : setFix(false);
  }
};

export default HeaderNav;
