import React from 'react';

const RefundGuideDetail = ({ className }) => {
  return (
    <div
      className={
        className + ' text-r-1.5 font-light pl-80 pt-8 pb-16 text-gray-600 border-b border-gray-300'
      }
    >
      <strong className="block font-medium py-3 pt-8">주문 취소 관련</strong>
      <ul className="text-r-1.5 leading-9">
        <li>- [상품 준비 중] 이후 단계에는 취소가 제한되는 점 고객님의 양해 부탁드립니다.</li>
        <li>
          {`- 비회원은 모바일 App / Web > 마이컬리 > 비회원 주문 조회 페이지에서 주문을 취소하실 수
          있습니다.`}
        </li>
        <li>- 일부 예약 상품은 배송 3~4일 전에만 취소하실 수 있습니다. </li>
        <li>- 주문 상품의 부분 취소는 불가능합니다. 전체 주문 취소 후 재구매해 주세요. </li>
      </ul>
      <strong className="block font-medium py-3 pt-11">결제 승인 취소 / 환불 관련</strong>
      <ul className="text-r-1.5 leading-9">
        <li>- 카드 환불은 카드사 정책에 따르며, 자세한 사항은 카드사에 문의해주세요.</li>
        <li>- 결제 취소 시, 사용하신 적립금과 쿠폰도 모두 복원됩니다.</li>
      </ul>
    </div>
  );
};

export default RefundGuideDetail;
