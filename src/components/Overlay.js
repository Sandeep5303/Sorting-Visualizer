import React, { useEffect } from 'react';
import { TweenMax, Expo } from 'gsap';

const Overlay = () => {
  useEffect(() => {
    TweenMax.to('.first', 1.5, {
      delay: 0.3,
      top: '-100%',
      ease: Expo.easeInOut,
    });

    TweenMax.to('.second', 1.5, {
      delay: 0.5,
      top: '-100%',
      ease: Expo.easeInOut,
    });

    TweenMax.to('.third', 1.5, {
      delay: 0.7,
      top: '-100%',
      ease: Expo.easeInOut,
    });
  }, []);

  return (
    <>
      <div className='overlay first'></div>
      <div className='overlay second'></div>
      <div className='overlay third'></div>
    </>
  );
};

export default Overlay;
