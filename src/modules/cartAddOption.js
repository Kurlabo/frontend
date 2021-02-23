// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const SET_PRODUCT_ID = 'cartAddOption/SET_PRODUCT_ID';
const SET_PRODUCT_PRICE = 'cartAddOption/SET_PRODUCT_PRICE';
const SET_CART_COUNT = 'cartAddOption/SET_CART_COUNT';

// 페이지 벗어나면 카트옵션을 비울 액션 타입
const INIT_CART_OPTION = 'cartAddOption/INIT_CART_OPTION';

// 액션 생성함수
export const setCartCount = createAction(SET_CART_COUNT, count => count);
export const setProductId = createAction(SET_PRODUCT_ID, id => id);
export const setProductPrice = createAction(SET_PRODUCT_PRICE, price => price);
export const initCartOption = createAction(INIT_CART_OPTION);

// 초기값
const initialState = {
  productId: 0,
  productPrice: 0,
  count: 0,
};

// 리듀서
const cartAddOption = handleActions(
  {
    [SET_PRODUCT_ID]: (state, action) => ({
      ...state,
      productId: action.payload,
    }),
    [SET_PRODUCT_PRICE]: (state, action) => ({
      ...state,
      productPrice: action.payload,
    }),
    [SET_CART_COUNT]: (state, action) => ({
      ...state,
      count: action.payload,
    }),
    [INIT_CART_OPTION]: () => initialState,
  },
  initialState,
);

export default cartAddOption;
