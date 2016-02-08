var angular = require('angular');

module.exports = 'connect-symbols.routes';

angular.module('connect-symbols.routes', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      template: '<home></home>',
    })

    .state('projekt', {
      url: '/projekt',
      template: '<projekt></projekt>',
    })

    .state('themen', {
      url: '/themen',
      template: '<themen></themen>',
    })

    .state('thema', {
      url: '/thema/:id',
      template: '<thema></thema>',
    })

    .state('personen', {
      url: '/personen',
      template: '<personen></personen>',
    });
}]);
