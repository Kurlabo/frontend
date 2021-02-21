import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionType } from '../lib/createRequestSaga';
import * as itemDetailAPI from '../lib/api/productInfo';
import { takeEvery } from 'redux-saga/effects';

// 액션 타입
const [
  GET_PRODUCT_INFO,
  GET_PRODUCT_INFO_SUCCESS,
  GET_PRODUCT_INFO_FAILURE,
] = createRequestActionType('itemDetail/GET_PRODUCT_INFO');

// 상세 페이지 벗어날 때 데이터 비우기
const UNLOAD_PRODUCT_INFO = 'itemDetail/UNLOAD_PRODUCT_INFO';

export const getProductInfo = createAction(GET_PRODUCT_INFO, id => id);
export const unloadProductInfo = createAction(UNLOAD_PRODUCT_INFO);

const getProductInfoSaga = createRequestSaga(GET_PRODUCT_INFO, itemDetailAPI.getProductInfo);

export function* itemDetailSaga() {
  yield takeEvery(GET_PRODUCT_INFO, getProductInfoSaga);
}

const initialState = {
  info: null,
  error: null,
};

const itemDetail = handleActions(
  {
    [GET_PRODUCT_INFO_SUCCESS]: (state, { payload: itemDetail }) => ({
      ...state,
      info: itemDetail,
    }),
    [GET_PRODUCT_INFO_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [UNLOAD_PRODUCT_INFO]: () => initialState,
  },
  initialState,
);

export default itemDetail;
