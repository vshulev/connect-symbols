const angular = require('angular');
const name = 'connect-symbols.ui.logo';

import { Logo } from './Logo';
import { LogoTop } from './LogoTop';

module.exports = name;

angular.module(name, [])

.directiveClass('logo', Logo)
.directiveClass('logoTop', LogoTop);
