var gulp = require('gulp');
var del  = require('del');

gulp.task('clean', () => del(['build/**/*']));

// CSS
gulp.task('build-css', require('./tasks/css/build-css'));
gulp.task('build-css:prod', ['build-css'], require('./tasks/css/build-css-prod'));
gulp.task('watch-css', ['build-css'], require('./tasks/css/watch-css'));

// HTML
gulp.task('copy-html', require('./tasks/html/copy-html'));
gulp.task('watch-html', ['copy-html'], require('./tasks/html/watch-html'));

// static assets
gulp.task('copy-images', require('./tasks/static/copy-images'));
gulp.task('copy-fonts', require('./tasks/static/copy-fonts'));
gulp.task('copy-static-assets', ['copy-images', 'copy-fonts']);

// JS
gulp.task('build-js:dev', require('./tasks/js/build-js-dev'));
gulp.task('build-js:prod', require('./tasks/js/build-js-prod'));

// build and run dev server
gulp.task('build:dev', [
  'watch-css',
  'watch-html',
  'build-js:dev',
  'copy-static-assets',
], require('./tasks/run-dev-server'));

// production build
gulp.task('build:prod', [
  'build-css:prod',
  'copy-html',
  'build-js:prod',
  'copy-static-assets',
]);

// deploy
gulp.task('deploy', ['build:prod'], require('./tasks/deploy'));

// default task
gulp.task('default', ['build:dev']);
