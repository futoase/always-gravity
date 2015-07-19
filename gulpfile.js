var gulp = require('gulp');
var concat = require('gulp-concat');
var electron = require('gulp-electron');
var watch = require('gulp-watch');
var babel = require('gulp-babel');
var eslint = require('gulp-eslint');
var del = require('del');
var packageJson = require('./app/package.json');

gulp.task('clean', ['eslint'], function(done) {
  del([
    './tmp',
  ], done);
});

gulp.task('eslint', function() {
  return gulp.src([
    './app/src/base/helper.js',
    './app/src/base/config.js',
    './app/src/base/config/**/*.js',
    './app/src/state/main.js',
    './app/src/state/title.js',
    './app/src/state/play.js',
    './app/src/lib/**/*.js',
    './app/src/model/**/*.js',
    './app/src/base/boot.js'
    ])
    .pipe(concat('game.eslint.js'))
    .pipe(gulp.dest('./tmp'))
    .pipe(eslint({
      useEslintrc: true,
      globals: {
        "Kiwi": true,
        "GameConfig": true,
        "GameState": true,
        "ipc": true
      }
    }))
    .pipe(eslint.format())
    .pipe(eslint.failOnError());
});

gulp.task('electron', function() {
  return gulp.src('')
    .pipe(electron({
      src: './app',
      packageJson: packageJson,
      release: './release',
      cache: './cache',
      version: 'v0.30.0',
      packaging: true,
      platforms: ['darwin-x64'],
      platformResources: {
        darwin: {
          CFBundleDisplayName: packageJson.name,
          CFBundleIdentifier: packageJson.name,
          CFBundleName: packageJson.name,
          CFBundleVersion: packageJson.version,
          icon: 'always-gravity.icns'
        }
      }
    }))
    .pipe(gulp.dest(''));
});

gulp.task('concat', function(){
  return gulp.src([
    './app/src/base/helper.js',
    './app/src/base/config.js',
    './app/src/base/config/**/*.js',
    './app/src/state/main.js',
    './app/src/state/title.js',
    './app/src/state/play.js',
    './app/src/lib/**/*.js',
    './app/src/model/**/*.js',
    './app/src/base/boot.js'
  ])
  .pipe(concat('game.js'))
  .pipe(babel())
  .pipe(gulp.dest('./app/dest/'));
});

gulp.task('watch', function() {
  gulp.watch('app/src/**/**.js', ['eslint', 'concat', 'clean']);
});

gulp.task('default', ['watch']);
