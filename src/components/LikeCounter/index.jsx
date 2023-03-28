import React from 'react';
import { FiThumbsUp } from 'react-icons/fi';
import './style.scss';

const LikeCounter = () => {
  return (
    <div className="like-counter">
      <FiThumbsUp className="like-counter__icon text-green-neon" />
      <span className="like-counter__number">0</span>
    </div>
  );
};

export default LikeCounter;
