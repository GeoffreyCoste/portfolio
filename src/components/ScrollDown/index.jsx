import React, { useState, useEffect } from 'react';
import './style.scss';

const ScrollDown = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <div className={`scroll-down${scroll > 100 ? ' hidden' : ''}`}>
      <span className="scroll-down__text text-blue-gray">Scroll Down</span>
      <div className="mouse"></div>
    </div>
  );
};

export default ScrollDown;
