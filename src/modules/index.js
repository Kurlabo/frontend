import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import wish from './wishList';
import order from './orderList';
import goodsCart from './goodsCart';
import itemList from './itemlist';
import user from './user';
import notice from './notice';
import recentItem from './aside';
import cartAddOption from './cartAddOption';
import itemDetail, { itemDetailSaga } from './itemDetail';
import loading from './loading';
import addGoodsToCart, { addGoodsToCartSaga } from './common/addGoodsToCart';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    order,
    wish,
    cart,
    goodsCart,
    user,
    notice,
    recentItem,
    itemList,
    cartAddOption,
    itemDetail,
    loading,
    addGoodsToCart,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([itemDetailSaga(), addGoodsToCartSaga()]);
}

export default rootReducer;
