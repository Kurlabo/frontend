import { call, put, delay } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';

export const createRequestActionType = type => {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;
  return [type, SUCCESS, FAILURE];
};

export default function createRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
      // console.log('api요청 결과!!!!:', response.data);
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      console.log('createRequestSaga error!!!!', e);
    }
    yield put(finishLoading(type));
  };
}

export function createAddGoodsRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request, action.payload);
      yield put({
        type: SUCCESS,
        payload: response.data,
      });
      yield delay(1500);
      yield put({
        type: 'common/INITIALIZE_RESULT',
      });
      // setTimeout(() => {
      //   put({
      //     type: 'common/INITIALIZE_RESULT',
      //   });
      //   console.log('naranara');
      // }, 1000);
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      console.log('createRequestSaga error!!!!', e);
    }
    yield put(finishLoading(type));
  };
}

export function createCheckWritableReviewSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작
    try {
      const response = yield call(request);
      yield put({
        type: SUCCESS,
        payload: response.data.filter(item => item.product_id === action.payload),
      });
    } catch (e) {
      yield put({
        type: FAILURE,
        payload: e,
        error: true,
      });
      console.log('createRequestSaga error!!!!', e);
    }
    yield put(finishLoading(type));
  };
}
