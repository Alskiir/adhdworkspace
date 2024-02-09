import { exec } from 'child_process';
import { ipcMain } from 'electron';

export const detectProcess = () => {
  ipcMain.handle('detectProcess', async (_event, ..._args) => {
    // Replace 'notepad' with the name of the process you want to detect
    let yourProcess = 'notepad';

    return new Promise((resolve, _reject) => {
      // Windows
      if (process.platform === 'win32') {
        exec(`tasklist | find /i "${yourProcess}.exe"`, (error: Error | null, stdout: string, _stderr: string) => {
          if (error || !stdout) {
            resolve(false);
            console.log('Process not found' + `${yourProcess}`);
          } else {
            resolve(true);
            console.log('Process found' + `${yourProcess}`);
          }
        });

        // Mac and Linux
      } else {
        exec(`pgrep ${yourProcess}`, (error: Error | null, stdout: string, _stderr: string) => {
          if (error || !stdout) {
            resolve(false);
            console.log('Process not found: ' + `${yourProcess}`);
          } else {
            resolve(true);
            console.log('Process found: ' + `${yourProcess}`);
          }
        });
      }
    });
  });
};
