import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import happy from './assets/svg with paths.svg';
import workout from './assets/developers-for-social-media-app.png';
import greensocklogo from './assets/domi-img1.png';
import './css/pathslice.css';

function App() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('.first-paragraph'),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top top',
          end: 'bottom center',
          scrub: true,
        },
      },
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector('#gsap-logo'),
      {
        opacity: 0,
        scale: 0.2,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: element.querySelector('.first'),
          start: 'top center',
          end: 'bottom top',
          scrub: true,
        },
      },
    );
  }, []);
  useEffect(() => {
    const element = ref.current;
    gsap.from(element.querySelector('.line'), {
      scale: 0,
      ease: 'none',
      scrollTrigger: {
        trigger: element.querySelector('.third'),
        scrub: true,
        start: 'top bottom',
        end: 'top top',
      },
    });
  }, []);

  return (
    <div className="App" ref={ref}>
      <div className="first">
        <h1>ScrollTrigger</h1>
        <p className="first-paragraph">
          is the coolest Greensock plugin.
          <span role="img" aria-label="celebrating">
            🥳
          </span>
        </p>
        <div className="logo-main">
          <img src={workout} id="workout-logo" alt="workout" />
        </div>
      </div>
      <div className="second">
        <div className="logo-main">
          <img src={greensocklogo} id="gsap-logo" alt="greensocklogo" />
        </div>
      </div>
      <div className="third">
        <p>
          <span className="line" />
        </p>
        <div className="logo-main">
          <img src={happy} id="happy-logo" alt="happy" className="bg-primary" />
        </div>
      </div>
    </div>
  );
}

export default App;
