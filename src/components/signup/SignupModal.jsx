import React from 'react';
import Modal from 'react-modal';
import { IoCloseOutline } from 'react-icons/io5';

// 모달창 스타일 정의
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '490px',
    display: 'flex',
    flexDirection: 'column',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    padding: 0,
    borderRadius: 0,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};

const SignupModal = ({ modalIsOpen, closeModal, value }) => {
  let modalText = '';
  switch (value) {
    case 'uid':
      modalText = '아이다를';
      break;
    case 'password':
      modalText = '비밀번호를';
      break;
    case 'repassword':
      modalText = '비밀번호 확인을';
      break;
    case 'name':
      modalText = '이름을';
      break;
    case 'email':
      modalText = '이메일을';
      break;
    case 'phone':
      modalText = '휴대폰 번호를';
      break;
    case 'birthY':
      modalText = '생년을';
      break;
    case 'birthM':
      modalText = '생월을';
      break;
    case 'birthD':
      modalText = '생일을';
      break;
    default:
      modalText = value;
      break;
  }
  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
      <div className="px-8 pt-8">
        <div className="pb-8 border-b-1 border-gray-400">
          <h1 className="inline-block font-bold text-r-1.4 text-kp-600 ">알림메세지</h1>
          <button type="button" className="float-right w-8 h-8 text-r-2" onClick={closeModal}>
            <IoCloseOutline />
          </button>
        </div>
        <p className="py-20 text-r-1.4 text-center">
          {modalText.length > 10 ? modalText : `${modalText} 입력해 주세요`}
        </p>
      </div>
      <div className="bg-modalBg py-12 text-center">
        <button
          onClick={closeModal}
          className="bg-kp-600 text-white w-60 h-20 leading-5 text-r-1.3"
        >
          확인
        </button>
      </div>
    </Modal>
  );
};

export default SignupModal;
