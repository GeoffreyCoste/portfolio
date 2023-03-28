import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const IconsBar = ({ icons }) => {
  return (
    <div className="icons-bar">
      <ul className="icons-bar__list list">
        {icons.map((icon, index) => {
          const { path, Icon } = icon;
          return (
            <li
              key={`${index}-c0530c55-9f12-4d8b-b357-008ec5116564`}
              className="list__item"
            >
              <Link to={path} className="list__item__link link">
                <Icon className="link__icon" />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default IconsBar;
