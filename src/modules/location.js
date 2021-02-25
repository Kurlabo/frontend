import { createAction, handleActions } from 'redux-actions';

// 액션
const GET_ADDRESS = 'location/GET_ADDRESS';

// 액션 생성함수
export const getAddress = createAction(GET_ADDRESS, address => address);

// 초기값
const initialState = {
  address: '',
};

// 리듀서
const location = handleActions(
  {
    [GET_ADDRESS]: (state, action) => ({
      address: action.payload,
    }),
  },
  initialState,
);

export default location;
