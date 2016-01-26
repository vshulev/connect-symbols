var angular = require('angular');

module.exports = 'connect-symbols.routes';

angular.module('connect-symbols.routes', [])

.config(['$stateProvider', function($stateProvider) {
  $stateProvider
    .state('home', {
      url: '',
      templateUrl: 'home/home.html',
      controller: 'HomeController',
      controllerAs: 'vm',
      resolve: {
        interviews: interviewsResolveCtrl,
      },
    })
    .state('interview', {
      url: '/interview/:id',
      templateUrl: 'interview/interview.html',
      controller: 'InterviewController',
      controllerAs: 'vm',
      resolve: {
        interview: interviewResolveCtrl,
      },
    });

  interviewsResolveCtrl.$inject = ['Interview'];
  function interviewsResolveCtrl(Interview) {
    return Interview.query();
  }

  interviewResolveCtrl.$inject = ['Interview', '$stateParams'];
  function interviewResolveCtrl(Interview, $stateParams) {
    return Interview.get($stateParams.id);
  }
}]);
