import { useEffect } from 'react';
import { useRef } from 'react';
let onAnimate = false;
let cur = 1;

const Carousel = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.transform = `translateX(-${cur}00%)`;
  }, []);

  const imgArr = [
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1610827181.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1612094440.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1611795651.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1596164134.jpg',
    'https://img-cf.kurly.com/shop/data/main/1/pc_img_1612149449.jpg',
  ];

  return (
    <div className="relative">
      <button
        onClick={prevButton}
        className="absolute z-50 w-p-52 h-p-52 bg-pre-button left-p-91 top-p-159 focus:outline-none"
      />
      <div ref={containerRef} className="relative">
        <ul className="absolute w-vw-700 ">
          <li
            className="w-screen float-left h-p-370 bg-center"
            style={{ backgroundImage: `url(${imgArr[imgArr.length - 1]})` }}
          />
          {imgArr.map((img, i) => (
            <li
              key={i}
              className="w-screen float-left h-p-370 bg-center"
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
          <li
            className="w-screen float-left h-p-370 bg-center"
            style={{ backgroundImage: `url(${imgArr[0]})` }}
          />
        </ul>
      </div>
      <button
        onClick={nextButton}
        className="z-50 absolute w-p-52 h-p-52 bg-next-button right-p-91 top-p-159 focus:outline-none"
      />
    </div>
  );

  function prevButton() {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === 1) {
      console.log('finish');
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '';
        containerRef.current.style.transitionProperty = '';
        containerRef.current.style.transitionTimingFunction = '';
        containerRef.current.style.transform = `translateX(-500%)`;
        cur = 5;
      }, 500);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur - 1}00%)`;
    } else {
      console.log('cur + 2 : ', cur + 2);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur - 1}00%)`;
      --cur;
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }

  function nextButton() {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === imgArr.length) {
      console.log('finish');
      setTimeout(() => {
        containerRef.current.style.transitionDuration = '';
        containerRef.current.style.transitionProperty = '';
        containerRef.current.style.transitionTimingFunction = '';
        containerRef.current.style.transform = `translateX(-100%)`;
        cur = 1;
      }, 500);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur + 1}00%)`;
    } else {
      console.log('cur + 2 : ', cur + 2);
      containerRef.current.style.transitionDuration = '0.5s';
      containerRef.current.style.transitionProperty = 'all';
      containerRef.current.style.transitionTimingFunction = 'ease-in-out';
      containerRef.current.style.transform = `translateX(-${cur + 1}00%)`;
      ++cur;
    }

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }
};
export default Carousel;
