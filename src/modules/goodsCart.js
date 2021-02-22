import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios';

// 액션타입
const ADD_GOODS_INFO_TO_CART_STATE = 'goodsCart/ADD_GOODS_INFO_TO_CART_STATE';
const START_LOADING = 'goodsCart/START_LOADING';
const FINISH_LOADING = 'goodsCart/FINISH_LOADING';
const FAILURE_LOADING = 'goodsCart/FAILURE_LOADING';

const SELECT_GOODS = 'goodsCart/SELECT_GOODS';
const SET_ITEMS_NUM = 'goodsCart/SET_ITEMS_NUM';

const SELECT_ALL_CHECK_BOX = 'goodsCart/SELECT_ALL_CHECKEX_BOX';

export const setItemsNum = createAction(SET_ITEMS_NUM, (product_id, cnt) => ({
  product_id,
  cnt,
}));

// 액션 생성함수
export const addGoodsInfoToCartState = createAction(
  ADD_GOODS_INFO_TO_CART_STATE,
  goodsInfo => goodsInfo,
);

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);
export const failureLoading = createAction(FAILURE_LOADING, error => error);

export const selectGoods = createAction(SELECT_GOODS, (product_id, select) => ({
  product_id,
  select,
}));

export const selectAllCheckBox = createAction(SELECT_ALL_CHECK_BOX, check => check);

export const getGoodsInfo = () => async dispatch => {
  dispatch(startLoading());
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/goods/goods_cart');
    // cart state에 들어갈 추가정보인 select,productTotalPrices를 넣어준다.
    dispatch(addGoodsInfoToCartState(res.data.cartDataDto));
  } catch (e) {
    dispatch(failureLoading(e));
  }
  dispatch(finishLoading());
};

// 초기값
const initialize = {
  loading: true,
  error: '',
  selectAll: false,
  cart: [],
};

// 리듀서

const goodsCart = handleActions(
  {
    [ADD_GOODS_INFO_TO_CART_STATE]: (state, { payload }) => ({
      ...state,
      cart: payload.map(info => ({
        ...info,
        select: false,
        productTotalPrices: info.cnt * info.original_price,
      })),
    }),
    [START_LOADING]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [FAILURE_LOADING]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [SELECT_GOODS]: (state, { payload }) => ({
      ...state,
      cart: state.cart.map(item =>
        item.product_id === payload.product_id ? { ...item, select: payload.select } : item,
      ),
    }),
    [SET_ITEMS_NUM]: (state, { payload }) => ({
      ...state,
      cart: state.cart.map(item =>
        item.product_id === payload.product_id
          ? {
              ...item,
              cnt: item.cnt + payload.cnt,
              productTotalPrices: item.original_price * (item.cnt + payload.cnt),
            }
          : item,
      ),
    }),
    [SELECT_ALL_CHECK_BOX]: (state, { payload }) => ({
      ...state,
      selectAll: payload,
      cart: state.cart.map(item => ({
        ...item,
        select: payload,
      })),
    }),
  },
  initialize,
);

export default goodsCart;
