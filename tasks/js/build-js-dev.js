var browserify = require('browserify');
var buffer     = require('vinyl-buffer');
var gulp       = require('gulp');
var gutil      = require('gulp-util');
var source     = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var watchify   = require('watchify');

var b = watchify(browserify({ entries: ['app/index.js'], debug: true }));

function bundle() {
  return b
    .bundle()
    .pipe(source('app.js'))
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
