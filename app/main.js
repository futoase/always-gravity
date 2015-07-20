var app = require('app');
var ipc = require('ipc');
var BrowserWindow = require('browser-window');
var Menu = require('menu');
var applicationMenu = require('./dest/electron/menu');

require('crash-reporter').start();

var mainWindow = null;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    'min-width': 800,
    'min-height': 600,
    'max-width': 800,
    'max-height': 600,
    'use-content-size': true
  });
  mainWindow.loadUrl('file://' + __dirname + '/index.html');
  //mainWindow.openDevTools();
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
  Menu.setApplicationMenu(applicationMenu.template);
});

ipc.on('quit', function(event, arg) {
  app.quit();
});
