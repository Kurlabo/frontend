import { createAction, handleActions } from 'redux-actions';
import axios from 'axios';

// 액션 타입
const NOTICE_START = 'board/NOTICE';
const NOTICE_SUCCESS = 'board/NOTICE_SUCCESS';
const NOTICE_FAIL = 'board/NOTICE_FAIL';

// 액션 생성 함수
export const noticeSuccess = createAction(NOTICE_SUCCESS, notice => notice);
export const noticeFail = createAction(NOTICE_FAIL, error => error);

// 초기화
const initialize = [];
const idArr = [];
// 리듀서
const notice = handleActions(
  {
    [NOTICE_START]: (state, action) => [...state, ...action.payload],
    [NOTICE_SUCCESS]: (state, action) => [...state, ...action.payload],
    [NOTICE_FAIL]: state => [...state],
  },
  initialize,
);

export const getNotice = () => async (dispatch, getState) => {
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/board/list');
    const storeNotice = getState().notice;
    res.data.content.forEach(data => {
      if (!idArr.includes(data.id)) idArr.push(data.id);
    });
    const noticeData = storeNotice.length
      ? res.data.content.filter(data => !idArr.includes(data.id))
      : res.data.content;
    dispatch(noticeSuccess(noticeData));
  } catch (error) {
    console.log(error);
    dispatch(noticeFail(error));
  }
};

export default notice;
