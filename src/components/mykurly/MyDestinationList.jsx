import React from 'react';
import MyKurlyHeader from './MyKurlyHeader';
import MyKurlyCategory from './MyKurlyCategory';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiPencil } from 'react-icons/bi';
import RoundCheckBox from './RoundCheckBox';
const MyDestinationList = () => {
  return (
    <>
      <MyKurlyHeader />
      <main className="container h-full box-content clear-fix">
        <MyKurlyCategory />
        <MyDestinationBlock />
      </main>
    </>
  );
};

const MyDestinationBlock = () => {
  return (
    <div className="float-left align-middle w-r-85 h-full mt-20 mb-6 px-12 pb-32 box-border">
      <h1 className="a11y-hidden">배송지 확인</h1>
      <div className="border-b-2 border-kg-300 pb-10 mb-8">
        <h2 className=" inline-block font-medium align-middle mr-6 text-r-2.4">배송지 관리</h2>
        <p className="inline-block mr-96 align-middle text-r-1.4 text-kg-150">
          배송지에 따라 상품 정보가 달라질 수 있습니다.
        </p>
        <div className="inline-block  align-middle w-60 ">
          <button onClick={onClick} className="w-full text-left text-r-1.6 font-medium ">
            <AiOutlinePlus className="ml-10 mr-4 inline-block" />
            <span>새 배송지 추가</span>
          </button>
        </div>
      </div>
      <div>
        <form>
          <fieldset>
            <ul>
              <li>
                <ul className="text-r-1.4 pb-8 border-b text-kg-400 border-kg-300 box-border leading-none">
                  <li className="w-16 text-center inline-block align-middle">선택</li>
                  <li className="w-p-370 text-center inline-block">주소</li>
                  <li className="w-32 text-center inline-block">받으실 분</li>
                  <li className="w-52 text-center inline-block">연락처</li>
                  <li className="w-48 text-center inline-block">배송유형</li>
                  <li className="w-16 text-center inline-block">수정</li>
                </ul>
              </li>
              <MyDestinationListItem />
            </ul>
          </fieldset>
        </form>
      </div>
    </div>
  );
  function onClick() {
    const width = 500;
    const height = 450;
    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(
      '/kakao/destination',
      '_blank',
      `height=${height},width=${width}, top=${top}, left=${left}`,
    );
  }
};

const MyDestinationListItem = () => {
  const [form, setform] = useState({
    checked: false,
    checkLabel: '',
    modal: false,
  });

  const checkForms = [
    { id: 'dtn1', value: 'radio1' },
    { id: 'dtn2', value: 'radio2' },
    { id: 'dtn3', value: 'radio3' },
    { id: 'dtn4', value: 'radio4' },
    { id: 'dtn5', value: 'radio5' },
  ];
  return (
    <>
      {checkForms.map((checkform, index) => (
        <li key={`destination_${index}`} className="h-40 border-b border-kg-80 box-border">
          <ul className="text-r-1.4 ">
            <li className="text-center inline-block leading-r-10">
              <RoundCheckBox
                id={checkform.id}
                className="w-16"
                value={`radio${index}`}
                onClick={onClickCheckBox}
                onChange={onChangeInput}
                form={form}
                closeModal={closeModal}
              />
            </li>
            <li className="w-p-370 px-8 inline-block align-middle">
              <p className="text-r-1.6">
                {`${index}` === form.checkLabel ? (
                  <span className="block text-r-1.2 w-r-7.9 bg-gray-100 rounded-full px-3 py-2 leading-none">
                    기본배송지
                  </span>
                ) : (
                  ''
                )}
                서울시 도봉로 136길 111
              </p>
            </li>
            <li className="w-32 text-center inline-block align-middle leading-r-10">정세영</li>
            <li className="w-52 text-center inline-block align-middle leading-r-10">
              010-8331-4362
            </li>
            <li className="w-48 text-kp-600 text-center inline-block align-middle leading-r-10">
              샛별배송
            </li>
            <li className="w-16 text-center inline-block align-middle leading-r-10">
              <BiPencil className="w-16 text-r-2.8 text-kg-80 cursor-pointer" onClick={onClick} />
            </li>
          </ul>
        </li>
      ))}
    </>
  );
  function onClick() {
    const width = 500;
    const height = 450;
    var left = Math.ceil((window.screen.width - width) / 2);
    var top = Math.ceil((window.screen.height - height) / 2);

    window.open(
      //배송지 id를 같이 보내줄예정
      '/shop/mypage/desination/modify_form/',
      '_blank',
      `height=${height},width=${width}, top=${top}, left=${left}`,
    );
  }

  function onClickCheckBox(e) {
    setform({
      ...form,
      checkLabel: e.currentTarget.htmlFor,
      modal: !form.modal,
    });
  }
  function onChangeInput(e) {
    setform({
      ...form,
      checked: e.target.checked,
    });
  }
  function closeModal() {
    setform({
      ...form,
      modal: false,
    });
  }
};

export default MyDestinationList;
