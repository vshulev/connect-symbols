const angular = require('angular');

import { Logo } from './logo';

module.exports = 'connect-symbols';

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
.directive('logo', () => new Logo())
.directive('logoTop', require('./logoTop'))
.directive('navigation', require('./navigation'))
.directive('staticNavigation', require('./staticNavigation'));
