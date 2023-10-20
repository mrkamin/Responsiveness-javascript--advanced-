import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoArrowRight } from 'react-icons/go';
import IMG1 from './assets/pizza_box.png';
import IMG2 from './assets/dominos-bread.png';
import IMG3 from './assets/domi-img1.png';
import IMG4 from './assets/ux-strategy-for-mobile-app-devlopment.png';
import { pageThreeLeftSideColor, pageThreeRightSideColor } from './Variable';

const Pagethree = () => {
  const pageone = useRef();
  const rightSideImage3 = useRef();
  const rightSideImage4 = useRef();
  const rightSideImage1 = useRef();
  const rightSideImage2 = useRef();
  const leftSideItemOneItem = useRef();
  const leftSideItemTwoItem = useRef();
  const vewCaseStudy = useRef();
  const skip = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.page-three-img3', {
        duration: 2,
        y: '-10%',
        x: '20%',
        ease: 'bounce',
      });
      gsap.from(rightSideImage3.current, {
        duration: 2,
        y: '-10%',
        x: '20%',
        ease: 'bounce',
      });
      gsap.from('.page-three-img4', {
        duration: 2,
        y: '10%',
        x: '-20%',
        ease: 'bounce',
      });
      gsap.from(rightSideImage4.current, {
        duration: 2,
        y: '10%',
        x: '-20%',
        ease: 'bounce',
      });
      gsap.from('.page-three-img1', {
        duration: 2,
        y: '-50%',
        x: '-40%',
        ease: 'bounce',
      });
      gsap.from(rightSideImage1.current, {
        duration: 2,
        y: '-50%',
        x: '-40%',
        ease: 'bounce',
      });
      gsap.from('.page-three-img2', {
        duration: 2,
        y: '-20%',
        x: '50%',
        ease: 'bounce',
      });
      gsap.from(rightSideImage2.current, {
        duration: 2,
        y: '-20%',
        x: '50%',
        ease: 'bounce',
      });
      gsap.from('left-side-item-one-item', {
        duration: 2,
        x: '-80%',
        ease: 'bounce',
      });
      gsap.from(leftSideItemOneItem.current, {
        duration: 2,
        x: '-80%',
        ease: 'bounce',
      });
      gsap.from('left-side-item-two-item', {
        duration: 2,
        y: '40%',
        ease: 'bounce',
      });
      gsap.from(leftSideItemTwoItem.current, {
        duration: 2,
        y: '40%',
        ease: 'bounce',
      });
      gsap.from('vew-case-study', { duration: 2, x: '-30%', ease: 'bounce' });
      gsap.from(vewCaseStudy.current, {
        duration: 2,
        x: '-30%',
        ease: 'bounce',
      });
      gsap.from('skip', { duration: 2, x: '40%', ease: 'bounce' });
      gsap.from(skip.current, { duration: 2, x: '40%', ease: 'bounce' });
    }, pageone);
    return () => ctx.revert();
  }, []);

  return (
    <div className="grid section-container text-white">
      <div className="left-side custom-clip-path ">
        <div className="left-side-item-one position-relative text-end">
          <div
            className="position-absolute left-side-item-one-item ux-strategy"
            ref={leftSideItemOneItem}
          >
            <div className="text-start">
              <p>Redefining</p>
              <h1 className="fw-bold">UX Strategy</h1>
            </div>
            <p>and UI design</p>
          </div>
          <div className="scroll-containter" />
          <div className="custom-shape-divider-top position-absolute ">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 975 1000"
              preserveAspectRatio="none"
            >
              <path
                d="M0 0 L0 1000 L750 1000 L750 400 A50 55 10 0 0 750 120 L750 0 Z"
                fill={pageThreeLeftSideColor}
              />
            </svg>
          </div>
        </div>
        <div className="left-side-item-two position-relative w-100">
          <div
            className="position-absolute left-side-item-two-item d-flex flex-column gap-3 pagetwo-itemtwo"
            ref={leftSideItemTwoItem}
          >
            <h1 className="fw-bold">ABC 456</h1>
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
            <div
              className=" d-flex align-items-center gap-2 vew-case-study"
              ref={vewCaseStudy}
            >
              <h5>Vew Case Study </h5>
              <GoArrowRight className="fs-3" />
            </div>
            <h5 className="skip" ref={skip}>
              SKIP
            </h5>
          </div>
        </div>
      </div>
      <div
        className="right-side d-flex align-items-center justify-content-center "
        style={{ backgroundColor: pageThreeRightSideColor }}
      >
        <div className="d-flex image-container">
          <img
            src={IMG3}
            alt="photo1"
            className="page-three-img3 position-absolute"
            ref={rightSideImage3}
          />
          <img
            src={IMG4}
            alt="photo2"
            className="page-three-img4 position-absolute"
            ref={rightSideImage4}
          />
          <img
            src={IMG1}
            alt="pageoneimg"
            className="page-three-img1 position-absolute"
            ref={rightSideImage1}
          />
          <img
            src={IMG2}
            alt="pagetwoimg"
            className="page-three-img2 position-absolute"
            ref={rightSideImage2}
          />
        </div>
      </div>
    </div>
  );
};

export default Pagethree;
