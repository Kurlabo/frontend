import React from 'react';

const InputDate = ({ name, placeholder, onChange, value }) => {
  return (
    <input
      type="text"
      name={name}
      className="w-1/3 mt-3 text-center"
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
};

export default InputDate;
