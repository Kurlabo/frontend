import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods, setItemsNum } from '../../modules/goodsCart';

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
            } mr-r-1.6`}
            />
            <Link to="">
              <img alt="" src={list_image_url} className="inline-block w-r-6 h-r-7.9 mr-r-1.6" />
              <span className="inline-block pr-64">{name}</span>
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
            <div className="pl-20">
              <span>
                {itemCount
                  .filter(item => item.product_id === product_id)[0]
                  .productTotalPrices.toLocaleString()}
              </span>
              <span>원</span>
              <button className="pl-11 text-gray-300 focus:outline-none">
                <AiOutlineClose />
              </button>
            </div>
          </div>
        ))}
    </div>
  );

  function onClickCheckbox(id, check) {
    dispatch(selectGoods(id, check));
  }

  function onClickItemCount(id, cnt) {
    dispatch(setItemsNum(id, cnt));
  }
};

export default CartGoods;
