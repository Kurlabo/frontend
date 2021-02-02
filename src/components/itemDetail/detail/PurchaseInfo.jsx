import React, { useState } from 'react';
import Counter from '../common/Counter';

// 공통 스타일 변수
const dlStyle = 'py-18 border-b border-gray-100 flex';
const dtStyle = 'w-150 text-gray-700';
const btnStyle = 'h-56 font-medium border rounded-3 text-16 text-center pt-6';

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

  const increase = () => {
    setState(state => ({ count: state.count + 1, total: price * (state.count + 1) }));
  };
  const decrease = () => {
    if (state.count < 1) return;
    setState(state => ({ count: state.count - 1, total: price * (state.count - 1) }));
  };

  return (
    <div className="flex justify-between">
      <img className="block w-430 h-552" src={img} alt="상품 대표 이미지" />
      <div className="w-560">
        <p className="pt-4 pb-12">
          <strong className="text-24 font-medium">{name}</strong>
          <span className="block pt-2 text-14 text-gray-400">{desc}</span>
        </p>
        <p className="text-28 font-bold">
          {price.toLocaleString()}
          <span className="font-medium text-3xl ml-1">원</span>
        </p>
        <div className="mt-8 text-14">
          <dl className="pt-18 border-t border-gray-100 flex">
            <dt className={dtStyle}>판매단위</dt>
            <dd className="w-410">{ea}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>중량/용량</dt>
            <dd className="w-410">{weight}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>배송구분</dt>
            <dd className="w-410">{deliveryType}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={dtStyle}>포장타입</dt>
            <dd className="w-410">{packingType}</dd>
          </dl>
          <dl className={dlStyle}>
            <dt className={`${dtStyle + ' align-middle'}`}>유통기한</dt>
            <dd className="w-410">{expirationDate}</dd>
          </dl>
          <div className="py-7 border-b border-gray-100 flex">
            <span className="w-150">구매수량</span>
            <Counter increase={increase} decrease={decrease} cartNum={state.count} />
          </div>
          <div>
            <p className="text-right py-8">
              <span className="text-13 font-medium">총 상품금액:</span>
              <span className="text-32 font-bold ml-4">{state.total.toLocaleString()}</span>
              <span className="text-20 font-medium ml-3">원</span>
            </p>
          </div>
          <div className="flex justify-between">
            <div className={`${btnStyle + ' w-128 select-none text-gray-300 border-gray-300'}`}>
              재입고 알림
            </div>
            <div className={`${btnStyle + ' w-128 cursor-pointer text-kdp-400 border-kdp-400'}`}>
              늘 사는 것
            </div>
            <div className={`${btnStyle + ' w-278 cursor-pointer text-white bg-kdp-400'}`}>
              장바구니 담기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchaseInfo;
