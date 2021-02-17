import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';

const rootReducer = combineReducers({
  cart,
  cartGoods,
});

export default rootReducer;
