import React from 'react';
import './style.scss';

const Badge = ({ children }) => {
  return <span className="badge border-blue">{children}</span>;
};

export default Badge;
