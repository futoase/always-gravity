'use strict';

var Menu = require('menu');
var template = [{
  label: 'Always Gravity',
  submenu: [{
    label: 'About Always Gravity',
    selector: 'orderFrontStandardAboutPanel:'
  }, {
    type: 'separator'
  }, {
    label: 'Quit',
    accelerator: 'Command+Q',
    selector: 'terminate:'
  }]
}];

var menu = Menu.buildFromTemplate(template);
module.exports.template = menu;