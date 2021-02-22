import React from 'react';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Signup from '../components/signup/Signup';
import { signUpStart } from '../modules/user';

const SignupPage = () => {
  const dispatch = useDispatch();
  const signup = useCallback(
    user => {
      dispatch(signUpStart(user));
    },
    [dispatch],
  );
  return <Signup signUpStart={signup} />;
};

export default SignupPage;
