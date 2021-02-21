import React from 'react';

const counterBtnStyle = 'w-12 h-11 text-center cursor-pointer select-none align-middle';

const Counter = ({ cartNum = 1, increase, decrease }) => {
  return (
    <div className="w-r-8.8 h-12 flex justify-between bg-white border border-gray-300 rounded-p-3 text-p-14 box-border">
      <span className={`${counterBtnStyle + ' text-5xl leading-9'}`} onClick={decrease}>
        -
      </span>
      <span className="leading-10 align-top text-2xl">{cartNum}</span>
      <span
        className={`${counterBtnStyle + ' text-3xl font-medium leading-10'}`}
        onClick={increase}
      >
        +
      </span>
    </div>
  );
};

export default Counter;
