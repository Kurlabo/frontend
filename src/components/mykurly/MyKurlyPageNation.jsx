import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight, FaAngleLeft, FaAngleRight } from 'react-icons/fa';

const MyKurlyPageNation = () => {
  return (
    <div className="mx-auto text-center mt-24">
      <ul className="clear-fix inline-block">
        <li className="float-left hover:bg-kg-100">
          <FaAngleDoubleLeft className="text-kg-300 border border-kg-80 border-r-0 p-4 box-content" />
        </li>
        <li className="float-left hover:bg-kg-100">
          <FaAngleLeft className="text-kg-300 border border-kg-80 border-r-0 p-4 box-content" />
        </li>
        <li className="float-left hover:bg-kg-100">
          <span className=" inline-block border border-kg-80 border-r-0 w-12 h-12 box-content text-center leading-r-3 text-r-1.2 font-medium text-kp-600">
            1
          </span>
        </li>
        <li className="float-left hover:bg-kg-100">
          <FaAngleRight className="text-kg-300 border border-kg-80 border-r-0 p-4 box-content" />
        </li>
        <li className="float-left hover:bg-kg-100">
          <FaAngleDoubleRight className="text-kg-300 border border-kg-80 p-4 box-content" />
        </li>
      </ul>
    </div>
  );
};

export default MyKurlyPageNation;
