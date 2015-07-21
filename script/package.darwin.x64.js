var path = require('path');
var packager = require('electron-packager');
var packageJson = require(path.resolve(__dirname, '../app/package.json'));
var option = {
  'dir': path.resolve(__dirname, '../app'),
  'name': packageJson.name,
  'platform': 'darwin',
  'arch': 'x64',
  'version': '0.30.0',
  'out': path.resolve(__dirname, '../release'),
  'icon': path.resolve(__dirname, '../always-gravity.icns'),
  'app-version': packageJson.version,
  'overwrite': true,
  'asar': true,
};

packager(option, function (err, appPath) {
  if (err) {
    console.log('BuildError! :' + err);
    process.exit(1);
  } else {
    console.log('Build to -> ' + appPath);
  }
});
