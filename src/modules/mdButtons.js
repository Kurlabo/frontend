import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션타입
const START_LOADING = 'mdButtons/START_LOADING';
const FINISH_LOADING = 'mdButtons/FINISH_LOADING';
const ADD_GOODS_INFO = 'mdButtons/ADD_GOODS_INFO';

// 액션생성함수
export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);
export const addGoodsInfo = createAction(ADD_GOODS_INFO);

export const getMdSuggestionGoodsInfo = categoryNum => async dispatch => {
  dispatch(startLoading);
  try {
    const res = await axios.get(`http://3.35.221.9:8080/api/shop/main/${categoryNum}`);
    dispatch(addGoodsInfo(res.data));
  } catch (e) {
    console.log(e);
  }
  dispatch(finishLoading);
};

// 초기값
const initialize = {
  loading: false,
  GoodsInfo: [],
};

// 리듀서

const mdButtons = handleActions(
  {
    [START_LOADING]: state => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: state => ({
      ...state,
      loading: false,
    }),
    [ADD_GOODS_INFO]: (state, { payload }) => ({
      ...state,
      GoodsInfo: payload,
    }),
  },
  initialize,
);

export default mdButtons;
