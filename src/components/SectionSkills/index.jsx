import React from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { ReactComponent as Two } from '../../assets/2.svg';
import Accordion from '../Accordion';
import Tabs from '../Tabs';
import Table from '../Table';
import { accordions } from './data';
import expertise from './data-expertise.json';
import diplomas from './data-diplomas.json';
import './style.scss';

const SectionSkills = () => {
  const device = useSelector(selectDevice);
  return (
    <section id="skills" className="section section--skills">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <Two className="index__number" fill="#2bffb1" />
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              expertise
            </h3>
            <h2 className="section__header__title">
              compétences
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
        </div>
      </div>
      {device === 'small' ? (
        <div className="section__accordion">
          <Accordion items={accordions} />
        </div>
      ) : (
        <div className="section__tabs">
          <Tabs items={expertise} />
        </div>
      )}
      <div className="section__table table table-diplomas">
        <span className="table__title">Diplômes</span>
        <Table items={diplomas} />
      </div>
    </section>
  );
};

export default SectionSkills;
