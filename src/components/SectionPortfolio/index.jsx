import React from 'react';
import { ReactComponent as Three } from '../../assets/3.svg';
import CardXL from '../CardXL';
/* import Carousel from '../Carousel'; */
import projects from './data.json';
import './style.scss';
import Card from '../Card';

const SectionPortfolio = () => {
  return (
    <section id="portfolio" className="section section--portfolio">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <Three className="index__number" fill="#2bffb1" />
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              projets
            </h3>
            <h2 className="section__header__title">
              portfolio
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section__cards">
        {projects.map((project, index) => {
          /* console.log(project); */
          return (
            <Card
              data={project}
              key={`${index}-d7e099b9-11db-48ab-8319-362658664115`}
            />
          );
        })}
        {/* <CardXL />
        <CardXL />
        <CardXL />
        <CardXL /> */}
        {/* <Carousel /> */}
      </div>
    </section>
  );
};

export default SectionPortfolio;
