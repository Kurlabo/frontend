import React from 'react';

export const inputStyle =
  'h-r-4.4 w-full px-r-1.4 pb-1 border border-gray-300 rounded-p-3 focus:outline-0';

const ReceiverInput = ({ title, placeholder, deliveryInfo, setDeliveryInfo, name }) => {
  return (
    <div className="text-1.4">
      <p className="pb-4 pt-6">
        {title}
        <span className="text-formStar">*</span>
      </p>
      {name === 'receiver' ? (
        <input type="text" placeholder={placeholder} className={inputStyle} onChange={onChange} />
      ) : (
        <input type="text" placeholder={placeholder} className={inputStyle} onChange={onChange} />
      )}
    </div>
  );

  function onChange(e) {
    switch (name) {
      case 'receiver':
        setDeliveryInfo({ ...deliveryInfo, receiver: e.target.value });
        break;
      case 'phone':
        setDeliveryInfo({ ...deliveryInfo, phone: e.target.value });
        break;
      default:
        break;
    }
  }
};

export default ReceiverInput;
