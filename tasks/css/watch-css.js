var gulp = require('gulp');

module.exports = function() {
  gulp.watch('styles/**/*.scss', ['build-css']);
};
