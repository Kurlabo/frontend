import { useEffect } from 'react';
import { useRef } from 'react';
let onAnimate = false;
let cur = 1;

const SmallCarousel = ({ title }) => {
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.transform = `translateX(-1050px)`;
  }, []);

  const imgArr = [
    'https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg',

    'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg',

    'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg',

    'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg',

    'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
    'https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg',
  ];
  return (
    <div className="container h-r-65.2">
      <p className="font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5">
        {title}
      </p>
      <div className="relative">
        <button
          onClick={(e) => prevButton(e)}
          ref={prevButtonRef}
          className="absolute z-50 w-r-6 h-r-6 bg-r-6 left- bg-sm-pre-button left-r--3 top-r-13 focus:outline-none"
        />
        <div className="overflow-hidden">
          <ul ref={containerRef} className="bg-pink-50-200 w-r-735">
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1578533870214l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1477568051626l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1508133192766l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1523522504728l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
            <li className="w-r-105 float-left">
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
              <div className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 ">
                <img
                  alt=""
                  src="https://img-cf.kurly.com/shop/data/goods/1470295518346l0.jpg"
                />
                <p className="text-r-1.6 mt-5 mb-4">[헤말린] 멸치 3종 (냉장)</p>
                <span className="font-bold">
                  <span className="text-r-1.6 mr-3 text-discount-100">10%</span>
                  <span className="text-r-1.6">7.470원</span>
                </span>
                <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                  8,300원
                </p>
              </div>
            </li>
          </ul>
        </div>
        <button
          onClick={(e) => nextButton(e)}
          ref={nextButtonRef}
          className="z-50 absolute w-r-6 h-r-6 bg-r-6 bg-sm-next-button right-r--3 top-r-13 focus:outline-none"
        />
      </div>
    </div>
  );

  function prevButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    console.log(cur);
    if (cur === 1) {
      e.target.disabled = true;
      e.target.style.display = 'none';
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${
        (cur - 1) * 1050
      }px)`;
      --cur;
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.style.display = '';
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }

  function nextButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === 5) {
      e.target.style.display = 'none';
      e.target.disabled = true;
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${
        (cur + 1) * 1050
      }px)`;
      ++cur;
      prevButtonRef.current.disabled = false;
      prevButtonRef.current.style.display = '';
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }
};
export default SmallCarousel;
