import axios from 'axios';

// 위시리스트 목록을 가져오는 비동기 함수
export const getWishItems = (requestPage = '?page=0', token) => {
  return axios.get(`http://3.35.221.9:8080/api/mypage/mypage_wishlist${requestPage}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteWishItem = (requestPage, deleteArray, token) => {
  return axios.delete(
    `http://3.35.221.9:8080/api/mypage/mypage_wishlist${requestPage}`,
    {
      data: {
        product_id: deleteArray,
      },
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
};

// export const deleteWishItems = async idArray => {
//     return await axios.delete('http://3.35.221.9:8080/api/mypage/mypage_wishlist', {
//       product_id: idArray,
//     });
//   };
