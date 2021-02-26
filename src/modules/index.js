import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import wish from './wishList';
import order from './orderList';

const rootReducer = combineReducers({
  cart,
  cartGoods,
  wish,
  order,
});

export default rootReducer;
