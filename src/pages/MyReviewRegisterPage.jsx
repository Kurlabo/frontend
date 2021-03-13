import React, { useEffect } from 'react';
import { withRouter } from 'react-router';
import MyReviewRegister from '../components/mykurly/MyReviewRegister';

// name에 맞는 쿠키 가져오는 함수
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

const MyReviewRegisterPage = ({ history }) => {
  if (getCookie('auth') === undefined) {
    history.push('/shop/account/signin');
  }
  useEffect(() => {
    window.scrollTo(0, 440);
  }, []);
  return getCookie('auth') !== undefined && <MyReviewRegister />;
};

export default withRouter(MyReviewRegisterPage);
