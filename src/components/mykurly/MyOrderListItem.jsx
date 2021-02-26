import React from 'react';
import { Link } from 'react-router-dom';
import { VscChevronRight } from 'react-icons/vsc';

const MyOrderListItem = ({ orderList }) => {
  const qa_button =
    'text-kp-600 text-r-1.2 absolute top-1/2 right-3 transform -translate-y-2/4 border border-kp-600 px-20 py-4';
  return (
    <>
      {orderList.content.map(
        (
          {
            checkout_date,
            product_name,
            else_product_cnt,
            list_image_url,
            order_id,
            total_price,
            delivery_condition,
          },
          index,
        ) => (
          <li key={`ordno_${order_id}`}>
            <p className="text-r-1.6 text-kg-350 font-medium mt-8 mb-6">
              {checkout_date} <span></span>
            </p>
            <div className="pt-10 px-8 border border-kg-80">
              <h3 className="cursor-pointer clear-fix text-r-1.6 pb-6 font-medium">
                <Link to={`/shop/mypage/mypage_orderview/ordno=${order_id}`}>
                  {/* [리치몬드 과자점] 쉬폰 4종 외 4건 */}
                  {product_name} 외 {else_product_cnt}건
                  <VscChevronRight className="float-right inline-block text-r-2" />
                </Link>
              </h3>
              <div className="relative clear-fix border-t border-kg-80 ">
                <div className="w-24 py-6 float-left align-middle">
                  <img src={`${list_image_url}`} alt="" />
                </div>
                <dl className="float-left pl-6 pt-7 w-r-65 align-middle ">
                  <dt className="inline-block w-24 text-r-1.2 leading-none">주문번호</dt>
                  <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                    {order_id}
                  </dd>
                  <dt className="inline-block w-24 text-r-1.2 leading-none">결제금액</dt>
                  <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                    {total_price}
                  </dd>
                  <dt className="inline-block w-24 text-r-1.2 leading-none">주문상태</dt>
                  <dd className="inline-block w-r-52 text-r-1.4 font-medium pb-5 leading-none">
                    {delivery_condition}
                  </dd>
                </dl>
                <Link
                  className={`${qa_button}`}
                  to={`/api/mypage/mypage_qna?mode=add_qna&ordno=${order_id}`}
                >
                  1:1 문의
                </Link>
              </div>
            </div>
          </li>
        ),
      )}
    </>
  );
};

export default MyOrderListItem;
