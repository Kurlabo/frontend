import { createAction, handleActions } from 'redux-actions';
import * as apiDestination from './api/apiDestination';

const REQUEST_DESINATION_LIST = 'mykurly/REQUEST_DESINATION_LIST';
const MODIFY_DESINATION_SUCCESS = 'mykurly/MODIFY_DESINATION_SUCCESS';
const MODIFY_MAIN_SUCCESS = 'mykurly/MODIFY_MAIN_SUCCESS';
const REQUEST_OF_DESTINATION_SUCCESS = 'mykurly/REQUEST_OF_DESTINATION_SUCCESS';
const REQUEST_OF_DESTINATION_ITEM = 'mykurly/REQUEST_OF_DESTINATION_ITEM';
const REQUEST_OF_DESTINATION_FAIL = 'mykurly/REQUEST_OF_DESTINATION_FAIL';
const requestDestinationList = createAction(REQUEST_DESINATION_LIST);
const modifyDestinationSuccess = createAction(MODIFY_DESINATION_SUCCESS, message => message);
const requestOfDestinationSuccess = createAction(REQUEST_OF_DESTINATION_SUCCESS, data => data);

const requestOfDestinationItem = createAction(
  REQUEST_OF_DESTINATION_ITEM,
  (destinationList, itemId) => ({
    ...destinationList.find(item => item.id === itemId),
    member: destination[0].member,
  }),
);
const modifyMainSuccess = createAction(MODIFY_MAIN_SUCCESS, (data, member) => ({ data, member }));
const requestOfDestinationFail = createAction(REQUEST_OF_DESTINATION_FAIL, error => error);

export const getMyDestination = (authToken, id) => async dispatch => {
  dispatch(requestDestinationList());
  try {
    const res = await apiDestination.getDestinationList(authToken);
    !id
      ? dispatch(requestOfDestinationSuccess(res.data, res.data[0].member))
      : dispatch(requestOfDestinationItem(res.data, id));
  } catch (error) {
    dispatch(requestOfDestinationFail(error));
  }
};
export const modifyDestination = (modifyId, authToken) => async (dispatch, getState) => {
  dispatch(requestDestinationList());
  try {
    const res = await apiDestination.modifyDestination(modifyId, authToken);
    dispatch(modifyDestinationSuccess(res.data));
  } catch (error) {
    dispatch(requestOfDestinationFail(error));
  }
};
export const modifyMainDestination = (modifyMainId, removeMainId, authToken) => async (
  dispatch,
  getState,
) => {
  const data = getState().destination.data;
  const modifiedItem = data.map(({ id }, _, arr) =>
    id === modifyMainId ? { ...arr, is_main: 1 } : { ...arr, is_main: 0 },
  );

  try {
    await apiDestination.modifyMainDestination(modifyMainId, authToken);
    await apiDestination.removeMainDestination(removeMainId, authToken);
    dispatch(modifyMainSuccess(modifiedItem));
  } catch (error) {
    dispatch(requestOfDestinationFail(error));
  }
};
export const deleteDestinationItem = (id, authToken) => async (dispatch, getState) => {
  dispatch(requestDestinationList());
  const member = getState().destination.member;
  try {
    const res = await apiDestination.deleteDestination(id, member, authToken);
    dispatch(requestOfDestinationSuccess(res.data));
  } catch (error) {
    dispatch(requestOfDestinationFail(error));
  }
};

// const initialize = {"id": 46,
// "deliver_address": "서울시 강동구 암사동 룰루랄라아파트 103동 103호",
// "is_main": 0,
// "reciever": "이창준",
// "reciever_phone": "030-0111-3244",
// "member": {
//     "id": 1,
//     "uid": "limnoah0301",
//     "password": "$2a$10$gJvie1O1Ft9oJNz0BDOR0.SPKID.fhGkrz49YyJyaTwY8IM23glD6",
//     "name": "임정우",
//     "email": "limnoah0301@gmail.com",
//     "phone": "01066075331",
//     "gender": "남자",
//     "date_of_birth": "1991-03-01",
//     "grade": "일반",
//     "total_cost": 0,
//     "role": "MEMBER",
//     "deleted": false
// }
const initialize = {
  loading: false,
  modalOpen: false,
  data: [],
  item: {},
  modalValue: '',
  error: false,
};
const destination = handleActions(
  {
    [REQUEST_DESINATION_LIST]: state => ({
      ...state,
      loading: true,
      error: false,
    }),
    [REQUEST_OF_DESTINATION_SUCCESS]: (state, { payload }) => ({
      ...state,
      loading: false,
      data: payload.data,
      member: payload.member,
    }),
    [REQUEST_OF_DESTINATION_FAIL]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
      modalOpen: true,
    }),
    [MODIFY_DESINATION_SUCCESS]: (state, { payload }) => ({
      ...state,
      modalOpen: true,
      message: payload,
      error: false,
    }),
    [MODIFY_MAIN_SUCCESS]: (state, { payload }) => ({
      ...state,
      data: payload,
      modalOpen: true,
      error: false,
    }),
    [REQUEST_OF_DESTINATION_ITEM]: (state, { payload }) => ({
      ...state,
      item: payload,
      error: false,
    }),
  },
  initialize,
);
export default destination;
