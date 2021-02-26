import axios from 'axios';

// 위시리스트 목록을 가져오는 비동기 함수
export const getOrderItems = async (requestPage = '?page=0') => {
  return await axios.get(`http://3.35.221.9:8080/api/mypage/mypage_orderlist${requestPage}`);
};

export const getOrderDetail = async orderNumber => {
  return await axios.get(`http://3.35.221.9:8080/api/mypage/mypage_orderview?ordno=${orderNumber}`);
};

export const postInsertCart = async orderItem => {
  console.log('오더아이템', orderItem);
  axios.post('http://3.35.221.9:8080/api/goods/goods_cart', { insertCartList: orderItem });
};
