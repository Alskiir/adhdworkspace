import React, { useEffect, useState } from 'react';

const BlockPageOne: React.FC = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const updateTime = (time: number) => {
      setTime(time);
    };

    window.Main.on('time-update', updateTime);

    // Cleanup function
    return () => {
      window.Main.off('time-update', updateTime);
    };
  }, []);

  const startTimerButton = () => {
    window.Main.sendStartTime(1500); // seconds
    console.log('Start Timer button clicked');
  };

  const stopTimerButton = () => {
    window.Main.sendStopTime();
    console.log('Stop Timer button clicked');
  };

  const killProcessButton = () => {
    window.Main.sendKillProcess();
    console.log('Kill Process button clicked');
  };

  const detectProcessButton = () => {
    window.Main.sendDetectProcess();
    console.log('Detect Process button clicked');
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center h-full bg-gray-800 space-y-4">
      <h1 className="text-2xl text-gray-200">
        <span>BLOCK</span> TEST PAGE 1
      </h1>
      <h2 className="text-xl text-gray-200">Time left: {time}</h2>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={startTimerButton}
      >
        Start Timer
      </button>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={stopTimerButton}
      >
        Stop Timer
      </button>
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
