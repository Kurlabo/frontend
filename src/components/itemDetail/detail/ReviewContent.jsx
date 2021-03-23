import React, { useState } from 'react';
import { useCallback } from 'react';
import UserGrade from './UserGrade';

const ReviewContent = ({ review, name }) => {
  const { review_id, title, writer, regdate, help, cnt, content, user_grade } = review;

  const [hidden, setHidden] = useState(true);

  const onClick = useCallback(() => {
    setHidden(hidden => !hidden);
  }, []);

  return (
    <>
      <div
        onClick={onClick}
        className="flex py-8 p text-r-1.2 text-center justify-between border-b border-gray-300 hover:bg-gray-100"
      >
        <span className="w-28">{review_id}</span>
        <span className="w-p-560 text-left pl-10">{title}</span>
        <span className="w-p-88 relative">
          {user_grade === '0' ? '' : <UserGrade user_grade={user_grade} />}
          {writer}
        </span>
        <span className="w-40 text-gray-400">{regdate}</span>
        <span className="w-16">{help}</span>
        <span className="w-32">{cnt}</span>
      </div>
      <div
        className={
          'p-4 text-r-1.2 border-b border-gray-300 overflow-hidden ' + (hidden ? 'hidden' : '')
        }
      >
        <p className="font-medium p-6 ">{name}</p>
        <p className="pl-6 text-gray-700">{content}</p>
        <div className="border border-kp-600 p-2 w-40 cursor-pointer text-center text-kp-600 float-right">
          도움이 돼요 {help}
        </div>
      </div>
    </>
  );
};

export default React.memo(ReviewContent);
