import React from 'react';

const Select = ({ bottom }) => {
  return (
    <div
      className={
        bottom
          ? 'text-r-1.4 border-t border-solid py-5 border-gray-300 w-r-73'
          : 'text-r-1.4 border-b border-solid py-5 border-black w-r-73'
      }
    >
      <input type="radio" className="hidden" />
      <label className="py-7">
        <img
          alt=""
          className="inline-block mr-3.5"
          src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg"
        />
        {/* https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg */}
        전체선택 (0/0)
      </label>
      <span className="px-8 text-gray-400">|</span>
      <span className="py-7">선택삭제</span>
    </div>
  );
};

export default Select;
