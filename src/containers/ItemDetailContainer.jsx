import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, matchPath } from 'react-router';
import ItemDetail from '../components/itemDetail/ItemDetail';
import { initCartOption, setProductId } from '../modules/cartAddOption';
import { getProductInfo, unloadProductInfo } from '../modules/itemDetail';

const ItemDetailContainer = ({ match }) => {
  const dispatch = useDispatch();

  // const { productId } = match.params;
  // productId는 아무래도 스토어에서 가져와야 될것
  const productId = match.params.productId;

  const { itemDetail, error, loading } = useSelector(({ itemDetail, loading }) => ({
    itemDetail: itemDetail.info,
    error: itemDetail.error,
    loading: loading['itemDetail/GET_PRODUCT_INFO'],
  }));

  useEffect(() => {
    dispatch(getProductInfo(productId));
    dispatch(setProductId({ productId }));
    window.scrollTo(0, 0);
    return () => {
      dispatch(unloadProductInfo());
      dispatch(initCartOption());
    };
  }, [dispatch, productId]);

  console.log('데이터:', itemDetail);

  return loading ? (
    <div>로딩중</div>
  ) : (
    itemDetail && <ItemDetail itemDetail={itemDetail} productId={productId} />
  );
};

export default withRouter(ItemDetailContainer);
