import React, { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { topMenuData } from './menus/topMenu/topMenuData';
import { HomePageOne, HomePageTwo, BlockPageOne, BlockPageTwo } from './pages/pageExports';

interface RoutesWithNavProps {
  selectedLeftMenuButton: string;
  selectedTopMenuButton: string;
  setSelectedTopMenuButton: React.Dispatch<React.SetStateAction<string>>;
}

const RoutesWithNav: React.FC<RoutesWithNavProps> = ({
  selectedLeftMenuButton,
  selectedTopMenuButton,
  setSelectedTopMenuButton
}) => {
  const navigate = useNavigate();

  // When the selected left menu button changes, navigate to the route of the first top menu button
  useEffect(() => {
    const topMenuButtons = topMenuData[selectedLeftMenuButton];
    if (topMenuButtons && topMenuButtons.length > 0) {
      const selectedTopMenuButtonData = topMenuButtons.find((button) => button.name === selectedTopMenuButton);
      if (!selectedTopMenuButtonData) {
        setSelectedTopMenuButton(topMenuButtons[0].name);
        navigate(topMenuButtons[0].path);
      }
    }
  }, [navigate, selectedLeftMenuButton, selectedTopMenuButton, setSelectedTopMenuButton]);

  return (
    <Routes>
      <Route path="/" element={<HomePageOne />} />
      <Route path="/HomeButton2" element={<HomePageTwo />} />
      <Route path="/BlockButton1" element={<BlockPageOne />} />
      <Route path="/BlockButton2" element={<BlockPageTwo />} />
    </Routes>
  );
};

export default RoutesWithNav;
