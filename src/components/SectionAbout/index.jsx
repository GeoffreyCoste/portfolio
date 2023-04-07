import React from 'react';
import { ReactComponent as One } from '../../assets/1.svg';
import Button from '../Button';
import { FiDownload } from 'react-icons/fi';
import './style.scss';

const SectionAbout = () => {
  return (
    <section id="about" className="section section--about">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <One className="index__number" fill="#2bffb1" />
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              qui suis-je ?
            </h3>
            <h2 className="section__header__title">
              à propos
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
          <p className="section__text text-blue-gray text-mb pt-2">
            Issu du monde du Droit, j'ai exercé dans ce domaine pendant 16 ans,
            notamment en qualité de Juriste M&A.
          </p>
          <p className="section__text text-blue-gray text-mb">
            Curieux de nature et porté par une passion de toujours des nouvelles
            technologies et des arts graphiques, j'ai amorcé en autodidacte mon
            passage d'un code à l'autre.
          </p>
          <p className="section__text text-blue-gray text-mb">
            Constatant un intérêt en constante expansion pour le développement
            et le design et, ressentant en parallèle le désir de pouvoir
            comprendre et intervenir dans toutes les étapes d'un projet, je me
            suis rapidement découvert l'âme d'un Développeur Full Stack.
          </p>
          <p className="section__text text-blue-gray text-mb">
            L'envie de mesurer mes compétences acquises et de poursuivre mon
            apprentissage en consolidant les bases m'a ensuite conduit à suivre
            une formation diplômante OpenClassrooms.
          </p>
          <p className="section__text text-blue-gray text-mb">
            C'est aujourd'hui avec enthousiasme et motivation que je continue
            d'approfondir mes connaissances et de tester de nouvelles choses,
            notamment au travers de projets personnels consultables au sein de
            mon <span className="text-white text-bold">Portfolio</span>.
          </p>
          <p className="section__text text-blue-gray text-mb">
            Je recherche, en parallèle, à développer mes compétences et à
            collaborer afin de créer des expériences mémorables et performantes.
          </p>
          <p className="section__text text-blue-gray pb-2">
            Au plaisir d'échanger ensemble … que ce soit sur un projet web, une
            envie, ou tout simplement mon travail … Et si nous restions en
            <span className="text-white text-bold"> contact</span> ?
          </p>
          <Button type="button" color="green-neon">
            Télécharger CV <FiDownload className="btn__icon" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SectionAbout;
