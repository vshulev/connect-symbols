const angular = require('angular');

import { Directive } from './shim/Directive';

module.exports = 'connect-symbols';

// extend angular with the directiveClass function
// which enables registering ES6 classes as directives
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
  require('angular-sanitize'),

  require('./animation'),
  require('./data'),
  require('./home'),
  require('./personen'),
  require('./routes'),
  require('./themen'),
  require('./ui'),
]);
