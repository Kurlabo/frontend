import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios';
import { setActiveModalGoods, setActiveModalProdcut } from './cart';

// 액션타입
const ADD_GOODS_INFO_TO_CART_STATE = 'goodsCart/ADD_GOODS_INFO_TO_CART_STATE';
const START_LOADING = 'goodsCart/START_LOADING';
const FINISH_LOADING = 'goodsCart/FINISH_LOADING';
const FAILURE_LOADING = 'goodsCart/FAILURE_LOADING';

const SELECT_GOODS = 'goodsCart/SELECT_GOODS';
const SET_ITEMS_NUM = 'goodsCart/SET_ITEMS_NUM';

const SELECT_ALL_CHECK_BOX = 'goodsCart/SELECT_ALL_CHECKEX_BOX';

const MODIFY_PRODUCT_CNT_INFO = 'goodsCart/MODIFY_PRODUCT_CNT_INFO';

const DELETE_PRODCUT_INFO = 'goodsCart/DELELTE_PRODCUT_INFO';

const CHANGE_ONLY_SELECT_ALL_STATE = 'goodsCart/CHANGE_ONLY_SELECT_ALL_STATE';

// 액션 생성함수
export const setItemsNum = createAction(SET_ITEMS_NUM, (product_id, cnt) => ({
  product_id,
  cnt,
}));

export const addGoodsInfoToCartState = createAction(
  ADD_GOODS_INFO_TO_CART_STATE,
  goodsInfo => goodsInfo,
);

export const startLoading = createAction(START_LOADING);
export const finishLoading = createAction(FINISH_LOADING);
export const failureLoading = createAction(FAILURE_LOADING, error => error);

export const selectGoods = createAction(SELECT_GOODS, (product_id, select) => ({
  product_id,
  select,
}));

export const selectAllCheckBox = createAction(SELECT_ALL_CHECK_BOX, (check, checkAllBox) => check);

export const modifyProductCntInfo = createAction(
  MODIFY_PRODUCT_CNT_INFO,
  productInfo => productInfo,
);

export const deleteProdcutInfo = createAction(DELETE_PRODCUT_INFO, res => res);

export const changeOnlySelectAllState = createAction(CHANGE_ONLY_SELECT_ALL_STATE, check => check);

// 떵크
// 상품 수량 변경
export const getGoodsInfo = () => async dispatch => {
  dispatch(startLoading());
  try {
    const res = await axios.get('http://3.35.221.9:8080/api/goods/goods_cart');
    // cart state에 들어갈 추가정보인 select,productTotalPrices를 넣어준다.
    dispatch(addGoodsInfoToCartState(res.data.cartDataDto));
  } catch (e) {
    dispatch(failureLoading(e));
  }
  dispatch(finishLoading());
};

// 상품데이터 받아오기
export const requestForModificationGoodsAmount = (product_id, variation) => async dispatch => {
  try {
    const res = await axios.patch(`http://3.35.221.9:8080/api/goods/goods_cart/${product_id}`, {
      member_id: 1,
      product_id,
      variation,
    });
    dispatch(modifyProductCntInfo(res.data));
  } catch (e) {
    console.log(e);
  }
};

// 상품데이터 삭제
export const requestServerToDeleteProducInfo = (product_id, goods) => async dispatch => {
  // prodcut_id는 배열로 들어와야한다.
  try {
    const res = await axios.post('http://3.35.221.9:8080/api/goods/goods_cart/delete', {
      product_id: [...product_id],
    });
    dispatch(deleteProdcutInfo(res.data.deleted_product_id));
  } catch (e) {
    console.log(e);
  }
  if (goods === true) {
    dispatch(setActiveModalGoods());
  } else {
    dispatch(setActiveModalProdcut());
  }
};

// 상품별로 모든 체크박스가 체크시에 전체선택버튼 선택되어짐
export const CountselectedCheckBox = (product_id, check) => async (dispatch, getState) => {
  try {
    dispatch(selectGoods(product_id, check));
    if (
      getState().goodsCart.cart.length ===
      getState().goodsCart.cart.filter(item => item.select).length
    ) {
      dispatch(changeOnlySelectAllState(true));
    } else {
      dispatch(changeOnlySelectAllState(false));
    }
  } catch (e) {
    console.log(e);
  }
};

// 초기값
const initialize = {
  loading: true,
  error: '',
  selectAll: false,
  cart: [],
};

// 리듀서

const goodsCart = handleActions(
  {
    [ADD_GOODS_INFO_TO_CART_STATE]: (state, { payload }) => ({
      ...state,
      cart: payload.map(info => ({
        ...info,
        select: false,
        productTotalPrices: info.cnt * info.discounted_price,
      })),
    }),
    [START_LOADING]: (state, action) => ({
      ...state,
      loading: true,
    }),
    [FINISH_LOADING]: (state, action) => ({
      ...state,
      loading: false,
    }),
    [FAILURE_LOADING]: (state, { payload }) => ({
      ...state,
      error: payload,
    }),
    [SELECT_GOODS]: (state, { payload }) => ({
      ...state,
      cart: state.cart.map(item =>
        item.product_id === payload.product_id ? { ...item, select: payload.select } : item,
      ),
      selectAll: state.cart.filter(item => item.select).length === state.cart.length ? true : false,
    }),
    [SET_ITEMS_NUM]: (state, { payload }) => ({
      ...state,
      cart: state.cart.map(item =>
        item.product_id === payload.product_id
          ? {
              ...item,
              cnt: item.cnt + payload.cnt,
              productTotalPrices: item.discounted_price * (item.cnt + payload.cnt),
            }
          : item,
      ),
    }),
    [SELECT_ALL_CHECK_BOX]: (state, { payload }) => ({
      ...state,
      selectAll: payload,
      cart: state.cart.map(item => ({
        ...item,
        select: payload,
      })),
    }),
    [MODIFY_PRODUCT_CNT_INFO]: (state, { payload }) => ({
      ...state,
      cart: state.cart.map(item =>
        item.product_id === payload.product_id
          ? {
              ...item,
              cnt: payload.cnt,
              select: item.select,
              productTotalPrices: item.cnt * item.discounted_price,
            }
          : item,
      ),
    }),
    [DELETE_PRODCUT_INFO]: (state, { payload }) => ({
      ...state,
      cart: state.cart.filter(item => !payload.includes(item.product_id)),
    }),
    [CHANGE_ONLY_SELECT_ALL_STATE]: (state, { payload }) => ({
      ...state,
      selectAll: payload,
    }),
  },
  initialize,
);

export default goodsCart;
