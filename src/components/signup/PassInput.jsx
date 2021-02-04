import React, { useRef, useState } from 'react';

const regTitle = 'font-bold text-left align-top pt-7 ';
const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
const subText = 'text-r-1.2 text-gray-600';
const formButton =
  'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';

const PassInput = ({ setValidRePass }) => {
  const [pass, setPass] = useState('');
  const passSub = useRef();

  const [validPass1, setValidPass1] = useState(false);
  const [validPass2, setValidPass2] = useState(false);
  const [validPass3, setValidPass3] = useState(false);

  return (
    <>
      <th className={regTitle}>
        비밀번호<span className="text-formStar">*</span>
      </th>
      <td className="py-4" colSpan="2">
        <input
          type="password"
          name="password"
          className={regInput}
          onChange={onChangePass}
          onFocus={onFocusPass}
          placeholder="비밀번호를 입력해주세요"
        />
        <div className="hidden" ref={passSub}>
          <p className={`${subText} ${validPass1 ? 'text-green-700' : 'text-red-800'}`}>
            · 10자 이상 입력
          </p>
          <p className={`${subText} ${validPass2 ? 'text-green-700' : 'text-red-800'}`}>
            · 영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합
          </p>
          <p className={`${subText} ${validPass3 ? 'text-green-700' : 'text-red-800'}`}>
            · 동일한 숫자 3개 이상 연속 사용 불가
          </p>
        </div>
      </td>
    </>
  );
  function onFocusPass() {
    passSub.current.className = 'block';
  }

  function onChangePass(e) {
    setPass(e.target.value);
    setValidRePass(false);
    var pwRegExp1 = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
    var pwRegExp2 = /(\w)\1\1/;

    e.target.value.length >= 9 ? setValidPass1(true) : setValidPass1(false);
    pwRegExp1.test(e.target.value) ? setValidPass2(true) : setValidPass2(false);
    pwRegExp2.test(e.target.value) ? setValidPass3(false) : setValidPass3(true);
  }
};

export default PassInput;
