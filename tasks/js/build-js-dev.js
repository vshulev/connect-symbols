var annotate   = require('gulp-ng-annotate');
var babelify   = require('babelify');
var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify   = require('watchify');

var b = browserify({ entries: ['app/index.js'], debug: true })
  .transform(babelify, { presets: ['es2015'] });
var w = watchify(b);

function bundle() {
  return w
    .bundle()
    .pipe(source('app.js'))
    .pipe(annotate())
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('build'));
}

b.on('update', bundle);
b.on('log', gutil.log);

module.exports = function() {
  return bundle();
};
