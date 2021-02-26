import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { requestServerToDeleteProducInfo, selectAllCheckBox } from '../../modules/goodsCart';

const Select = ({ bottom }) => {
  const dispatch = useDispatch();
  const selectAll = useSelector(state => state.goodsCart.selectAll);
  const GoodsInfo = useSelector(state => state.goodsCart.cart);
  const selectGoods = GoodsInfo.filter(item => item.select);
  const selectGoodsIds = selectGoods.map(product => product.product_id);

  const onClickSpan = useCallback(() => {
    dispatch(requestServerToDeleteProducInfo(selectGoodsIds));
  }, [dispatch, selectGoodsIds]);

  const onChangeRadio = useCallback(
    check => {
      dispatch(selectAllCheckBox(check));
    },
    [dispatch],
  );

  // function onChangeRadio(check) {
  //   dispatch(selectAllCheckBox(check));
  // }

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
      <span onClick={onClickSpan} className="py-7 cursor-pointer">
        선택삭제
      </span>
    </div>
  );
};

export default Select;
