const angular = require('angular');

module.exports = 'connect-symbols';

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./routes'),
]);
