import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import goodsCart from './goodsCart';
import itemList from './itemlist';
import user from './user';
import notice from './notice';
import recentItem from './aside';
import cartAddOption from './cartAddOption';
import itemDetail, { itemDetailSaga } from './itemDetail';
import loading from './loading';
import instagram from './instagram';
import mdButtons from './mdButtons';
import addGoodsToCart, { addGoodsToCartSaga } from './common/addGoodsToCart';
import { connectRouter } from 'connected-react-router';
import themeProductList from './themeProductList';

const rootReducer = history =>
  combineReducers({
    mdButtons,
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
<<<<<<< HEAD
    themeProductList,
=======
    instagram,
>>>>>>> fefdcb1045b6a8cb3e64b8aefeea2bd13ad3e257
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([itemDetailSaga(), addGoodsToCartSaga()]);
}

export default rootReducer;
