var gulp = require('gulp');
var concat = require('gulp-concat');
var watch = require('gulp-watch');
var babel = require('gulp-babel');

gulp.task('concat', function(cb){
  return gulp.src([
    './app/src/base/helper.js',
    './app/src/base/config.js',
    './app/src/lib/**/*.js',
    './app/src/model/**/*.js',
    './app/src/base/boot.js'
  ])
  .pipe(concat('game.js'))
  .pipe(babel())
  .pipe(gulp.dest('./app/dest/'))
});

gulp.task('watch', function() {
  gulp.watch('app/src/**/**.js', ['concat']);
});

gulp.task('default', ['watch']);
