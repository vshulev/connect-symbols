const $ = require('jquery');

import { Directive } from './shim/Directive';

export class Logo extends Directive {
  /*@ngInject*/
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div move-up top="5rem" class="cs-logo"></div>
      </div>
    `;
  }
}
