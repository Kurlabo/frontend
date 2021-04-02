import React from 'react';

import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';

const RoundCheckBox = ({ is_main, id, state, value, onChange }) => {
  return (
    <>
      <input
        onChange={onChange}
        id={id}
        type="radio"
        defaultChecked={is_main === 1}
        value={value}
        className="invisible absolute"
      />
      <label htmlFor={id} className="inline-block align-middle w-full">
        {state === id ? (
          <IoIosCheckmarkCircleOutline className="cursor-pointer inline-block align-middle w-12 h-12 leading-none text-kg-200" />
        ) : (
          <IoIosCheckmarkCircle className="cursor-pointer inline-block align-middle w-12 h-12 leading-none text-kp-600" />
        )}
        {window.location.pathname === '/shop/mypage/destination/list' || (
          <span className="inline-block align-middle text-r-1.4 text-kg-350">{value}</span>
        )}
      </label>
    </>
  );
};

export default RoundCheckBox;
