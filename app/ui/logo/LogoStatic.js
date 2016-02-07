import { Directive } from '../../shim/Directive';

class LogoStatic extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = `
      <div class="text-center">
        <div class="cs-logo-static"></div>
      </div>
    `;
  }
}
