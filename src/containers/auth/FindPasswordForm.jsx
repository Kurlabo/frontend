import React from 'react';
import FindPassword from '../../components/login/FindPassword';

export default function FindPasswordForm() {
  const open = true;
  const changeSuccess = true;
  const value = '사용자 정보가 존재하지 않습니다';
  return (
    <FindPassword onSubmit={onSubmit} open={open} value={value} changeSuccess={changeSuccess} />
  );
  function onSubmit(e) {
    //비동기 작업
    e.preventDefault();
  }
}
