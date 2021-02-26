import React, { useState, useEffect } from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import MyKurlyPageNation from './MyKurlyPageNation';
import CheckBox from '../login/CheckBox';
import CartModal from '../itemList/CartModal';
import { useSelector, useDispatch } from 'react-redux';
import { getWishItems } from '../../modules/wishList';
import MyWishListItem from './MyWishListItem';
import { withRouter } from 'react-router-dom';

const MyWishList = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyWishListBlock />
      </main>
    </>
  );
};

const MyWishListBlock = withRouter(({ history }) => {
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [allCheck, setAllCheck] = useState(false);
  const [checkList, setCheckList] = useState([]);
  const [cartItem, setCartItem] = useState('');

  const wishList = useSelector(state => state.wish.data);
  const QueryString = history.location.search;
  const dispatch = useDispatch();
  useEffect(() => {
    QueryString ? dispatch(getWishItems(QueryString)) : dispatch(getWishItems());
  }, [QueryString]);
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">배송지 확인</h1>
      <div className="border-b-2 border-kg-300 pb-10 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">늘 사는 것</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          늘 사는 것으로 등록하신 상품 목록입니다.
        </p>
      </div>
      <div className="">
        <ul>
          <li>
            <ul className="text-r-1.4 pb-8 border-b font-medium border-kg-300 box-border leading-none">
              <li className="inline-block text-center align-middle">
                <CheckBox
                  id="allCheck"
                  checkAll={checkAll}
                  allCheck={allCheck}
                  setAllCheck={setAllCheck}
                />
              </li>
              <li className="w-r-62 text-center inline-block align-middle">상품정보</li>
              <li className="w-48 text-center inline-block align-middle">선택</li>
            </ul>
          </li>
          <MyWishListItem openModal={openModal} wishList={wishList} allCheck={allCheck} />
        </ul>
        <div className="text-right">
          <button className="mt-8 text-r-1.3 border border-kp-600 text-kp-600 py-4 px-10">
            늘 사는 것 비우기
          </button>
        </div>
        <MyKurlyPageNation
          pageNumber={wishList.totalPages}
          totalProduct={wishList.totalElements}
          elementNumber={wishList.numberOfElements}
          history={history}
        />
      </div>
      <CartModal modalIsOpen={modalIsOpen} closeModal={closeModal} cartItem={cartItem} />
    </div>
  );
  function openModal(e) {
    setmodalIsOpen(true);
    setCartItem(e.target.name);
  }
  function closeModal() {
    setmodalIsOpen(false);
  }
  function checkAll(e) {
    setAllCheck(!allCheck);
  }
});

export default withRouter(MyWishList);
