import React from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
  width: 340px;
  height: 54px;
`;
//
export default function Button({ children, onClick, form }) {
  return (
    <LoginButton
      onClick={onClick}
      className={
        form === 'signout'
          ? 'bg-white border mt-4 text-r-1.6 t-4 rounded border-solid border-klp-600 text-klp-600'
          : 'mt-12 bg-klp-600 text-r-1.6 text-white rounded'
      }
    >
      {children}
    </LoginButton>
  );
}
