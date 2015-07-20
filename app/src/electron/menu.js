const Menu = require('menu');
const template = [
  {
    label: 'Always Gravity',
    submenu: [
      {
        label: 'About Always Gravity',
        selector: 'orderFrontStandardAboutPanel:',
      },
      {
        type: 'separator',
      },
      {
        label: 'Quit',
        accelerator: 'Command+Q',
        selector: 'terminate:',
      }
    ],
  },
];

const menu = Menu.buildFromTemplate(template);
module.exports.template = menu;
