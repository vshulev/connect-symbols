var express = require('express');

module.exports = function() {
  var app = express();
  app.use(express.static('build'));
  app.listen(8080);
  console.log('dev server listening on port 8080');
};
