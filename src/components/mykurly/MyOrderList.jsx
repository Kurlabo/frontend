import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import MyKurlyPageNation from './MyKurlyPageNation';
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { VscChevronRight } from 'react-icons/vsc';

const MyOrderList = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyOrderListBlock />
      </main>
    </>
  );
};

const MyOrderListBlock = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-14 px-12 pb-32">
      <h1 className="a11y-hidden">주문 내역 확인 </h1>
      <div className="border-b-2 border-kg-300 pb-10 mb-10">
        <h2 className=" inline-block align-middle font-medium mr-6 text-r-2.4">주문내역</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          지난 3년간의 주문 내역 조회가 가능합니다
        </p>
        <div
          className={`relative inline-block text-kg-350 overflow-hidden ml-20 border border-kg-80 align-middle w-60 h-16 ${
            open ? 'overflow-visible' : 'overflow-hidden'
          }`}
        >
          <button
            className="absolute  pl-4 text-r-1.4 w-full h-full z-20 left-0 top-0 text-left bg-white focus:outline-0"
            onClick={onClick}
          >
            <span className="w-full h-full">전체기간</span>
            {open ? (
              <TiArrowSortedUp className="inline-block ml-20" />
            ) : (
              <TiArrowSortedDown className="inline-block ml-20" />
            )}
          </button>
          <ul
            className={`bg-white w-60 absolute z-0 transition-all border border-kg-80 border-t-0 text-r-1.2 transform -top-r-0.1 -left-r-0.1 
            ${open ? 'translate-y-16' : '-translate-y-0 '}`}
          >
            <li className=" border-b py-3 pl-4  active:bg-kg-100">
              <NavLink to="">전체기간</NavLink>
            </li>
            <li className=" border-b py-3 pl-4 active:bg-kg-100">
              <NavLink to="">2021년</NavLink>
            </li>
            <li className=" border-b py-3 pl-4 active:bg-kg-100">
              <NavLink to="">2020년</NavLink>
            </li>
            <li className=" py-3 pl-4 active:bg-kg-100">
              <NavLink to="">2019년</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <ul>
          <MyOrderListItem />
          <MyOrderListItem />
          <MyOrderListItem />
        </ul>
        <MyKurlyPageNation pageNumber="4" />
      </div>
    </div>
  );

  function onClick() {
    setOpen(!open);
  }
};
const MyOrderListItem = () => {
  const qa_button =
    'text-kp-600 text-r-1.2 absolute top-1/2 right-3 transform -translate-y-2/4 border border-kp-600 px-20 py-4';
  return (
    <>
      <li className="">
        <p className="text-r-1.6 text-kg-350 font-medium mt-8 mb-6">
          2020.12.22 <span>(1시 05분)</span>
        </p>
        <div className="pt-10 px-8 border border-kg-80">
          <h3 className="cursor-pointer clear-fix text-r-1.6 pb-6 font-medium">
            <Link to="/shop/mypage/mypage_orderview/ordno=123">
              [리치몬드 과자점] 쉬폰 4종 외 4건
              <VscChevronRight className="float-right inline-block text-r-2" />
            </Link>
          </h3>
          <div className="relative clear-fix border-t border-kg-80 ">
            <div className="w-24 py-6 float-left align-middle">
              <img src="https://img-cf.kurly.com/shop/data/goods/1607575010169s0.jpg" alt="" />
            </div>
            <dl className="float-left pl-6 pt-7 w-r-65 align-middle ">
              <dt className="inline-block w-24 text-r-1.2 leading-none">주문번호</dt>
              <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                1608566281235
              </dd>
              <dt className="inline-block w-24 text-r-1.2 leading-none">결제금액</dt>
              <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                20,082원
              </dd>
              <dt className="inline-block w-24 text-r-1.2 leading-none">주문상태</dt>
              <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                배송완료
              </dd>
            </dl>
            <button className={`${qa_button}`}>1:1 문의</button>
          </div>
        </div>
      </li>
    </>
  );
};
export default MyOrderList;
