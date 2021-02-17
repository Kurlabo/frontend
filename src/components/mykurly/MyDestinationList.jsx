import React, { useEffect, useRef, useState } from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import RoundCheckBox from './RoundCheckBox';
import MyKurlyPageNation from './MyKurlyPageNation';
const MyDestinationList = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyDestinationBlock />
      </main>
    </>
  );
};

const MyDestinationBlock = () => {
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">배송지 확인</h1>
      <div className="border-b-2 border-kg-300 pb-10 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">배송지 관리</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
        <div className="inline-block  align-middle w-60 ">
          <button className="w-full text-left text-r-1.6 font-medium ">
            <AiOutlinePlus className="ml-10 mr-4 inline-block" />
            <span>새 배송지 추가</span>
          </button>
        </div>
      </div>
      <div>
        <form>
          <fieldset>
            <ul>
              <li>
                <ul className="text-r-1.4 pb-8 border-b text-kg-400 border-kg-300 box-border leading-none">
                  <li className="w-16 text-center inline-block align-middle">선택</li>
                  <li className="w-p-370 text-center inline-block">주소</li>
                  <li className="w-32 text-center inline-block">받으실 분</li>
                  <li className="w-52 text-center inline-block">연락처</li>
                  <li className="w-48 text-center inline-block">배송유형</li>
                  <li className="w-16 text-center inline-block">수정</li>
                </ul>
              </li>
              <MyDestinationListItem />
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

const MyDestinationListItem = () => {
  //   const [myDefault, setDefault] = useState(false);
  //   const inputRadio = useRef();
  //   function onChange(e) {
  //     console.log(e.target.checked);
  //   }

  return (
    <>
      <li className="h-40 border-b border-kg-80 box-border">
        <ul className="text-r-1.4 ">
          <li className="text-center inline-block leading-r-10">
            <RoundCheckBox className="w-16" value="1" />
          </li>
          <li className="w-p-370 px-8 inline-block align-middle">
            <p className="text-r-1.6">
              {/* <span className="block text-r-1.2 w-r-7.9 bg-gray-100 rounded-full px-3 py-2 leading-none">
              기본배송지
            </span> */}
              서울시 도봉로 136길 111
            </p>
          </li>
          <li className="w-32 text-center inline-block align-middle leading-r-10">정세영</li>
          <li className="w-52 text-center inline-block align-middle leading-r-10">010-8331-4362</li>
          <li className="w-48 text-kp-600 text-center inline-block align-middle leading-r-10">
            샛별배송
          </li>
          <li className="w-16 text-center inline-block align-middle leading-r-10">
            <BiPencil className="w-16 text-r-2.8 text-kg-80 cursor-pointer" />
          </li>
        </ul>
      </li>
      <li className="h-40 border-b border-kg-80 box-border">
        <ul className="text-r-1.4 ">
          <li className="text-center inline-block leading-r-10">
            <RoundCheckBox className="w-16" value="2" />
          </li>
          <li className="w-p-370 px-8 inline-block align-middle">
            <p className="text-r-1.6">
              {/* <span className="block text-r-1.2 w-r-7.9 bg-gray-100 rounded-full px-3 py-2 leading-none">
            기본배송지
          </span> */}
              서울시 도봉로 136길 111
            </p>
          </li>
          <li className="w-32 text-center inline-block align-middle leading-r-10">정세영</li>
          <li className="w-52 text-center inline-block align-middle leading-r-10">010-8331-4362</li>
          <li className="w-48 text-kp-600 text-center inline-block align-middle leading-r-10">
            샛별배송
          </li>
          <li className="w-16 text-center inline-block align-middle leading-r-10">
            <BiPencil className="w-16 text-r-2.8 text-kg-80 cursor-pointer" />
          </li>
        </ul>
      </li>
    </>
  );
};

export default MyDestinationList;
