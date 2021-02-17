import React, { useState } from 'react';
import styled from 'styled-components';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
export default function CheckBox({ value }) {
  const [checked, setchecked] = useState(false);
  const onClick = () => {
    setchecked(!checked);
  };
  return (
    <>
      <input id="checkbox" type="checkbox" className="invisible absolute" />
      <label htmlFor="checkbox" onClick={onClick} className="inline-block ">
        {checked ? (
          <MdCheckBox className="inline-block align-middle w-9 h-9 leading-none text-klp-600" />
        ) : (
          <MdCheckBoxOutlineBlank className="inline-block align-middle w-9 h-9 leading-none text-kg-200" />
        )}
        <span className="align-middle">{value}</span>
      </label>
    </>
  );
}
