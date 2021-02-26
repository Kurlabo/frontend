import React, { useState } from 'react';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
export default function CheckBox({ value, id, setAllCheck, checkAll, allCheck }) {
  const [check, setCheck] = useState();
  return (
    <>
      <input id={id} onChange={onChange} type="checkbox" className="invisible absolute" />
      <label htmlFor={id} onClick={checkAll} className="inline-block ">
        {allCheck ? (
          <MdCheckBox className="inline-block align-middle w-9 h-9 leading-none text-klp-600" />
        ) : (
          <MdCheckBoxOutlineBlank className="inline-block align-middle w-9 h-9 leading-none text-kg-200" />
        )}
        <span className="align-middle">{value}</span>
      </label>
    </>
  );

  function onChange(e) {
    if (e.target.id === 'allCheck') setCheck(e.target.checked);
  }
  function checkCheckBox() {
    setCheck(!check);
  }
}
