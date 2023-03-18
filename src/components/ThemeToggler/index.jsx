import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { BiMoon, BiSun } from 'react-icons/bi';
import * as themeActions from '../../features/theme';
import './style.scss';

const ThemeToggler = () => {
  const theme = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <button type="button" className="btn btn-theme-toggler theme-toggler">
      {theme === 'light' ? (
        <BiMoon
          className="theme-toggler__dark"
          onClick={() => dispatch(themeActions.toggle())}
        />
      ) : (
        <BiSun
          className="theme-toggler__light"
          onClick={() => dispatch(themeActions.toggle())}
        />
      )}
    </button>
  );
};

export default ThemeToggler;
