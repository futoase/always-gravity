// Karma configuration
// Generated on Tue Jul 07 2015 12:19:38 GMT+0900 (JST)

module.exports = function(config) {
  config.set({
    basePath: '',
    plugins: [
      'karma-mocha',
      'karma-babel-preprocessor',
      'karma-electron-launcher',
      'karma-espower-preprocessor',
      'karma-mocha'
    ],
    frameworks: ['mocha'],
    files: [
      'app/public/js/kiwi-v1.3.0.js',
      'app/public/js/primitives-1.0.2.min.js',
      'app/dest/web/game.js',
      'node_modules/power-assert/build/power-assert.js',
      'app/spec/spec_helper.js',
      'app/spec/**/*.spec.js'
    ],
    exclude: [
    ],
    preprocessors: {
      'app/spec/spec_helper.js': ['babel'],
      'app/spec/**/*.spec.js': ['babel', 'espower']
    },
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Electron'],
    singleRun: true,
    proxies: {
      '/assets/': 'app/assets/'
    }
  })
}
