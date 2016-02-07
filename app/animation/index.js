const angular = require('angular');
const name = 'connect-symbols.animation';

import { MoveUp } from './MoveUp';
import { MoveUpScroll } from './MoveUpScroll';

module.exports = name;

angular.module(name, [])

.directiveClass('moveUp', MoveUp)
.directiveClass('moveUpScroll', MoveUpScroll);
