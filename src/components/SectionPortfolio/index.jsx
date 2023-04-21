import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { hide, animateFrom } from '../../utils/helpers/ScrollReveal';
import { ReactComponent as Three } from '../../assets/3.svg';
import Card from '../Card';
import projects from './data.json';
import './style.scss';

const SectionPortfolio = () => {
  // Anim section title, cards block due to scroll
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
            <h2 className="section__header__title gsap__reveal gs__reveal__fromLeft">
              portfolio
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section__bottom gsap__reveal">
        <h4 className="section__bottom__title">derniers projets</h4>
        {projects.map((project, index) => {
          return (
            <Card
              data={project}
              key={`${index}-d7e099b9-11db-48ab-8319-362658664115`}
            />
          );
        })}
        <div className="section__bottom__item card">
          <p className="card__text">
            De nouveaux projets{' '}
            <span className="text-green-neon">bientôt !</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionPortfolio;
