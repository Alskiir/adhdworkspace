import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppBar from './AppBar';
import { LeftMenu, TopMenu } from './components/menus/menuExports';
import { leftMenuData } from './components/menus/leftMenu/leftMenuData';
import RoutesWithNav from './components/RoutesWithNav';

function App() {
  const [selectedLeftMenuButton, setSelectedLeftMenuButton] = useState(leftMenuData[0].name);
  const [selectedTopMenuButton, setSelectedTopMenuButton] = useState('');

  return (
    <div className="flex flex-col h-screen">
      {/* Uncomment to use AppBar */}
      {/* {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )} */}
      <div className="flex flex-grow">
        <LeftMenu setSelectedLeftMenuButton={setSelectedLeftMenuButton} />
        <div className="flex flex-col flex-grow">
          <Router>
            <TopMenu selectedLeftMenuButton={selectedLeftMenuButton} />
            <RoutesWithNav
              selectedLeftMenuButton={selectedLeftMenuButton}
              selectedTopMenuButton={selectedTopMenuButton}
              setSelectedTopMenuButton={setSelectedTopMenuButton}
            />
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
