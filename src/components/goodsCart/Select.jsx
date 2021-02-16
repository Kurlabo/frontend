import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllCheckBox } from '../../modules/cart';

const Select = ({ bottom }) => {
  const dispatch = useDispatch();
  const selectAll = useSelector((state) => state.cart.selectAll);
  return (
    <div
      className={
        bottom
          ? 'text-r-1.4 border-t border-solid py-5 border-gray-300 w-r-73'
          : 'text-r-1.4 border-b border-solid py-5 border-black w-r-73'
      }
    >
      <input
        onChange={(e) => {
          onChangeRadio(e.target.checked);
        }}
        id="selectAll"
        type="checkbox"
        className="hidden"
      />
      <label
        htmlFor="selectAll"
        className={`pl-14 h-10 select-none bg-left inline-block bg-no-repeat ${
          selectAll === true ? 'bg-checked-button' : 'bg-check-button'
        } `}
      >
        전체선택 (0/0)
      </label>
      <span className="px-8 text-gray-400">|</span>
      <span className="py-7">선택삭제</span>
    </div>
  );

  function onChangeRadio(check) {
    dispatch(selectAllCheckBox(check));
  }
};

export default Select;
