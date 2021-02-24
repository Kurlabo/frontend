import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { getNotice } from '../../modules/notice';
import Pagination from './common/Pagination';
import BoardSearch from './NoticeBoardSearch';

const Notice = () => {
  const dispatch = useDispatch();
  const noticeData = useSelector(state => state.notice);

  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);

  return (
    <div className="w-r-82">
      <div className="pt-2 pb-r-3.4">
        <h2 className="text-r-24 inline-block text-gray-800 font-medium mt-3 mb-1">공지사항</h2>
        <span className="text-r-1.4 pl-r-1.1 text-gray-400">
          컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.
        </span>
      </div>
      <div className="border-t-2 border-kp-600">
        <div className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-b border-gray-600 text-gray-700">
          <span className="w-20">번호</span>
          <span className="w-r-54">제목</span>
          <span className="w-40">작성자</span>
          <span className="w-40">작성일</span>
          <span className="w-12">조회</span>
        </div>
      </div>
      <ul className="flex flex-col pb-8">
        {noticeData.map(data => (
          <li
            className="flex items-center midd text-r-1.2 text-center justify-between border-gray-200 text-gray-700 border-b"
            onClick={onClick}
            key={data.no}
          >
            <span className="w-20">{data.id}</span>
            <Link
              to={`/shop/customer/board/${data.id}`}
              className="w-r-54 text-left cursor-pointer py-8"
            >
              {data.title}
            </Link>
            <span className="w-40">{data.writer}</span>
            <span className="w-40 text-gray-400">{data.regdate}</span>
            <span className="w-12 text-gray-400">{data.views}</span>
          </li>
        ))}
      </ul>
      <div className="mt-24">
        <Pagination num={1} />
      </div>
      <div>
        <BoardSearch />
      </div>
    </div>
  );

  function onClick(e) {}
};

export default withRouter(Notice);
