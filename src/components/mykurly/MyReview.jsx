import React, { useState } from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import { Link } from 'react-router-dom';
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
  const [tabView, setTabView] = useState(true);

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
            to="#viewBeforeList"
            className="border border-kg-80 inline-block w-2/4 h-full border-r-0"
          >
            <div
              onClick={onClick}
              className={`${
                tabView ? 'border-b-2 border-kp-600' : ''
              } text-center inline-block w-full py-4 text-r-1.4  bg-white`}
            >
              작성가능 후기(<span>1</span>)
            </div>
          </Link>
          <Link to="#viewAfterList" className="border border-kg-80 inline-block w-2/4 h-full">
            <div
              onClick={onClick}
              className={`${
                !tabView ? 'border-b-2 border-kp-600' : ''
              } text-center inline-block w-full py-4 text-r-1.4  bg-white`}
            >
              작성완료 후기 (<span>1</span>)
            </div>
          </Link>
        </div>
        {tabView ? <WriteReviewContainer /> : <WrittenReviewContainer />}
      </div>
    </div>
  );

  function onClick() {
    setTabView(!tabView);
  }
};

const WriteReviewContainer = () => {
  return (
    <section id="#viewBeforeList" className="">
      <h3 className="a11y-hidden">작성가능한후기보기</h3>
      <ul className="">
        <WriteReviewItem />
      </ul>
    </section>
  );
};

const WrittenReviewContainer = () => {
  return (
    <section id="#viewAfterList" className="">
      <h3 className="a11y-hidden">작성한후기보기</h3>
      <ul classname="">
        <WrittenReviewItem />
      </ul>
    </section>
  );
};
const WriteReviewItem = () => {
  const [written, setWritten] = useState(true);
  return (
    <>
      <li>
        <div>
          <h3 className="text-r-1.2 my-3">주문번호:123</h3>
          <ul>
            <li className="text-r-1.4 border border-kg-80 py-6 px-8 mb-5">
              <div className="inline-block w-32 align-middle">
                <img src="http://img-cf.kurly.com/shop/data/goods/1521626157871s0.jpg" alt="" />
              </div>
              <div className="inline-block align-middle w-p-370 px-8">
                <h3 className="text-r-1.4 text-kg-350 pb-2">[CJ프레시웨이] 건강한 도시락 5종</h3>
                <p className="font-medium pb-4">[처카넛베이] 뉴욕 치즈 케이크 클래식 113g</p>
                <span className="block mt-4 text-kg-400">1개 구매</span>
              </div>
              <span className="font-medium mx-14">5월 19일 배송완료</span>
              {!written ? (
                <button className="inline-block align-middle bg-kp-600 text-white w-44 py-3">
                  후기쓰기
                </button>
              ) : (
                <div className="inline-block align-middle text-center w-44 ">
                  <span className="font-medium inline-block mb-3 py-3 px-4 border border-kg-250 text-kg-200">
                    후기작성 완료
                  </span>
                  <button className="font-medium hover:bg-kp-600 hover:text-white py-3 px-4 border border-kp-600 text-kp-600">
                    장바구니 담기
                  </button>
                </div>
              )}
            </li>
          </ul>
        </div>
      </li>
    </>
  );
};

const WrittenReviewItem = () => {
  return (
    <>
      <li>
        <div className="text-r-1.6 border text-kg-400 border-kg-80 px-10 py-6 shadow-lg">
          <h3 className="text-r-1.4 text-kg-350 pb-2">[CJ프레시웨이] 건강한 도시락 5종</h3>
          <p className="border-b border-kg-80 font-medium pb-4">
            [CJ프레시웨이] 탄두리치킨볶음밥 &amp; 참치오믈렛
          </p>
          <div className="pt-4">
            <div className="inline-block h-r-11.5 align-middle w-4/5">
              <h4 className="mb-2 font-medium">그냥 그래요</h4>
              <p className="multiline-ellipsis ">기대했던것보다는 아쉽습니다.</p>
              <span className="text-kg-350 inline-block p-1 text-r-1.2 w-4/5 align-middle">
                2020.01.20 작성
              </span>
              <span className="inline-block font-medium text-r-1.2 w-1/5 p-1 align-middle text-right">
                도움이 돼요 <span className="text-kp-600">0</span>
              </span>
            </div>
            <div className="inline-block ml-11 w-36 align-top ">
              <img src="https://img-cf.kurly.com/shop/data/goods/1568624108507y0.jpg" alt="" />
            </div>
          </div>
        </div>
      </li>
    </>
  );
};
export default MyReview;
