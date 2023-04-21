import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { TiArrowLoop } from 'react-icons/ti';
import Button from '../Button';
import Badge from '../Badge';
import './style.scss';

const Card = ({ data }) => {
  const [flip, setFlip] = useState(false);

  const { img, date, name, resume, description, demoUrl, codeUrl, badges } =
    data;

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

  const toggleFlip = () => {
    setFlip(!flip);
  };

  return (
    <div className={`card${flip ? ' flipped' : ''}`}>
      <div className="card__face card__face-front">
        <img className="card__face-front__img" src={`${img}`} alt={resume} />
        <div className="card__face__content content">
          <div className="content__row">
            <h4 className="content__row__title">{name}</h4>
          </div>
          <div className="content__row">
            <div className="content__row__buttons">
              <Button type="button" onClick={toggleFlip}>
                <TiArrowLoop className="btn__icon" />
              </Button>
              <Link to={demoUrl} target="_blank" rel="noopener noreferrer">
                <Button type="button">
                  <FiExternalLink className="btn__icon" />
                </Button>
              </Link>
              <Link to={codeUrl} target="_blank" rel="noopener noreferrer">
                <Button type="button">
                  <FiGithub className="btn__icon" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="card__face card__face-back">
        <div className="card__face__content content">
          <div className="content__row">
            <p className="content__row__date">{customDate}</p>
            <h4 className="content__row__title">{name}</h4>
            <div className="content__row__badges">
              {badges.map((badge, index) => (
                <Badge key={`${index}-0a03a8a4-f415-495b-a8e6-41e7dc3148ac`}>
                  {badge}
                </Badge>
              ))}
            </div>

            <div className="content__row__description">{description}</div>
          </div>
          <div className="content__row">
            <div className="content__row__buttons">
              <Button type="button" onClick={toggleFlip}>
                <TiArrowLoop className="btn__icon" />
              </Button>
              <Link to={demoUrl} target="_blank" rel="noopener noreferrer">
                <Button type="button">
                  <FiExternalLink className="btn__icon" />
                </Button>
              </Link>
              <Link to={codeUrl} target="_blank" rel="noopener noreferrer">
                <Button type="button">
                  <FiGithub className="btn__icon" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
