import React, { useState } from 'react';
import { LoginFormStyle } from './Login';
import Input from './Input';
import Title from './Title';
import Button from './Button';
import { VscCheck } from 'react-icons/vsc';
import Modalform from './Modalform';
import Modal from './Modal';
export default function FindPassword({ onSubmit, changeSuccess }) {
  const [form, setform] = useState({
    findform: false,
    modal: false,
  });
  const [inputs, setInputs] = useState({
    u_name: '',
    u_id: '',
    u_email: '',
  });

  const { u_name, u_id, u_email } = inputs;
  const { findform, modal } = form;

  return (
    <LoginFormStyle>
      <form onSubmit={onSubmit}>
        {!findform ? (
          <>
            <FindPassword1 onChange={onChange} u_name={u_name} u_id={u_id} u_email={u_email} />
            <Button type="submit" onClick={onClick} form="find">
              비밀번호 찾기
            </Button>
          </>
        ) : (
          <>
            <FindPassword2 />
            <Button type="submit" onClick={onClick2} form="find">
              비밀번호 변경
            </Button>
          </>
        )}
      </form>
      {modal ? (
        changeSuccess ? (
          <Modalform id="modal">
            <Modal
              closeModal={closeModal}
              modal={modal}
              id="changepwd"
              value="비밀번호 변경이 완료되었습니다."
            />
          </Modalform>
        ) : (
          <Modalform id="modal">
            <Modal closeModal={closeModal} modal={modal} value="이메일형식이 잘못되었습니다" />
          </Modalform>
        )
      ) : (
        ''
      )}
    </LoginFormStyle>
  );

  // 이벤트핸들러 정의
  //INPUT 상태 관리
  function onChange(e) {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  //버튼클릭 후 이메일 유효성 검사 실행 결과에 따른 모달창 띄우기
  function onClick() {
    if (u_name && u_id) {
      setform({
        ...form,
        findform: u_email && u_name && u_id && checkEmail(),
        modal: !checkEmail(),
      });
    } else {
      setform({
        ...form,
        modal: false,
      });
    }
  }

  function onClick2() {
    setform({
      ...form,
      modal: true,
    });
  }

  //모달창 닫기
  function closeModal() {
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

function FindPassword1({ onChange, u_name, u_id, u_email }) {
  return (
    <div>
      <Title>비밀번호 찾기</Title>
      <label className="text-r-1.2 inline-block pt-r-1.1 ">
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
      <label className="text-r-1.2 inline-block pt-r-1.1 ">
        아이디
        <Input
          name="u_id"
          onChange={onChange}
          type="text"
          placeholder="고객님의 아이디를 입력해주세요"
          value={u_id}
          required
        />
      </label>
      <label className="text-r-1.2 inline-block pt-r-1.1">
        이메일
        <Input
          name="u_email"
          onChange={onChange}
          type="text"
          placeholder="고객님의 이메일을 입력해주세요"
          value={u_email}
          required
        />
      </label>
    </div>
  );
}

function FindPassword2() {
  return (
    <div>
      <Title>비밀번호 변경</Title>
      <label className="text-r-1.2 inline-block pt-r-1.1 ">
        새비밀번호
        <Input type="password" placeholder="비밀번호를 입력해주세요" />
      </label>
      <ul className="my-3">
        <li className="pl-2">
          <VscCheck className="inline-block" />
          <span>10자 이상 입력</span>
        </li>
        <li className="pl-2">
          <VscCheck className="inline-block" />
          <span>영문/숫자/특수문자(공백 제외)만 허용하며, 2개 이상 조합</span>
        </li>
        <li className="pl-2">
          <VscCheck className="inline-block" />
          <span>동일한 숫자 3개 이상 연속 사용불가</span>
        </li>
      </ul>
      <label className="text-r-1.2 inline-block pt-r-1.1">
        새비밀번호 확인
        <Input type="password" placeholder="비밀번호를 한번더 입력해주세요" />
      </label>
    </div>
  );
}
