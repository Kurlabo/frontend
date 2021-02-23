import React, { useRef, useState } from 'react';
import { GrLocation } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { a11yHidden } from './HeaderNav';
import LoginDropDown from './LoginDropDown';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';

const inputStyle =
  'inline-block focus:outline-0 focus:bg-gray-50 w-r-24.2 h-r-3.6 rounded-3xl shadow-sm pl-8 pr-24 bg-gray-100 text-1.2';
const closeBtn =
  'inline-block transform -translate-x-32 translate-y-4 text-gray-300 cursor-pointer absolute';
const searchBtn = 'inline text-4xl transform -translate-x-20 cursor-pointer';
const dropDownStyle =
  'cursor-pointer bg-conversation-btn bg-no-repeat absolute w-32 h-36 bg-center -top-r-0.4 -left-r-2.5 ';

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
        <div
          className="inline-block mr-9 text-5xl "
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <GrLocation className="cursor-pointer" />
          {dropDown && (
            <>
              <LoginDropDown />
              <div className={dropDownStyle}></div>
            </>
          )}
        </div>

        <Link to="/" className="inline-block text-5xl cursor-pointer">
          <FiShoppingCart className="hover:text-kp-600" />
        </Link>
      </div>
    </div>
  );
  // 배송지, 로그인 정보 창
  function onMouseEnter() {
    setDropDown(true);
  }

  function onMouseLeave() {
    setDropDown(false);
  }

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
