import React from 'react';

const thStyle = 'w-p-150 bg-gray-100 pl-3 text-left pt-6 pb-6 font-normal';
const tdStyle = 'bg-white pl-3 text-left pt-6 pb-6 font-normal w-r-35.5';

const GoodsInfoTable = ({ name }) => {
  return (
    <table className="mt-12 mb-24 text-r-1.2">
      <tbody>
        <tr>
          <th className={thStyle}>상품명</th>
          <td className={tdStyle}>{name}</td>
          <th className={thStyle}>상품의 유형</th>
          <td className={tdStyle}>상품설명 및 상품 이미지 참조</td>
        </tr>
        <tr>
          <th className={thStyle}>유통기한 및 품질 유지기한</th>
          <td className={tdStyle}>제품 별도 라벨 표기 참조</td>
          <th className={thStyle}>포장 단위별 내용물의 용량 또는 수량</th>
          <td className={tdStyle}>상품설명 및 상품이미지 참조</td>
        </tr>
        <tr>
          <th className={thStyle}>원재료명 및 함량</th>
          <td className={tdStyle}>상품설명 및 상품이미지 참조</td>
          <th className={thStyle}>제품성분</th>
          <td className={tdStyle}>상품설명 및 상품이미지 참조</td>
        </tr>
        <tr>
          <th className={thStyle}>소비자안전을 위한 주의사항</th>
          <td className={tdStyle}>상품설명 및 상품이미지 참조</td>
          <th className={thStyle}>소비자 상담관련 전화번호</th>
          <td className={tdStyle}>마켓컬리 고객행복센터(1644-1107)</td>
        </tr>
      </tbody>
    </table>
  );
};

export default React.memo(GoodsInfoTable);
