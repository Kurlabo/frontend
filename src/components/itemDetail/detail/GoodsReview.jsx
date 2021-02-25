import React from 'react';
import GoodsReviewTitle from './GoodsReviewTitle';
import GoodsReviewList from './GoodsReviewList';
import Pagination from './Pagination';
import { useState } from 'react';
import ReviewModal from './ReviewModal';
import { withRouter } from 'react-router';
import { useCallback } from 'react';

const isLogin = true;

const GoodsReview = ({ history, reviews, name }) => {
  const [openModal, setOpenModal] = useState(false);

  const onClick = useCallback(() => {
    if (isLogin) {
      history.push('/shop/mypage/mypage_review/register');
    } else {
      console.log('상품후기는 상품을 구매하시고배송완료된 회원 분만 한 달 내 작성 가능합니다.');
      setOpenModal(true);
    }
  }, [history]);

  const closeModal = useCallback(() => {
    setOpenModal(false);
    history.push('/shop/account/signin');
  }, [history]);

  return (
    <div>
      <GoodsReviewTitle />
      <GoodsReviewList reviews={reviews} name={name} />
      <div className="py-4 flex justify-end">
        <div
          onClick={onClick}
          className="text-white bg-klp-600 w-52 my-1 h-14 text-1.3 text-center pt-3 hover:bg-white hover:text-kp-600 border border-kp-600 cursor-pointer"
        >
          후기쓰기
        </div>
      </div>
      <Pagination />
      <ReviewModal openModal={openModal} closeModal={closeModal} />
    </div>
  );
};

export default React.memo(withRouter(GoodsReview));
