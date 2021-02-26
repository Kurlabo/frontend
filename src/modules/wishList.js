import { createAction, handleActions } from 'redux-actions';
import * as wishAPI from './api/apiWishList';

//전체 조회하기
const GET_WISHLIST = 'mykurly/GET_WISHLIST';
const DELETE_WISH_ITEM = 'mykurly/DELETE_WISH_ITEM';

const RES_SUCCESS = 'mykurly/RESPONSE_SUCCESS';
const RES_FAIL = 'mykurly/RESPONSE_FAIL';

//액션 생성함수

export const getWishList = createAction(GET_WISHLIST);
export const deleteWishItems = createAction(DELETE_WISH_ITEM);

export const resSuccess = createAction(RES_SUCCESS, wishlist => wishlist);
export const resFail = createAction(RES_FAIL, error => error);

export const getWishItems = requestPage => async dispatch => {
  dispatch(getWishList()); // 요청이 시작됨
  try {
    const wishlist = await wishAPI.getWishItems(requestPage); // API 호출
    dispatch(resSuccess(wishlist.data)); // 성공
  } catch (error) {
    dispatch(resFail(error)); // 실패
  }
};
export const deleteWishItem = () => async dispatch => {
  dispatch(deleteWishItems());
  try {
    const wishlist = await wishAPI.deleteWishItems(); //API 호출
    dispatch(resSuccess(wishlist.data)); //성공
  } catch (error) {
    dispatch(resFail(error)); //실패
  }
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
  error: null,
};

const wish = handleActions(
  {
    [GET_WISHLIST]: state => ({
      ...state,
      loading: true,
    }),
    [DELETE_WISH_ITEM]: state => ({
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
  },
  initialize,
);

export default wish;
