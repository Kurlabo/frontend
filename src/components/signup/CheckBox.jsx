import React, { forwardRef } from 'react';

import { RiCheckboxCircleLine } from 'react-icons/ri';
import { IoIosCheckmarkCircle } from 'react-icons/io';

const radioLabel = { verticalAlign: 'super' };
const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-5  text-kp-600';
const formRadioIcon2 = `${formRadioIcon} text-inputGray`;
const subText = 'text-r-1.2 text-gray-600';

const CheckBox = forwardRef(({ id, state, onChange, children, sub = false }, ref) => {
  return (
    <div className={`${sub ? 'inline-block py-0' : 'py-4'}`}>
      <input type="checkBox" id={id} className="hidden" onChange={onChange} ref={ref} />
      <label htmlFor={id} style={radioLabel} className={id === 'sns' ? 'mr-32' : ''}>
        {state ? (
          <IoIosCheckmarkCircle className={formRadioIcon} />
        ) : (
          <RiCheckboxCircleLine className={formRadioIcon2} />
        )}
        {children}
      </label>
      {children === '전체약관동의' && (
        <p className={`${subText} text-1.2 -mt-4 pl-r-3.8 pt-2`}>
          선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수 있습니다.
        </p>
      )}
    </div>
  );
});

export default CheckBox;
