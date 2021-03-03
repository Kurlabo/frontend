import React from 'react';
import CheckBox from '../login/CheckBox';

const MyWishListItem = ({ openModal, wishList, onClick }) => {
  return (
    <>
      {wishList.content.map(
        ({ product_id, list_image_url, name, original_price, discounted_price }, index) => (
          <li key={`wish_${index}`} className="border-b border-kg-80 box-border">
            <ul className="text-r-1.4 ">
              <li className="inline-block text-center align-middle">
                <CheckBox id={product_id} onClick={onClick} />
              </li>
              <li className="px-8 w-r-62 h-full text-center inline-block align-middle ">
                <div className="inline-block w-36 py-8 align-middle ">
                  <img src={list_image_url} alt={name} />
                </div>
                <div className="pl-24 inline-block align-middle text-left w-r-48 text-kg-300">
                  <h2 className="text-r-1.6 w-full font-medium truncate">{name}</h2>
                  <p className="text-r-1.2 mt-7">{original_price} 원</p>
                </div>
              </li>
              <li className="w-48 text-center inline-block align-middle">
                <button
                  id={`button_${product_id}`}
                  onClick={openModal}
                  className="text-r-1.3 py-2 w-40 mb-2 border border-kp-600 bg-kp-550 text-white"
                >
                  장바구니담기
                </button>
                <button className="text-r-1.3 border w-40 py-2 border-kp-600 text-kp-600">
                  삭제
                </button>
              </li>
            </ul>
          </li>
        ),
      )}
    </>
  );
};

export default MyWishListItem;
