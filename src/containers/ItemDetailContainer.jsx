import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router';
import ItemDetail from '../components/itemDetail/ItemDetail';
import { initCartOption, setProductId } from '../modules/cartAddOption';
import { getProductInfo, unloadProductInfo } from '../modules/itemDetail';

const ItemDetailContainer = () => {
  const dispatch = useDispatch();

  // const { productId } = match.params;
  // productId는 아무래도 스토어에서 가져와야 될것
  const productId = 230;

  const { itemDetail, error, loading } = useSelector(({ itemDetail, loading }) => ({
    itemDetail: itemDetail.info,
    error: itemDetail.error,
    loading: loading['itemDetail/GET_PRODUCT_INFO'],
  }));

  useEffect(() => {
    dispatch(getProductInfo(productId));
    dispatch(setProductId(productId));
    return () => {
      dispatch(unloadProductInfo());
      dispatch(initCartOption());
    };
  }, [dispatch]);

  console.log('데이터:', itemDetail);

  return itemDetail && <ItemDetail itemDetail={itemDetail} loading={loading} error={error} />;
};

export default withRouter(ItemDetailContainer);
