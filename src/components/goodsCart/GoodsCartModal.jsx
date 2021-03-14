import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModalGoods, setActiveModalProdcut } from '../../modules/cart';
import { requestServerToDeleteProducInfo } from '../../modules/goodsCart';
import { useCookies } from 'react-cookie';

const GoodsCartModal = ({ goods }) => {
  const dispatch = useDispatch();
  const productId = useSelector(state => state.cart.modalProduct.productId);
  const goodsId = useSelector(state => state.cart.modalGoods.GoodsId);
  const [cookies] = useCookies(['auth']);

  const onClickButtonConfirm = useCallback(
    id => {
      if (goods === true) {
        dispatch(requestServerToDeleteProducInfo(id, true, cookies.auth));
      } else {
        dispatch(requestServerToDeleteProducInfo([id], false, cookies.auth));
      }
    },
    [cookies.auth, dispatch, goods],
  );

  const onClickButtonCancel = useCallback(() => {
    if (goods === true) {
      dispatch(setActiveModalGoods());
    } else {
      dispatch(setActiveModalProdcut());
    }
  }, [dispatch, goods]);

  return (
    <div className="fixed top-2/4 left-2/4 z-990 transform -translate-x-2/4 -translate-y-1/2 w-r-47 bg-white">
      <div className="p-8 text-kp-600 h-r-6 text-r-1.4 border-b-1 border-gray-200">
        <span>알림메시지</span>
      </div>
      <div className="text-r-1.4 text-kg-300 py-24 text-center">
        {goods === true ? '선택한 상품을 삭제하시겠습니까?' : '삭제하시겠습니까?'}
      </div>
      <div className="bg-gray-200 py-10 flex justify-center">
        <button
          onClick={() => {
            onClickButtonConfirm(goods === true ? goodsId : productId);
          }}
          className="w-r-15.5 bg-kp-600 py-4 text-white text-r-1.2 mr-10"
        >
          확인
        </button>
        <button
          onClick={onClickButtonCancel}
          className="w-r-15.5 bg-kp-600 py-4 text-white text-r-1.2"
        >
          취소
        </button>
      </div>
    </div>
  );
};

export default GoodsCartModal;
