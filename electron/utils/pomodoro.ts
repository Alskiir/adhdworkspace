export class Pomodoro {
  time: number = 0;
  timerId: NodeJS.Timeout | null = null;

  start(time: number, callback: (time: number) => void) {
    this.time = time;
    this.timerId = setInterval(() => {
      this.time--;
      callback(this.time);
      if (this.time <= 0) this.stop();
    }, 1000);
  }

  stop() {
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
}
