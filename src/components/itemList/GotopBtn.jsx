import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';

const buttonTopStyle =
  'w-24 h-24 border-gray-300 border-2 rounded-50-p text-6xl text-gray-600 hover:bg-gray-100 duration-300 focus:outline-0';

const GotopBtn = () => {
  // 버튼 렌더링 상태관리
  const [topButton, setTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', btnRender);
    console.log('addevent');
    return () => {
      window.removeEventListener('scroll', btnRender);
      console.log('cleanup');
    };
  }, []);

  return (
    topButton && (
      <div className="fixed bottom-8 right-10">
        <button className={buttonTopStyle} onClick={scrollTop}>
          <AiOutlineArrowUp className="inline-block" />
        </button>
      </div>
    )
  );

  // window scroll이 500 이상으로 내려갔을때만 렌더링
  function btnRender() {
    if (window.pageYOffset > 500) {
      setTopButton(true);
    } else {
      setTopButton(false);
    }
  }

  // 버튼 클릭시에 맨 위로 가는 함수
  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
};
export default GotopBtn;
