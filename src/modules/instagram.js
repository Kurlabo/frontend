import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션타입
const ADD_INSTAGRAM_INFO = 'instagram/ADD_INSTAGRAM_INFO';

// 액션생성함수
export const addInstagramInfo = createAction(ADD_INSTAGRAM_INFO, res => res);

// 떵크
export const getInstagramInfo = () => async dispatch => {
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/shop/main');
    dispatch(addInstagramInfo(res.data.instaSrcDto));
  } catch (e) {
    console.log(e);
  }
};

// 초기값
const initialize = {
  landing_url_list: [],
  thumbnail_img_list: [],
};

// 리듀서
const instagram = handleActions(
  {
    [ADD_INSTAGRAM_INFO]: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
  },
  initialize,
);

export default instagram;
