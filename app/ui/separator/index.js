const angular = require('angular');
const name = 'connect-symbols.ui.separator';

import { Separator } from './Separator';
import { SeparatorTop } from './SeparatorTop';
import { DynamicSeparator } from './DynamicSeparator';

module.exports = name;

angular.module(name, [])

.directiveClass('separator', Separator)
.directiveClass('separatorTop', SeparatorTop)
.directiveClass('dynamicSeparator', DynamicSeparator);
