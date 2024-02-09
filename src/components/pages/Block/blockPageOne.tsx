import React, { useEffect, useState } from 'react';

let timerId: NodeJS.Timeout | null = null;
type TimerData = {
  isWorking: boolean;
  duration: number;
  cycleCount: number;
  shortBreak: number;
  longBreak: number;
};

const BlockPageOne: React.FC = () => {
  const [timerData, setTimerData] = useState<TimerData>();

  const handleClick = () => {
    window.Main.killProcess();
    console.log('Kill Process.');
  };

  const startTimer = () => {
    window.Main.startPomodoro(true, 25, 5, 15, 4).then((id) => {
      timerId = id;
      console.log('Timer Started.');
      console.log('Timer ID: ' + timerId);
    });
  };

  const stopTimer = () => {
    if (timerId !== null) {
      window.Main.stopPomodoro(timerId);
      timerId = null;
      console.log('Timer Stopped.');
    } else {
      console.log('Timer Not Started. Cannot Stop Timer.');
    }
  };

  // const timerUpdate = () => {
  //   window.Main.on('timer-update', (data: any) => {
  //     console.log(data);
  //   });
  // };

  useEffect(() => {
    const callback = (data: TimerData) => {
      try {
        setTimerData(data);
      } catch (error) {
        console.error('Failed to update timer data:', error);
      }
    };
    window.Main.on('timer-update', callback);
  }, []);

  return (
    <div className="flex flex-col flex-grow justify-center items-center h-full bg-gray-800 space-y-4">
      <h1 className="text-2xl text-gray-200">
        <span>BLOCK</span> TEST PAGE 1
      </h1>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={handleClick}
      >
        Block Process
      </button>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={startTimer}
      >
        Start Timer
      </button>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={stopTimer}
      >
        Stop Timer
      </button>
      {/* <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={timerUpdate}
      >
        Timer Update
      </button> */}
      {timerData && (
        <div>
          <p>{timerData.isWorking ? 'Work' : 'Break'} time</p>
          <p>Cycle count: {timerData.cycleCount}</p>
          <p>Duration: {timerData.duration} minutes</p>
          <p>Short break: {timerData.shortBreak} minutes</p>
          <p>Long break: {timerData.longBreak} minutes</p>
        </div>
      )}
    </div>
  );
};

export default BlockPageOne;
