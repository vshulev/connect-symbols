const angular = require('angular');

import { Directive } from './shim/Directive';

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
  require('./routes'),
  require('./home'),
  require('./personen'),
  require('./themen'),
  require('./ui'),
]);
