import React, { useState } from 'react';
import Modalform from '../login/Modalform';
import Modal from '../login/Modal';
import { IoIosCheckmarkCircle, IoIosCheckmarkCircleOutline } from 'react-icons/io';

const RoundCheckBox = () => {
  const [form, setform] = useState({
    checkform: false,
    modal: false,
  });
  const { checkform, modal } = form;

  const onClick = () => {
    setform({
      ...form,
      checkform: !checkform,
      modal: !modal,
    });
  };

  return (
    <>
      <input id="inputRadio" type="radio" className="invisible absolute" />
      <label htmlFor="inputRadio" onClick={onClick} className="inline-block ">
        {checkform ? (
          <IoIosCheckmarkCircle className="inline-block align-middle w-12 h-12 leading-none text-klp-600" />
        ) : (
          <IoIosCheckmarkCircleOutline className="inline-block align-middle w-12 h-12 leading-none text-kg-200" />
        )}
      </label>
      {checkform ? (
        <Modalform id="modal">
          <Modal modal={modal} closeModal={closeModal} value="배송지로 선택이 완료되었습니다" />
        </Modalform>
      ) : (
        ''
      )}
    </>
  );
  //모달창 닫기
  function closeModal() {
    setform({
      ...form,
      checkform: true,
      modal: false,
    });
  }
};

export default RoundCheckBox;
