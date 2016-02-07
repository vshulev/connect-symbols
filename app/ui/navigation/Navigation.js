import { NavigationStatic } from './NavigationStatic';

export class Navigation extends NavigationStatic {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
  }

  link(scope, elem, attr) {
    console.log('should move');
    this.move(elem, { top: '5rem' });
  }
}
