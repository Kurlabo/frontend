import React from 'react';
import { Link } from 'react-router-dom';
import { listStyle } from './ItemNavigation';

// 카테고리 별 상품페이지에서 헤더의 리스트 부분

const ItemNavLink = ({ text, id, subid }) => {
  return (
    <li className={listStyle}>
      <Link to={`/shop/goods/item_list/category=${id}${subid}`}>{text}</Link>
    </li>
  );
};

export default ItemNavLink;
