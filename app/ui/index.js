const angular = require('angular');
const name = 'connect-symbols.name';

import { CsContainer } from './CsContainer';

module.exports = name;

angular.module(name, [
  require('./logo'),
  require('./navigation'),
  require('./paragraph'),
  require('./separator'),
])

.directiveClass('csContainer', CsContainer);
