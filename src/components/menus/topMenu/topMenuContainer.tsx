import React from 'react';
import TopMenuButton from './topMenuButton';
import { topMenuData } from './topMenuData';

interface TopMenuContainerProps {
  selectedLeftMenuButton: string; // The name of selected left menu button
}

const TopMenuContainer: React.FC<TopMenuContainerProps> = ({ selectedLeftMenuButton }) => {
  // Getting the top menu buttons for the selected left menu button
  const topMenuButtons = topMenuData[selectedLeftMenuButton] || [];
  return (
    <div className="flex flex-row bg-gray-700 h-16 w-full p-4">
      {topMenuButtons.map((buttonData, index) => (
        <TopMenuButton key={index} {...buttonData} />
      ))}
    </div>
  );
};

export default TopMenuContainer;
