import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { ReactComponent as Four } from '../../assets/4.svg';
import { FiCopy, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import './style.scss';
import Button from '../Button';

const SectionContact = () => {
  const [copyBtnIsHover, setCopyBtnIsHover] = useState(false);
  const [openBtnIsHover, setOpenBtnIsHover] = useState(false);

  const device = useSelector(selectDevice);

  const toggleCopyBtnIsHover = () => {
    setCopyBtnIsHover(!copyBtnIsHover);
  };

  const toggleOpenBtnIsHover = () => {
    setOpenBtnIsHover(!openBtnIsHover);
  };

  useEffect(() => {
    console.log('copy btn hover: ', copyBtnIsHover);
    console.log('open btn hover: ', openBtnIsHover);
  });

  return (
    <section id="contact" className="section section--contact">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <Four className="index__number" fill="#2bffb1" />
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              faisons connaissance
            </h3>
            <h2 className="section__header__title">
              contact<span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
          <p className="section__text text-big text-bold pt-2 pb-1">
            Pour toute question, n'hésitez pas à m'écrire.
          </p>
          <div
            className={`section__row${
              copyBtnIsHover || openBtnIsHover ? ' hover' : ''
            }`}
          >
            <p className="section__text text-email text-toggle text-center text-bold">
              {device === 'large' && copyBtnIsHover ? (
                <>
                  Copier email <FiArrowRight />
                </>
              ) : device === 'large' && openBtnIsHover ? (
                <>
                  Nouveau mail <FiArrowRight />
                </>
              ) : (
                <>&gt; contact@geoffreycoste.fr</>
              )}
            </p>
            <Button
              type="button"
              modifier={`copy-email${copyBtnIsHover ? ' hover' : ''}`}
              onEnter={toggleCopyBtnIsHover}
              onLeave={toggleCopyBtnIsHover}
            >
              <FiCopy className="btn__icon" />
            </Button>
            <Button
              type="button"
              modifier={`open-email${openBtnIsHover ? ' hover' : ''}`}
              onEnter={toggleOpenBtnIsHover}
              onLeave={toggleOpenBtnIsHover}
            >
              <FiExternalLink className="btn__icon" />
            </Button>
          </div>
          <p className="section__text text-blue-gray text-mb pt-2">
            Retrouvez-moi également sur{' '}
            <span className="text-white text-bold">LinkedIn</span> pour échanger
            en toute simplicité.
          </p>
          <p className="section__text text-blue-gray text-mb">
            Vous trouverez également certains de mes projets sur{' '}
            <span className="text-white text-bold">GitHub</span> ou{' '}
            <span className="text-white text-bold">Codepen</span>.
          </p>
          <p className="section__text text-blue-gray text-mb">
            Pour le design, suivez-moi sur{' '}
            <span className="text-white text-bold">Behance</span> et{' '}
            <span className="text-white text-bold">Dribbble</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionContact;
