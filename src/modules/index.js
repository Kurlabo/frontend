import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import cartGoods from './cartGoods';
import itemDetail, { itemDetailSaga } from './itemDetail';
import loading from './loading';

const rootReducer = combineReducers({
  cart,
  cartGoods,
  itemDetail,
  loading,
});

export function* rootSaga() {
  yield all([itemDetailSaga()]);
}

export default rootReducer;
