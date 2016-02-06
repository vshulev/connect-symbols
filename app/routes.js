var angular = require('angular');

module.exports = 'connect-symbols.routes';

angular.module('connect-symbols.routes', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: '<home></home>',
    });
}]);
