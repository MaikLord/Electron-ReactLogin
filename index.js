const { app, BrowserWindow } = require('electron');

let mainWindow;

app.on('ready', () => {

    mainWindow = new BrowserWindow({
        resizable: true,
        width: 1000,
        minWidth: 480,
        height: 600,
        minHeight: 550,
        autoHideMenuBar: true,
        icon: __dirname + '/logoicon.png'
    });


    mainWindow.loadURL('http://localhost:3000')

});