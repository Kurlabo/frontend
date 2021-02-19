import React, { useState } from 'react';
import { useCallback } from 'react';

const QnAContent = ({ post }) => {
  const { no, title, writer, date, content } = post;

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
        <span className="w-28">{no}</span>
        <span className="w-p-560 text-left pl-10">{title}</span>
        <span className="w-p-88 relative">{writer}</span>
        <span className="w-40 text-gray-400">{date}</span>
      </div>
      <div
        className={
          'px-4 py-8 text-r-1.2 border-b border-gray-300 overflow-hidden ' +
          (hidden ? 'hidden' : '')
        }
      >
        <p className="pl-6 text-gray-700">{content}</p>
      </div>
    </>
  );
};

export default React.memo(QnAContent);
