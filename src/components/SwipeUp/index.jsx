import React, { useState, useEffect } from 'react';
import ArrowWave from '../ArrowWave';
import './style.scss';

const SwipeUp = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <div className={`swipe-wrapper${scroll > 100 ? ' hidden' : ''}`}>
      <ArrowWave direction="up" />
      <span className="swipe-wrapper__text text-blue-gray">Swipe Up</span>
    </div>
  );
};

export default SwipeUp;
