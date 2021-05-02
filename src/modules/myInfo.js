import { createAction, handleActions } from 'redux-actions';
import * as MyInfoAPI from './api/apiMyInfo';
import axios from 'axios';

const GET_MYINFO = 'mykurly/GET_MYINFO';
const MYINFO_MODIFY = 'mykurly/MYINFO_MODIFY';
const REQUEST_OF_MYINFO_SUCCESS = 'mykurly/REQUEST_OF_MYINFO_SUCCESS';
const REQUEST_OF_MYINFO_FAIL = 'mykurly/REQUEST_OF_MYINFO_FAIL';
const CHANGED_MYINFO = 'mykurly/CHANGED_MYINFO';

const getMyInfo = createAction(GET_MYINFO);
const modifyMyInfo = createAction(MYINFO_MODIFY);

export const requestOfMyInfoSuccess = createAction(
  REQUEST_OF_MYINFO_SUCCESS,
  (
    {
      date_of_birth,
      deleted,
      email,
      gender,
      grade,
      name,
      password,
      phone,
      role,
      total_cost,
      uid,
      // check_sns,
    },
    pwd,
  ) => ({
    ...{
      u_date_of_birth: {
        year: date_of_birth.split('-')[0],
        month: date_of_birth.split('-')[1],
        day: date_of_birth.split('-')[2],
      },
      u_deleted: deleted,
      u_email: email,
      u_gender: gender,
      u_grade: grade,
      u_name: name,
      u_password: password,
      u_phone: phone,
      u_role: role,
      u_id: uid,
      // u_sns: {
      //   info: check_sns.sms && check_sns.email,
      //   sms: check_sns.sms,
      //   email: check_sns.email,
      // },
      u_total_cost: total_cost,
      u_origin_password: pwd,
    },
    pwd,
  }),
);
export const requestOfMyInfoFail = createAction(REQUEST_OF_MYINFO_FAIL, error => error);

export const changedMyInfo = createAction(CHANGED_MYINFO, changedInputs => changedInputs);

export const getMemberMyInfo = (authToken, password) => async dispatch => {
  dispatch(getMyInfo());
  try {
    const res = await MyInfoAPI.getPrivateMyInfo(authToken, password);
    dispatch(requestOfMyInfoSuccess(res.data, password));
  } catch (error) {
    dispatch(requestOfMyInfoFail(error));
  }
};
export const myInfoModify = (modifyInputs, authToken) => async (dispatch, getState) => {
  dispatch(modifyMyInfo());
  try {
    const res = await axios.put('http://3.35.221.9:8080/api/member/myinfo', modifyInputs, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    dispatch(requestOfMyInfoSuccess(res.data));
  } catch (error) {
    dispatch(requestOfMyInfoFail(error));
  }
};
const initialize = {
  loading: false,
  info: {},
  modalOpen: false,
  message: 'FAIL',
  modifyInputs: [],
  error: null,
};
const myInfo = handleActions(
  {
    [GET_MYINFO]: (state, { payload }) => ({
      ...state,
      loading: false,
    }),
    [MYINFO_MODIFY]: (state, { payload }) => ({
      ...state,
      loading: false,
    }),
    [REQUEST_OF_MYINFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      message: 'SUCCESS',
      info: payload,
      modalOpen: false,
      loading: false,
    }),
    [REQUEST_OF_MYINFO_FAIL]: (state, { payload }) => ({
      ...state,
      loading: false,
      message: 'FAIL',
      modalOpen: true,
      error: payload,
    }),
    [CHANGED_MYINFO]: (state, { payload }) => ({
      ...state,
      modifyInputs: { ...state.myInfo, ...payload },
    }),
  },
  initialize,
);
export default myInfo;
