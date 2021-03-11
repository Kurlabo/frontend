import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// actions
const GET_PAY_COMPLETE_INFO_SUCCESS = 'paycomplete/GET_PAY_COMPLETE_INFO_SUCCESS';
const GET_PAY_COMPLETE_INFO_FAIL = 'paycomplete/GET_PAY_COMPLETE_INFO_FAIL';

// action creators
export const getPayCompleteInfoSuccess = createAction(GET_PAY_COMPLETE_INFO_SUCCESS, info => info);
export const getPayCompleteInfoFail = createAction(GET_PAY_COMPLETE_INFO_FAIL, error => error);

// middleware
export const getPayCompleteInfo = orders_id => async dispatch => {
  try {
    const res = await axios.get(`http://3.35.221.9:8080/api/order/orderEnd?ordno=${orders_id}`);
    const paycompleteInfo = res.data;
    dispatch(getPayCompleteInfoSuccess(paycompleteInfo));
  } catch (error) {
    dispatch(getPayCompleteInfoFail(error));
  }
};

const initialState = { paycompleteInfo: {}, error: '' };

// reducer
const paycomplete = handleActions(
  {
    [GET_PAY_COMPLETE_INFO_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        paycompleteInfo: payload,
      };
    },
    [GET_PAY_COMPLETE_INFO_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialState,
);

export default paycomplete;
