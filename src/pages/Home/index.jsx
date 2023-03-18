import React from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import './style.scss';

const Home = () => {
  const theme = useSelector(selectTheme);

  return <main className={`main__home theme-${theme}`}>Home</main>;
};

export default Home;
