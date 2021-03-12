import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

const Aside = () => {
  const pathname = window.location.pathname;
  const asideRef = useRef();
  const asideLink =
    'block h-12 border-solid border border-gray-400 border-t-0 text-center leading-3';
  const viewList = useSelector(state => state.recentItem);
  useEffect(() => {
    window.onscroll = scrollSlider;
  }, []);

  if (pathname === '/kakao/destination' || pathname === '/order/input_reception') return null;
  else if (pathname === '/shop/mypage/desination/modify_form') return null;
  else if (pathname === '/shop/mypage/desination/modify_form/') return null;

  return (
    <aside
      className="absolute top-r-71 right-12 w-32 transition-all transform -translate-y-1/2 bg-white"
      ref={asideRef}
    >
      <div className="mb-2">
        <Link to="/shop/board/view.php?id=notice&amp;no=64">
          <img
            src="https://res.kurly.com/pc/service/main/1904/bnr_quick_20190403.png"
            alt="퀄리티있게 샛별배송"
          />
        </Link>
      </div>
      <ul className="border-gray-400 border-t-1 text-r-1.2 mb-2">
        <li>
          <Link
            to="/shop/main/html.php?htmid=event/kurly.htm&amp;name=lovers"
            className={asideLink}
          >
            등급별 혜택
          </Link>
        </li>
        <li>
          <Link to="/shop/board/list.php?id=recipe" className={asideLink}>
            레시피
          </Link>
        </li>
        <li>
          <Link to="/shop/goods/goods_review_best.php" className={asideLink}>
            베스트 후기
          </Link>
        </li>
      </ul>
      {viewList.length !== 0 && (
        <div className="border-gray-400 border-t-1 text-r-1.2">
          <button className="block w-full h-7 text-center">
            <IoChevronUpOutline className="inline-block text-gray-300" />
          </button>
          <h6 className="text-center leading-3'">최근 본 상품</h6>
          <ul>
            {viewList.map(item => {
              return (
                <li key={item.product_id}>
                  <Link to={item.product_id}>
                    <img src={item.original_image_url} alt={`${item.name} 상품 바로가기`} />
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button className="block w-full h-7 text-center">
            <IoChevronDownOutline className="inline-block text-gray-300" />
          </button>
        </div>
      )}
    </aside>
  );

  function scrollSlider() {
    if (window.scrollY > 410) {
      asideRef.current.style.top = `${window.scrollY + window.innerHeight / 2}px`;
    } else {
      asideRef.current.style.top = '710px';
    }
  }
};

export default Aside;
