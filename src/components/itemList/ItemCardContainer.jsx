import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, withRouter } from 'react-router';
import { getItemsThunk } from '../../modules/itemlist';
import ItemCard from './ItemCard';

const ItemCardContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.itemList.itemList.content);
  const { category } = useParams();

  useEffect(() => {
    const categoryArray = category.split('=');
    let categoryStr = categoryArray[1];

    // 카테고리 대분류, 소분류 라우팅
    if (categoryStr.length < 5) {
      dispatch(getItemsThunk(categoryStr));
    } else if (categoryStr.length === 5) {
      let firstString = divideFirst(categoryStr, 0, 4);
      let secondString = divideFirst(categoryStr, 4, 5);
      dispatch(getItemsThunk(firstString, secondString));
    } else if (categoryStr.length === 6) {
      let firstString = divideFirst(categoryStr, 0, 4);
      let secondString = divideFirst(categoryStr, 4, 6);
      dispatch(getItemsThunk(firstString, secondString));
    } else if (categoryStr.length === 7) {
      let firstString = divideFirst(categoryStr, 0, 4);
      let secondString = divideFirst(categoryStr, 4, 7);
      dispatch(getItemsThunk(firstString, secondString));
    }
  }, [dispatch, category]);

  return (
    <div className="w-p-1050 mx-auto overflow-y-auto">
      <ul className="flex flex-wrap pb-24">
        {items.map((item, idx) => (
          <li key={item.product_id + idx * 10} className="w-1/3 h-r-65">
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
  function divideFirst(categoryStr, start, finish) {
    return categoryStr.slice(start, finish);
  }
};

export default withRouter(ItemCardContainer);
