import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import './style.scss';

/* const navLinks = [
  {
    title: 'A propos',
    to: '/',
  },
  {
    title: 'A propos',
    to: '/about',
  },
]; */

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const theme = useSelector(selectTheme);
  /* const [activeLink, setActiveLink] = useState('');

  const handleClick = (index) => {
    setActiveLink(index);
  }; */

  return (
    <nav className="navbar navbar-expand">
      <button
        type="button"
        className={`navbar__toggler btn btn--toggler toggler${
          isShown ? ' close' : ''
        }`}
        onClick={() => setIsShown(!isShown)}
      >
        <span className="toggler__bar"></span>
        <span className="toggler__bar"></span>
        <span className="toggler__bar"></span>
        <span className="toggler__bar"></span>
      </button>
      <div
        className={`navbar__nav nav nav--${theme} collapse${
          isShown ? ' show' : ''
        }`}
      >
        <ul className="nav__list">
          <li className="nav__list__item">A propos</li>
          <li className="nav__list__item">Compétences</li>
          <li className="nav__list__item">Portfolio</li>
          <li className="nav__list__item">Contact</li>
        </ul>
        {/* <ul className="navbar__nav nav">
          {navLinks.map((link, index) => {
            return (
              <li
                className="nav__item"
                key={`${index}-3226a4df-d85e-4088-8e5a-24a6830fa819`}
                onClick={() => handleClick(index)}
              >
                <Navlink
                  to={link.to}
                  title={link.title}
                  active={activeLink === index ? true : false}
                />
              </li>
            );
          })}
        </ul> */}
      </div>
    </nav>
  );
};

export default Navbar;
