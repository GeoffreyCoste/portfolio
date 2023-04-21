import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { scroller } from 'react-scroll';
import { ReactComponent as TextBanner } from '../../assets/hero-text-banner.svg';
import { FiArrowRight } from 'react-icons/fi';
import Button from '../Button';
import IconsBar from '../IconsBar';
import SwipeUp from '../SwipeUp';
import ScrollDown from '../ScrollDown';
import icons from '../Footer/data.icons.json';
import './style.scss';

const SectionHero = () => {
  const device = useSelector(selectDevice);
  const [scroll, setScroll] = useState(0); // Tracing vertical scroll value

  // Handle anchors smooth scroll
  const handleClick = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <section className="section section--hero">
      <div className="section__header">
        <TextBanner className="section__header__text-banner pt-2" />
      </div>
      <p className="section__text text-white text-mb pt-2 pl-1">
        Développeur Full Stack passionné de graphisme basé à Paris, France.
      </p>
      <p className="section__text text-white pb-2 pl-1">
        J'aime concevoir et développer des identités visuelles / des interfaces
        web uniques, innovantes et accessibles.
      </p>
      <Button
        type="button"
        color="green-neon"
        onClick={() => handleClick('contact')}
      >
        Me contacter{' '}
        {device === 'large' && (
          <FiArrowRight className="btn__icon icon-sliding" />
        )}
      </Button>
      <IconsBar icons={icons} />
      {device === 'small' || device === 'medium' ? <SwipeUp /> : <ScrollDown />}
    </section>
  );
};

export default SectionHero;
