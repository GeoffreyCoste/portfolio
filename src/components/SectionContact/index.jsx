import React, { useState, useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hide, animateFrom } from '../../utils/helpers/ScrollReveal';
import { ReactComponent as Four } from '../../assets/4.svg';
/* import { ReactComponent as Paperplane } from '../../assets/paperplane.svg'; */
import { ReactComponent as ThanksCircle } from '../../assets/thanks_circle.svg';
import { FiCopy, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import './style.scss';
import Button from '../Button';
/* import EmailAnim from '../EmailAnim'; */

gsap.registerPlugin(ScrollTrigger);

const SectionContact = () => {
  const [textMessage, setTextMessage] = useState('email');
  const [click, setClick] = useState(false);

  const titleRef = useRef();
  const textRef = useRef();

  const updateMessage = (text) => {
    setTextMessage(text);
  };

  const handleClick = () => {
    setClick(true);
    navigator.clipboard.writeText('contact@geoffreycoste.fr');
    setTimeout(() => {
      setClick(false);
    }, 2000);
  };

  const device = useSelector(selectDevice);

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to('.wing-left', {
        duration: 1,
        attr: { points: '36,68.2 83.7,409.6 311.7,287.5' },
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.wing-right', {
        duration: 1,
        attr: { points: '36,68.2 344.1,269 460.8,242.6' },
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.inner-body', {
        duration: 1,
        attr: { points: '36,68.2 322.8,409 344.1,269' },
        repeat: -1,
        yoyo: true,
      });

      gsap.to('.outter-body', {
        duration: 1,
        attr: { points: '311.7,287.5 211.3,324.8 322.8,409' },
        repeat: -1,
        yoyo: true,
      });

      gsap.to('#Paperplane', {
        duration: 1,
        y: 20,
        repeat: -1,
        yoyo: true,
      });
    });
    return () => ctx.revert();
  }, []); */

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.gsap__reveal').forEach((elem) => {
        hide(elem);

        gsap.to(elem, {
          scrollTrigger: {
            trigger: elem,
            onEnter: function () {
              animateFrom(elem);
            },
            onEnterBack: function () {
              animateFrom(elem, -1);
            },
            onLeave: function () {
              hide(elem);
            }, // assure that the element is hidden when scrolled into view
            markers: true,
          },
        });
      });
    });
    return () => ctx.revert();
  }, [titleRef, textRef]);

  return (
    <section id="contact" className="section section--contact">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <Four className="index__number" fill="#2bffb1" />
            {/* {device === 'large' && <Paperplane className="paperplane" />} */}
            {/* {device === 'large' && <EmailAnim pinnedElement={'contact'} />} */}
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              faisons connaissance
            </h3>
            <h2
              ref={titleRef}
              className="section__header__title gsap__reveal gs__reveal__fromLeft"
            >
              contact<span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
          <p className="section__text text-big text-bold pt-2 pb-2">
            Pour toute question, n'hésitez pas à m'écrire.
          </p>
          <div
            className={`section__row${
              textMessage === 'email copy' || textMessage === 'email new'
                ? ' hover'
                : ''
            } ${click ? ' clicked' : ''}`}
          >
            {click ? (
              <p className="section__text text-copied">Email copié</p>
            ) : (
              <p className="section__text text-email text-toggle text-center text-bold">
                {device === 'large' && textMessage === 'email copy' ? (
                  <>
                    Copier email <FiArrowRight className="arrow-sliding" />
                  </>
                ) : device === 'large' && textMessage === 'email new' ? (
                  <>
                    Nouveau mail <FiArrowRight className="arrow-sliding" />
                  </>
                ) : (
                  <>&gt; contact@geoffreycoste.fr</>
                )}
              </p>
            )}

            <Button
              type="button"
              modifier={`copy-email${
                textMessage === 'email copy' ? ' hover' : ''
              }`}
              onEnter={() => updateMessage('email copy')}
              onLeave={() => updateMessage('email')}
              onClick={handleClick}
            >
              <FiCopy className="icon" />
            </Button>
            <Button
              type="button"
              modifier={`open-email${
                textMessage === 'email new' ? ' hover' : ''
              }`}
              onEnter={() => updateMessage('email new')}
              onLeave={() => updateMessage('email')}
            >
              <a
                className="btn__link"
                href="mailto:contact@geoffreycoste.fr?subject=Bonjour !"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiExternalLink className="icon" />
              </a>
            </Button>
          </div>
          <div ref={textRef} className="section__text gsap__reveal">
            <p className="text-blue-gray text-mb pt-2">
              Retrouvez-moi également sur{' '}
              <Link
                className="link"
                to="https://www.linkedin.com/in/geoffrey-c-19a431156"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-bold">LinkedIn</span>
              </Link>{' '}
              pour échanger en toute simplicité.
            </p>
            <p className="section__text text-blue-gray text-mb">
              Vous trouverez également certains de mes projets sur{' '}
              <Link
                className="link"
                to="https://github.com/GeoffreyCoste"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-bold">GitHub</span>
              </Link>{' '}
              ou{' '}
              <Link
                className="link"
                to="https://codepen.io/MaMz13"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-bold">Codepen</span>
              </Link>
              .
            </p>
            <p className="section__text text-blue-gray text-mb">
              Pour le design, suivez-moi sur{' '}
              <Link
                className="link"
                to="https://www.behance.net/GeoffreyCoste"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-bold">Behance</span>
              </Link>{' '}
              et{' '}
              <Link
                className="link"
                to="https://dribbble.com/GeoffreyCoste"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-white text-bold">Dribbble</span>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
      <div className="section__bottom">
        <ThanksCircle className="section__bottom__img img-animated" />
        {/* <EmailAnim pinnedElement={'contact'} /> */}
      </div>
    </section>
  );
};

export default SectionContact;
