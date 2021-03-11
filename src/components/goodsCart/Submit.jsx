import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from '../../../node_modules/axios/index';

const Submit = () => {
  const cart = useSelector(state => state.goodsCart.cart);

  const selectedProduct = cart.filter(item => item.select);

  let addr = sessionStorage.getItem('address');

  let history = useHistory();

  // 주문하기 API POST payload
  const total_price =
    cart.filter(item => item.select).reduce((acc, cur) => acc + cur.productTotalPrices, 0) < 40000
      ? cart.filter(item => item.select).reduce((acc, cur) => acc + cur.productTotalPrices, 0) +
        3000
      : cart.filter(item => item.select).reduce((acc, cur) => acc + cur.productTotalPrices, 0);

  const checkout_Products = selectedProduct.map(item => ({
    product_id: item.product_id,
    product_name: item.name,
    product_price: item.productTotalPrices,
    product_discount_price: item.cnt * item.reduced_price,
    product_cnt: item.cnt,
    list_image_url: item.list_image_url,
  }));

  const total_discounted_price = selectedProduct.reduce(
    (acc, cur) => acc + cur.cnt * cur.reduced_price,
    0,
  );

  const onClickLink = useCallback(async () => {
    const res = await axios.post('http://3.35.221.9:8080/api/goods/goods_cart/orderSheet', {
      checkout_Products,
      total_price,
      total_discounted_price,
    });

    if (res.data === 'success') {
      history.push('/order');
    }
  }, [checkout_Products, history, total_discounted_price, total_price]);

  return (
    <>
      <div
        className={`w-r-28.4 ${
          cart.length !== 0 && selectedProduct.length !== 0 && addr !== '' ? 'hidden' : ''
        } inline-block h-24 bg-gray-200 mt-8 text-white leading-r-6.3 rounded-r-0.4 text-r-1.6 font-semibold text-center`}
      >
        {cart.length === 0 && <span to="#">상품을 담아주세요</span>}
        {cart.length !== 0 && selectedProduct.length === 0 && (
          <span to="#">상품을 선택해주세요</span>
        )}
        {addr === '' && selectedProduct.length !== 0 && <span to="#">배송지를 입력해주세요</span>}
      </div>
      {cart.length !== 0 && selectedProduct.length !== 0 && addr !== '' && (
        <Link
          className="w-r-28.4 inline-block h-24 bg-kp-600 mt-8 text-white leading-r-6.3 rounded-r-0.4 text-r-1.6 font-semibold text-center"
          onClick={onClickLink}
          to="#"
        >
          주문하기
        </Link>
      )}
    </>
  );
};

export default Submit;
