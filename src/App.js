import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';
import Navbar from './components/Navbar';
import Pagethree from './components/PageThree';
import PageFour from './components/PageFour';
import PageFive from './components/PageFive';
import PageSix from './components/PageSix';
import PageSeven from './components/PageSeven';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
          <Route path="/pagethree" element={<Pagethree />} />
          <Route path="/pagefour" element={<PageFour />} />
          <Route path="/pagefive" element={<PageFive />} />
          <Route path="/pagesix" element={<PageSix />} />
          <Route path="/pageseven" element={<PageSeven />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
