import axios from 'axios';

// 상품 상세 정보 불러오기
export const getProductInfo = id => axios.get(`http://3.35.221.9:8080/api/goods/${id}`);

// 상품 늘 사는것 추가
export const postWishList = payload =>
  axios.post(
    `http://3.35.221.9:8080/api/mypage/mypage_wishlist/`,
    payload.product_id,
    payload.config,
  );

// 장바구니 담기
export const postAddCart = payload =>
  axios.post(`http://3.35.221.9:8080/api/goods/goods_cart`, payload.addProductInfo, payload.config);

// 후기작성 가능 리스트 불러오기
export const getWritableReviews = payload =>
  axios.get(`http://3.35.221.9:8080/api/mypage/writable-reviews`, payload.config);

// 리뷰 작성 등록
export const postReview = payload => {
  return axios.post(
    `http://3.35.221.9:8080/api/mypage/mypage_review/${payload.reviewInfo.product_id}`,
    payload.reviewInfo,
    payload.config,
  );
};
