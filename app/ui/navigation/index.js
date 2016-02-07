const angular = require('angular');
const name = 'connect-symbols.ui.navigation';

import { SideNav } from './SideNav';
import { SideNavDynamic } from './SideNavDynamic';

module.exports = name;

angular.module(name, [])

.directiveClass('sideNav', SideNav)
.directiveClass('sideNavDynamic', SideNavDynamic);
