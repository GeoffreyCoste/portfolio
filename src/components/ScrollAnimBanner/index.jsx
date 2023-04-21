import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import StackedText from './StackedText';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const ScrollAnimBanner = () => {
  const banner = useRef();
  const wordLeft = useRef();
  const wordRight = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.utils.toArray('.banner__side-word').forEach((word) => {
        gsap.to(word, {
          scrollTrigger: {
            trigger: word,
            start: 'center 70%',
            end: 'center 30%',
            toggleActions: 'play reverse play reverse',
          },
          opacity: 1,
          ease: 'none',
        });
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="banner" ref={banner}>
      <div className="banner__side-word" ref={wordLeft}>
        Let's
      </div>
      <StackedText />
      <div className="banner__side-word" ref={wordRight}>
        together
      </div>
    </div>
  );
};

export default ScrollAnimBanner;
