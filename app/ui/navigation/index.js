const angular = require('angular');
const name = 'connect-symbols.ui.navigation';

import { SideNavigation } from './SideNavigation';
import { SideNavigationDynamic } from './SideNavigationDynamic';

module.exports = name;

angular.module(name, [])

.directiveClass('sideNavigation', SideNavigation)
.directiveClass('dynamicSideNavigation', SideNavigationDynamic);
