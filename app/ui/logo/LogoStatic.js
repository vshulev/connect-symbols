import { Directive } from '../../shim/Directive';

export class LogoStatic extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div ui-sref="home" class="cs-logo-static"></div>
      </div>
    `;
  }
}
