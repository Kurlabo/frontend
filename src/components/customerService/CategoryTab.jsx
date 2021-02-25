import React from 'react';

const categoryList = [
  '회원문의',
  '주문/결제',
  '취소/교환/반품',
  '배송문의',
  '쿠폰/적립금',
  '서비스 이용 및 기타',
];

const categoryListStyle =
  'w-r-15.7 h-p-33 pl-r-0.8 pt-r-0.7 text-r-1.2 border-t border-r border-l border-gray-300 bg-white cursor-pointer';

const CategoryTab = ({ state, clickCategoryTab, clickCategory }) => {
  return (
    <div
      className="float-right w-r-15.7 h-r-4.4 pt-r-1.1 pl-6 text-p-14 text-gray-500 border border-gray-300 cursor-pointer relative select-none"
      onClick={clickCategoryTab}
    >
      {state.selected}
      {state.isOpen ? (
        <svg
          className=" w-r-1.9 float-right mr-3"
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
      ) : (
        <svg
          className="w-r-1.9 float-right mr-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      )}
      <div
        className={
          'absolute top-full -left-r-0.1 transition-all overflow-hidden origin-top ' +
          (!state.isOpen ? 'transform scale-y-0' : '')
        }
      >
        <ul>
          {categoryList.map((list, i) => (
            <li
              key={i}
              onClick={clickCategory}
              className={categoryListStyle + (i === categoryList.length - 1 ? ' border-b' : '')}
            >
              {list}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoryTab;
