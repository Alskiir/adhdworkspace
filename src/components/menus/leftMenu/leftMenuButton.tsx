import React from 'react';

interface LeftMenuButtonProps {
  icon: string; // URL of the icon
  name: string; // Name of the button
  alt: string; // Alt text for the icon
  setSelectedLeftMenuButton: React.Dispatch<React.SetStateAction<string>>;
}

const LeftMenuButton: React.FC<LeftMenuButtonProps> = ({ name, icon, alt, setSelectedLeftMenuButton }) => {
  // When button is clicked, set selectedLeftMenuButton state to the name of the button
  const handleClick = () => {
    setSelectedLeftMenuButton(name);
  };

  return (
    <button
      className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
      onClick={handleClick}
    >
      <img src={icon} alt={alt} />
      {name}
    </button>
  );
};

export default LeftMenuButton;
