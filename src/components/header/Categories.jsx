import React from 'react';
import { useState } from 'react';
import { categoryDatas } from '../../common_style/common';
import CategoriesLi from './CategoriesLi';

const Categories = () => {
  const [active, setactive] = useState({
    activeId: '',
    change: false,
  });

  return (
    <div className="absolute top-r-4.5 hidden">
      <ul className="relative bg-white">
        {categoryDatas.map(data => {
          return (
            <CategoriesLi
              id={data.id}
              key={data.id}
              text={data.text}
              inactiveImg={data.inactiveImg}
              activeImg={data.activeImg}
              subdatas={data.sub}
              active={active.activeId}
              change={active.change}
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
    setactive({
      ...active,
      activeId: e.target.id,
      change: true,
    });
    console.log(e.target.id);
  }
  // onMouseLeave
  function inActive(e) {
    setactive({
      ...active,
      change: false,
    });
  }
};

export default Categories;
