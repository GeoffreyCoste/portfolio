import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactIconsSelector from '../ReactIconsSelector';
import './style.scss';

const IconsBar = ({ icons }) => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <div
      className={`icons-bar${
        scroll > document.body.offsetHeight * 0.75 ? ' hidden' : ''
      }`}
    >
      <ul className="icons-bar__list list">
        {icons.map((icon, index) => {
          const { path, name } = icon;
          return (
            <li
              key={`${index}-c0530c55-9f12-4d8b-b357-008ec5116564`}
              className="list__item"
            >
              <Link to={path} className="list__item__link link">
                <ReactIconsSelector iconName={name} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IconsBar;
