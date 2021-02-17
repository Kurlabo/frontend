import React from 'react';
import Modal from 'react-modal';

// 모달창 스타일 정의
const modalStyles = {
  content: {
    top: '15%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    fontSize: '16px',
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

const ReviewModal = ({ openModal, closeModal }) => {
  return (
    <Modal
      isOpen={openModal}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="로그인 요청 창"
      ariaHideApp={false}
    >
      <p className="">
        상품후기는 상품을 구매하시고 배송완료된 회원 분만 한 달 내 작성 가능합니다.
      </p>
      <div
        className="p-4 w-32 text-1.4 cursor-pointer rounded-lg self-end bg-blue-600 text-white text-center"
        onClick={closeModal}
      >
        확인
      </div>
    </Modal>
  );
};

export default ReviewModal;
