import React from 'react';
import Pagination from '../../customerService/common/Pagination';
import ProductQnAList from './ProductQnAList';
import ProductQnATitle from './ProductQnATitle';

const ProductQnA = () => {
  return (
    <div>
      <ProductQnATitle />
      <ProductQnAList />
      <div className="py-4 flex justify-end">
        <div className="text-white bg-klp-400 w-52 my-1 h-14 text-r-1.3 text-center pt-3 border-kp-600 select-none">
          상품문의
        </div>
      </div>
      <Pagination num={1} />
    </div>
  );
};

export default ProductQnA;
