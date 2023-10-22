import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IMG1 from './assets/veme-blockchain-app-developed.png';
import IMG2 from './assets/veme-app-ui-design.png';
import './css/pagetwo.css';
import { pageTwoRightSideColor, pageTwoleftSideColor } from './Variable';

const PageTwo = () => {
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
      <div className="sect-two-container grid position-relative">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 241"
          preserveAspectRatio="none"
          className="sect-two-svg position-absolute"
        >
          <circle
            cx="360"
            cy="120"
            r="100"
            fill={pageTwoleftSideColor}
            className="sect-two-svg-circle"
          />
        </svg>
        <div
          className="sect-two-left-side text-white position-relative"
          style={{ background: pageTwoleftSideColor }}
        >
          <div className="sect-two-left-side-item-one position-absolute">
            <div
              className="sect-two-left-side-item-one-item"
              ref={leftSideItemOneItem}
            >
              <div className="">
                <h5>Revolution</h5>
                <div className="text-end">
                  <h1 className="fw-bold">Blockchain</h1>
                  <h5>Revolution</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sect-two-left-side-item-two position-absolute w-100">
            <div
              className="sect-two-left-side-item-two-item d-flex flex-column gap-3"
              ref={leftSideItemTwoItem}
            >
              <h1 className="fw-bold">ABC 1</h1>
              <p>
                This is sample text for ABC 1
              </p>
            </div>
          </div>
          <div className="sect-two-left-side-item-three position-absolute w-100">
            <div className="sect-two-left-side-item-three-item  d-flex justify-content-between align-items-center w-75">
              <div
                className="sect-two-left-side-item-three-item-one d-flex align-items-center gap-2"
                ref={vewCaseStudy}
              >
                <h5>Vew Case Study - </h5>
                <button type="button" className="btn sect-two-com-soon-btn text-white">Comming Soon</button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sect-two-right-side w-100 align-items-center justify-content-center position-relative"
          style={{ backgroundColor: pageTwoRightSideColor }}
        >
          <div
            className="sect-two-right-side-image-container d-flex align-items-center justify-content-center"
            ref={rightSideImage}
          >
            <img
              src={IMG1}
              alt="pageoneimg"
              className="sect-two-rigth-side-image1 position-absolute"
            />
            <img
              src={IMG2}
              alt="pagetwoimg"
              className="sect-two-rigth-side-image2 position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageTwo;
