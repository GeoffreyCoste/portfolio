import React, { useState, useRef, useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectTheme } from '../../app/selectors';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { horizontalLoop } from '../../utils/helpers/HorizontalLoop';
import './style.scss';

gsap.registerPlugin(ScrollTrigger);

const TextBanner = () => {
  // Setting mouse coordinates
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const theme = useSelector(selectTheme);

  const bannerRef = useRef();
  const mouseFollowRef = useRef();

  const handleWindowMouseMove = (event) => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY,
    });
  };

  useLayoutEffect(() => {
    window.addEventListener('mousemove', handleWindowMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleWindowMouseMove);
    };
  });

  useLayoutEffect(() => {
    bannerRef.current.addEventListener('mouseover', () => {
      let ctx = gsap.context(() => {
        gsap.to(mouseFollowRef.current, { autoAlpha: 1 });
      });
      return () => ctx.revert();
    });
    bannerRef.current.addEventListener('mouseout', () => {
      let ctx = gsap.context(() => {
        gsap.to(mouseFollowRef.current, { autoAlpha: 0 });
      });
      return () => ctx.revert();
    });
  });

  useLayoutEffect(() => {
    // Create array of elements to tween on
    const boxes1 = gsap.utils.toArray('.box-line-1');
    const boxes2 = gsap.utils.toArray('.box-line-2');

    // Setup the tween
    const loop1 = horizontalLoop(boxes1, {
      paused: true, // Sets the tween to be paused initially
      repeat: -1, // Makes sure the tween runs infinitely
    });
    const loop2 = horizontalLoop(boxes2, {
      paused: true, // Sets the tween to be paused initially
      repeat: -1, // Makes sure the tween runs infinitely
    });

    // Start the tween
    loop1.play(); // Call to start playing the tween
    loop2.play(); // Call to start playing the tween

    let ctx = gsap.context(() => {
      gsap.to(bannerRef, {
        scrollTrigger: {
          trigger: '.banner__body',
          start: 'top top',
          end: '',
          pin: true,
          pinSpacing: false,
          /* markers: true, */
        },
      });
      gsap.to(bannerRef, {
        scrollTrigger: {
          trigger: '.container-1',
          /* markers: true, */
          onUpdate: function (self) {
            self.direction === -1 ? loop1.timeScale(-1) : loop1.timeScale(1); // onUpdate of the ST toggling direction of tween via changing its timeScale depending on direction of scroll
          },
        },
      });
      gsap.to(bannerRef, {
        scrollTrigger: {
          trigger: '.container-2',
          /* markers: true, */
          onUpdate: function (self) {
            self.direction === -1 ? loop2.timeScale(1) : loop2.timeScale(-1); // onUpdate of the ST toggling direction of tween via changing its timeScale depending on direction of scroll
          },
        },
      });
    }, bannerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={bannerRef} className="banner">
      <div className="banner__body">
        <p className="banner__body__text">et si nous commencions à faire de</p>
        <div className="banner__body__container container container-1">
          <div className="container__items items">
            <div className="items__box box-line-1">grandes</div>
            <div className="items__box box-line-1">choses</div>
            <div
              className={`items__box box-line-1 box-text-stroke box-text-${theme}`}
              data-text="grandes"
            >
              grandes
            </div>
            <div
              className={`items__box box-line-1 box-text-stroke box-text-${theme}`}
              data-text="choses"
            >
              choses
            </div>
          </div>
        </div>
        <div className="banner__body__container container container-2">
          <div className="container__items items">
            <div
              className={`items__box box-line-2 box-text-stroke box-text-${theme}`}
              data-text="ensemble"
            >
              ensemble
            </div>
            <div className="items__box box-line-2">ensemble</div>
            <div
              className={`items__box box-line-2 box-text-stroke box-text-${theme}`}
              data-text="ensemble"
            >
              ensemble
            </div>
            <div className="items__box box-line-2">ensemble</div>
          </div>
        </div>
      </div>
      <div
        ref={mouseFollowRef}
        className="mouse-follow"
        style={{
          top: `${mousePosition.y}px`,
          left: `${mousePosition.x}px`,
        }}
      >
        ?
      </div>
    </div>
  );
};

export default TextBanner;
