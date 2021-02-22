import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import user from './user';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    cart,
    cartGoods,
    user,
    router: connectRouter(history),
  });

export default rootReducer;
