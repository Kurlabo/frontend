import React from 'react';

const OrderCancelGuide = ({ onClick, isClose }) => {
  return (
    <div className="flex justify-between py-7 pl-5 text-p-16 font-medium border-b border-gray-300 text-gray-600">
      <h4 className="w-p-150">주문 취소 안내</h4>
      <div className="w-r-65">
        <p className="mb-2">
          <span>[입금 확인] 단계</span>
          <span className="pl-5 font-light">{`마이컬리 > 주문 내역 상세페이지에서 직접 취소하실 수 있습니다.`}</span>
        </p>
        <p className="mb-2">
          <span>[입금 확인] 이후 단계</span>
          <span className="pl-5 font-light">고객행복센터로 문의해주세요.</span>
        </p>
        <p className="mb-2">
          <span>[입금 확인] 단계</span>
          <span className="pl-5 font-light">
            결제 수단에 따라 영업일 기준 3~7일 내에 처리해드립니다.
          </span>
        </p>
      </div>
      <div
        onClick={onClick}
        className="text-klp-600 w-p-128 text-right cursor-pointer self-center select-none"
      >
        {isClose ? '자세히 보기' : '닫기'}
        {isClose ? (
          <svg
            className="w-p-18 inline-block ml-3"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        ) : (
          <svg
            className="w-p-18 inline-block ml-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default OrderCancelGuide;
