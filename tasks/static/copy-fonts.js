var gulp = require('gulp');

module.exports = function() {
  return gulp.src('fonts/**/*')
    .pipe(gulp.dest('build/fonts'));
};
