import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { scroller } from 'react-scroll';
import './style.scss';

const anchors = [
  {
    name: 'a propos',
    id: 'about',
  },
  {
    name: 'compétences',
    id: 'skills',
  },
  {
    name: 'portfolio',
    id: 'portfolio',
  },
  {
    name: 'contact',
    id: 'contact',
  },
];

const Navbar = () => {
  const [isShown, setIsShown] = useState(false);
  const [active, setActive] = useState('');
  const theme = useSelector(selectTheme);

  // Handle anchors smooth scroll
  const handleClick = (index, elementId) => {
    setActive(index);
    setIsShown(false);
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  // Enable body scroll when mobile menu not opened
  useEffect(() => {
    if (isShown) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isShown]);

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
          {anchors.map((anchor, index) => {
            return (
              <li
                className={`nav__list__item${
                  active === index ? ' active' : ''
                }`}
                key={`${index}-3226a4df-d85e-4088-8e5a-24a6830fa819`}
                onClick={() => handleClick(index, anchor.id)}
              >
                {anchor.name}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
