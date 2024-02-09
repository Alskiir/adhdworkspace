import React from 'react';

const BlockPageOne: React.FC = () => {
  const killProcessButton = () => {
    window.Main.killProcess();
    console.log('Kill Process button clicked');
  };

  const detectProcessButton = () => {
    window.Main.detectProcess();
    console.log('Detect Process button clicked');
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center h-full bg-gray-800 space-y-4">
      <h1 className="text-2xl text-gray-200">
        <span>BLOCK</span> TEST PAGE 1
      </h1>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={killProcessButton}
      >
        Kill Process
      </button>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={detectProcessButton}
      >
        Detect Process
      </button>
    </div>
  );
};

export default BlockPageOne;
