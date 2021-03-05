import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveModalGoods } from '../../modules/cart';
import { selectAllCheckBox } from '../../modules/goodsCart';
import GoodsCartModal from './GoodsCartModal';

const Select = ({ bottom }) => {
  const dispatch = useDispatch();
  const selectAll = useSelector(state => state.goodsCart.selectAll);
  const GoodsInfo = useSelector(state => state.goodsCart.cart);
  const selectGoods = GoodsInfo.filter(item => item.select);
  const selectGoodsIds = selectGoods.map(product => product.product_id);
  const activeModalGoods = useSelector(state => state.cart.modalGoods);

  const onClickSpan = useCallback(() => {
    if (selectGoodsIds.length !== 0) {
      // ModalGoods state 선택되어진 상품의 ID들이 배열로 저장되어진다.
      // 저장되어진 moDalGoods의 state중 products의 ID들은 모달창에서 삭제 확인버튼 클릭시 값이 불러와져 삭제한다.
      dispatch(setActiveModalGoods(selectGoodsIds));
    }
  }, [dispatch, selectGoodsIds]);

  const onChangeRadio = useCallback(
    check => {
      dispatch(selectAllCheckBox(check));
    },
    [dispatch],
  );

  return (
    <div
      className={
        bottom
          ? 'text-r-1.4 border-t border-solid py-5 border-gray-300 w-r-73'
          : 'text-r-1.4 border-b border-solid py-5 border-black w-r-73'
      }
    >
      <input
        onChange={e => {
          onChangeRadio(e.target.checked);
        }}
        id="selectAll"
        type="checkbox"
        className="hidden"
      />
      <label
        htmlFor="selectAll"
        className={`pl-14 h-10 select-none bg-left inline-block bg-no-repeat ${
          selectAll === true ? 'bg-checked-button' : 'bg-check-button'
        } `}
      >
        {`전체선택 (${selectGoods.length}/${GoodsInfo.length})`}
      </label>
      <span className="px-8 text-gray-400">|</span>
      <span
        onClick={() => {
          onClickSpan();
        }}
        className="py-7 cursor-pointer"
      >
        선택삭제
      </span>
      {activeModalGoods.isActive === true && (
        <>
          <GoodsCartModal goods />
          <div
            onClick={() => {
              dispatch(setActiveModalGoods());
            }}
            className="fixed left-0 top-0 w-screen h-screen z-900 bg-gray-600 bg-opacity-30"
          />
        </>
      )}
    </div>
  );
};

export default Select;
