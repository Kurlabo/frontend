import React from 'react';
import { Link } from 'react-router-dom';

const KurlyPass = () => {
  return (
    <div className="container bg-kurlypass text-center pb-14">
      <img
        className="inline-block w-full"
        src="https://res.kurly.com/pc/service/pass/1806/img_kurlypass1.jpg"
        alt=""
      />
      <div className="relative my-10">
        <img
          className="inline-block"
          src="https://res.kurly.com/pc/service/pass/1806/img_kurlypass2.jpg"
          alt=""
        />
        <button
          as={Link}
          to="/shop/goods/goods_view?&goodsno=26337"
          className="absolute active:outline-0 top-p-400 left-2/4 transform -translate-x-2/4 w-r-24 mx-auto"
        >
          <span className="inline-block w-full  bg-center center h-40 bg-kurlypass-on hover:bg-kurlypass-off bg-no-repeat">
            <span className="a11y-hidden">컬리패스 구매하기</span>
          </span>
        </button>
      </div>

      <img
        className="inline-block"
        src="https://res.kurly.com/pc/service/pass/1806/img_kurlypass3.jpg"
        alt=""
      />
    </div>
  );
};

export default KurlyPass;
