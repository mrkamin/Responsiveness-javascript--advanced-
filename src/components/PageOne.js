import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { GoArrowRight } from 'react-icons/go';
import IMG1 from './assets/mrkamin (1).png';
import IMG2 from './assets/mrkamin.png';
import IMG3 from './assets/world-communication-awards-for-best-digital-experience.png';
import './css/pageone.css';
import { pageOneRightSideColor, pageOneleftSideColor } from './Variable';

const PageOne = () => {
  const pageone = useRef();
  const rightSideImage = useRef();
  const leftSideItemOneItem = useRef();
  const leftSideItemTwoItem = useRef();
  const vewCaseStudy = useRef();
  const skip = useRef();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.image-container', {
        duration: 2,
        y: '-100%',
        ease: 'bounce',
      });
      gsap.from(rightSideImage.current, {
        duration: 2,
        y: '-100%',
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
    <>
      <div className="sect-one-container grid position-relative">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 241"
          preserveAspectRatio="none"
          className="sect-one-svg position-absolute"
        >
          <circle cx="360" cy="120" r="100" fill={pageOneleftSideColor} />
        </svg>
        <div
          className="sect-one-left-side text-white position-relative"
          style={{ background: pageOneleftSideColor }}
        >
          <div className="sect-one-left-side-item-one position-absolute text-end w-100">
            <div
              className="sect-one-left-side-item-one-item"
              ref={leftSideItemOneItem}
            >
              <h1 className="fw-bold">25M+ Dwonloads</h1>
              <p>on appstore & google playstore</p>
            </div>
          </div>
          <div className="sect-one-left-side-item-two position-absolute w-100">
            <div
              className="sect-one-left-side-item-two-item d-flex flex-column gap-3"
              ref={leftSideItemTwoItem}
            >
              <img
                src={IMG3}
                alt="photo1"
                className="sect-one-left-side-item-two-item-image w-50"
              />
              <h1 className="fw-bold">ABC 123</h1>
              <p>
                We are the best Web Development
                <br />
                {' '}
                country in the world
              </p>
            </div>
          </div>
          <div className="sect-one-left-side-item-three position-absolute w-100">
            <div className="sect-one-left-side-item-three-item  d-flex justify-content-between align-items-center w-75">
              <div
                className="sect-one-left-side-item-three-item-one d-flex align-items-center gap-2"
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
          className="sect-one-right-side w-100 align-items-center justify-content-center position-relative"
          style={{ backgroundColor: pageOneRightSideColor }}
        >
          <div
            className="sect-one-right-side-image-container d-flex align-items-center justify-content-center"
            ref={rightSideImage}
          >
            <img
              src={IMG1}
              alt="pageoneimg"
              className="sect-one-rigth-side-image1"
            />
            <img
              src={IMG2}
              alt="pagetwoimg"
              className="sect-one-rigth-side-image2"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageOne;
