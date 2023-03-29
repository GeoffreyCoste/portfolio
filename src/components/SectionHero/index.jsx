import React from 'react';
import Button from '../Button';
import IconsBar from '../IconsBar';
import { FaCodepen, FaBehance, FaLinkedinIn } from 'react-icons/fa';
import { FiGithub, FiDribbble } from 'react-icons/fi';
import './style.scss';
import SwipeUp from '../SwipeUp';

const icons = [
  {
    path: '/',
    Icon: FiGithub,
  },
  {
    path: '/',
    Icon: FaCodepen,
  },
  {
    path: '/',
    Icon: FiDribbble,
  },
  {
    path: '/',
    Icon: FaBehance,
  },
  {
    path: '/',
    Icon: FaLinkedinIn,
  },
];

const SectionHero = () => {
  return (
    <section className="section section--hero">
      <div className="section__header">
        <span className="section__header__baseline text-white text-center">
          junior
        </span>
        <div className="section__header__title title title--important text-center">
          <p className="title__text text-white">designer</p>
          <p className="title__text text-white">
            & developer
            <span className="title__text__dot text-green-neon">.</span>
          </p>
        </div>
      </div>
      <p className="section__text text-blue-gray text-center p-2">
        <strong className="text-white">Geoffrey Coste</strong> - UI-UX / Web
        Designer & Développeur Full Stack situé à Paris, passionné par les Arts,
        notamment digital et numérique. J'aime la création et le développement
        d'identité visuelle et d'interfaces web uniques et innovantes.
      </p>
      <Button type="button" color="green-neon">
        Me contacter
      </Button>
      <IconsBar icons={icons} />
      <SwipeUp />
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
