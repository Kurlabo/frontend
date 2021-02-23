import React from 'react';
import { Link } from 'react-router-dom';
import CategoriesSubLi from './CategoriesSubLi';

const liWrapper = 'flex pt-r-0.9 text-r-1.4 hover:bg-kg-500 hover:text-kp-600 text-gray-800 w-80';

const CategoriesLi = ({
  text,
  activeImg,
  inactiveImg,
  subdatas,
  active,
  onActive,
  id,
  change,
  inActive,
}) => {
  return (
    <li className={liWrapper} onMouseEnter={onActive} onMouseLeave={inActive} id={id}>
      {change && active === id ? (
        <img className="w-r-2.4 h-r-2.4 mr-4" src={`/img/category/${activeImg}`} alt={text} />
      ) : (
        <img className="w-r-2.4 h-r-2.4 mr-4" src={`/img/category/${inactiveImg}`} alt={text} />
      )}
      <Link to="/">{text}</Link>

      {/* <ul className="bg-red-500 absolute top-0 left-full w-full">
        {subdatas.map(subdata => {
          return <CategoriesSubLi key={subdata.id} subtext={subdata.text} />;
        })}
      </ul> */}
    </li>
  );
};

export default CategoriesLi;
