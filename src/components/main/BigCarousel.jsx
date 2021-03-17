import { useCallback, useEffect, useState } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import { AiFillPauseCircle, AiFillPlayCircle } from 'react-icons/ai';

const BigCarousel = () => {
  let onAnimate = useRef(false);
  let cur = useRef(1);
  const containerRef = useRef(null);
  const [isStop, setIStop] = useState('');
  const [stopButton, setStopButton] = useState('');

  const mainBannerImages = useSelector(state => state.instagram.slide_img_list);

  // 메인베너 다음 버튼 이동 이벤트 핸들러
  const prevButton = useCallback(() => {
    // onAnimate 변수 선언으로 버튼클릭이 반복적으로 하지않게 쓰로틀 구현
    // onAnimate가 true인 경우에 함수 실행을 멈추게한다.
    if (onAnimate.current) return;

    // onAnimate가 false값이어여서 실행된이후 true값으로 바꾸어 다음 이벤트가 실행되었을때 함수를 멈추게한다.
    onAnimate.current = true;

    // mainBannerImages이 state에서 존재하지 않는 경우에는 실행하지 않게한다.
    // cur 값이 만약 1인경우 캐러셀의 가장 첫번째이미지(캐러셀에 보이는 마지막 이미지)로 보이게 넘어간이후
    // 0.5초가 지나면 transition의 프로퍼티값을 없에고 가장 마지막 캐러셀 이미지 이동시킨다.
    if (mainBannerImages !== undefined && cur.current === 1) {
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '';
        containerRef.current.style.transitionProperty = '';
        containerRef.current.style.transitionTimingFunction = '';
        containerRef.current.style.transform = `translateX(-${mainBannerImages.length}00%)`;
        cur.current = mainBannerImages.length;
      }, 500);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur.current - 1}00%)`;
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur.current - 1}00%)`;
      --cur.current;
    }

    // 한번 실행한이후 0.5초가 지나야 false값으로 바뀌어 다시 실행할수 있게 해준다.
    setTimeout(() => {
      onAnimate.current = false;
    }, 500);
  }, [mainBannerImages]);

  const nextButton = useCallback(() => {
    if (onAnimate.current) return;
    onAnimate.current = true;
    if (mainBannerImages !== undefined && cur.current === mainBannerImages.length) {
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '';
        containerRef.current.style.transitionProperty = '';
        containerRef.current.style.transitionTimingFunction = '';
        containerRef.current.style.transform = `translateX(-100%)`;
        cur.current = 1;
      }, 500);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur.current + 1}00%)`;
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur.current + 1}00%)`;
      ++cur.current;
    }

    setTimeout(() => {
      onAnimate.current = false;
    }, 500);
  }, [mainBannerImages]);

  useEffect(() => {
    // setIStop으로 isStop의 스테이트가 변경되면 리렌더링이 되어 useEffect가 다시 실행되게 되고
    // 그때 UseEffect안의 코드가 다시 실행되게 된다.
    // 따라서 밑의 코드가 리렌더링되었을때 다시 실행되지 않게 해주어야한다.
    // 밑의 코드의 사용출처 : 가장 처음에 렌더링되었을때 첫번째 캐러셀의 이미지(실제론 마지막이미지)가 가장 먼저 보이기떄문에
    // 두번째 캐러셀이미지(원래 첫번째 이미지)가 보여지게 하는 코드이다.

    // 그러므로 isStop 스테이트가 변경되었을때는 밑의 코드가 실행안되게 해야한다.
    // 그럴려면 isStop의 값은 'start' 또는 'stop'이므로 디폴트값은 ''이므로 ''일때만 실행시켜주고 값이있을때 실행시키지 않는다.
    if (isStop === '') {
      containerRef.current.style.transform = `translateX(-${cur.current}00%)`;
    }
    if (isStop === 'stop') return;
    if (stopButton === 'stop') return;
    const timerId = setInterval(() => {
      if (cur.current === 1) {
        setTimeout(() => {
          if (containerRef.current !== null) {
            containerRef.current.style.transitionDuration = '';
            containerRef.current.style.transitionProperty = '';
            containerRef.current.style.transitionTimingFunction = '';
            containerRef.current.style.transform = `translateX(-500%)`;
            cur.current = 5;
          }
        }, 500);
        containerRef.current.style.transitionDuration = '0.5s';
        containerRef.current.style.transitionProperty = 'all';
        containerRef.current.style.transitionTimingFunction = 'ease-in-out';
        containerRef.current.style.transform = `translateX(-${cur.current - 1}00%)`;
      } else {
        containerRef.current.style.transitionDuration = '0.5s';
        containerRef.current.style.transitionProperty = 'all';
        containerRef.current.style.transitionTimingFunction = 'ease-in-out';
        containerRef.current.style.transform = `translateX(-${cur.current - 1}00%)`;
        --cur.current;
      }
    }, 3000);
    return () => {
      clearInterval(timerId);
    };
  }, [isStop, stopButton]);
  return (
    <div className="relative">
      <div className="absolute bottom-12 w-r-7.9 left-2/4 -translate-x-2/4 transform z-10 ">
        <AiFillPlayCircle
          onClick={() => {
            setStopButton('start');
          }}
          className="inline-block cursor-pointer text-r-3 opacity-50 text-kp-600"
        />
        <AiFillPauseCircle
          onClick={() => {
            setStopButton('stop');
          }}
          className="inline-block cursor-pointer ml-6 text-r-3 opacity-50 text-kp-600"
        />
      </div>
      <div
        onMouseOver={() => setIStop('stop')}
        onMouseOut={() => setIStop('start')}
        className="relative overflow-hidden"
      >
        <button
          onClick={prevButton}
          className="absolute z-50 w-p-52 h-p-52 bg-big-pre-button left-p-91 top-p-159 focus:outline-none"
        />

        <div ref={containerRef} className="relative h-p-370">
          {mainBannerImages !== undefined && (
            <ul className="absolute w-vw-700">
              <li
                className="list-none w-screen float-left h-p-370 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${mainBannerImages[mainBannerImages.length - 1]})` }}
              />
              {mainBannerImages.map((img, i) => (
                <li
                  key={i}
                  className="list-none w-screen float-left h-p-370 bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
              <li
                className="list-none w-screen float-left h-p-370 bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${mainBannerImages[0]})` }}
              />
            </ul>
          )}
        </div>
        <button
          onClick={nextButton}
          className="z-50 absolute w-p-52 h-p-52 bg-big-next-button right-p-91 top-p-159 focus:outline-none"
        />
      </div>
    </div>
  );
};
export default BigCarousel;
