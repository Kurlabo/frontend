// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const SET_NAV_STATE = 'customerService/SET_NAV_STATE';

// 액션 생성함수
export const setNavState = createAction(SET_NAV_STATE, state => state);

// 초기값
const initialState = {
  navState: '공지사항',
};

// 리듀서
const customerService = handleActions(
  {
    [SET_NAV_STATE]: (state, action) => ({
      navState: action.payload,
    }),
  },
  initialState,
);

export default customerService;
