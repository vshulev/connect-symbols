const angular = require('angular');
const name = 'connect-symbols.animation';

import { MoveUp } from './MoveUp';
import { MoveUpScroll } from './MoveUpScroll';
import { MoveLeft } from './MoveLeft';
import { MoveService } from './MoveService';

module.exports = name;

angular.module(name, [])

.directiveClass('moveUp', MoveUp)
.directiveClass('moveUpScroll', MoveUpScroll)
.directiveClass('moveLeft', MoveLeft)
.service('MoveService', MoveService);
