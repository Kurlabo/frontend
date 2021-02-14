import React, { useEffect } from 'react';
import { VscClose } from 'react-icons/vsc';
export default function Modal({ closeModal, modal, value }) {
  return (
    <div
      className={
        modal
          ? 'absolute left-0 top-0 w-full h-full overflow-y-hidden flex justify-center items-center'
          : 'hidden'
      }
    >
      <div
        onClick={closeModal}
        className="absolute left-0 top-0 w-full h-full bg-black bg-opacity-40 -z-1"
      ></div>
      <div tabIndex="-1" className="relative w-1/3 h-p-350  bg-gray-200 mx-auto text-center">
        <h2 className="py-8 px-8 border-b bg-white border-gray-200 text-r-1.4 text-left text-kp-600 font-medium">
          알림메세지
        </h2>
        <p className="flex justify-center items-center py-10 bg-white text-kg-300 text-r-1.4">
          {value}
        </p>
        <button
          onClick={closeModal}
          className="w-60 h-16 text-r-1.2 text-white bg-kp-600 my-9 shadow"
        >
          확인
        </button>
        <VscClose onClick={closeModal} className="text-r-2 absolute right-3 top-3 cursor-pointer">
          <span className="w-0 h-0 text-0 overflow-hidden">닫기</span>
        </VscClose>
      </div>
    </div>
  );
}
