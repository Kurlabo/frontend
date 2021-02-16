import React from 'react';

const InfoTab = ({ onClick, state }) => {
  const tabListStyle =
    'w-r-17 text-center pt-6 text-gray-700 border-l border-t border-gray-400 select-none cursor-pointer';
  const selected = 'bg-white border-b-0 h-20';
  const unselected = 'bg-klp-50';

  return (
    <ul className="flex h-20 text-p-14 border-b border-gray-400 mb-24">
      <li
        onClick={onClick}
        className={`${tabListStyle + ' ' + (state === '상품설명' ? selected : unselected)}`}
      >
        상품설명
      </li>
      <li
        onClick={onClick}
        className={`${tabListStyle + ' ' + (state === '상품이미지' ? selected : unselected)}`}
      >
        상품이미지
      </li>
      <li
        onClick={onClick}
        className={`${tabListStyle + ' ' + (state === '상세정보' ? selected : unselected)}`}
      >
        상세정보
      </li>
      <li
        onClick={onClick}
        className={`${tabListStyle + ' ' + (state === '고객후기' ? selected : unselected)}`}
      >
        고객후기
      </li>
      <li
        onClick={onClick}
        className={`${
          tabListStyle + ' border-r ' + (state === '상품문의' ? selected : unselected)
        }`}
      >
        상품문의
      </li>
    </ul>
  );
};

export default InfoTab;
