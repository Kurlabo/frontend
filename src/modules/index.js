import { combineReducers } from 'redux';
import cartGoods from './cartGoods';

const rootReducer = combineReducers({
  cartGoods,
});

export default rootReducer;
