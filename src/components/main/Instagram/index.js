import { useEffect } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const Instagram = ({ title, subtitle }) => {
  let cur = 0;
  let onAnimate = false;
  const containerRef = useRef(null);
  const prevButtonRef = useRef(null);
  const nextButtonRef = useRef(null);

  useEffect(() => {
    containerRef.current.style.transitionDuration = '0.5s';
    containerRef.current.style.transitionProperty = 'all';
    containerRef.current.style.transitionTimingFunction = 'ease-in-out';
  });

  const imgArr = [
    [
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/145829497_429910031618977_2686700364585205332_n.jpg?_nc_cat=101&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-WkuqU3BZCYAX9V-8cf&_nc_oc=AQma5Jem99_iE8KN-5ZeuW8WTFP9Ffa0d88we6liTpfSpVtG-ZvhHI2xOFxZeupMS-Q&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=70036b1b024889031d3db2652ad738af&oe=6042CF55',
    ],

    [
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/128220068_196694071941486_3097690952273694776_n.jpg?_nc_cat=107&ccb=2&_nc_sid=8ae9d6&_nc_ohc=3ZibqS_Ls3wAX8YmxoY&_nc_oc=AQl7_n_3ylMz59Z8AQmnb9xgnqN2yp4rsUkZw6LHXgIs51RD_2WHmDuB-TJGGSzqd5g&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=e411049f99cfb18ad44fb26821556012&oe=6043D535',
    ],

    [
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/126878305_1760178970816236_6835341633307214033_n.jpg?_nc_cat=109&ccb=2&_nc_sid=8ae9d6&_nc_ohc=6TbgCDPYO9IAX873UxT&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=bf4208964e0321f7b15f31c39b95b9c1&oe=60434F39',
    ],

    [
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/129722677_200004505003591_6157755695462520982_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-ovGINGcSZAAX-K96WY&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=5a26c8b59de208e0b78128c51b6f1efe&oe=604340EC',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/129722677_200004505003591_6157755695462520982_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-ovGINGcSZAAX-K96WY&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=5a26c8b59de208e0b78128c51b6f1efe&oe=604340EC',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/129722677_200004505003591_6157755695462520982_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-ovGINGcSZAAX-K96WY&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=5a26c8b59de208e0b78128c51b6f1efe&oe=604340EC',
      'https://scontent-nrt1-1.cdninstagram.com/v/t51.29350-15/129722677_200004505003591_6157755695462520982_n.jpg?_nc_cat=104&ccb=2&_nc_sid=8ae9d6&_nc_ohc=-ovGINGcSZAAX-K96WY&_nc_ht=scontent-nrt1-1.cdninstagram.com&oh=5a26c8b59de208e0b78128c51b6f1efe&oe=604340EC',
    ],
  ];

  return (
    <div>
      <div className="container h-auto">
        <Link
          to=""
          className="block font-bold text-r-2.8 text-center pt-r-7.9 pb-r-3.5"
        >
          인스타그램 고객 후기
        </Link>
        <div className="relative">
          <button
            onClick={(e) => prevButton(e)}
            style={{ display: 'none' }}
            ref={prevButtonRef}
            className="absolute z-50 w-r-6 h-r-6 bg-r-6 bg-sm-pre-button left-r--3 top-r-5.75 focus:outline-none"
          />
          <div className="overflow-hidden">
            <ul ref={containerRef} className="w-r-735">
              {imgArr.map((imgs) => (
                <li className="w-r-105 float-left">
                  {imgs.map((img) => (
                    <div className="inline-block ">
                      <Link to>
                        <img className="h-r-17.5 w-r-17.5" alt="" src={img} />
                      </Link>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
          <button
            onClick={(e) => nextButton(e)}
            ref={nextButtonRef}
            className="z-50 absolute w-r-6 h-r-6 bg-r-6 bg-sm-next-button right-r--3 top-r-5.75 focus:outline-none"
          />
        </div>
        <div className="pt-16 pb-40 font-bold text-r-1.6 leading-10 text-center">
          <span className="block font-normal text-kmi-100">
            더 많은 고객 후기가 궁금하다면?
          </span>
          <Link to="" className="font-bold">
            @marketkurly_regram
          </Link>
        </div>
      </div>
    </div>
  );

  function prevButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === 1) {
      containerRef.current.style.transform = `translateX(-${
        (cur - 1) * 1050
      }px)`;
      e.target.disabled = true;
      e.target.style.display = 'none';
    } else {
      nextButtonRef.current.disabled = false;
      nextButtonRef.current.style.display = '';
      containerRef.current.style.transform = `translateX(-${
        (cur - 1) * 1050
      }px)`;
    }
    --cur;

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }

  function nextButton(e) {
    if (onAnimate) return;
    onAnimate = true;
    if (cur === imgArr.length - 2 && imgArr[imgArr.length - 1].length !== 6) {
      containerRef.current.style.transform = `translateX(-${
        cur * 1050 + 175 * imgArr[imgArr.length - 1].length
      }px)`;
      e.target.style.display = 'none';
      e.target.disabled = true;
    } else if (cur === imgArr.length - 2) {
      containerRef.current.style.transform = `translateX(-${
        (cur + 1) * 1050
      }px)`;
      e.target.style.display = 'none';
      e.target.disabled = true;
    } else {
      containerRef.current.style.transform = `translateX(-${
        (cur + 1) * 1050
      }px)`;
      prevButtonRef.current.disabled = false;
      prevButtonRef.current.style.display = '';
    }

    ++cur;

    setTimeout(() => {
      onAnimate = false;
    }, 500);
  }
};

export default Instagram;
