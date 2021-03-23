import React from 'react';
import GoodsReviewTitle from './GoodsReviewTitle';
import GoodsReviewList from './GoodsReviewList';
import { withRouter } from 'react-router';
import Pagination from '../../customerService/common/Pagination';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWritableReviews } from '../../../modules/myWritableReviews';

// name에 맞는 쿠키 가져오는 함수
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp('(?:^|; )' + name.replace(/([.$?*|{}()[\]\\/+^])/g, '\\$1') + '=([^;]*)'),
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// api header
const config = {
  headers: {
    Authorization: 'Bearer ' + getCookie('auth'),
  },
};

// style class
const addReviewBtn =
  'text-white bg-klp-600 w-52 my-1 pt-r-0.6 h-14 text-1.3 text-center hover:bg-white hover:text-kp-600 border border-kp-600 cursor-pointer select-none';

const GoodsReview = ({ history, reviews, name, product_id }) => {
  const { checkWritable } = useSelector(state => state.myWritableReviews);
  const dispatch = useDispatch();

  const onClick = () => {
    if (getCookie('auth') !== undefined) {
      if (checkWritable.length > 0) {
        history.push('/shop/mypage/mypage_review/register');
      } else {
        alert('상품후기는 상품을 구매하시고 배송완료된 회원 분만 한 달 내 작성 가능합니다.');
      }
    } else {
      alert('상품후기는 상품을 구매하시고 배송완료된 회원 분만 한 달 내 작성 가능합니다.');
      history.push('/shop/account/signin');
    }
  };

  useEffect(() => {
    dispatch(getWritableReviews({ product_id, config }));
  }, [dispatch, product_id]);

  return (
    <div>
      <GoodsReviewTitle />
      <GoodsReviewList reviews={reviews} name={name} />
      <div className="py-4 flex justify-end">
        <div onClick={onClick} className={addReviewBtn}>
          후기쓰기
        </div>
      </div>
      <Pagination num={1} />
    </div>
  );
};

export default withRouter(GoodsReview);
