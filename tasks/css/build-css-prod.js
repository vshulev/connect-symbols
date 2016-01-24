var cssnano = require('gulp-cssnano');
var gulp    = require('gulp');

module.exports = function() {
  return gulp.src('build/main.css')
    .pipe(cssnano())
    .pipe(gulp.dest('build'));
};
