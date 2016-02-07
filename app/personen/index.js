const angular = require('angular');
const name = 'connect-symbols.personen';

import { Personen } from './Personen';

module.exports = name;

angular.module(name, [])

.directiveClass('personen', Personen);
