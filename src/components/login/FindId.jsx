import React from 'react';
import { LoginFormStyle } from './Login';
import Input from './Input';
import Title from './Title';
import Button from './Button';
export default function FindId() {
  return (
    <LoginFormStyle>
      <Title>아이디 찾기</Title>
      <label className="text-1.2 inline-block pt-1.1 ">
        이름
        <Input placeholder="고객님의 이름을 입력해주세요" />
      </label>
      <label className="text-1.2 inline-block pt-1.1 ">
        아이디
        <Input placeholder="가입시 등록하신 이메일 주소를 입력해주세요" />
      </label>
      <Button>확인</Button>
    </LoginFormStyle>
  );
}
