import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

const quanWrapper =
  'text-xl w-36 text-center h-11 font-bold border-gray-300 border rounded-md flex justify-between items-center';
const accum =
  'inline-block text-center text-white bg-yellow-400 border-yellow-500 border border-solid w-p-38 h-8 rounded-2xl text-lg mr-2  align-text-bottom';
const btnStyle =
  'border-gray-400 border borders-solid text-3xl rounded-p-3 w-full text-gray-900 pt-8 pb-8 mr-4 rounded-md box-border focus:outline-0';
const btnStyleP =
  'border-gray-400 border borders-solid text-3xl rounded-p-3 w-full bg-kp-600 text-white pt-8 pb-8 rounded-md box-border focus:outline-0';
const sumWrapper = 'text-p-16 flex justify-between text-gray-800';
const priceWrapper = 'flex justify-between pt-3 pb-32';

// 모달창 스타일 정의
const modalStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '440px',
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '3rem',
    borderRadius: '6px',
    padding: '0px 30px',
    overflow: 'hidden',
    boxSizing: 'border-box',
  },
  overlay: {
    position: 'fixed',
    zIndex: 999,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(32, 32, 32, 0.75)',
  },
};

const CartModal = ({ modalIsOpen, closeModal, productName, originalPrice }) => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    function handleTouchMove(e) {
      if (modalIsOpen) {
        e.preventDefault();
      }
      console.log('handle');
    }
    window.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    });
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={modalStyles}
      contentLabel="회원가입"
      ariaHideApp={false}
    >
      <h1 className="text-2xl ">{productName}</h1>
      <div className={priceWrapper}>
        <div className="inline-block text-2xl font-bold">{originalPrice.toLocaleString()}원</div>
        <div className={quanWrapper}>
          <button className="w-p-28 focus:outline-0" onClick={onMinus}>
            <img src="/img/ico_minus_on.svg" alt="수량내리기" />
          </button>
          <span className="w-p-33">{count}</span>
          <button className="w-p-28 focus:outline-0" onClick={onPlus}>
            <img src="/img/ico_plus_on.svg" alt="수량올리기" />
          </button>
        </div>
      </div>
      <div className={sumWrapper}>
        <span>합계</span>
        <span className="text-p-24 font-bold">{(+originalPrice * count).toLocaleString()}원</span>
      </div>
      <div className="text-right text-2xl pb-8">
        <span className={accum}>적립</span>
        <span>로그인 후, 적립혜택 제공</span>
      </div>
      <form className="pb-8 flex">
        <button type="button" className={btnStyle} onClick={closeModal}>
          취소
        </button>
        <button type="button" className={btnStyleP}>
          장바구니 담기
        </button>
      </form>
    </Modal>
  );

  // 이벤트 핸들러
  function onMinus(e) {
    if (count <= 0) return;
    setCount(count => count - 1);
  }
  function onPlus(e) {
    setCount(count => count + 1);
  }
};

export default CartModal;
