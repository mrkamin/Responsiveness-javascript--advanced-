import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div className="path-slider">
    <Link to="/" className="path-slider__item path-slider__item--1">
      <div className="item__circle-one" />

    </Link>
    <Link to="/pagetwo" className="path-slider__item path-slider__item--2">
      <div className="item__circle-two" />

    </Link>
    <Link to="/pagethree" className="path-slider__item path-slider__item--3">
      <div className="item__circle-three" />

    </Link>
    <Link to="/pagefour" className="path-slider__item path-slider__item--4">
      <div className="item__circle-four" />

    </Link>
    <Link to="/pagefive" className="path-slider__item path-slider__item--5">
      <div className="item__circle-five" />

    </Link>
    <Link to="/pagesix" className="path-slider__item path-slider__item--6">
      <div className="item__circle-six" />

    </Link>
    <Link to="/pageseven" className="path-slider__item path-slider__item--7">
      <div className="item__circle-seven" />

    </Link>
  </div>
);

export default Navbar;
