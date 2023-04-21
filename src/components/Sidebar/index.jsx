import React, { useState, useEffect } from 'react';
import './style.scss';

const Sidebar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <div className={`sidebar${scroll > 100 ? ' hidden' : ''}`}>
      <div className="form-group">
        <input id="one" type="radio" name="index" value="1" />
        <label for="one">
          <span>001</span>
        </label>
      </div>
    </div>
  );
};

export default Sidebar;
