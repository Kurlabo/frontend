import React from 'react';
import ItemNavigation from './ItemNavigation';
const titleStyle = 'text-2xl font-bold pt-8 pl-2 inline-block float-left leading-7 pb-4';

// 카테고리 별 상품페이지에서 헤더 파트

const ItemListHeader = ({ imgUrl, desc, text, subdatas, id }) => {
  return (
    <div className="w-p-1050 mx-auto clear-both">
      <header className="pl-12">
        <div className="overflow-hidden">
          <img
            src={`/img/category/${imgUrl}`}
            alt={desc}
            className="inline-block w-16 h-16 float-left"
          />
          <div className={titleStyle}>{text}</div>
        </div>
        <ItemNavigation subdatas={subdatas} />
      </header>
    </div>
  );
};

export default ItemListHeader;
