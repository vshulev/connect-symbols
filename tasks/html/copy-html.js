var gulp = require('gulp');

module.exports = function() {
  return gulp.src(['index.html', 'app/**/*.html'])
    .pipe(gulp.dest('build'));
};
