import React, { useRef } from 'react';

const regTitle = 'font-bold text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';
const formButton =
  'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';

const IdInput = ({ state: [validId1, validId2], setState: [setValidId1, setValidId2] }) => {
  const idSub = useRef();

  return (
    <>
      <th className={regTitle}>
        아이디
        <span className="text-formStar">*</span>
      </th>
      <td className="py-4">
        <input
          type="text"
          name="uid"
          className={regInput}
          onChange={checkId}
          onFocus={onFocusId}
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
        />
        <div className="hidden" ref={idSub}>
          <p className={`${subText} ${validId1 ? 'text-green-700' : 'text-red-800'}`}>
            {validId1 ? '✓' : '✕'} 6자 이상의 영문 혹은 영문과 숫자를 조합
          </p>
          <p className={`${subText} ${validId2 ? 'text-green-700' : 'text-red-800'}`}>
            {validId2 ? '✓' : '✕'}아이디 중복확인
          </p>
        </div>
      </td>
      <td className="align-baseline pt-3.5">
        <button className={formButton}>중복확인</button>
      </td>
    </>
  );
  function onFocusId() {
    idSub.current.className = 'block';
  }

  function checkId(e) {
    const { value } = e.target;
    var idReg = /^[a-z]+[a-z0-9]{5,19}$/g;

    idReg.test(value) ? setValidId1(true) : setValidId1(false);
  }
};

export default IdInput;