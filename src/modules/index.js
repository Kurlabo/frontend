import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import cart from './cart';
import goodsCart from './goodsCart';
import itemList from './itemlist';
import user from './user';
import notice from './notice';
import recentItem from './aside';
import login from './login';
import paycomplete from './paycomplete';
import cartAddOption from './cartAddOption';
import itemDetail, { itemDetailSaga } from './itemDetail';
import loading from './loading';
import instagram from './instagram';
import customerService from './customerService';
import mdButtons from './mdButtons';
import order from './orderList';
import orderInfo from './order';
import myReviewRegister, { myReviewSaga } from './myReviewRegister';
import wish from './wishList';
import review from './review';
import addGoodsToCart, { addGoodsToCartSaga } from './common/addGoodsToCart';
import { connectRouter } from 'connected-react-router';
import themeProductList from './themeProductList';
import myWritableReviews, { myWritableReviewSaga } from './myWritableReviews';

const rootReducer = history =>
  combineReducers({
    mdButtons,
    cart,
    wish,
    order,
    orderInfo,
    goodsCart,
    review,
    user,
    notice,
    recentItem,
    itemList,
    cartAddOption,
    itemDetail,
    loading,
    customerService,
    addGoodsToCart,
    themeProductList,
    instagram,
    myReviewRegister,
    login,
    paycomplete,
    myWritableReviews,
    router: connectRouter(history),
  });

export function* rootSaga() {
  yield all([itemDetailSaga(), addGoodsToCartSaga(), myReviewSaga(), myWritableReviewSaga()]);
}

export default rootReducer;
