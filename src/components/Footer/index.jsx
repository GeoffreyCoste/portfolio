import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { FaHeart } from 'react-icons/fa';
import icons from './data.icons.json';
import './style.scss';
import IconsBar from '../IconsBar';

const Footer = () => {
  return (
    <footer className="footer border-top-blue">
      <div className="footer__item">
        <Link to="/" className="footer__item__link logo">
          <Logo alt="Logo" className="logo__img" fill="#fff" />
        </Link>
      </div>
      <div className="footer__body">
        <div className="footer__body__item item--resume">
          <p className="item--resume__name">Geoffrey Coste</p>
          <p className="item--resume__activity">
            Designer & Développeur Full Stack Junior
          </p>
          <p className="item--resume__location">Paris, France</p>
        </div>
        <div className="footer__body__item item--icons-bar">
          <IconsBar icons={icons} />
        </div>
        <div className="footer__body__item item--copyrights">
          <p className="item--copyrights__mention">
            Tous droits réservés © 2023.
          </p>
          <p className="item--copyrights__creation">
            Conçu et développé avec <FaHeart fill="#fff" /> par Geoffrey Coste
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
