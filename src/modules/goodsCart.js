import { createAction, handleActions } from 'redux-actions';
import axios from '../../node_modules/axios/index';

// 액션함수
const ADD_GOODS_INFO_TO_CART_STATE = 'goodsCart/ADD_GOODS_INFO_TO_CART_STATE';

// 액션 생성함수
export const addGoodsInfoToCartState = createAction(
  ADD_GOODS_INFO_TO_CART_STATE,
  goodsInfo => goodsInfo,
);

export const getGoodsInfo = () => async dispatch => {
  console.log(1);
  try {
    console.log(2);
    const res = await axios.get('http://3.35.221.9:8080/api/goods/goods_cart');
    // cart state에 들어갈 추가정보인 select,productTotalPrices를 넣어준다.
    // dispatch(addGoodsInfoToCartState(res.data.cartDataDto));
  } catch {
    console.log('Error');
  }
};

// 초기값
const initialize = [];

// 리듀서

const goodsCart = handleActions(
  {
    [ADD_GOODS_INFO_TO_CART_STATE]: (state, action) => [
      ...state,
      {
        ...action.goodsInfo,
        select: false,
        productTotalPrices: action.goodsInfo.ctn * action.goodsInfo.original_price,
      },
    ],
  },
  initialize,
);

export default goodsCart;
