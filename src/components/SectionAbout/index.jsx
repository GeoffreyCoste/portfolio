import React, { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { selectDevice } from '../../app/selectors';
import { gsap } from 'gsap';
import { hide, animateFrom } from '../../utils/helpers/ScrollReveal';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { scroller } from 'react-scroll';
import { ReactComponent as One } from '../../assets/1.svg';
import { ReactComponent as LogoMask } from '../../assets/logo-mask-round.svg';
import Button from '../Button';
import Resume from '../../assets/cv.pdf';
import { FiArrowRight } from 'react-icons/fi';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionAbout = () => {
  const theme = useSelector(selectTheme);
  const device = useSelector(selectDevice);

  const handleScroll = (elementId) => {
    scroller.scrollTo(elementId, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  };

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.section__design__img', {
        scrollTrigger: {
          trigger: '.section__design',
          start: 'top 60%',
          end: '+=300 50%',
          scrub: true,
          /* markers: true, */
        },
        y: 100,
      });
    });
    return () => ctx.revert();
  });

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
    <section id="about" className="section section--about">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <One className="index__number" fill="#2bffb1" />
          </div>
          {device === 'large' && (
            <div className="section__design">
              <img
                src="/images/geoffreycoste.jpg"
                className="section__design__img"
                alt="Geoffrey Coste"
              />
              <LogoMask
                className={`section__design__logo-mask logo-mask-${theme}`}
              />
            </div>
          )}
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              qui suis-je ?
            </h3>
            <h2 className="section__header__title gsap__reveal gs__reveal__fromLeft">
              à propos
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
          <div className="section__text text gsap__reveal">
            <p className="section__text text-blue-gray text-mb pt-2">
              Issu du monde du Droit, j'ai exercé dans ce domaine pendant 16
              ans, notamment en qualité de Juriste M&A.
            </p>
            <p className="section__text text-blue-gray text-mb">
              Curieux de nature et porté par une passion de toujours des
              nouvelles technologies et des arts graphiques, j'ai amorcé en
              autodidacte mon passage d'un code à l'autre.
            </p>
            <p className="section__text text-blue-gray text-mb">
              Constatant un intérêt en constante expansion pour le développement
              et le design et, ressentant en parallèle le désir de pouvoir
              comprendre et intervenir dans toutes les étapes d'un projet, je me
              suis rapidement découvert l'âme d'un Développeur Full Stack.
            </p>
            <p className="section__text text-blue-gray text-mb">
              L'envie de mesurer mes compétences acquises et de poursuivre mon
              apprentissage en consolidant les bases m'a ensuite conduit à
              suivre une formation diplômante OpenClassrooms.
            </p>
            <p className="section__text text-blue-gray text-mb">
              C'est aujourd'hui avec enthousiasme et motivation que je continue
              d'approfondir mes connaissances et de tester de nouvelles choses,
              notamment au travers de projets personnels consultables au sein de
              mon{' '}
              <span
                className="text-white text-bold"
                onClick={() => handleScroll('portfolio')}
              >
                Portfolio
              </span>
              .
            </p>
            <p className="section__text text-blue-gray text-mb">
              Je recherche, en parallèle, à développer mes compétences et à
              collaborer afin de créer des expériences mémorables et
              performantes.
            </p>
            <p className="section__text text-blue-gray pb-2">
              Au plaisir d'échanger ensemble … que ce soit sur un projet web,
              une envie, ou tout simplement mon travail … Et si nous restions en
              <span
                className="text-white text-bold"
                onClick={() => handleScroll('contact')}
              >
                {' '}
                contact
              </span>{' '}
              ?
            </p>
          </div>
          <Link to={Resume} target="_blank" rel="noopener noreferrer">
            <Button type="button" color="green-neon">
              Consulter CV{' '}
              {device === 'large' && (
                <FiArrowRight className="btn__icon icon-sliding" />
              )}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
