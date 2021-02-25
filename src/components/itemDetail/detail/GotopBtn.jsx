import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const buttonTopStyle =
  'w-p-56 h-p-56 border-gray-300 border-2 rounded-50-p text-6xl text-gray-600 hover:bg-gray-100 duration-300 focus:outline-0';

const GotopBtn = () => {
  // 버튼 렌더링 상태관리
  const [topButton, setTopButton] = useState(false);

  // window scroll이 1000 이상으로 내려갔을때만 렌더링
  const btnRender = useCallback(() => {
    if (window.pageYOffset > 1100) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  }, []);

  // 버튼 클릭시에 맨 위로 가는 함수
  const scrollTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', btnRender);
    return () => {
      window.removeEventListener('scroll', btnRender);
    };
  }, [btnRender]);

  return (
    topButton && (
      <div className="fixed bottom-11 right-10 ">
        <button className={buttonTopStyle} onClick={scrollTop}>
          <AiOutlineArrowUp className="inline-block" />
        </button>
      </div>
    )
  );
};
export default GotopBtn;
