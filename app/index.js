const angular = require('angular');

module.exports = 'connect-symbols';

console.log(angular.module);

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./routes'),
  require('./home'),
  require('./themen'),
])

.directive('csContainer', require('./csContainer'))
.directive('moveUp', require('./moveUp'))
.directive('separator', require('./separator'))
.directive('dynamicSeparator', require('./dynamicSeparator'))
.directive('logo', require('./logo'))
.directive('logoTop', require('./logoTop'))
.directive('navigation', require('./navigation'))
.directive('staticNavigation', require('./staticNavigation'));
