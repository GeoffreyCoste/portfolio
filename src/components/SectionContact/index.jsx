import React from 'react';
import { ReactComponent as Four } from '../../assets/4.svg';
import { FiMail, FiCopy, FiExternalLink } from 'react-icons/fi';
import './style.scss';
import Button from '../Button';

const SectionContact = () => {
  return (
    <section className="section section--contact">
      <div className="section__header">
        <div className="section__header__index index">
          <Four className="index__number" fill="#2bffb1" />
        </div>
        <h3 className="section__header__baseline text-blue-gray">
          faisons connaissance
        </h3>
        <h2 className="section__header__title">
          contact<span className="title__text__dot text-green-neon">.</span>
        </h2>
      </div>
      <p className="section__text p-2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut eum est
        autem neque iste esse.
      </p>
      <p className="section__text text-center text-bold border-top-blue border-bottom-blue pt-1 pb-1">
        <FiMail className="section__text__icon" stroke="#8c85f3" />
        contact@gcoste.dev
      </p>
      <div className="section__row">
        <Button type="button" color="green-neon">
          <FiCopy />
        </Button>
        <Button type="button" color="green-neon">
          <FiExternalLink />
        </Button>
      </div>
    </section>
  );
};

export default SectionContact;
