import React, { forwardRef } from 'react';

const regTitle = 'font-medium text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';

const FormInput = forwardRef(
  ({ name, type = 'text', onChange, onFocus, children, placeholder, info }, ref) => {
    return (
      <>
        <th className={regTitle}>
          {children}
          {info ? <span className="text-formStar">*</span> : <></>}
        </th>
        <td className="py-4">
          <input
            type={type}
            name={name}
            className={regInput}
            onChange={onChange}
            onFocus={onFocus}
            placeholder={placeholder}
            ref={ref}
          />
        </td>
      </>
    );
  },
);

export default FormInput;
