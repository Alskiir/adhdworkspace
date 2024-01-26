import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import AppBar from './AppBar';
import { LeftMenu, TopMenu } from './components/menus/menuExports';
import { leftMenuData } from './components/menus/leftMenu/leftMenuData';
import { topMenuData } from './components/menus/topMenu/topMenuData';
import { HomePageOne, HomePageTwo, BlockPageOne, BlockPageTwo } from './components/pages/pageExports';

function RoutesWithNav({
  selectedLeftMenuButton,
  setSelectedLeftMenuButton,
  selectedTopMenuButton,
  setSelectedTopMenuButton
}: {
  selectedLeftMenuButton: string;
  setSelectedLeftMenuButton: React.Dispatch<React.SetStateAction<string>>;
  selectedTopMenuButton: string;
  setSelectedTopMenuButton: React.Dispatch<React.SetStateAction<string>>;
}) {
  const navigate = useNavigate();

  // When the selected left menu button changes, navigate to the route of the first top menu button
  useEffect(() => {
    const topMenuButtons = topMenuData[selectedLeftMenuButton];
    if (topMenuButtons && topMenuButtons.length > 0) {
      // If the selected left menu button has top menu buttons
      const selectedTopMenuButtonData = topMenuButtons.find((button) => button.name === selectedTopMenuButton); // Find the selected top menu button in the top menu buttons for the selected left menu button
      if (!selectedTopMenuButtonData) {
        // If the selected top menu button is not in the top menu buttons for the selected left menu button
        setSelectedTopMenuButton(topMenuButtons[0].name);
        navigate(topMenuButtons[0].path); // Navigate to the first top menu button's route
      }
    }
  }, [navigate, selectedLeftMenuButton, setSelectedLeftMenuButton, selectedTopMenuButton, setSelectedTopMenuButton]); // Add navigate as a dependency

  return (
    <Routes>
      <Route path="/" element={<HomePageOne />} />
      <Route path="/HomeButton2" element={<HomePageTwo />} />
      <Route path="/BlockButton1" element={<BlockPageOne />} />
      <Route path="/BlockButton2" element={<BlockPageTwo />} />
      {/* Add other routes here */}
    </Routes>
  );
}

function App() {
  // console.log(window.ipcRenderer);
  const [selectedLeftMenuButton, setSelectedLeftMenuButton] = useState(leftMenuData[0].name);
  const [selectedTopMenuButton, setSelectedTopMenuButton] = useState('');

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
            <RoutesWithNav
              selectedLeftMenuButton={selectedLeftMenuButton}
              setSelectedLeftMenuButton={setSelectedLeftMenuButton}
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
