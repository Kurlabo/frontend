import React from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import { HiOutlineChevronRight } from 'react-icons/hi';

const detailTitle = 'border-b-2 border-kg-300 pb-8 text-r-2 font-medium';
const MyOrderView = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyOrderViewBlock />
      </main>
    </>
  );
};

const MyOrderViewBlock = () => {
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 px-12 box-border ">
      <h1 className="a11y-hidden">배송지 확인</h1>
      <div className="border-b-2 border-kg-300 pb-6">
        <h2 className="font-medium align-middle text-r-2.4 mb-10 ">주문내역상세</h2>
        <h3 className="w-2/3  inline-block align-middle text-r-2 font-medium">
          주문번호 1608566281235
        </h3>
        <p className="ml-8  inline-block text-r-1.2 align-middle text-kg-350">
          배송 또는 상품에 문제가 있나요?{' '}
          <span className="text-kp-600">
            1:1문의하기
            <HiOutlineChevronRight className="inline-block" />
          </span>
        </p>
      </div>
      <MyOrderViewItem />
      <div className="text-center ">
        <div className="inline-block my-16">
          <button className="rounded w-r-21.2 border font-medium border-kp-600 py-6 text-r-1.6 text-kp-600">
            전체 상품 다시 담기
          </button>
          <button className="ml-4 rounded w-r-21.2 border font-medium border-kp-80 py-6 text-r-1.6 text-kg-80">
            전체 상품 주문 취소
          </button>
        </div>
        <p className="text-r-1.4 text-kg-350 ">
          직접 주문취소는 '입금확인'상태일 경우에만 가능합니다.
        </p>
      </div>
      <MyOrderViewDetails />
    </div>
  );
};

const MyOrderViewDetails = () => {
  return (
    <>
      <div className="my-16">
        <h3 className={`${detailTitle}`}>결제 정보</h3>
        <dl className="text-r-1.6 py-4 text-kg-350 leading-r-5 border-b border-kg-80">
          <dt className="inline-block w-4/5 text-kg-350">상품금액</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">25,242원</dd>
          <dt className="inline-block w-4/5 text-kg-350">배송비</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">3,000원</dd>
          <dt className="inline-block w-4/5 text-kg-350">상품할인금액</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">- 3,560원</dd>
          <dt className="inline-block w-4/5 text-kg-350">쿠폰할인</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">0 원</dd>
          <dt className="inline-block w-4/5 text-kg-350">적립금사용</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">4,600원</dd>
          <dt className="inline-block w-4/5 text-kg-350">결제금액</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400 font-medium">20,082원</dd>
          <dt className="inline-block w-4/5 text-kg-350">적립예정금액</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">100원</dd>
          <dt className="inline-block w-4/5 text-kg-350 font-medium">결제방법</dt>
          <dd className="inline-block w-1/5 text-right text-kg-400">CHAI</dd>
        </dl>
      </div>
      <div className="my-16">
        <h3 className={`${detailTitle}`}>주문 정보</h3>
        <dl className="text-r-1.6 py-4 text-kg-350 leading-r-5 border-b border-kg-80">
          <dt className="inline-block w-1/5 text-kg-350">주문 번호</dt>
          <dd className="inline-block w-4/5  text-kg-400">1608566281235</dd>
          <dt className="inline-block w-1/5 text-kg-350">주문자명</dt>
          <dd className="inline-block w-4/5 text-kg-400">정세영</dd>
          <dt className="inline-block w-1/5 text-kg-350">보내는 분</dt>
          <dd className="inline-block w-4/5 text-kg-400">정세영</dd>
          <dt className="inline-block w-1/5 text-kg-350">결제일시</dt>
          <dd className="inline-block w-4/5 text-kg-400">2020-12-22 01:05:06</dd>
        </dl>
      </div>
      <div className="my-16">
        <h3 className={`${detailTitle}`}>배송 정보</h3>
        <dl className="text-r-1.6 py-4 text-kg-350 leading-r-5 border-b border-kg-80">
          <dt className="inline-block w-1/5 text-kg-350">받는 분</dt>
          <dd className="inline-block w-4/5  text-kg-400">정세영</dd>
          <dt className="inline-block w-1/5 text-kg-350">핸드폰</dt>
          <dd className="inline-block w-4/5  text-kg-400">010-****-4362</dd>
          <dt className="inline-block w-1/5 text-kg-350">배송방법</dt>
          <dd className="inline-block w-4/5  text-kg-400">샛별배송</dd>
          <dt className="inline-block w-1/5 text-kg-350">주소</dt>
          <dd className="inline-block w-4/5  text-kg-400">
            (01409) 서울 도봉구 창동 815(창동3차현대아파트) 206-2304
          </dd>
          <dt className="inline-block w-1/5 text-kg-350">받으실 장소</dt>
          <dd className="inline-block w-4/5  text-kg-400">경비실</dd>
          <dt className="inline-block w-1/5 text-kg-350">경비실 특이사항</dt>
          <dd className="inline-block w-4/5 text-kg-400">경비실 택배함에 놓고가쥬세용</dd>
        </dl>
      </div>
      <div className="my-16">
        <h3 className={`${detailTitle}`}>배송 정보</h3>
        <dl className="text-r-1.6 py-4 text-kg-350 leading-r-5 border-b border-kg-80">
          <dt className="inline-block w-1/5 text-kg-350">메세지 전송</dt>
          <dd className="inline-block w-4/5 text-kg-400">배송직후</dd>
          <dt className="inline-block w-1/5 text-kg-350">미출시 조치방법</dt>
          <dd className="inline-block w-4/5 text-kg-400">결제수단으로 환불</dd>
        </dl>
      </div>
    </>
  );
};
const MyOrderViewItem = () => {
  return (
    <li className="border-b border-kg-80 box-border text-r-1.4  ">
      <div className="clear-fix w-full my-8 h-r-7.9 inline-block align-middle ">
        <div className="w-24 mr-8 inline-block align-middle">
          <img src="https://img-cf.kurly.com/shop/data/goods/1607575010169s0.jpg" alt="" />
        </div>
        <div className="w-r-50 text-r.1.4 inline-block align-middle text-kg-400 ">
          <h2 className="text-r-1.6 w-full font-medium truncate">[리치몬드 과자점] 플레인 쉬폰</h2>
          <p className="text-kg-150 pt-2">리치몬드 과자점 쉬폰 4종</p>
          <p className="mt-1 pt-2 text-kg-400 ">
            <span className="font-medium">7,000 원</span>
            <span className="px-4 line-through text-kg-150">3,600 원</span>
            <span className="text-kg-80 mx-2">|</span>
            <span className="">1개</span>
          </p>
        </div>
        <span className="align-middle text-r-1.6 font-medium mx-8">배송 완료</span>
        <button className="ml-7 rounded border font-medium text-r-1.2 border-kp-600 text-kp-600 py-3 px-3">
          장바구니 담기
        </button>
      </div>
    </li>
  );
};

export default MyOrderView;
