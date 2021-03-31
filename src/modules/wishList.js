import { createAction, handleActions } from 'redux-actions';
import * as wishAPI from './api/apiWishList';

//전체 조회하기
const GET_WISHLIST = 'mykurly/GET_WISHLIST';
const DELETE_WISH = 'mykurly/DELETE_WISH';
const SET_CHECKED_LIST = 'mykurly/SET_CHECKED_LIST';
const CANCEL_CHECKED_ITEM = 'mykurly/CANCEL_CHECKED_ITEM';
const RES_SUCCESS = 'mykurly/RESPONSE_SUCCESS';
const RES_FAIL = 'mykurly/RESPONSE_FAIL';
const RESET_CHECKED_LIST = 'mykurly/RESET_CHECKED_LIST';
//액션 생성함수

export const getWishList = createAction(GET_WISHLIST);
export const deleteWish = createAction(DELETE_WISH);

export const resSuccess = createAction(RES_SUCCESS, wishlist => wishlist);
export const resFail = createAction(RES_FAIL, error => error);

export const setCheckedList = createAction(SET_CHECKED_LIST, (...id) => id);
export const cancelCheckedList = createAction(CANCEL_CHECKED_ITEM, id => id);
export const resetCheckedList = createAction(RESET_CHECKED_LIST);

export const getWishItems = (requestPage, authToken) => async dispatch => {
  dispatch(getWishList()); // 요청이 시작됨
  try {
    const wishlist = await wishAPI.getWishItems(requestPage, authToken); // API 호출
    dispatch(resSuccess(wishlist.data)); // 성공
  } catch (error) {
    dispatch(resFail(error)); // 실패
  }
};
export const deleteWishItem = (requestPage, authToken, id) => async (dispatch, getState) => {
  dispatch(deleteWish());
  try {
    // const checkedArray = getState().wish.checkedList;
    const wishlist = await wishAPI.deleteWishItem(requestPage, authToken, id); //API 호출
    dispatch(resSuccess(wishlist.data)); //성공
  } catch (error) {
    dispatch(resFail(error)); //실패
  }
  dispatch(resetCheckedList());
};

const initialize = {
  loading: false,
  data: {
    content: [],
    totalPages: '',
    totalElements: '',
    first: true,
    last: false,
  },
  checkedList: [],
  error: null,
};

const wish = handleActions(
  {
    [GET_WISHLIST]: state => ({
      ...state,
      loading: true,
    }),
    [DELETE_WISH]: state => ({
      ...state,
      loading: true,
    }),
    [RES_SUCCESS]: (state, action) => ({
      ...state,
      data: action.payload,
    }),
    [RES_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [SET_CHECKED_LIST]: (state, { payload }) => ({
      ...state,
      checkedList: payload.length > 1 ? [...payload] : [...state.checkedList, ...payload],
    }),
    [CANCEL_CHECKED_ITEM]: (state, { payload }) => ({
      ...state,
      checkedList: [...state.checkedList].filter(item => item !== payload),
    }),
    [RESET_CHECKED_LIST]: state => ({
      ...state,
      checkedList: [],
    }),
  },
  initialize,
);

export default wish;
