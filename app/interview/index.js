var angular = require('angular');

module.exports = 'connect-symbols.interview';

angular.module('connect-symbols.interview', [])

.factory('Interview', require('./Interview'))
.controller('InterviewController', require('./InterviewController'))
.controller('InterviewSidebarController', require('./InterviewSidebarController'));
