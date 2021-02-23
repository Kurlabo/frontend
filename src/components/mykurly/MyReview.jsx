import React, { useState } from 'react';
// import MyKurlyPageNation from './MyKurlyPageNation';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import { Link } from 'react-router-dom';
import WrittenReview from './WrittenReview';
import WriteReview from './WriteReview';
const MyReview = ({ history }) => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyReviewBlock />
      </main>
    </>
  );
};

const MyReviewBlock = () => {
  const [tabView, setTabView] = useState('viewBeforeList');

  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">작성 가능한 후기 보기 및 내가 쓴 후기 보기 </h1>
      <div className="pb-10 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">상품 후기</h2>
        <p className="text-r-1.4 text-kg-150 mt-12">
          <strong className="">후기 작성 시 사진후기 100원, 글후기 50원을 적립해드립니다.</strong>
          <span className="block">-퍼플,더퍼플 2배 적립(사진 200원,글 100원)</span>
          <span className="block">
            -주간 베스트 후기로 선정 시 <span className="font-medium">5,000원</span>을 추가 적립
          </span>
          <span className="block">
            *후기 작성은 배송 완료일로부터 <span className="font-medium">30</span>일 이내
            가능합니다.
          </span>
        </p>
        <div className="my-12">
          <Link
            onClick={onClick}
            to="#viewBeforeList"
            className="border border-kg-80 inline-block w-2/4 h-full border-r-0"
          >
            <div
              className={`${
                tabView === 'viewBeforeList' ? 'border-b-2 border-kp-600' : ''
              } text-center inline-block w-full py-4 text-r-1.4  bg-white`}
            >
              작성가능 후기(<span>1</span>)
            </div>
          </Link>
          <Link
            onClick={onClick}
            to="#viewAfterList"
            className="border border-kg-80 inline-block w-2/4 h-full"
          >
            <div
              className={`${
                !(tabView === 'viewBeforeList') ? 'border-b-2 border-kp-600' : ''
              } text-center inline-block w-full py-4 text-r-1.4  bg-white`}
            >
              작성완료 후기 (<span>1</span>)
            </div>
          </Link>
        </div>
        {tabView === 'viewBeforeList' ? <WriteReview /> : <WrittenReview />}
      </div>
    </div>
  );

  function onClick(e) {
    setTabView(e.currentTarget.href.split('#')[1]);
  }
};

export default MyReview;
