import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import { formRadioIcon, formRadioIcon2 } from '../../common_style/common';

const ReceiveDeliveryChild = ({ id, title, state, onChange }) => {
  return (
    <div className="text-1.4">
      <input
        type="radio"
        id={id}
        value={id}
        name="location"
        onChange={onChange}
        className="hidden"
      />
      <label htmlFor={id} className="align-top inline-block mb-6 cursor-pointer">
        {state === id ? (
          <RiRadioButtonFill className={formRadioIcon} />
        ) : (
          <RiCheckboxBlankCircleLine className={formRadioIcon2} />
        )}
        {title}
      </label>
    </div>
  );
};

export default ReceiveDeliveryChild;
