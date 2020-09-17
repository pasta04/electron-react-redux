import { BrowserWindow } from 'electron';

declare global {
  namespace electron {
    let mainWindow: BrowserWindow;
  }
}

export {};
