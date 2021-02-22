// 액션 타입

import { createAction, handleActions } from 'redux-actions';

const SET_RECENT = 'aside/SET_RECENT';
// const SUCCESS_RECENT = 'aside/SUCCESS_RECENT';
// const FAIL_RECENT = 'aside/FAIL_RECENT';

// 액션 생성 함수

export const setRecent = createAction(SET_RECENT, (imgUrl, link) => ({ imgUrl, link }));
// export const successRecent = createAction(SUCCESS_RECENT);
// export const failRecent = createAction(FAIL_RECENT);

// 초기화
const initialize = [];

// 리듀서

const recent = handleActions(
  {
    [SET_RECENT]: (state, action) => [...state, action.payload],
  },
  initialize,
);

export default recent;
