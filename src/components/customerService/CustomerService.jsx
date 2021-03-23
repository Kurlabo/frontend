import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import FrequentQuestion from './FrequentQuestion';
import GetSupport from './GetSupport';
import NavBar from './NavBar';
import Notice from './Notice';

const CustomerService = () => {
  const { navState } = useSelector(state => state.customerService);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex w-r-105 pt-r-6.5 mx-auto justify-between">
      <NavBar />
      {render()}
    </div>
  );

  function render() {
    switch (navState) {
      case '공지사항':
        return <Notice />;
      case '자주하는 질문':
        return <FrequentQuestion />;
      case '1:1문의':
        return <GetSupport />;
      case '대량주문 문의':
        return <div>대량주문 문의</div>;
      default:
        return;
    }
  }
};

export default CustomerService;
