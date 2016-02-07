import { SideNavigation } from './SideNavigation';

export class SideNavigationHiding extends SideNavigation {
  /*@ngInject*/
  constructor(MoveService) {
    super();
    this.move = MoveService.move;
    this.template =
      '<div class="cs-nav-side-hover-area">' +
      this.template +
      '</div>';
  }

  link(scope, elem, attr) {
    this.sidenav = elem.children();
    this._hide();

    elem.on('mouseover', () => this._show());
    elem.on('mouseleave', () => this._hide());
  }

  _show() {
    this.move(this.sidenav, { left: '1rem' }, 100);
  }

  _hide() {
    this.move(this.sidenav, { left: '-100rem' });
  }
}
