import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import goodsCart from './goodsCart';

const rootReducer = combineReducers({
  cart,
  cartGoods,
  goodsCart,
});

export default rootReducer;
