import React, { useRef, useState } from 'react';

const regTitle = 'font-bold text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';
const formButton =
  'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';

const IdInput = () => {
  const [id, setId] = useState('');
  const idSub = useRef();

  const [validId1, setValidId1] = useState(false);
  const [validId2, setValidId2] = useState(false);

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
          onChange={onChangeId}
          onFocus={onFocusId}
          placeholder="6자 이상의 영문 혹은 영문과 숫자를 조합"
          ref={idSub}
          state={validId1}
        />
        <div className="hidden" ref={idSub}>
          <p className={`${subText} ${validId1 ? 'text-green-700' : 'text-red-800'}`}>
            · 6자 이상의 영문 혹은 영문과 숫자를 조합
          </p>
          <p className={`${subText} ${validId2 ? 'text-green-700' : 'text-red-800'}`}>
            · 아이디 중복확인
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

  function onChangeId(e) {
    setId(e.target.value);
    const idReg = /^[a-z]+[a-z0-9]{5,19}$/g;

    idReg.test(id) ? setValidId1(true) : setValidId1(false);
  }
};

export default IdInput;
