import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import itemList from './itemlist';

const rootReducer = combineReducers({
  cart,
  cartGoods,
  itemList,
});

export default rootReducer;
