import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectDevice } from '../../app/selectors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { hide, animateFrom } from '../../utils/helpers/ScrollReveal';
import { ReactComponent as Two } from '../../assets/2.svg';
/* import { ReactComponent as LaptopFrame1 } from '../../assets/laptop-1.svg';
import { ReactComponent as LaptopFrame2 } from '../../assets/laptop-2.svg';
import { ReactComponent as LaptopFrame3 } from '../../assets/laptop-3.svg';
import { ReactComponent as LaptopFrame4 } from '../../assets/laptop-4.svg';
import { ReactComponent as LaptopFrame5 } from '../../assets/laptop-5.svg'; */
import Accordion from '../Accordion';
import Tabs from '../Tabs';
import Table from '../Table';
import { accordions } from './data';
import expertise from './data-expertise.json';
import diplomas from './data-diplomas.json';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const SectionSkills = () => {
  const device = useSelector(selectDevice);

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set('.section__laptop__frame', { autoAlpha: 0 });

      let frames = gsap.utils.toArray('.section__laptop__frame');

      let totalDuration = 1000;
      let singleDuration = totalDuration / frames.length;

      let tl = gsap.timeline();

      frames.forEach((frame, i) => {
        /* let tl = gsap.timeline(); *
        const framesContainer = document.querySelector('.section__laptop');
        const activeFrame = framesContainer.querySelector(
          '.section__laptop__frame.frame-' + i
        );

        ScrollTrigger.create({
          trigger: '.section--skills',
          start: 'top -=' + singleDuration * i,
          end: '+=' + singleDuration,
          /* pin: true,
          scrub: true, *
          scrub: true,
          animation: tl,
          /* toggleActions: 'play reverse play reverse', *
          markers: true,
        });

        tl.to(frame, { duration: 0.25 }, 0).set(
          activeFrame,
          { autoAlpha: 1 },
          0
        );
      });
    });
    return () => ctx.revert();
  }); */

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
            /* markers: true, */
          },
        });
      });
    });
    return () => ctx.revert();
  });

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let frame_count = 4,
        offset_value = 420;

      gsap.to('.section__sprite-anim', {
        backgroundPosition: -offset_value * frame_count + 'px',
        ease: 'steps(' + frame_count + ')', // use a stepped ease for the sprite sheet
        scrollTrigger: {
          trigger: '.section__sprite-anim',
          start: 'top top',
          end: '+=' + frame_count * offset_value,
          pin: true,
          scrub: true,
          /* pinSpacing: false, *
          markers: true,
        },
      });
    });
    return () => ctx.revert();
  }); */

  /* useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let frame_count = 4,
        offset_value = 420;

      gsap.to('.box__sprite__anim', {
        backgroundPosition: -offset_value * frame_count + 'px',
        ease: 'steps(' + frame_count + ')', // use a stepped ease for the sprite sheet
        scrollTrigger: {
          trigger: '.section__banner',
          start: 'top top',
          end: '+=' + frame_count * offset_value,
          pin: true,
          scrub: true,
          /* pinSpacing: false, *
          markers: true,
        },
      });
    });
    return () => ctx.revert();
  }); */

  return (
    <section id="skills" className="section section--skills">
      <div className="section__top">
        <div className="section__top__right">
          <div className="section__index index">
            <Two className="index__number" fill="#2bffb1" />
          </div>
        </div>
        <div className="section__top__left">
          <div className="section__header">
            <h3 className="section__header__baseline text-blue-gray">
              expertise
            </h3>
            <h2 className="section__header__title gsap__reveal gs__reveal__fromLeft">
              compétences
              <span className="title__text__dot text-green-neon">.</span>
            </h2>
          </div>
        </div>
      </div>
      <div className="section__bottom">
        {device === 'small' ? (
          <div className="section__accordion">
            <Accordion items={accordions} />
          </div>
        ) : (
          <div className="section__tabs gsap__reveal">
            <Tabs items={expertise} />
          </div>
        )}
        <div className="section__table table table-diplomas gsap__reveal">
          <span className="table__title">Diplômes</span>
          <Table items={diplomas} />
        </div>
        {/* {device === 'large' && (
          <div className="section__banner">
            <div className="section__banner__box box">
              <div className="box__cards">
                <div className="box__cards__layer box__cards__layer-1">
                  layer1
                </div>
                <div className="box__cards__layer box__cards__layer-2">
                  <div className="box__cards__layer__header">
                    <div className="dots">
                      <div className="dots__item"></div>
                      <div className="dots__item"></div>
                      <div className="dots__item"></div>
                    </div>
                  </div>
                </div>
                <div className="box__cards__layer box__cards__layer-3">
                  layer3
                </div>
              </div>
            </div>
            <div className="section__banner__box box">
              <div className="box__sprite">
                <div className="box__sprite__anim"></div>
              </div>
            </div>
          </div>
        )} */}
        {/* {device === 'large' && (
          <div className="section__sprite">
            <div className="section__sprite-anim" ref={pinRef}>
              <div className="sprite-anim__popups popups-items">
                <div className="popups-items__cards">
                  <div className="cards__layer cards__layer-1">layer1</div>
                  <div className="cards__layer cards__layer-2">
                    <div className="cards__layer__header">
                      <div className="dots">
                        <div className="dots__item"></div>
                        <div className="dots__item"></div>
                        <div className="dots__item"></div>
                      </div>
                    </div>
                  </div>
                  <div className="cards__layer cards__layer-3">layer3</div>
                </div>
              </div>
            </div>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default SectionSkills;
