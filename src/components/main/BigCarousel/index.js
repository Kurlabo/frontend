import { useEffect } from 'react';
import { useRef } from 'react';

const BigCarousel = () => {
  let isStop = false;
  let onAnimate = false;
  // let cur = 1;
  let cur = useRef(1);
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.transform = `translateX(-${cur.current}00%)`;
    const timerId = setInterval(() => {
      if (isStop) return;
      if (cur.current === 1) {
        setTimeout(() => {
          containerRef.current.style.transitionDuration = '';
          containerRef.current.style.transitionProperty = '';
          containerRef.current.style.transitionTimingFunction = '';
          containerRef.current.style.transform = `translateX(-500%)`;
          cur.current = 5;
        }, 500);
        containerRef.current.style.transitionDuration = '0.5s';
        containerRef.current.style.transitionProperty = 'all';
        containerRef.current.style.transitionTimingFunction = 'ease-in-out';
        containerRef.current.style.transform = `translateX(-${
          cur.current - 1
        }00%)`;
      } else {
        containerRef.current.style.transitionDuration = '0.5s';
        containerRef.current.style.transitionProperty = 'all';
        containerRef.current.style.transitionTimingFunction = 'ease-in-out';
        containerRef.current.style.transform = `translateX(-${
          cur.current - 1
        }00%)`;
        --cur.current;
      }
    }, 3000);
    return () => {
      console.log('clearInterval');
      clearInterval(timerId);
    };
  }, [isStop]);

  const imgArr = [
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1610827181.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1612094440.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1611795651.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1612149449.jpg',
  ];

  return (
    <div
      className="relative"
      onMouseOver={() => (isStop = true)}
      onMouseOut={() => (isStop = false)}
    >
      <button
        onClick={prevButton}
        className="absolute z-50 w-p-52 h-p-52 bg-big-pre-button left-p-91 top-p-159 focus:outline-none"
      />
      <div ref={containerRef} className="relative h-p-370">
        <ul className="absolute w-vw-700">
          <li
            className="list-none w-vw-99 float-left h-p-370 bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgArr[imgArr.length - 1]})` }}
          />
          {imgArr.map((img, i) => (
            <li
              key={i}
              className="list-none w-vw-99 float-left h-p-370 bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <li
            className="list-none w-vw-99 float-left h-p-370 bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${imgArr[0]})` }}
          />
        </ul>
      </div>
      <button
        onClick={nextButton}
        className="z-50 absolute w-p-52 h-p-52 bg-big-next-button right-p-91 top-p-159 focus:outline-none"
      />
    </div>
  );

  function prevButton() {
    if (onAnimate) return;
    onAnimate = true;
    if (cur.current === 1) {
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '';
        containerRef.current.style.transitionProperty = '';
        containerRef.current.style.transitionTimingFunction = '';
        containerRef.current.style.transform = `translateX(-500%)`;
        cur.current = 5;
      }, 500);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${
        cur.current - 1
      }00%)`;
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${
        cur.current - 1
      }00%)`;
      --cur.current;
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }

  function nextButton() {
    if (onAnimate) return;
    onAnimate = true;
    if (cur.current === imgArr.length) {
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
      containerRef.current.style.transform = `translateX(-${
        cur.current + 1
      }00%)`;
    } else {
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${
        cur.current + 1
      }00%)`;
      ++cur.current;
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }
};
export default BigCarousel;
