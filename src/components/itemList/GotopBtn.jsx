import React from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const buttonTopStyle =
  'w-24 h-24 border-gray-300 border-2 rounded-50-p text-6xl text-gray-600 hover:bg-gray-100 duration-300';

const GotopBtn = () => {
  let scroll = window.scrollY;

  window.onscroll = onScroll;

  return (
    scroll > 300 && (
      <div className="fixed bottom-8 right-10">
        <button className={buttonTopStyle}>
          <AiOutlineArrowUp className="inline-block" />
        </button>
      </div>
    )
  );

  function onScroll(e) {
    console.log(scroll);
    scroll = window.scrollY;
  }
};
export default GotopBtn;
