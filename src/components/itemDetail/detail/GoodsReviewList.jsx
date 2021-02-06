import React from 'react';
import ReviewContent from './ReviewContent';

const reviews = [
  {
    no: '1',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '맛있어요',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '0',
    date: '2020-01-02',
    helpful: '0',
    views: '3',
  },
  {
    no: '2',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '걍 그러네요',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '5',
    date: '2020-03-01',
    helpful: '0',
    views: '1',
  },
  {
    no: '3',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '냠냠굳',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '2',
    date: '2020-07-09',
    helpful: '0',
    views: '0',
  },
  {
    no: '4',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '세번째 구매입니다',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '3',
    date: '2020-07-10',
    helpful: '1',
    views: '1',
  },
  {
    no: '5',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '별로임',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '1',
    date: '2020-07-21',
    helpful: '2',
    views: '3',
  },
  {
    no: '6',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '정말 맛있어요!',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '0',
    date: '2020-07-09',
    helpful: '4',
    views: '1',
  },
  {
    no: '7',
    goodsName: '[우주] 무산 재래김 25g(10매 내외)',
    title: '딸 아이가 좋아하네요',
    content: '진짜진짜 맛있는 김입니다~!!',
    writer: '백나라',
    user_grade: '1',
    date: '2020-07-09',
    helpful: '5',
    views: '4',
  },
];

const GoodsReviewList = () => {
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
      {reviews.map(review => (
        <ReviewContent key={review.no} review={review} />
      ))}
    </div>
  );
};

export default GoodsReviewList;
