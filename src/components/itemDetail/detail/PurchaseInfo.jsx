import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../common/Counter';
import { setCartCount, setProductPrice } from '../../../modules/cartAddOption';

// 공통 스타일 변수
const dlStyle = 'py-p-18 border-b border-gray-100 flex';
const dtStyle = 'w-p-150 text-gray-700';
const btnStyle = 'h-p-56 font-medium border rounded-p-3 text-p-16 text-center pt-6';
const PurchaseInfo = ({ itemDetail, onClickAddCart, onClickWishList, isLogin }) => {
  const {
    original_image_url,
    name,
    short_description,
    original_price,
    unit_text,
    weight,
    delivery_time_type_text,
    packing_type_text,
    expiration_date,
    guides,
    contactant,
    discount_percent,
    discounted_price,
  } = itemDetail;

  const dispatch = useDispatch();
  const { count, productPrice } = useSelector(state => state.cartAddOption);

  useEffect(() => {
    dispatch(setProductPrice(isLogin ? itemDetail.discounted_price : itemDetail.original_price));
  }, [dispatch, isLogin, itemDetail.discounted_price, itemDetail.original_price]);

  const increase = () => {
    if (count > 99) return;
    dispatch(setCartCount(count + 1));
  };

  const decrease = () => {
    if (count < 1) return;
    dispatch(setCartCount(count - 1));
  };

  const alexCode = contactant.split('<br />').map((line, i) => {
    return (
      <span key={i}>
        {line}
        <br />
      </span>
    );
  });

  return (
    <div className="flex justify-between py-p-18">
      <img className="block w-p-430 h-p-552" src={original_image_url} alt="상품 대표 이미지" />
      <div className="w-p-560">
        <p className="pt-4 pb-12">
          <strong className="text-p-24 font-medium">{name}</strong>
          <span className="block pt-2 text-p-14 text-gray-400 rounded-p-3">
            {short_description}
          </span>
        </p>
        {!!discount_percent && <p className="text-r-1.4">회원할인가</p>}
        <p className="text-p-28 font-bold">
          {discounted_price.toLocaleString()}
          <span className="font-medium text-3xl ml-1">원</span>
          {!!discount_percent && (
            <span className="ml-3 font-medium text-red-400">{discount_percent}%</span>
          )}
        </p>
        {!!discount_percent && (
          <div className="flex items-center my-1">
            <span className="line-through text-r-1.6 text-gray-500">
              {original_price.toLocaleString()}원
            </span>
            <span>
              <svg
                className="text-gray-500 w-r-1.6 ml-3 mt-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </span>
          </div>
        )}
        {!isLogin && !!discount_percent && (
          <p className="text-r-1.4 font-normal text-kp-600 pt-3">
            로그인 후, 회원할인 혜택이 제공됩니다.
          </p>
        )}
        <div className="mt-8 text-p-14">
          {unit_text && (
            <dl className="pt-p-18 border-t border-gray-100 flex">
              <dt className={dtStyle}>판매단위</dt>
              <dd className="w-p-410">{unit_text}</dd>
            </dl>
          )}
          {weight && (
            <dl className={dlStyle}>
              <dt className={dtStyle}>중량/용량</dt>
              <dd className="w-p-410">{weight}</dd>
            </dl>
          )}
          {delivery_time_type_text && (
            <dl className={dlStyle}>
              <dt className={dtStyle}>배송구분</dt>
              <dd className="w-p-410">{delivery_time_type_text}</dd>
            </dl>
          )}
          {packing_type_text && (
            <dl className={dlStyle}>
              <dt className={dtStyle}>포장타입</dt>
              <dd className="w-p-410">{packing_type_text}</dd>
            </dl>
          )}
          {contactant && (
            <dl className={dlStyle}>
              <dt className={`${dtStyle + ' align-middle'}`}>알레르기 정보</dt>
              {/* <dd className="w-p-410" dangerouslySetInnerHTML={{ __html: contactant }}></dd> */}
              <dd className="w-p-410">{alexCode}</dd>
            </dl>
          )}
          {expiration_date && (
            <dl className={dlStyle}>
              <dt className={`${dtStyle + ' align-middle'}`}>유통기한</dt>
              <dd className="w-p-410">{expiration_date}</dd>
            </dl>
          )}
          {guides && guides.length > 0 && guides[0].length > 0 && (
            <dl className={dlStyle}>
              <dt className={dtStyle}>안내사항</dt>
              <div>
                {guides.map((guide, i) => (
                  <dd key={i} className="w-p-410">
                    - {guide}
                  </dd>
                ))}
              </div>
            </dl>
          )}
          <div className="py-7 border-b border-gray-100 flex">
            <span className="w-p-150">구매수량</span>
            <Counter increase={increase} decrease={decrease} cartNum={count} />
          </div>
          <div>
            <p className="text-right py-7">
              <span className="text-p-13 font-medium">총 상품금액:</span>
              <span className="text-p-32 font-bold ml-4">
                {(productPrice * count).toLocaleString()}
              </span>
              <span className="text-p-20 font-medium ml-3">원</span>
            </p>
            {!isLogin && !!discount_percent && (
              <p className="text-right pb-8 text-gray-500">로그인 후, 회원할인가가 적용됩니다.</p>
            )}
          </div>
          <div className="flex justify-between">
            <div className={`${btnStyle + ' w-p-128 select-none text-gray-300 border-gray-300'}`}>
              재입고 알림
            </div>
            <div
              className={`${btnStyle + ' w-p-128 cursor-pointer text-kdp-400 border-kdp-400'}`}
              onClick={onClickWishList}
            >
              늘 사는 것
            </div>
            <div
              className={`${btnStyle + ' w-p-278 cursor-pointer text-white bg-kdp-400'}`}
              onClick={onClickAddCart}
            >
              장바구니 담기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PurchaseInfo;
