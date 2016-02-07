const $ = require('jquery');

import { Directive } from '../shim/Directive';

export class CsContainer extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.transclude = true;
    this.replace = true;
    this.template = `
      <div class="container-fluid">
        <div class="row" ng-transclude>
        </div>
      </div>
    `;
  }

  link(scope, elem, attr) {
    $(elem).height($(window).height());
    $(elem).css({ overflow: 'hidden' });
  }
}
