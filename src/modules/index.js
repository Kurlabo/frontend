import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import itemList from './itemlist';
import user from './user';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    cart,
    cartGoods,
    user,
    itemList,
    router: connectRouter(history),
  });

export default rootReducer;
