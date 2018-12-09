//应用入口
const {app, BrowserWindow} = require('electron');
const config = require('./config');
let win = null;

const createWin = function(){
	win = win || new BrowserWindow({width: 1000, height: 600});
	win.loadURL(config.chaturl);
	console.log(config.chaturl);
}

app.on('ready', createWin);