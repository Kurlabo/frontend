import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션 타입
const GET_LOADING = 'itemlist/GET_LOADING';
const GET_ITEMS_SUCCESS = 'itemlist/GET_ITEMS_SUCCESS';
const GET_ITEMS_FAIL = 'itemlist/GET_ITEMS_FAIL';

// 액션 생성함수
export const getLoading = createAction(GET_LOADING);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, (res, id, subid, totalPages) => ({
  res,
  id,
  subid,
  totalPages,
}));
export const getItemsFail = createAction(GET_ITEMS_FAIL, error => error);

export const getItemsThunk = (id, subid, page) => async dispatch => {
  dispatch(getLoading());
  try {
    const res = subid
      ? await axios.get(`http://3.35.221.9:8080/api/goods/goods_list?category=${subid}`)
      : await axios.get(`http://3.35.221.9:8080/api/goods/goods_list?category=${id}&page=${page}`);
    setTimeout(() => {
      dispatch(getItemsSuccess(res.data, id, subid, res.data.totalPages));
    }, 1500);
  } catch (e) {
    dispatch(getItemsFail(e));
  }
};

// 초기값
const initialState = {
  loading: true,
  error: '',
  itemList: { content: [] },
  firstParams: '1000',
  totalPages: '',
};

// 리듀서
const itemList = handleActions(
  {
    [GET_ITEMS_SUCCESS]: (state, { payload }) => ({
      ...state,
      itemList: payload.res,
      firstParams: payload.id,
      totalPages: payload.totalPages,
      loading: false,
    }),
    [GET_ITEMS_FAIL]: (state, action) => ({ ...state, error: action.payload }),
    [GET_LOADING]: (state, action) => ({ ...state, loading: true, itemList: { content: [] } }),
  },
  initialState,
);

export default itemList;
