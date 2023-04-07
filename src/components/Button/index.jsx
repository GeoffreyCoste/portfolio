import React from 'react';
import './style.scss';

const Button = ({
  children,
  type,
  color,
  modifier,
  onClick,
  onEnter,
  onLeave,
}) => {
  return (
    <button
      type={type}
      className={`btn${color ? ` btn--${color}` : ''}${
        modifier ? ` btn--${modifier}` : ''
      }`}
      onClick={onClick}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </button>
  );
};

export default Button;
