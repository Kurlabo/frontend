import React from 'react';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const pageAStyle =
  'h-14 pr-5 pl-5 focus:outline-0 hover:bg-gray-100 hover:text-kp-600 border-l border-gray-300 align-text-top inline-block';
const pageFStyle =
  'h-14 pr-5 pl-5 focus:outline-0 hover:bg-gray-100 hover:text-kp-600 align-text-top inline-block';
const pageNoStyle =
  'h-14 focus:outline-0 hover:bg-gray-100 hover:text-kp-600  border-l border-gray-300 align-text-top inline-block ';

const PageContainer = ({ firstParams }) => {
  const totalPages = useSelector(state => state.itemList.totalPages);

  return (
    <div className="pagenation-container text-gray-900 text-xl  border border-gray-300 inline-block">
      <button className={pageFStyle}>
        <AiOutlineDoubleLeft />
      </button>
      <button className={pageAStyle}>
        <AiOutlineLeft />
      </button>
      <ul className="inline-block">
        {(() => {
          const array = [];
          for (let i = 1; i <= totalPages; i++) {
            array.push(
              <li key={i} className={pageNoStyle}>
                <Link
                  to={`/shop/goods/item_list/category=${firstParams}?page=${i - 1}`}
                  style={{ verticalAlign: '-webkit-baseline-middle' }}
                  className="pr-6 pl-6  transform translate-y-r-0.9 inline-block h-14 "
                >
                  {i}
                </Link>
              </li>,
            );
          }
          return array;
        })()}
      </ul>
      <button className={pageAStyle}>
        <AiOutlineRight />
      </button>
      <button className={pageAStyle}>
        <AiOutlineDoubleRight />
      </button>
    </div>
  );
};

export default PageContainer;
