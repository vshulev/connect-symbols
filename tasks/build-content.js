var gulp = require('gulp');
var json = require('jsonfile');
var mark = require('marky-mark');

module.exports = function() {
  //return gulp.src('interviews/**/*.png')
  //  .pipe(gulp.dest('build/images/interviews'));

  var interviews = mark.parseDirectorySync(__dirname + '/../interviews');
  json.writeFileSync('build/interviews.json', interviews);
};
