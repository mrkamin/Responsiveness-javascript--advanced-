import React from 'react';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import PageOne from './components/PageOne';
import PageTwo from './components/PageTwo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/pagetwo" element={<PageTwo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
