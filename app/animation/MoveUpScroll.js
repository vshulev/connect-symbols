const $ = require('jquery');

import { MoveUp } from './MoveUp';

export class MoveUpScroll extends MoveUp {
  /*@ngInject*/
  constructor(MoveService) {
    super(MoveService);
  }

  link(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(() => {
      scope.$apply(() => {
        if (!hasMoved) {
          this.move(elem, { top: scope.top });
        }
      });
    });
  }
}
