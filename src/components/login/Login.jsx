import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Button from './Button';
import CheckBox from './CheckBox';
import Title from './Title';
import { Link } from 'react-router-dom';

export const LoginFormStyle = styled.div`
  width: 340px;
  height: 600px;
  margin: 0 auto;
`;

export default function Login() {
  return (
    <LoginFormStyle>
      <Title>로그인</Title>
      <Input type="text" placeholder="아이디를 입력하세요" />
      <Input type="password" placeholder="비밀번호를 입력하세요" />
      <div className="mt-0.9 text-kg-300 text-1.3 leading-3">
        <CheckBox value="보안접속" />
        <Link to="/shop/account/find_id">
          <span className="align-middle ">아이디 찾기</span>
        </Link>
        <span className="align-middle px-1">|</span>
        <Link to="/shop/account/find_pwd">
          <span className="align-middle">비밀번호 찾기</span>
        </Link>
      </div>
      <Button form="signin" as={Link} to="">
        로그인
      </Button>
      <Button form="signout" as={Link} to="/shop/account/signup">
        회원가입
      </Button>
    </LoginFormStyle>
  );
}
