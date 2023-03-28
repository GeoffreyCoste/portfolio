import React from 'react';
import { ReactComponent as Two } from '../../assets/2.svg';
import Accordion from '../Accordion';
import { accordions } from './data';
import './style.scss';

const SectionSkills = () => {
  return (
    <section className="section section--skills">
      <div className="section__header">
        <div className="section__header__index index">
          <Two className="index__number" fill="#2bffb1" />
        </div>
        <h3 className="section__header__baseline text-blue-gray">
          technologies
        </h3>
        <h2 className="section__header__title">
          competences
          <span className="title__text__dot text-green-neon">.</span>
        </h2>
      </div>
      <div className="section__accordion">
        <Accordion items={accordions} />
      </div>
    </section>
  );
};

export default SectionSkills;
