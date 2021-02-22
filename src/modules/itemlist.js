import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션 타입
const GET_ITEMS = 'itemlist/GET_ITEMS';
const GET_ITEMS_SUCCESS = 'itemlist/GET_ITEMS_SUCCESS';
const GET_ITEMS_FAIL = 'itemlist/GET_ITEMS_FAIL';

// 액션 생성함수
export const getItems = createAction(GET_ITEMS);
export const getItemsSuccess = createAction(GET_ITEMS_SUCCESS, res => res);
export const getItemsFail = createAction(GET_ITEMS_FAIL, error => error);

export const getItemsThunk = () => async dispatch => {
  try {
    // dispatch(getItems());
    const res = await axios.get('http://3.35.221.9:8080/api/goods/goods_list/1000');
    dispatch(getItemsSuccess(res.data));
  } catch (e) {
    dispatch(getItemsFail(e));
  }
};

// 초기값
const initialState = {
  loading: true,
  error: '',
  itemList: [],
};

// 리듀서
const itemList = handleActions(
  {
    // [GET_ITEMS]: state => ({
    //   ...state,
    // }),
    [GET_ITEMS_SUCCESS]: (state, action) => {
      return { ...state, itemList: action.payload };
    },
    [GET_ITEMS_FAIL]: (state, action) => ({ ...state, error: action.payload }),
  },
  initialState,
);

export default itemList;
