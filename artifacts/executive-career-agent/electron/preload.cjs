const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('desktopShell', {
  platform: process.platform,
  version: process.versions.electron,
});