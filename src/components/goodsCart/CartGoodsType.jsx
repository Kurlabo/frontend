import React from 'react';

const CartGoodsType = ({
  frozen,
  dropdownFrozen,
  dropdownAmbient,
  isDropdownAmbient,
  isDropdownFrozen,
}) => {
  return (
    <div className="py-6 flex items-center justify-between">
      <div>
        <img
          alt=""
          className="w-12 h-12 inline-block mr-2.5"
          src={
            frozen
              ? 'https://res.kurly.com/pc/service/cart/2007/ico_cold.svg'
              : 'https://res.kurly.com/pc/service/cart/2009/ico_room_v2.svg?v=1'
          }
        />
        <span className="text-r-1.6 font-bold align-bottom">
          {frozen ? '냉장 상품' : '상온 상품'}
        </span>
      </div>
      <button
        onClick={dropdownFrozen ? dropdownFrozen : dropdownAmbient}
        className="focus:outline-none"
        to=""
      >
        <img
          alt=""
          src="https://res.kurly.com/pc/service/cart/2007/ico_dropup.svg"
          className={
            isDropdownAmbient
              ? isDropdownAmbient
                ? 'transform rotate-180'
                : ''
              : isDropdownFrozen
              ? 'transform rotate-180'
              : ''
          }
        />
      </button>
    </div>
  );
};

export default CartGoodsType;
