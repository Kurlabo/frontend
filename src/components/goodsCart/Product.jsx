import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
  requestForModificationGoodsAmount,
  requestServerToDeleteProducInfo,
  CountselectedCheckBox,
} from '../../modules/goodsCart';

const CartGoods = ({ goods }) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.goodsCart.cart);
  return (
    <div>
      {goods &&
        goods.map(({ product_id, list_image_url, name }) => (
          <div
            key={product_id}
            className="py-7 flex items-baseline text-r-1.6 font-semibold border-b"
          >
            <input type="checkbox" className="hidden" id={product_id} />
            <label
              htmlFor={product_id}
              onClick={() => {
                onClickCheckbox(
                  product_id,
                  !itemCount.filter(item => item.product_id === product_id)[0].select,
                );
              }}
              className={`w-10 h-10 inline-block bg-no-repeat 
            ${
              itemCount.filter(item => item.product_id === product_id)[0].select === true
                ? 'bg-checked-button'
                : 'bg-check-button'
            } mr-r-2.8`}
            />
            <Link to={`shop/goods/goods_view/${product_id}`} className="inline-block w-r-42.6">
              <img alt="" src={list_image_url} className="inline-block w-r-6 h-r-7.9 mr-r-1.6" />
              <span className="inline-block">{name}</span>
            </Link>
            <div>
              <button
                onClick={() => {
                  if (itemCount.filter(item => item.product_id === product_id)[0].cnt === 1) return;
                  onClickItemCount(product_id, -1);
                }}
                className="inline-block w-12 h-12 border border-r-0 text-gray-300 focus:outline-none"
              >
                -
              </button>
              <button className="inline-block w-12 h-12 border border-l-0 border-r-0 focus:outline-none">
                {itemCount.filter(item => item.product_id === product_id)[0].cnt}
              </button>
              <button
                onClick={() => {
                  onClickItemCount(product_id, 1);
                }}
                className="inline-block w-12 h-12 border border-l-0 focus:outline-none"
              >
                +
              </button>
            </div>
            <div className="w-r-10.3 text-right">
              <span>
                {itemCount
                  .filter(item => item.product_id === product_id)[0]
                  .productTotalPrices.toLocaleString()}
              </span>
              <span>원</span>
            </div>
            <button
              onClick={() => {
                onClickButton(product_id);
              }}
              className="pl-11 text-gray-300 focus:outline-none"
            >
              <AiOutlineClose />
            </button>
          </div>
        ))}
    </div>
  );

  function onClickCheckbox(product_id, check) {
    console.log(check);
    dispatch(CountselectedCheckBox(product_id, check));
  }

  function onClickItemCount(product_id, variation) {
    dispatch(requestForModificationGoodsAmount(product_id, variation));
  }

  function onClickButton(product_id) {
    dispatch(requestServerToDeleteProducInfo(product_id));
  }
};

export default CartGoods;
