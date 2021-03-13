import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IoChevronUpOutline, IoChevronDownOutline } from 'react-icons/io5';

const Aside = () => {
  const pathname = window.location.pathname;
  const asideRef = useRef();
  const asideLink = 'block h-12 border-solid border border-kg-250 border-t-0 text-center leading-3';
  const viewList = useSelector(state => state.recentItem);
  const recentDiv = useRef();
  const recentUl = useRef();
  let moveValue;
  let moveValueNum;

  useEffect(() => {
    window.onscroll = scrollSlider;
    if (viewList.length) {
      recentDiv.current.style.height = `${viewList.length * 77}px`;
      recentUl.current.style.top = '0px';
      moveValue = recentUl.current.style.top;
      moveValueNum = +moveValue.slice(1).slice(0, moveValue.indexOf('px') - 1);
    }
  }, [viewList]);

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
      <ul className="border-kg-250 border-t-1 text-r-1.2 mb-2">
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
        <div className="border-kg-250 border-1 text-r-1.2">
          <button
            className="block w-full h-7 text-center focus:outline-0 focus:border-0"
            onClick={moveUp}
          >
            <IoChevronUpOutline className="inline-block text-gray-300" />
          </button>
          <h6 className="text-center leading-3'">최근 본 상품</h6>
          <div className="max-h-r-24 overflow-y-hidden relative" ref={recentDiv}>
            <ul
              className="absolute left-1/2 transform -translate-x-1/2 transition-all"
              ref={recentUl}
            >
              {viewList.map(item => {
                return (
                  <li key={item.product_id} className="text-center">
                    <Link
                      to={`/shop/goods/goods_view/${item.product_id}`}
                      className="inline-block w-r-6"
                    >
                      <img
                        src={item.original_image_url}
                        alt={`${item.name} 상품 바로가기`}
                        className="w-full"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="block w-full h-7 text-center focus:outline-0 focus:border-0"
            onClick={moveDown}
          >
            <IoChevronDownOutline className="inline-block text-gray-300" />
          </button>
        </div>
      )}
    </aside>
  );

  function scrollSlider() {
    if (!asideRef.current) return false;
    if (window.scrollY > 410) {
      asideRef.current.style.top = `${window.scrollY + window.innerHeight / 2}px`;
    } else {
      asideRef.current.style.top = '710px';
    }
  }
  function moveUp() {
    if (moveValueNum < 0) recentUl.current.style.top = `${(moveValueNum += 77)}px`;
  }
  function moveDown() {
    if (viewList.length < 4) return false;
    if (moveValueNum > (viewList.length % 3) * -77)
      recentUl.current.style.top = `${(moveValueNum -= 77)}px`;
  }
};

export default Aside;
