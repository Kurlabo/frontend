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

const [POST_WISH_LIST, POST_WISH_LIST_SUCCESS, POST_WISH_LIST_FAILURE] = createRequestActionType(
  'itemDetail/POST_WISH_LIST',
);

// 모달 메세지 지정 및 열기
const SET_MODULE_MSG = 'itemDetail/SET_MODULE_MSG';

// 모달 비우고 닫기 액션
const SET_MODULE_MSG_EMPTY = 'itemDetail/SET_MODULE_MSG_EMPTY';

// 상세 페이지 벗어날 때 데이터 비우기
const UNLOAD_PRODUCT_INFO = 'itemDetail/UNLOAD_PRODUCT_INFO';

// 액션 생성 함수
export const getProductInfo = createAction(GET_PRODUCT_INFO, id => id);
export const postWishList = createAction(POST_WISH_LIST, payload => payload);
export const setModuleMsg = createAction(SET_MODULE_MSG, moduleMsg => moduleMsg);
export const setModuleMsgEmpty = createAction(SET_MODULE_MSG_EMPTY);

export const unloadProductInfo = createAction(UNLOAD_PRODUCT_INFO);

// 사가
const getProductInfoSaga = createRequestSaga(GET_PRODUCT_INFO, itemDetailAPI.getProductInfo);
const postWishListSaga = createRequestSaga(POST_WISH_LIST, itemDetailAPI.postWishList);

export function* itemDetailSaga() {
  yield takeEvery(GET_PRODUCT_INFO, getProductInfoSaga);
  yield takeEvery(POST_WISH_LIST, postWishListSaga);
}

const initialState = {
  info: null,
  error: null,
  modalInfo: {
    isOpen: false,
    msg: '',
  },
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
    [POST_WISH_LIST_SUCCESS]: (state, { payload: msg }) => ({
      ...state,
      modalInfo: {
        isOpen: true,
        msg: msg,
      },
    }),
    [POST_WISH_LIST_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [SET_MODULE_MSG_EMPTY]: state => ({
      ...state,
      modalInfo: {
        isOpen: false,
        msg: '',
      },
    }),
    [SET_MODULE_MSG]: (state, { payload: msg }) => ({
      ...state,
      modalInfo: {
        isOpen: true,
        msg: msg,
      },
    }),
    [UNLOAD_PRODUCT_INFO]: () => initialState,
  },
  initialState,
);

export default itemDetail;
