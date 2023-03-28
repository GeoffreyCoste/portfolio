import React from 'react';
import './style.scss';

const ArrowWave = ({ direction }) => {
  return (
    <div className={`arrow-wave${direction === 'up' ? ' wave--up' : ''}`}>
      <span className="arrow-wave__item"></span>
      <span className="arrow-wave__item"></span>
      <span className="arrow-wave__item"></span>
    </div>
  );
};

export default ArrowWave;
