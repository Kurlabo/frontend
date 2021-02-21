import React, { useEffect, useRef } from 'react';
import { useCallback } from 'react';
import styled from 'styled-components';
const btnStyle = 'w-12 text-gray-700 cursor-pointer absolute inset-y-1/2';
let onAnimate = false;
const NameBox = styled.p`
  overflow: hidden;
  width: 100%;
  height: 35px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
const RelatedProduct = ({ relatedProducts }) => {
  let curIndex = 0;
  const containerRef = useRef();
  const carouselArr = [
    ...relatedProducts.slice(15),
    ...relatedProducts,
    ...relatedProducts.slice(0, 5),
  ];

  useEffect(() => {
    containerRef.current.style.transform = 'translateX(-' + 950 + 'px)';
  }, [relatedProducts]);

  const slideNext = useCallback(() => {
    if (onAnimate) return;
    onAnimate = true;
    if (curIndex <= 3) {
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * (curIndex + 2) + 'px)';
      ++curIndex;
    }
    console.log('curIndex', curIndex);
    console.log('translate', 950 * (curIndex + 1));
    if (curIndex === 3) {
      setTimeout(() => {
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 0 + 'px)';
      }, 500);
      curIndex = -1;
    } else if (curIndex === 4) {
      setTimeout(() => {
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 950 + 'px)';
      }, 500);
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * 5 + 'px)';
      console.log(950 * 4);
      curIndex = 0;
    }
    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }, []);

  const slidePrev = useCallback(() => {
    if (onAnimate) return;
    if (curIndex >= 0) {
      onAnimate = true;
      containerRef.current.style.transition = 'all 0.5s ease-in-out';
      containerRef.current.style.transform = 'translateX(-' + 950 * curIndex + 'px)';
      --curIndex;
    }
    if (curIndex === -1) {
      setTimeout(() => {
        onAnimate = true;
        containerRef.current.style.transition = 'all 0s';
        containerRef.current.style.transform = 'translateX(-' + 950 * 4 + 'px)';
      }, 500);
      curIndex = 3;
    }
    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }, []);

  return (
    <div>
      <div className="w-8 h-2 bg-gray-800" />
      <h3 className="uppercase text-p-13 font-semibold">Related Product</h3>
      <div className="w-p-1050 relative mt-8">
        <svg
          className={`${btnStyle + ' left-0 z-50'}`}
          onClick={slidePrev}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        <svg
          className={`${btnStyle + ' right-2 z-50'}`}
          onClick={slideNext}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
        <div className="h-p-320 w-p-950 overflow-hidden relative my-0 mx-auto">
          <ul className="absolute w-per-500" ref={containerRef}>
            {carouselArr.map(product => {
              return (
                <li
                  className="cursor-pointer float-left w-p-180 h-p-320 mr-4 border border-gray-300"
                  key={product.product_id}
                >
                  <div className="h-p-230">
                    <img className="w-full" src={product.name} alt="연관 상품 이미지" />
                  </div>
                  <div className="p-4">
                    <NameBox className="text-p-14 text-gray-800 h-14 leading-7">
                      {product['list_image_url']}
                    </NameBox>
                    <p className="text-p-14">{(+product['original_price']).toLocaleString()}원</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default React.memo(RelatedProduct);
