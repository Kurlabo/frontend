import { createAction, handleActions } from 'redux-actions';
import { createCheckWritableReviewSaga, createRequestActionType } from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/productInfo';
import { takeEvery } from 'redux-saga/effects';

// 액션 타입
const [
  CHECK_WRITABLE_REVIEWS,
  CHECK_WRITABLE_REVIEWS_SUCCESS,
  CHECK_WRITABLE_REVIEWS_FAILURE,
] = createRequestActionType('myReview/GET_WRITABLE_REVIEWS');

// 액션 생성 함수
export const getWritableReviews = createAction(CHECK_WRITABLE_REVIEWS, productId => productId);

// 사가
const checkWritableReviewsSaga = createCheckWritableReviewSaga(
  CHECK_WRITABLE_REVIEWS,
  reviewAPI.getWritableReviews,
);

export function* myWritableReviewSaga() {
  yield takeEvery(CHECK_WRITABLE_REVIEWS, checkWritableReviewsSaga);
}

const initialState = {
  checkWritable: [],
  error: null,
};

const myWritableReviews = handleActions(
  {
    [CHECK_WRITABLE_REVIEWS_SUCCESS]: (state, { payload: result }) => ({
      ...state,
      checkWritable: result,
    }),
    [CHECK_WRITABLE_REVIEWS_FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState,
);

export default myWritableReviews;
