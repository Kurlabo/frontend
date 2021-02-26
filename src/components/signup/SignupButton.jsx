import React from 'react';

const formButton =
  'w-48 ml-2 font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';
const formTdButton =
  'w-formInput font-bold text-kp-600 border-kp-600 border-solid border rounded h-r-4.4';

const SignupButton = ({ big = false, onClick, children }) => {
  return (
    <button className={big ? formTdButton : formButton} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SignupButton;
