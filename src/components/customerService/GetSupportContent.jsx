import React from 'react';
import { useState } from 'react';
import MyModal from './common/MyModal';
import Pagination from './common/Pagination';
import GetSupportEmpty from './GetSupportEmpty';
import GetSupportList from './GetSupportList';

const GetSupportContent = ({ pQData, setPage }) => {
  const [state, setState] = useState({
    currentId: 0,
    selectedState: pQData.map(data => ({ id: data.no, selected: false })),
  });

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <div className="border-t-2 border-kp-600">
        <div className="flex pt-8 pb-8 text-r-1.2 text-center justify-between border-b border-gray-300 text-gray-700">
          <span className="w-28">번호</span>
          <span className="w-p-128">카테고리</span>
          <span className="w-r-61.5">제목</span>
          <span className="w-r-13 ">작성일</span>
        </div>
      </div>
      <div className="flex flex-col pb-8">
        {pQData.length !== 0 ? (
          pQData.map(data => (
            <GetSupportList
              data={data}
              key={data.no}
              state={state}
              setState={setState}
              setOpenModal={setOpenModal}
            />
          ))
        ) : (
          <GetSupportEmpty />
        )}
      </div>
      <div className="mt-12">
        {pQData.length !== 0 && <Pagination />}
        <div
          onClick={onClick}
          className=" border text-p-13 bg-klp-500 p-3 w-40 cursor-pointer text-center text-white float-right mr-4 hover:bg-white hover:text-kdp-300 hover:border-kp-600"
        >
          글쓰기
        </div>
        <MyModal openModal={openModal} closeModal={closeModal}>
          해당 글을 삭제하시겠습니까?
          <br />
          데이터 삭제시 복구가 불가능 합니다.
        </MyModal>
      </div>
    </>
  );

  function onClick() {
    setPage(true);
  }

  function closeModal() {
    // 데이터 삭제 처리

    setOpenModal(false);
  }
};

export default GetSupportContent;
