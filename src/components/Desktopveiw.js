import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageOne from './PageOne';
import PageTwo from './PageTwo';
import PageThree from './PageThree';
import PageFour from './PageFour';
import PageFive from './PageFive';
import PageSix from './PageSix';
import PageSeven from './PageSeven';
import Navbar from './Navbar';
import Svg from './Svg';

const Desktopveiw = () => (
  <>
    <Router>
      <div className="desktopveiw-container">
        <Svg />
        <Navbar />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethree" element={<PageThree />} />
          <Route path="/pagefour" element={<PageFour />} />
          <Route path="/pagefive" element={<PageFive />} />
          <Route path="/pagesix" element={<PageSix />} />
          <Route path="/pageseven" element={<PageSeven />} />
        </Routes>
      </div>
    </Router>
  </>
);
export default Desktopveiw;
