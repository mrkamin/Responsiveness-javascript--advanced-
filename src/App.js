import React from 'react';
import MobileView from './components/Mobileveiw';
import Desktopveiw from './components/Desktopveiw';

function App() {
  return (
    <div className="App">
      <div className="mobileview">
        <MobileView />
      </div>
      <div className="desktopview">
        <Desktopveiw />
      </div>

    </div>
  );
}

export default App;
