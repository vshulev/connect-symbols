import { Directive } from '../../shim/Directive';

export class Separator extends Directive {
  constructor() {
    super();

    this.restrict = 'E';
    this.replace = true;
    this.template = '<div class="cs-separator"></div>';
  }
}
