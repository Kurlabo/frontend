import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrLocation } from 'react-icons/gr';
import { FiShoppingCart } from 'react-icons/fi';

const Header = () => {
  return (
    <header>
      <div>
        <img
          src="https://res.kurly.com/pc/service/common/1908/delivery_190819.gif"
          alt="서울, 경기, 인천 샛별배송, 수도권 이외 지역 택배배송"
        />
        <nav>
          <ul>
            <li>
              <NavLink to="/">회원가입</NavLink>
              <span>ㅣ</span>
            </li>
            <li>
              <NavLink to="/">로그인</NavLink>
              <span>ㅣ</span>
            </li>
            <li>
              <NavLink to="/">고객센터</NavLink>
            </li>
          </ul>
        </nav>
        <Link to="/">
          <h1>
            <img src="https://res.kurly.com/images/marketkurly/logo/logo_x2.png" alt="home" />
          </h1>
        </Link>
        <nav>
          <h2>메인 네비게이션</h2>
          <button>
            <GiHamburgerMenu />
            <span>전체 카테고리</span>
          </button>
          <ul>
            <li>
              <NavLink to="/">신상품</NavLink>
            </li>
            <li>
              <NavLink to="/">베스트</NavLink>
            </li>
            <li>
              <NavLink to="/">알뜰쇼핑</NavLink>
            </li>
            <li>
              <NavLink to="/">금주혜택</NavLink>
            </li>
          </ul>
          <div>
            <h3>상품 검색</h3>
            <input type="text" />
          </div>
          <div>
            <h3>배송지 검색</h3>
            <div>
              <GrLocation />
            </div>
            <div>
              <FiShoppingCart />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
