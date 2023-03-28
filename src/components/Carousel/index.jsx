import React, { useState, useRef } from 'react';
import Card from '../Card';
import './style.scss';

const Carousel = ({ pictures }) => {
  const [items, setItems] = useState([]); // array of pics paths
  const [visibleItem, setVisibleItem] = useState(0);
  const [touchPosition, setTouchPosition] = useState(null);
  const carousel = useRef(null);

  const prev = () => {
    const index = visibleItem === 0 ? items.length - 1 : visibleItem - 1;
    setVisibleItem(index);
  };

  const next = () => {
    const index = visibleItem === items.length - 1 ? 0 : visibleItem + 1;
    setVisibleItem(index);
  };

  const touchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const touchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  const dotIsActive = (index) => {
    return (
      index === visibleItem ||
      (index === 1 && visibleItem === items.length - 1) ||
      (index === items.length - 2 && visibleItem === 0)
    );
  };

  return (
    <div
      className="carousel"
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      ref={carousel}
    >
      <div
        className="carousel__inner"
        style={{ transform: `translateX(-${visibleItem * 100}%)` }}
      >
        <Card />
        {/* {items.map((item, index) => {
          return (
            <div
              key={`${index}-b9fb52e4-51b2-45f8-bf16-1addaa3db52e`}
              className="carousel__inner__item"
            >
              <Card />
            </div>
          );
        })} */}
        <div className="carousel__inner__item"></div>
      </div>
      <div className="carousel__dots">
        <div className="carousel__dots__item"></div>
        <div className="carousel__dots__item active"></div>
        <div className="carousel__dots__item"></div>
        <div className="carousel__dots__item"></div>
        {/* {items.map((item, index) => {
          if (index === 0 || index === items.length - 1) return null;
          return (
            <div
              key={`${index}-3dd0598f-2dec-4c2e-a4a8-e246011ab9d1`}
              className={`carousel__dots__item ${
                dotIsActive(index) ? ' active' : ''
              }`}
              onClick={() => setVisibleItem(index)}
            ></div>
          );
        })} */}
      </div>
    </div>
  );
};

export default Carousel;
