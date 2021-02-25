import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션타입
const ADD_SMALL_CAROUSEL_INFO = 'smallCarousel/ADD_SMALL_CAROUSEL_INFO';

// 액션생성함수
export const addSmallCarouselInfo = createAction(ADD_SMALL_CAROUSEL_INFO, res => res);

// 떵크
export const getSmallCarouselInfo = () => async dispatch => {
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/shop/main');
    console.log(res.data.howAbout);
    dispatch(addSmallCarouselInfo(res.data.howAbout));
  } catch (e) {
    console.log(e);
  }
};

// 초기값
const initialize = [];

// 리듀서
const instagram = handleActions(
  {
    [ADD_SMALL_CAROUSEL_INFO]: (state, { payload }) => payload,
  },
  initialize,
);

export default instagram;
