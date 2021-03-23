import React from 'react';

import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';

const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-5 text-kp-600';
const formRadioIcon2 = `${formRadioIcon} text-inputGray`;

const PaymentBrand = ({ brand, imgUrl, id, credit, state, onChange, title }) => {
  return (
    <tr className="text-1.4 text-left font-medium">
      <th className="pt-9 pb-3 w-r-19">{brand} 결제</th>
      <td className="pt-9 pb-3">
        <input
          type="radio"
          id={id}
          className="hidden"
          name="paymentBrand"
          onChange={onChange}
          title={title}
        />
        <label htmlFor={id} className="inline-block pr-20 cursor-pointer">
          {state === id ? (
            <RiRadioButtonFill className={formRadioIcon} />
          ) : (
            <RiCheckboxBlankCircleLine className={formRadioIcon2} />
          )}
          {imgUrl ? (
            <img src={imgUrl} alt={brand + '결제'} className="inline-block h-r-1.8" />
          ) : credit ? (
            <p className="inline-block align-middle">{credit}</p>
          ) : (
            <p className="inline-block align-middle">{brand}</p>
          )}
        </label>
      </td>
    </tr>
  );
};

export default PaymentBrand;
