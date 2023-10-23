import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import IMG1 from './assets/pizza_box.png';
import IMG2 from './assets/domi-img1.png';
import IMG3 from './assets/dominos-bread.png';
import IMG4 from './assets/dominos-bread1.png';
import IMG5 from './assets/dominos-masala.png';
import IMG6 from './assets/ux-strategy-for-mobile-app-devlopment.png';
import './css/pagefour.css';
import { pageFourLeftSideColor, pageFourRightSideColor } from './Variable';

const PageFour = () => {
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
      <div className="sect-four-container grid position-relative">
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
          className="pages-svg position-absolute"
        >
          <circle cx="210" cy="210" r="200" fill={pageFourLeftSideColor} />
        </svg>
        <div
          className="sect-four-left-side text-white position-relative"
          style={{ background: pageFourLeftSideColor }}
        >
          <div className="sect-four-left-side-item-one position-absolute">
            <div
              className="sect-four-left-side-item-one-item"
              ref={leftSideItemOneItem}
            >
              <div className="">
                <h5>Redefining</h5>
                <div className="text-end">
                  <h1 className="fw-bold">UX Strategy</h1>
                  <h5>and UI design</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="sect-four-left-side-item-two position-absolute w-100">
            <div
              className="sect-four-left-side-item-two-item d-flex flex-column gap-3"
              ref={leftSideItemTwoItem}
            >
              <h1 className="fw-bold">ABC 456</h1>
              <p>This is sample text for ABC 3</p>
            </div>
          </div>
          <div className="sect-four-left-side-item-three position-absolute w-100">
            <div className="sect-four-left-side-item-three-item  d-flex justify-content-between align-items-center w-75">
              <div
                className="sect-four-left-side-item-three-item-one d-flex align-items-center gap-2"
                ref={vewCaseStudy}
              >
                <h5>Vew Case Study - </h5>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sect-four-right-side w-100 align-items-center justify-content-center position-relative"
          style={{ backgroundColor: pageFourRightSideColor }}
        >
          <div
            className="sect-four-right-side-image-container d-flex align-items-center justify-content-center"
            ref={rightSideImage}
          >
            <img
              src={IMG1}
              alt="pageoneimg"
              className="sect-four-rigth-side-image1 position-absolute"
            />
            <img
              src={IMG2}
              alt="pagetwoimg"
              className="sect-four-rigth-side-image2 position-absolute"
            />
            <img
              src={IMG3}
              alt="pagetwoimg"
              className="sect-four-rigth-side-image3 position-absolute"
            />
            <img
              src={IMG4}
              alt="pagetwoimg"
              className="sect-four-rigth-side-image4 position-absolute"
            />
            <img
              src={IMG5}
              alt="pagetwoimg"
              className="sect-four-rigth-side-image5 position-absolute"
            />
            <img
              src={IMG6}
              alt="pagetwoimg"
              className="sect-four-rigth-side-image6 position-absolute"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PageFour;
