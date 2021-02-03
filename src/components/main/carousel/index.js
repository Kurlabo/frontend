import { useEffect } from 'react';
import { useRef } from 'react';
import {
  setCarousel,
  setCarouselMax,
  setCarouselMin,
} from '../../../modules/main';
import { useDispatch, useSelector } from 'react-redux';

const Carousel = () => {
  const dispatch = useDispatch();
  const carouselNumber = useSelector((state) => state.main);

  const containerRef = useRef(null);
  useEffect(() => {
    containerRef.current.style.transform = `translateX(-${carouselNumber}00%)`;
  }, [carouselNumber]);

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
        onClick={() => {
          if (carouselNumber === 1) {
            setTimeout(() => {
              containerRef.current.style.transition = '';
              containerRef.current.style.transitionDuration = '';
              containerRef.current.style.transitionProperty = '';
              containerRef.current.style.transitionTimingFunction = '';
              setCarouselnumMax();
            }, 500);
            containerRef.current.style.transitionDuration = '0.5s';
            containerRef.current.style.transitionProperty = 'all';
            containerRef.current.style.transitionTimingFunction = 'ease-in-out';
            setCarouselnum(-1);
          } else {
            containerRef.current.style.transitionDuration = '0.5s';
            containerRef.current.style.transitionProperty = 'all';
            containerRef.current.style.transitionTimingFunction = 'ease-in-out';
            setCarouselnum(-1);
          }
        }}
        className="absolute z-50 w-13 h-13 bg-pre-button left-91 top-159 focus:outline-none"
      />
      <div ref={containerRef} className="relative">
        <ul className="absolute w-700 ">
          <li className="w-screen float-left">
            <img className="h-370 " alt="img" src={imgArr[imgArr.length - 1]} />
          </li>
          {imgArr.map((img, i) => (
            <li key={i} className="w-screen float-left">
              <img alt={img} key={i} className="h-370 " src={img} />
            </li>
          ))}
          <li className="w-screen float-left">
            <img alt="img" src={imgArr[0]} className="h-370 " />
          </li>
        </ul>
      </div>
      <button
        onClick={() => {
          if (carouselNumber === imgArr.length) {
            setTimeout(() => {
              containerRef.current.style.transition = '';
              containerRef.current.style.transitionDuration = '';
              containerRef.current.style.transitionProperty = '';
              containerRef.current.style.transitionTimingFunction = '';
              setCarouselnumMin();
            }, 500);
            containerRef.current.style.transitionDuration = '0.5s';
            containerRef.current.style.transitionProperty = 'all';
            containerRef.current.style.transitionTimingFunction = 'ease-in-out';
            setCarouselnum(+1);
          } else {
            containerRef.current.style.transitionDuration = '0.5s';
            containerRef.current.style.transitionProperty = 'all';
            containerRef.current.style.transitionTimingFunction = 'ease-in-out';
            setCarouselnum(+1);
          }
        }}
        className="absolute right-0 w-13 h-13 bg-next-button right-91 top-159 focus:outline-none"
      />
    </div>
  );

  function setCarouselnum(num) {
    dispatch(setCarousel(num));
  }

  function setCarouselnumMin() {
    dispatch(setCarouselMin());
  }

  function setCarouselnumMax() {
    dispatch(setCarouselMax());
  }
};

export default Carousel;
