import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션 타입
const GET_LOADING = 'order/GET_LOADING';
const GET_ORDER_INFO_SUCCESS = 'order/GET_ORDER_INFO_SUCCESS';
const GET_ORDER_INFO_FAIL = 'order/GET_ORDER_INFO_FAIL';
const SELECT_CHECKOUT_METHOD = 'order/SELECT_CHECKOUT_METHOD';

// 액션 생성자 함수
export const getLoading = createAction(GET_LOADING);
export const getOrderInfoSuccess = createAction(GET_ORDER_INFO_SUCCESS, res => res);
export const getOrderInfoFail = createAction(GET_ORDER_INFO_FAIL, error => error);
export const selectCheckoutMethod = createAction(SELECT_CHECKOUT_METHOD, checkout => checkout);

export const getOrderInfo = () => async dispatch => {
  try {
    dispatch(getLoading());
    const res = await axios.get('http://3.35.221.9:8080/api/order/orderSheet');
    const orderInfo = res.data;
    setTimeout(() => {
      dispatch(getOrderInfoSuccess(orderInfo));
    }, 1500);
  } catch (e) {
    dispatch(getOrderInfoFail(e));
  }
};

// 초기값
const initialState = {
  loading: true,
  error: '',
  orderInfo: [],
  checkoutMethod: '신용카드 결제',
};

const orderInfo = handleActions(
  {
    // 상품정보 가져오기
    [GET_ORDER_INFO_SUCCESS]: (state, { payload }) => ({
      ...state,
      orderInfo: payload,
      loading: false,
    }),
    [GET_ORDER_INFO_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [GET_LOADING]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [SELECT_CHECKOUT_METHOD]: (state, { payload }) => ({
      ...state,
      checkoutMethod: payload,
    }),
  },
  initialState,
);

export default orderInfo;
