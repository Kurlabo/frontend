import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import cartGoods from './cartGoods';
import cartAddOption from './cartAddOption';
import itemDetail, { itemDetailSaga } from './itemDetail';
import loading from './loading';
import addGoodsToCart, { addGoodsToCartSaga } from './common/addGoodsToCart';

const rootReducer = combineReducers({
  cart,
  cartGoods,
  cartAddOption,
  itemDetail,
  loading,
  addGoodsToCart,
});

export function* rootSaga() {
  yield all([itemDetailSaga(), addGoodsToCartSaga()]);
}

export default rootReducer;
