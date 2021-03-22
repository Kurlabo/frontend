import React, { useRef } from 'react';
import { useState } from 'react';
import axios from '../../../node_modules/axios/index';
import SignupButton from './SignupButton';
import SignupModal from './SignupModal';

const regTitle = 'font-medium text-kg-400 text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';

const IdInput = ({ state, setState, readOnly, u_id }) => {
  const idInput = useRef();
  const idSub = useRef();
  const [checkOverLapId, setCheckOverLapId] = useState();
  const [modalValue, setModalValue] = useState('');
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
          value={readOnly && u_id}
          onChange={readOnly ? () => {} : checkId}
          onFocus={readOnly ? () => {} : onFocusId}
          placeholder={readOnly ? '' : '6자 이상의 영문 혹은 영문과 숫자를 조합'}
          autoComplete="uid"
          readOnly={readOnly}
          onKeyDown={keyPress}
        />
        {readOnly ? (
          <></>
        ) : (
          <div className="hidden" ref={idSub}>
            <p className={`${subText} ${state[0] ? 'text-green-700' : 'text-red-800'}`}>
              {state[0] ? '✓' : '✕'} 6자 이상의 영문 혹은 영문과 숫자를 조합
            </p>
            <p className={`${subText} ${state[1] ? 'text-green-700' : 'text-red-800'}`}>
              {state[1] ? '✓' : '✕'}아이디 중복확인
            </p>
          </div>
        )}
      </td>
      {readOnly ? (
        <></>
      ) : (
        <td className="align-baseline pt-3.5">
          <SignupButton onClick={overlapId}>중복확인</SignupButton>
        </td>
      )}
      <SignupModal modalIsOpen={checkOverLapId} closeModal={closeModal} value={modalValue} />
    </>
  );
  function onFocusId() {
    idSub.current.className = 'block';
  }
  function closeModal() {
    setCheckOverLapId(false);
  }
  function checkId(e) {
    const { value } = e.target;
    var idReg = /^[a-z]+[a-z0-9]{5,19}$/g;

    idReg.test(value) ? setState[0](true) : setState[0](false);
  }
  async function overlapId() {
    try {
      const res = await axios.post('http://3.35.221.9:8080/api/member/signup/checkuid', {
        checkUid: idInput.current.value,
      });
      console.log(res);
      if (res.data === 'EXISTED UID') {
        setState[1](false);
        setCheckOverLapId(true);
        setModalValue('중복된 아이디 입니다.');
      } else {
        setState[1](true);
        setCheckOverLapId(true);
        setModalValue('사용가능한 아이디 입니다.');
      }
    } catch (e) {
      console.log(e);
    }
  }
  function keyPress(e) {
    if (e.keyCode === 13) e.preventDefault();
  }
};

export default IdInput;
