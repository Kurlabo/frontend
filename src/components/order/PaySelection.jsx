import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CardOption from './CardOption';
import { wrapper } from './Coupon';
import PaymentBrand from './PaymentBrand';
import { selectCheckoutMethod } from '../../modules/order';

// 이미지 url
const tossUrl = 'https://res.kurly.com/pc/service/order/1912/toss-logo-signature.svg';
const chaiUrl = 'https://res.kurly.com/pc/service/order/2001/logo_chi_x2.png';
const naverUrl = 'https://res.kurly.com/pc/service/order/1710/ico_naverpay_v3.png';
const paycoUrl = 'https://static-bill.nhnent.com/payco/checkout/img/v2/btn_checkout2.png';
const smileUrl = 'https://res.kurly.com/pc/service/order/1712/ico_smilepay_v2.png';
const cardArr = [
  '신한',
  'KB국민',
  '삼성',
  '씨티',
  '롯데',
  '하나(외환)',
  'NH채움',
  '우리',
  '수협',
  '광주',
  '전북',
  '제주',
  '신협체크',
  'MG새마을체크',
  '저축은행체크',
  '우체국카드',
  'KDB산업은행',
  '카카오체크',
];

const selectStyle = {
  width: '19rem',
  height: '4.4rem',
  padding: '1.2rem 1.2rem',
  outline: 'none',
  border: '1px solid #000',
  appearance: 'none',
  fontSize: '1.2rem',
  fontWeight: '400',
};

const PaySelection = () => {
  const [paySelect, setpaySelect] = useState('normal');
  const [wayToPay, setwayToPay] = useState('일반결제');
  const dispatch = useDispatch();

  return (
    <div className={wrapper}>
      <div className="w-r-74.6 ">
        <h2 className="text-2 font-medium pb-r-1.6 border-b border-gray-800">결제수단</h2>
        <table className="w-full">
          <tbody>
            <PaymentBrand
              title="신용카드"
              brand="일반"
              id="normal"
              credit="신용카드"
              state={paySelect}
              onChange={onChangePayment}
            />
            <tr>
              <th></th>
              <td>
                <select style={selectStyle} className="mr-4">
                  <option disabled="disabled">카드를 선택해주세요</option>
                  {cardArr.map((card, idx) => (
                    <CardOption value={card} key={idx} />
                  ))}
                </select>
                <select style={selectStyle}>
                  <option disabled="disabled" value="할부기간을 선택해주세요">
                    할부기간을 선택해주세요
                  </option>
                  <option value="일시불">일시불</option>
                </select>
                <p className="pt-r-0.6 text-1.2">
                  <span className="font-semibold mr-2">&middot; 무이자할부 유의사항</span>
                  은행계열/체크/기프트/선불/법인/개인사업자 기업카드는 제외
                </p>
              </td>
            </tr>
            <PaymentBrand
              title="CHAI 결제"
              brand="CHAI"
              imgUrl={chaiUrl}
              id="chai"
              state={paySelect}
              onChange={onChangePayment}
            />
            <PaymentBrand
              title="TOSS 결제"
              brand="toss"
              imgUrl={tossUrl}
              id="toss"
              state={paySelect}
              onChange={onChangePayment}
            />
            <PaymentBrand
              title="네이버페이"
              brand="네이버페이"
              imgUrl={naverUrl}
              id="naver"
              state={paySelect}
              onChange={onChangePayment}
            />
            <PaymentBrand
              title="PAYCO 결제"
              brand="PAYCO"
              imgUrl={paycoUrl}
              id="payco"
              state={paySelect}
              onChange={onChangePayment}
            />
            <PaymentBrand
              title="스마일페이 결제"
              brand="스마일페이"
              imgUrl={smileUrl}
              id="smilepay"
              state={paySelect}
              onChange={onChangePayment}
            />
            <PaymentBrand
              title="휴대폰 결제"
              brand="휴대폰"
              id="phonepay"
              state={paySelect}
              onChange={onChangePayment}
            />
          </tbody>
        </table>
        <ul className="pt-12 pb-8 text-gray-500 text-1.2 border-b border-gray-100">
          <li className="leading-9">
            &#8251;페이코,네이버페이,토스,차이 결제는 결제 시 결제하신 수단으로만 환불되는 점
            양해부탁드립니다.
          </li>
          <li className="leading-9">
            &#8251;고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 토스
            페이먼츠의 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
          </li>
          <li className="inline-block mr-2 leading-9">
            &#8251;보안강화로 Internet Explorer 8 미만 사용시 결제창이 뜨지 않을 수 있습니다.
          </li>
          <Link to="/" className="text-kp-600">
            공지 보러가기 &gt;
          </Link>
        </ul>
      </div>
    </div>
  );
  function onChangePayment(e) {
    setpaySelect(e.target.id);
    dispatch(selectCheckoutMethod(e.target.title));
    setwayToPay(e.target.title);
  }
};

export default PaySelection;
