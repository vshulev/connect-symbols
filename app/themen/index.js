const angular = require('angular');
const name = 'connect-symbols.themen';

module.exports = name;

angular.module(name, [])

.directive('themen', require('./themen'));
