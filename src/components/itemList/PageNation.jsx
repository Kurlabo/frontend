import React from 'react';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
const pageNoStyle =
  'h-14  pr-6 pl-6 focus:outline-0 hover:bg-gray-100 hover:text-kp-600  border-l border-gray-300 align-text-top';
const pageAStyle =
  'h-14  pr-5 pl-5 focus:outline-0 hover:bg-gray-100 hover:text-kp-600 border-l border-gray-300 align-text-top';
const pageFStyle =
  'h-14  pr-5 pl-5 focus:outline-0 hover:bg-gray-100 hover:text-kp-600 align-text-top';

const PageNation = () => {
  return (
    <>
      <button className={pageFStyle}>
        <AiOutlineDoubleLeft />
      </button>
      <button className={pageAStyle}>
        <AiOutlineLeft />
      </button>
      <button className={pageNoStyle}>1</button>
      <button className={pageAStyle}>
        <AiOutlineRight />
      </button>
      <button className={pageAStyle}>
        <AiOutlineDoubleRight />
      </button>
    </>
  );
};

export default PageNation;
