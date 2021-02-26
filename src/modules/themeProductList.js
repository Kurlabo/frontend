import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// action type
const GET_THEME_LOADING = 'itemlist/GET_THEME_LOADING';
const GET_THEMEITEMS_SUCEESS = 'themeProductList/GET_THEMEITEMS_SUCEESS';
const GET_THEMEITEMS_FAIL = 'themeProductList/GET_THEMEITEMS_FAIL';

// action creator
export const getThemeItemsSuccess = createAction(GET_THEMEITEMS_SUCEESS, res => res);
export const getThemeItemsFail = createAction(GET_THEMEITEMS_FAIL, error => error);
export const getThemeLoading = createAction(GET_THEME_LOADING);

export const getThemeItemsThunk = params => async dispatch => {
  dispatch(getThemeLoading());
  try {
    const res = await axios.get(`http://3.35.221.9:8080/api/goods/goods_list?category=${params}`);
    setTimeout(() => {
      dispatch(getThemeItemsSuccess(res.data.content));
    }, 1500);
  } catch (e) {
    dispatch(getThemeItemsFail(e));
  }
};

// 초기값
const initialState = {
  productList: [],
  loading: false,
  error: '',
};

// reducer
const themeProductList = handleActions(
  {
    [GET_THEMEITEMS_SUCEESS]: (state, { payload }) => ({
      ...state,
      productList: payload,
      loading: false,
    }),
    [GET_THEMEITEMS_FAIL]: (state, action) => ({
      ...state,
      error: action.payload,
    }),
    [GET_THEME_LOADING]: (state, action) => ({
      ...state,
      loading: true,
      productList: [],
    }),
  },
  initialState,
);

export default themeProductList;
