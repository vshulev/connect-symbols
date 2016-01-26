const angular = require('angular');

module.exports = 'connect-symbols.icon';

angular.module('connect-symbols.icon', [])

.directive('csDraggable', require('./csDraggable'))
.directive('csDroppable', require('./csDroppable'))
.directive('csIconGrid', require('./csIconGrid'))
.directive('csIcon', require('./csIcon'))
.factory('ConnectionChecker', require('./ConnectionChecker'));
