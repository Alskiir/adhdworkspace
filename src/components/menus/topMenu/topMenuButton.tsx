import React from 'react';
import { Link } from 'react-router-dom';

interface TopMenuButtonProps {
  name: string; // Name of button
  path: string; // Path of button
}

const TopMenuButton: React.FC<TopMenuButtonProps> = ({ name, path }) => {
  return (
    <Link to={path}>
      <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mr-2">
        {name}
      </button>
    </Link>
  );
};

export default TopMenuButton;
