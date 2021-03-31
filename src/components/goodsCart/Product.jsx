import React, { useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { requestForModificationGoodsAmount, CountselectedCheckBox } from '../../modules/goodsCart';
import GoodsCartModal from './GoodsCartModal';
import { setActiveModalProdcut } from '../../modules/cart';
import { useCookies } from 'react-cookie';

const CartGoods = ({ goods }) => {
  const [cookies] = useCookies(['auth']);

  const dispatch = useDispatch();

  const itemCount = useSelector(state => state.goodsCart.cart);
  const activeModalProduct = useSelector(state => state.cart.modalProduct);
  const activeModalGoods = useSelector(state => state.cart.modalGoods);

  const onClickButton = useCallback(
    product_id => {
      dispatch(setActiveModalProdcut(product_id));
    },
    [dispatch],
  );

  useEffect(() => {
    if (activeModalProduct.isActive === true || activeModalGoods.isActive === true) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [activeModalGoods.isActive, activeModalProduct]);
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
              <span className="w-r-30.9 inline-block whitespace-nowrap overflow-ellipsis overflow-hidden">
                {name}
              </span>
            </Link>
            <div>
              <button
                onClick={() => {
                  if (itemCount.filter(item => item.product_id === product_id)[0].cnt === 1) return;
                  onClickItemCount(product_id, -1, cookies.auth);
                }}
                className={`inline-block w-12 h-12 border border-r-0 ${
                  itemCount.filter(item => item.product_id === product_id)[0].cnt === 1
                    ? 'text-gray-300'
                    : ''
                } focus:outline-none`}
              >
                -
              </button>
              <button className="inline-block w-12 h-12 border border-l-0 border-r-0 focus:outline-none">
                {itemCount.filter(item => item.product_id === product_id)[0].cnt}
              </button>
              <button
                onClick={() => {
                  onClickItemCount(product_id, 1, cookies.auth);
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
            {activeModalProduct.isActive === true && (
              <>
                <GoodsCartModal />
                <div
                  onClick={() => {
                    dispatch(setActiveModalProdcut());
                  }}
                  className="fixed left-0 top-0 w-screen h-screen z-900 bg-gray-600 bg-opacity-10"
                />
              </>
            )}
          </div>
        ))}
    </div>
  );

  function onClickCheckbox(product_id, check) {
    dispatch(CountselectedCheckBox(product_id, check));
  }

  function onClickItemCount(product_id, variation, cookies) {
    dispatch(requestForModificationGoodsAmount(product_id, variation, cookies));
  }
};

export default CartGoods;
