import React from 'react';
import { useState } from 'react';
import { categoryDatas } from '../../common_style/common';
import CategoriesLi from './CategoriesLi';

const Categories = () => {
  const [inUl, setInUl] = useState(false);
  const [active, setactive] = useState('');

  return (
    <div
      className={`absolute top-r-4.5 ${active ? 'w-r-44.6' : 'w-r-21.2'}`}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
    >
      <ul className="h-r-49.6 bg-white w-r-21.2 border-gray-200 border-t border-l border-b overflow-x-hidden overflow-y-auto">
        {categoryDatas.map(data => {
          return (
            <CategoriesLi
              id={data.id}
              key={data.id}
              text={data.text}
              inactiveImg={data.inactiveImg}
              activeImg={data.activeImg}
              subdatas={data.sub}
              active={active}
              onActive={onActive}
              inActive={inActive}
              inUl={inUl}
            />
          );
        })}
      </ul>
    </div>
  );
  function onMouseOver(e) {
    setInUl(true);
  }
  function onMouseLeave(e) {
    setInUl(false);
  }

  // onMouseOver
  function onActive(e) {
    setactive(e.currentTarget.id);
  }
  // onMouseLeave
  function inActive(e) {
    if (!inUl) setactive('');
  }
};

export default Categories;
