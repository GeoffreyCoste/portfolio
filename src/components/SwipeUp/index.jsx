import React from 'react';
import ArrowWave from '../ArrowWave';
import './style.scss';

const SwipeUp = () => {
  return (
    <div className="swipe-wrapper">
      <ArrowWave direction="up" />
      <span className="swipe-wrapper__text text-blue-gray">Swipe Up</span>
    </div>
  );
};

export default SwipeUp;
