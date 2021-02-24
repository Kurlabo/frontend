import { combineReducers } from 'redux';
import cart from './cart';
// import product from './product';
import goodsCart from './goodsCart';

const rootReducer = combineReducers({
  cart,
  goodsCart,
});

export default rootReducer;
