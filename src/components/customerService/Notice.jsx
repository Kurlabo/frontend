import React from 'react';
import Pagination from './common/Pagination';
import BoardSearch from './BoardSearch';

// Dummy data

const noticeData = [
  {
    no: '1',
    title: '후기 작성 이벤트 당첨자 발표',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
  {
    no: '2',
    title: '배송료 인상 안내',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
  {
    no: '3',
    title: '후기 작성 이벤트 당첨자 발표',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
  {
    no: '4',
    title: '개인정보처리방침 개정 내용 사전 안내',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
  {
    no: '5',
    title: '후기 작성 이벤트 당첨자 발표',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
  {
    no: '6',
    title: '후기 작성 이벤트 당첨자 발표',
    writer: 'MarketKurly',
    date: '2021-01-27',
    views: '112',
  },
];

const Notice = () => {
  return (
    <div className="w-r-82">
      <div className="pt-2 pb-r-3.4">
        <h2 className="text-r-24 inline-block text-gray-800 font-medium mt-3 mb-1">공지사항</h2>
        <span className="text-r-1.4 pl-r-1.1 text-gray-400">
          컬리의 새로운 소식들과 유용한 정보들을 한곳에서 확인하세요.
        </span>
      </div>
      <div className="border-b border-t-2 border-kp-600">
        <div className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-gray-300 text-gray-700">
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
            className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-gray-200 text-gray-700 border-b"
            key={data.no}
          >
            <span className="w-20">{data.no}</span>
            <span className="w-r-54 text-left cursor-pointer">{data.title}</span>
            <span className="w-40">{data.writer}</span>
            <span className="w-40 text-gray-400">{data.date}</span>
            <span className="w-12 text-gray-400">{data.views}</span>
          </li>
        ))}
      </ul>
      <div className="mt-24">
        <Pagination />
      </div>
      <div>
        <BoardSearch />
      </div>
    </div>
  );
};

export default Notice;
