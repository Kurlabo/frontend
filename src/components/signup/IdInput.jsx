import React, { useRef } from 'react';
import { useEffect } from 'react';
import SignupButton from './SignupButton';

const regTitle = 'font-bold text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';

const IdInput = ({ state, setState, readOnly }) => {
  const idInput = useRef();
  const idSub = useRef();

  return (
    <>
      <th className={regTitle}>
        아이디
        {!readOnly && <span className="text-formStar">*</span>}
      </th>
      <td className="py-4">
        <input
          type="text"
          name="uid"
          className={regInput}
          ref={idInput}
          onChange={readOnly ? '' : checkId}
          onFocus={readOnly ? '' : onFocusId}
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          autoComplete="uid"
          readOnly={readOnly}
        />
        {readOnly ? (
          <></>
        ) : (
          <div className="hidden" ref={idSub}>
            <p className={`${subText} ${state.validId1 ? 'text-green-700' : 'text-red-800'}`}>
              {state.validId1 ? '✓' : '✕'} 6자 이상의 영문 혹은 영문과 숫자를 조합
            </p>
            <p className={`${subText} ${state.validId2 ? 'text-green-700' : 'text-red-800'}`}>
              {state.validId2 ? '✓' : '✕'}아이디 중복확인
            </p>
          </div>
        )}
      </td>
      {readOnly ? (
        <></>
      ) : (
        <td className="align-baseline pt-3.5">
          <SignupButton>중복확인</SignupButton>
        </td>
      )}
    </>
  );
  function onFocusId() {
    idSub.current.className = 'block';
  }

  function checkId(e) {
    const { value } = e.target;
    var idReg = /^[a-z]+[a-z0-9]{5,19}$/g;

    idReg.test(value) ? setState.setValidId1(true) : setState.setValidId1(false);
  }
};

export default IdInput;
