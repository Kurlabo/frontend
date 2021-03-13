import { createAction, handleActions } from 'redux-actions';
import * as loginAPI from './api/apiLogin';

const SET_LOGIN_AND_SET_LOGOUT = 'login/SET_LOGIN_AND_SET_LOGOUT';
const LOGIN_SUCCESS = 'login/LOGIN_SUCCESS';
const LOGOUT_SUCCESS = 'login/LOGOUT_SUCCESS';
const LOGIN_AND_OUT_FAIL = 'login/LOGIN_FAIL';
const GET_MEMBER_INFO = 'login/GET_MEMBER_INFO';
const setLogInAndOut = createAction(SET_LOGIN_AND_SET_LOGOUT);
export const logInSuccess = createAction(LOGIN_SUCCESS, token => token);
export const logOutSuccess = createAction(LOGOUT_SUCCESS, message => message);
export const loginAndOutFail = createAction(LOGIN_AND_OUT_FAIL, error => error);
export const getMemberInfo = createAction(GET_MEMBER_INFO, (info, { u_id, u_password }) => ({
  ...info,
  u_id,
  u_password,
}));

export const loginAuthentication = user => async dispatch => {
  dispatch(setLogInAndOut());
  const res = await loginAPI.loginAuthentication(user);
  try {
    dispatch(logInSuccess(res.data.token));
    dispatch(getLoginMember(res.data.token, user));
  } catch (error) {
    dispatch(loginAndOutFail(error));
  }
};
export const getLoginMember = (authToken, user) => async (dispatch, getState) => {
  try {
    const info = await loginAPI.getLoginMember(authToken);
    dispatch(getMemberInfo(info.data, user));
  } catch (error) {
    dispatch(loginAndOutFail(error));
  }
};

export const logoutAuthentication = authToken => async dispatch => {
  dispatch(setLogInAndOut());
  console.log('로그아웃시작', authToken);
  try {
    const res = await loginAPI.setLogout(authToken);
    dispatch(logOutSuccess(res.data.message));
  } catch (error) {
    dispatch(loginAndOutFail());
  }
};
const initialize = {
  loading: false,
  data: { token: '' },
  error: null,
  member: { grade: '', name: '', cartCnt: null, u_id: '', u_password: '' },
  message: '',
};

const login = handleActions(
  {
    [SET_LOGIN_AND_SET_LOGOUT]: state => ({
      ...state,
      loading: true,
    }),
    [LOGIN_SUCCESS]: (state, { payload }) => {
      console.log('페이로드2', payload);
      return {
        ...state,
        data: { token: payload },
      };
    },
    [LOGOUT_SUCCESS]: (state, { payload }) => {
      console.log('로그아웃페이로드3', {
        ...state,
        data: {},
        message: payload,
      });
      return {
        ...state,
        data: null,
        message: payload,
      };
    },
    [LOGIN_AND_OUT_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [GET_MEMBER_INFO]: (state, { payload }) => {
      console.log('페이로드1', payload);
      return {
        ...state,
        member: payload,
      };
    },
  },
  initialize,
);

export default login;
