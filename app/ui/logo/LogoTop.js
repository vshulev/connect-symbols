import { Directive } from '../../shim/Directive';

export class LogoTop extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div move-up top="-8rem" class="cs-logo-top"></div>
      </div>
    `;
  }
}
