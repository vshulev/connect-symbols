const angular = require('angular');
const name = 'connect-symbols.projekt';

import { Projekt } from './Projekt';

module.exports = name;

angular.module(name, [])

.directiveClass('projekt', Projekt);
