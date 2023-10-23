import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IMG1 from './assets/social-networking-app-case-study.png';
import IMG2 from './assets/karavan-social-networking-app-screen-2.png';
import IMG3 from './assets/karavan-social-networking-app-screen.png';
import IMG4 from './assets/developers-for-social-media-app.png';
import IMG5 from './assets/karavan_2.png';
import { pageFiveLeftSideColor, pageFiveRightSideColor } from './Variable';
import './css/pagefive.css';

const PageFive = () => {
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
      <div className="sect-five-container grid position-relative">
        <svg
          version="1.1"
          id="transring"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          viewBox="0 0 414 414"
          style={{ enableBackground: 'new 0 0 414 414', backgroundColor: '' }}
          xmlSpace="preserve"
          className="sect-one-svg position-absolute"
        >
          <circle cx="210" cy="210" r="200" fill={pageFiveLeftSideColor} />
        </svg>
        <div
          className="sect-five-left-side text-white position-relative"
          style={{ background: pageFiveLeftSideColor }}
        >
          <div className="sect-five-left-side-item-one position-absolute">
            <div
              className="sect-five-left-side-item-one-item"
              ref={leftSideItemOneItem}
            >
              <div>
                <h5>Text Headline</h5>
                <div className="text-end">
                  <h1>Text Headline</h1>
                  <h5>Footer headline</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sect-five-left-side-item-two position-absolute w-100">
            <div
              className="sect-five-left-side-item-two-item d-flex flex-column gap-3"
              ref={leftSideItemTwoItem}
            >
              <h1 className="fw-bold">ABC 4</h1>
              <p>This is sample text for ABC 4</p>
            </div>
          </div>
          <div className="sect-five-left-side-item-three position-absolute w-100">
            <div className="sect-five-left-side-item-three-item  d-flex justify-content-between align-items-center w-75">
              <div
                className="sect-five-left-side-item-three-item-one d-flex align-items-center gap-2"
                ref={vewCaseStudy}
              >
                <h5>Vew Case Study - </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sect-five-right-side w-100 align-items-center justify-content-center position-relative"
          style={{ backgroundColor: pageFiveRightSideColor }}
        >
          <div
            className="sect-five-right-side-image-container d-flex align-items-center justify-content-center"
            ref={rightSideImage}
          >
            <img
              src={IMG1}
              alt="pageoneimg"
              className="sect-five-rigth-side-image1 position-absolute"
            />
            <img
              src={IMG2}
              alt="pagetwoimg"
              className="sect-five-rigth-side-image2 position-absolute"
            />
            <img
              src={IMG3}
              alt="pagetwoimg"
              className="sect-five-rigth-side-image3 position-absolute"
            />
            <img
              src={IMG4}
              alt="pagetwoimg"
              className="sect-five-rigth-side-image4 position-absolute"
            />
            <img
              src={IMG5}
              alt="pagetwoimg"
              className="sect-five-rigth-side-image5 position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFive;
