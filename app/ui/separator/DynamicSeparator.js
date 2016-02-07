import { Separator } from './Separator';

export class DynamicSeparator extends Separator {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '18rem' });
  }
}
