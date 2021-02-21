import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { selectGoods, setItemsNum } from '../../modules/cart';

const CartGoods = ({ goods }) => {
  const dispatch = useDispatch();
  const itemCount = useSelector(state => state.cart.cart);
  return (
    <div>
      {goods.map(({ id, url, title }) => (
        <div key={id} className="py-7 flex items-baseline text-r-1.6 font-semibold border-b">
          <input type="checkbox" className="hidden" id={id} />
          <label
            htmlFor={id}
            onClick={() => {
              onClickCheckbox(id, !itemCount.filter(item => item.id === id)[0].select);
            }}
            className={`w-10 h-10 inline-block bg-no-repeat 
            ${
              itemCount.filter(item => item.id === id)[0].select === true
                ? 'bg-checked-button'
                : 'bg-check-button'
            } mr-r-1.6`}
          />
          <Link to="">
            <img alt="" src={url} className="inline-block w-r-6 h-r-7.9 mr-r-1.6" />
            <span className="inline-block pr-64">{title}</span>
          </Link>
          <div>
            <button
              onClick={() => {
                if (itemCount.filter(item => item.id === id)[0].count === 1) return;
                onClickItemCount(id, -1);
              }}
              className="inline-block w-12 h-12 border border-r-0 text-gray-300 focus:outline-none"
            >
              -
            </button>
            <button className="inline-block w-12 h-12 border border-l-0 border-r-0 focus:outline-none">
              {itemCount.filter(item => item.id === id)[0].count}
            </button>
            <button
              onClick={() => {
                onClickItemCount(id, 1);
              }}
              className="inline-block w-12 h-12 border border-l-0 focus:outline-none"
            >
              +
            </button>
          </div>
          <div className="pl-20">
            <span>{itemCount.filter(item => item.id === id)[0].prices.toLocaleString()}</span>
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

  function onClickItemCount(id, countNum) {
    dispatch(setItemsNum(id, countNum));
  }
};

export default CartGoods;
