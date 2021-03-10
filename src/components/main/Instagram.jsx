import React, { useCallback, useMemo } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getInstagramInfo } from '../../modules/instagram';

const Instagram = () => {
  const dispatch = useDispatch();
  const instagram = useSelector(state => state.instagram.instaSrcDto);

  const imgArr = useMemo(() => [], []);

  let cur = useRef(0);
  let onAnimate = useRef(false);
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  if (instagram !== undefined) {
    for (let i = 0; i < Math.ceil(instagram.thumbnail_img_list.length / 6); i++) {
      imgArr.push([]);
    }
    instagram.thumbnail_img_list.map((img, i) => imgArr[Math.floor(i / 6)].push({ img }));
    instagram.landing_url_list.map(
      (url, i) =>
        (imgArr[Math.floor(i / 6)][i - Math.floor(i / 6) * 6] = {
          ...imgArr[Math.floor(i / 6)][i - Math.floor(i / 6) * 6],
          url,
        }),
    );
  }

  const nextButton = useCallback(
    e => {
      console.log('nextcur', cur.current);
      if (onAnimate.current) return;
      onAnimate.current = true;
      if (cur.current === imgArr.length - 2 && imgArr[imgArr.length - 1].length !== 6) {
        containerRef.current.style.transform = `translateX(-${
          cur.current * 1050 + 175 * imgArr[imgArr.length - 1].length
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

  const prevButton = useCallback(e => {
    console.log('prevcur', cur.current);
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

  useEffect(() => {
    dispatch(getInstagramInfo());
    containerRef.current.style.transitionDuration = '0.5s';
    containerRef.current.style.transitionProperty = 'all';
    containerRef.current.style.transitionTimingFunction = 'ease-in-out';
  }, [dispatch]);

  return (
    <div>
      <div className="container h-auto">
        <p to="" className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5">
          인스타그램 고객 후기
        </p>
        <div className="relative">
          <button
            onClick={e => prevButton(e)}
            style={{ display: 'none' }}
            ref={prevButtonRef}
            className="absolute z-50 w-r-6 h-r-6 bg-r-6 bg-sm-pre-button left-r--3 top-r-5.75 focus:outline-none"
          />
          <div className="overflow-hidden">
            <ul ref={containerRef} className="w-r-735">
              {imgArr &&
                imgArr.map(imgs => (
                  <li className="w-r-105 float-left">
                    {imgs.map(({ img, url }) => (
                      <div className="inline-block ">
                        <a rel="noreferrer" target="_blank" href={url}>
                          <img className="h-r-17.5 w-r-17.5" alt="" src={img} />
                        </a>
                      </div>
                    ))}
                  </li>
                ))}
            </ul>
          </div>
          <button
            onClick={e => nextButton(e)}
            ref={nextButtonRef}
            className="z-50 absolute w-r-6 h-r-6 bg-r-6 bg-sm-next-button right-r--3 top-r-5.75 focus:outline-none"
          />
        </div>
        <div className="pt-16 pb-40 font-bold text-r-1.6 leading-10 text-center">
          <span className="block font-normal text-kmi-100">더 많은 고객 후기가 궁금하다면?</span>
          <Link to="" className="font-bold">
            @marketkurly_regram
          </Link>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Instagram);
