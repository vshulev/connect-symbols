const $ = require('jquery');

import { Directive } from './shim/Directive';

export class Logo extends Directive {
  constructor() {
    super();
    console.log('done constructing...');

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center"><div move-up top="5rem" class="cs-logo"></div>
    `;
  }

  link(scope, elem, attr) {
    console.log('hello, I am link..', this.restrict, '..and I have kept my binding');
  }
}
