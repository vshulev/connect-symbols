var gulp = require('gulp');

module.exports = function() {
  return gulp.src('images/**/*')
    .pipe(gulp.dest('build/images'));
};
