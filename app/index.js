var angular = require('angular');

module.exports = 'connect-symbols';

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./routes'),
  require('./home'),
  require('./icon'),
  require('./interview'),
])

.factory('Settings', require('./Settings'));
