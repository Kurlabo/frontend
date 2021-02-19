import React from 'react';
import ItemCard from './ItemCard';

const ItemCardContainer = () => {
  return (
    <div className="w-p-1050 mx-auto overflow-y-auto">
      <ul className="flex flex-wrap pb-60">
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
        <li>
          <ItemCard />
        </li>
      </ul>
    </div>
  );
};

export default ItemCardContainer;
