var gulp = require('gulp');

module.exports = function() {
  gulp.watch(['index.html', 'app/**/*.html'], ['copy-html']);
};
