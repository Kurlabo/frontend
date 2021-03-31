import React from 'react';
import ReviewContent from './ReviewContent';

const GoodsReviewList = ({ reviews, name }) => {
  return (
    <div className="border-b border-t border-kp-600 mt-8 mb-8">
      <div className="flex pt-10 pb-9 text-r-1.2 text-center justify-between border-b border-gray-300">
        <span className="w-28">번호</span>
        <span className="w-p-560">제목</span>
        <span className="w-p-88">작성자</span>
        <span className="w-40">작성일</span>
        <span className="w-16">도움</span>
        <span className="w-32">조회</span>
      </div>
      {reviews.length > 0 ? (
        reviews.map(review => <ReviewContent key={review.review_id} review={review} name={name} />)
      ) : (
        <div className="pt-10 pb-9 text-r-1.2 text-center text-gray-500">
          작성된 후기가 없습니다.
        </div>
      )}
    </div>
  );
};

export default React.memo(GoodsReviewList);
