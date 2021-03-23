import React from 'react';

const SignupButton = ({ big = false, onClick, children, className }) => {
  const formButton = `w-48 ml-2 font-medium text-kp-600 border-kp-600 border-solid border rounded h-r-4.4 ${className}`;
  const formTdButton = `w-formInput font-medium text-kp-600 border-kp-600 border-solid border rounded h-r-4.4 ${className}`;
  return (
    <button className={big ? formTdButton : formButton} type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default SignupButton;
