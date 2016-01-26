var angular = require('angular');

module.exports = 'connect-symbols.routes';

angular.module('connect-symbols.routes', [])

.config(['$stateProvider', function($stateProvider) {
  let homeContentView = {
    templateUrl: 'home/home.html',
  };

  let interviewContentView = {
    templateUrl: 'interview/interview.html',
    controller: 'InterviewController',
    controllerAs: 'vm',
    resolve: {
      interview: interviewResolveCtrl,
    },
  };

  let interviewSidebarView = {
    templateUrl: 'interview/sidebar.html',
    controller: 'InterviewSidebarController',
    controllerAs: 'vm',
    resolve: {
      interview: interviewResolveCtrl,
    },
  };

  let peopleContentView = {
    templateUrl: 'people/people.html',
    controller: 'PeopleController',
    controllerAs: 'vm',
  };

  $stateProvider
    .state('home', {
      url: '',
      views: {
        content: homeContentView,
      },
    })
    .state('interview', {
      url: '/interview/:id',
      views: {
        content: interviewContentView,
        sidebar: interviewSidebarView,
      },
    })
    .state('people', {
      url: '/people',
      views: {
        content: peopleContentView,
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
