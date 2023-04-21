import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const EmailAnim = ({ pinnedElement }) => {
  const spriteItem = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let frame_count = 4,
        offset_value = 420;

      gsap.to('spriteItem', {
        backgroundPosition: -offset_value * frame_count + 'px',
        ease: 'steps(' + frame_count + ')', // use a stepped ease for the sprite sheet
        scrollTrigger: {
          trigger: '#' + pinnedElement,
          start: 'top top',
          end: '+=' + frame_count * offset_value,
          pin: true,
          scrub: true,
          /* markers: true, */
        },
      });

      /* gsap.to('.sprite__item', {
        scrollTrigger: {
          trigger: '.sprite__item',
          toggleActions: 'restart reverse play reverse',
        },
        backgroundPosition: -offset_value * frame_count + 'px',
        duration: 3,
      }); */
    });
    return () => ctx.revert();
  }, [spriteItem, pinnedElement]);

  return (
    <div className="anim anim-email">
      <div className="anim__item"></div>
      <div className="anim__item sprite">
        <div className="sprite__item" ref={spriteItem}></div>
      </div>
    </div>
  );
};

export default EmailAnim;
