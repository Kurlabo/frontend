import { combineReducers } from 'redux';
import cart from './cart';
import cartGoods from './cartGoods';
import itemList from './itemlist';
import location from './location';
import user from './user';
import { connectRouter } from 'connected-react-router';
import { withReduxStateSync } from 'redux-state-sync';

const rootReducer = history =>
  combineReducers({
    cart,
    cartGoods,
    user,
    itemList,
    location,
    router: connectRouter(history),
  });

// export default rootReducer;
export default withReduxStateSync(rootReducer);
