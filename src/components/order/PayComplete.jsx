import React, { useEffect, useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PayingLoading from '../common/PayingLoading';
import { a11yHidden } from '../header/HeaderNav';

const PayComplete = () => {
  const orderInfo = useSelector(state => state.paycomplete.paycompleteInfo);
  const [isLoading, setIsLoading] = useState(true);

  // window.scrollTo({ top: 0 });

  // 결제 정보 불러오기
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  });

  return (
    <div>
      {isLoading ? (
        <PayingLoading />
      ) : (
        <div className="bg-gray-100 transform -translate-y-r-2.8 py-r-6.5">
          <div className="flex flex-col items-center mx-auto bg-white w-r-42.6">
            <div className="w-full">
              <div className="flex flex-col items-center mt-12 text-r-2.2 border-b-3 border-gray-100">
                <h1 className={a11yHidden}>결제 완료</h1>
                <FiCheckCircle className="text-9xl text-kp-700 font-thin block mb-6" />
                <p>{orderInfo.orderer}님의 주문이 완료되었습니다.</p>
                <p className="pb-r-1.8">곧 만나요!</p>
              </div>
              <div className="text-r-1.6 text-gray-600 pt-r-1.4 pl-r-1.6 font-medium ">
                <h2 className="pb-r-0.4">결제수단</h2>
                <p className="text-kp-600">{orderInfo.checkout}</p>
              </div>
              <div className="text-r-1.6 text-gray-600 pt-r-1.4 pl-r-1.6 font-medium ">
                <h2>결제금액</h2>
                <p className="text-gray-800 font-semibold pb-r-1.1 text-r-1.8">
                  {(+orderInfo.total_price).toLocaleString()}원
                </p>
                <p className="text-gray-500 text-r-1.2">* 적립금은 배송당일에 적립됩니다.</p>
              </div>
              <div className="text-r-1.7 text-gray-600 pt-r-1.4 pl-r-1.6 pr-r-1.6">
                <Link
                  to="/"
                  className="block bg-kp-600 text-white rounded-p-3 py-r-0.9 text-center mb-r-1.1"
                >
                  홈으로 이동
                </Link>
                <Link
                  to="/shop/mypage/mypage_orderlist"
                  className=" block border border-gray-200 text-gray-900 rounded-p-3 py-r-0.9 text-center"
                >
                  주문내역 상세보기
                </Link>
              </div>
              <p className="text-gray-700 py-r-1.3 px-r-1.6 text-r-1.5">
                <span className="font-bold">'입금확인'</span>상태일 때는 주문내역 상세 페이지에서
                직접 주문 취소가 가능합니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PayComplete;
