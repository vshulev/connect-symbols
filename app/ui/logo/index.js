const angular = require('angular');
const name = 'connect-symbols.ui.logo';

import { Logo } from './Logo';
import { LogoStatic } from './LogoStatic';
import { LogoTop } from './LogoTop';

module.exports = name;

angular.module(name, [])

.directiveClass('logo', Logo)
.directiveClass('logoStatic', LogoStatic)
.directiveClass('logoTop', LogoTop);
