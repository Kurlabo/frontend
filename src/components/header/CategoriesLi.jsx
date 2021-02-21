import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesSubLi from './CategoriesSubLi';

const liWrapper =
  'pl-r-1.4 pt-r-0.8 flex h-r-3.8 text-r-1.4 hover:bg-kg-500 hover:text-kp-600 text-gray-800 w-80';

const CategoriesLi = ({
  text,
  activeImg,
  inactiveImg,
  subdatas,
  active,
  onActive,
  id,
  change,
  inUl,
  inActive,
}) => {
  console.log(inUl, active);
  return (
    <li className={liWrapper} onMouseEnter={onActive} onMouseLeave={inActive} id={id}>
      {active === id && inUl ? (
        <>
          <img className="w-r-2.4 h-r-2.4 mr-4" src={`/img/category/${activeImg}`} alt={text} />
          <ul className="text-gray-800 bg-kg-500 border-gray-200 border-t border-r border-b absolute top-0 left-r-21.2 h-full w-r-22">
            {subdatas.map(subdata => {
              return <CategoriesSubLi key={subdata.id} subtext={subdata.text} />;
            })}
          </ul>
        </>
      ) : (
        <img className="w-r-2.4 h-r-2.4 mr-4" src={`/img/category/${inactiveImg}`} alt={text} />
      )}
      <Link to="/">{text}</Link>
    </li>
  );
};

export default CategoriesLi;
