import React, { useEffect, useRef, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import { RiRadioButtonFill } from 'react-icons/ri';
import { RiCheckboxBlankCircleLine } from 'react-icons/ri';
import CheckBox from './CheckBox';
import FormInput from './FormInput';
import IdInput from './IdInput';
import PassInput from './PassInput';

const Signup = () => {
  const formTitle = 'pt-28 font-black text-5xl text-center';
  const regForm = 'text-r-1.4';
  const regTitle = 'font-bold text-left align-top pt-7 ';
  const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
  const subText = 'text-r-1.2 text-gray-600';
  const formButton =
    'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';
  const formTdButton =
    'w-formInput font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';
  const submitBtn = 'bg-kp-600 text-white w-96 h-20 rounded-md';
  const radioLabel = { verticalAlign: 'super' };
  const formRadioIcon = 'inline-block w-10 h-10 border-inputRadio mr-5 text-kp-600';
  const formRadioIcon2 = `${formRadioIcon} text-inputGray`;

  const [validId1, setValidId1] = useState(false);
  const [validId2, setValidId2] = useState(false);
  const [validPass1, setValidPass1] = useState(false);
  const [validPass2, setValidPass2] = useState(false);
  const [validPass3, setValidPass3] = useState(false);
  const [validRePass, setValidRePass] = useState(false);

  const [gender, setGender] = useState(false);

  const [allagree, setAllAgree] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [info, setInfo] = useState(false);
  const [sns, setSns] = useState(false);
  const [email, setEmail] = useState(false);
  const [age, setAge] = useState(false);

  const formRef = useRef();
  const idSub = useRef();
  const passSub = useRef();
  const rePassRef = useRef();
  const rePassSub = useRef();

  const emailRef = useRef();
  const phoneRef = useRef();

  const yearRef = useRef();
  const monthRef = useRef();
  const dayRef = useRef();

  const agree1Ref = useRef();
  const agree2Ref = useRef();
  const infoRef = useRef();
  const snsRef = useRef();
  const emailRef2 = useRef();
  const ageRef = useRef();

  const setStates = [setAgree1, setAgree2, setInfo, setSns, setEmail, setAge];

  return (
    <div className="w-r-64 ml-auto mr-auto pb-48">
      <h1 className={formTitle}>회원가입</h1>
      <p className="text-right pt-9 pb-4 ">
        <span className="text-formStar">*</span>
        필수입력사항
      </p>
      <form className={regForm} onSubmit={onSubmit} ref={formRef}>
        <table className="ml-auto mr-auto">
          <colgroup>
            <col width="160px" />
          </colgroup>
          <tbody>
            <tr>
              <IdInput state={[validId1, validId2]} setState={[setValidId1, setValidId2]} />
            </tr>
            <PassInput
              state={[validPass1, validPass2, validPass3, validRePass]}
              setState={[setValidPass1, setValidPass2, setValidPass3, setValidRePass]}
            />
            <tr>
              <FormInput name="name" placeholder="이름을 입력해주세요">
                이름
              </FormInput>
            </tr>
            <tr>
              <FormInput name="email" placeholder="예: marketkurly@kurly.com" ref={emailRef}>
                이메일
              </FormInput>
              <td>
                <button className={formButton}>중복확인</button>
              </td>
            </tr>
            <tr>
              <FormInput
                name="phone"
                placeholder="숫자만 입력해주세요"
                ref={phoneRef}
                onChange={checkPhone}
              >
                휴대폰
              </FormInput>
            </tr>
            <tr>
              <th className={regTitle}>
                주소<span className="text-formStar">*</span>
              </th>
              <td className="py-4">
                <button className={formTdButton}>
                  <FiSearch className="inline-block" />
                  주소검색
                </button>
                <input type="text" name="address" />
                <p className={subText}>배송지에 따라 상품 정보가 달라질 수 있습니다.</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <th className={regTitle}>
                성별<span className="text-formStar">*</span>
              </th>
              <td className="py-4">
                <div className="w-1/3 inline-block">
                  <input
                    type="radio"
                    id="man"
                    name="gender"
                    value="man"
                    className="hidden"
                    onChange={e => setGender(e.target.id)}
                  />
                  <label htmlFor="man" style={radioLabel}>
                    {gender === 'man' ? (
                      <RiRadioButtonFill className={formRadioIcon} />
                    ) : (
                      <RiCheckboxBlankCircleLine className={formRadioIcon2} />
                    )}
                    <span className="align-middle">남자</span>
                  </label>
                </div>
                <div className="w-1/3 inline-block">
                  <input
                    type="radio"
                    id="woman"
                    name="gender"
                    value="woman"
                    className="hidden"
                    onChange={e => setGender(e.target.id)}
                  />
                  <label htmlFor="woman" style={radioLabel}>
                    {gender === 'woman' ? (
                      <RiRadioButtonFill className={formRadioIcon} />
                    ) : (
                      <RiCheckboxBlankCircleLine className={formRadioIcon2} />
                    )}
                    <span className="align-middle">여자</span>
                  </label>
                </div>
                <div className="w-1/3 inline-block">
                  <input
                    type="radio"
                    id="none"
                    name="gender"
                    value="none"
                    className="hidden"
                    onChange={e => setGender(e.target.id)}
                  />
                  <label htmlFor="none" style={radioLabel}>
                    {gender === 'none' ? (
                      <RiRadioButtonFill className={formRadioIcon} />
                    ) : (
                      <RiCheckboxBlankCircleLine className={formRadioIcon2} />
                    )}
                    <span className="align-middle">선택안함</span>
                  </label>
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <th className={regTitle}>
                생년월일<span className="text-formStar">*</span>
              </th>
              <td className="py-4">
                <div className={regInput}>
                  <input
                    type="text"
                    name="birthY"
                    className="w-1/3 mt-3 text-center"
                    placeholder="YYYY"
                    onChange={checkBirth}
                  />
                  <input
                    type="text"
                    name="birthM"
                    className="w-1/3 mt-3 text-center"
                    placeholder="MM"
                    onChange={checkBirth}
                  />
                  <input
                    type="text"
                    name="birthD"
                    className="w-1/3 mt-3 text-center"
                    placeholder="DD"
                    onChange={checkBirth}
                  />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <th className={regTitle}>
                이용약관동의<span className="text-formStar">*</span>
              </th>
              <td className="py-4" colSpan="2">
                <CheckBox id="allTerms" state={allagree} onChange={onChangeAll}>
                  전체약관동의
                </CheckBox>
                <CheckBox
                  id="agree1"
                  state={agree1}
                  ref={agree1Ref}
                  onChange={() => setAgree1(!agree1)}
                >
                  이용약관 동의<span className="sub">(필수)</span>
                </CheckBox>
                <CheckBox
                  id="agree2"
                  state={agree2}
                  ref={agree2Ref}
                  onChange={() => setAgree2(!agree2)}
                >
                  개인정보처리방침 동의<span className="sub">(필수)</span>
                </CheckBox>
                <CheckBox id="info" state={info} ref={infoRef} onChange={() => setInfo(!info)}>
                  무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span className="sub">(선택))</span>
                </CheckBox>
                <div className="pl-14">
                  <CheckBox
                    id="sns"
                    state={sns}
                    ref={snsRef}
                    onChange={() => setSns(!sns)}
                    sub={true}
                  >
                    <span className="align-middle">SMS</span>
                  </CheckBox>
                  <CheckBox
                    id="email"
                    state={email}
                    ref={emailRef2}
                    onChange={() => setEmail(!email)}
                    sub={true}
                  >
                    <span className="align-middle">이메일</span>
                  </CheckBox>
                  <p className={`${subText} text-1.2`}>
                    <span className="text-kp-600">
                      동의 시 한 달간 [5% 적립] + [무제한 무료배송]
                    </span>
                    <span className="sub">(첫 주문 후 적용)</span>
                  </p>
                </div>
                <CheckBox id="age" state={age} ref={ageRef} onChange={() => setAge(!age)}>
                  본인은 만 14세 이상입니다. <span className="sub">(필수)</span>
                </CheckBox>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center pt-16">
                <button type="submit" className={submitBtn}>
                  가입하기
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );

  function onChangeAll(e) {
    setAllAgree(e.target.checked);
    [agree1Ref, agree2Ref, infoRef, snsRef, emailRef2, ageRef].forEach((ref, i) => {
      ref.current.checked = e.target.checked;
      setStates[i](e.target.checked);
    });
  }

  function onSubmit(e) {
    e.preventDefault();
    const valid = validId1 && validId2 && validPass1 && validPass2 && validPass3 && validRePass;
    const valid2 = agree1 && agree2 && age;
    if (!valid && !valid2) return false;
    const newUser = { date_of_birth: '' };
    const formData = new FormData(formRef.current);
    for (let [key, value] of formData) {
      if (key === 'birthY' || key === 'birthM' || key === 'birthD')
        newUser['date_of_birth'] += value;
      else newUser[key] = value;
    }
    console.log(newUser);
  }

  function checkPhone(e) {
    const { value } = e.target;
    const lastChar = value.slice(-1);
    if (isNaN(+lastChar) || value.length > 12) {
      e.target.value = value.substring(0, value.length - 1);
    }
  }
  function checkBirth(e) {
    const { name, value } = e.target;
    const lastChar = value.slice(-1);
    const num = name === 'birthY' ? 4 : 2;
    if (isNaN(+lastChar) || value.length > num) {
      e.target.value = value.substring(0, value.length - 1);
    }
  }
};

export default Signup;
