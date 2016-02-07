import { Directive } from '../shim/Directive';

export class MoveLeft extends Directive {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
    this.scope = {
      left: '@',
    };
  }

  link(scope, elem, attr) {
    this.move(elem, { left: scope.left });
  }
}
