import React from 'react';
import FindId from '../../components/login/FindId';
import Modalform from '../../components/login/Modalform';
import Modaltest from '../../components/login/Modaltest';

export default function FindIdForm() {
  const findUserId = '';

  return <FindId onSubmit={onSubmit} findUserId={findUserId} />;
  function onSubmit(e) {
    //비동기 작업
    e.preventDefault();
  }
}
