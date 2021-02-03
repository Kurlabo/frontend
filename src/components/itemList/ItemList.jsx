import React from 'react';
import GotopBtn from './GotopBtn';
import ItemCardContainer from './ItemCardContainer';
import ItemListHeader from './ItemListHeader';
import PageContainer from './PageContainer';

const ItemList = () => {
  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <ItemListHeader />
      <ItemCardContainer />
      <PageContainer />
      <GotopBtn />
    </div>
  );
};

export default ItemList;
