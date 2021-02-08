import React, { useRef, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { a11yHidden } from './HeaderNav';
import LoginDropDown from './LoginDropDown';
import { IoMdCloseCircle } from 'react-icons/io';

const inputStyle =
  'inline-block focus:outline-0 focus:bg-gray-50 w-r-24.2 h-r-3.6 rounded-3xl shadow-2xl pl-8 pr-24 bg-gray-100 text-1.2';
const closeBtn =
  'inline-block transform -translate-x-32 translate-y-4 text-gray-300 cursor-pointer absolute';
const searchBtn = 'inline text-4xl transform -translate-x-20 cursor-pointer';

const HeaderSearch = () => {
  const [dropDown, setDropDown] = useState(false);
  const [search, setSearch] = useState({ search: '', toggle: false });
  // input Ref
  const searchRef = useRef();

  return (
    <div className="flex ">
      <div className="mr-6">
        <h3 className={a11yHidden}>상품 검색</h3>
        <input
          type="text"
          className={inputStyle}
          onChange={onChange}
          ref={searchRef}
          maxLength="11"
        />
        <span className={closeBtn} onClick={onRemove}>
          {search.toggle && <IoMdCloseCircle />}
        </span>
        <span>
          <BiSearch className={searchBtn} />
        </span>
      </div>
      <div className="relative">
        <h3 className={a11yHidden}>배송지 검색</h3>
        <div className="inline-block mr-9 text-5xl">
          <GrLocation onMouseOver={onMouseOver} />
          {dropDown && <LoginDropDown />}
        </div>

        <div className="inline-block text-5xl">
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
  // 배송지, 로그인 정보 창
  function onMouseOver() {
    setDropDown(true);
  }

  // function onMouseOut() {
  //   setDropDown(false);
  // }

  // input창 관리
  function onChange() {
    setSearch({ search: searchRef.current.value });
    if (searchRef.current.value) setSearch({ ...search, toggle: true });
    else if (searchRef.current.value < 1) setSearch({ ...search, toggle: false });
  }

  function onRemove() {
    searchRef.current.value = '';
    setSearch({ search: searchRef.current.value });
  }
};

export default HeaderSearch;
