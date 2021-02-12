import React from 'react';
import FindId from '../../components/login/FindId';

export default function FindIdForm() {
  const findUserId = '';

  return <FindId onSubmit={onSubmit} findUserId={findUserId} />;
  function onSubmit(e) {
    //비동기 작업
    e.preventDefault();
  }
}
