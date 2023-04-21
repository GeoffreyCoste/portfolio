import { gsap } from 'gsap';

export const animateFrom = (elem, direction) => {
  direction = direction || 1;
  var x = 0,
    y = direction * 100;
  if (elem.classList.contains('gs__reveal__fromLeft')) {
    x = -100;
    y = 0;
  } else if (elem.classList.contains('gs__reveal__fromRight')) {
    x = 100;
    y = 0;
  }
  elem.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  elem.style.opacity = '0';
  gsap.fromTo(
    elem,
    { x: x, y: y, autoAlpha: 0 },
    {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
    }
  );
};

export const hide = (elem) => {
  gsap.set(elem, { autoAlpha: 0 });
};
