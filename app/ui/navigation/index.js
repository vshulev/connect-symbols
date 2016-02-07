const angular = require('angular');
const name = 'connect-symbols.ui.navigation';

import { SideNav } from './SideNav';

module.exports = name;

angular.module(name, [])

.directiveClass('sideNav', SideNav);
