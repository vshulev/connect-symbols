const $ = require('jquery');

import { Directive } from '../shim/Directive';

export class MoveUp extends Directive {
  /*@ngInject*/
  constructor(MoveService) {
    super();

    this.move = MoveService.move;
    this.restrict = 'A';
    this.scope = {
      top: '@',
    };
  }

  link(scope, elem, attr) {
    this.move(elem, { top: scope.top });
  }
}
