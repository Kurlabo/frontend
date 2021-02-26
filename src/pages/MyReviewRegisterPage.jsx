import React, { useEffect } from 'react';
import MyReviewRegister from '../components/mykurly/MyReviewRegister';

const MyReviewRegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 440);
  }, []);
  return <MyReviewRegister />;
};

export default MyReviewRegisterPage;
