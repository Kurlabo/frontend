import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

const GET_REVIEW_LIST = 'review/GET_REVIEW_LIST';
const GET_REVIEW_SUCCESS = 'review/GET_SUCCESS';
const GET_REVIEW_FAIL = 'review/GET_FAIL';

export const getReviewItem = createAction(GET_REVIEW_LIST);
export const getReivewSuccess = createAction(GET_REVIEW_SUCCESS, (tabId, review) => ({
  [tabId]: review,
}));
export const getReviewFail = createAction(GET_REVIEW_FAIL, error => error);

export const getReviewList = (tabId, token) => async (dispatch, getState) => {
  dispatch(getReviewItem);
  const res =
    tabId === 'viewBeforeList'
      ? await axios.get('http://3.35.221.9:8080/api/mypage/writable-reviews', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      : await axios.get('http://3.35.221.9:8080/api/mypage/written-reviews', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  try {
    dispatch(getReivewSuccess(tabId, res.data));
  } catch (error) {
    dispatch(getReviewFail(error));
  }
};
const initialize = {
  loading: false,
  data: { viewBeforeList: [], viewAfterList: [] },
  error: null,
};
const review = handleActions(
  {
    [GET_REVIEW_LIST]: state => ({
      ...state,
      loading: true,
    }),
    [GET_REVIEW_SUCCESS]: (state, { payload }) => {
      return {
        ...state,
        data: { ...state.data, ...payload },
      };
    },
    [GET_REVIEW_FAIL]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
  },
  initialize,
);

export default review;
