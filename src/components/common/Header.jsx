import React from 'react';
import { Link } from 'react-router-dom';

import HeaderNav from '../header/HeaderNav';
import { a11yHidden } from '../header/HeaderNav';
import LinkToSign from '../header/LinkToSign';

const logoUrl = 'https://res.kurly.com/images/marketkurly/logo/logo_x2.png';

const Header = () => {
  const pathname = window.location.pathname;
  if (pathname === '/kakao/destination' || pathname === '/order/input_reception') return null;
  else if (pathname === '/shop/mypage/desination/modify_form/') return null;
  else if (pathname === '/shop/mypage/desination/modify_form') return null;
  return (
    <header className="w-full m-auto mb-6">
      <LinkToSign />
      <div className="mx-auto w-r-10.3 h-r-7.9 mb-2 font-bold transform -translate-y-6">
        <h1 className={a11yHidden}>마켓컬리 홈</h1>
        <Link to="/">
          <img src={logoUrl} alt="home" />
        </Link>
      </div>
      <HeaderNav />
    </header>
  );
};

export default Header;
