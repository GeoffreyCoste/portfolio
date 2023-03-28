import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from '../Button';
import Badge from '../Badge';
import img from '../../assets/pexels-darina-belonogova-7193155.jpg';
import './style.scss';

const CardXL = () => {
  return (
    <div className="card border-blue">
      <div className="card__header">
        {/* <div className="card__header__date">23 03 2023</div> */}
        <img className="card__header__img" src={img} alt="test" />
      </div>

      <div className="card__body">
        <p className="card__body__date text-blue-light">23 mars 2023</p>
        <h4 className="card__body__title">La Maison Jungle</h4>
        {/* <p className="card__body__date">23 mars 2023</p> */}
        <p className="card__body__resume text-blue-light">
          Site e-commerce de vente de plantes d'intérieur
        </p>
        <div className="card__body__badges">
          <Badge>Frontend</Badge>
          <Badge>Backend</Badge>
          <Badge>SEO</Badge>
        </div>
        {/* <p className="card__body__text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui libero
          nobis repellat culpa corporis, nisi nostrum placeat eius.
        </p> */}
        <div className="card__body__buttons">
          <Link className="link text-green-neon" to="">
            En savoir plus
          </Link>
          <Button type="button" color="green-neon">
            <FiExternalLink />
          </Button>
          <Button type="button" color="green-neon">
            <FiGithub />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardXL;
