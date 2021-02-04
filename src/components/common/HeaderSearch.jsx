import React from 'react';
import { GrLocation } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';
import { BiSearch } from 'react-icons/bi';
import { a11yHidden } from './HeaderNav';

const inputStyle =
  'inline-block focus:outline-0 focus:bg-gray-50 w-r-24.2 h-r-3.6 rounded-3xl shadow-2xl pl-8 pr-24 bg-gray-100 text-1.2';

const HeaderSearch = () => {
  return (
    <div className="flex ">
      <div className="mr-6">
        <h3 className={a11yHidden}>상품 검색</h3>
        <input type="text" className={inputStyle} />
        <span>
          <BiSearch className="inline text-4xl transform -translate-x-12" />
        </span>
      </div>
      <div>
        <h3 className={a11yHidden}>배송지 검색</h3>
        <div className="inline-block mr-9 text-5xl">
          <GrLocation />
        </div>
        <div className="inline-block text-5xl">
          <FiShoppingCart />
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;
