import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';
import { push } from 'connected-react-router';

// 액션 타입
const NOTICE_START = 'board/NOTICE';
const NOTICE_SUCCESS = 'board/NOTICE_SUCCESS';
const NOTICE_FAIL = 'board/NOTICE_FAIL';

// 액션 생성 함수
export const noticeSuccess = createAction(NOTICE_SUCCESS, notice => notice);
export const noticeFail = createAction(NOTICE_FAIL, error => error);

// 초기화
const initialize = [];

// 리듀서
const notice = handleActions(
  {
    [NOTICE_START]: (state, action) => [...state, ...action.payload],
    [NOTICE_SUCCESS]: (state, action) => [
      ...state,
      ...action.payload.filter(data => state.id !== data.id),
    ],
    [NOTICE_FAIL]: (state, action) => [...state],
  },
  initialize,
);

export const getNotice = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/board/list');
    dispatch(noticeSuccess(res.data.content));
  } catch (error) {
    console.log(error);
    dispatch(noticeFail(error));
  }
};

export default notice;
