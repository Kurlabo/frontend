// 액션 타입

import { createAction, handleActions } from 'redux-actions';

const ADD_GOODS_CART = 'cartGoods/ADD_GOODS_CART';

// 액션 생성함수
export const addGoodsCart = createAction(ADD_GOODS_CART, goodsInfo => goodsInfo);

// 초기값
const initialize = [];

// 리듀서

const cartGoods = handleActions(
  {
    [ADD_GOODS_CART]: (state, action) => [...state, action.payload],
  },
  initialize,
);

export default cartGoods;
