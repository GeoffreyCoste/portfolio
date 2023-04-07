import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import Button from '../Button';
import IconsBar from '../IconsBar';
import SwipeUp from '../SwipeUp';
import ScrollDown from '../ScrollDown';
import icons from '../Footer/data.icons.json';
import './style.scss';

const SectionHero = () => {
  const device = useSelector(selectDevice);
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, [scroll]);

  return (
    <section className="section section--hero">
      <div className="section__header">
        <p className="section__header__name">Geoffrey Coste</p>
        {/* <span className="section__header__arrow arrow-left">&lt;</span> */}
        <p className="section__header__title title-start">creative</p>
        <p className="section__header__title title-end">
          {device === 'small' ? 'dev.' : 'developer'}
        </p>
        {/* <span className="section__header__arrow arrow-right">/&gt;</span> */}
        <p className="section__header__grade">junior</p>

        {/* <span className="section__header__baseline text-white text-center">
          junior
        </span>
        <div className="section__header__title title title--important text-center">
          <p className="title__text text-white">designer</p>
          <p className="title__text text-white">
            & developer
            <span className="title__text__dot text-green-neon">.</span>
          </p>
        </div> */}
      </div>
      <p className="section__text text-white text-mb pt-2 pl-1">
        Développeur Full Stack passionné de graphisme basé à Paris, France.
      </p>
      <p className="section__text text-white pb-2 pl-1">
        J'aime concevoir et développer des identités visuelles / des interfaces
        web uniques, innovantes et accessibles.
      </p>
      <Button type="button" color="green-neon">
        Me contacter
      </Button>
      <IconsBar icons={icons} />
      {device === 'small' || device === 'medium' ? <SwipeUp /> : <ScrollDown />}
    </section>
  );
};

/* const SectionHero = () => {
  return (
    <section className="section section--hero">
      <div className="section__header">
        <span className="section__header__baseline text-white">junior</span>
        <div className="section__header__title title--important">
          <p className="title__text text-white">designer</p>
          <p className="title__text text-white">
            & developer
            <span className="title__text__dot text-green-neon">.</span>
          </p>
        </div>
      </div>
      <div className="section__body">
        <p className="section__body__text text-blue-gray">
          <strong className="text-white">Geoffrey Coste</strong> - UI-UX / Web
          Designer & Développeur Full Stack situé à Paris, passionné par les
          Arts, notamment digital et numérique. J'aime la création et le
          développement d'identité visuelle et d'interfaces web uniques et
          innovantes.
        </p>
      </div>
      <Button type="button" color="green-neon">
        Me contacter
      </Button>
      <IconsBar icons={icons} />
      <SwipeUp />
    </section>
  );
}; */

export default SectionHero;
