import React, { useState } from 'react';
import { LoginFormStyle } from './Login';
import Input from './Input';
import Title from './Title';
import Button from './Button';
import { Link } from 'react-router-dom';
import Modalform from './Modalform';
import Modal from './Modal';
// import account from '../img/account';

export default function FindId({ findUserId, onSubmit }) {
  const [form, setform] = useState({
    findform: false,
    modal: false,
  });
  const [inputs, setInputs] = useState({
    u_name: '',
    u_email: '',
  });

  const { findform, modal } = form;
  const { u_name, u_email } = inputs;
  return (
    <LoginFormStyle>
      <form onSubmit={onSubmit}>
        <Title>아이디 찾기</Title>
        {!findform ? (
          <>
            <FindIdForm1 onChange={onChange} u_email={u_email} u_name={u_name} />
            <Button type="submit" onClick={onClick1}>
              확인
            </Button>
          </>
        ) : (
          <>
            <FindIdForm2 className="text-center" findUserId={findUserId} />
            {findUserId ? (
              <Button>
                <Link to="/shop/account/signin">로그인하기</Link>
              </Button>
            ) : (
              <Button onClick={onClick2}>아이디 다시 찾기</Button>
            )}
          </>
        )}
      </form>
      {modal ? (
        <Modalform id="modal">
          <Modal closeModal={closeModal} modal={modal} value="이메일형식이 아닙니다" />
        </Modalform>
      ) : (
        ''
      )}
    </LoginFormStyle>
  );

  //INPUT 상태 관리
  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  //버튼클릭 후 이메일 유효성 검사 실행 결과에 따른 모달창 띄우기
  function onClick1() {
    if (u_name) {
      setform({
        ...form,
        findform: u_email && u_name && checkEmail(),
        modal: !checkEmail(),
      });
    } else {
      setform({
        ...form,
        modal: false,
      });
    }
  }

  //이벤트 핸들러 정의
  //UI 변경 상태 관리
  function onClick2() {
    setform({
      ...form,
      findform: false,
    });
  }

  //모달창 닫기
  function closeModal() {
    console.log(form);
    setform({
      ...form,
      modal: false,
    });
  }

  //이메일 유효성 검사
  function checkEmail() {
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    return regExp.test(u_email);
  }
}

function FindIdForm1({ onChange, u_name, u_email }) {
  return (
    <>
      <label className="text-1.2 inline-block pt-1.1 ">
        이름
        <Input
          name="u_name"
          type="text"
          onChange={onChange}
          placeholder="고객님의 이름을 입력해주세요"
          value={u_name}
          required
        />
      </label>
      <label className="text-1.2 inline-block pt-1.1 ">
        이메일
        <Input
          name="u_email"
          onChange={onChange}
          type="text"
          placeholder="가입시 등록하신 이메일 주소를 입력해주세요"
          value={u_email}
        />
      </label>
    </>
  );
}

function FindIdForm2({ findUserId }) {
  return findUserId ? (
    <div className="text-center">
      <img
        className="inline-block w-20"
        src={'https://res.kurly.com/pc/service/member/1908/img_id_find_succsess_v2.png'}
        alt=""
      />
      <p className="text-r-2 text-kp-600 font-semibold pt-2">
        고객님의 <br />
        아이디 찾기가 완료되었습니다!
      </p>
      <span className="text-r-1.2 inline-block pt-5 pb-10">아이디:{findUserId}</span>
    </div>
  ) : (
    <>
      <div className="text-center">
        <img
          className="inline-block w-20 mt-4"
          src={'https://res.kurly.com/pc/service/member/1908/img_id_find_succsess_v2.png'}
          alt=""
        />
        <p className="text-r-2 text-kp-600 font-semibold pt-1 pb-r-1.4">
          고객님께서 입력하신 정보가
          <br /> 정확한지 확인 후 다시 시도해주세요.
        </p>
      </div>
    </>
  );
}
