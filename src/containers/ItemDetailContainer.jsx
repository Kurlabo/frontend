import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import ItemDetail from '../components/itemDetail/ItemDetail';
import { getProductInfo, unloadProductInfo } from '../modules/itemDetail';

const ItemDetailContainer = () => {
  // const { productId } = match.params;
  const productId = 40;
  const dispatch = useDispatch();
  const { itemDetail, error, loading } = useSelector(({ itemDetail, loading }) => ({
    itemDetail: JSON.parse(itemDetail.info),
    error: itemDetail.error,
    loading: loading['itemDetail/GET_PRODUCT_INFO'],
  }));

  useEffect(() => {
    dispatch(getProductInfo(productId));
    return () => {
      dispatch(unloadProductInfo());
    };
  }, [dispatch]);

  console.log('데이터:', itemDetail);

  return itemDetail && <ItemDetail itemDetail={itemDetail} loading={loading} error={error} />;
};

export default withRouter(ItemDetailContainer);
