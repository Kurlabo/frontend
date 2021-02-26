import React from 'react';
import GotopBtn from '../itemDetail/detail/GotopBtn';
import PageContainer from './PageContainer';
import ThemeProductContainer from './ThemeProductContainer';
import ThemeProductHeader from './ThemeProductHeader';

const ThemeProductWrapper = () => {
  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <ThemeProductHeader />
      <ThemeProductContainer />
      <PageContainer />
      <GotopBtn />
    </div>
  );
};

export default ThemeProductWrapper;
