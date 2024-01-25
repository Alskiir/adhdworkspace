import React from 'react';
import LeftMenuButton from './leftMenuButton';
import { leftMenuData } from './leftMenuData';

interface LeftMenuContainerProps {
  setSelectedLeftMenuButton: React.Dispatch<React.SetStateAction<string>>;
}

const LeftMenuContainer: React.FC<LeftMenuContainerProps> = ({ setSelectedLeftMenuButton }) => {
  return (
    <div className="flex flex-col bg-gray-900 h-full w-64 p-4">
      {leftMenuData.map((buttonData, index) => (
        <LeftMenuButton key={index} {...buttonData} 
        setSelectedLeftMenuButton={setSelectedLeftMenuButton} />
      ))}
    </div>
  );
};

export default LeftMenuContainer;
