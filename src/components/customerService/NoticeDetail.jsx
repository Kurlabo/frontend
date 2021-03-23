import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import axios from '../../../node_modules/axios/index';
import { getNotice } from '../../modules/notice';

const NoticeDetail = () => {
  const [noticeDetail, setNoticeDetail] = useState({});
  const { id } = useParams();
  const dispatch = useDispatch();
  const noticeData = useSelector(state => state.notice);
  const prev = noticeData.find(notice => notice.id === +id - 1);
  const next = noticeData.find(notice => notice.id === +id + 1);

  useEffect(() => {
    fetchNoticeDetail(id);
    dispatch(getNotice());
  }, [id, dispatch]);

  return (
    <div className="container pb-48 text-r-1.2">
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
              <span>{noticeDetail.title}</span>
            </td>
          </tr>
          <tr>
            <th className="bg-tableColor py-5 pl-8">작성자</th>
            <td colSpan="3" className="py-5 pl-8 border-b border-tableBorder">
              <span>{noticeDetail.writer}</span>
            </td>
          </tr>
          <tr>
            <th className="bg-tableColor py-5 pl-8">작성일</th>
            <td className="py-5 pl-8 border-b border-tableBorder">
              <span>{noticeDetail.regdate}</span>
            </td>
            <th className="bg-tableColor py-5 pl-8">조회수</th>
            <td className="py-5 pl-8 border-b border-tableBorder">
              <span></span>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="px-8 py-8 leading-3">{noticeDetail.content}</div>
      <div className="my-8 text-right">
        <Link
          to="./"
          className="inline-block w-p-150 bg-kp-700 leading-40 text-white text-r-1.3 text-center"
        >
          목록
        </Link>
      </div>
      <div className="border-t-2 border-b-2 border-kg-400">
        <ul>
          {prev && (
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
                to={`/shop/customer/board/${prev.id}`}
                className="inline-block border-l border-tableBorder py-4 pl-12"
              >
                {prev.title}
              </Link>
            </li>
          )}
          {next && (
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
                다음글
              </strong>
              <Link
                to={`/shop/customer/board/${next.id}`}
                className="inline-block border-l border-tableBorder py-4 pl-12"
              >
                {next.title}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
  async function fetchNoticeDetail(id) {
    try {
      const res = await axios.get(`http://3.35.221.9:8080/api/board/view/${id}`);
      setNoticeDetail(res.data);
    } catch (e) {
      console.log(e);
    }
  }
};

export default NoticeDetail;
