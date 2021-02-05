import React from 'react';
import Header from '../components/common/Header';
import GotopBtn from '../components/itemList/GotopBtn';
import ItemCardContainer from '../components/itemList/ItemCardContainer';
import ItemListHeader from '../components/itemList/ItemListHeader';
import PageContainer from '../components/itemList/PageContainer';

const ItemListPage = () => {
  return (
    <div className="pb-12 flex flex-col justify-items-center items-center">
      <Header />
      <ItemListHeader />
      <ItemCardContainer />
      <PageContainer />
      <GotopBtn />
    </div>
  );
};

export default ItemListPage;
