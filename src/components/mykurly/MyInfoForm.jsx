import React, { useRef, useState } from 'react';
import CheckBox from '../signup/CheckBox';
import FormInput from '../signup/FormInput';
import IdInput from '../signup/IdInput';
import InputDate from '../signup/InputDate';
import InputGender from '../signup/InputGender';
import PassInput from '../signup/PassInput';
import SignupButton from '../signup/SignupButton';
import SignupModal from '../signup/SignupModal';

const MyInfoForm = () => {
  const formTitle = 'pb-14 border-b-2 border-solid border-kg-400 font-medium text-r-24';
  const regForm = 'text-r-1.4 mt-4';
  const regTitle = 'text-left align-top pt-7 ';
  const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
  const subText = 'text-r-1.2 text-gray-600';
  const secesstBtn = 'border border-kp-600 mr-4 text-kp-600 w-48 h-20 rounded-md';
  const infoBtn = 'bg-kp-600 text-white w-48 h-20 rounded-md';
  const borderBottom = 'border-b border-solid border-kg-400';

  const [validPass1, setValidPass1] = useState(false);
  const [validPass2, setValidPass2] = useState(false);
  const [validPass3, setValidPass3] = useState(false);
  const [validRePass, setValidRePass] = useState(false);

  const [gender, setGender] = useState('none');

  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);
  const [info, setInfo] = useState(false);
  const [sns, setSns] = useState(false);
  const [email, setEmail] = useState(false);
  const [age, setAge] = useState(false);

  const [signup, setSignup] = useState(false);
  const [modalValue, setModalValue] = useState('');

  const formRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const agree1Ref = useRef();
  const agree2Ref = useRef();
  const infoRef = useRef();
  const snsRef = useRef();
  const emailRef2 = useRef();
  const ageRef = useRef();

  return (
    <div className="w-r-85 h-full mt-20 mb-14 font-normal">
      <h1 className={formTitle}>개인 정보 수정</h1>
      <form className={regForm} onSubmit={onSubmit} ref={formRef} autoComplete="off">
        <input style={{ display: 'none' }} aria-hidden="true" />
        <input type="password" style={{ display: 'none' }} aria-hidden="true" />
        <table className="ml-auto mr-auto">
          <colgroup>
            <col width="160px" />
          </colgroup>
          <tbody>
            <tr>
              <IdInput readOnly={true} />
            </tr>
            <PassInput
              state={[validPass1, validPass2, validPass3, validRePass]}
              setState={[setValidPass1, setValidPass2, setValidPass3, setValidRePass]}
              info={true}
            />
            <tr>
              <FormInput name="name" placeholder="이름을 입력해주세요" inFo={true}>
                이름
              </FormInput>
            </tr>
            <tr>
              <FormInput
                name="email"
                placeholder="예: marketkurly@kurly.com"
                ref={emailRef}
                inFo={true}
              >
                이메일
              </FormInput>
              <td>
                <SignupButton onClick={clickButton}>중복확인</SignupButton>
              </td>
            </tr>
            <tr>
              <FormInput
                name="phone"
                placeholder="숫자만 입력해주세요"
                ref={phoneRef}
                onChange={checkPhone}
                inFo={true}
              >
                휴대폰
              </FormInput>
              <td>
                <SignupButton onClick={clickButton}>다른 번호인증</SignupButton>
              </td>
            </tr>
            <tr>
              <th className={regTitle}>성별</th>
              <td className="py-4">
                <InputGender
                  id="man"
                  name="gender"
                  onChange={e => setGender(e.target.id)}
                  state={gender}
                >
                  남자
                </InputGender>
                <InputGender
                  id="woman"
                  name="gender"
                  onChange={e => setGender(e.target.id)}
                  state={gender}
                >
                  여자
                </InputGender>
                <InputGender
                  id="none"
                  name="gender"
                  onChange={e => setGender(e.target.id)}
                  state={gender}
                >
                  선택안함
                </InputGender>
              </td>
              <td></td>
            </tr>
            <tr>
              <th className={regTitle}>생년월일</th>
              <td className="py-4">
                <div className={regInput}>
                  <InputDate name="birthY" placeholder="YYYY" onChange={checkBirth} />
                  <InputDate name="birthM" placeholder="MM" onChange={checkBirth} />
                  <InputDate name="birthD" placeholder="DD" onChange={checkBirth} />
                </div>
              </td>
              <td></td>
            </tr>
            <tr>
              <th className={`${regTitle} ${borderBottom}`}>선택약관동의</th>
              <td colSpan="2" className={borderBottom}>
                <CheckBox
                  id="agree2"
                  state={agree2}
                  ref={agree2Ref}
                  onChange={() => setAgree2(!agree2)}
                >
                  개인정보 수집·이용 동의 <span className="sub">(선택)</span>
                </CheckBox>
                <span>약관보기</span>
              </td>
            </tr>
            <tr>
              <th className={regTitle}>이용약관동의</th>
              <td className="py-4" colSpan="2">
                <CheckBox id="info" state={info} ref={infoRef} onChange={onSnsAll}>
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
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="3" className="text-center pt-16">
                <button className={secesstBtn} onClick={secession}>
                  탈퇴하기
                </button>
                <button type="submit" className={infoBtn}>
                  회원정보수정
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
      <SignupModal modalIsOpen={signup} closeModal={closeModal} value={modalValue} />
    </div>
  );

  function secession() {}

  function clickButton(params) {}

  function onSnsAll(e) {
    setInfo(!info);
    setSns(!info);
    setEmail(!info);
  }

  function onSubmit(e) {}

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
  function closeModal() {
    setSignup(false);
  }
};

export default MyInfoForm;
