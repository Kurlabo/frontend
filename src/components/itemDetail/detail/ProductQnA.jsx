import React from 'react';
import { useCallback } from 'react';
import Pagination from './Pagination';
import GoodsReviewList from './ProductQnAList';
import ProductQnATitle from './ProductQnATitle';

const isLogin = false;

const ProductQnA = () => {
  const onClick = useCallback(() => {
    if (isLogin) {
      console.log('후기작성 페이지 이동');
    } else {
      console.log('로그인 후 작성 가능합니다. / 로그인 페이지이동');
    }
  }, []);

  return (
    <div>
      <ProductQnATitle />
      <GoodsReviewList />
      <div className="py-4 flex justify-end">
        <div
          onClick={onClick}
          className="text-white bg-klp-600 w-52 my-1 h-14 text-r-1.3 text-center pt-3 hover:bg-white hover:text-kp-600 border border-kp-600 cursor-pointer"
        >
          상품문의
        </div>
      </div>
      <Pagination />
    </div>
  );
};

export default ProductQnA;
