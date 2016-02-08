import { Directive } from '../../shim/Directive';

export class Logo extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div ui-sref="home" move-up top="5rem" class="cs-logo"></div>
      </div>
    `;
  }
}
