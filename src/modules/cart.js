// 액션 타입
import { createAction, handleActions } from 'redux-actions';

const IS_DROP_DOWN_FROZEN = 'cart/IS_DROP_DOWN_FROZEN';
const IS_DROP_DOWN_AMBIENT = 'cart/IS_DROP_DOWN_AMBIENT';
const IS_DROP_DOWN_COLD = 'cart/IS_DROP_DOWN_COLD';
const SET_ACTIVE_MODAL_PRODUCT = 'cart/SET_ACTIVE_MODAL_PRODUCT';
const SET_ACTIVE_MODAL_GOODS = 'cart/SET_ACTIVE_MODAL_GOODS';

// 액션 생성함수
export const isDropDownFrozen = createAction(IS_DROP_DOWN_FROZEN);
export const isDropDownAmbient = createAction(IS_DROP_DOWN_AMBIENT);
export const isDropDownCold = createAction(IS_DROP_DOWN_COLD);
export const setActiveModalProdcut = createAction(SET_ACTIVE_MODAL_PRODUCT, productId => productId);
export const setActiveModalGoods = createAction(SET_ACTIVE_MODAL_GOODS, productId => productId);

// 초기값
const initialize = {
  frozen: false,
  ambient: false,
  cold: false,
  modalProduct: { isActive: false, productId: null },
  modalGoods: { isActive: false, GoodsId: null },
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
    [IS_DROP_DOWN_COLD]: (state, action) => ({
      ...state,
      cold: !state.cold,
    }),
    [SET_ACTIVE_MODAL_PRODUCT]: (state, { payload }) => {
      console.log('payload', payload);
      return {
        ...state,
        modalProduct: {
          isActive: !state.modalProduct.isActive,
          productId: payload,
        },
      };
    },
    [SET_ACTIVE_MODAL_GOODS]: (state, { payload }) => {
      console.log('payload', payload);
      return {
        ...state,
        modalGoods: {
          isActive: !state.modalGoods.isActive,
          GoodsId: payload,
        },
      };
    },
  },
  initialize,
);

export default cart;
