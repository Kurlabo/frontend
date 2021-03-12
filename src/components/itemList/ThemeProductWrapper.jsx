import React from 'react';
import { useSelector } from 'react-redux';
import GotopBtn from '../itemDetail/detail/GotopBtn';
import ThemeProductContainer from './ThemeProductContainer';
import ThemeProductHeader from './ThemeProductHeader';
import ThemeProductPageContainer from './ThemeProductPageContainer';

const ThemeProductWrapper = () => {
  const totalPage = useSelector(state => state.themeProductList.totalPages);
  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <ThemeProductHeader />
      <ThemeProductContainer />
      <ThemeProductPageContainer totalPage={totalPage} />
      <GotopBtn />
    </div>
  );
};

export default ThemeProductWrapper;
