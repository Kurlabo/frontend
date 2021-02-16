import React from 'react';

const btnStyle =
  'w-12 border-t border-r border-b text-center p-2 text-1.3 font-medium cursor-pointer';
const hoverStyle = '  hover:bg-klp-50 hover:text-kdp-300';

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className=" border w-12 p-2 cursor-pointer">
        <svg
          className="w-6 mt-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={btnStyle}>
        <svg
          className="w-7 mt-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={btnStyle + hoverStyle}>1</div>
      <div className={btnStyle + hoverStyle}>2</div>
      <div className={btnStyle}>
        <svg
          className="w-7 mt-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className={btnStyle}>
        <svg
          className="w-6 mt-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
          <path
            fillRule="evenodd"
            d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default Pagination;
