import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsThunk } from '../../modules/itemlist';
import ItemCard from './ItemCard';

const ItemCardContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemList.itemList);

  useEffect(() => {
    dispatch(getItemsThunk());
  }, [dispatch]);

  console.log(items);
  return (
    <div className="w-p-1050 mx-auto overflow-y-auto">
      <ul className="flex flex-wrap pb-24">
        {items.map(item => (
          <li key={item.product_id}>
            <ItemCard
              imgUrl={item.original_image_url}
              productName={item.name}
              originalPrice={+item.original_price}
              shortDesc={item.short_description}
              stickerImageUrl={item.sticker_image_url}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemCardContainer;
