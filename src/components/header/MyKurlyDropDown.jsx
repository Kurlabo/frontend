import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { logoutAuthentication } from '../../modules/login';
import { useDispatch, useSelector } from 'react-redux';
const listStyle =
  'absolute right-28 top-8 border-gray-200 border py-2 px-r-0.9 bg-white text-1.2 text-gray-700 z-900';

const MyKurlyDropDown = ({ onMouseOut }) => {
  const linkTo = [
    { text: '주문내역', url: '/shop/mypage/mypage_orderlist' },
    { text: '배송지 관리', url: '/shop/mypage/destination/list' },
    { text: '늘 사는 것', url: '/shop/mypage/mypage_wishlist' },
    { text: '상품 후기', url: '/shop/mypage/mypage_review' },
    { text: '적립금', url: '/shop/mypage/mypage_emoney' },
    { text: '쿠폰', url: '/shop/mypage/mypage_coupon' },
    { text: '개인 정보 수정', url: '/shop/member/myinfo' },
    { text: '로그아웃', url: '/shop/account/signin' },
  ];
  const [cookies, setCookie, removeCookie] = useCookies(['auth']);
  const authToken = useSelector(state => state.login.data.token);
  const dispatch = useDispatch();
  useEffect(() => {}, []);
  return (
    <ul className={listStyle}>
      {linkTo.map((linkInfo, index) => {
        return index === 7 ? (
          <li onClick={setLogout} className="mb-2" key={`li_${index}`}>
            <Link to={linkInfo.url} className="w-full inline-block h-full hover:text-kp-600">
              {linkInfo.text}{' '}
            </Link>
          </li>
        ) : (
          <li className="mb-2" key={`li_${index}`}>
            <Link to={linkInfo.url} className="w-full inline-block h-full hover:text-kp-600">
              {linkInfo.text}{' '}
            </Link>
          </li>
        );
      })}
    </ul>
  );
  function setLogout() {
    // dispatch(logoutAuthentication(authToken));
    removeCookie('auth');
  }
};

export default MyKurlyDropDown;
