import React from 'react';
import { Link } from 'react-router-dom';

const Svg = () => (
  <>
    <svg
      version="1.1"
      id="transring"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 414 414"
      style={{ enableBackground: 'new 0 0 414 414' }}
      xmlSpace="preserve"
      className="svg position-absolute"
    >
      <path
        id="Transparent_Ring"
        className="transrg"
        style={{
          opacity: 0.4,
          fill: 'none',
          stroke: '#FFFFFF',
          strokeWidth: 2, // Corrected style properties to camelCase
          strokeMiterlimit: 10, // Corrected style properties to camelCase
          enableBackground: 'new', // Corrected style properties to camelCase
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
      />

      <path
        id="Opaque_Ring"
        className="transrgwht"
        strokeDasharray="0,1000"
        style={{
          fill: 'none',
          stroke: 'rgb(255, 255, 255)',
          strokeWidth: 2,
          strokeMiterlimit: 10,
          strokeDasharray: '10, 1000',
        }}
        d="M84.2,85c31.3-31.5,74.7-51,122.7-51c95.5,0,173,77.5,173,173s-77.5,173-173,173
                c-47.8,0-91-19.4-122.3-50.7"
      />

      <Link to="/">
        <g id="Dots1" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill1"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M84,80 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
          <g>
            <path
              className="dotsstro1"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M84,80c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 87, 80, 84,80 z"
            />
          </g>
        </g>
        {' '}

      </Link>
      <Link to="/pagetwo">
        <g id="Dots2" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill2"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
          <g>
            <path
              className="dotsstro2"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M206.8,29c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6S 210.1,29, 206.8,29 z M206.8"
            />
          </g>
        </g>
      </Link>
      <Link to="/pagethree">
        <g id="Dots3" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill3"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
          <g>
            <path
              className="dotsstro3"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M332,85 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 335,85, 332,85 z M332"
            />
          </g>
        </g>
      </Link>
      <Link to="/pagefour">
        <g id="Dots4" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill4"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
          <g>
            <path
              className="dotsstro4"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M380,205 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 383,205, 380,205 z M380"
            />
          </g>
        </g>
      </Link>
      <Link to="/pagefive">
        <g id="Dots5" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill5"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
          <g>
            <path
              className="dotsstro5"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M335,315 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 340,315, 335,315 z M335"
            />
          </g>
        </g>
      </Link>
      <Link to="/pagesix">
        <g id="Dots6" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill6"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
          <g>
            <path
              className="dotsstro6"
              style={{
                opacity: 1,
                fill: 'none',
                stroke: 'rgb(255, 255, 255)',
                strokeWidth: 2,
                strokeMiterlimit: 10,
              }}
              d="M210,375 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 215,375, 210,375 z M210"
            />
          </g>
        </g>
      </Link>
      <Link to="/pageseven">
        <g id="Dots7" className="dots-nav">
          <g>
            <path
              className="dotsst dotsfill7"
              style={{ fill: 'rgb(0, 146, 255)', opacity: 1 }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
          <g>
            <path
              className="dotsstro7"
              style={{
                opacity: 1, fill: 'none', stroke: 'rgb(255, 255, 255)', strokeWidth: 2, strokeMiterlimit: 10,
              }}
              d="M88,324 c-3.3,0-6,2.7-6,6s2.7,6,6,6s6-2.7,6 -6 S 92,324, 88,324 z M88"
            />
          </g>
        </g>
      </Link>
    </svg>
  </>
);

export default Svg;