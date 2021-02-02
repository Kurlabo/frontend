import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Main from '../components/main';

const MainContainer = () => {
  const dispatch = useDispatch();

  return <Main />;
};

export default MainContainer;
