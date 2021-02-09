import React from 'react';
import '../../../index.css';
import { FaRegCheckCircle } from 'react-icons/fa';

const Select = () => {
  return (
    <div className="text-r-1.4 border-b border-solid py-5 border-black w-r-73">
      <input type="radio" className="hidden" />
      <label className="py-7">
        <FaRegCheckCircle className="inline-block mr-4" />
        전체선택 (0/0)
      </label>
      <span className="px-8 text-gray-400">|</span>
      <span className="py-7">선택삭제</span>
    </div>
  );
};

export default Select;
