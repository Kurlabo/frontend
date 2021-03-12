import React from 'react';
import GotopBtn from '../itemDetail/detail/GotopBtn';
import ThemeProductContainer from './ThemeProductContainer';
import ThemeProductHeader from './ThemeProductHeader';
import ThemeProductPageContainer from './ThemeProductPageContainer';

const ThemeProductWrapper = () => {
  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <ThemeProductHeader />
      <ThemeProductContainer />
      <ThemeProductPageContainer />
      <GotopBtn />
    </div>
  );
};

export default ThemeProductWrapper;
