class PomodoroTimer {
  workInterval: number;
  breakInterval: number;
  currentInterval: number;
  timerId: NodeJS.Timeout | null;
  isPaused: boolean;
  isWorking: boolean;
  killProcessFunction: (process: any) => void;
  updateRemainingTime: (time: number) => void;

  constructor(workInterval: number, breakInterval: number, killProcessFunction: (process: any) => void, updateRemainingTime: (time: number) => void) {
    this.workInterval = workInterval;
    this.breakInterval = breakInterval;
    this.currentInterval = this.workInterval;
    this.timerId = null;
    this.isPaused = false;
    this.isWorking = false;
    this.killProcessFunction = killProcessFunction;
    this.updateRemainingTime = updateRemainingTime;
  }

  start() {
    this.isWorking = true;
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  pause() {
    this.isPaused = true;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  resume() {
    this.isPaused = false;
    if (!this.timerId) {
      this.timerId = setInterval(() => this.tick(), 1000);
    }
  }

  reset() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
    this.currentInterval = this.workInterval;
    this.isWorking = false;
  }

  tick() {
    if (!this.isPaused && this.isWorking) {
      this.currentInterval--;
      this.updateRemainingTime(this.currentInterval);
      const processDetected = window.electron.detectProcess();
      console.log('Process Detected: ', processDetected);
      if (processDetected) {
        window.electron.killProcess();
        console.log('Kill Process');
      }
      if (this.currentInterval === 0) {
        this.isWorking = !this.isWorking;
        this.currentInterval = this.isWorking ? this.workInterval : this.breakInterval;
        if (this.isWorking) {
          this.killProcessFunction(window.electron.killProcess());
        }
      }
    }
  }
}

export default PomodoroTimer;
