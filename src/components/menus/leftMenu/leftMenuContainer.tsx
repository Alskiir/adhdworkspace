import React from 'react';
import LeftMenuButton from './leftMenuButton';
import { leftMenuData } from './leftMenuData';

const LeftMenuContainer: React.FC = () => {
  return (
    <div className="flex flex-col bg-gray-800 h-full w-64 p-4">
      {leftMenuData.map((buttonData, index) => (
        <LeftMenuButton key={index} name={buttonData.name} icon={buttonData.icon} alt={buttonData.alt} />
      ))}
    </div>
  );
};

export default LeftMenuContainer;