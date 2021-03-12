import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../common/Loading';
import { getThemeItemsThunk } from '../../modules/themeProductList';
import ThemeProductCard from './ThemeProductCard';
import { useParams } from 'react-router';

const ThemeProductContainer = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.themeProductList.productList.res);
  const isLoading = useSelector(state => state.themeProductList.loading);
  const { theme } = useParams();

  useEffect(() => {
    const params = theme.split('=')[1];
    dispatch(getThemeItemsThunk(params));
  }, [dispatch, theme]);

  return (
    <div className="w-p-1050 mx-auto overflow-y-auto">
      <ul className="flex flex-wrap pb-24">
        {isLoading && <Loading />}
        {items !== undefined &&
          items.map((item, idx) => (
            <li className="w-1/3 h-r-65" key={item.product_id * idx}>
              <ThemeProductCard
                product_id={item.product_id}
                imgUrl={item.original_image_url}
                productName={item.name}
                originalPrice={+item.original_price}
                shortDesc={item.short_description}
                stickerImageUrl={item.sticker_image_url}
                discount_percent={item.discount_percent}
                discounted_price={+item.discounted_price}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default ThemeProductContainer;
