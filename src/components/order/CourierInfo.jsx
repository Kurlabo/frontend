import React from 'react';
import { inputStyle } from './ReceiverInput';

const CourierInfo = ({ title }) => {
  return (
    <fieldset>
      <legend className="pb-6 pt-9 font-semibold">
        {title}
        <span className="text-formStar">*</span>
      </legend>

      <input
        type="text"
        id="enterPwd"
        name="entrance"
        className={inputStyle}
        placeholder="택배함 위치 / 택배함 번호 &middot; 비밀번호"
      />
      <div className="text-gray-500 text-1.2 mt-4">
        <p>&middot;지정되지 않은 택배함은 위치만 적어주세요.</p>
        <p>&middot;배송완료 후 택배함 번호와 비밀번호를 알려드려요.</p>
      </div>
    </fieldset>
  );
};

export default CourierInfo;
