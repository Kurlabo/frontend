import { useState } from 'react';
import Counter from '../common/Counter';

const openStyle = 'fixed z-900 bottom-0 left-0 w-full bg-white';
const closeStyle = 'fixed z-900 -bottom-r-25 left-0 w-full bg-white';

const CartOption = ({ name, price }) => {
  const [open, setOpen] = useState(false);
  const [option, setOption] = useState({
    count: 1,
    total: price,
  });

  return (
    <div className={open ? openStyle : closeStyle}>
      <div className=" border-t-2 pt-8 border-klp-600 ">
        <div
          className="absolute ml-p-278 left-1/2 text-p-14 w-r-17 h-r-4.8 pt-5 bg-klp-600 rounded-t -top-r-4.8 cursor-pointer text-center text-white"
          onClick={onClick}
        >
          상품선택
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className=" w-8 inline-block ml-p-18"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className=" w-8 inline-block ml-p-18"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <div className="w-r-90 py-3 px-7 flex justify-between mx-auto bg-gray-100">
          <span className="flex-shrink-0 w-p-430 text-p-14 pt-1">{name}</span>
          <div className="w-p-88 self-start">
            <Counter cartNum={option.count} increase={increase} decrease={decrease} />
          </div>
          <span className=" text-r-1.5 pt-1 pr-12 font-medium">{price.toLocaleString()}원</span>
        </div>
        <div className="flex justify-end items-end w-r-90 py-8 mx-auto leading-10">
          <span className="text-p-13 font-medium mt-1">총 상품금액: </span>
          <span className="text-p-28 ml-5 font-bold">{option.total.toLocaleString()}</span>
          <span className="text-p-20 ml-2">원</span>
        </div>
        <div className="flex w-r-90 py-8 mx-auto justify-between pb-24">
          <div className="border border-gray-300 rounded select-none text-gray-400 w-r-21.2 h-p-56 text-p-16 text-center pt-6 font-medium">
            재입고 알림
          </div>
          <div className="border border-klp-600 rounded select-none text-klp-600 w-r-21.2 h-p-56 text-p-16 text-center pt-6 font-medium cursor-pointer">
            늘 사는 것
          </div>
          <div className="border border-klp-600 rounded select-none text-white w-r-45 h-p-56 text-p-16 text-center pt-6 font-medium cursor-pointer bg-klp-600">
            장바구니 담기
          </div>
        </div>
      </div>
    </div>
  );

  function increase() {
    setOption(state => ({
      count: state.count + 1,
      total: price * (state.count + 1),
    }));
  }
  function decrease() {
    if (option.count < 1) return;
    setOption(state => ({
      count: state.count - 1,
      total: price * (state.count - 1),
    }));
  }
  function onClick() {
    setOpen(open => !open);
  }
};

export default CartOption;
