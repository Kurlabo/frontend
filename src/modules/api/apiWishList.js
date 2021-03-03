import axios from 'axios';

// 위시리스트 목록을 가져오는 비동기 함수
export const getWishItems = async (requestPage = '?page=0') => {
  return await axios.get(`http://3.35.221.9:8080/api/mypage/mypage_wishlist${requestPage}`);
};

export const deleteWishItems = async () => {
  return await axios.delete('http://3.35.221.9:8080/api/mypage/mypage_wishlist');
};

// export const deleteWishItems = async idArray => {
//     return await axios.delete('http://3.35.221.9:8080/api/mypage/mypage_wishlist', {
//       product_id: idArray,
//     });
//   };
