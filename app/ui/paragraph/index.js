const angular = require('angular');
const name = 'connect-symbols.ui.paragraph';

import { Paragraph } from './Paragraph';
import { ParagraphTop } from './ParagraphTop';

module.exports = name;

angular.module(name, [])

.directiveClass('paragraph', Paragraph)
.directiveClass('paragraphTop', ParagraphTop);
