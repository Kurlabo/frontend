import React from 'react';

const GoodsDesc = ({ img, name, desc, long_desc }) => {
  return (
    <div className="w-full h-p-950 text-gray-500 font-medium mb-64">
      <img className="w-r-101 h-r-67" src={img} alt="상품 상세 이미지" />
      <h3 className="text-r-3.8 text-center border-b border-gray-300 mt-28 pb-14">
        <small className="text-p-24 block">{desc}</small>
        <span>{name}</span>
      </h3>
      <p className="text-r-1.8 mt-12 font-light text-gray-700 leading-relaxed">{long_desc}</p>
    </div>
  );
};

export default React.memo(GoodsDesc);
