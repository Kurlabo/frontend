import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션 타입
const GET_ITEMS = 'itemlist/GET_ITEMS';
const GET_ITEMS_SUCCESS = 'itemlist/GET_ITEMS_SUCCESS';
const GET_ITEMS_FAIL = 'itemlist/GET_ITEMS_FAIL';

// 액션 생성함수
export const getItems = createAction(GET_ITEMS);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, (res, id, subid) => ({
  res,
  id,
  subid,
}));
export const getItemsFail = createAction(GET_ITEMS_FAIL, error => error);

export const getItemsThunk = (id, subid) => async dispatch => {
  try {
    const res = subid
      ? await axios.get(`http://3.35.221.9:8080/api/goods/goods_list?category=${subid}`)
      : await axios.get(`http://3.35.221.9:8080/api/goods/goods_list?category=${id}`);
    dispatch(getItemsSuccess(res.data, id, subid));
    console.log(res.data);
  } catch (e) {
    dispatch(getItemsFail(e));
  }
};

// 초기값
const initialState = {
  loading: true,
  error: '',
  itemList: [],
  firstParams: '1000',
  secondParams: '',
};

// 리듀서
const itemList = handleActions(
  {
    [GET_ITEMS_SUCCESS]: (state, { payload }) => ({
      ...state,
      itemList: payload.res,
      firstParams: payload.id,
      secondParams: payload.subid,
    }),
    [GET_ITEMS_FAIL]: (state, action) => ({ ...state, error: action.payload }),
  },
  initialState,
);

export default itemList;
