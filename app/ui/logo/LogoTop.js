import { Directive } from '../../shim/Directive';

export class LogoTop extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div ui-sref="home" move-up top="-7.7rem" class="cs-logo-top"></div>
      </div>
    `;
  }
}
