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
        <div className="p-r-1.6 text-r-1.2">
          <svg
            className="text-klp-400 w-r-1.4 inline-block mr-2 ml-r-1.6 "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          {content}
        </div>
      </div>
    </>
  );

  function onClick() {
    setHidden(state => !hidden);
  }
};

export default FrequentQuestionList;
