import { SideNav } from './SideNav';

export class SideNavDynamic extends SideNav {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
    this.template = this.template.replace('cs-nav-side', 'cs-nav-side-dynamic');
  }

  link(scope, elem, attr) {
    this.move(elem, { top: '18rem' });
  }
}
