import axios from 'axios';

// 상품 상세 정보 불러오기
export const getProductInfo = id => axios.get(`http://3.35.221.9:8080/api/goods/${id}`);

// 상품 늘 사는것 추가
export const postWishList = (member_id, product_id) =>
  axios.post(`http://3.35.221.9:8080/api/mypage/mypage_wishlist/`, { member_id, product_id });
