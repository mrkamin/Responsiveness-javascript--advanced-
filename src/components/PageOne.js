import React from 'react';
import { GoArrowRight } from 'react-icons/go';
import IMG1 from './assets/mrkamin (1).png';
import IMG2 from './assets/mrkamin.png';
import IMG3 from './assets/world-communication-awards-for-best-digital-experience.png';

const PageOne = () => (
  <div className="grid section-container text-white">
    <div className="left-side">
      <div className="left-side-item-one position-relative text-end">
        <div className="position-absolute w-100 left-side-item-one-item">
          <h1 className="fw-bold">25M+ Dwonloads</h1>
          <p>on appstore & google playstore</p>
        </div>
        <div className="position-absolute circle-container w-100 d-flex justify-content-end">
          <p className="rounded-circle circle" />
        </div>
      </div>
      <div className="left-side-item-two position-relative">
        <div className="position-absolute left-side-item-two-item d-flex flex-column gap-3">
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
          <div className=" d-flex align-items-center gap-2">
            <h5>Vew Case Study </h5>
            <GoArrowRight className="fs-3" />
          </div>
          <h5>SKIP</h5>
        </div>
      </div>
    </div>
    <div className="right-side d-flex align-items-center justify-content-center">
      <div className="d-flex">
        <img src={IMG1} alt="pageoneimg" className="" />
        <img src={IMG2} alt="pagetwoimg" className="" />
      </div>
    </div>
  </div>
);

export default PageOne;
