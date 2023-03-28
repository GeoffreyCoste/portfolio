import React from 'react';
import { ReactComponent as Three } from '../../assets/3.svg';
import CardXL from '../CardXL';
/* import Carousel from '../Carousel'; */
import './style.scss';

const SectionPortfolio = () => {
  return (
    <section className="section section--portfolio">
      <div className="section__header">
        <div className="section__header__index index">
          <Three className="index__number" fill="#2bffb1" />
        </div>
        <h3 className="section__header__baseline text-blue-gray">projets</h3>
        <h2 className="section__header__title">
          portfolio<span className="title__text__dot text-green-neon">.</span>
        </h2>
      </div>
      <div className="section__cards">
        <CardXL />
        <CardXL />
        <CardXL />
        <CardXL />
        {/* <Carousel /> */}
      </div>
    </section>
  );
};

export default SectionPortfolio;
