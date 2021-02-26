import React, { useState } from 'react';
import Modalform from '../login/Modalform';
import Modal from '../login/Modal';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';

const RoundCheckBox = ({ id, value, onChange, onClick, modalClose, closeModal, form }) => {
  return (
    <>
      <input
        onChange={onChange}
        id={id}
        type="radio"
        value={value}
        className="invisible absolute"
      />
      <label onClick={onClick} htmlFor={id} className="inline-block align-middle w-full">
        {!(`${id}` === form.checkLabel) ? (
          <IoIosCheckmarkCircleOutline className="cursor-pointer inline-block align-middle w-12 h-12 leading-none text-kg-200" />
        ) : (
          <IoIosCheckmarkCircle className="cursor-pointer inline-block align-middle w-12 h-12 leading-none text-kp-600" />
        )}
        {window.location.pathname === '/shop/mypage/destination/list' || (
          <span className="inline-block align-middle text-r-1.4 text-kg-350">{value}</span>
        )}
      </label>
      {form.checked ? (
        modalClose === 'modalClose' ? (
          ''
        ) : (
          <Modalform id="modal">
            <Modal
              modal={form.modal}
              closeModal={closeModal}
              value="배송지로 선택이 완료되었습니다"
            />
          </Modalform>
        )
      ) : (
        ''
      )}
    </>
  );
};

export default RoundCheckBox;
