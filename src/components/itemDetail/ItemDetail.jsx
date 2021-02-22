import React, { useState, useEffect } from 'react';
import RelatedProduct from './detail/RelatedProduct';
import PurchaseInfo from './detail/PurchaseInfo';
import GoodsInfo from './detail/GoodsInfo';
import GotopBtn from './detail/GotopBtn';
import CartOption from './detail/CartOption';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount } from '../../modules/cartAddOption';
import CheckModal from './detail/CheckModal';
import WishListLoginModal from './detail/WishListLoginModal';
import { withRouter } from 'react-router';
import { postWishList, setModuleMsg, setModuleMsgEmpty } from '../../modules/itemDetail';

const ItemDetail = ({ itemDetail, loading, error, history, productId }) => {
  const dispatch = useDispatch();

  const isLogin = false;
  const { count } = useSelector(state => state.cartAddOption);
  const { isOpen, msg } = useSelector(state => state.itemDetail.modalInfo);
  const [viewCartOption, setviewCartOption] = useState(false);
  const [iswishListModalOpen, setIsWishListModalOpen] = useState(false);

  const cartOptionRender = useCallback(() => {
    if (window.pageYOffset > 1100) {
      setviewCartOption(true);
    } else {
      setviewCartOption(false);
    }
  }, []);

  const openModalCheckCount = useCallback(() => {
    dispatch(setModuleMsg('수량은 반드시 1 이상이어야 합니다.'));
  }, [dispatch]);

  const closeModal = useCallback(() => {
    dispatch(setModuleMsgEmpty());
  }, [dispatch]);

  const onClickWishList = useCallback(() => {
    if (!isLogin) {
      setIsWishListModalOpen(true);
      return;
    } else if (count < 1) {
      dispatch(setModuleMsg('하나 이상의 패키지 구성품을 선택하셔야됩니다!'));
      return;
    } else {
      console.log('api 요청!!!!!!');
      dispatch(postWishList({ product_id: productId, member_id: 1 }));
    }
  }, [count, isLogin, dispatch, productId]);

  const closeWishListModal = useCallback(() => {
    setIsWishListModalOpen(false);
    history.push('/shop/account/signin');
  }, [history]);

  useEffect(() => {
    dispatch(setCartCount(1));

    window.addEventListener('scroll', cartOptionRender);

    return () => {
      window.removeEventListener('scroll', cartOptionRender);
    };
  }, [cartOptionRender, dispatch]);

  return (
    <div>
      <main className="w-p-1050 pt-8 mx-auto my-0 text-gray-800">
        <PurchaseInfo
          itemDetail={itemDetail}
          openModal={openModalCheckCount}
          onClickWishList={onClickWishList}
        />
        <RelatedProduct relatedProducts={itemDetail['related_product']} />
        <GoodsInfo itemDetail={itemDetail} />
        <GotopBtn />
      </main>
      {viewCartOption && (
        <CartOption
          itemDetail={itemDetail}
          openModal={openModalCheckCount}
          onClickWishList={onClickWishList}
        />
      )}
      <CheckModal modalIsOpen={isOpen} closeModal={closeModal} msg={msg} />
      <WishListLoginModal openModal={iswishListModalOpen} closeModal={closeWishListModal} />
    </div>
  );
};
export default withRouter(ItemDetail);
