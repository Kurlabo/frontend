// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const IS_DROP_DOWN_FROZEN = 'cart/IS_DROP_DOWN_FROZEN';
const IS_DROP_DOWN_AMBIENT = 'cart/IS_DROP_DOWN_AMBIENT';

const SET_ALL_PRICES = 'cart/SET_ALL_PRICES';
const SET_ITEMS_NUM = 'cart/ITEM_COUNT';

const SELECT_GOODS = 'cart/SELECT_GOODS';

const SELECT_ALL_CHECK_BOX = 'cart/SELECT_ALL_CHECKEX_BOX';

// 액션 생성함수
export const isDropDownFrozen = createAction(IS_DROP_DOWN_FROZEN);
export const isDropDownAmbient = createAction(IS_DROP_DOWN_AMBIENT);

export const setAllPrices = createAction(
  SET_ALL_PRICES,
  (idCheckedArr) => idCheckedArr,
);

export const setItemsNum = createAction(SET_ITEMS_NUM, (id, countNum) => ({
  id,
  countNum,
}));

export const selectGoods = createAction(SELECT_GOODS, (id, select) => ({
  id,
  select,
}));

export const selectAllCheckBox = createAction(
  SELECT_ALL_CHECK_BOX,
  (check) => check,
);

// 초기값
const initialize = {
  frozen: false,
  ambient: false,
  selectAll: false,
  cart: [],
};

// 리듀서

const cart = handleActions(
  {
    [IS_DROP_DOWN_FROZEN]: (state, action) => ({
      ...state,
      frozen: !state.frozen,
    }),
    [IS_DROP_DOWN_AMBIENT]: (state, action) => ({
      ...state,
      ambient: !state.ambient,
    }),
    [SET_ALL_PRICES]: (state, action) => ({
      ...state,
      cart: [...action.payload],
    }),
    [SET_ITEMS_NUM]: (state, action) => ({
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? {
              ...item,
              count: item.count + action.payload.countNum,
              prices:
                item.initalPrices * (item.count + action.payload.countNum),
            }
          : item,
      ),
    }),
    [SELECT_GOODS]: (state, action) => ({
      ...state,
      cart: state.cart.map((item) =>
        item.id === action.payload.id
          ? { ...item, select: action.payload.select }
          : item,
      ),
    }),
    [SELECT_ALL_CHECK_BOX]: (state, action) => ({
      ...state,
      selectAll: action.payload,
      cart: state.cart.map((item) => ({
        ...item,
        select: action.payload,
      })),
    }),
  },
  initialize,
);

export default cart;
