import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import Navbar from '../Navbar';
import ThemeToggler from '../ThemeToggler';
import './style.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__item">
        <Link
          className="header__item__link logo"
          to="/"
          onClick={() => window.scrollTo(0, 0)}
        >
          <Logo alt="Logo" className="logo__img" fill="#fff" />
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
