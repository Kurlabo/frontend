import React from 'react';
import styled from 'styled-components';

// const AuthStyledInput = styled.input``;
export default function Input(props) {
  return (
    <input
      {...props}
      className="text-1.4 rounded inline-block w-340 h-54 px-19 border border-gray-300 mt-4 Default focus style focus:bg-klp-700"
    />
  );
}
