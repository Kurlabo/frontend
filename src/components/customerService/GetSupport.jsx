import React from 'react';
import { useState } from 'react';
import { withRouter } from 'react-router';
import GetSupportContent from './GetSupportContent';
import GetSupportModal from './GetSupportModal';
import GetSupportWriting from './GetSupportWriting';

const pQData = [
  {
    no: 1,
    title: '도대체 환불이 왜 안되는거죠?',
    category: '환불문의',
    date: '2020-11-27',
    content: '주문하고 1분 뒤 바로 주문취소를 했는데 환불이 안됐습니다.',
  },
  {
    no: 2,
    title: '배송지를 변경하고싶은데 가능한가요?',
    category: '상품문의',
    date: '2020-11-27',
    content: '배송지 변경하고싶습니다아아아~~~',
  },
  {
    no: 3,
    title: '곱창떡볶이 재입고 문의',
    category: '상품문의',
    date: '2020-11-27',
    content: '도대체 곱창떡볶이 재입고는 언제 되는건가요????? 공장이 문을 닫은건가요?',
  },
];

const GetSupport = ({ history }) => {
  const [isWritingPage, setPage] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="w-r-82">
      <h2 className="pt-2 pb-r-3.4 text-r-24 inline-block text-gray-800 font-medium mt-3 mb-1">
        1:1문의
      </h2>
      {isWritingPage ? (
        <GetSupportWriting setPage={setPage} />
      ) : (
        <GetSupportContent pQData={pQData} setPage={setPage} />
      )}
      <GetSupportModal openModal={openModal} closeModal={closeModal} />
    </div>
  );

  function closeModal() {
    setOpenModal(false);
    history.push('/shop/account/signin');
  }
};

export default withRouter(GetSupport);
