import React from 'react';
import styled from 'styled-components';

// const AuthStyledInput = styled.input``;
export default function Input(props) {
  return (
    <input
      {...props}
      className="text-r-1.4 rounded inline-block w-p-340 h-p-54 px-r-1.9 border border-gray-300 mt-4 Default focus style focus:bg-klp-700"
    />
  );
}
