import React, { useRef, useState } from 'react';
import { BiSearch, ImRadioChecked2 } from 'react-icons/fa';

const Signup = () => {
  // const divFlex = 'flex flex-row flex-nowrap justify-center items-center py-4';
  const formTitle = 'pt-28 font-black text-5xl text-center';
  const regForm = 'text-r-1.4';
  const regTitle = 'font-bold text-left align-top pt-7 ';
  const regInput = 'border-solid border border-inputGray w-r-32 h-16 px-6';
  const subText = 'text-r-1.2 text-gray-600';
  // const regInputDate = 'border-solid border border-inputGray w-formInput h-16 px-6';
  const formButton =
    'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';
  const formTdButton =
    'w-formInput font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';
  const formRadio = 'w-10 h-10 border-inputRadio mr-5';
  const submitBtn = 'bg-kp-600 text-white w-96 h-20 rounded-md';
  const radioLabel = { verticalAlign: 'super' };
  // const birthDiv = 'border-solid border border-inputGray';

  const [id, setId] = useState('');
  const [pass, setPass] = useState('');
  const [repass, setrePass] = useState('');

  const [validId1, setValidId1] = useState(false);
  const [validId2, setValidId2] = useState(false);

  const [validPass1, setValidPass1] = useState(false);
  const [validPass2, setValidPass2] = useState(false);
  const [validPass3, setValidPass3] = useState(false);

  const [validRePass, setValidRePass] = useState(false);

  const idSub = useRef();
  const passSub = useRef();
  const rePassSub = useRef();

  const onFocusId = () => {
    idSub.current.className = 'block';
  };
  const onFocusPass = () => {
    passSub.current.className = 'block';
  };
  const onFocusRePass = () => {
    rePassSub.current.className = 'block';
  };

  const onChangeId = e => {
    setId(e.target.value);
    var idReg = /^[a-z]+[a-z0-9]{5,19}$/g;

    idReg.test(id) ? setValidId1(true) : setValidId1(false);
  };

  const onChangePass = e => {
    setPass(e.target.value);
    setValidRePass(false);
    var pwRegExp1 = /^[~`!@#$%^&*()_+=[\]\{}|;':",.\/<>?a-zA-Z0-9-]+$/;
    var pwRegExp2 = /(\w)\1\1/;

    e.target.value.length >= 9 ? setValidPass1(true) : setValidPass1(false);
    pwRegExp1.test(e.target.value) ? setValidPass2(true) : setValidPass2(false);
    pwRegExp2.test(e.target.value) ? setValidPass3(false) : setValidPass3(true);
  };

  const onChangeRePass = e => {
    setrePass(e.target.value);
    pass && pass === e.target.value ? setValidRePass(true) : setValidRePass(false);
  };

  const onSubmit = e => {
    e.preventDefault();
    return validId1 && validId2 && validPass1 && validPass2 && validPass3 && validRePass
      ? true
      : false;
  };

  return (
    <div className="w-r-64 ml-auto mr-auto pb-48">
      <h1 className={formTitle}>회원가입</h1>
      <p className="text-right pt-9 pb-4 ">
        <span className="text-formStar">*</span>
        필수입력사항
      </p>
      <form className={regForm} onSubmit={onSubmit}>
        <table className="ml-auto mr-auto">
          <colgroup>
            <col width="160px" />
          </colgroup>
          <tbody>
            <tr>
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
            </tr>
            <tr>
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
            </tr>
            <tr>
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
                />
                <div className="hidden" ref={rePassSub}>
                  <p className={`${subText} ${validRePass ? 'text-green-700' : 'text-red-800'}`}>
                    동일한 비밀번호를 입력해주세요.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <th className={regTitle}>
                이름<span className="text-formStar">*</span>
              </th>
              <td className="py-4" colSpan="2">
                <input type="text" name="name" className={regInput} />
              </td>
            </tr>
            <tr>
              <th className={regTitle}>
                이메일<span className="text-formStar">*</span>
              </th>
              <td className="py-4">
                <input type="text" name="email" className={regInput} />
              </td>
              <td>
                <button className={formButton}>중복확인</button>
              </td>
            </tr>
            <tr>
              <th className={regTitle}>
                휴대폰<span className="text-formStar">*</span>
              </th>
              <td className="py-4" colSpan="2">
                <input type="text" name="phone" className={regInput} />
              </td>
            </tr>
            <tr>
              <th className={regTitle}>
                주소<span className="text-formStar">*</span>
              </th>
              <td className="py-4">
                <button className={formTdButton}>
                  <BiSearch />
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
                    id="gender1"
                    name="gender"
                    value="man"
                    className={formRadio}
                  />
                  <label htmlFor="gender1" className="align-top">
                    남자
                  </label>
                </div>
                <div className="w-1/3 inline-block">
                  <input
                    type="radio"
                    id="gender2"
                    name="gender"
                    value="woman"
                    className={formRadio}
                  />
                  <ImRadioChecked2 />
                  <label htmlFor="gender2" className="align-top">
                    여자
                  </label>
                </div>
                <div className="w-1/3 inline-block">
                  <input
                    type="radio"
                    id="gender3"
                    name="gender"
                    value="none"
                    className={formRadio}
                  />
                  <label htmlFor="gender3" className="align-top">
                    선택안함
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
                  />
                  <input
                    type="text"
                    name="birthM"
                    className="w-1/3 mt-3 text-center"
                    placeholder="MM"
                  />
                  <input
                    type="text"
                    name="birthD"
                    className="w-1/3 mt-3 text-center"
                    placeholder="DD"
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
                <div className="py-4">
                  <input type="radio" id="allTerms" className={formRadio} />
                  <label htmlFor="allTerms" style={radioLabel}>
                    전체약관동의
                  </label>
                  <p className={`${subText} text-1.2 pl-14 -mt-4`}>
                    선택항목에 동의하지 않은 경우도 회원가입 및 일반적인 서비스를 이용할 수
                    있습니다.
                  </p>
                </div>
                <div className="py-4">
                  <input type="radio" id="agree1" className={formRadio} />
                  <label htmlFor="agree1" style={radioLabel}>
                    이용약관 동의<span className="sub">(필수)</span>
                  </label>
                </div>
                <div className="py-4">
                  <input type="radio" id="agree2" className={formRadio} />
                  <label htmlFor="agree2" style={radioLabel}>
                    개인정보처리방침 동의<span className="sub">(필수)</span>
                  </label>
                </div>
                <div className="py-4">
                  <input type="radio" id="agree3" className={formRadio} />
                  <label htmlFor="agree3" style={radioLabel}>
                    개인정보처리방침 동의<span className="sub">(선택))</span>
                  </label>
                </div>
                <div className="py-4">
                  <input type="radio" id="allTerms" className={formRadio} />
                  <label htmlFor="allTerms" style={radioLabel}>
                    무료배송, 할인쿠폰 등 혜택/정보 수신 동의<span className="sub">(선택))</span>
                  </label>
                  <div className="pl-14">
                    <input type="radio" id="contact1" name="method" value="sms" className="mr-5" />
                    <label htmlFor="contact1" className="pr-32">
                      SMS
                    </label>
                    <input
                      type="radio"
                      id="contact2"
                      name="method"
                      value="email"
                      className="mr-5"
                    />
                    <label htmlFor="contact2">이메일</label>
                    <p className={`${subText} text-1.2`}>
                      <span className="text-kp-600">
                        동의 시 한 달간 [5% 적립] + [무제한 무료배송]
                      </span>
                      <span className="sub">(첫 주문 후 적용)</span>
                    </p>
                  </div>
                </div>
                <div>
                  <input type="radio" id="age" className={formRadio} />
                  <label htmlFor="age" style={radioLabel}>
                    본인은 만 14세 이상입니다. <span className="sub">(필수)</span>
                  </label>
                </div>
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
};

export default Signup;
