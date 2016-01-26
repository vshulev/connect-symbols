const angular = require('angular');

module.exports = 'connect-symbols';

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('angular-sanitize'),
  require('./routes'),
  require('./home'),
  require('./icon'),
  require('./interview'),
  require('./people'),
])

.factory('Settings', require('./Settings'));
