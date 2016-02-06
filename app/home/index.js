const angular = require('angular');
const name = 'connect-symbols.home';

module.exports = name;

angular.module(name, [])

.directive('home', require('./home'))
.directive('homeText', require('./homeText'));
