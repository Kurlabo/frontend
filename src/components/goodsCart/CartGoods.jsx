import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';

const CartGoods = ({ goods }) => {
  return (
    <div>
      {goods.map((goods) => (
        <div className="py-7 flex items-baseline text-r-1.6 font-semibold border-b">
          <img
            className="mr-r-1.6"
            alt=""
            src="https://res.kurly.com/mobile/service/common/2006/ico_checkbox.svg"
          />
          <Link to="">
            <img
              alt=""
              src={goods.url}
              className="inline-block w-r-6 h-r-7.9 mr-r-1.6"
            />
            <span className="inline-block pr-64">{goods.title}</span>
          </Link>
          <div>
            <button className="inline-block w-12 h-12 border border-r-0 text-gray-300 focus:outline-none">
              -
            </button>
            <button className="inline-block w-12 h-12 border border-l-0 border-r-0 focus:outline-none">
              1
            </button>
            <button className="inline-block w-12 h-12 border border-l-0 focus:outline-none">
              +
            </button>
          </div>
          <div className="pl-20">
            <spna>{goods.prices}</spna>
            <span>원</span>
            <button className="pl-11 text-gray-300 focus:outline-none">
              <AiOutlineClose />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartGoods;
