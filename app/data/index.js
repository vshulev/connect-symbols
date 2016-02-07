const angular = require('angular');
const name = 'connect-symbols.data';

import { Category } from './Category';
import { Interview } from './Interview';
import { Person } from './Person';

module.exports = name;

angular.module(name, [])

.service('Category', Category)
.service('Interview', Interview)
.service('Person', Person);
