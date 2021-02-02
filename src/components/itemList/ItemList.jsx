import React from 'react';
import ItemCardContainer from './ItemCardContainer';
import ItemListHeader from './ItemListHeader';

const ItemList = () => {
  return (
    <div className="pb-12">
      <ItemListHeader />
      <ItemCardContainer />
    </div>
  );
};

export default ItemList;
