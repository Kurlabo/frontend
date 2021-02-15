import React from 'react';

const SendMsg = ({ title }) => {
  return (
    <div>
      <fieldset id="message">
        <legend>
          {title}
          <span className="text-formStar">*</span>
        </legend>
        <input type="radio" name="message" id="afterDelivery" />
        <label htmlFor="afterDelivery">배송 직후</label>
        <input type="radio" name="message" id="sevenOclock" />
        <label htmlFor="sevenOclock">오전 7시</label>
      </fieldset>
      <div>
        <button>취소</button>
        <button>저장</button>
      </div>
    </div>
  );
};

export default SendMsg;
