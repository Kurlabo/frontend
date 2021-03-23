import React from 'react';
import Modal from 'react-modal';

// 모달창 스타일 정의
const modalStyles = {
  content: {
    top: '15%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    fontSize: '14px',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '500px',
    height: '170px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: '3rem',
    padding: '3rem',
    overflowY: 'hidden',
    boxSizing: 'border-box',
    borderRadius: '3px',
    backgroundColor: '#fff',
    boxShadow: '3px 3px 10px 3px #c8c8c8',
  },
  overlay: {
    zIndex: 100,
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff',
    // backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};

const WishListLoginModal = ({ openModal, closeModal, moveToSigninPage }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="로그인 요청 창"
      ariaHideApp={false}
    >
      <p className="">회원 전용 서비스입니다. 로그인/회원가입 페이지로 이동하시겠습니까?</p>
      <div className="flex justify-end">
        <div
          className="p-3 w-28 text-1.4 cursor-pointer rounded-lg self-end text-center mr-2 text-blue-600 border border-gray-300"
          onClick={closeModal}
        >
          취소
        </div>
        <div
          className="p-3 w-28 text-1.4 cursor-pointer rounded-lg self-end text-center bg-blue-600 text-white"
          onClick={onClick}
        >
          확인
        </div>
      </div>
    </Modal>
  );

  function onClick() {
    closeModal();
    moveToSigninPage();
  }
};

export default React.memo(WishListLoginModal);
