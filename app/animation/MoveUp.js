const $ = require('jquery');

import { Directive } from '../shim/Directive';

export class MoveUp extends Directive {
  constructor() {
    super();

    this.restrict = 'A';
    this.scope = {
      top: '@',
    };
  }

  link(scope, elem, attr) {
    $(elem).animate({ top: scope.top }, 1000);
  }
}
