// 액션 타입

import { createAction, handleActions } from 'redux-actions';

const SET_CAROUSEL = 'main/SET_INCREASE';
const SET_CAROUSEL_MIN = 'mainSET_CAROUSEL_MIN';
const SET_CAROUSEL_MAX = 'mainSET_CAROUSEL_MAX';

// 액션 생성 함수

export const setCarousel = createAction(SET_CAROUSEL, (num) => num);
export const setCarouselMin = createAction(SET_CAROUSEL_MIN);
export const setCarouselMax = createAction(SET_CAROUSEL_MAX);

// 초기화
const initialize = 1;

// 리듀서

const main = handleActions(
  {
    [SET_CAROUSEL]: (state, action) => state + action.payload,
    [SET_CAROUSEL_MIN]: (state, action) => 1,
    [SET_CAROUSEL_MAX]: (state, action) => 5,
  },
  initialize,
);

export default main;
