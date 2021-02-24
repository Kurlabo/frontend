import React from 'react';
const OrderCancelGuideDetail = ({ className }) => {
  return (
    <div className={className + ' text-r-1.5 font-light pb-16 text-gray-600'}>
      <div className="flex pt-8 pb-16 pr-8 border-b border-gray-300">
        <span className="text-r-1.7 pl-12 w-p-320 font-medium flex-shrink-0">
          01. 받으신 상품에 문제가 있는 경우
        </span>
        <div>
          <p>
            상품이 표시·광고 내용과 다르거나 부패한 경우 등 상품에 문제가 있는 정도에 따라 재배송,
            일부 환불, 전액 환불해드립니다.
          </p>
          <p className="pt-12 pb-3 text-klp-600 font-medium">신선 / 냉장 / 냉동 식품</p>
          <p>
            상품을 받은 날부터 2일 이내에 상품 상태를 확인할 수 있는 사진을 첨부해 1:1 문의 게시판에
            남겨주세요.
          </p>
          <p className="pt-12 pb-3 text-klp-600 font-medium">
            유통기한 30일 이상 식품(신선 / 냉장 / 냉동 제외) & 기타 상품
          </p>
          <p>
            상품을 받은 날부터 3개월 이내 또는 문제가 있다는 사실을 알았거나 알 수 있었던 날부터
            30일 이내에 상품의 상태를 확인할 수 있는 사진을 첨부해 1:1 문의 게시판에 남겨주세요.
          </p>
          <p className="pt-9">※ 상품에 문제가 있는 것으로 확인되면 배송비는 컬리가 부담합니다.</p>
        </div>
      </div>
      <div className="flex pt-8 pb-16 pr-8 border-b border-gray-300">
        <span className="text-r-1.7 pl-12 w-p-320 font-medium flex-shrink-0">
          02. 단순 변심, 주문 착오의 경우
        </span>
        <div className="">
          <p className="pb-3 text-klp-600 font-medium">신선 / 냉장 / 냉동 식품</p>
          <p>
            재판매가 불가한 상품의 특성상, 단순 변심, 주문 착오 시 교환 및 반품이 어려운 점 양해
            부탁드립니다.
          </p>
          <p>
            상품에 따라 조금씩 맛이 다를 수 있으며, 개인의 기호에 따라 같은 상품도 다르게 느끼실 수
            있습니다.
          </p>
          <p className="pt-12 pb-3 text-klp-600 font-medium">
            유통기한 30일 이상 식품(신선 / 냉장 / 냉동 제외) & 기타 상품
          </p>
          <p>상품을 받은 날부터 7일 이내에 1:1 문의 게시판에 남겨주세요.</p>
          <p className="pt-9">
            ※ 단순 변심으로 인한 교환 또는 환불의 경우 고객님께서 배송비 6,000원을 부담하셔야
            합니다.
          </p>
          <p>(주문 건 배송비를 결제하셨을 경우 3,000원)</p>
        </div>
      </div>
      <div className="flex pt-8 pb-16 pr-8 border-b border-gray-300">
        <span className="text-r-1.7 pl-12 w-p-320 font-medium flex-shrink-0">
          03. 교환·반품이 불가한 경우
        </span>
        <div>
          <p>다음에 해당하는 교환·반품 신청은 처리가 어려울 수 있으니 양해 부탁드립니다.</p>
          <p className="pt-9">- 소비자에게 책임 있는 사유로 상품이 멸실 또는 훼손된 경우 </p>
          <p>
            (포장지 훼손으로 인해 재판매가 불가능한 상품의 경우, 단순 변심에 의한 반품이
            어렵습니다.)
          </p>
          <p>- 일부 예약 상품은 배송 3~4일 전에만 취소하실 수 있습니다.</p>
          <p>- 소비자의 주문에 따라 개별적으로 생산되는 상품이 이미 제작 진행된 경우</p>
        </div>
      </div>
    </div>
  );
};
export default React.memo(OrderCancelGuideDetail);
