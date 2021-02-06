import React from 'react';

const GoodsReviewTitle = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h2 className="text-p-13 pb-2 font-medium text-gray-700">PRODUCT REVIEW</h2>
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
      <select className="text-r-1.2 border focus:outline-0 p-y-4 h-14 self-end">
        <option value="1">최근등록순</option>
        <option value="2">좋아요많은순</option>
        <option value="3">조회많은순</option>
      </select>
    </div>
  );
};

export default GoodsReviewTitle;
