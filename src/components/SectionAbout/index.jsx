import React from 'react';
import { ReactComponent as One } from '../../assets/1.svg';
import Button from '../Button';
import { FiDownload } from 'react-icons/fi';
import './style.scss';

const SectionAbout = () => {
  return (
    <section className="section section--about">
      <div className="section__header">
        <div className="section__header__index index">
          <One className="index__number" fill="#2bffb1" />
        </div>
        <h3 className="section__header__baseline text-blue-gray">
          qui suis-je ?
        </h3>
        <h2 className="section__header__title">
          a propos<span className="title__text__dot text-green-neon">.</span>
        </h2>
      </div>

      <p className="section__text p-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est.
      </p>

      <Button type="button" color="green-neon">
        Télécharger CV <FiDownload className="btn__icon" />
      </Button>
    </section>
  );
};

export default SectionAbout;
