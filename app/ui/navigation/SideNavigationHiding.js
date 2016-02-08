const $ = require('jquery');

import { SideNavigation } from './SideNavigation';

export class SideNavigationHiding extends SideNavigation {
  /*@ngInject*/
  constructor(MoveService, Category) {
    super(Category);
    this.move = MoveService.move;
    this.template = `
      <div>
        ${ this.template }
        <div class="cs-nav-show-arrow"></div>
      </div>
    `;

    this.isShowing = true;
  }

  link(scope, elem, attr) {
    super.link(scope, elem, attr);

    this.sidenav = $(elem).children('.cs-nav-side');
    this.arrow = $(elem).children('.cs-nav-show-arrow');
    this._hide();
  }

  _show() {
    this._unbindAll();
    this.arrow.hide();
    this.sidenav.bind('mouseleave', () => this._hide());
    this.move(this.sidenav, { left: '1rem' }, 500);
  }

  _hide() {
    this._unbindAll();
    this.move(this.sidenav, { left: '-100rem' }).then(() => {
      this.arrow.show();
      this.arrow.bind('mouseover', () => this._show());
    });
  }

  _unbindAll() {
    this.sidenav.unbind();
    this.arrow.unbind();
  }
}
