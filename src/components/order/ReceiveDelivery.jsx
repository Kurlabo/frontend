import React from 'react';

const ReceiveDelivery = ({ title }) => {
  return (
    <div>
      <fieldset id="location">
        <legend>
          {title}
          <span className="text-formStar">*</span>
        </legend>
        <input type="radio" id="door" value="door" name="location" />
        <label htmlFor="door">문 앞</label>
        <input type="radio" id="security" value="security" name="location" />
        <label htmlFor="security">경비실</label>
        <input type="radio" id="courier" value="courier" name="location" />
        <label htmlFor="courier">택배함</label>
        <input type="radio" id="other" value="other" name="location" />
        <label htmlFor="other">기타 장소</label>
      </fieldset>
    </div>
  );
};

export default ReceiveDelivery;
