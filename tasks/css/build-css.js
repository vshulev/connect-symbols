var gulp = require('gulp');
var sass = require('gulp-sass');

module.exports = function() {
  return gulp.src('styles/main.scss')
    .pipe(sass({ includePaths: ['node_modules'] })
    .on('error', sass.logError))
    .pipe(gulp.dest('build'));
};
