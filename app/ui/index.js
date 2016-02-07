const angular = require('angular');
const name = 'connect-symbols.name';

import { CsContainer } from './CsContainer';

module.exports = name;

angular.module(name, [
  require('./logo'),
  require('./navigation'),
  require('./separator'),
])

.directiveClass('csContainer', CsContainer);
