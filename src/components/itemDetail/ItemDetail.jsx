import React, { useState, useEffect, useRef } from 'react';
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
import { postGoodsToCart } from '../../modules/common/addGoodsToCart';

const ItemDetail = ({ itemDetail, loading, error, history, productId }) => {
  const dispatch = useDispatch();
  let onPopUp = useRef(false);

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

  const onClickAddCart = useCallback(() => {
    if (onPopUp.current) return;
    if (count < 1) {
      dispatch(setModuleMsg('수량은 반드시 1 이상이어야 합니다.'));
      return;
    }
    if (!isLogin) {
      console.log('로그인 창으로 이동!!!');
      setIsWishListModalOpen(true);
      return;
    }
    onPopUp.current = true;
    // 장바구니에 post
    dispatch(postGoodsToCart({ product_id: productId, cnt: count }));
    setTimeout(() => {
      onPopUp.current = false;
    }, 3000);
  }, [count, dispatch, isLogin, productId, onPopUp]);

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
      dispatch(postWishList({ product_id: productId }));
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
          onClickAddCart={onClickAddCart}
          onClickWishList={onClickWishList}
        />
        <RelatedProduct relatedProducts={itemDetail['related_product']} />
        <GoodsInfo itemDetail={itemDetail} />
        <GotopBtn />
      </main>
      {viewCartOption && (
        <CartOption
          itemDetail={itemDetail}
          onClickAddCart={onClickAddCart}
          onClickWishList={onClickWishList}
        />
      )}
      <CheckModal modalIsOpen={isOpen} closeModal={closeModal} msg={msg} />
      <WishListLoginModal openModal={iswishListModalOpen} closeModal={closeWishListModal} />
    </div>
  );
};
export default withRouter(ItemDetail);
