import { createAction, handleActions } from 'redux-actions';
import { push } from 'connected-react-router';

// 액션 타입
const SIGNUP_START = 'user/SIGNUP';
const SIGNUP_SUCCESS = 'user/SIGNUP_SUCCESS';
const SIGNUP_FAIL = 'user/SIGNUP_FAIL';

// 액션 생성 함수
// export const signUpStart = createAction(SIGNUP_START, user => user);
export const signUpSuccess = createAction(SIGNUP_SUCCESS, user => user);
export const signUpFail = createAction(SIGNUP_FAIL, error => error);

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

export const signUpStart = user => async (dispatch, getState) => {
  try {
    // await axios.post('/user', user);
    dispatch(signUpSuccess(user));
    dispatch(push('/'));
  } catch (error) {
    console.log(error);
    dispatch(signUpFail(error));
  }
};

export default user;
