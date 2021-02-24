import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import itemList from './itemlist';
import user from './user';
import notice from './notice';
import recentItem from './aside';
import { connectRouter } from 'connected-react-router';

const rootReducer = history =>
  combineReducers({
    cart,
    cartGoods,
    user,
    notice,
    recentItem,
    itemList,
    router: connectRouter(history),
  });

export default rootReducer;
