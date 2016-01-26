var gulp = require('gulp');
var json = require('jsonfile');
var mark = require('marky-mark');
var yaml = require('yamljs');

module.exports = function() {
  // build interviews
  var interviews = mark.parseDirectorySync(__dirname + '/../interviews');
  json.writeFileSync('build/interviews.json', interviews);

  // build settings
  var icons = yaml.load('settings/icon-order.yml');
  var interviews = yaml.load('settings/interview-order.yml');
  var settings = { icons: icons, interviews: interviews };
  json.writeFileSync('build/settings.json', settings);
};
