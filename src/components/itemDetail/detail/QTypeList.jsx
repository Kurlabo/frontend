import React from 'react';
import styled from 'styled-components';

const QType = styled.p`
  margin: 10px;
  font-size: 18px;
  padding-left: 10px;
  font-weight: 700;
  color: #5f0080;
  border-left: 3px solid #5f0080;
`;

const QTypeList = () => {
  return (
    <div className="flex justify-between py-24 border-b border-gray-300">
      <div className="font-light text-r-1.7">
        <QType>전화 문의 1644-1107</QType>
        <span className="pl-5">오전 7시~오후 7시 (연중무휴)</span>
      </div>
      <div className="font-light text-r-1.7">
        <QType>카카오톡 문의</QType>
        <div className="pl-5">
          <span>오전 7시~오후 7시 (연중무휴)</span>
          <p className="mt-5 text-r-1.5 text-gray-600">카카오톡에서 마켓컬리를 검색 후</p>
          <p className=" text-r-1.5 text-gray-600">대화창에 문의 및 불편사항을</p>
          <p className=" text-r-1.5 text-gray-600">남겨주세요.</p>
        </div>
      </div>
      <div className="font-light text-r-1.7">
        <QType>홈페이지 문의</QType>
        <div className="pl-5">
          <span>24시간 접수 가능</span>
          <p>{`로그인 > 마이컬리 > 1:1문의`}</p>
          <p className="mt-5 text-r-1.5 text-gray-600">고객센터 운영 시간에 순차적으로</p>
          <p className=" text-r-1.5 text-gray-600">답변해드리겠습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default QTypeList;
