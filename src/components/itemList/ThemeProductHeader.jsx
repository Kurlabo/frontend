import React, { useState } from 'react';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

const btnStyle =
  'text-xl text-gray-900 pr-5 pb-5 mr-3 border-none text-right inline-block focus:outline-0';

const titleStyle = 'text-2xl font-bold pt-8 pl-2 inline-block float-left leading-7 pb-4';
const listStyle =
  'inline-block pr-5 ml-r-2.9 pl-r-0.9 pb-3 text-gray-900 border-solid border-b-2 hover:text-kp-600 hover:border-kp-600 duration-100 cursor-pointer';

const ThemeProductHeader = () => {
  const [dropDown, setDropDown] = useState(false);
  const { theme } = useParams();

  const params = theme.split('=')[1];
  return (
    <div className="w-p-1050 mx-auto clear-both ">
      <header className="pl-12">
        <div className="overflow-hidden">
          <div className={titleStyle}>
            {params === '200' ? '신상품' : params === '300' ? '베스트' : '알뜰쇼핑'}
          </div>
        </div>
      </header>
      <div className="flex justify-between pt-3">
        <nav className="w-p-870">
          <ul className="text-xl ml-2 ">
            <li className={listStyle}>
              <Link to="/">전체보기</Link>
            </li>
          </ul>
        </nav>
        <div className="relative">
          <button className={btnStyle} onClick={onClick}>
            <span className="mr-2 ">추천순</span>
            {dropDown ? (
              <AiOutlineUp className="inline-block align-middle" />
            ) : (
              <AiOutlineDown className="inline-block align-middle" />
            )}
          </button>
          {dropDown && <DropDownMenu />}
        </div>
      </div>
    </div>
  );
  function onClick() {
    setDropDown(!dropDown);
  }
};

export default ThemeProductHeader;
