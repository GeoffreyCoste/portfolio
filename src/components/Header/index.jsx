import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Navbar from '../Navbar';
import ThemeToggler from '../ThemeToggler';
import './style.scss';

const Header = () => {
  const theme = useSelector(selectTheme);

  return (
    <header className="header">
      <div className="header__item">
        <Link className="header__item__link logo" to="/">
          <Logo
            alt="Logo"
            className="logo__img"
            fill={theme === 'light' ? '#000' : '#fff'}
          />
        </Link>
      </div>
      <div className="header__item">
        <ThemeToggler />
      </div>
      <div className="header__item">
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
