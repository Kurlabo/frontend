import React, { useRef, useState } from 'react';

const regTitle = 'font-bold text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';
const formButton =
  'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';

const RePassInput = ({ pass }) => {
  const [repass, setrePass] = useState('');
  const rePassSub = useRef();
  const [validRePass, setValidRePass] = useState(false);

  return (
    <>
      <th className={regTitle}>
        비밀번호 확인<span className="text-formStar">*</span>
      </th>
      <td className="py-4" colSpan="2">
        <input
          type="password"
          name="rePass"
          className={regInput}
          onChange={onChangeRePass}
          onFocus={onFocusRePass}
          placeholder="비밀번호를 한번 더 입력해주세요"
        />
        <div className="hidden" ref={rePassSub}>
          <p className={`${subText} ${validRePass ? 'text-green-700' : 'text-red-800'}`}>
            동일한 비밀번호를 입력해주세요.
          </p>
        </div>
      </td>
    </>
  );
  function onFocusRePass() {
    rePassSub.current.className = 'block';
  }
  function onChangeRePass(e) {
    setrePass(e.target.value);
    pass && pass === e.target.value ? setValidRePass(true) : setValidRePass(false);
  }
};

export default RePassInput;
