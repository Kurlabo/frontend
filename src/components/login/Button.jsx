import React from 'react';
import styled from 'styled-components';

const LoginButton = styled.button`
  width: 340px;
`;
export default function Button({ children, onClick, form, as, to }) {
  return (
    <LoginButton
      as={as}
      to={to}
      onClick={onClick}
      className={`inline-block text-r-1.6 rounded text-center py-6 
        ${
          form === 'signout'
            ? ' bg-white border mt-4 border-klp-600 text-klp-600'
            : 'mt-12 bg-klp-600  text-white '
        }`}
    >
      {children}
    </LoginButton>
  );
}
