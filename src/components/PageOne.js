import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoArrowRight } from 'react-icons/go';
import IMG1 from './assets/mrkamin (1).png';
import IMG2 from './assets/mrkamin.png';
import IMG3 from './assets/world-communication-awards-for-best-digital-experience.png';

const PageOne = () => {
  const pageone = useRef();
  const rightSideImage = useRef();
  const leftSideItemOneItem = useRef();
  const leftSideItemTwoItem = useRef();
  const vewCaseStudy = useRef();
  const skip = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.image-container', { duration: 2, y: '-100%', ease: 'bounce' });
      gsap.from(rightSideImage.current, { duration: 2, y: '-100%', ease: 'bounce' });
      gsap.from('left-side-item-one-item', { duration: 2, x: '-80%', ease: 'bounce' });
      gsap.from(leftSideItemOneItem.current, { duration: 2, x: '-80%', ease: 'bounce' });
      gsap.from('left-side-item-two-item', { duration: 2, y: '40%', ease: 'bounce' });
      gsap.from(leftSideItemTwoItem.current, { duration: 2, y: '40%', ease: 'bounce' });
      gsap.from('vew-case-study', { duration: 2, x: '-30%', ease: 'bounce' });
      gsap.from(vewCaseStudy.current, { duration: 2, x: '-30%', ease: 'bounce' });
      gsap.from('skip', { duration: 2, x: '40%', ease: 'bounce' });
      gsap.from(skip.current, { duration: 2, x: '40%', ease: 'bounce' });
    }, pageone);
    return () => ctx.revert();
  }, []);

  return (
    <div className="grid section-container text-white">
      <div className="left-side custom-clip-path ">
        <div className="left-side-item-one position-relative text-end">
          <div className="position-absolute w-100 left-side-item-one-item" ref={leftSideItemOneItem}>
            <h1 className="fw-bold">25M+ Dwonloads</h1>
            <p>on appstore & google playstore</p>
          </div>
          <div className="custom-shape-divider-top position-absolute ">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 975 1000" preserveAspectRatio="none">
              <path d="M0 0 L0 1000 L750 1000 L750 400 A50 55 10 0 0 750 120 L750 0 Z" fill="#6111a5" />
            </svg>
          </div>
        </div>
        <div className="left-side-item-two position-relative">
          <div className="position-absolute left-side-item-two-item d-flex flex-column gap-3" ref={leftSideItemTwoItem}>
            <img src={IMG3} alt="photo1" />
            <h1 className="fw-bold">ABC 123</h1>
            <p>
              We are the best Web Development
              <br />
              {' '}
              country in the world
            </p>
          </div>
        </div>
        <div className="left-side-item-three position-relative">
          <div className="left-side-item-three-item position-absolute d-flex justify-content-between align-items-center">
            <div className=" d-flex align-items-center gap-2 vew-case-study" ref={vewCaseStudy}>
              <h5>Vew Case Study </h5>
              <GoArrowRight className="fs-3" />
            </div>
            <h5 className="skip" ref={skip}>SKIP</h5>
          </div>
        </div>
      </div>
      <div className="right-side d-flex align-items-center justify-content-center">
        <div className="d-flex image-container" ref={rightSideImage}>
          <img src={IMG1} alt="pageoneimg" className="rigth-side-image" />
          <img src={IMG2} alt="pagetwoimg" className="rigth-side-image" />
        </div>
      </div>
    </div>
  );
};

export default PageOne;
