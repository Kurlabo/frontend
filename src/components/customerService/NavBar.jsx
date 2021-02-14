import React from 'react';

const navList = ['공지사항', '자주하는 질문', '1:1문의', '대량주문 문의'];

const listStyle =
  'w-r-20 font-medium border-t border-r border-l border-gray-200 py-6 pl-8 flex cursor-pointer justify-between hover:text-kp-600 hover:bg-gray-100';

const unselectedStyle = ' text-gray-500';
const selectedStyle = ' text-kp-600 bg-gray-100';

const NavBar = ({ state, onClick }) => {
  return (
    <div className="flex flex-col">
      <h2 className="text-r-3 pt-r-0.8 pb-p-33 text-gray-800 font-medium">고객센터</h2>
      <ul className="text-r-1.4">
        {navList.map((nav, i) => {
          return (
            <li
              className={
                listStyle +
                (i === navList.length - 1 ? ' border-b' : '') +
                (state === nav ? selectedStyle : unselectedStyle)
              }
              onClick={onClick}
              key={i}
            >
              {nav}
              <svg
                className="w-r-1.4 mr-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavBar;
