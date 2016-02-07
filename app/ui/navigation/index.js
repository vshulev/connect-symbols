const angular = require('angular');
const name = 'connect-symbols.ui.navigation';

import { Navigation } from './Navigation';
import { NavigationStatic } from './NavigationStatic';
import { SideNavigation } from './SideNavigation';
import { SideNavigationDynamic } from './SideNavigationDynamic';
import { SideNavigationHiding } from './SideNavigationHiding';

module.exports = name;

angular.module(name, [])

.directiveClass('navigation', Navigation)
.directiveClass('staticNavigation', NavigationStatic)
.directiveClass('sideNavigation', SideNavigation)
.directiveClass('dynamicSideNavigation', SideNavigationDynamic)
.directiveClass('hidingSideNavigation', SideNavigationHiding);
