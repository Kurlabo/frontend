import { createAction, handleActions } from 'redux-actions';
import { createAddGoodsRequestSaga, createRequestActionType } from '../../lib/createRequestSaga';
import * as addGoodsToCartAPI from '../../lib/api/productInfo';
import { takeEvery } from 'redux-saga/effects';

// 액션 타입
const [
  ADD_GOODS_TO_CART,
  ADD_GOODS_TO_CART_SUCCESS,
  ADD_GOODS_TO_CART_FAILURE,
] = createRequestActionType('common/ADD_GOODS_TO_CART');

const INITIALIZE_RESULT = 'common/INITIALIZE_RESULT';

// 액션 생성 함수
export const postGoodsToCart = createAction(ADD_GOODS_TO_CART, goodsInfo => ({
  insertCartList: [goodsInfo],
}));
export const initializeResult = createAction(INITIALIZE_RESULT);

// 사가
const postGoodsToCartSaga = createAddGoodsRequestSaga(
  ADD_GOODS_TO_CART,
  addGoodsToCartAPI.postAddCart,
);

export function* addGoodsToCartSaga() {
  yield takeEvery(ADD_GOODS_TO_CART, postGoodsToCartSaga);
}

const initialState = {
  result: '',
  modalopen: false,
  error: null,
};

const addGoodsToCart = handleActions(
  {
    [ADD_GOODS_TO_CART_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      modalopen: true,
      result,
    }),
    [ADD_GOODS_TO_CART_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [INITIALIZE_RESULT]: state => initialState,
  },
  initialState,
);

export default addGoodsToCart;
