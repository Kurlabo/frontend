import React from 'react';
import { Link } from 'react-router-dom';

const NoticeDetail = () => {
  return (
    <div className="container pb-48">
      <div className="py-20 ">
        <h1 className="leading-50 font-extrabold text-center text-r-3">공지사항</h1>
        <p className="text-kmi-100 text-center">
          컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.
        </p>
      </div>
      <table className="w-full border-t-3 border-kg-400 text-left">
        <colgroup>
          <col width="130px" />
          <col />
          <col width="130px" />
          <col />
        </colgroup>
        <tbody>
          <tr>
            <th className="bg-tableColor py-5 pl-8">제목</th>
            <td colSpan="3" className="py-5 pl-8 border-b border-tableBorder">
              <span></span>
            </td>
          </tr>
          <tr>
            <th className="bg-tableColor py-5 pl-8">작성자</th>
            <td colSpan="3" className="py-5 pl-8 border-b border-tableBorder">
              <span></span>
            </td>
          </tr>
          <tr>
            <th className="bg-tableColor py-5 pl-8">작성일</th>
            <td className="py-5 pl-8 border-b border-tableBorder">
              <span></span>
            </td>
            <th className="bg-tableColor py-5 pl-8">조회수</th>
            <td className="py-5 pl-8 border-b border-tableBorder">
              <span></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="content"></div>
      <div className="my-8 text-right">
        <button className="w-p-150 bg-kp-700 leading-40 text-white text-r-1.3">목록</button>
      </div>
      <div className="border-t-2 border-b-2 border-kg-400">
        <ul>
          <li className="px-4 border-b border-tableBorder">
            <strong className="pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-r-1.3"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              이전글
            </strong>
            <Link
              to="view.php?id=notice&amp;no=821"
              className="inline-block border-l border-tableBorder py-4 pl-12"
            >
              [가격인상공지] [웬떡] 오곡찰밥 외 5건 (2021 2. 15 ~)
            </Link>
          </li>
          <li className="px-4">
            <strong className="pr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="inline-block w-r-1.3"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              이전글
            </strong>
            <Link
              to="view.php?id=notice&amp;no=821"
              className="inline-block border-l border-tableBorder py-4 pl-12"
            >
              [가격인상공지] [웬떡] 오곡찰밥 외 5건 (2021 2. 15 ~)
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NoticeDetail;
