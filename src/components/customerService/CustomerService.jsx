import React, { useState } from 'react';
import FrequentQuestion from './FrequentQuestion';
import NavBar from './NavBar';
import Notice from './Notice';

const CustomerService = () => {
  const [state, setState] = useState('공지사항');

  return (
    <div className="flex w-r-105 pt-r-6.5 mx-auto justify-between">
      <NavBar state={state} onClick={clickNav} />
      {render()}
    </div>
  );

  function render() {
    switch (state) {
      case '공지사항':
        return <Notice />;
      case '자주하는 질문':
        return <FrequentQuestion />;
      case '1:1문의':
        return <div>1:1문의</div>;
      case '대량주문 문의':
        return <div>대량주문 문의</div>;
      default:
        return;
    }
  }

  function clickNav(e) {
    console.log(e.target.firstChild.nodeValue);
    setState(e.target.firstChild.nodeValue);
  }
};

export default CustomerService;
