import React from 'react';
// import MyKurlyPageNation from './MyKurlyPageNation';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';

const MyReview = () => {
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
          <div className="text-center inline-block w-2/4 py-4 text-r-1.4 border border-kg-80 border-r-0">
            작성가능 후기(<span>0</span>)
          </div>
          <div className="text-center inline-block w-2/4 py-4 text-r-1.4 border border-kg-80 ">
            작성완료 후기 (<span>0</span>)
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyReview;
