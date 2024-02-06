import React, { useEffect, useState } from 'react';
import PomodoroTimer from '../../pomodoroTimer/pomodoro';

const BlockPageOne: React.FC = () => {
  const [workInterval, setWorkInterval] = useState(25);
  const [breakInterval, setBreakInterval] = useState(5);
  const [remainingTime, setRemainingTime] = useState(0);
  const [timer, setTimer] = useState<PomodoroTimer | null>(null);

  useEffect(() => {
    const pomodoroTimer = new PomodoroTimer(workInterval * 60, breakInterval * 60, window.electron.killProcess, setRemainingTime);
    setTimer(pomodoroTimer);
    pomodoroTimer.start();

    return () => {
      pomodoroTimer.reset();
    };
  }, [workInterval, breakInterval]);

  const handleClick = () => {
    if (timer) {
      timer.pause();
      window.electron.killProcess();
      console.log('Kill Process');
      timer.resume();
    }
  };

  return (
    <div className="flex flex-col flex-grow justify-center items-center h-full bg-gray-800 space-y-4">
      <h1 className="text-2xl text-gray-200">
        <span>BLOCK</span> TEST PAGE 1
      </h1>
      <div>
        <label>
          Work Interval (minutes):
          <input type="number" value={workInterval} onChange={e => setWorkInterval(Number(e.target.value))} />
        </label>
        <label>
          Break Interval (minutes):
          <input type="number" value={breakInterval} onChange={e => setBreakInterval(Number(e.target.value))} />
        </label>
      </div>
      <div>Remaining Time: {remainingTime}</div>
      <button
        className="flex items-center justify-center bg-blue-500 hover:bg-blue-700 active:bg-blue-800 text-white font-bold py-2 px-4 rounded mb-2"
        onClick={handleClick}
      >
        Block Process
      </button>
    </div>
  );
};

export default BlockPageOne;