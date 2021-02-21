import axios from 'axios';

// 상품 상세 정보 불러오기
export const getProductInfo = id => axios.get(`http://3.35.221.9:8080/api/goods/${id}`);
