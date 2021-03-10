import React, { useCallback, useMemo } from 'react';
import { useEffect, useState } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MdButtons from './MdButtons';

const SmallCarousel = ({ title, subtitle, bgGray, mdSuggest }) => {
  const [mdCurIndex, setMdCurIndex] = useState('채소');
  const dispatch = useDispatch();
  const mainInfo = useSelector(state => state.instagram);
  const MdGoodsInfo = useSelector(state => state.mdButtons.GoodsInfo);

  let cur = useRef(0);
  let onAnimate = useRef(false);
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  const imgArr = useMemo(() => [], []);

  addCarouselInfoToArray('howAbout', '이 상품 어때요?');
  addCarouselInfoToArray('frugality', '알뜰 상품 >');
  addCarouselInfoToArray('todays', '오늘의 신상품 >');
  addCarouselInfoToArray('hots', '지금 가장 핫한 상품>');
  addCarouselInfoToArray('', 'MD의 추천', 'mdSuggestion');

  useEffect(() => {
    containerRef.current.style.transitionDuration = '0.5s';
    containerRef.current.style.transitionProperty = 'all';
    containerRef.current.style.transitionTimingFunction = 'ease-in-out';
  }, [dispatch]);

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

  const prevButton = useCallback(e => {
    if (onAnimate.current) return;
    onAnimate.current = true;
    if (cur.current === 1) {
      containerRef.current.style.transform = `translateX(-${(cur.current - 1) * 1050}px)`;
      e.target.disabled = true;
      e.target.style.display = 'none';
    } else {
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.style.display = '';
      containerRef.current.style.transform = `translateX(-${(cur.current - 1) * 1050}px)`;
    }
    --cur.current;

    setTimeout(() => {
      onAnimate.current = false;
    }, 500);
  }, []);

  const nextButton = useCallback(
    e => {
      if (onAnimate.current) return;
      onAnimate.current = true;
      if (cur.current === imgArr.length - 2 && imgArr[imgArr.length - 1].length !== 4) {
        containerRef.current.style.transform = `translateX(-${
          cur.current * 1050 + 262 * imgArr[imgArr.length - 1].length
        }px)`;
        e.target.style.display = 'none';
        e.target.disabled = true;
      } else if (cur.current === imgArr.length - 2) {
        containerRef.current.style.transform = `translateX(-${(cur.current + 1) * 1050}px)`;
        e.target.style.display = 'none';
        e.target.disabled = true;
      } else {
        containerRef.current.style.transform = `translateX(-${(cur.current + 1) * 1050}px)`;
        prevButtonRef.current.disabled = false;
        prevButtonRef.current.style.display = '';
      }
      ++cur.current;

      setTimeout(() => {
        onAnimate.current = false;
      }, 500);
    },
    [imgArr],
  );

  return (
    <div className={`${bgGray ? 'bg-kg-500' : ''}`}>
      <div className="container h-auto">
        {!mdSuggest && (
          <h2 to="" className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5">
            {title}
            {subtitle && (
              <p className="pt-4 font-normal text-r-1.6 text-gray-400 leading-8">{subtitle}</p>
            )}
          </h2>
        )}
        {mdSuggest && (
          <MdButtons
            title={title}
            subtitle={subtitle}
            suggestType={suggestType}
            mdCurIndex={mdCurIndex}
            setMdCurIndex={setMdCurIndex}
          />
        )}
        <div className="relative">
          <button
            onClick={e => prevButton(e)}
            style={{ display: 'none' }}
            ref={prevButtonRef}
            className="absolute z-50 w-r-6 h-r-6 bg-r-6 left- bg-sm-pre-button left-r--3 top-r-13 focus:outline-none"
          />
          <div className="overflow-hidden">
            <ul ref={containerRef} className="w-r-735">
              {imgArr.map((infos, index) => (
                <li key={`${index}`} className="w-r-105 float-left">
                  {infos.map((info, index) => (
                    <div
                      key={`${index}`}
                      className="inline-block h-r-49.6 w-r-24.9 mr-r-1.3 align-top"
                    >
                      <Link to={`/shop/goods/goods_view/${info.product_id}`}>
                        <img alt="" src={info.product_img} />
                        <p className="text-r-1.6 mt-5 mb-4">{info.product_name}</p>
                      </Link>
                      <span className="font-bold">
                        {info.discount_rate !== 0 && (
                          <span className="text-r-1.6 mr-3 text-discount-100">
                            {info.discount_rate}%
                          </span>
                        )}
                        <span className="text-r-1.6">{info.original_price.toLocaleString()}원</span>
                      </span>
                      {info.discount_rate !== 0 && (
                        <p className="text-r-1.4 mt-2 text-gray-400 line-through">
                          {info.discounted_price.toLocaleString()}원
                        </p>
                      )}
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={e => nextButton(e)}
            ref={nextButtonRef}
            className="z-50 absolute w-r-6 h-r-6 bg-r-6 bg-sm-next-button right-r--1.5 top-r-13 focus:outline-none"
          />
          {mdSuggest && (
            <div className="w-r-52 mx-auto">
              <Link
                to={`/shop/goods/item_list/category=${1000 + +suggestType.indexOf(mdCurIndex)}`}
                className="block h-r-5.6 pt-r-1.6 border-solid border-kmd-100 border text-r-1.6 leading-8 text-center"
              >
                <span className="px-7 text-black">
                  {mdCurIndex} 전체보기{'>'}{' '}
                </span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  function addCarouselInfoToArray(dataName, titleType, mdSuggestion) {
    if (mdSuggestion === 'mdSuggestion') {
      if (MdGoodsInfo.length !== 0 && title === titleType) {
        for (let i = 0; i < Math.ceil(MdGoodsInfo.length / 4); i++) {
          imgArr.push([]);
        }
        MdGoodsInfo.map((info, i) => imgArr[Math.floor(i / 4)].push(info));
      }
      return;
    }
    if (mainInfo[dataName] !== undefined && title === titleType) {
      for (let i = 0; i < Math.ceil(mainInfo[dataName].length / 4); i++) {
        imgArr.push([]);
      }
      mainInfo[dataName].map((info, i) => imgArr[Math.floor(i / 4)].push(info));
    }
  }
};

export default React.memo(SmallCarousel);
