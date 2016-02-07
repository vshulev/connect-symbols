const angular = require('angular');
const name = 'connect-symbols.themen';

import { Thema } from './Thema';

module.exports = name;

angular.module(name, [])

.directive('themen', require('./themen'))
.directiveClass('thema', Thema);
