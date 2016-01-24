var angular = require('angular');

module.exports = 'connect-symbols.home';

angular.module('connect-symbols.home', [])

.directive('csDraggable', require('./csDraggable'))
.directive('csShaky', require('./csShaky'));
