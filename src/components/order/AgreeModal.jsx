import React from 'react';
import Modal from 'react-modal';
import { VscClose } from 'react-icons/vsc';

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
    padding: 0,
    borderRadius: '0px',
    flexDirection: 'column',
    overflowY: 'hidden',
    boxSizing: 'border-box',
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
    zIndex: 999,
  },
};

// tailwind css 클래스 정의
const noticeMsgWrapper =
  'text-1.4 text-kp-600 flex justify-between pb-4 font-medium border-b border-gray-300 items-center';
const confirmBtn = 'mx-auto w-60 h-r-4.4 bg-kp-600 text-white text-1.3 text-center focus:outline-0';

const AgreeModal = ({ isopen, closeModal }) => {
  return (
    <Modal
      isOpen={isopen}
      style={modalStyles}
      contentLabel="결제진행동의"
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      <div>
        <div className="px-8 pt-8">
          <div className={noticeMsgWrapper}>
            <p>알림메세지</p>
            <button className="focus:outline-0" onClick={closeModal}>
              <VscClose className="text-6xl text-gray-300" />
            </button>
          </div>
          <p className="text-center text-1.3 text-gray-600 my-20">
            결제 진행을 위해 결제 진행 필수 동의에 체크해주세요.
          </p>
        </div>
        <div className=" w-full py-12 flex items-center bg-kg-500">
          <button className={confirmBtn} onClick={closeModal}>
            확인
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default AgreeModal;
