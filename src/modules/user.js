import { createAction, handleActions } from 'redux-actions';

// 액션 타입
const SIGNUP_START = 'user/SIGNUP';
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'user/SIGNUP_FAIL';

// 액션 생성 함수
export const signupStart = createAction(SIGNUP_START, user => user);
export const signupSuccess = createAction(SIGNUP_SUCCESS, user => user);
export const signupFail = createAction(SIGNUP_FAIL, error => error);

// 초기화
const initialize = [];

// 리듀서
const user = handleActions(
  {
    [SIGNUP_START]: (state, action) => [...state, action.payload],
    [SIGNUP_SUCCESS]: (state, action) => [...state, action.payload],
    [SIGNUP_FAIL]: (state, action) => [...state, action.payload],
  },
  initialize,
);

export default user;
