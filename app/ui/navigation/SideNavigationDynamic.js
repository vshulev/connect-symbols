import { SideNavigation } from './SideNavigation';

export class SideNavigationDynamic extends SideNavigation {
  /*@ngInject*/
  constructor(MoveService, Category) {
    super(Category);
    this.move = MoveService.move;
    this.template = this.template.replace('cs-nav-side', 'cs-nav-side-dynamic');
  }

  link(scope, elem, attr) {
    super.link(scope, elem, attr);
    this.move(elem, { top: '23rem' });
  }
}
