import React from 'react';
import './style.scss';

const PlusMinusIcon = ({ isActive }) => {
  return <div className={`icon__plus-minus${isActive ? ' active' : ''}`}></div>;
};

export default PlusMinusIcon;
