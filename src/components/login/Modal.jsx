import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { VscClose } from 'react-icons/vsc';
export default function Modal({ closeModal, modal, id, value }) {
  return (
    <div
      className={
        modal
          ? 'absolute  left-0 top-0 w-full h-full overflow-y-hidden flex justify-center items-center'
          : 'hidden'
      }
    >
      <div
        onClick={closeModal}
        className="fixed left-0 top-0 w-full h-full bg-kg-400 bg-opacity-20"
      ></div>
      <div
        tabIndex="-1"
        className="fixed top-2/3 transform -translate-y-2/4 w-r-47 h-p-278 bg-gray-200 mx-auto text-center"
      >
        <h2 className="py-8 px-8 border-b bg-white border-gray-200 text-r-1.4 text-left text-kp-600 font-medium">
          알림메세지
        </h2>
        <p className="flex justify-center items-center py-24 bg-white text-kg-300 text-r-1.4">
          {value}
        </p>
        <button
          onClick={closeModal}
          className="w-60 p-4 text-r-1.2 text-white bg-kp-600 mt-7 shadow"
        >
          {id ? (
            <Link to="/" className="inline-block w-full h-full">
              확인
            </Link>
          ) : (
            '확인'
          )}
        </button>

        <VscClose onClick={closeModal} className="text-r-2 absolute right-3 top-3 cursor-pointer">
          <span className="w-0 h-0 text-0 overflow-hidden">닫기</span>
        </VscClose>
      </div>
    </div>
  );
}
