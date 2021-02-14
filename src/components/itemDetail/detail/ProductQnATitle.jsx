import React from 'react';

const ProductQnATitle = () => {
  return (
    <div>
      <h2 className="text-p-13 pb-2 font-medium text-gray-700">PRODUCT Q&A</h2>
      <ul className="text-r-1.2 list-disc pl-6">
        <li>
          상품에 대한 문의를 남기는 공간입니다. 해당 게시판의 성격과 다른 글은 사전동의 없이 담당
          게시판으로 이동될 수 있습니다.
        </li>
        <li>
          배송관련, 주문(취소/교환/환불)관련 문의 및 요청사항은 마이컬리 내 1:1문의에 남겨주세요.
        </li>
      </ul>
    </div>
  );
};

export default ProductQnATitle;
