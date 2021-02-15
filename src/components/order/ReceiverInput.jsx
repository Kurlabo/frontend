import React from 'react';

const ReceiverInput = ({ title, placeholder }) => {
  return (
    <div>
      <p>
        {title}
        <span className="text-formStar">*</span>
      </p>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default ReceiverInput;
