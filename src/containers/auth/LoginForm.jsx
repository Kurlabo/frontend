import React from 'react';
import Login from '../../components/login/Login';

export default function LoginForm() {
  const open = false;
  const value = '아이디 또는 비밀번호 오류입니다';
  return <Login nSubmit={onSubmit} open={open} value={value} />;

  //login 비동기
  function onSubmit(e) {
    e.preventDefault();
    //로그인 비동기 함수 실행
  }
}
