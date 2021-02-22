// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const IS_DROP_DOWN_FROZEN = 'cart/IS_DROP_DOWN_FROZEN';
const IS_DROP_DOWN_AMBIENT = 'cart/IS_DROP_DOWN_AMBIENT';
const IS_DROP_DOWN_COLD = 'cart/IS_DROP_DOWN_COLD';

// 액션 생성함수
export const isDropDownFrozen = createAction(IS_DROP_DOWN_FROZEN);
export const isDropDownAmbient = createAction(IS_DROP_DOWN_AMBIENT);
export const isDropDownCold = createAction(IS_DROP_DOWN_COLD);

// 초기값
const initialize = {
  frozen: false,
  ambient: false,
  cold: false,
};

// 리듀서

const cart = handleActions(
  {
    [IS_DROP_DOWN_FROZEN]: (state, action) => ({
      ...state,
      frozen: !state.frozen,
    }),
    [IS_DROP_DOWN_AMBIENT]: (state, action) => ({
      ...state,
      ambient: !state.ambient,
    }),
    [IS_DROP_DOWN_COLD]: (state, action) => ({
      ...state,
      cold: !state.cold,
    }),
  },
  initialize,
);

export default cart;
