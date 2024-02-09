import { ipcRenderer, contextBridge } from 'electron';

declare global {
  interface Window {
    Main: typeof api;
    ipcRenderer: typeof ipcRenderer;
    electron: {
      killProcess: () => void;
      // detectProcess: () => void;
    };
  }
}

const api = {
  /**
   * Here you can expose functions to the renderer process
   * so they can interact with the main (electron) side
   * without security problems.
   *
   * The function below can accessed using `window.Main.sayHello`
   */
  sendMessage: (message: string) => {
    ipcRenderer.send('message', message);
  },
  /**
    Here function for AppBar
   */
  Minimize: () => {
    ipcRenderer.send('minimize');
  },
  Maximize: () => {
    ipcRenderer.send('maximize');
  },
  Close: () => {
    ipcRenderer.send('close');
  },
  /**
   * Provide an easier way to listen to events
   */
  on: (channel: string, callback: (data: any) => void) => {
    ipcRenderer.on(channel, (_, data) => callback(data));
  },
  killProcess: () => {
    ipcRenderer.send('killProcess');
  },
  // detectProcess: () => {
  //   ipcRenderer.send('detectProcess');
  // },
  startPomodoro: async (isWorking: boolean, duration: number, shortBreak: number, longBreak: number, cycles: number) => {
    const timerId = await ipcRenderer.invoke('start-pomodoro', isWorking, duration, shortBreak, longBreak, cycles);
    return timerId;
  },
  stopPomodoro: (timerId: NodeJS.Timeout) => {
    ipcRenderer.invoke('stop-pomodoro', timerId);
  },
};
contextBridge.exposeInMainWorld('Main', api);
/**
 * Using the ipcRenderer directly in the browser through the contextBridge ist not really secure.
 * I advise using the Main/api way !!
 */
contextBridge.exposeInMainWorld('ipcRenderer', ipcRenderer);

contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
  // we can also expose variables, not just functions
});
