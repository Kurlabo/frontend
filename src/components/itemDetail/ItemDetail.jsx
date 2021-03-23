import React, { useState, useEffect, useRef } from 'react';
import RelatedProduct from './detail/RelatedProduct';
import PurchaseInfo from './detail/PurchaseInfo';
import GoodsInfo from './detail/GoodsInfo';
import GotopBtn from './detail/GotopBtn';
import BottomCartOption from './detail/BottomCartOption';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartCount } from '../../modules/cartAddOption';
import CheckModal from './detail/CheckModal';
import WishListLoginModal from './detail/WishListLoginModal';
import { withRouter } from 'react-router';
import { postWishList, setModuleMsg, setModuleMsgEmpty } from '../../modules/itemDetail';
import { postGoodsToCart } from '../../modules/common/addGoodsToCart';
import { setRecent } from '../../modules/recentItem';

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

const ItemDetail = ({ itemDetail, history, productId }) => {
  const dispatch = useDispatch();
  let onPopUp = useRef(false);
  const isLogin = getCookie('auth') !== undefined;

  const { count } = useSelector(state => state.cartAddOption);
  const { isOpen, msg } = useSelector(state => state.itemDetail.modalInfo);

  const [iswishListModalOpen, setIsWishListModalOpen] = useState(false);

  // 쿠키에 넣을 key와 value
  const name = 'recentlyViewed';
  const existingValue = getCookie(name);

  const saveView = ({ product_id, name, original_image_url }) => ({
    product_id,
    name,
    original_image_url,
  });

  const onClickAddCart = useCallback(() => {
    if (onPopUp.current) return;
    if (count < 1) {
      dispatch(setModuleMsg('수량은 반드시 1 이상이어야 합니다.'));
      return;
    }
    if (!isLogin) {
      setIsWishListModalOpen(true);
      return;
    }
    onPopUp.current = true;
    // 장바구니에 post
    dispatch(
      postGoodsToCart({
        addProductInfo: { insertCartList: [{ product_id: productId, cnt: count }] },
        config,
      }),
    );
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
      dispatch(
        postWishList({
          product_id: { product_id: productId },
          config,
        }),
      );
    }
  }, [count, isLogin, dispatch, productId]);

  const closeWishListModal = useCallback(() => {
    setIsWishListModalOpen(false);
  }, []);

  const moveToSigninPage = useCallback(() => {
    history.push('/shop/account/signin');
  }, [history]);

  useEffect(() => {
    dispatch(setCartCount(1));
    dispatch(setRecent(saveView(itemDetail)));

    return () => {
      let value = existingValue ? [...JSON.parse(existingValue)] : [];
      value = value.filter(item => +item.product_id !== +productId);
      value.unshift({ product_id: productId, thumbnailUrl: itemDetail.list_image_url });
      if (value.length > 10) {
        value.pop();
      }
      document.cookie =
        encodeURIComponent(name) +
        '=' +
        encodeURIComponent(JSON.stringify(value)) +
        '; max-age=3600';
    };
  }, [dispatch, existingValue, itemDetail.list_image_url, productId]);

  return (
    <div>
      <main className="w-p-1050 pt-8 mx-auto my-0 text-gray-800">
        <PurchaseInfo
          isLogin={isLogin}
          itemDetail={itemDetail}
          onClickAddCart={onClickAddCart}
          onClickWishList={onClickWishList}
        />
        <RelatedProduct relatedProducts={itemDetail['related_product']} />
        <GoodsInfo itemDetail={itemDetail} />
        <GotopBtn />
      </main>
      <BottomCartOption
        isLogin={isLogin}
        itemDetail={itemDetail}
        onClickAddCart={onClickAddCart}
        onClickWishList={onClickWishList}
      />
      <CheckModal modalIsOpen={isOpen} closeModal={closeModal} msg={msg} />
      <WishListLoginModal
        openModal={iswishListModalOpen}
        closeModal={closeWishListModal}
        moveToSigninPage={moveToSigninPage}
      />
    </div>
  );
};
export default withRouter(ItemDetail);
