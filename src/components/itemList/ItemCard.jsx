import React from 'react';
const imgStyle = 'w-308 h-396 transform hover:scale-105 duration-700';
const cartStyle = 'absolute right-6 bottom-48';

const ItemCard = () => {
  return (
    <div className="pt-10 pl-14 relative">
      <div className="overflow-hidden">
        <img src="/img/tomato.jpg" alt="avocado" className={imgStyle} />
      </div>
      <div className="pt-6 ">
        <button>
          <img src="img/cart.svg" alt="장바구니 이미지" className={cartStyle} />
        </button>
        <div className="text-gray-900 text-4xl">[KF365] 아보카도 1개</div>
        <div className="font-bold text-3xl pt-3">2,600원</div>
        <div className="text-gray-400 text-xl pt-3">부드럽고 상큼한 과육, 숲속의 버터 (1개)</div>
      </div>
    </div>
  );
};

export default ItemCard;
