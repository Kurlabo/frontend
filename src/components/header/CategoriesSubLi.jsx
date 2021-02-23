import React from 'react';
import { Link } from 'react-router-dom';

const CategoriesSubLi = ({ subtext }) => {
  return (
    <li>
      <Link to="/">{subtext}</Link>
    </li>
  );
};

export default CategoriesSubLi;
