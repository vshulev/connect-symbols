const angular = require('angular');

import { Logo } from './Logo';
import { CsContainer } from './CsContainer';

module.exports = 'connect-symbols';

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./routes'),
  require('./home'),
  require('./themen'),
])

.directive('csContainer', CsContainer.create(CsContainer))
.directive('moveUp', require('./moveUp'))
.directive('separator', require('./separator'))
.directive('dynamicSeparator', require('./dynamicSeparator'))
.directive('logo', Logo.create(Logo))
.directive('logoTop', require('./logoTop'))
.directive('navigation', require('./navigation'))
.directive('staticNavigation', require('./staticNavigation'));
