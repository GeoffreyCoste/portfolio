import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { BiMoon, BiSun } from 'react-icons/bi';
import * as themeActions from '../../features/theme';
import './style.scss';

const Home = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <div className={`home theme-${theme}`}>
      <header className="header">
        {theme === 'light' ? (
          <BiMoon
            className="header__theme-toggler theme-toggler theme-toggler-dark"
            onClick={() => dispatch(themeActions.toggle())}
          />
        ) : (
          <BiSun
            className="theme-toggler theme-toggler-light"
            onClick={() => dispatch(themeActions.toggle())}
          />
        )}
      </header>
      <main className={`main text-${theme}`}>Home</main>
    </div>
  );
};

export default Home;
