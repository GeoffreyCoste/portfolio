import React from 'react';
import './style.scss';

const Button = ({ children, type, color, modifier, onClick }) => {
  return (
    <button
      type={type}
      className={`btn${color ? ` btn--${color}` : ''}${
        modifier ? ` btn--${modifier}` : ''
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
