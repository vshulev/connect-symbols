var annotate   = require('gulp-ng-annotate');
var babelify   = require('babelify');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var uglify     = require('gulp-uglify');
var yamlify    = require('yamlify');

function bundle(b) {
  return b
    .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(annotate())
    .pipe(uglify())
    .pipe(gulp.dest('build'));
}

module.exports = function() {
  var b = browserify({ entries: ['app/index.js'], debug: true })
    .transform(babelify, { presets: ['es2015'] })
    .transform(yamlify);
  b.on('update', bundle.bind({ b: b }));
  b.on('log', gutil.log);
  return bundle(b);
};
