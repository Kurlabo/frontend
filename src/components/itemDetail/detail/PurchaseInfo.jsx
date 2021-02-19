import React, { useState } from 'react';
import { useCallback } from 'react';
import Counter from '../common/Counter';
// 공통 스타일 변수
const dlStyle = 'py-p-18 border-b border-gray-100 flex';
const dtStyle = 'w-p-150 text-gray-700';
const btnStyle = 'h-p-56 font-medium border rounded-p-3 text-p-16 text-center pt-6';
const PurchaseInfo = ({
  img,
  name,
  desc,
  price,
  ea,
  weight,
  deliveryType,
  packingType,
  expirationDate,
}) => {
  const [state, setState] = useState({
    count: 1,
    total: price,
  });

  const increase = useCallback(() => {
    setState(state => ({ count: state.count + 1, total: price * (state.count + 1) }));
  }, [price]);

  const decrease = useCallback(() => {
    if (state.count < 1) return;
    setState(state => ({ count: state.count - 1, total: price * (state.count - 1) }));
  }, [state, price]);

  return (
    <div className="flex justify-between py-p-18">
      <img className="block w-p-430 h-p-552" src={img} alt="상품 대표 이미지" />
      <div className="w-p-560">
        <p className="pt-4 pb-12">
          <strong className="text-p-24 font-medium">{name}</strong>
          <span className="block pt-2 text-p-14 text-gray-400 rounded-p-3">{desc}</span>
        </p>
        <p className="text-p-28 font-bold">
          {price.toLocaleString()}
          <span className="font-medium text-3xl ml-1">원</span>
        </p>
        <div className="mt-8 text-p-14">
          <dl className="pt-p-18 border-t border-gray-100 flex">
            <dt className={dtStyle}>판매단위</dt>
            <dd className="w-p-410">{ea}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>중량/용량</dt>
            <dd className="w-p-410">{weight}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>배송구분</dt>
            <dd className="w-p-410">{deliveryType}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>포장타입</dt>
            <dd className="w-p-410">{packingType}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={`${dtStyle + ' align-middle'}`}>유통기한</dt>
            <dd className="w-p-410">{expirationDate}</dd>
          </dl>
          <div className="py-7 border-b border-gray-100 flex">
            <span className="w-p-150">구매수량</span>
            <Counter increase={increase} decrease={decrease} cartNum={state.count} />
          </div>
          <div>
            <p className="text-right py-8">
              <span className="text-p-13 font-medium">총 상품금액:</span>
              <span className="text-p-32 font-bold ml-4">{state.total.toLocaleString()}</span>
              <span className="text-p-20 font-medium ml-3">원</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className={`${btnStyle + ' w-p-128 select-none text-gray-300 border-gray-300'}`}>
              재입고 알림
            </div>
            <div className={`${btnStyle + ' w-p-128 cursor-pointer text-kdp-400 border-kdp-400'}`}>
              늘 사는 것
            </div>
            <div className={`${btnStyle + ' w-p-278 cursor-pointer text-white bg-kdp-400'}`}>
              장바구니 담기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default React.memo(PurchaseInfo);
