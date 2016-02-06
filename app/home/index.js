const angular = require('angular');

let name = 'connect-symbols.home';

module.exports = name;

angular.module(name, [])

.directive('home', require('./home'));
