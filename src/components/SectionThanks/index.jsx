import React from 'react';
import { ReactComponent as ThanksCircle } from '../../assets/thanks_circle.svg';
import LikeCounter from '../LikeCounter';
import './style.scss';

const SectionThanks = () => {
  return (
    <section className="section section--thanks">
      <div className="section__body">
        <div className="section__body__item">
          <ThanksCircle className="img img--animated" />
          <LikeCounter />
        </div>
      </div>
    </section>
  );
};

export default SectionThanks;
