import React, { useEffect, useRef, useState } from 'react';
import MyKurlyCategory from './MyKurlyCategory';
import MyKurlyHeader from './MyKurlyHeader';

const submitBtnStyle = 'w-r-20 h-16 my-6 mx-auto text-r-1.3 text-center pt-4 select-none ';

const MyKurlyTemplate = ({ children }) => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        {children}
      </main>
    </>
  );
};

const MyReviewRegister = () => {
  const title = useRef();
  const textArea = useRef();

  const [isInputAll, setisInputAll] = useState(false);
  const [inputState, setInputState] = useState({
    title: '',
    textArea: '',
  });

  useEffect(() => {
    if (inputState.title && inputState.textArea) {
      setisInputAll(true);
    }
    if (!(inputState.title && inputState.textArea)) {
      setisInputAll(false);
    }
  }, [inputState]);

  return (
    <MyKurlyTemplate>
      <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
        <div className="border-b-2 border-kg-300 pb-10 mb-8">
          <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">후기 작성</h2>
        </div>
        <div className="flex items-center mb-8">
          {/* 클릭한 상품에 해당하는 img */}
          <img
            className=" w-r-8.8 mx-8"
            src="https://img-cf.kurly.com/shop/data/goods/1581052214202s0.jpg"
            alt=""
          />
          {/* 클릭한 상품에 해당하는 name */}
          <p className="text-r-1.7">[은하수산] 문어 슬라이스 120g(냉장)</p>
        </div>
        <form className="border-t-2 border-gray-200">
          <table width="100%">
            <tbody className="text-r-1.2 text-gray-700">
              <tr className="h-40 border-b-2 border-gray-200">
                <th className="font-normal text-center w-44 bg-gray-50">제목</th>
                <td className="py-6 pl-4">
                  <input
                    ref={title}
                    onChange={onChangeTitle}
                    type="text"
                    className="block w-full h-12 px-2 border border-gray-300 focus:outline-0 focus:border-kdp-300"
                  />
                </td>
              </tr>
              <tr className=" h-24 border-b-2 border-gray-200">
                <th className="font-normal text-center w-44 bg-gray-50">후기작성</th>
                <td className="py-6 pl-4">
                  <textarea
                    ref={textArea}
                    onChange={onChangeTextArea}
                    className="border border-gray-300 focus:outline-0 w-full h-r-45 p-2 focus:border-kdp-300"
                    name="contents"
                    cols="30"
                    rows="10"
                  ></textarea>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            onClick={onClickSubmit}
            className={
              submitBtnStyle +
              (isInputAll
                ? ' bg-klp-600 text-white cursor-pointer'
                : ' bg-white border border-gray-300 text-gray-300')
            }
          >
            등록하기
          </div>
        </form>
      </div>
    </MyKurlyTemplate>
  );

  function onClickSubmit() {
    if (!isInputAll) return;
    console.log('리뷰 작성 post api 요청~!!!!!!');
  }

  function onChangeTitle(e) {
    setInputState(state => ({
      ...state,
      title: e.target.value,
    }));
  }

  function onChangeTextArea(e) {
    setInputState(state => ({
      ...state,
      textArea: e.target.value,
    }));
  }
};

export default MyReviewRegister;
