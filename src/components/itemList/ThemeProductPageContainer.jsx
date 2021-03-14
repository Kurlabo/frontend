import React from 'react';
import {
  AiOutlineDoubleLeft,
  AiOutlineDoubleRight,
  AiOutlineLeft,
  AiOutlineRight,
} from 'react-icons/ai';
import { Link, useParams, withRouter } from 'react-router-dom';
const pageNoStyle =
  'h-14 focus:outline-0 hover:bg-gray-100 hover:text-kp-600  border-l border-gray-300 inline-block ';
const arrowStyle = 'inline-block hover:bg-gray-100 hover:text-kp-600  border-gray-300 px-5 h-14';
const arrowStyleLeft = `${arrowStyle}`;

const ThemeProductPageContainer = ({ totalPage, location }) => {
  const params = useParams('theme');
  const categoryNo = params.theme.split('=')[1];
  const currentPage = location.search.split('=')[1];
  let pageNationPage = Math.floor((currentPage - 1) / 5);
  return (
    <div className="text-gray-900 text-xl   border border-gray-300 inline-block">
      <Link
        to={`/shop/goods/theme_list/category=${categoryNo}?page=1`}
        className="inline-block hover:bg-gray-100 hover:text-kp-600  border-r border-gray-300 px-5 h-14"
        style={{ verticalAlign: '-webkit-baseline-middle' }}
      >
        <AiOutlineDoubleLeft className="inline-block h-14" />
      </Link>
      <Link
        to={`/shop/goods/theme_list/category=${categoryNo}?page=${currentPage - 1}`}
        className={arrowStyleLeft}
        style={{ verticalAlign: '-webkit-baseline-middle' }}
      >
        <AiOutlineLeft className="inline-block h-14" />
      </Link>
      <ul className="inline-block">
        {(() => {
          let array = [];
          for (let i = pageNationPage * 5 + 1; i < (pageNationPage + 1) * 5 + 1; i++) {
            array.push(
              <li key={(i * 0.77) / 3} className={pageNoStyle}>
                <Link
                  to={`/shop/goods/theme_list/category=${categoryNo}?page=${i}`}
                  style={{ verticalAlign: '-webkit-baseline-middle' }}
                  className="pr-6 pl-6 pt-r-0.8 inline-block h-14 "
                >
                  {i}
                </Link>
              </li>,
            );
          }
          return array;
        })()}
      </ul>
      <Link
        to={`/shop/goods/theme_list/category=${categoryNo}?page=${currentPage + 1}`}
        className={`${arrowStyle} border-l`}
        style={{ verticalAlign: '-webkit-baseline-middle' }}
      >
        <AiOutlineRight className="inline-block h-14" />
      </Link>
      <Link
        to={`/shop/goods/theme_list/category=${categoryNo}?page=${totalPage - 1}`}
        className={`${arrowStyle} border-l`}
        style={{ verticalAlign: '-webkit-baseline-middle' }}
      >
        <AiOutlineDoubleRight className="inline-block h-14" />
      </Link>
    </div>
  );
};

export default withRouter(ThemeProductPageContainer);
