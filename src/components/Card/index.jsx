import React from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Button from '../Button';
import Badge from '../Badge';
import './style.scss';

const Card = ({ data }) => {
  const {
    number,
    img,
    date,
    name,
    description,
    type,
    demoUrl,
    codeUrl,
    badges,
  } = data;

  const frenchDate = (timestamp) => {
    const newDate = new Date(parseInt(timestamp));
    const day = newDate.getDay() + 1;
    const month = newDate.getMonth() + 1;
    const year = newDate.getFullYear();
    const result = `${day <= 9 ? '0' : ''}${day}.${
      month <= 9 ? '0' : ''
    }${month}.${year}`;
    return result;
  };

  const customDate = frenchDate(date);

  return (
    <article className="card">
      <div className="card__header">
        <div className="card__header__number">{number}</div>
        <img className="card__header__img" src={`${img}`} alt={description} />
      </div>
      <div className="card__body border-blue">
        <div className="card__body__top box">
          <div className="box__date text-gray-light">{customDate}</div>
          <div className="box__title">{name}</div>
          <div className="box__description text-gray-light">{description}</div>
          {badges.map((badge, index) => (
            <Badge key={`${index}-0a03a8a4-f415-495b-a8e6-41e7dc3148ac`}>
              {badge}
            </Badge>
          ))}
        </div>
        <div className="card__body__bottom box">
          <div className="box__buttons">
            <Link to={demoUrl}>
              <Button type="button">
                <FiExternalLink className="btn__icon" />
              </Button>
            </Link>
            <Link to={codeUrl}>
              <Button type="button">
                <FiGithub className="btn__icon" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Card;
