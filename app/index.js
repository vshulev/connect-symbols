const angular = require('angular');

module.exports = 'connect-symbols';

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./routes'),
  require('./home'),
])

.directive('csContainer', require('./csContainer'))
.directive('moveUp', require('./moveUp'))
.directive('separator', require('./separator'))
.directive('logo', require('./logo'))
.directive('navigation', require('./navigation'));
