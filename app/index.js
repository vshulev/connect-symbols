const angular = require('angular');

import { Directive } from './shim/Directive';
import { Logo } from './Logo';

module.exports = 'connect-symbols';

// extend angular with the directive class function
let moduleFn = angular.module.bind(angular);
angular.module = function(name, deps) {
  let moduleApi = moduleFn(name, deps);
  let directiveFn = moduleApi.directive.bind(moduleApi);
  moduleApi.directiveClass = function(name, definition) {
    return directiveFn(name, Directive.create(definition));
  };

  return moduleApi;
};

angular.module('connect-symbols', [
  require('angular-ui-router'),
  require('./animation'),
  require('./ui'),
  require('./routes'),
  require('./home'),
  require('./themen'),
])

.directive('separator', require('./separator'))
.directive('dynamicSeparator', require('./dynamicSeparator'))
.directive('navigation', require('./navigation'))
.directive('staticNavigation', require('./staticNavigation'));
