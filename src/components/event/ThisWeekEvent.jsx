import React, { useState } from 'react';
import Loading from '../common/Loading';

const ThisWeekEvent = () => {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="container">
          <div className="mx-auto">
            <img src="/img/eventimg/orangeEvents.webp" alt="event" className="pb-r-1.1" />
            <img
              src="/img/eventimg/060247e600d1b672997082e5e40638bc.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/14f2b1251d2515efb309ab3252735ca2.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/0eaa031f87a0ead6f5cdaabe46531971.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/15f14d21bfbed9bea43516234d22c166.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/22db7ba0804a37ada9dbd73b7e42dc2f.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/290d8229a7445c84755a3961290494cd.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/3367f928644139909d00bf471b12edc8.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/37141ca327bed7defce270c4ecc0325d.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/4327c30466d755963fbfdb18dcb62e80.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/4467d254f0c57005b05371beff3c27ac.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/45b99967fae950803c791fc8eaf24cd1.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/658c6557683c719bcc3d8432701f845b.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/770810b03674aa12b1ac54683ee841aa.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/7be7f5273d72ebf396a8f05c6bfd0ba1.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/7f910e40aa6cabaa4f9c5193556a3062.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/9303d6999d0d1c15508bb2d3f64394fe.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/99db6a092fcd222000235ba966e3a0d2.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/a540e8bf7f86bd508ac839e69822c003.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/a9f9a7f0b47686299a5e0d6efb654b37.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/ad053851433862c1e6903a6610f8166e.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/adb223174e21c38e462605d7e4f4b1d4.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/af2a5d31c81a2a8f2d42531b68213b57.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/c9531047ca0c60f8c7698cab02efa0cd.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/ca56417751f59208b6756cf9b08d9f5e.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img src="/img/eventimg/dellicio.webp" alt="event" className="pb-r-1.1" />
            <img
              src="/img/eventimg/e3cfca111b57318473f0d4e7dd18730f.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/e6a0a91cb64824379737c1354584ad50.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img
              src="/img/eventimg/fdea14e87c56867ac11276214f9f1072.jpg"
              className="pb-r-1.1"
              alt="event"
            />
            <img src="/img/eventimg/heberland.webp" className="pb-r-1.1" alt="event" />
            <img src="/img/eventimg/vesture.webp" className="pb-r-1.1" alt="event" />
          </div>
        </div>
      )}
    </>
  );
};

export default ThisWeekEvent;
