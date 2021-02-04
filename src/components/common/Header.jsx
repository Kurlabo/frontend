import React from 'react';
import { Link } from 'react-router-dom';

import LinkToSign from './LinkToSign';
import HeaderNav from './HeaderNav';
import { a11yHidden } from './HeaderNav';

const logoUrl = 'https://res.kurly.com/images/marketkurly/logo/logo_x2.png';

const Header = () => {
  return (
    <header className="w-full border-gray-50 border-4 m-auto mb-5">
      <LinkToSign />
      <div className="mx-auto w-r-10.3 h-r-7.9 mb-7 font-bold">
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
