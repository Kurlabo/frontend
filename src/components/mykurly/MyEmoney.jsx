import React from 'react';
import MyKurlyPageNation from './MyKurlyPageNation';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';

const MyEmoney = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyEmoneyBlock />
      </main>
    </>
  );
};

const MyEmoneyBlock = () => {
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 px-12 pb-32 ">
      <h1 className="a11y-hidden">적립금 확인</h1>
      <div className="border-b-2 border-kg-300 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">적립금</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          보유하고 계신 적립금의 내역을 한 눈에 확인 하실 수 있습니다.
        </p>
        <div>
          <div className="clear-fix inline-block text-r-1.4 border border-kg-80 border-r-0 w-2/4 px-20 py-12 my-12">
            <span className="align-middle inline-block w-r-15.8 mr-p-56">현재 적립금</span>
            <span className="inline-block text-r-2 align-middle text-kp-600 font-medium text-right">
              100 원
            </span>
          </div>
          <div className="clear-fix inline-block text-r-1.4 border border-kg-80 w-2/4 px-20 py-12 my-12">
            <span className="align-middle inline-block w-r-15.8 mr-p-56 ">소멸예정 적립금</span>
            <span className=" inline-block text-r-2 text-kp-600 align-middle font-medium text-right ">
              0 원
            </span>
          </div>
        </div>
      </div>

      <div className="">
        <ul className="last:border-kg-300">
          <li>
            <ul className="text-r-1.4 pb-8 text-kg-400 border-b font-medium border-kg-300 box-border leading-none">
              <li className="w-44 inline-block text-center align-middle">날짜</li>
              <li className="w-p-410 px-8 text-left inline-block align-middle">내용</li>
              <li className="w-56 text-center inline-block align-middle">유효기간</li>
              <li className="w-48 text-center inline-block align-middle">금액</li>
            </ul>
          </li>
          <MyEmoneyItem />
        </ul>

        <MyKurlyPageNation pageNumber="1" />
      </div>
    </div>
  );
};

const MyEmoneyItem = () => {
  return (
    <>
      <li className="h-r-5.6 border-kg-80 border-b leading-r-5.6">
        <ul className="text-r-1.4">
          <li className="w-44 inline-block text-center align-middle">20.12.22</li>
          <li className="w-p-410  px-8 text-left inline-block align-middle">
            [적립금소멸] 적립금 유효기간 만료
          </li>
          <li className="w-56 text-center inline-block align-middle"></li>
          <li className="w-48 text-center inline-block align-middle">-1100원</li>
        </ul>
      </li>
      <li className="h-r-5.6 border-kg-80 border-b leading-r-5.6">
        <ul className="text-r-1.4">
          <li className="w-44 inline-block text-center align-middle">20.12.21</li>
          <li className="w-p-410  px-8 text-left inline-block align-middle">
            [구매적립] 주문(1608566281235) 0.5%적립
          </li>
          <li className="w-56 text-center inline-block align-middle">21.12.31</li>
          <li className="w-48 text-center inline-block text-kp-600 font-medium align-middle">
            +100원
          </li>
        </ul>
      </li>
    </>
  );
};

export default MyEmoney;
