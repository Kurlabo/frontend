import React from 'react';
import { useState } from 'react';
import { categoryDatas } from '../../common_style/common';
import CategoriesLi from './CategoriesLi';

const Categories = () => {
  const [active, setactive] = useState('');

  return (
    <div
      className={`absolute top-r-4.5 border-gray-200 border ${active ? 'w-r-44.6' : 'w-r-21.2'}`}
    >
      <ul className="h-r-44.6 bg-white w-r-21.2 overflow-x-hidden overflow-y-auto">
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
            />
          );
        })}
      </ul>
    </div>
  );
  // onMouseOver
  function onActive(e) {
    setactive(e.currentTarget.id);
  }
  // onMouseLeave
  function inActive(e) {
    console.log(e.target);
    setactive('');
  }
};

export default Categories;
