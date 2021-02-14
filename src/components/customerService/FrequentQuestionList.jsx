import React from 'react';
import { useState } from 'react';

const FrequentQuestionList = ({ data }) => {
  const { no, category, title, content } = data;

  const [hidden, setHidden] = useState(false);

  return (
    <>
      <div
        onClick={onClick}
        className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-gray-200 text-gray-700 border-b"
        key={data.no}
      >
        <span className="w-28">{no}</span>
        <span className="w-r-13">{category}</span>
        <span className="w-r-61.5 text-left cursor-pointer">{title}</span>
      </div>
      <div
        className={
          'p-r-1.9 text-lg border-b border-gray-200 overflow-hidden ' + (!hidden ? 'hidden' : '')
        }
      >
        <div className="p-r-1.6">{content}</div>
      </div>
    </>
  );

  function onClick() {
    setHidden(state => !hidden);
  }
};

export default FrequentQuestionList;
