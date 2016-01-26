const angular = require('angular');

module.exports = 'connect-symbols.people';

angular.module('connect-symbols.people', [])

.controller('PeopleController', require('./PeopleController'));
