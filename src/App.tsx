import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import { LeftMenu, TopMenu } from './components/menus/menuExports';
import { HomePageOne, HomePageTwo, BlockPageOne, BlockPageTwo } from './components/pages/pageExports'; 

function App() {
  console.log(window.ipcRenderer);

  const [selectedLeftMenuButton, setSelectedLeftMenuButton] = useState('Button 1');

  return (
    <div className="flex flex-col h-screen">
      {window.Main && (
        <div className="flex-none">
          <AppBar />
        </div>
      )}
      <div className="flex flex-grow">
        <LeftMenu setSelectedLeftMenuButton={setSelectedLeftMenuButton} />
        <div className="flex flex-col flex-grow">
          <Router>
            <TopMenu selectedLeftMenuButton={selectedLeftMenuButton} />
            <Routes>
              <Route path="/" element={<HomePageOne />} />
              <Route path="/HomeButton2" element={<HomePageTwo />} />
              <Route path="/BlockButton1" element={<BlockPageOne />} />
              <Route path="/BlockButton2" element={<BlockPageTwo />} />
              {/* Add other routes here */}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
