import React from 'react';
import { Link } from 'react-router-dom';

const FooterBanner = () => {
  return (
    <div className="flex w-full pt-8 mt-8 text-r-1 border-borderGray border-t text-kmi-100">
      <Link className="flex mr-12">
        <img
          src="https://res.kurly.com/pc/ico/2001/logo_isms.png"
          alt="isms 로고"
          className="w-14 h-14 mr-4"
        />
        <p class="txt">
          [인증범위] 마켓컬리 쇼핑몰 서비스 개발 · 운영
          <br />
          [유효기간] 2019.04.01 ~ 2022.03.31
        </p>
      </Link>
      <Link className="flex mr-12">
        <img
          src="https://res.kurly.com/pc/ico/2001/logo_eprivacyplus.png"
          alt="eprivacy plus 로고"
          className="w-14 h-14 mr-4"
        />
        <p>
          개인정보보호 우수 웹사이트 ·<br />
          개인정보처리시스템 인증 (ePRIVACY PLUS)
        </p>
      </Link>
      <Link className="flex">
        <img
          src="https://res.kurly.com/pc/service/main/2009/logo_payments.png"
          alt="payments 로고"
          className="w-40 h-14 mr-4"
        />
        <p>
          고객님의 안전거래를 위해 현금 등으로 결제 시 저희 쇼핑몰에서 가입한
          <br />
          토스 페이먼츠 구매안전(에스크로) 서비스를 이용하실 수 있습니다.
        </p>
      </Link>
    </div>
  );
};

export default FooterBanner;
