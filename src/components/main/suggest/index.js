import React from 'react';

const Suggest = () => {
  const suggest = [
    'https://img-cf.kurly.com/shop/data/goods/1521767438325l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1521767438325l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1521767438325l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1521767438325l0.jpg',
  ];

  return (
    <>
      <h2 className="text-3xl text-center font-semibold">이 상품 어때요?</h2>
      <div className="flex justify-between">
        {suggest.map((item, i) => (
          <img
            key={i}
            className="w-60"
            src="https://img-cf.kurly.com/shop/data/goods/1521767438325l0.jpg"
            alt="suggest"
          />
        ))}
      </div>
    </>
  );
};

export default Suggest;
