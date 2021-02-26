import { createAction, handleActions } from 'redux-actions';
import createRequestSaga, { createRequestActionType } from '../lib/createRequestSaga';
import * as reviewAPI from '../lib/api/productInfo';
import { takeEvery } from 'redux-saga/effects';

// 액션 타입
const [POST_REVIEW, POST_REVIEW_SUCCESS, POST_REVIEW_FAILURE] = createRequestActionType(
  'myReview/POST_REVIEW',
);

// 액션 생성 함수
export const postReview = createAction(POST_REVIEW, reviewInfo => reviewInfo);

// 사가
const postReviewSaga = createRequestSaga(POST_REVIEW, reviewAPI.postReview);

export function* myReviewSaga() {
  yield takeEvery(POST_REVIEW, postReviewSaga);
}

const initialState = {
  reviewPostResult: '',
};

const itemDetail = handleActions(
  {
    [POST_REVIEW_SUCCESS]: (state, { payload: result }) => ({
      reviewPostResult: result,
    }),
    [POST_REVIEW_FAILURE]: (state, { payload: result }) => ({
      reviewPostResult: result,
    }),
  },
  initialState,
);

export default itemDetail;
