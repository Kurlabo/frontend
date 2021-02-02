import React from 'react';
import { LoginFormStyle } from './Login';
import Input from './Input';
import Title from './Title';
import Button from './Button';
export default function FindPassword() {
  return (
    <LoginFormStyle>
      <Title>비밀번호 찾기</Title>
      <label className="text-1.2 inline-block pt-1.1 ">
        이름
        <Input placeholder="고객님의 이름을 입력해주세요" />
      </label>
      <label className="text-1.2 inline-block pt-1.1 ">
        아이디
        <Input placeholder="고객님의 아이디를 입력해주세요" />
      </label>
      <label className="text-1.2 inline-block pt-1.1">
        이메일
        <Input placeholder="고객님의 이메일을 입력해주세요" />
      </label>
      <Button form="find">찾기</Button>
    </LoginFormStyle>
  );
}
