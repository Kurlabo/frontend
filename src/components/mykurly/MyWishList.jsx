import React from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import MyKurlyPageNation from './MyKurlyPageNation';
import CheckBox from '../login/CheckBox';
const MyWishList = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyWishListBlock />
      </main>
    </>
  );
};

const MyWishListBlock = () => {
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">배송지 확인</h1>
      <div className="border-b-2 border-kg-300 pb-10 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">늘 사는 것</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          늘 사는 것으로 등록하신 상품 목록입니다.
        </p>
      </div>
      <div className="">
        <ul>
          <li>
            <ul className="text-r-1.4 pb-8 border-b font-medium border-kg-300 box-border leading-none">
              <li className="inline-block text-center align-middle">
                <CheckBox />
              </li>
              <li className="w-r-62 text-center inline-block align-middle">상품정보</li>
              <li className="w-48 text-center inline-block align-middle">선택</li>
            </ul>
          </li>
          <MyWishListItem />
        </ul>
        <div className="text-right">
          <button className="mt-8 text-r-1.3 border border-kp-600 text-kp-600 py-4 px-10">
            늘 사는 것 비우기
          </button>
        </div>
        <MyKurlyPageNation />
      </div>
    </div>
  );
};

const MyWishListItem = () => {
  return (
    <li className="border-b border-kg-80 box-border">
      <ul className="text-r-1.4 ">
        <li className="inline-block text-center align-middle">
          <CheckBox />
        </li>
        <li className="clear-fix px-8 w-r-62 h-full text-center inline-block align-middle ">
          <div className="float-left w-36 py-8 ">
            <img src="https://img-cf.kurly.com/shop/data/goods/1582679290125s0.jpg" alt="" />
          </div>
          <div className="pl-24 py-8 float-left text-left w-r-48 text-kg-300">
            <h2 className="text-r-1.6 w-full font-medium truncate">
              [남향푸드또띠아] 간편 간식 브리또 8종
            </h2>
            <p className="text-r-1.2 my-7">4,700원</p>
            <p className="text-r-1.2 font-medium text-kp-600">※패키지 구성품</p>
            <p className="text-r-1.2 mt-1 w-fulltruncate">바질10g/1개/1800원</p>
          </div>
        </li>
        <li className="w-48 text-center inline-block align-middle">
          <button className="text-r-1.3 py-2 w-40 mb-2 border border-kp-600 bg-kp-550 text-white">
            장바구니담기
          </button>
          <button className="text-r-1.3 border w-40 py-2 border-kp-600 text-kp-600">삭제</button>
        </li>
      </ul>
    </li>
  );
};

export default MyWishList;
