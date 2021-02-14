// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const ISDROPDOWNFROZEN = 'cartGoods/ISDROPDOWNFROZEN';
const ISDROPDOWNAMBIENT = 'cartGoods/ISDROPDOWNAMBIENT';

// 액션 생성함수
export const isdropdownfrozen = createAction(ISDROPDOWNFROZEN);
export const isdropdownambient = createAction(ISDROPDOWNAMBIENT);

// 초기값
const initialize = {
  frozen: false,
  ambient: false,
};

// 리듀서

const cartGoods = handleActions(
  {
    [ISDROPDOWNFROZEN]: (state, action) => ({
      ...state,
      frozen: !state.frozen,
    }),
    [ISDROPDOWNAMBIENT]: (state, action) => ({
      ...state,
      ambient: !state.ambient,
    }),
  },
  initialize,
);

export default cartGoods;
