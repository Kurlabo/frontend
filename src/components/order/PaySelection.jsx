import React from 'react';
import { Link } from 'react-router-dom';
import PaymentBrand from './PaymentBrand';
// import { RiCheckboxCircleLine } from 'react-icons/ri';
// import { IoIosCheckmarkCircle } from 'react-icons/io';
// import { useState } from 'react';

// 이미지 url
const tossUrl = 'https://res.kurly.com/pc/service/order/1912/toss-logo-signature.svg';
const chaiUrl = 'https://res.kurly.com/pc/service/order/2001/logo_chi_x2.png';
const naverUrl = 'https://res.kurly.com/pc/service/order/1710/ico_naverpay_v3.png';
const paycoUrl = 'https://static-bill.nhnent.com/payco/checkout/img/v2/btn_checkout2.png';
const smileUrl = 'https://res.kurly.com/pc/service/order/1712/ico_smilepay_v2.png';

const PaySelection = () => {
  // const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-5 text-kp-600';
  // const formRadioIcon2 = `${formRadioIcon} text-inputGray`;

  return (
    <div>
      <h2>결제수단</h2>
      <table>
        <tbody>
          <PaymentBrand brand="일반" id="normal" credit="신용카드" />
          <tr>
            <th></th>
            <td>
              <select>
                <option value="카드를 선택해주세요">카드를 선택해주세요</option>
                <option value="현대(무이자)">현대 (무이자)</option>
                <option value="신한">신한</option>
                <option value="KB국민">KB국민</option>
                <option value="삼성">삼성</option>
                <option value="씨티">씨티</option>
                <option value="롯데">롯데</option>
                <option value="하나(외환)">하나(외환)</option>
                <option value="NH채움">NH채움</option>
                <option value="우리">우리</option>
                <option value="수협">수협</option>
              </select>
              <select>
                <option value="할부기간을 선택해주세요">할부기간을 선택해주세요</option>
                <option value="일시불">일시불</option>
              </select>
              <p>무이자할부 유의사항 은행계열/체크/기프트/선불/법인/개인사업자 기업카드는 제외</p>
            </td>
          </tr>
          <PaymentBrand brand="toss" imgUrl={tossUrl} id="toss" />
          <PaymentBrand brand="CHAI" imgUrl={chaiUrl} id="chai" />
          <PaymentBrand brand="네이버페이" imgUrl={naverUrl} id="naver" />
          <PaymentBrand brand="PAYCO" imgUrl={paycoUrl} id="payco" />
          <PaymentBrand brand="스마일페이" imgUrl={smileUrl} id="smilepay" />
          <PaymentBrand brand="휴대폰" id="phonepay" />
        </tbody>
      </table>
      <p>
        &#8251;페이코,네이버페이,토스,차이 결제는 결제 시 결제하신 수단으로만 환불되는 점
        양해부탁드립니다.
      </p>
      <p>
        &#8251;고객님은 안전거래를 위해 현금 등으로 결제시 저희 쇼핑몰에서 가입한 토스 페이먼츠의
        구매안전(에스크로) 서비스를 이용하실 수 있습니다.
      </p>
      <p>&#8251;보안강화로 Internet Explorer 8 미만 사용시 결제창이 뜨지 않을 수 있습니다.</p>
      <Link to="/">공지 보러가기 &gt;</Link>
    </div>
  );
};

export default PaySelection;
