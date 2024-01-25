import React from 'react';

// Defining properties for TopMenuButton component
interface TopMenuButtonProps {
  name: string; // Name of button
}

const TopMenuButton: React.FC<TopMenuButtonProps> = ({ name }) => {
  return (
    <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2">
      {name}
    </button>
  );
};

export default TopMenuButton;