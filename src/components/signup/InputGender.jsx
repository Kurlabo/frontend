import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const radioLabel = { verticalAlign: 'super' };
const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-5 text-kp-600';
const formRadioIcon2 = `${formRadioIcon} text-inputGray`;

const InputGender = ({ id, name, onChange, state, children }) => {
  return (
    <div className="w-1/3 inline-block">
      <input type="radio" id={id} name={name} value={id} className="hidden" onChange={onChange} />
      <label htmlFor={id} style={radioLabel}>
        {state === id ? (
          <RiRadioButtonFill className={formRadioIcon} />
        ) : (
          <RiCheckboxBlankCircleLine className={formRadioIcon2} />
        )}
        <span className="align-middle">{children}</span>
      </label>
    </div>
  );
};

export default InputGender;
