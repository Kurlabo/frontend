// 액션 타입

import { createAction, handleActions } from 'redux-actions';

const SET_RECENT = 'aside/SET_RECENT';

// 액션 생성 함수

export const setRecent = createAction(SET_RECENT, vieweditem => vieweditem);

// 초기화
const initialize = [];

// 리듀서
const recentItem = handleActions(
  {
    [SET_RECENT]: (state, { payload }) => {
      if (state.find(recentView => recentView.product_id === payload.product_id)) {
        return state;
      } else {
        if (state.length === 5) {
          state.shift();
        }
        return [...state, payload];
      }
    },
  },
  initialize,
);

export default recentItem;
