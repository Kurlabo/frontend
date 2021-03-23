import axios from 'axios';

// 위시리스트 목록을 가져오는 비동기 함수
export const getOrderItems = (requestPage = '?page=0') => {
  return axios.get(`http://3.35.221.9:8080/api/mypage/mypage_orderlist${requestPage}`);
};

export const getOrderDetail = orderNumber => {
  return axios.get(`http://3.35.221.9:8080/api/mypage/mypage_orderview?ordno=${orderNumber}`);
};

export const postInsertCart = orderItem => {
  axios.post('http://3.35.221.9:8080/api/goods/goods_cart', { insertCartList: orderItem });
};
