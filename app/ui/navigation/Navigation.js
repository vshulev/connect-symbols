import { NavigationStatic } from './NavigationStatic';

export class Navigation extends NavigationStatic {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '5rem' });
  }
}
