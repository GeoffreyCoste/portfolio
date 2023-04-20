import React, { useLayoutEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../../app/selectors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const StackedText = () => {
  const theme = useSelector(selectTheme);

  const word = useRef();
  const wordMain = useRef();
  const wordElem1 = useRef();
  const wordElem2 = useRef();
  const wordElem3 = useRef();
  const wordElem4 = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline({
        repeat: 0,
      });

      tl.to(wordElem1.current, {
        scrollTrigger: {
          trigger: word.current,
          start: 'top 85%',
          end: 'bottom 71%',
          scrub: true,
          toggleActions: 'play reverse play reverse',
        },
        yPercent: -35,
      })
        .to(wordElem2.current, {
          scrollTrigger: {
            trigger: word.current,
            start: 'top 99%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
          yPercent: -25,
        })
        .to(wordElem3.current, {
          scrollTrigger: {
            trigger: word.current,
            end: 'bottom 79%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
          yPercent: 20,
        })
        .to(wordElem4.current, {
          scrollTrigger: {
            trigger: word.current,
            start: 'top 99%',
            end: 'bottom 79%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
          yPercent: 35,
        });
    });
    return () => ctx.revert();
  }, [word, wordMain, wordElem1, wordElem2, wordElem3, wordElem4]);

  return (
    <div className="stacked-text" ref={word}>
      <div
        className={`stacked-text__word word-main word-${theme}`}
        ref={wordMain}
      >
        create
      </div>
      <div
        className={`stacked-text__word word-layer-1 word-${theme}`}
        ref={wordElem1}
      >
        create
      </div>
      <div
        className={`stacked-text__word word-layer-2 word-${theme}`}
        ref={wordElem2}
      >
        create
      </div>
      <div
        className={`stacked-text__word word-layer-3 word-${theme}`}
        ref={wordElem3}
      >
        create
      </div>
      <div
        className={`stacked-text__word word-layer-4 word-${theme}`}
        ref={wordElem4}
      >
        create
      </div>
    </div>
  );
};
export default StackedText;
