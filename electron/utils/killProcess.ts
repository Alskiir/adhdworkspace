import { exec } from 'child_process';
import { ipcMain } from 'electron';

export const killProcess = () => {
  ipcMain.on('killProcess', (_event, ..._args) => {
    // Replace 'notepad' with the name of the process to kill
    let yourProcess = 'notepad';

    if (process.platform === 'win32') {
      exec(`taskkill /IM ${yourProcess}.exe /F`, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    } else {
      exec(`pkill ${yourProcess}`, (error: Error | null, stdout: string, stderr: string) => {
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });
    }
  });
};
