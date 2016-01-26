var gulp = require('gulp');
var json = require('jsonfile');
var mark = require('marky-mark');

module.exports = function() {
  var interviews = mark.parseDirectorySync(__dirname + '/../interviews');
  json.writeFileSync('build/interviews.json', interviews);
};
