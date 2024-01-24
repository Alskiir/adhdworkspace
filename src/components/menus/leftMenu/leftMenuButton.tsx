import React from 'react';

interface LeftMenuButtonProps {
  icon: string;
  name: string;
  alt: string;
}

const LeftMenuButton: React.FC<LeftMenuButtonProps> = ({ name, icon, alt }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2">
      <img src={icon} alt={alt} />
      {name}
    </button>
  );
};

export default LeftMenuButton;