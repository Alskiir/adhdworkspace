export function startPomodoro(isWorking: boolean, duration: number, shortBreak: number, longBreak: number, cycles: number): NodeJS.Timeout {
  let cycleCount = 0;
  isWorking = true;

  const timer = setInterval(() => {
    console.log('Timer is running');
    if (isWorking) {
      console.log(`Work for ${duration} minutes.`);
    } else {
      if (cycleCount < cycles) {
        console.log(`Take a short break for ${shortBreak} minutes.`);
        cycleCount++;
      } else {
        console.log(`Take a long break for ${longBreak} minutes.`);
        cycleCount = 0;
      }
    }
    isWorking = !isWorking;
  }, duration * 60 * 1000);

  return timer; // return the timer so it can be cleared later
}

export function stopPomodoro(timer: NodeJS.Timeout): void {
  clearInterval(timer);
}
