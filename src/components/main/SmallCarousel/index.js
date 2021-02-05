import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const SmallCarousel = ({ title, subtitle, bgGray, mdSuggest }) => {
  let cur = 0;
  let onAnimate = false;
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.transitionDuration = '0.5s';
    containerRef.current.style.transitionProperty = 'all';
    containerRef.current.style.transitionTimingFunction = 'ease-in-out';
  });

  const imgArr = [
    [
      'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
    ],

    [
      'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
    ],

    [
      'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
    ],

    [
      'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
      'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
    ],
  ];

  const suggestType = [
    '채소',
    '과일·견과·쌀',
    '수산·해산·건어물',
    '정육·계란',
    '국·반찬·메인요리',
    '샐러드·간편식',
    '면·양념·오일',
    '생수·음료·우유·커피',
    '간식·과자·떡',
    '베이커리·치즈·델리',
    '건강식품',
    '생활용품·리빙',
    '뷰티·바디케어',
    '주방용품',
    '가전제품',
    '베이비·키즈',
    '반려동물',
  ];

  return (
    <div className={`${bgGray ? 'bg-kg-500' : ''}`}>
      <div className="container h-auto">
        {!mdSuggest && (
          <Link
            to=""
            className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5"
          >
            {title}
            {subtitle && (
              <p className="pt-4 font-normal text-r-1.6 text-gray-400 leading-8">
                {subtitle}
              </p>
            )}
          </Link>
        )}
        {mdSuggest && (
          <p
            to=""
            className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5"
          >
            {title}
            {subtitle && (
              <p className="pt-4 font-normal text-r-1.6 text-gray-400 leading-8">
                {subtitle}
              </p>
            )}
          </p>
        )}
        {mdSuggest && (
          <ul className="pb-8 text-center">
            {suggestType.map((type) => (
              <li className="inline-block px-2 pb-8">
                <button className="hover:bg-kb-100 hover:text-kp-600 focus:bg-kp-600 focus:text-white focus:font-bold focus:outline-none inline-block h-16 px-8 pb-4 pt-4 rounded-r-2 bg-kg-500 text text-r-1.4 leading-6">
                  {type}
                </button>
              </li>
            ))}
          </ul>
        )}
        <div className="relative">
          <button
            onClick={(e) => prevButton(e)}
            style={{ display: 'none' }}
            ref={prevButtonRef}
            className="absolute z-50 w-r-6 h-r-6 bg-r-6 left- bg-sm-pre-button left-r--3 top-r-13 focus:outline-none"
          />
          <div className="overflow-hidden">
            <ul ref={containerRef} className="w-r-735">
              {imgArr.map((imgs) => (
                <li className="w-r-105 float-left">
                  {imgs.map((img) => (
                    <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                      <Link to>
                        <img alt="" src={img} />
                        <p className="text-r-1.6 mt-5 mb-4">
                          [헤말린] 멸치 3종 (냉장)
                        </p>
                      </Link>
                      <span className="font-bold">
                        <span className="text-r-1.6 mr-3 text-discount-100">
                          10%
                        </span>
                        <span className="text-r-1.6">7.470원</span>
                      </span>
                      <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                        8,300원
                      </p>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={(e) => nextButton(e)}
            ref={nextButtonRef}
            className="z-50 absolute w-r-6 h-r-6 bg-r-6 bg-sm-next-button right-r--3 top-r-13 focus:outline-none"
          />
        </div>
      </div>
    </div>
  );

  function prevButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === 1) {
      containerRef.current.style.transform = `translateX(-${
        (cur - 1) * 1050
      }px)`;
      e.target.disabled = true;
      e.target.style.display = 'none';
    } else {
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.style.display = '';
      containerRef.current.style.transform = `translateX(-${
        (cur - 1) * 1050
      }px)`;
    }
    --cur;

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }

  function nextButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === imgArr.length - 2) {
      containerRef.current.style.transform = `translateX(-${
        (cur + 1) * 1050
      }px)`;
      e.target.style.display = 'none';
      e.target.disabled = true;
    } else {
      containerRef.current.style.transform = `translateX(-${
        (cur + 1) * 1050
      }px)`;
      prevButtonRef.current.disabled = false;
      prevButtonRef.current.style.display = '';
    }
    ++cur;

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }
};

export default SmallCarousel;
