import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppBar from './AppBar';
import { LeftMenu, TopMenu } from './components/menus/menuExports';
import { ButtonOnePage, ButtonTwoPage, ButtonThreePage, ButtonFourPage } from './components/pages/pageExports'; 

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
              <Route path="/button1" element={<ButtonOnePage />} />
              <Route path="/button2" element={<ButtonTwoPage />} />
              <Route path="/button3" element={<ButtonThreePage />} />
              <Route path="/button4" element={<ButtonFourPage />} />
              {/* Add other routes here */}
            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}

export default App;
