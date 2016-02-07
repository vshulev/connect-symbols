const $ = require('jquery');

import { MoveUp } from './MoveUp';

export class MoveUpScroll extends MoveUp {
  constructor() {
    super();
  }

  link(scope, elem, attr) {
    let hasMoved = false;
    $(window).scroll(() => {
      scope.$apply(() => {
        if (!hasMoved) {
          $(elem).animate({ top: scope.top }, 1000);
        }
      });
    });
  }
}
