import React from 'react';

const RefundGuide = ({ onClick, isClose }) => {
  return (
    <div className="flex justify-between py-7 pl-5 text-p-16 font-medium border-b border-gray-300 text-gray-600">
      <h4 className="text-gray-500 w-p-150">교환 및 환불 안내</h4>
      <p className="font-light w-r-65">
        고객님의 단순 변심으로 인한 반품은 어려울 수 있으니 양해 부탁드립니다.
      </p>

      <div className="text-klp-600 w-p-128 text-right cursor-pointer self-center" onClick={onClick}>
        {isClose ? '자세히 보기' : '닫기'}
        {isClose ? (
          <svg
            className="w-p-18 inline-block ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            className="w-p-18 inline-block ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clip-rule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default RefundGuide;
