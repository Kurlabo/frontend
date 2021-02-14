import React, { useState } from 'react';
import UserGrade from './UserGrade';
// {
//   no: '1',
//   title: '맛있어요',
//   writer: '단테깜상',
//   date: '2020-01-02',
//   helpful: '0',
//   views: '3',
// },

const ReviewContent = ({ review }) => {
  const { no, title, writer, date, helpful, views, goodsName, content, user_grade } = review;

  const [hidden, setHidden] = useState(true);

  return (
    <>
      <div
        onClick={onClick}
        className="flex py-8 p text-r-1.2 text-center justify-between border-b border-gray-300 hover:bg-gray-100"
      >
        <span className="w-28">{no}</span>
        <span className="w-p-560 text-left pl-10">{title}</span>
        <span className="w-p-88 relative">
          {user_grade === '0' ? '' : <UserGrade user_grade={user_grade} />}
          {writer}
        </span>
        <span className="w-40 text-gray-400">{date}</span>
        <span className="w-16">{helpful}</span>
        <span className="w-32">{views}</span>
      </div>
      <div
        className={
          'p-4 text-1.2 border-b border-gray-300 overflow-hidden ' + (hidden ? 'hidden' : '')
        }
      >
        <p className="font-medium p-6 ">{goodsName}</p>
        <p className="pl-6 text-gray-700">{content}</p>
        <div className="border border-kp-600 p-2 w-40 cursor-pointer text-center text-kp-600 float-right">
          도움이 돼요 {helpful}
        </div>
      </div>
    </>
  );

  function onClick() {
    setHidden(hidden => !hidden);
  }
};

export default ReviewContent;
