import React from 'react';
import { useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import RoundCheckBox from '../mykurly/RoundCheckBox';

const container = 'flex flex-col justify-center items-center font-body px-12';
const searchInput =
  'bg-gray-50 rounded-p-3 w-full py-5 pr-5 pl-6 h-r-4.4 leading-8 border border-gray-300 focus:outline-0 mb-6';
const addInput =
  'rounded-p-3 w-full py-5 pr-5 pl-6 h-r-4.4 border border-gray-400 focus:outline-0 mb-6 ';
const saveBtn =
  'bg-kp-600 text-white w-full h-r-4.4 border border-kdp-400 rounded-p-3 text-1.4 mt-6';
const research =
  'border border-kp-600 rounded-p-3 text-kp-600 w-48 bg-transparent h-r-4.4 font-bold ml-4';
const mainTextWrap = 'font-medium text-p-24 pt-16 pb-4 text-center';
const subTextWrap = 'text-left w-full text-gray-400 text-1.2';

const SearchLocation = ({ history }) => {
  const address = sessionStorage.getItem('address');
  const buildingName = sessionStorage.getItem('buildingName');
  return (
    <div className={container}>
      <p className={mainTextWrap}>
        <span className="text-kp-600 mr-2">배송가능</span>
        <span>지역입니다.</span>
        <span className="block text-gray-400 text-p-16 mt-3 mb-9">
          매일 아침 문 앞까지 신선함을 전해드려요.
        </span>
      </p>
      <div className="w-full text-1.4">
        <div className="flex">
          <input
            type="text"
            className={searchInput}
            value={`${address} ${buildingName && '(' + buildingName + ')'}`}
          />
          <button
            className={research}
            onClick={() => {
              history.push();
            }}
          >
            <BiSearch className="inline-block mr-2 focus:outline-0" />
            재검색
          </button>
        </div>
        <input type="text" className={addInput} placeholder="나머지 주소를 입력해주세요" />
      </div>
      <div className="w-full text-left mb-3">
        <RoundCheckBox value="기본 배송지로 저장" modalClose="modalClose" />
      </div>
      <div className={subTextWrap}>
        &#8251;
        <p className="inline-block pt-1 pl-2 ">
          저장된 배송지는 최대 7일 간 임시 저장 후 자동 삭제됩니다.
        </p>
        <p>로그인 할 경우, 회원님의 배송지 목록에 추가됩니다.</p>
      </div>
      <form className="w-full">
        <button className={saveBtn} onClick={onClose}>
          저장
        </button>
      </form>
    </div>
  );
  function onClose() {
    window.close();
  }
};

export default SearchLocation;
