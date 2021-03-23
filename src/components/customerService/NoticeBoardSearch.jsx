import React from 'react';

const BoardSearch = () => {
  return (
    <table className="w-full h-32 mt-12 border-t border-kp-600">
      <tbody>
        <tr>
          <td className="text-r-1.2 w-r-6.5">검색어</td>
          <td className="text-r-1.4 w-p-278">
            <input type="checkbox" id="name" className="ml-4 mr-1" />
            <label htmlFor="name">이름</label>
            <input type="checkbox" id="title" className="ml-4 mr-1" defaultChecked />
            <label htmlFor="title">제목</label>
            <input type="checkbox" id="content" className="ml-4 mr-1" />
            <label htmlFor="content">내용</label>
          </td>
          <td>
            <div className="flex justify-end">
              <input
                type="text"
                className="h-r-3.4 w-r-22 text-r-1.2 border border-gray-300 p-r-0.4"
              />
              <div className="w-r-3.4 h-r-3.4 bg-klp-500 flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-white w-7"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default BoardSearch;
