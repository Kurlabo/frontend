import React from 'react';

export const inputStyle =
  'h-r-4.4 w-full px-r-1.4 pb-1 border border-gray-300 rounded-p-3 focus:outline-0';

const ReceiverInput = ({ title, placeholder }) => {
  return (
    <div className="text-1.4">
      <p className="pb-4 pt-6">
        {title}
        <span className="text-formStar">*</span>
      </p>
      <input type="text" placeholder={placeholder} className={inputStyle} />
    </div>
  );
};

export default ReceiverInput;
