import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hide, animateFrom } from '../../utils/helpers/ScrollReveal';
import { ReactComponent as Two } from '../../assets/2.svg';
import Accordion from '../Accordion';
import Tabs from '../Tabs';
import Table from '../Table';
import { accordions } from './data';
import expertise from './data-expertise.json';
import diplomas from './data-diplomas.json';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionSkills = () => {
  const device = useSelector(selectDevice);

  // Anim section title, tabs and table blocks due to scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap__reveal').forEach((elem) => {
        hide(elem);

        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            onEnter: function () {
              animateFrom(elem);
            },
            onEnterBack: function () {
              animateFrom(elem, -1);
            },
            onLeave: function () {
              hide(elem);
            }, // assure that the element is hidden when scrolled into view
            /* markers: true, */
          },
        });
      });
    });
    return () => ctx.revert();
  });

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
            <h2 className="section__header__title gsap__reveal gs__reveal__fromLeft">
              compétences
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section__bottom">
        {device === 'small' ? (
          <div className="section__accordion">
            <Accordion items={accordions} />
          </div>
        ) : (
          <div className="section__tabs gsap__reveal">
            <Tabs items={expertise} />
          </div>
        )}
        <div className="section__table table table-diplomas gsap__reveal">
          <span className="table__title">Diplômes</span>
          <Table items={diplomas} />
        </div>
      </div>
    </section>
  );
};

export default SectionSkills;
